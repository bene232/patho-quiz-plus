/* Service Worker: legt alle Dateien beim Installieren in einen versionierten Cache und liefert sie offline aus.
   Bei jeder inhaltlichen Änderung CACHE hochzählen, damit Geräte die neue Version laden. */
const CACHE = 'patho-quiz-v23';
const ART = [
  'microscope', 'shield', 'cells', 'heart', 'vessel', 'lungs', 'stomach', 'colon', 'liver', 'kidney', 'drop',
  'thyroid', 'ribbon', 'uterus', 'bone', 'brain', 'tooth', 'bolt', 'stopwatch', 'chart', 'trophy', 'medal',
  'target', 'books', 'flame', 'check', 'star', 'scroll'
].map(n => './img/' + n + '.svg');
const ASSETS = ART.concat([
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './data/chapters.js',
  './data/kap01-tumor.js',
  './data/kap02-immun.js',
  './data/kap03-haemato.js',
  './data/kap04-herz.js',
  './data/kap05-gefaesse.js',
  './data/kap06-lunge.js',
  './data/kap07-magen.js',
  './data/kap08-kolon.js',
  './data/kap09-leber.js',
  './data/kap10-niere.js',
  './data/kap11-uro.js',
  './data/kap12-schilddruese.js',
  './data/kap13-mamma.js',
  './data/kap14-gyn.js',
  './data/kap15-knochen.js',
  './data/kap16-neuro.js',
  './data/kap17-kopf-hals.js',
  './js/store.js',
  './js/quiz.js',
  './js/app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
]);

self.addEventListener('install', event => {
  // cache: 'reload' umgeht den HTTP-Cache (GitHub Pages: max-age=600), sonst landen alte Dateien im neuen Cache
  const fresh = ASSETS.map(url => new Request(url, { cache: 'reload' }));
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(fresh)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(req).catch(() => (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()));
    })
  );
});
