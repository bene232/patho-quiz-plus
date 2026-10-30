/* Fragenauswahl, Runden-Erstellung und Bewertung – ohne DOM. */
(function () {
  'use strict';

  const TYPE_LABEL = { single: 'Einfachauswahl', kprim: 'K-prim', match: 'Zuordnen', tf: 'Richtig/Falsch' };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function shuffledIndices(n) {
    const base = Array.from({ length: n }, (_, i) => i);
    if (n < 2) return base;
    let order;
    do { order = shuffle(base); } while (order.every((v, i) => v === i));
    return order;
  }

  // openOnly: nur Fragen, die noch nicht sitzen (neu oder zuletzt falsch)
  function filter({ sections, types, altOnly, minStars, openOnly }) {
    const secs = new Set(sections);
    const typeSet = new Set(types);
    return PQ.questions.filter(q =>
      secs.has(q.sec) && typeSet.has(q.type) && (!altOnly || q.alt) && (q.stars || 0) >= (minStars || 0) &&
      (!openOnly || isOpen(q.id)));
  }

  // Offene Fehler zuerst, dann Neues und Fälliges gemischt, zuletzt der Rest.
  function prioritize(list) {
    const now = Date.now();
    const mistakes = [], fresh = [], rest = [];
    list.forEach(q => {
      const s = PQ.store.get(q.id);
      if (s && s.b === 1) mistakes.push(q);
      else if (!s || s.d <= now) fresh.push(q);
      else rest.push(q);
    });
    return shuffle(mistakes).concat(shuffle(fresh), shuffle(rest));
  }

  function take(list, count) {
    return count ? list.slice(0, count) : list;
  }

  // „Nach Themen“: Abschnitte in Skript-Reihenfolge, innerhalb eines Abschnitts bleibt die Reihenfolge erhalten
  function bySection(list) {
    const pos = {};
    PQ.chapters.flatMap(c => c.sections).forEach((s, i) => { pos[s.id] = i; });
    return list.slice().sort((a, b) => pos[a.sec] - pos[b.sec]);
  }

  function reviewPool() {
    const now = Date.now();
    const mistakes = PQ.questions.filter(q => PQ.store.isMistake(q.id))
      .sort((a, b) => (PQ.store.get(a.id).t || 0) - (PQ.store.get(b.id).t || 0));
    const due = PQ.questions.filter(q => PQ.store.isDue(q.id, now))
      .sort((a, b) => PQ.store.get(a.id).d - PQ.store.get(b.id).d);
    return mistakes.concat(due);
  }

  // Lernstand einer Frage: neu → Fehler (Box 1) → in Arbeit (Box 2–3) → gefestigt (Box 4–5)
  function mastery(id) {
    const s = PQ.store.get(id);
    if (!s) return 'new';
    if (s.b === 1) return 'mistake';
    return s.b >= 4 ? 'solid' : 'learning';
  }

  function isOpen(id) {
    const m = mastery(id);
    return m === 'new' || m === 'mistake';
  }

  // pct = Anteil der Fragen, deren letzte Antwort richtig war („sitzt“)
  function progress(questions) {
    const r = { total: questions.length, seen: 0, known: 0, solid: 0, pct: 0 };
    questions.forEach(q => {
      const m = mastery(q.id);
      if (m !== 'new') r.seen += 1;
      if (m === 'learning' || m === 'solid') r.known += 1;
      if (m === 'solid') r.solid += 1;
    });
    r.pct = r.total ? Math.round((r.known / r.total) * 100) : 0;
    return r;
  }

  // „Weiterlernen“: bis zur Hälfte Fehler/Fälliges, Rest neue Fragen in Kapitel- und Themenreihenfolge
  function smartLesson(size) {
    const lesson = reviewPool().slice(0, Math.ceil(size / 2));
    const taken = new Set(lesson.map(q => q.id));
    const order = PQ.chapters.filter(c => c.available).flatMap(c => c.sections.map(s => s.id));
    for (const sec of order) {
      if (lesson.length >= size) break;
      const fresh = shuffle(PQ.questions.filter(q => q.sec === sec && !PQ.store.get(q.id)));
      fresh.slice(0, size - lesson.length).forEach(q => { lesson.push(q); taken.add(q.id); });
    }
    if (lesson.length < size) {
      prioritize(PQ.questions.filter(q => !taken.has(q.id))).slice(0, size - lesson.length).forEach(q => lesson.push(q));
    }
    return shuffle(lesson);
  }

  function makeView(q) {
    if (q.type === 'single') return { order: shuffledIndices(q.opts.length) };
    if (q.type === 'match') return { order: shuffledIndices(q.pairs.length) };
    return {};
  }

  function createSession(mode, questions, extra) {
    return Object.assign({
      mode,
      ids: questions.map(q => q.id),
      views: questions.map(makeView),
      responses: questions.map(() => null),
      results: questions.map(() => null),
      idx: 0,
      combo: 0,
      bestCombo: 0,
      started: Date.now()
    }, extra || {});
  }

  function isComplete(q, r) {
    if (r === null || r === undefined) return false;
    if (q.type === 'single') return typeof r === 'number';
    if (q.type === 'tf') return typeof r === 'boolean';
    if (q.type === 'kprim') return Array.isArray(r) && r.length === 4 && r.every(v => typeof v === 'boolean');
    if (q.type === 'match') return Array.isArray(r) && r.length === q.pairs.length && r.every(v => typeof v === 'number');
    return false;
  }

  /* K-prim wie in der Klausur: 4 richtig = 1 Punkt, 3 richtig = ½ Punkt, sonst 0.
     Zuordnen: anteilig pro richtigem Paar. Als „richtig“ (Lernkartei) zählt nur die volle Lösung. */
  function evaluate(q, r) {
    switch (q.type) {
      case 'single':
      case 'tf': {
        const ok = r === q.a;
        return { correct: ok, score: ok ? 1 : 0 };
      }
      case 'kprim': {
        const hits = q.st.filter((s, i) => Array.isArray(r) && r[i] === s[1]).length;
        return { correct: hits === 4, score: hits === 4 ? 1 : hits === 3 ? 0.5 : 0, hits };
      }
      case 'match': {
        const hits = q.pairs.filter((p, i) => Array.isArray(r) && r[i] === i).length;
        return { correct: hits === q.pairs.length, score: hits / q.pairs.length, hits };
      }
    }
    return { correct: false, score: 0 };
  }

  function points(score) {
    return Math.round(score * 10);
  }

  PQ.quiz = { TYPE_LABEL, shuffle, filter, prioritize, take, bySection, reviewPool, mastery, isOpen, progress, smartLesson, createSession, isComplete, evaluate, points };
})();
