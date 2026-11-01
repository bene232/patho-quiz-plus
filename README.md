# Patho-Quiz Plus

Quiz web app for the „Klinische Pathologie – Kurzfassung“ (a clinical pathology summary script). It needs no build step and can be installed on an iPhone via Safari → “Add to Home Screen” once it is served over HTTPS (e.g. GitHub Pages). The app itself is in German.

An evolved version of [Patho-Quiz](https://github.com/bene232/patho-quiz). Both run on bene232.github.io and therefore share localStorage and Cache Storage. Plus uses its own keys (`pathoquiz-plus.*`) and its own cache prefix (`patho-quiz-plus-`). It only reads the progress of Patho-Quiz as long as it has not saved anything itself.

## Running locally

Double-click `index.html`. Offline mode and installation only work once the app is hosted (the service worker needs http/https).

## Structure

| Path | Contents |
|---|---|
| `data/chapters.js` | Chapter and section structure incl. ★ frequency, `PQ.registerChapter()` |
| `data/kapNN-*.js` | Questions of one chapter |
| `js/store.js` | Progress (localStorage), flashcards with boxes 1–5 and review intervals in hours, export/import |
| `js/quiz.js` | Filters, lessons (new questions with spread-out reviews), repeating wrong answers in the round, time estimate, scoring (K-prim: 4 correct = 1, 3 correct = ½) |
| `js/app.js` | UI and router |
| `img/*.svg` | Own images (chapters, modes, results) instead of emojis so they look the same on every device. Also add new images to `ART` in `sw.js`; preview: `tests/art.html` |
| `sw.js` | Offline cache |
| `fonts/OFL.txt` | License of the Nunito font (embedded in `css/style.css` so it also loads via `file://`) |

## Adding a chapter

1. In `data/chapters.js`, set `stars` and `sections` for the chapter (image `art` and color `color` are already set).
2. Create `data/kapNN-name.js` and fill it with `PQ.registerChapter(NN, [...])`. The formats are described in `data/chapters.js`.
3. Add the file to `index.html`, `tests/test.html`, `tests/ui.html` and to `ASSETS` in `sw.js`.
4. In `tests/test.html`, add the chapter's page range to `pageRange`.
5. Bump `CACHE` in `sw.js` so installed apps load the new version.

Every question needs a section (`sec`), page (`p`) and explanation (`ex`). Content may only come from the PDF; wrong answer options only if the PDF refutes them.

## Learning plan

Plus 2.x is tuned for a few days before the exam (exam date under Einstellungen → Persönlich, default 2 Nov 2026):

- **„Weiterlernen“ (continue learning):** lessons of 30 questions in two phases (decided by the user in Plus 2.3). First pass: only new questions in chapter and topic order until every question has been crossed once; the goal shown is the evening two days before the exam (Saturday for a Monday exam). The last lesson of the first pass is filled up with reviews. Then the review programme („Wiederholungsprogramm“), which since Plus 2.4 (decided by the user for the last day, so she gets done) only contains open mistakes and open guesses, so every right answer takes one off: mistakes of the last 3 hours first, then due guesses, then older mistakes by exam relevance (Plus 2.5: past exam questions, then ★★★, ★★, the rest, oldest first, so whenever she stops the most important ones are done), guesses of the last 3 hours only when nothing else is left. The home screen counts them down („Noch N Fragen wiederholen“). Once none are left, „Extra-Runde“ practises questions once answered wrong. „Fehler üben“ (practice mistakes) runs in bites of 10 at any time.
- **Boxes:** wrong → box 1 (open mistake). Right on the first try → box 3. A corrected mistake or a right answer marked „Geraten?“ (guessed) → box 2 („wackelig“, shaky). Intervals from the last answer: box 2 after 3 h, box 3 after 20 h, box 4 after 2 days, box 5 after 5 days. Older progress (also from Patho-Quiz) is rescheduled once on loading (`sched: 2`).
- **Progress percentages** (chapter tiles, topics, statistics, home bar) count questions done: crossed, last answer right, no open guess. They only reach 100 % when nothing is left (`Q.percent` never rounds up to 100), so a chapter at 100 % has nothing left in the review programme; „Nur offene“ on the chapter page shows exactly what is missing.
- **Open guess:** „Geraten?“ sets `g: 1` (Plus 2.4), the next answer removes it. In progress from before, a box 2 never answered wrong counts as an open guess, because only „Geraten?“ leads there.
- **Badges for corrected mistakes:** until Plus 2.4 the counter never counted (it compared against the already updated state). The badges now use the larger of the counter and the number of questions last answered right after a mistake; the home screen checks badges on opening.
- **Wrong answers never repeat in the same round** (the round keeps its length): during the first pass they wait for the review programme, afterwards they come back in the next round. A returning mistake is marked „Nochmal“ and Zelli announces it.
- **Mascot „Zelli“** (inline SVG with moods): sits on the progress bar of every round, moves along, reacts to each answer and comments on the start, middle and end of a round, on repeated questions and on corrected mistakes. Tapping her shows tips and encouragement. She gets an outfit at 70 / 85 / 100 % of the questions seen (stethoscope, glasses, graduation cap); a new outfit and completed chapters are celebrated in a dialog.
- **Motivation:** encouragement with the name, badges, messages with Zelli for streaks and daily milestones, a plan strip until the exam, a pause reminder after 45 minutes of learning in a row (10 minutes without an answer count as a break).
- **First start:** asks for the name and offers to take over the progress code from Patho-Quiz, because a home screen app on the iPhone usually has its own storage.

## Tests

`tests/test.html` checks all questions and the logic, `tests/ui.html` clicks through the flows. Open both in a browser; the top line says „alles grün“ (all green) or lists the failures. `tests/phone.html?q=shot=quiz-single` shows a checkpoint at iPhone width.

`tests/iphone.ps1` simulates an iPhone 14/15 (390 px, Retina, touch, Safari user agent, bottom safe area) with Edge via the DevTools protocol: screenshots of all checkpoints, a check for horizontal overflow, and swiping the speed-round card with a finger. Usage: `powershell -ExecutionPolicy Bypass -File tests\iphone.ps1 [-Theme dark] [-Shots quiz-single,result] [-OutDir <folder>]`. This is Chromium with iPhone dimensions, not real Safari.
