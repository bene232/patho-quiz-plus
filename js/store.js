/* Fortschritt im localStorage: Lernkartei (Leitner-Boxen 1–5), Tagesaktivität, Punkte, Einstellungen. */
(function () {
  'use strict';

  const KEY = 'pathoquiz.v1';
  const SESSION_KEY = 'pathoquiz.session';
  const DAY = 86400000;
  // Wiedervorlage in Tagen je Box: Box 1 sofort, Box 2 nach 1 Tag, … Box 5 nach 21 Tagen
  const INTERVAL_DAYS = [0, 0, 1, 3, 7, 21];
  // Wählbare Tagesziele; ein gespeicherter Wert außerhalb davon (früher 10–50) wird auf den Standard gesetzt
  const GOALS = [100, 200, 300, 400];
  const DEFAULT_GOAL = 300;

  function blank() {
    return { v: 1, q: {}, days: {}, points: 0, settings: { theme: 'auto', dailyGoal: DEFAULT_GOAL }, prefs: {} };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const base = blank();
        const loaded = Object.assign(base, parsed, { settings: Object.assign(base.settings, parsed.settings) });
        if (GOALS.indexOf(loaded.settings.dailyGoal) < 0) loaded.settings.dailyGoal = DEFAULT_GOAL;
        return loaded;
      }
    } catch (e) { /* privater Modus o. Ä. – dann ohne Speicherung */ }
    return blank();
  }

  let state = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignorieren */ }
  }

  function dayKey(t) {
    const d = new Date(t === undefined ? Date.now() : t);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function startOfDay(t) {
    const d = new Date(t);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }

  function get(id) {
    return state.q[id] || null;
  }

  function record(id, correct, points) {
    const now = Date.now();
    const s = state.q[id] || (state.q[id] = { b: 0, d: 0, n: 0, c: 0, l: 0 });
    s.n += 1;
    if (correct) s.c += 1;
    s.l = correct ? 1 : 0;
    s.b = correct ? Math.min(Math.max(s.b, 1) + 1, 5) : 1;
    s.d = s.b === 1 ? 0 : startOfDay(now) + INTERVAL_DAYS[s.b] * DAY;
    s.t = now;
    const k = dayKey(now);
    state.days[k] = (state.days[k] || 0) + 1;
    state.points += points || 0;
    save();
  }

  function isMistake(id) {
    const s = state.q[id];
    return !!s && s.b === 1;
  }

  function isDue(id, now) {
    const s = state.q[id];
    return !!s && s.b >= 2 && s.d <= (now || Date.now());
  }

  // Kalendertage rückwärts (setDate statt −24 h, damit die Zeitumstellung nichts verschiebt)
  function daysBack(i) {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() - i);
    return d;
  }

  function streak() {
    let i = state.days[dayKey()] ? 0 : 1; // heute noch nichts gemacht → Serie zählt bis gestern
    let n = 0;
    while (state.days[dayKey(daysBack(i).getTime())]) { n += 1; i += 1; }
    return n;
  }

  function recentDays(n) {
    const names = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const out = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = daysBack(i);
      out.push({ label: names[d.getDay()], date: d, count: state.days[dayKey(d.getTime())] || 0, today: i === 0 });
    }
    return out;
  }

  function todayCount() {
    return state.days[dayKey()] || 0;
  }

  function exportData() {
    return JSON.stringify({ app: 'patho-quiz', exported: new Date().toISOString(), data: state });
  }

  function exportCode() {
    return 'PQ1:' + btoa(unescape(encodeURIComponent(JSON.stringify(state))));
  }

  // Akzeptiert sowohl den Code (PQ1:…) als auch den Inhalt einer exportierten Datei.
  function importData(text) {
    text = String(text || '').trim();
    let parsed;
    if (text.startsWith('PQ1:')) {
      parsed = JSON.parse(decodeURIComponent(escape(atob(text.slice(4)))));
    } else {
      const obj = JSON.parse(text);
      parsed = obj && obj.app === 'patho-quiz' ? obj.data : obj;
    }
    if (!parsed || typeof parsed !== 'object' || typeof parsed.q !== 'object') {
      throw new Error('Kein gültiger Fortschritt');
    }
    const base = blank();
    state = Object.assign(base, parsed, { settings: Object.assign(base.settings, parsed.settings) });
    save();
  }

  function reset() {
    const settings = state.settings;
    state = blank();
    state.settings = settings;
    save();
  }

  function setting(name, value) {
    if (value === undefined) return state.settings[name];
    state.settings[name] = value;
    save();
  }

  // Zuletzt gewählte Filter je Modus (reine Komfortfunktion)
  function pref(name, value) {
    if (value === undefined) return state.prefs[name];
    state.prefs[name] = value;
    save();
  }

  function saveSession(data) {
    try {
      if (data) localStorage.setItem(SESSION_KEY, JSON.stringify(data));
      else localStorage.removeItem(SESSION_KEY);
    } catch (e) { /* ignorieren */ }
  }

  function loadSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  PQ.store = {
    get, record, isMistake, isDue, streak, recentDays, todayCount,
    points: () => state.points,
    GOALS, DEFAULT_GOAL,
    exportData, exportCode, importData, reset, setting, pref,
    saveSession, loadSession
  };

  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }
})();
