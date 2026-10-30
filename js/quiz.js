/* Question selection, round building and scoring – no DOM. */
(function () {
  'use strict';

  const TYPE_LABEL = { single: 'Einfachauswahl', kprim: 'K-prim', tf: 'Richtig/Falsch' };
  // Seconds per question incl. reading the explanation, until the measured pace (pref „pace“) takes over
  const PACE = { single: 40, kprim: 60, tf: 18 };
  // Cap on mistakes per lesson in the review programme
  const MISTAKE_SHARE = 0.4;
  // Mistakes from the last 3 hours (i.e. the last rounds) come back first
  const RECENT = 3 * 3600000;

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

  // openOnly: only questions not yet mastered (new or last answered wrong)
  function filter({ sections, types, altOnly, minStars, openOnly }) {
    const secs = new Set(sections);
    const typeSet = new Set(types);
    return PQ.questions.filter(q =>
      secs.has(q.sec) && typeSet.has(q.type) && (!altOnly || q.alt) && (q.stars || 0) >= (minStars || 0) &&
      (!openOnly || isOpen(q.id)));
  }

  // Open mistakes first, then new and due questions mixed, the rest last.
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

  // „Nach Themen“ (by topic): sections in script order, the order within a section is kept
  function bySection(list) {
    const pos = {};
    PQ.chapters.flatMap(c => c.sections).forEach((s, i) => { pos[s.id] = i; });
    return list.slice().sort((a, b) => pos[a.sec] - pos[b.sec]);
  }

  // Past exam questions and ★★★ first when consolidating what already sits
  function weight(q) {
    return (q.alt ? 2 : 0) + (q.stars || 0);
  }

  /* Seen questions by learning state: open mistakes (oldest first), due shaky ones, due solid ones
     (consolidation, important first) and solid ones not yet due (extra practice, longest ago first). */
  function queues(now) {
    now = now || Date.now();
    const st = q => PQ.store.get(q.id);
    const mistakes = [], shaky = [], due = [], later = [];
    PQ.questions.forEach(q => {
      const s = st(q);
      if (!s) return;
      if (s.b === 1) mistakes.push(q);
      else if (s.b === 2 && s.d <= now) shaky.push(q);
      else if (s.d <= now) due.push(q);
      else if (s.b >= 3) later.push(q);
    });
    mistakes.sort((a, b) => (st(a).t || 0) - (st(b).t || 0));
    shaky.sort((a, b) => st(a).d - st(b).d);
    due.sort((a, b) => weight(b) - weight(a) || st(a).d - st(b).d);
    later.sort((a, b) => weight(b) - weight(a) || (st(a).t || 0) - (st(b).t || 0));
    return { mistakes, shaky, due, later };
  }

  // „Fehler üben“ (practice mistakes): open mistakes, then due shaky questions
  function reviewPool() {
    const qs = queues();
    return qs.mistakes.concat(qs.shaky);
  }

  // New questions in chapter and topic order, shuffled within a topic
  function freshInOrder() {
    const order = PQ.chapters.filter(c => c.available).flatMap(c => c.sections.map(s => s.id));
    return order.flatMap(sec => shuffle(PQ.questions.filter(q => q.sec === sec && !PQ.store.get(q.id))));
  }

  // Learning state of a question: new → mistake (box 1) → shaky (box 2) → sits (box 3–5)
  function mastery(id) {
    const s = PQ.store.get(id);
    if (!s) return 'new';
    if (s.b === 1) return 'mistake';
    return s.b >= 3 ? 'solid' : 'learning';
  }

  function isOpen(id) {
    const m = mastery(id);
    return m === 'new' || m === 'mistake';
  }

  // pct = share of questions whose last answer was correct (“mastered”)
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

  // Spread the reviews evenly over the new questions, never at the start of a lesson
  function interleave(fresh, reviews) {
    const out = fresh.slice();
    const step = (out.length + reviews.length) / (reviews.length || 1);
    reviews.forEach((q, i) => out.splice(Math.min(out.length, Math.round(1 + step * i + step / 2)), 0, q));
    return out;
  }

  /* Review programme: at most 40 % mistakes (those of the last rounds first), filled up with shaky, due and then
     extra practice of what sits, so a lesson never turns into a long row of mistakes. */
  function reviewLesson(size) {
    const now = Date.now();
    const qs = queues(now);
    const isRecent = q => now - (PQ.store.get(q.id).t || 0) < RECENT;
    const mistakes = qs.mistakes.filter(isRecent).reverse().concat(qs.mistakes.filter(q => !isRecent(q)));
    const cap = Math.round(size * MISTAKE_SHARE);
    const lesson = mistakes.slice(0, cap);
    const rest = qs.shaky.concat(qs.due, qs.later, mistakes.slice(cap));
    while (lesson.length < size && rest.length) lesson.push(rest.shift());
    return shuffle(lesson);
  }

  /* „Weiterlernen“ (continue learning), decided by the user for the exam sprint: first every question once – only
     new ones, in chapter and topic order – then the review programme. Wrong answers wait for the review programme.
     The last lesson of the first pass is filled up with reviews, spread over it and never first. */
  function smartLesson(size) {
    const fresh = freshInOrder();
    if (!fresh.length) return reviewLesson(size);
    if (fresh.length >= size) return shuffle(fresh.slice(0, size));
    return interleave(shuffle(fresh), reviewLesson(size - fresh.length));
  }

  // Seconds for a list of questions at the measured pace
  function seconds(list) {
    const pace = Object.assign({}, PACE, PQ.store.pref('pace'));
    return list.reduce((a, q) => a + (pace[q.type] || 30), 0);
  }

  // Remaining plan with estimated minutes: until everything has been seen once, and for the review programme
  function plan() {
    const qs = queues();
    const fresh = PQ.questions.filter(q => !PQ.store.get(q.id));
    const shaky = PQ.questions.filter(q => PQ.store.isShaky(q.id));
    return {
      total: PQ.questions.length, fresh: fresh.length, mistakes: qs.mistakes.length, shaky: shaky.length,
      minutes: Math.round(seconds(fresh) / 60),
      reviewMinutes: Math.round((seconds(qs.mistakes) * 1.2 + seconds(shaky)) / 60)
    };
  }

  function makeView(q) {
    if (q.type === 'single') return { order: shuffledIndices(q.opts.length) };
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
    return false;
  }

  /* K-prim as in the exam: 4 correct = 1 point, 3 correct = ½ point, otherwise 0.
     Only a fully correct answer counts as “correct” for the flashcards. */
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
    }
    return { correct: false, score: 0 };
  }

  function points(score) {
    return Math.round(score * 10);
  }

  PQ.quiz = {
    TYPE_LABEL, PACE, shuffle, filter, prioritize, take, bySection, queues, reviewPool, mastery, isOpen, progress,
    smartLesson, seconds, plan, createSession, isComplete, evaluate, points
  };
})();
