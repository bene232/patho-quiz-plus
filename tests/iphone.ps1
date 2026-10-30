# iPhone-Simulation für die UI-Kontrollpunkte von tests/ui.html.
# Drives headless Edge via the DevTools protocol: iPhone 14/15 (390 px wide, Retina 3×), touch input, Safari user agent.
# Like the installed app with status-bar-style “default”: content starts below the status bar (844 − 47 = 797 px tall,
# safe area top 0), 34 px safe area at the bottom with home indicator (turn off with -NoNotch).
# Takes screenshots, reports horizontal overflow and tests swiping the speed-round card by finger.
# Note: this is Chromium with iPhone dimensions, not real Safari/WebKit.
# Usage: powershell -ExecutionPolicy Bypass -File tests\iphone.ps1 [-OutDir <folder>] [-Theme dark] [-NoNotch] [-Shots a,b]
param(
  [string]$OutDir = (Join-Path $env:TEMP 'patho-iphone'),
  [string[]]$Shots = @('welcome', 'home-empty', 'practice-setup', 'quiz-single', 'quiz-kprim', 'quiz-tf', 'feedback-single', 'feedback-kprim-wrong',
    'result', 'home-progress', 'chapter', 'chapter-pick', 'quiz-menu', 'exam-setup', 'exam-grid', 'blitz', 'blitz-wrong',
    'stats', 'badges', 'pause', 'celebrate', 'settings'),
  [ValidateSet('light', 'dark')][string]$Theme = 'light',
  [switch]$NoNotch,
  [int]$Port = 9333
)
$ErrorActionPreference = 'Stop'
$Shots = @($Shots | ForEach-Object { $_ -split ',' } | Where-Object { $_ })  # -File passes “a,b” through as a single string
$edge =Join-Path ${env:ProgramFiles(x86)} 'Microsoft\Edge\Application\msedge.exe'
$pageUrl = 'file:///' + ($PSScriptRoot -replace '\\', '/') + '/ui.html'
New-Item -ItemType Directory -Force $OutDir | Out-Null
# Own short profile path (long paths fail on Windows); reused, ui.html clears storage itself
$profileDir = Join-Path $env:TEMP 'patho-iphone-edge'

function Stop-SimEdge {
  Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -like "*$profileDir*" } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
}

Start-Process $edge -ArgumentList @('--headless=new', "--remote-debugging-port=$Port", "--user-data-dir=`"$profileDir`"",
  '--allow-file-access-from-files', '--no-first-run', 'about:blank') | Out-Null

# The first start with a fresh profile can take over 10 s
$wsUrl = $null
for ($i = 0; $i -lt 150 -and -not $wsUrl; $i++) {
  Start-Sleep -Milliseconds 200
  try {
    # PowerShell 5.1 passes the JSON array on as a single object, so enumerate it item by item
    $targets = @(Invoke-RestMethod "http://127.0.0.1:$Port/json/list" -TimeoutSec 3) | ForEach-Object { $_ }
    $wsUrl = @($targets | Where-Object { $_.type -eq 'page' })[0].webSocketDebuggerUrl
  } catch { }
}
if (-not $wsUrl) { Stop-SimEdge; throw 'Edge-DevTools nicht erreichbar' }
$client = New-Object System.Net.WebSockets.ClientWebSocket
$ct = [Threading.CancellationToken]::None
$client.ConnectAsync([Uri]$wsUrl, $ct).Wait()
$script:msgId = 0
$buf = New-Object byte[] 1048576

# Send a command and wait for its response (events in between are skipped)
function Send-Cdp([string]$method, $params = @{}) {
  $script:msgId++
  $id = $script:msgId
  $json = @{ id = $id; method = $method; params = $params } | ConvertTo-Json -Depth 10 -Compress
  $bytes = [Text.Encoding]::UTF8.GetBytes($json)
  $client.SendAsync([ArraySegment[byte]]::new($bytes), [Net.WebSockets.WebSocketMessageType]::Text, $true, $ct).Wait()
  while ($true) {
    $ms = New-Object IO.MemoryStream
    do {
      $res = $client.ReceiveAsync([ArraySegment[byte]]::new($buf), $ct).Result
      $ms.Write($buf, 0, $res.Count)
    } while (-not $res.EndOfMessage)
    $text = [Text.Encoding]::UTF8.GetString($ms.ToArray())
    if ($text -match ('^\{"id":' + $id + ',')) {
      if ($text -match '^\{"id":\d+,"error"') { throw "CDP ${method}: $text" }
      return $text
    }
  }
}

# Run JavaScript; expressions return numbers/booleans or JSON strings
function Invoke-Js([string]$expr) {
  (Send-Cdp 'Runtime.evaluate' @{ expression = $expr; returnByValue = $true; awaitPromise = $true } | ConvertFrom-Json).result.result.value
}

function Save-Shot([string]$name) {
  $r = Send-Cdp 'Page.captureScreenshot' @{ format = 'png' }
  if ($r -match '"data":"([^"]+)"') { [IO.File]::WriteAllBytes((Join-Path $OutDir "$name.png"), [Convert]::FromBase64String($Matches[1])) }
}

function Send-Touch([string]$type, [double]$x = 0, [double]$y = 0) {
  $pts = @()
  if ($type -ne 'touchEnd') { $pts = @(@{ x = $x; y = $y; id = 1 }) }
  Send-Cdp 'Input.dispatchTouchEvent' @{ type = $type; touchPoints = $pts } | Out-Null
}

function Move-Touch([double]$x0, [double]$y0, [double]$x1, [double]$y1, [int]$steps = 10) {
  for ($s = 1; $s -le $steps; $s++) {
    Send-Touch 'touchMove' ($x0 + ($x1 - $x0) * $s / $steps) ($y0 + ($y1 - $y0) * $s / $steps)
    Start-Sleep -Milliseconds 16
  }
}

# Home indicator as an overlay and bottom safe-area inset as in the installed app
$notchJs = @'
(() => {
  const s = document.createElement('style');
  s.textContent = ':root{--safe-bottom:34px!important}' +
    '#sim-home{position:fixed;bottom:8px;left:50%;width:134px;height:5px;margin-left:-67px;border-radius:3px;background:#111;opacity:.85;z-index:9999;pointer-events:none}' +
    '@media (prefers-color-scheme: dark){:root:not([data-theme=light]) #sim-home{background:#f2f2f2}}:root[data-theme=dark] #sim-home{background:#f2f2f2}';
  document.head.append(s);
  document.body.append(Object.assign(document.createElement('div'), { id: 'sim-home' }));
  return true;
})()
'@

function Open-Shot([string]$shot) {
  Send-Cdp 'Page.navigate' @{ url = "${pageUrl}?shot=$shot&theme=$Theme" } | Out-Null
  $ready = $false
  for ($i = 0; $i -lt 300 -and -not $ready; $i++) {
    Start-Sleep -Milliseconds 100
    try { $ready = (Invoke-Js "document.readyState === 'complete' && !!document.getElementById('ui-out') && document.getElementById('ui-out').hidden") -eq $true } catch { }
  }
  if (-not $ready) { Write-Output "WARN $shot`: Kontrollpunkt nicht erreicht"; return $false }
  if (-not $NoNotch) { Invoke-Js $notchJs | Out-Null }
  Start-Sleep -Milliseconds 400
  return $true
}

