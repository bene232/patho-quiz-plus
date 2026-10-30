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
| `js/store.js` | Progress (localStorage), flashcards with boxes 1–5, export/import |
| `js/quiz.js` | Filters, round building, scoring (K-prim: 4 correct = 1, 3 correct = ½) |
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

## Tests

`tests/test.html` checks all questions and the logic, `tests/ui.html` clicks through the flows (including matching by dragging). Open both in a browser; the top line says „alles grün“ (all green) or lists the failures. `tests/phone.html?q=shot=quiz-match` shows a checkpoint at iPhone width.

`tests/iphone.ps1` simulates an iPhone 14/15 (390 px, Retina, touch, Safari user agent, bottom safe area) with Edge via the DevTools protocol: screenshots of all checkpoints, a check for horizontal overflow, and tapping, swiping and dragging with a finger. Usage: `powershell -ExecutionPolicy Bypass -File tests\iphone.ps1 [-Theme dark] [-Shots quiz-match,result] [-OutDir <folder>]`. This is Chromium with iPhone dimensions, not real Safari.
