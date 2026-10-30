# iPhone-Simulation für die UI-Kontrollpunkte von tests/ui.html.
# Steuert Edge headless über das DevTools-Protokoll: iPhone 14/15 (390 px breit, Retina 3×), Touch-Eingabe, Safari-User-Agent.
# Wie die installierte App mit status-bar-style „default“: Inhalt beginnt unter der Statusleiste (844 − 47 = 797 px hoch,
# Safe Area oben 0), unten 34 px Safe Area mit Home-Indikator (abschaltbar mit -NoNotch).
# Macht Screenshots, meldet horizontales Überlaufen und testet Zuordnen per Finger (Tippen, Ziehen mit Mitscrollen, Scrollen).
# Achtung: Das ist Chromium mit iPhone-Maßen, kein echtes Safari/WebKit.
# Aufruf: powershell -ExecutionPolicy Bypass -File tests\iphone.ps1 [-OutDir <Ordner>] [-Theme dark] [-NoNotch] [-Shots a,b]
param(
  [string]$OutDir = (Join-Path $env:TEMP 'patho-iphone'),
  [string[]]$Shots = @('home-empty', 'practice-setup', 'quiz-single', 'quiz-kprim', 'quiz-match', 'quiz-tf', 'feedback-match-wrong',
    'result', 'chapter', 'chapter-pick', 'quiz-menu', 'exam-setup', 'exam-grid', 'blitz', 'stats', 'settings'),
  [ValidateSet('light', 'dark')][string]$Theme = 'light',
  [switch]$NoNotch,
  [int]$Port = 9333
)
$ErrorActionPreference = 'Stop'
$Shots = @($Shots | ForEach-Object { $_ -split ',' } | Where-Object { $_ })  # -File reicht „a,b“ als einen Text durch
$edge =Join-Path ${env:ProgramFiles(x86)} 'Microsoft\Edge\Application\msedge.exe'
$pageUrl = 'file:///' + ($PSScriptRoot -replace '\\', '/') + '/ui.html'
New-Item -ItemType Directory -Force $OutDir | Out-Null
# Eigenes, kurzes Profil (lange Pfade scheitern unter Windows); wird wiederverwendet, ui.html leert den Speicher selbst
$profileDir = Join-Path $env:TEMP 'patho-iphone-edge'

function Stop-SimEdge {
  Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -like "*$profileDir*" } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
}