# Elements that stick out past the screen edge (except the simulation's fixed overlays)
$overflowJs = @'
JSON.stringify({
  sw: document.documentElement.scrollWidth, w: innerWidth,
  wide: [...document.querySelectorAll('#app *')].filter(e => {
    const r = e.getBoundingClientRect();
    return r.width > 0 && (r.right > innerWidth + 0.5 || r.left < -0.5);
  }).slice(0, 5).map(e => e.tagName.toLowerCase() + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : ''))
})
'@

$results = @()
try {
  Send-Cdp 'Page.enable' | Out-Null
  $height = if ($NoNotch) { 844 } else { 797 }
  Send-Cdp 'Emulation.setDeviceMetricsOverride' @{ width = 390; height = $height; deviceScaleFactor = 3; mobile = $true } | Out-Null
  Send-Cdp 'Emulation.setUserAgentOverride' @{ userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1'; platform = 'iPhone' } | Out-Null
  Send-Cdp 'Emulation.setTouchEmulationEnabled' @{ enabled = $true; maxTouchPoints = 5 } | Out-Null
  Send-Cdp 'Emulation.setEmulatedMedia' @{ features = @(@{ name = 'prefers-color-scheme'; value = $Theme }) } | Out-Null

  # ---------- Screenshots + overflow check ----------
  foreach ($shot in $Shots) {
    if (-not (Open-Shot $shot)) { $results += "FAIL $shot`: nicht erreicht"; continue }
    $o = Invoke-Js $overflowJs | ConvertFrom-Json
    # Content that sticks out can also widen the viewport itself (then the page is zoomed out), hence the 390 check
    if ($o.w -ne 390 -or $o.sw -gt $o.w -or $o.wide.Count) { $results += "FAIL $shot`: zu breit (Seite $($o.w) px, scrollWidth $($o.sw)) " + ($o.wide -join ', ') }
    else { $results += "PASS $shot`: passt in $($o.w) px" }
    Save-Shot $shot
  }

  # ---------- Speed round by finger ----------
  if (Open-Shot 'blitz') {
    $c = Invoke-Js "(() => { const r = document.querySelector('.swipe-card').getBoundingClientRect(); return JSON.stringify({ x: r.left + r.width / 2, y: r.top + r.height / 2 }); })()" | ConvertFrom-Json
    Send-Touch 'touchStart' $c.x $c.y
    Move-Touch $c.x $c.y ($c.x + 160) $c.y 10
    Send-Touch 'touchEnd'
    Start-Sleep -Milliseconds 600
    $answered = Invoke-Js "(() => { const s = PQ.app.getSession(); return !s || s.results[0] !== null; })()"
    if ($answered) { $results += 'PASS Finger: Wischen nach rechts beantwortet die Blitz-Karte' } else { $results += 'FAIL Finger: Wischen auf der Blitz-Karte' }
    Save-Shot 'blitz-swiped'
  }
} finally {
  try { $client.Dispose() } catch { }
  Stop-SimEdge
}

$fails = @($results | Where-Object { $_ -like 'FAIL*' }).Count
$results
if ($fails) { "IPHONE-ERGEBNIS: $fails Fehler" } else { 'IPHONE-ERGEBNIS: alles grün' }
"Screenshots: $OutDir"
