/* Progress in localStorage: flashcards (Leitner boxes 1–5), daily activity, points, settings. */
(function () {
  'use strict';

  // Plus runs on the same origin (bene232.github.io) as Patho-Quiz, hence its own keys.
  // MAIN_KEY is only ever read: until Plus has saved anything, it starts with the progress from Patho-Quiz.
  const KEY = 'pathoquiz-plus.v1';
  const SESSION_KEY = 'pathoquiz-plus.session';
  const MAIN_KEY = 'pathoquiz.v1';
  const HOUR = 3600000;
  const DAY = 24 * HOUR;
  // Review interval per box, counted from the last answer and compressed for an exam a few days away:
  // box 1 = open mistake (right away), box 2 = shaky (after 3 h), box 3 = next day, box 4 = after 2 days, box 5 = after 5 days
  const INTERVAL = [0, 0, 3 * HOUR, 20 * HOUR, 2 * DAY, 5 * DAY];
  // Selectable daily goals; a saved value outside these (formerly 10–50) is reset to the default
  const GOALS = [100, 200, 300, 400];
  const DEFAULT_GOAL = 300;
  const DEFAULT_EXAM = '2026-11-02';

  function blank() {
    return { v: 1, sched: 2, q: {}, days: {}, points: 0, settings: { theme: 'auto', dailyGoal: DEFAULT_GOAL, examDate: DEFAULT_EXAM, name: '' }, prefs: {} };
  }

  // Schedule version 2 (Plus 2.0) measures intervals in hours from the last answer. Older progress (also from
  // Patho-Quiz) is rescheduled once; a box 2 that was never answered wrong counts as box 3 like a first-try hit now.
  function migrate(st) {
    if (st.sched === 2) return st;
    Object.keys(st.q).forEach(id => {
      const s = st.q[id];
      if (s.b === 2 && s.n === s.c) s.b = 3;
      s.d = s.b <= 1 ? 0 : (s.t || 0) + INTERVAL[s.b];
    });
    st.sched = 2;
    return st;
  }

  function normalize(parsed) {
    const base = blank();
    delete base.sched; // missing in older progress → migrate()
    const st = Object.assign(base, parsed, { settings: Object.assign(base.settings, parsed.settings), prefs: Object.assign({}, parsed.prefs) });
    if (GOALS.indexOf(st.settings.dailyGoal) < 0) st.settings.dailyGoal = DEFAULT_GOAL;
    return migrate(st);
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY) || localStorage.getItem(MAIN_KEY);
      if (raw) return normalize(JSON.parse(raw));
    } catch (e) { /* private mode or similar – run without saving */ }
    return blank();
  }

  let state = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function dayKey(t) {
    const d = new Date(t === undefined ? Date.now() : t);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
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
    // Wrong → box 1 (open mistake). Right on the first try → box 3; a corrected mistake → box 2 (shaky, back in a few hours).
    s.b = !correct ? 1 : s.n === 1 ? 3 : Math.min(Math.max(s.b, 1) + 1, 5);
    s.d = s.b === 1 ? 0 : now + INTERVAL[s.b];
    s.t = now;
    const k = dayKey(now);
    state.days[k] = (state.days[k] || 0) + 1;
    state.points += points || 0;
    save();
  }

  // „Geraten“ (guessed): a right answer counts as shaky, so the question comes back soon
  function markGuessed(id) {
    const s = state.q[id];
    if (!s) return;
    s.b = 2;
    s.d = Date.now() + INTERVAL[2];
    save();
  }

  function isMistake(id) {
    const s = state.q[id];
    return !!s && s.b === 1;
  }

  function isShaky(id) {
    const s = state.q[id];
    return !!s && s.b === 2;
  }

  function isDue(id, now) {
    const s = state.q[id];
    return !!s && s.b >= 2 && s.d <= (now || Date.now());
  }

  // Calendar days backwards (setDate instead of −24 h so daylight saving time shifts nothing)
  function daysBack(i) {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() - i);
    return d;
  }

  function streak() {
    let i = state.days[dayKey()] ? 0 : 1; // nothing done today yet → streak counts up to yesterday
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

  // Accepts both the code (PQ1:…) and the contents of an exported file.
  // Keeps the name and the welcome flag if the imported progress has none (e.g. a code from Patho-Quiz).
  function importData(text) {
    text = String(text || '').trim();
    let parsed;
    if (text.startsWith('PQ1:')) {
      parsed = JSON.parse(decodeURIComponent(escape(atob(text.replace(/\s+/g, '').slice(4)))));
    } else {
      const obj = JSON.parse(text);
      parsed = obj && obj.app === 'patho-quiz' ? obj.data : obj;
    }
    if (!parsed || typeof parsed !== 'object' || typeof parsed.q !== 'object') {
      throw new Error('Kein gültiger Fortschritt');
    }
    const next = normalize(parsed);
    if (!next.settings.name) next.settings.name = state.settings.name;
    if (!next.prefs.welcomed) next.prefs.welcomed = state.prefs.welcomed;
    state = next;
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

  // Last chosen filters per mode, badges, pace etc. (convenience only)
  function pref(name, value) {
    if (value === undefined) return state.prefs[name];
    state.prefs[name] = value;
    save();
  }

  function saveSession(data) {
    try {
      if (data) localStorage.setItem(SESSION_KEY, JSON.stringify(data));
      else localStorage.removeItem(SESSION_KEY);
    } catch (e) { /* ignore */ }
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
    get, record, markGuessed, isMistake, isShaky, isDue, streak, recentDays, todayCount, dayKey,
    points: () => state.points,
    GOALS, DEFAULT_GOAL,
    exportData, exportCode, importData, reset, setting, pref,
    saveSession, loadSession
  };

  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }
})();
