# Patho-Quiz

Quiz-Web-App zur „Klinische Pathologie – Kurzfassung“. Läuft ohne Build-Schritt und ist auf dem iPhone über Safari → „Zum Home-Bildschirm“ installierbar, sobald sie über HTTPS gehostet ist (z. B. GitHub Pages).

## Lokal starten

`index.html` doppelt anklicken. Offline-Modus und Installation funktionieren erst, wenn die App gehostet ist (Service Worker braucht http/https).

## Aufbau

| Pfad | Inhalt |
|---|---|
| `data/chapters.js` | Kapitel- und Abschnittsstruktur inkl. ★-Häufigkeit, `PQ.registerChapter()` |
| `data/kapNN-*.js` | Fragen eines Kapitels |
| `js/store.js` | Fortschritt (localStorage), Lernkartei mit Boxen 1–5, Export/Import |
| `js/quiz.js` | Filter, Rundenaufbau, Bewertung (K-prim: 4 richtig = 1, 3 richtig = ½) |
| `js/app.js` | Oberfläche und Router |
| `img/*.svg` | Eigene Bilder (Kapitel, Modi, Auswertung) statt Emojis, damit sie auf jedem Gerät gleich aussehen. Neue Bilder auch in `ART` in `sw.js` eintragen; Vorschau: `tests/art.html` |
| `sw.js` | Offline-Cache |
| `fonts/OFL.txt` | Lizenz der Schrift Nunito (in `css/style.css` eingebettet, damit sie auch per `file://` lädt) |

## Neues Kapitel hinzufügen

1. In `data/chapters.js` beim Kapitel `stars` und `sections` eintragen (Bild `art` und Farbe `color` sind schon gesetzt).
2. `data/kapNN-name.js` anlegen und mit `PQ.registerChapter(NN, [...])` füllen. Formate stehen in `data/chapters.js`.
3. Datei in `index.html`, `tests/test.html`, `tests/ui.html` und in die `ASSETS` von `sw.js` aufnehmen.
4. In `tests/test.html` den Seitenbereich des Kapitels in `pageRange` ergänzen.
5. `CACHE` in `sw.js` hochzählen, damit installierte Apps die neue Version laden.

Jede Frage braucht Abschnitt (`sec`), Seite (`p`) und Erklärung (`ex`). Inhalte dürfen nur aus dem PDF stammen; falsche Antwortoptionen nur, wenn das PDF sie widerlegt.

## Tests

`tests/test.html` prüft alle Fragen und die Logik, `tests/ui.html` klickt die Abläufe durch (auch Zuordnen per Ziehen). Beide im Browser öffnen; oben steht „alles grün“ oder die Fehlerliste. `tests/phone.html?q=shot=quiz-match` zeigt einen Zwischenstand in iPhone-Breite.

`tests/iphone.ps1` simuliert ein iPhone 14/15 (390 px, Retina, Touch, Safari-User-Agent, Safe Area unten) mit Edge über das DevTools-Protokoll: Screenshots aller Kontrollpunkte, Prüfung auf horizontales Überlaufen, Tippen, Wischen und Ziehen mit dem Finger. Aufruf: `powershell -ExecutionPolicy Bypass -File tests\iphone.ps1 [-Theme dark] [-Shots quiz-match,result] [-OutDir <Ordner>]`. Das ist Chromium mit iPhone-Maßen, kein echtes Safari.