Start-Process $edge -ArgumentList @('--headless=new', "--remote-debugging-port=$Port", "--user-data-dir=`"$profileDir`"",
  '--allow-file-access-from-files', '--no-first-run', 'about:blank') | Out-Null

# Der erste Start mit frischem Profil kann über 10 s dauern
$wsUrl = $null
for ($i = 0; $i -lt 150 -and -not $wsUrl; $i++) {
  Start-Sleep -Milliseconds 200
  try {
    # PowerShell 5.1 reicht das JSON-Array als ein Objekt weiter, deshalb einzeln aufzählen
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

# Befehl senden und auf die zugehörige Antwort warten (Ereignisse dazwischen werden übersprungen)
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

# JavaScript ausführen; Ausdrücke liefern Zahlen/Booleans oder JSON-Strings
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

# Home-Indikator als Overlay und unterer Safe-Area-Abstand wie in der installierten App
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

# Elemente, die über den Bildschirmrand hinausragen (fixierte Overlays der Simulation ausgenommen)
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

  # ---------- Screenshots + Überlauf-Prüfung ----------
  foreach ($shot in $Shots) {
    if (-not (Open-Shot $shot)) { $results += "FAIL $shot`: nicht erreicht"; continue }
    $o = Invoke-Js $overflowJs | ConvertFrom-Json
    if ($o.sw -gt $o.w -or $o.wide.Count) { $results += "FAIL $shot`: zu breit (scrollWidth $($o.sw) > $($o.w)) " + ($o.wide -join ', ') }
    else { $results += "PASS $shot`: passt in $($o.w) px" }
    Save-Shot $shot
  }

  # ---------- Zuordnen per Finger ----------
  if (Open-Shot 'quiz-match') {
    $posJs = @'
(() => {
  const s = PQ.app.getSession(), q = PQ.byId[s.ids[s.idx]];
  const tgt = ri => [...document.querySelectorAll('.target')].find(t => t.querySelector('.target-text').textContent.startsWith(q.pairs[ri][1]));
  const c = el => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, top: r.top, bottom: r.bottom }; };
  // „last“ = Paar, dessen Beschreibung ganz unten steht (Reihenfolge ist gemischt) – so wird das Mitscrollen geprüft
  const last = q.pairs.map((p, i) => i).reduce((a, i) => (tgt(i).getBoundingClientRect().top > tgt(a).getBoundingClientRect().top ? i : a), 0);
  return JSON.stringify({ n: last + 1, term0: c(document.querySelectorAll('.term')[0]), termLast: c(document.querySelectorAll('.term')[last]),
    t0: c(tgt(0)), tLast: c(tgt(last)), foot: document.querySelector('.footer').getBoundingClientRect().top, sy: scrollY,
    slot0: tgt(0).querySelector('.slot').textContent, slotLast: tgt(last).querySelector('.slot').textContent,
    sel0: document.querySelectorAll('.term')[0].classList.contains('sel'), ghost: !!document.querySelector('.drag-ghost') });
})()
'@
    $p = Invoke-Js $posJs | ConvertFrom-Json

    # 1) Wischen auf einer Beschreibung scrollt die Seite und startet kein Ziehen
    Send-Touch 'touchStart' $p.t0.x $p.t0.y
    Move-Touch $p.t0.x $p.t0.y $p.t0.x ($p.t0.y - 150) 8
    $mid = Invoke-Js $posJs | ConvertFrom-Json
    Send-Touch 'touchEnd'
    Start-Sleep -Milliseconds 300
    $after = Invoke-Js $posJs | ConvertFrom-Json
    if (-not $mid.ghost -and $after.sy -gt $p.sy) { $results += "PASS Finger: Wischen auf Beschreibung scrollt ($($p.sy) → $($after.sy) px), kein Ziehen" }
    else { $results += "FAIL Finger: Wischen auf Beschreibung (Zieh-Bild: $($mid.ghost), scrollY $($p.sy) → $($after.sy))" }
    Invoke-Js 'scrollTo(0, 0), true' | Out-Null
    Start-Sleep -Milliseconds 200

    # 2) Antippen: Begriff 1, dann passende Beschreibung
    $p = Invoke-Js $posJs | ConvertFrom-Json
    Send-Touch 'touchStart' $p.term0.x $p.term0.y
    Send-Touch 'touchEnd'
    Start-Sleep -Milliseconds 150
    Invoke-Js "(() => { const s = PQ.app.getSession(), q = PQ.byId[s.ids[s.idx]]; [...document.querySelectorAll('.target')].find(t => t.querySelector('.target-text').textContent.startsWith(q.pairs[0][1])).scrollIntoView({ block: 'center' }); return true; })()" | Out-Null
    Start-Sleep -Milliseconds 200
    $s1 = Invoke-Js $posJs | ConvertFrom-Json
    Send-Touch 'touchStart' $s1.t0.x $s1.t0.y
    Send-Touch 'touchEnd'
    Start-Sleep -Milliseconds 150
    $s2 = Invoke-Js $posJs | ConvertFrom-Json
    if ($s1.sel0 -and $s2.slot0 -eq '1') { $results += 'PASS Finger: Antippen ordnet Begriff 1 zu' } else { $results += "FAIL Finger: Antippen (markiert: $($s1.sel0), Slot: '$($s2.slot0)')" }

    # 3) Ziehen des letzten Begriffs auf die passende Beschreibung, ggf. mit Mitscrollen an der Fußleiste
    Invoke-Js 'scrollTo(0, 0), true' | Out-Null
    Start-Sleep -Milliseconds 200
    $p = Invoke-Js $posJs | ConvertFrom-Json
    Send-Touch 'touchStart' $p.termLast.x $p.termLast.y
    $edgeY = $p.foot - 12
    $goalY = [Math]::Min($p.tLast.y, $edgeY)
    Move-Touch $p.termLast.x $p.termLast.y $p.tLast.x $goalY 12
    $scrolled = $false
    for ($i = 0; $i -lt 40; $i++) {
      $q = Invoke-Js $posJs | ConvertFrom-Json
      if ($q.tLast.bottom -lt $q.foot - 60 -and $q.tLast.top -gt 60) { break }
      $scrolled = $true
      Start-Sleep -Milliseconds 80
    }
    $q = Invoke-Js $posJs | ConvertFrom-Json
    Move-Touch $p.tLast.x $goalY $q.tLast.x $q.tLast.y 6
    Save-Shot 'drag-match'
    $q2 = Invoke-Js $posJs | ConvertFrom-Json
    Send-Touch 'touchEnd'
    Start-Sleep -Milliseconds 200
    $done = Invoke-Js $posJs | ConvertFrom-Json
    $want = [string]$p.n
    if ($q2.ghost -and $done.slotLast -eq $want -and -not $done.ghost) {
      $results += "PASS Finger: Begriff $want auf Beschreibung gezogen" + $(if ($scrolled) { " (mit Mitscrollen, scrollY $($done.sy) px)" } else { '' })
    } else { $results += "FAIL Finger: Ziehen (Zieh-Bild: $($q2.ghost), Slot: '$($done.slotLast)', erwartet '$want')" }
    Save-Shot 'drag-match-done'
  }
} finally {
  try { $client.Dispose() } catch { }
  Stop-SimEdge
}

$fails = @($results | Where-Object { $_ -like 'FAIL*' }).Count
$results
if ($fails) { "IPHONE-ERGEBNIS: $fails Fehler" } else { 'IPHONE-ERGEBNIS: alles grün' }
"Screenshots: $OutDir"
