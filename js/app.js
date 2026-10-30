/* Oberfläche: Hash-Router, Bildschirme, Fragetypen. */
(function () {
  'use strict';

  const S = PQ.store;
  const Q = PQ.quiz;
  const root = document.getElementById('app');
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
  const ALL_TYPES = ['single', 'kprim', 'match', 'tf'];
  const LESSON_SIZE = 10;
  const MODE_TITLE = { practice: 'Üben', review: 'Wiederholen', exam: 'Klausur', blitz: 'Blitzrunde' };
  const PRAISE = ['Richtig!', 'Stark!', 'Genau!', 'Sitzt!', 'Super!'];
  const MILESTONES = [3, 5, 10, 15, 20, 30];

  let session = null;     // laufende Runde
  let lastResult = null;  // Auswertung der zuletzt beendeten Runde
  let presetSections = null;
  let timer = null;
  let keyHandler = null;

  /* ================= Hilfsfunktionen ================= */

  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v === null || v === undefined || v === false) continue;
        if (k === 'class') el.className = v;
        else if (k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k === 'style') el.style.cssText = v;
        else el.setAttribute(k, v === true ? '' : v);
      }
    }
    kids.flat(Infinity).forEach(kid => {
      if (kid === null || kid === undefined || kid === false) return;
      el.append(kid instanceof Node ? kid : String(kid));
    });
    return el;
  }

  const ICONS = {
    x: ['M18 6 6 18', 'M6 6l12 12'],
    back: ['M15 18l-6-6 6-6'],
    down: ['M6 9l6 6 6-6'],
    right: ['M9 18l6-6-6-6'],
    check: ['M20 6 9 17l-5-5'],
    flame: ['M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z'],
    star: ['M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'],
    gear: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'],
    clock: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 6v6l4 2'],
    repeat: ['M1 4v6h6', 'M3.51 15a9 9 0 1 0 2.13-9.36L1 10'],
    alert: ['M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z', 'M12 9v4', 'M12 17h.01'],
    copy: ['M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z', 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'],
    download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
    upload: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M17 8l-5-5-5 5', 'M12 3v12'],
    grid: ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'],
    play: ['M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z'],
    share: ['M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8', 'M16 6l-4-4-4 4', 'M12 2v13'],
    plusSquare: ['M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z', 'M12 8v8', 'M8 12h8'],
    trash: ['M3 6h18', 'M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6', 'M10 11v6', 'M14 11v6', 'M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2']
  };

  function icon(name, cls) {
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('class', 'ico' + (name === 'play' ? ' ico-solid' : '') + (cls ? ' ' + cls : ''));
    svg.setAttribute('aria-hidden', 'true');
    ICONS[name].forEach(d => {
      const p = document.createElementNS(NS, 'path');
      p.setAttribute('d', d);
      svg.append(p);
    });
    return svg;
  }

  // Eigene Bilder (img/*.svg) statt Emojis – sehen auf jedem Gerät gleich aus
  const ART_BASE = (PQ.ASSET_BASE || '') + 'img/';
  function art(name, cls, title) {
    return h('img', { class: 'art ' + (cls || ''), src: ART_BASE + name + '.svg', alt: title || '', title: title || null, draggable: 'false' });
  }

  function stars(n) {
    if (!n) return null;
    const title = n === 3 ? 'Dauerbrenner' : n === 2 ? 'regelmäßig gefragt' : 'vereinzelt gefragt';
    return h('span', { class: 'stars', role: 'img', title, 'aria-label': title }, Array.from({ length: n }, () => icon('star')));
  }

  function chapterOf(q) {
    return PQ.chapters.find(c => c.id === q.chapter);
  }

  function sectionTitle(sec) {
    const s = PQ.sections[sec];
    return sec + ' ' + (s ? s.title : '');
  }

  function sourceLine(q) {
    return 'S. ' + q.p + ' · ' + sectionTitle(q.sec) + (q.alt ? ' · Altfrage ' + q.alt : '');
  }

  function fmtNum(x) {
    return String(Math.round(x * 10) / 10).replace('.', ',');
  }

  function fmtTime(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  function plural(n, one, many) {
    return n + ' ' + (n === 1 ? one : many);
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function availableChapters() {
    return PQ.chapters.filter(c => c.available);
  }

  function allSectionIds() {
    return availableChapters().flatMap(c => c.sections.map(s => s.id));
  }

  function clone(v) {
    return v === null || v === undefined ? v : JSON.parse(JSON.stringify(v));
  }

  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function mount(...nodes) {
    if (timer) { clearInterval(timer); timer = null; }
    keyHandler = null;
    root.replaceChildren(...nodes);
    window.scrollTo(0, 0);
  }

  function toast(...content) {
    const t = h('div', { class: 'toast', role: 'status' }, content);
    document.body.append(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2200);
  }

  function confetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#7b5cff', '#f43f5e', '#22b46f', '#ffb800', '#3b82f6', '#ec4899'];
    const wrap = h('div', { class: 'confetti', 'aria-hidden': 'true' });
    for (let i = 0; i < 80; i++) {
      wrap.append(h('i', {
        style: 'left:' + Math.random() * 100 + '%;background:' + colors[i % colors.length] +
          ';animation-delay:' + (Math.random() * 0.5).toFixed(2) + 's;animation-duration:' + (1.8 + Math.random() * 1.4).toFixed(2) + 's;' +
          '--r:' + Math.round(Math.random() * 720 - 360) + 'deg;--x:' + Math.round(Math.random() * 120 - 60) + 'px'
      }));
    }
    document.body.append(wrap);
    setTimeout(() => wrap.remove(), 4000);
  }

  // Fortschrittsring: Füllung in der Kapitelfarbe, Spur ein heller Ton derselben Farbe
  function ring(pct, size, color, label) {
    return h('span', {
      class: 'ring ring-' + size, role: 'img', 'aria-label': pct + ' Prozent',
      style: '--p:' + pct + (color ? ';--c:' + color : '')
    }, label === false ? null : h('span', { class: 'ring-label' }, label === undefined ? pct + '%' : label));
  }

  function topbar(title, backHash) {
    return h('header', { class: 'topbar' },
      h('button', { class: 'icon-btn', 'aria-label': 'Zurück', onclick: () => go(backHash || '#/') }, icon('back')),
      h('h1', { class: 'topbar-title' }, title || ''),
      h('span', { class: 'icon-btn-spacer' }));
  }

  function segmented(options, value, onChange, label) {
    const wrap = h('div', { class: 'seg', role: 'radiogroup', 'aria-label': label || null });
    options.forEach(([v, text]) => {
      const b = h('button', {
        class: 'seg-btn' + (v === value ? ' on' : ''), role: 'radio', 'aria-checked': String(v === value),
        onclick: () => {
          [...wrap.children].forEach(c => {
            const on = c.dataset.v === String(v);
            c.classList.toggle('on', on);
            c.setAttribute('aria-checked', String(on));
          });
          onChange(v);
        }
      }, text);
      b.dataset.v = String(v);
      wrap.append(b);
    });
    return wrap;
  }

  function chipGroup(options, set, onChange) {
    return h('div', { class: 'chips' }, options.map(([v, text]) => {
      const b = h('button', {
        class: 'chip' + (set.has(v) ? ' on' : ''), 'aria-pressed': String(set.has(v)),
        onclick: () => {
          if (set.has(v)) set.delete(v); else set.add(v);
          b.classList.toggle('on', set.has(v));
          b.setAttribute('aria-pressed', String(set.has(v)));
          onChange();
        }
      }, text);
      return b;
    }));
  }

  // Kapitel als Umschalter (Klausur, Blitzrunde); set = Kapitel-IDs
  function chapterChips(set, onChange) {
    return h('div', { class: 'ch-chips' }, availableChapters().map(ch => {
      const b = h('button', {
        class: 'ch-chip' + (set.has(ch.id) ? ' on' : ''), style: '--c:' + ch.color, 'aria-pressed': String(set.has(ch.id)),
        onclick: () => {
          if (set.has(ch.id)) set.delete(ch.id); else set.add(ch.id);
          b.classList.toggle('on', set.has(ch.id));
          b.setAttribute('aria-pressed', String(set.has(ch.id)));
          onChange();
        }
      }, art(ch.art, 'art-sm'), h('span', { class: 'grow' }, ch.short), h('span', { class: 'ch-chip-check' }, icon('check')));
      return b;
    }));
  }

  // Kapitel mit aufklappbaren Themen (Eigene Runde); sel = Set von Abschnitts-IDs
  function sectionPicker(sel, onChange, countFor) {
    return h('div', { class: 'picker' }, availableChapters().map(ch => {
      const secIds = ch.sections.map(s => s.id);
      const secWrap = h('div', { class: 'pick-secs', hidden: true });
      const meta = h('span', { class: 'pick-meta' });
      const chBtn = h('button', {
        class: 'pick-main', style: '--c:' + ch.color,
        onclick: () => {
          const allOn = secIds.every(id => sel.has(id));
          secIds.forEach(id => (allOn ? sel.delete(id) : sel.add(id)));
          refresh();
          onChange();
        }
      }, art(ch.art, 'art-sm'), h('span', { class: 'grow' }, h('span', { class: 'pick-title' }, ch.short), meta), h('span', { class: 'checkbox' }, icon('check')));
      const toggle = h('button', {
        class: 'icon-btn pick-toggle', 'aria-label': 'Themen von Kapitel ' + ch.id + ' anzeigen', 'aria-expanded': 'false',
        onclick: () => {
          secWrap.hidden = !secWrap.hidden;
          toggle.setAttribute('aria-expanded', String(!secWrap.hidden));
          toggle.classList.toggle('open', !secWrap.hidden);
        }
      }, icon('down'));
      const secBtns = ch.sections.map(s => {
        const b = h('button', {
          class: 'chip chip-sm',
          onclick: () => {
            if (sel.has(s.id)) sel.delete(s.id); else sel.add(s.id);
            refresh();
            onChange();
          }
        }, s.title);
        b.dataset.sec = s.id;
        return b;
      });
      secWrap.append(...secBtns);
      function refresh() {
        const on = secIds.filter(id => sel.has(id)).length;
        chBtn.classList.toggle('on', on === secIds.length);
        chBtn.classList.toggle('partial', on > 0 && on < secIds.length);
        secBtns.forEach(b => b.classList.toggle('on', sel.has(b.dataset.sec)));
        const n = countFor(secIds.filter(id => sel.has(id)));
        meta.textContent = (on === secIds.length ? 'alle Themen' : on + ' von ' + secIds.length + ' Themen') + ' · ' + n;
      }
      refresh();
      return h('div', { class: 'pick-ch' }, h('div', { class: 'pick-row' }, chBtn, toggle), secWrap);
    }));
  }

  /* ================= Sitzungen ================= */

  function persist() {
    S.saveSession(session);
  }

  // Nur die Fragen an den Positionen idxs behalten
  function keepOnly(s, idxs) {
    ['ids', 'views', 'responses', 'results'].forEach(k => { s[k] = idxs.map(i => s[k][i]); });
  }

  function answeredCount(s) {
    return s.mode === 'exam'
      ? s.ids.filter((id, i) => Q.isComplete(PQ.byId[id], s.responses[i])).length
      : s.results.filter(r => r !== null).length;
  }

  function restoreSession() {
    if (session) return session;
    const saved = S.loadSession();
    if (!saved || !Array.isArray(saved.ids)) return null;
    const keep = saved.ids.map((id, i) => (PQ.byId[id] ? i : -1)).filter(i => i >= 0);
    if (!keep.length) { S.saveSession(null); return null; }
    keepOnly(saved, keep);
    saved.idx = Math.min(saved.idx, saved.ids.length - 1);
    session = saved;
    return session;
  }

  function startSession(mode, questions, extra) {
    if (!questions.length) { toast('Keine passenden Fragen gefunden'); return; }
    // Angefangene Runde nicht stillschweigend überschreiben
    const open = restoreSession();
    const done = open ? answeredCount(open) : 0;
    if (done && !confirm('Du hast noch eine offene Runde (' + MODE_TITLE[open.mode] + ' ' + done + '/' + open.ids.length + '). Verwerfen und neu starten?')) return;
    session = Q.createSession(mode, questions, extra);
    persist();
    go(mode === 'blitz' ? '#/blitz-play' : '#/quiz');
  }

  function startSmart() {
    startSession('practice', Q.smartLesson(LESSON_SIZE), { origin: { kind: 'smart' } });
  }

  function startReview() {
    startSession('review', Q.reviewPool().slice(0, 20), { origin: { kind: 'review' } });
  }

  function startSection(sec) {
    startSession('practice', Q.take(Q.prioritize(PQ.questions.filter(q => q.sec === sec)), 12), { origin: { kind: 'section', sec } });
  }

  // o = { id, sections, count, order, altOnly, openOnly }; fehlende Angaben (auch aus älteren Runden): alle Themen, alle Fragen
  function startChapter(o) {
    const valid = PQ.chapters.find(c => c.id === o.id).sections.map(s => s.id);
    const sections = (o.sections || valid).filter(id => valid.includes(id));
    const qs = Q.take(Q.prioritize(Q.filter({ sections, types: ALL_TYPES, altOnly: o.altOnly, openOnly: o.openOnly })), o.count);
    startSession('practice', o.order === 'topics' ? Q.bySection(qs) : qs, { origin: Object.assign({}, o, { kind: 'chapter' }) });
  }

  // „Weiter“ auf der Auswertung: dieselbe Art Runde noch einmal
  const AGAIN = {
    smart: { label: 'Nächste Lektion', run: startSmart },
    section: { label: 'Noch eine Runde', run: o => startSection(o.sec) },
    chapter: { label: 'Noch eine Runde', run: startChapter },
    custom: { label: 'Neue Runde', run: () => go('#/practice') },
    exam: { label: 'Neue Klausur', run: () => go('#/exam') },
    blitz: { label: 'Noch eine Runde', run: () => go('#/blitz') },
    review: { label: 'Fertig', run: () => go('#/') }
  };

  function abortSession() {
    session = null;
    S.saveSession(null);
  }

  function finishSession() {
    const s = session;
    if (s.mode === 'exam') {
      // Klausur: erst jetzt bewerten und in die Lernkartei eintragen
      s.ids.forEach((id, i) => {
        const q = PQ.byId[id];
        const res = Q.isComplete(q, s.responses[i]) ? Q.evaluate(q, s.responses[i]) : { correct: false, score: 0, skipped: true };
        s.results[i] = res;
        S.record(id, res.correct, Q.points(res.score));
      });
    } else {
      // Vorzeitig beendet: nur die beantworteten Fragen auswerten
      keepOnly(s, s.ids.map((id, i) => i).filter(i => s.results[i] !== null));
    }
    s.ended = Date.now();
    lastResult = s;
    session = null;
    S.saveSession(null);
    location.replace('#/result');
  }

  function answerCurrent(response) {
    const s = session;
    const q = PQ.byId[s.ids[s.idx]];
    const res = Q.evaluate(q, response);
    s.responses[s.idx] = response;
    s.results[s.idx] = res;
    s.combo = res.correct ? s.combo + 1 : 0;
    s.bestCombo = Math.max(s.bestCombo, s.combo);
    S.record(q.id, res.correct, Q.points(res.score));
    persist();
    if (res.correct && MILESTONES.includes(s.combo)) toast(art('flame', 'art-xs'), s.combo + ' in Folge!');
    return res;
  }

  /* ================= Startseite ================= */

  function renderHome() {
    const all = PQ.questions;
    const goal = S.setting('dailyGoal') || S.DEFAULT_GOAL;
    const today = S.todayCount();
    const mistakes = all.filter(q => S.isMistake(q.id)).length;
    const due = all.filter(q => S.isDue(q.id)).length;
    const saved = restoreSession();

    const head = h('header', { class: 'home-head' },
      h('span', { class: 'logo' }, 'Patho', h('b', {}, 'Quiz')),
      h('span', { class: 'grow' }),
      h('span', { class: 'stat-pill', title: 'Tage in Folge gelernt' }, icon('flame', 'ico-flame'), S.streak()),
      h('span', { class: 'stat-pill', title: 'Punkte' }, icon('star', 'ico-star'), S.points()),
      h('button', { class: 'icon-btn', 'aria-label': 'Einstellungen', onclick: () => go('#/settings') }, icon('gear')));

    const actions = [];
    if (saved) {
      actions.push(
        h('button', { class: 'btn btn-hero', onclick: () => go(saved.mode === 'blitz' ? '#/blitz-play' : '#/quiz') }, icon('play'), 'Fortsetzen'),
        h('button', { class: 'hero-link', onclick: () => { abortSession(); renderHome(); } },
          MODE_TITLE[saved.mode] + ' ' + answeredCount(saved) + '/' + saved.ids.length + ' · verwerfen'));
    } else {
      actions.push(h('button', { class: 'btn btn-hero', onclick: startSmart }, icon('play'), today ? 'Weiterlernen' : 'Los geht’s'));
      if (mistakes + due) {
        const parts = [mistakes ? plural(mistakes, 'Fehler', 'Fehler') : null, due ? due + ' fällige' : null].filter(Boolean);
        actions.push(h('button', { class: 'hero-link', onclick: startReview }, icon('repeat'), parts.join(' + ') + ' wiederholen'));
      }
    }

    const reached = today >= goal;
    const hero = h('section', { class: 'hero' },
      h('div', { class: 'hero-top' },
        ring(Math.min(100, Math.round((today / goal) * 100)), 'lg', '#ffffff', h('span', {}, h('b', {}, today), h('small', {}, '/' + goal))),
        h('div', {},
          h('p', { class: 'hero-kicker' }, 'Tagesziel'),
          h('p', { class: 'hero-title' }, reached ? 'Geschafft!' : 'Noch ' + plural(goal - today, 'Frage', 'Fragen')))),
      actions);

    const quick = h('div', { class: 'quick' },
      quickBtn('bolt', 'Blitzrunde', '#/blitz'),
      quickBtn('stopwatch', 'Klausur', '#/exam'),
      quickBtn('chart', 'Statistik', '#/stats'));

    const tiles = h('div', { class: 'tiles' }, availableChapters().map(ch => {
      const p = Q.progress(all.filter(q => q.chapter === ch.id));
      return h('button', { class: 'tile', style: '--c:' + ch.color, onclick: () => go('#/chapter/' + ch.id) },
        art(ch.art, 'art-xl'),
        h('span', { class: 'tile-name' }, ch.short),
        h('span', { class: 'tile-foot' },
          h('span', { class: 'tile-bar' }, h('span', { style: 'width:' + p.pct + '%' })),
          h('span', { class: 'tile-pct' }, p.pct + '%')));
    }));

    const soon = PQ.chapters.filter(c => !c.available);
    const upcoming = soon.length
      ? h('div', { class: 'upcoming' },
        h('span', { class: 'upcoming-label' }, 'Bald'),
        h('span', { class: 'upcoming-row' }, soon.map(c => art(c.art, 'art-sm', c.short))))
      : null;

    mount(h('main', { class: 'screen home' },
      head, hero, quick,
      h('div', { class: 'row-head' },
        h('h2', { class: 'h2' }, 'Kapitel'),
        h('button', { class: 'link', onclick: () => go('#/practice') }, 'Eigene Runde', icon('right'))),
      tiles, upcoming));
  }

  function quickBtn(artName, label, hash) {
    return h('button', { class: 'quick-btn', onclick: () => go(hash) }, art(artName, 'art-lg'), label);
  }

  /* ================= Kapitel ================= */

  function renderChapter(id) {
    const ch = PQ.chapters.find(c => c.id === id && c.available);
    if (!ch) { go('#/'); return; }
    const qs = PQ.questions.filter(q => q.chapter === id);
    const p = Q.progress(qs);
    const altCount = qs.filter(q => q.alt).length;
    const secIds = ch.sections.map(s => s.id);

    // Zuletzt gestartete Auswahl dieses Kapitels; Standard: alle Themen, alle Fragen, gemischt
    const saved = (S.pref('chapter') || {})[id] || {};
    const sel = new Set((saved.sections || secIds).filter(s => secIds.includes(s)));
    let count = saved.count === undefined ? 0 : saved.count;
    let order = saved.order || 'mix';
    const only = new Set(['openOnly', 'altOnly'].filter(k => saved[k] && (k !== 'altOnly' || altCount)));
    const opts = () => ({
      id, sections: secIds.filter(s => sel.has(s)), count, order,
      altOnly: only.has('altOnly'), openOnly: only.has('openOnly')
    });
    const matching = sections => Q.filter({ sections, types: ALL_TYPES, altOnly: only.has('altOnly'), openOnly: only.has('openOnly') }).length;

    const startBtn = h('button', { class: 'btn btn-chapter btn-block btn-xl', onclick: start }, icon('play'), 'Starten');
    const summary = h('p', { class: 'setup-summary' });
    const allBtn = h('button', {
      class: 'link',
      onclick: () => {
        const allOn = sel.size === secIds.length;
        secIds.forEach(s => (allOn ? sel.delete(s) : sel.add(s)));
        update();
      }
    });

    const rows = ch.sections.map(s => {
      const sq = qs.filter(q => q.sec === s.id);
      const sp = Q.progress(sq);
      const countEl = h('span', {});
      const btn = h('button', {
        class: 'topic topic-pick',
        onclick: () => {
          if (sel.has(s.id)) sel.delete(s.id); else sel.add(s.id);
          update();
        }
      },
        ring(sp.pct, 'sm', ch.color, sp.pct === 100 ? icon('check') : false),
        h('span', { class: 'grow' },
          h('span', { class: 'topic-title' }, s.title),
          h('span', { class: 'topic-meta' }, s.id + ' · ', countEl, s.stars ? ' · ' : null, stars(s.stars))),
        h('span', { class: 'checkbox' }, icon('check')));
      return { s, btn, countEl, total: sq.length };
    });

    function update() {
      rows.forEach(r => {
        const on = sel.has(r.s.id);
        const n = matching([r.s.id]);
        r.btn.classList.toggle('on', on);
        r.btn.setAttribute('aria-pressed', String(on));
        r.countEl.textContent = (n < r.total ? n + ' von ' : '') + plural(r.total, 'Frage', 'Fragen');
      });
      allBtn.textContent = sel.size === secIds.length ? 'Alle abwählen' : 'Alle auswählen';
      const n = matching(opts().sections);
      const k = count ? Math.min(count, n) : n;
      startBtn.disabled = n === 0;
      summary.textContent = !sel.size ? 'Bitte mindestens ein Thema wählen'
        : n ? plural(k, 'Frage', 'Fragen') + (k < n ? ' von ' + n : '')
          : only.has('openOnly') ? 'Keine offenen Fragen in der Auswahl' : 'Keine Fragen passen zur Auswahl';
    }

    function start() {
      const o = opts();
      const all = S.pref('chapter') || {};
      all[id] = { sections: o.sections, count, order, altOnly: o.altOnly, openOnly: o.openOnly };
      S.pref('chapter', all);
      startChapter(o);
    }

    const filters = [['openOnly', 'Nur offene']].concat(altCount ? [['altOnly', 'Nur Altfragen (' + altCount + ')']] : []);

    mount(h('main', { class: 'screen chapter has-footer', style: '--c:' + ch.color },
      topbar(''),
      h('section', { class: 'ch-hero' },
        art(ch.art, 'art-hero'),
        h('h1', { class: 'ch-hero-title' }, ch.short),
        h('p', { class: 'ch-hero-sub' }, plural(qs.length, 'Frage', 'Fragen') + ' · ' + p.pct + ' % sitzen', ch.stars ? ' · ' : null, stars(ch.stars)),
        h('span', { class: 'ch-hero-bar' }, h('span', { style: 'width:' + p.pct + '%' }))),
      h('div', { class: 'row-head' }, h('h2', { class: 'h2' }, 'Themen'), allBtn),
      h('div', { class: 'topics' }, rows.map(r => r.btn)),
      h('h2', { class: 'label' }, 'Anzahl'),
      segmented([[10, '10'], [25, '25'], [50, '50'], [0, 'Alle']], count, v => { count = v; update(); }, 'Anzahl'),
      h('h2', { class: 'label' }, 'Reihenfolge'),
      segmented([['mix', 'Gemischt'], ['topics', 'Nach Themen']], order, v => { order = v; }, 'Reihenfolge'),
      h('h2', { class: 'label' }, 'Auswahl'),
      chipGroup(filters, only, update),
      h('p', { class: 'note' }, 'Offen = neu oder zuletzt falsch beantwortet.'),
      h('footer', { class: 'footer footer-col' }, summary, startBtn)));
    update();
  }

  /* ================= Einstellungen der Modi ================= */

  function renderPracticeSetup() {
    const prefs = S.pref('practice') || {};
    const valid = new Set(allSectionIds());
    const sel = new Set((presetSections || prefs.sections || [...valid]).filter(id => valid.has(id)));
    presetSections = null;
    const types = new Set(prefs.types || ['single', 'kprim', 'match']);
    let altOnly = !!prefs.altOnly;
    let minStars = prefs.minStars || 0;
    let count = prefs.count === undefined ? 20 : prefs.count;

    const startBtn = h('button', { class: 'btn btn-primary btn-block btn-xl', onclick: start });
    const summary = h('p', { class: 'setup-summary' });
    const opts = () => ({ sections: [...sel], types: [...types], altOnly, minStars });

    function update() {
      const n = Q.filter(opts()).length;
      const k = count ? Math.min(count, n) : n;
      startBtn.disabled = n === 0;
      startBtn.textContent = 'Starten';
      summary.textContent = n ? plural(k, 'Frage', 'Fragen') + (k < n ? ' von ' + n : '') : 'Keine Fragen passen zur Auswahl';
    }

    function start() {
      S.pref('practice', { sections: [...sel], types: [...types], altOnly, minStars, count });
      startSession('practice', Q.take(Q.prioritize(Q.filter(opts())), count), { origin: { kind: 'custom' } });
    }

    const countFor = ids => Q.filter(Object.assign(opts(), { sections: ids })).length;
    // Zähler im Picker hängen auch von Typ/Filter ab → bei Filteränderung neu aufbauen
    let pickerEl = sectionPicker(sel, update, countFor);
    function refreshPicker() {
      const fresh = sectionPicker(sel, update, countFor);
      const openStates = [...pickerEl.querySelectorAll('.pick-secs')].map(e => !e.hidden);
      fresh.querySelectorAll('.pick-secs').forEach((e, i) => {
        if (openStates[i]) {
          e.hidden = false;
          const t = e.parentElement.querySelector('.pick-toggle');
          t.classList.add('open');
          t.setAttribute('aria-expanded', 'true');
        }
      });
      pickerEl.replaceWith(fresh);
      pickerEl = fresh;
    }
    const onFilter = () => { update(); refreshPicker(); };

    mount(h('main', { class: 'screen setup has-footer' },
      topbar('Eigene Runde'),
      h('h2', { class: 'label' }, 'Themen'),
      pickerEl,
      h('h2', { class: 'label' }, 'Fragetypen'),
      chipGroup(ALL_TYPES.map(t => [t, Q.TYPE_LABEL[t]]), types, onFilter),
      h('h2', { class: 'label' }, 'Auswahl'),
      segmented([[false, 'Alle Fragen'], [true, 'Nur Altfragen']], altOnly, v => { altOnly = v; onFilter(); }, 'Auswahl'),
      segmented([[0, 'Alle'], [2, [stars(2), ' und mehr']], [3, stars(3)]], minStars, v => { minStars = v; onFilter(); }, 'Häufigkeit'),
      h('h2', { class: 'label' }, 'Anzahl'),
      segmented([[10, '10'], [20, '20'], [0, 'Alle']], count, v => { count = v; update(); }, 'Anzahl'),
      h('footer', { class: 'footer footer-col' }, summary, startBtn)));
    update();
  }

  function chapterPrefs(prefs) {
    const avail = availableChapters().map(c => c.id);
    return new Set((prefs.chapters || avail).filter(id => avail.includes(id)));
  }

  function renderExamSetup() {
    const prefs = S.pref('exam') || {};
    const chs = chapterPrefs(prefs);
    let count = prefs.count === undefined ? 20 : prefs.count;
    let perQ = prefs.perQ === undefined ? 90 : prefs.perQ;
    const types = ['single', 'kprim'];
    const pool = () => PQ.questions.filter(q => chs.has(q.chapter) && types.includes(q.type));
    const startBtn = h('button', { class: 'btn btn-primary btn-block btn-xl', onclick: start }, 'Klausur starten');
    const summary = h('p', { class: 'setup-summary' });

    function update() {
      const n = pool().length;
      const k = count ? Math.min(count, n) : n;
      startBtn.disabled = n === 0;
      summary.textContent = n
        ? plural(k, 'Frage', 'Fragen') + ' · ' + (perQ ? Math.round((k * perQ) / 60) + ' Minuten' : 'ohne Zeitlimit')
        : 'Bitte mindestens ein Kapitel wählen';
    }

    function start() {
      S.pref('exam', { chapters: [...chs], count, perQ });
      const qs = Q.take(Q.shuffle(pool()), count);
      startSession('exam', qs, Object.assign({ origin: { kind: 'exam' } }, perQ ? { endsAt: Date.now() + qs.length * perQ * 1000 } : {}));
    }

    mount(h('main', { class: 'screen setup has-footer' },
      topbar('Klausur'),
      h('div', { class: 'setup-hero' },
        art('stopwatch', 'art-xl'),
        h('p', {}, 'Wie in der Prüfung: Einfachauswahl und K-prim. Lösungen gibt’s erst nach der Abgabe.')),
      h('h2', { class: 'label' }, 'Kapitel'),
      chapterChips(chs, update),
      h('h2', { class: 'label' }, 'Fragen'),
      segmented([[20, '20'], [40, '40'], [0, 'Alle']], count, v => { count = v; update(); }, 'Anzahl'),
      h('h2', { class: 'label' }, 'Zeit pro Frage'),
      segmented([[0, 'Ohne'], [60, '1 min'], [90, '1,5 min']], perQ, v => { perQ = v; update(); }, 'Zeit'),
      h('footer', { class: 'footer footer-col' }, summary, startBtn)));
    update();
  }

  function renderBlitzSetup() {
    const prefs = S.pref('blitz') || {};
    const chs = chapterPrefs(prefs);
    let count = prefs.count === undefined ? 20 : prefs.count;
    const pool = () => PQ.questions.filter(q => chs.has(q.chapter) && q.type === 'tf');
    const startBtn = h('button', { class: 'btn btn-primary btn-block btn-xl', onclick: start }, 'Start');
    const summary = h('p', { class: 'setup-summary' });

    function update() {
      const n = pool().length;
      const k = count ? Math.min(count, n) : n;
      startBtn.disabled = n === 0;
      summary.textContent = n ? plural(k, 'Aussage', 'Aussagen') : 'Bitte mindestens ein Kapitel wählen';
    }

    function start() {
      S.pref('blitz', { chapters: [...chs], count });
      startSession('blitz', Q.take(Q.prioritize(pool()), count), { origin: { kind: 'blitz' } });
    }

    mount(h('main', { class: 'screen setup has-footer' },
      topbar('Blitzrunde'),
      h('div', { class: 'setup-hero' },
        art('bolt', 'art-xl'),
        h('p', {}, 'Richtig oder falsch? Nach rechts wischen = richtig, nach links = falsch.')),
      h('h2', { class: 'label' }, 'Kapitel'),
      chapterChips(chs, update),
      h('h2', { class: 'label' }, 'Aussagen'),
      segmented([[20, '20'], [40, '40'], [0, 'Alle']], count, v => { count = v; update(); }, 'Anzahl'),
      h('footer', { class: 'footer footer-col' }, summary, startBtn)));
    update();
  }

  /* ================= Fragetypen ================= */
  // ctx: { value, locked, solved, onChange(value) }; Renderer setzen ctx.repaint (und ggf. ctx.key)

  function renderSingle(q, view, ctx) {
    const list = h('div', { class: 'opts' });
    function paint() {
      list.replaceChildren(...view.order.map((oi, pos) => {
        const selected = ctx.value === oi;
        let cls = 'opt';
        if (ctx.solved) cls += oi === q.a ? ' ok' : selected ? ' bad' : ' dim';
        else if (selected) cls += ' sel';
        return h('button', {
          class: cls, disabled: ctx.locked, 'aria-pressed': String(selected),
          onclick: () => { ctx.value = oi; paint(); ctx.onChange(oi); }
        },
          h('span', { class: 'opt-key' }, ctx.solved && oi === q.a ? icon('check') : ctx.solved && selected ? icon('x') : LETTERS[pos]),
          h('span', { class: 'opt-text' }, q.opts[oi]));
      }));
    }
    ctx.repaint = paint;
    ctx.key = e => {
      if (ctx.locked) return false;
      const k = e.key.toUpperCase();
      let pos = LETTERS.indexOf(k);
      if (pos < 0 && /^[1-9]$/.test(k)) pos = Number(k) - 1;
      if (pos >= 0 && pos < view.order.length) {
        ctx.value = view.order[pos];
        paint();
        ctx.onChange(ctx.value);
        return true;
      }
      return false;
    };
    paint();
    return list;
  }

  function renderTF(q, view, ctx) {
    const wrap = h('div', { class: 'tf-btns' });
    function btn(val, label, ico) {
      const selected = ctx.value === val;
      let cls = 'opt tf-btn';
      if (ctx.solved) cls += val === q.a ? ' ok' : selected ? ' bad' : ' dim';
      else if (selected) cls += ' sel';
      return h('button', {
        class: cls, disabled: ctx.locked, 'aria-pressed': String(selected),
        onclick: () => { ctx.value = val; paint(); ctx.onChange(val); }
      }, icon(ico), label);
    }
    function paint() {
      wrap.replaceChildren(btn(true, 'Richtig', 'check'), btn(false, 'Falsch', 'x'));
    }
    ctx.repaint = paint;
    ctx.key = e => {
      if (ctx.locked) return false;
      const k = e.key.toLowerCase();
      const val = k === 'r' || k === 'arrowright' ? true : k === 'f' || k === 'arrowleft' ? false : null;
      if (val === null) return false;
      ctx.value = val;
      paint();
      ctx.onChange(val);
      return true;
    };
    paint();
    return wrap;
  }

  function renderKprim(q, view, ctx) {
    if (!Array.isArray(ctx.value)) ctx.value = [null, null, null, null];
    const list = h('div', { class: 'kprim' });
    function paint() {
      list.replaceChildren(...q.st.map(([text, truth], i) => {
        const v = ctx.value[i];
        let cls = 'kp-row';
        if (ctx.solved) cls += v === truth ? ' ok' : ' bad';
        const choice = (val, label, ico) => h('button', {
          class: 'kp-btn' + (v === val ? ' on' : '') + (ctx.solved && val === truth ? ' truth' : ''),
          disabled: ctx.locked, 'aria-pressed': String(v === val),
          onclick: () => { ctx.value[i] = val; paint(); ctx.onChange(ctx.value); }
        }, icon(ico), label);
        return h('div', { class: cls },
          h('p', { class: 'kp-text' }, text),
          h('div', { class: 'kp-choice', role: 'group', 'aria-label': 'Aussage ' + (i + 1) }, choice(true, 'richtig', 'check'), choice(false, 'falsch', 'x')));
      }));
    }
    ctx.repaint = paint;
    paint();
    return list;
  }

  function renderMatch(q, view, ctx) {
    const n = q.pairs.length;
    if (!Array.isArray(ctx.value)) ctx.value = Array(n).fill(null);
    let selLeft = null;
    let selRight = null;
    const wrap = h('div', { class: 'match' });

    const leftFor = ri => ctx.value.indexOf(ri);
    const badge = i => h('span', { class: 'pair-badge pc' + i }, i + 1);

    function assign(li, ri) {
      const prev = leftFor(ri);
      if (prev >= 0) ctx.value[prev] = null;
      ctx.value[li] = ri;
      selLeft = selRight = null;
      paint();
      ctx.onChange(ctx.value);
    }

    function paint() {
      const lefts = q.pairs.map(([term], i) => h('button', {
        class: 'term' + (selLeft === i ? ' sel' : '') + (ctx.value[i] !== null ? ' paired' : ''),
        disabled: ctx.locked, 'data-i': i,
        onclick: () => {
          if (selRight !== null) assign(i, selRight);
          else { selLeft = selLeft === i ? null : i; paint(); }
        }
      }, badge(i), h('span', {}, term)));

      const rights = view.order.map(ri => {
        const li = leftFor(ri);
        let cls = 'target' + (selRight === ri ? ' sel' : '');
        if (ctx.solved) cls += li === ri ? ' ok' : ' bad';
        else if (li >= 0) cls += ' filled';
        return h('button', {
          class: cls, disabled: ctx.locked, 'data-i': ri,
          onclick: () => {
            if (selLeft !== null) assign(selLeft, ri);
            else if (li >= 0) { ctx.value[li] = null; paint(); ctx.onChange(ctx.value); }
            else { selRight = selRight === ri ? null : ri; paint(); }
          }
        },
          h('span', { class: 'slot' + (li >= 0 ? ' filled' : '') }, li >= 0 ? badge(li) : null),
          h('span', { class: 'target-text' }, q.pairs[ri][1],
            ctx.solved && li !== ri ? h('span', { class: 'target-sol' }, 'Richtig: ', badge(ri), ' ', q.pairs[ri][0]) : null));
      });

      wrap.replaceChildren(h('div', { class: 'terms' }, lefts), h('div', { class: 'targets' }, rights));
    }
    ctx.repaint = paint;
    dragPairs(wrap, (kind, from, to) => (kind === 'term' ? assign(from, to) : assign(to, from)));
    paint();
    return wrap;
  }

  // Ziehen per Maus oder Finger: Begriff auf Beschreibung (oder umgekehrt) ziehen. Antippen bleibt möglich.
  // Am Touchscreen ziehen nur die Begriffe (touch-action: none), damit man auf den Beschreibungen weiter scrollen kann.
  function dragPairs(wrap, onDrop) {
    let drag = null;
    let suppressClick = false;
    const kindOf = el => (el.classList.contains('term') ? 'term' : 'target');

    function dropZoneAt(x, y) {
      const el = document.elementFromPoint(x, y);
      const zone = el && el.closest('.term, .target');
      return zone && wrap.contains(zone) && !zone.disabled && kindOf(zone) !== drag.kind ? zone : null;
    }

    function hover(zone) {
      if (zone === drag.over) return;
      if (drag.over) drag.over.classList.remove('drop-over');
      if (zone) zone.classList.add('drop-over');
      drag.over = zone;
    }

    // Am oberen bzw. unteren Rand (Kopfzeile, Fußleiste) mitscrollen, damit jede Beschreibung erreichbar ist
    function autoScroll() {
      if (!drag || !drag.ghost) return;
      const bar = document.querySelector('.quiz-top');
      const foot = document.querySelector('.footer');
      const top = (bar ? bar.getBoundingClientRect().bottom : 0) + 48;
      const bottom = (foot ? foot.getBoundingClientRect().top : window.innerHeight) - 48;
      const dy = drag.y < top ? -Math.min(18, (top - drag.y) / 3) : drag.y > bottom ? Math.min(18, (drag.y - bottom) / 3) : 0;
      if (dy) {
        window.scrollBy(0, dy);
        hover(dropZoneAt(drag.x, drag.y));
      }
      drag.raf = requestAnimationFrame(autoScroll);
    }

    function end(drop) {
      if (!drag) return;
      const d = drag;
      drag = null;
      if (!d.ghost) return;
      cancelAnimationFrame(d.raf);
      d.ghost.remove();
      d.src.classList.remove('drag-src');
      wrap.classList.remove('dragging');
      if (d.over) d.over.classList.remove('drop-over');
      suppressClick = true;
      setTimeout(() => { suppressClick = false; }, 0);
      if (drop && d.over) onDrop(d.kind, Number(d.src.dataset.i), Number(d.over.dataset.i));
    }

    wrap.addEventListener('pointerdown', e => {
      const src = e.target.closest('.term, .target');
      if (!src || src.disabled || e.button !== 0 || (drag && drag.ghost)) return;
      if (e.pointerType !== 'mouse' && kindOf(src) === 'target') return;
      const r = src.getBoundingClientRect();
      drag = { src, kind: kindOf(src), id: e.pointerId, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, dx: e.clientX - r.left, dy: e.clientY - r.top, ghost: null, over: null };
    });

    wrap.addEventListener('pointermove', e => {
      if (!drag || e.pointerId !== drag.id) return;
      drag.x = e.clientX;
      drag.y = e.clientY;
      if (!drag.ghost) {
        if (Math.hypot(drag.x - drag.x0, drag.y - drag.y0) < 8) return;
        const r = drag.src.getBoundingClientRect();
        drag.ghost = drag.src.cloneNode(true);
        drag.ghost.classList.add('drag-ghost');
        drag.ghost.removeAttribute('data-i');
        drag.ghost.style.width = r.width + 'px';
        document.body.append(drag.ghost);
        drag.src.classList.add('drag-src');
        wrap.classList.add('dragging');
        try { drag.src.setPointerCapture(drag.id); } catch (err) { /* ältere Browser */ }
        drag.raf = requestAnimationFrame(autoScroll);
      }
      e.preventDefault();
      drag.ghost.style.left = (drag.x - drag.dx) + 'px';
      drag.ghost.style.top = (drag.y - drag.dy) + 'px';
      hover(dropZoneAt(drag.x, drag.y));
    });

    wrap.addEventListener('pointerup', e => { if (drag && e.pointerId === drag.id) end(true); });
    wrap.addEventListener('pointercancel', e => { if (drag && e.pointerId === drag.id) end(false); });
    // Nur der Verlust am Knopf selbst zählt: Bei Touch hält zuerst das innere <span> die Erfassung und meldet deren Abgabe ebenfalls
    wrap.addEventListener('lostpointercapture', e => { if (drag && e.pointerId === drag.id && e.target === drag.src) end(false); });
    // Nach dem Ziehen keinen zusätzlichen Klick auslösen
    wrap.addEventListener('click', e => {
      if (!suppressClick) return;
      e.stopPropagation();
      e.preventDefault();
    }, true);
  }

  const RENDERERS = { single: renderSingle, tf: renderTF, kprim: renderKprim, match: renderMatch };
  const HINTS = {
    kprim: 'K-prim · jede Aussage einzeln bewerten',
    match: 'Begriff auf die passende Beschreibung ziehen oder nacheinander antippen'
  };

  function questionHead(q) {
    const ch = chapterOf(q);
    return h('div', { class: 'q-head' },
      h('div', { class: 'q-meta' },
        h('span', { class: 'q-chip' }, art(ch.art, 'art-xs'), sectionTitle(q.sec)),
        q.alt ? h('span', { class: 'q-chip q-alt' }, art('scroll', 'art-xs'), 'Altfrage ' + q.alt) : null),
      q.type === 'tf'
        ? h('p', { class: 'q-text statement' }, '„' + q.q + '“')
        : h('h2', { class: 'q-text' }, q.q),
      HINTS[q.type] ? h('p', { class: 'hint' }, HINTS[q.type]) : null);
  }

  function resultTone(res) {
    return res.correct ? 'ok' : res.score > 0 ? 'part' : 'bad';
  }

  function resultTitle(q, res) {
    if (res.skipped) return 'Nicht beantwortet';
    if (res.correct) return pick(PRAISE);
    if (q.type === 'kprim') return res.hits === 3 ? 'Fast! 3 von 4' : res.hits + ' von 4 richtig';
    if (q.type === 'match') return res.hits + ' von ' + q.pairs.length + ' Paaren';
    return 'Nicht ganz';
  }

  // Rückmeldung: als Leiste unten (onNext gesetzt) oder eingebettet in der Auswertung
  function feedback(q, res, onNext, nextLabel) {
    const tone = resultTone(res);
    const pts = Q.points(res.score);
    const body = [
      q.type === 'tf' ? h('p', { class: 'fb-truth' }, 'Die Aussage ist ' + (q.a ? 'richtig.' : 'falsch.')) : null,
      h('p', { class: 'fb-ex' }, q.ex),
      q.dis ? h('div', { class: 'dis' }, icon('alert'), h('p', {}, h('b', {}, 'Umstritten: '), q.dis)) : null,
      h('p', { class: 'src' }, sourceLine(q))
    ];
    const title = h('div', { class: 'fb-title' },
      h('span', { class: 'fb-badge' }, icon(tone === 'ok' ? 'check' : tone === 'part' ? 'alert' : 'x')),
      h('span', { class: 'grow' }, resultTitle(q, res)),
      pts ? h('span', { class: 'fb-pts' }, '+' + pts) : null);
    if (!onNext) return h('section', { class: 'fb fb-inline ' + tone }, title, body);
    return h('section', { class: 'fb sheet ' + tone, 'aria-live': 'polite' },
      h('div', { class: 'sheet-inner' },
        title,
        h('div', { class: 'sheet-body' }, body),
        h('button', { class: 'btn btn-block btn-xl btn-' + (tone === 'ok' ? 'ok' : tone === 'part' ? 'warn' : 'bad'), onclick: onNext }, nextLabel)));
  }

  // Hinter dem X (Üben, Wiederholen, Blitzrunde): auswerten, pausieren oder weitermachen
  function exitMenu(s) {
    const n = answeredCount(s);
    const prevKey = keyHandler;
    const close = () => { wrap.remove(); keyHandler = prevKey; };
    const wrap = h('div', { class: 'menu-wrap', onclick: e => { if (e.target === wrap) close(); } },
      h('div', { class: 'menu', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'menu-title' },
        h('h2', { class: 'menu-title', id: 'menu-title' }, 'Runde unterbrechen?'),
        h('p', { class: 'muted small' }, n
          ? n + ' von ' + plural(s.ids.length, 'Frage', 'Fragen') + ' beantwortet. Die Antworten sind schon gespeichert.'
          : 'Noch keine Frage beantwortet.'),
        n
          ? h('button', { class: 'btn btn-primary btn-block btn-xl', onclick: () => finishSession() }, 'Beenden und auswerten')
          : h('button', { class: 'btn btn-primary btn-block btn-xl', onclick: () => { abortSession(); go('#/'); } }, 'Runde beenden'),
        h('button', { class: 'btn btn-soft btn-block', onclick: () => go('#/') }, 'Pause – später fortsetzen'),
        h('button', { class: 'link link-center', onclick: close }, 'Weiterüben')));
    // In #app, damit der nächste Bildschirm (mount) das Menü mit entfernt
    root.append(wrap);
    keyHandler = e => { if (e.key === 'Escape') close(); };
    wrap.querySelector('.btn').focus();
  }

  /* ================= Quiz (Üben, Wiederholen, Klausur) ================= */

  function renderQuiz() {
    const s = restoreSession();
    if (!s || s.mode === 'blitz') { go('#/'); return; }
    const exam = s.mode === 'exam';
    const q = PQ.byId[s.ids[s.idx]];
    const view = s.views[s.idx];
    const total = s.ids.length;
    const last = s.idx === total - 1;
    let result = exam ? null : s.results[s.idx];

    const ctx = {
      value: clone(s.responses[s.idx]),
      locked: !!result,
      solved: !!result,
      onChange: v => {
        if (exam) {
          s.responses[s.idx] = clone(v);
          persist();
          paintNav();
        }
        refreshFooter();
      }
    };
    const answer = RENDERERS[q.type](q, view, ctx);

    const answeredAt = i => (exam ? Q.isComplete(PQ.byId[s.ids[i]], s.responses[i]) : s.results[i] !== null);
    const doneCount = () => s.ids.filter((id, i) => answeredAt(i)).length;
    const bar = h('span', { style: 'width:' + (doneCount() / total) * 100 + '%' });
    const combo = h('span', { class: 'combo' + (s.combo >= 2 ? '' : ' hidden') }, icon('flame', 'ico-flame'), h('b', {}, s.combo));
    const timeEl = s.endsAt ? h('span', { class: 'timer' }, icon('clock'), h('span', {}, fmtTime(s.endsAt - Date.now()))) : null;
    const navGrid = exam ? h('div', { class: 'nav-grid', hidden: true }) : null;

    const head = h('header', { class: 'quiz-top' },
      h('button', {
        class: 'icon-btn', 'aria-label': 'Runde beenden',
        onclick: () => {
          if (!exam) exitMenu(s);
          else if (confirm('Klausur abbrechen? Deine Antworten gehen verloren.')) { abortSession(); go('#/'); }
        }
      }, icon('x')),
      h('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(total), 'aria-valuenow': String(doneCount()) }, bar),
      h('span', { class: 'q-count', 'aria-label': 'Frage ' + (s.idx + 1) + ' von ' + total }, (s.idx + 1) + '/' + total),
      exam ? timeEl : combo,
      exam ? h('button', { class: 'icon-btn', 'aria-label': 'Fragenübersicht', onclick: () => { navGrid.hidden = !navGrid.hidden; } }, icon('grid')) : null);

    function paintNav() {
      if (!navGrid) return;
      navGrid.replaceChildren(...s.ids.map((id, i) => h('button', {
        class: 'nav-cell' + (answeredAt(i) ? ' done' : '') + (i === s.idx ? ' cur' : ''),
        'aria-label': 'Frage ' + (i + 1),
        onclick: () => { s.idx = i; persist(); renderQuiz(); }
      }, i + 1)));
    }
    paintNav();

    const main = h('main', { class: 'screen quiz has-footer' });
    const footer = h('footer', { class: 'footer' });
    let primary = null;

    function refreshFooter() {
      if (result) return;
      if (exam) {
        primary = h('button', { class: 'btn btn-primary grow btn-xl', onclick: () => (last ? submitExam() : move(1)) }, last ? 'Abgeben' : 'Weiter');
        footer.replaceChildren(h('button', { class: 'btn btn-soft', disabled: s.idx === 0, onclick: () => move(-1), 'aria-label': 'Vorherige Frage' }, icon('back')), primary);
      } else {
        primary = h('button', { class: 'btn btn-primary btn-block btn-xl', disabled: !Q.isComplete(q, ctx.value), onclick: check }, 'Prüfen');
        footer.replaceChildren(primary);
      }
    }

    function showSheet() {
      const sheet = feedback(q, result, next, last ? 'Zur Auswertung' : 'Weiter');
      footer.replaceWith(sheet);
      primary = sheet.querySelector('.btn');
      requestAnimationFrame(() => {
        main.style.paddingBottom = sheet.offsetHeight + 24 + 'px';
        const limit = window.innerHeight - sheet.offsetHeight - 12;
        const r = answer.getBoundingClientRect();
        if (r.bottom > limit) window.scrollBy({ top: Math.min(r.bottom - limit, r.top - 70), behavior: 'smooth' });
      });
    }

    function check() {
      if (!Q.isComplete(q, ctx.value)) return;
      result = answerCurrent(clone(ctx.value));
      ctx.locked = ctx.solved = true;
      ctx.repaint();
      bar.style.width = (doneCount() / total) * 100 + '%';
      combo.classList.toggle('hidden', s.combo < 2);
      combo.lastChild.textContent = s.combo;
      showSheet();
    }

    function next() {
      if (last) { finishSession(); return; }
      s.idx += 1;
      persist();
      renderQuiz();
    }

    function move(d) {
      s.idx = Math.min(Math.max(s.idx + d, 0), total - 1);
      persist();
      renderQuiz();
    }

    function submitExam() {
      const open = s.ids.filter((id, i) => !answeredAt(i)).length;
      if (open && !confirm(plural(open, 'Frage ist', 'Fragen sind') + ' noch unbeantwortet. Trotzdem abgeben?')) return;
      finishSession();
    }

    refreshFooter();
    main.append(head, navGrid || '', questionHead(q), answer, footer);
    mount(main);
    if (result) showSheet();

    if (s.endsAt) {
      const tick = () => {
        const left = s.endsAt - Date.now();
        timeEl.lastChild.textContent = fmtTime(left);
        timeEl.classList.toggle('low', left < 60000);
        if (left <= 0) { clearInterval(timer); timer = null; toast('Zeit abgelaufen'); finishSession(); }
      };
      timer = setInterval(tick, 1000);
      tick();
    }

    keyHandler = e => {
      if (e.key === 'Enter') {
        if (primary && !primary.disabled) { e.preventDefault(); primary.click(); }
        return;
      }
      if (exam && e.key === 'ArrowLeft' && q.type !== 'tf') { move(-1); return; }
      if (exam && e.key === 'ArrowRight' && q.type !== 'tf') { move(1); return; }
      if (ctx.key) ctx.key(e);
    };
  }

  /* ================= Blitzrunde ================= */

  function renderBlitz() {
    const s = restoreSession();
    if (!s || s.mode !== 'blitz') { go('#/'); return; }
    const total = s.ids.length;
    const q = PQ.byId[s.ids[s.idx]];
    const ch = chapterOf(q);
    const done = s.results.filter(r => r !== null).length;
    let busy = false;

    const card = h('div', { class: 'swipe-card', tabindex: '0', style: '--c:' + ch.color },
      h('span', { class: 'swipe-sec' }, art(ch.art, 'art-xs'), sectionTitle(q.sec)),
      h('p', { class: 'swipe-text' }, q.q),
      h('span', { class: 'stamp stamp-true' }, 'richtig'),
      h('span', { class: 'stamp stamp-false' }, 'falsch'));
    const main = h('main', { class: 'screen quiz blitz has-footer' });
    const footer = h('footer', { class: 'footer round-btns' },
      h('button', { class: 'round-wrap', 'aria-label': 'Falsch', onclick: () => answer(false) }, h('span', { class: 'round-btn bad' }, icon('x')), 'Falsch'),
      h('button', { class: 'round-wrap', 'aria-label': 'Richtig', onclick: () => answer(true) }, h('span', { class: 'round-btn ok' }, icon('check')), 'Richtig'));

    const head = h('header', { class: 'quiz-top' },
      h('button', {
        class: 'icon-btn', 'aria-label': 'Runde beenden',
        onclick: () => exitMenu(s)
      }, icon('x')),
      h('div', { class: 'progress' }, h('span', { style: 'width:' + (done / total) * 100 + '%' })),
      h('span', { class: 'q-count', 'aria-label': 'Aussage ' + (s.idx + 1) + ' von ' + total }, (s.idx + 1) + '/' + total),
      h('span', { class: 'combo' }, icon('flame', 'ico-flame'), h('b', {}, s.combo)));

    function nextCard() {
      if (s.idx >= total - 1) { finishSession(); return; }
      s.idx += 1;
      persist();
      renderBlitz();
    }

    function answer(val) {
      if (busy) return;
      busy = true;
      const res = answerCurrent(val);
      card.style.transform = '';
      if (res.correct) {
        card.classList.add(val ? 'fly-right' : 'fly-left', 'flash-ok');
        setTimeout(nextCard, 320);
      } else {
        card.classList.add('flash-bad');
        const sheet = feedback(q, res, nextCard, s.idx >= total - 1 ? 'Zur Auswertung' : 'Weiter');
        footer.replaceWith(sheet);
        requestAnimationFrame(() => { main.style.paddingBottom = sheet.offsetHeight + 24 + 'px'; });
        keyHandler = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); nextCard(); } };
      }
    }

    // Wischen per Pointer-Events
    let startX = null;
    let dx = 0;
    card.addEventListener('pointerdown', e => {
      if (busy) return;
      startX = e.clientX;
      dx = 0;
      card.setPointerCapture(e.pointerId);
      card.classList.add('dragging');
    });
    card.addEventListener('pointermove', e => {
      if (startX === null) return;
      dx = e.clientX - startX;
      card.style.transform = 'translateX(' + dx + 'px) rotate(' + dx / 18 + 'deg)';
      card.classList.toggle('lean-true', dx > 40);
      card.classList.toggle('lean-false', dx < -40);
    });
    const end = () => {
      if (startX === null) return;
      startX = null;
      card.classList.remove('dragging', 'lean-true', 'lean-false');
      if (Math.abs(dx) > 90) answer(dx > 0);
      else card.style.transform = '';
    };
    card.addEventListener('pointerup', end);
    card.addEventListener('pointercancel', end);

    main.append(head, h('div', { class: 'swipe-stage' }, h('div', { class: 'swipe-back' }), card), footer);
    mount(main);

    keyHandler = e => {
      if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'f') answer(false);
      else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'r') answer(true);
    };
  }

  /* ================= Auswertung ================= */

  function renderResult() {
    const r = lastResult;
    if (!r) { go('#/'); return; }
    const total = r.ids.length;
    const results = r.results.map(x => x || { correct: false, score: 0, skipped: true });
    const correct = results.filter(x => x.correct).length;
    const score = results.reduce((a, x) => a + x.score, 0);
    const exam = r.mode === 'exam';
    const pct = Math.round(((exam ? score : correct) / total) * 100);
    const earned = results.reduce((a, x) => a + Q.points(x.score), 0);
    const wrongIds = r.ids.filter((id, i) => !results[i].correct);
    const [heroArt, verdict] = pct >= 90 ? ['trophy', 'Hervorragend!'] : pct >= 75 ? ['medal', 'Sehr gut!'] : pct >= 50 ? ['target', 'Gut gemacht!'] : ['books', 'Dranbleiben!'];
    const again = AGAIN[(r.origin && r.origin.kind) || 'review'] || AGAIN.review;

    const list = h('div', { class: 'res-list', hidden: true }, r.ids.map((id, i) => {
      const q = PQ.byId[id];
      const res = results[i];
      const detail = h('div', { class: 'res-detail', hidden: true });
      const row = h('button', {
        class: 'res-row', 'aria-expanded': 'false',
        onclick: () => {
          if (!detail.childElementCount) {
            const ctx = { value: clone(r.responses[i]), locked: true, solved: true, onChange: () => {} };
            detail.append(questionHead(q), RENDERERS[q.type](q, r.views[i], ctx), feedback(q, res));
          }
          detail.hidden = !detail.hidden;
          row.setAttribute('aria-expanded', String(!detail.hidden));
          row.classList.toggle('open', !detail.hidden);
        }
      },
        h('span', { class: 'res-ico ' + resultTone(res) }, icon(res.correct ? 'check' : res.score > 0 ? 'alert' : 'x')),
        h('span', { class: 'res-text' }, q.q),
        exam ? h('span', { class: 'res-score' }, fmtNum(res.score)) : null,
        icon('down', 'ico-muted res-chev'));
      return h('div', { class: 'res-item' }, row, detail);
    }));
    const toggleList = h('button', {
      class: 'link link-center',
      onclick: () => {
        list.hidden = !list.hidden;
        toggleList.firstChild.textContent = list.hidden ? 'Antworten ansehen' : 'Antworten ausblenden';
      }
    }, 'Antworten ansehen', icon('down'));

    const footer = h('footer', { class: 'footer' },
      wrongIds.length ? h('button', {
        class: 'btn btn-soft grow',
        onclick: () => startSession(r.mode === 'blitz' ? 'blitz' : 'practice', wrongIds.map(id => PQ.byId[id]), { origin: { kind: 'review' } })
      }, icon('repeat'), 'Fehler (' + wrongIds.length + ')') : null,
      h('button', { class: 'btn btn-primary grow btn-xl', onclick: () => again.run(r.origin || {}) }, again.label));

    mount(h('main', { class: 'screen result has-footer' },
      h('header', { class: 'topbar' },
        h('button', { class: 'icon-btn', 'aria-label': 'Zur Startseite', onclick: () => go('#/') }, icon('x'))),
      h('section', { class: 'result-hero' },
        art(heroArt, 'art-result'),
        h('h1', { class: 'result-title' }, verdict),
        h('p', { class: 'muted' }, exam ? 'Klausur ausgewertet · ' + pct + ' %' : MODE_TITLE[r.mode] + ' beendet')),
      h('div', { class: 'result-stats' },
        rstat('check', exam ? fmtNum(score) + '/' + total : correct + '/' + total, exam ? 'Punkte' : 'Richtig'),
        rstat('star', '+' + earned, 'XP'),
        rstat('flame', r.bestCombo, 'Beste Serie')),
      exam ? h('p', { class: 'muted small center' }, 'K-prim: 4 richtig = 1 Punkt, 3 richtig = ½ Punkt') : null,
      toggleList,
      list,
      footer));
    if (pct >= 80) setTimeout(confetti, 200);
  }

  function rstat(artName, value, label) {
    return h('div', { class: 'rstat' },
      art(artName, 'art-sm'),
      h('span', { class: 'rstat-val' }, value),
      h('span', { class: 'rstat-label' }, label));
  }

  /* ================= Statistik ================= */

  function renderStats() {
    const all = PQ.questions;
    const p = Q.progress(all);
    const states = all.map(q => S.get(q.id));
    const attempts = states.reduce((a, s) => a + (s ? s.n : 0), 0);
    const hits = states.reduce((a, s) => a + (s ? s.c : 0), 0);
    const mistakes = all.filter(q => Q.mastery(q.id) === 'mistake').length;
    const goal = S.setting('dailyGoal') || S.DEFAULT_GOAL;

    // Woche: eine Reihe, heute hervorgehoben, Wert nur an heute und am Maximum
    const days = S.recentDays(7);
    const max = Math.max(goal, ...days.map(d => d.count));
    const peak = Math.max(...days.map(d => d.count));
    const week = h('div', { class: 'week', role: 'img', 'aria-label': 'Beantwortete Fragen: ' + days.map(d => d.label + ' ' + d.count).join(', ') },
      h('span', { class: 'week-goal', style: 'bottom:calc(' + (goal / max).toFixed(4) + ' * var(--plot) + var(--base))' }, h('span', {}, 'Ziel')),
      days.map(d => h('div', {
        class: 'week-day' + (d.today ? ' today' : ''),
        title: d.date.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'numeric' }) + ': ' + plural(d.count, 'Frage', 'Fragen')
      },
        h('span', { class: 'week-val' }, d.count && (d.today || d.count === peak) ? d.count : ''),
        h('span', { class: 'week-track' }, h('span', { class: 'week-bar', style: 'height:' + (d.count ? Math.max(4, (d.count / max) * 100) : 0) + '%' })),
        h('span', { class: 'week-label' }, d.label))));

    // Lernstand als gestapelter Balken (Teil-vom-Ganzen) mit Legende inkl. Werten
    const parts = [
      ['new', 'Neu', all.length - p.seen],
      ['bad', 'Fehler offen', mistakes],
      ['learn', 'In Arbeit', p.known - p.solid],
      ['solid', 'Gefestigt', p.solid]
    ];
    const stack = h('div', { class: 'stack', role: 'img', 'aria-label': parts.map(x => x[1] + ' ' + x[2]).join(', ') },
      parts.filter(x => x[2] > 0).map(([k, label, n]) => h('span', { class: 'stack-seg seg-' + k, style: 'flex-grow:' + n, title: label + ': ' + n })));
    const legend = h('ul', { class: 'legend' }, parts.map(([k, label, n]) =>
      h('li', {}, h('span', { class: 'swatch seg-' + k }), label, h('b', {}, n))));

    const chRows = availableChapters().map(ch => {
      const cp = Q.progress(all.filter(q => q.chapter === ch.id));
      return h('button', { class: 'topic', onclick: () => go('#/chapter/' + ch.id) },
        ring(cp.pct, 'sm', ch.color, false),
        h('span', { class: 'grow' },
          h('span', { class: 'topic-title' }, art(ch.art, 'art-xs'), ' ', ch.short),
          h('span', { class: 'topic-meta' }, cp.pct + ' % sitzen · ' + cp.seen + ' von ' + cp.total + ' gesehen')),
        icon('right', 'ico-muted'));
    });

    // Schwachstellen: Themen mit mind. 3 Antworten unter 80 %
    const bySec = {};
    all.forEach(q => {
      const s = S.get(q.id);
      if (!s) return;
      const b = bySec[q.sec] || (bySec[q.sec] = { n: 0, c: 0 });
      b.n += s.n;
      b.c += s.c;
    });
    const weak = Object.entries(bySec)
      .filter(([, v]) => v.n >= 3 && v.c / v.n < 0.8)
      .sort((a, b) => a[1].c / a[1].n - b[1].c / b[1].n)
      .slice(0, 5);

    mount(h('main', { class: 'screen stats' },
      topbar('Statistik'),
      h('div', { class: 'big-stats' },
        bigStat('flame', S.streak(), S.streak() === 1 ? 'Tag Serie' : 'Tage Serie'),
        bigStat('target', attempts ? Math.round((hits / attempts) * 100) + '%' : '–', 'Trefferquote'),
        bigStat('books', p.seen, 'von ' + all.length + ' gesehen')),
      h('section', { class: 'panel' },
        h('div', { class: 'panel-head' }, h('h2', { class: 'h3' }, 'Diese Woche'), h('span', { class: 'muted small' }, 'Ziel ' + goal + '/Tag')),
        week),
      h('section', { class: 'panel' },
        h('h2', { class: 'h3' }, 'Lernstand'),
        stack, legend),
      h('h2', { class: 'h2' }, 'Kapitel'),
      h('div', { class: 'topics' }, chRows),
      weak.length ? h('h2', { class: 'h2' }, 'Schwachstellen') : null,
      weak.length ? h('div', { class: 'topics' }, weak.map(([sec, v]) => h('button', { class: 'topic', onclick: () => startSection(sec) },
        h('span', { class: 'weak-pct' }, Math.round((v.c / v.n) * 100) + '%'),
        h('span', { class: 'grow' },
          h('span', { class: 'topic-title' }, PQ.sections[sec].title),
          h('span', { class: 'topic-meta' }, sec + ' · ' + plural(v.n, 'Antwort', 'Antworten'))),
        h('span', { class: 'topic-go' }, icon('play'))))) : null));
  }

  function bigStat(artName, value, label) {
    return h('div', { class: 'big-stat' },
      h('span', { class: 'big-stat-val' }, art(artName, 'art-sm'), value),
      h('span', { class: 'big-stat-label' }, label));
  }

  /* ================= Einstellungen ================= */

  function applyTheme() {
    const t = S.setting('theme');
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    const dark = t === 'dark' || (t !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.querySelectorAll('meta[name="theme-color"]').forEach(m => m.setAttribute('content', dark ? '#13121b' : '#ffffff'));
  }

  function renderSettings() {
    const codeBox = h('textarea', { class: 'code', rows: '3', placeholder: 'Code hier einfügen …', 'aria-label': 'Fortschritts-Code' });
    const fileInput = h('input', {
      type: 'file', accept: '.json,application/json,text/plain', hidden: true,
      onchange: () => {
        const f = fileInput.files[0];
        if (!f) return;
        f.text().then(doImport);
        fileInput.value = '';
      }
    });
    const importPanel = h('div', { class: 'import-panel', hidden: true },
      codeBox,
      h('div', { class: 'row-btns' },
        h('button', { class: 'btn btn-primary grow', onclick: () => doImport(codeBox.value) }, 'Importieren'),
        h('button', { class: 'btn btn-soft grow', onclick: () => fileInput.click() }, 'Datei wählen')),
      fileInput);

    function doImport(text) {
      if (!text.trim()) { toast('Bitte zuerst einen Code einfügen'); return; }
      if (!confirm('Aktuellen Fortschritt durch den importierten ersetzen?')) return;
      try {
        S.importData(text);
        applyTheme();
        toast('Fortschritt importiert');
        codeBox.value = '';
      } catch (e) {
        toast('Das war kein gültiger Fortschritts-Code');
      }
    }

    function copyCode() {
      const code = S.exportCode();
      const fallback = () => {
        importPanel.hidden = false;
        codeBox.value = code;
        codeBox.select();
        toast('Code markiert – bitte kopieren');
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(() => toast('Code kopiert – auf dem anderen Gerät einfügen'), fallback);
      } else {
        fallback();
      }
    }

    function saveFile() {
      const name = 'patho-quiz-fortschritt-' + new Date().toISOString().slice(0, 10) + '.json';
      const blob = new Blob([S.exportData()], { type: 'application/json' });
      const file = typeof File === 'function' ? new File([blob], name, { type: 'application/json' }) : null;
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: 'Patho-Quiz Fortschritt' }).catch(() => {});
        return;
      }
      const a = h('a', { href: URL.createObjectURL(blob), download: name });
      document.body.append(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    }

    const row = (ico, label, onclick, cls) =>
      h('button', { class: 'set-row' + (cls ? ' ' + cls : ''), onclick }, icon(ico), h('span', { class: 'grow' }, label), icon('right', 'ico-muted'));

    mount(h('main', { class: 'screen settings' },
      topbar('Einstellungen'),
      h('h2', { class: 'label' }, 'Darstellung'),
      segmented([['auto', 'System'], ['light', 'Hell'], ['dark', 'Dunkel']], S.setting('theme'), v => { S.setting('theme', v); applyTheme(); }, 'Darstellung'),
      h('h2', { class: 'label' }, 'Tagesziel'),
      segmented(S.GOALS.map(g => [g, String(g)]), S.setting('dailyGoal') || S.DEFAULT_GOAL, v => S.setting('dailyGoal', v), 'Tagesziel'),

      h('h2', { class: 'label' }, 'Fortschritt übertragen'),
      h('div', { class: 'set-group' },
        row('copy', 'Code kopieren', copyCode),
        row('download', 'Als Datei sichern', saveFile),
        row('upload', 'Importieren', () => { importPanel.hidden = !importPanel.hidden; })),
      importPanel,
      h('p', { class: 'note' }, 'Der Fortschritt liegt nur auf diesem Gerät. Hier exportieren, auf dem anderen Gerät importieren.'),

      h('h2', { class: 'label' }, 'Aufs iPhone holen'),
      h('ol', { class: 'steps' },
        h('li', {}, 'In ', h('b', {}, 'Safari'), ' öffnen'),
        h('li', {}, h('b', {}, 'Teilen'), ' ', icon('share', 'ico-inline'), ' antippen'),
        h('li', {}, h('b', {}, 'Zum Home-Bildschirm'), ' ', icon('plusSquare', 'ico-inline'))),

      h('div', { class: 'set-group' },
        row('trash', 'Fortschritt löschen', () => {
          if (confirm('Wirklich den gesamten Fortschritt löschen? Das lässt sich nicht rückgängig machen.')) {
            S.reset();
            abortSession();
            toast('Fortschritt gelöscht');
          }
        }, 'danger')),

      h('p', { class: 'note center' }, 'Alle Fragen stammen aus der „Klinische Pathologie – Kurzfassung“. ' + PQ.questions.length + ' Fragen · Version ' + PQ.VERSION)));
  }

  /* ================= Router & Start ================= */

  const ROUTES = {
    '': renderHome,
    practice: renderPracticeSetup,
    exam: renderExamSetup,
    blitz: renderBlitzSetup,
    quiz: renderQuiz,
    'blitz-play': renderBlitz,
    result: renderResult,
    stats: renderStats,
    settings: renderSettings,
    chapter: id => renderChapter(Number(id))
  };

  function route() {
    const [name, param] = location.hash.replace(/^#\/?/, '').split('/');
    (ROUTES[name] || renderHome)(param);
  }

  document.addEventListener('keydown', e => {
    if (!keyHandler || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    keyHandler(e);
  });

  window.addEventListener('hashchange', route);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

  applyTheme();
  route();

  // Offline-Fähigkeit (nur über http/https, nicht bei file://)
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        nw && nw.addEventListener('statechange', () => {
          if (nw.state === 'activated' && navigator.serviceWorker.controller) {
            toast('Update installiert – lädt neu …');
            setTimeout(() => location.reload(), 1200);
          }
        });
      });
    }).catch(() => {});
  }

  PQ.app = { route, startSession, getSession: () => session, getLastResult: () => lastResult };
})();
