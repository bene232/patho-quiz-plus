/* Kapitel 13 – Mamma (PDF S. 42–43) */
PQ.registerChapter(13, [

  /* ---------- 13.1 Diagnostik & DD Rundherd ---------- */
  {
    id: 'k13-01', sec: '13.1', p: '42–43', type: 'single', alt: '2012, 2020',
    q: 'Wann ist nach einer Mamma-Stanzbiopsie eine weitere Abklärung nötig?',
    opts: [
      'Bei fehlender Übereinstimmung zwischen klinischem/bildgebendem und histologischem Befund',
      'Bei jedem sicher benignen Befund (B2)',
      'Nie – die Stanzbiopsie ist immer abschließend'
    ],
    a: 0,
    ex: 'Weitere Abklärung bei Diskrepanz zwischen Klinik/Bildgebung und Histologie („Triple-Diagnostik“).'
  },
  {
    id: 'k13-02', sec: '13.1', p: 42, type: 'match',
    q: 'Ordne die B-Kategorie der Mamma-Stanzbiopsie zu.',
    pairs: [
      ['B1', 'Nicht verwertbar bzw. nur Normalgewebe'],
      ['B2', 'Benigne (z. B. Fibroadenom, Zyste)'],
      ['B3', 'Benigne mit unsicherem biologischem Potenzial'],
      ['B4', 'Malignitätsverdächtig'],
      ['B5', 'Maligne']
    ],
    ex: 'B3 (ADH, LIN/LCIS, flache epitheliale Atypie, papilläre Läsion, radiäre Narbe, Phylloides-Tumor) → Exzision. B5a in situ, B5b invasiv, B5c unklar ob invasiv.'
  },
  {
    id: 'k13-03', sec: '13.1', p: 42, type: 'single',
    q: 'Welche Läsion wird in der Stanzbiopsie als B3 eingestuft und sollte exzidiert werden?',
    opts: ['Radiäre Narbe', 'Fibroadenom', 'Einfache Zyste', 'Invasives Karzinom NST'],
    a: 0,
    ex: 'B3: ADH, LIN/LCIS, flache epitheliale Atypie, papilläre Läsion, radiäre Narbe, Phylloides-Tumor → Exzision. Fibroadenom/Zyste = B2; invasives Ca = B5b.'
  },
  {
    id: 'k13-04', sec: '13.1', p: 42, type: 'match',
    q: 'Ordne den Mammarundherd seinem Kennzeichen zu.',
    pairs: [
      ['Fibroadenom', 'Häufigster benigner Tumor junger Frauen, Epithel + Stroma'],
      ['Intraduktales Papillom', 'Blutige Mamillensekretion'],
      ['Phylloides-Tumor', 'Zellreiches Stroma, blattartig, benigne bis maligne'],
      ['Fettgewebsnekrose', 'Nach Trauma']
    ],
    ex: 'DD Mammarundherd außerdem: Zyste/Mastopathie, Lipom, Hamartom, Abszess/Mastitis, Karzinom, LK, Metastase, Lymphom.'
  },
  {
    id: 'k13-05', sec: '13.1', p: 42, type: 'single',
    q: 'Was ist der Standard zur histologischen Abklärung eines Mammabefunds?',
    opts: ['Hochgeschwindigkeits-Stanzbiopsie', 'Feinnadelaspiration (Zytologie)', 'Mastektomie'],
    a: 0,
    ex: 'Präparate: Feinnadelaspiration (Zytologie), Hochgeschwindigkeits-Stanzbiopsie (Standard), Vakuumbiopsie (Mikrokalk), Exzisat, Mastektomie, Sentinel-LK, Schnellschnitt.'
  },

  /* ---------- 13.2 Präkanzerosen & In-situ-Läsionen ---------- */
  {
    id: 'k13-06', sec: '13.2', p: '42–43', type: 'single', alt: '2015',
    q: 'Welche Läsion ist eine Vorläuferläsion des Mammakarzinoms?',
    opts: ['DCIS', 'Einfache duktale Hyperplasie', 'Fibroadenom', 'Phylloides-Tumor', 'Milchgangspapillom'],
    a: 0,
    ex: 'DCIS = obligate Vorläuferläsion des Mamma-Ca. Die einfache duktale Hyperplasie ist keine Präneoplasie.'
  },
  {
    id: 'k13-07', sec: '13.2', p: '42–43', type: 'single', alt: '2008',
    q: 'Mammaläsionen – welche Aussage ist FALSCH?',
    opts: [
      'Verkalkungen und Nekrosen sind typisch für das invasive duktale Karzinom.',
      'Die einfache duktale Hyperplasie ist keine Präneoplasie.',
      'Das invasive duktale Karzinom ist bei Weitem am häufigsten.'
    ],
    a: 0,
    ex: 'Verkalkungen und Nekrosen sind typisch für das DCIS (Komedotyp mit zentralen Nekrosen, Mikrokalk).'
  },
  {
    id: 'k13-08', sec: '13.2', p: 42, type: 'match',
    q: 'Ordne die Mammaläsion ihrer Bedeutung zu.',
    pairs: [
      ['Einfache duktale Hyperplasie (UDH)', 'Keine Präneoplasie'],
      ['Flache epitheliale Atypie/ADH', 'Risikoläsion (Vorstufe des low-grade DCIS)'],
      ['DCIS', 'Obligate Vorläuferläsion'],
      ['LCIS', 'Indikatorläsion für ein Ca-Risiko beidseits']
    ],
    ex: 'UDH: nur gering erhöhtes Risiko. LCIS: nicht obligater Vorläufer, multizentrisch, bilateral, meist Zufallsbefund.'
  },
  {
    id: 'k13-09', sec: '13.2', p: 42, type: 'kprim',
    q: 'Lobuläre Neoplasie (LCIS) – welche Aussagen treffen zu?',
    st: [
      ['Die Zellen haben E-Cadherin verloren.', true],
      ['Sie tritt oft multizentrisch und bilateral auf.', true],
      ['Sie ist eine obligate Vorläuferläsion.', false],
      ['Typisch ist mammographisch sichtbarer Mikrokalk.', false]
    ],
    ex: 'LCIS/LIN: monomorphe, wenig kohäsive Zellen füllen Azini; Indikatorläsion für ein erhöhtes Ca-Risiko (beidseits), nicht obligater Vorläufer; meist Zufallsbefund ohne Kalk.'
  },
  {
    id: 'k13-10', sec: '13.2', p: 42, type: 'kprim',
    q: 'Duktales Carcinoma in situ (DCIS) – welche Aussagen treffen zu?',
    st: [
      ['Die Basalmembran ist intakt.', true],
      ['Mikrokalk ist mammographisch typisch.', true],
      ['Das Grading erfolgt nach Elston & Ellis.', false],
      ['Es ist meist ein bilateraler Zufallsbefund ohne Kalk.', false]
    ],
    ex: 'DCIS: segmental erweiterte Gänge, Muster solide, kribriform, mikropapillär, Komedotyp; Grading nach Van Nuys. Bilateral ohne Kalk → LCIS.'
  },
  {
    id: 'k13-11', sec: '13.2', p: 42, type: 'single',
    q: 'Was ist der M. Paget der Mamille?',
    opts: [
      'Intraepidermale Ausbreitung von Karzinomzellen in der Epidermis der Mamille',
      'Ein Ekzem der Mamille ohne Tumorzellen',
      'Ein benignes intraduktales Papillom'
    ],
    a: 0,
    ex: 'M. Paget: Karzinomzellen (aus einem DCIS/Ca) in der Epidermis der Mamille; klinisch ekzemartig; große helle (ballonierte) Tumorzellen; DD Melanom, Ekzem.'
  },
  {
    id: 'k13-12', sec: '13.2', p: 42, type: 'single',
    q: 'Nach welchem System wird das DCIS gegradet?',
    opts: ['Van Nuys (low/intermediate/high)', 'Elston & Ellis (G1–G3)', 'Gleason-Score'],
    a: 0,
    ex: 'DCIS: Grading low/intermediate/high (Van Nuys). Elston & Ellis gilt für das invasive Karzinom.'
  },

  /* ---------- 13.3 Mammakarzinom ---------- */
  {
    id: 'k13-13', sec: '13.3', p: 43, type: 'single', alt: '2013B, 2019, 2021',
    q: 'Maligne Mammatumoren – welche Aussage ist FALSCH?',
    opts: [
      'Das tubuläre Mammakarzinom hat eine schlechte Prognose (5-JÜR 10–20 %).',
      'Das Karzinom NST ist der häufigste Typ.',
      'Verkalkungen und Nekrosen sind typisch für das DCIS.',
      'Das LCIS ist eine Indikatorläsion.',
      'Der M. Paget ist eine Ausbreitung von Karzinomzellen in der Epidermis.'
    ],
    a: 0,
    ex: 'Das tubuläre Karzinom gehört zu den Sonderformen mit sehr guter Prognose (5-JÜR ~100 %).'
  },
  {
    id: 'k13-14', sec: '13.3', p: 43, type: 'single', alt: '2021',
    q: 'Was ist für die Therapieplanung beim Mammakarzinom NICHT nötig?',
    opts: ['KRAS-Mutation', 'Östrogenrezeptor', 'Progesteronrezeptor', 'HER2', 'Differenzierungsgrad'],
    a: 0,
    ex: 'Prädiktive Faktoren: ER/PR, HER2, Ki-67, BRCA. KRAS spielt beim Mamma-Ca keine Rolle.'
  },
  {
    id: 'k13-15', sec: '13.3', p: 43, type: 'single', alt: '2022',
    q: 'Was gehört NICHT zum Grading nach Elston & Ellis?',
    opts: ['Tumorgröße', 'Drüsige Differenzierung', 'Kernpleomorphie (Kerngrading)', 'Mitosen'],
    a: 0,
    ex: 'Elston & Ellis: Tubulus-/drüsige Differenzierung + Kernpleomorphie + Mitosen, je 1–3 Punkte → G1 (3–5), G2 (6–7), G3 (8–9). Die Tumorgröße gehört nicht dazu.'
  },
  {
    id: 'k13-16', sec: '13.3', p: 43, type: 'single', alt: '2022, 2024',
    q: 'Was ist KEIN Surrogatmarker der molekularen Subtypen des Mammakarzinoms?',
    opts: ['Androgenrezeptor', 'Östrogenrezeptor', 'HER2', 'Ki-67'],
    a: 0,
    ex: 'Surrogat-Subtypen nach ER, PR, HER2, Ki-67 – nicht nach Androgenrezeptor.'
  },
  {
    id: 'k13-17', sec: '13.3', p: '42–43', type: 'single', alt: '2025',
    q: 'Mammakarzinom beim Mann im Vergleich zur Frau – welche Aussage trifft zu?',
    opts: [
      'Die Therapie orientiert sich grundsätzlich an den gleichen Prinzipien.',
      'Die Histologie ist deutlich anders.',
      'Die Prognose ist besser.',
      'Es wird meist im Stadium 0 diagnostiziert.',
      'Das lobuläre Karzinom ist häufiger.'
    ],
    a: 0,
    ex: 'Mamma-Ca beim Mann: < 1 %; Histologie wie bei Frauen (fast immer NST, > 90 % ER+; lobulär seltener); oft später diagnostiziert, keine bessere Prognose.'
  },
  {
    id: 'k13-18', sec: '13.3', p: '42–43', type: 'kprim', alt: '2025',
    q: 'Eine 33-Jährige hat ein triple-negatives Mammakarzinom; ihre Mutter erkrankte mit 42 Jahren, die Großmutter hatte ein Ovarialkarzinom. Welche Aussagen treffen zu?',
    st: [
      ['Eine Risikosprechstunde ist erst ab 50 Jahren sinnvoll.', false],
      ['Ein triple-negativer Befund schließt eine familiäre Belastung aus.', false],
      ['Bei V. a. hereditäres Mammakarzinom sind genetische Beratung und Testung indiziert.', true],
      ['Sarkome in der Familie sind für die Risikoeinschätzung irrelevant.', false]
    ],
    ex: 'Genetische Beratung z. B. bei Erkrankung < 36 J, triple-negativ < 60 J, Mamma- + Ovar-Ca in der Familie; Risikosprechstunde unabhängig vom Alter. Sarkome sind relevant (Li-Fraumeni, TP53).'
  },
  {
    id: 'k13-19', sec: '13.3', p: 42, type: 'single', alt: '2023',
    q: 'Was ist die häufigste maligne Tumorerkrankung der Frau in Deutschland?',
    opts: ['Mammakarzinom', 'Kolorektales Karzinom', 'Lungenkarzinom', 'Endometriumkarzinom'],
    a: 0,
    ex: 'Mammakarzinom: häufigstes Malignom der Frau (~30 % aller Krebserkrankungen der Frau; ~70.000/J in D).'
  },
  {
    id: 'k13-20', sec: '13.3', p: 42, type: 'match',
    q: 'Ordne das Gen dem hereditären Mammakarzinom-Kennzeichen zu.',
    pairs: [
      ['BRCA1', '17q, oft triple-negativ, Ovarialkarzinom'],
      ['BRCA2', '13q, Männer, Pankreas, Prostata'],
      ['TP53', 'Li-Fraumeni (Sarkome, Hirntumoren, Leukämien)'],
      ['CDH1', 'Lobuläres Mamma-Ca + diffuses Magen-Ca'],
      ['PTEN', 'Cowden-Syndrom']
    ],
    ex: 'Weitere: PALB2, CHEK2, ATM, STK11 (Peutz-Jeghers). Genetisch bedingt sind 5–10 % der Mammakarzinome.'
  },
  {
    id: 'k13-21', sec: '13.3', p: 42, type: 'kprim',
    q: 'Invasiv-lobuläres Mammakarzinom – welche Aussagen treffen zu?',
    st: [
      ['Die Tumorzellen wachsen im „Gänsemarsch“.', true],
      ['Es ist E-Cadherin-negativ.', true],
      ['Es ist meist ER-negativ.', false],
      ['Es macht ca. 70–80 % der Mammakarzinome aus.', false]
    ],
    ex: 'Invasiv-lobulär: 10–15 %; kleine monomorphe Zellen in Einzelzellreihen und schießscheibenartig um Gänge; oft multizentrisch/bilateral, ER+; ungewöhnliche Metastasierung. 70–80 % = Karzinom NST.'
  },
  {
    id: 'k13-22', sec: '13.3', p: 43, type: 'match',
    q: 'Ordne den molekularen Subtyp des Mammakarzinoms seinem Profil zu.',
    pairs: [
      ['Luminal A', 'ER+, PR hoch, HER2−, Ki-67 niedrig'],
      ['Luminal B', 'ER+, Ki-67 hoch und/oder PR niedrig'],
      ['Triple-negativ', 'ER−, PR−, HER2−; BRCA1; aggressiv']
    ],
    ex: 'Luminal A: G1/2, beste Prognose. Daneben HER2-positiv (non-luminal).'
  },
  {
    id: 'k13-23', sec: '13.3', p: 43, type: 'match',
    q: 'Ordne den HER2-IHC-Score seiner Bedeutung zu.',
    pairs: [
      ['3+', 'Positiv'],
      ['2+', 'Fraglich → In-situ-Hybridisierung'],
      ['1+', 'HER2-low']
    ],
    ex: 'HER2-low = 1+ oder 2+/ISH-negativ → Trastuzumab-Deruxtecan.'
  },
  {
    id: 'k13-24', sec: '13.3', p: 43, type: 'single',
    q: 'Was ist der wichtigste Prognosefaktor beim Mammakarzinom?',
    opts: ['Axillärer Lymphknotenstatus', 'Ki-67', 'Histologischer Typ', 'Resektionsrand'],
    a: 0,
    ex: 'Prognosefaktoren: axillärer LK-Status (wichtigster), Tumorgröße, Grading, histologischer Typ, L-/V-Invasion, Alter (< 35 J ungünstig), Hormonrezeptoren, HER2, Ki-67, Resektionsrand.'
  },
  {
    id: 'k13-25', sec: '13.3', p: 43, type: 'single',
    q: 'Wie wird der immunreaktive Score nach Remmele (IRS) berechnet?',
    opts: [
      'Färbeintensität (0–3) × Anteil positiver Kerne (0–4) = 0–12',
      'Anteil (0–5) + Intensität (0–3) = 0–8',
      'Tubulusbildung + Kernpleomorphie + Mitosen'
    ],
    a: 0,
    ex: 'Remmele-IRS = Intensität × Anteil = 0–12. Allred = Anteil + Intensität = 0–8. Tubulus + Kerne + Mitosen = Elston & Ellis.'
  },
  {
    id: 'k13-26', sec: '13.3', p: 43, type: 'single',
    q: 'Ab welchem Anteil positiver Kerne gilt der Hormonrezeptorstatus als positiv?',
    opts: ['≥ 1 %', '≥ 10 %', '≥ 50 %'],
    a: 0,
    ex: 'Östrogen-/Progesteronrezeptor positiv ab ≥ 1 % Kerne.'
  },
  {
    id: 'k13-27', sec: '13.3', p: 43, type: 'single',
    q: 'Welche Therapie wird beim HER2-low-Mammakarzinom eingesetzt?',
    opts: ['Trastuzumab-Deruxtecan', 'Imatinib', 'KRAS-Inhibitoren'],
    a: 0,
    ex: 'HER2-low (1+ oder 2+/ISH-negativ) → Trastuzumab-Deruxtecan. Imatinib → GIST; KRAS spielt beim Mamma-Ca keine Rolle.'
  },
  {
    id: 'k13-28', sec: '13.3', p: '42–43', type: 'match',
    q: 'Ordne den histologischen Typ des Mammakarzinoms seinem Kennzeichen zu.',
    pairs: [
      ['Karzinom NST', 'Häufigster Typ (70–80 %)'],
      ['Tubuläres Karzinom', 'Offene, eckige Tubuli; 5-JÜR ~100 %'],
      ['Muzinöses Karzinom', 'Tumorzellnester in Schleimseen'],
      ['Inflammatorisches Karzinom', '„Peau d\'orange“, T4d'],
      ['Metaplastisches Karzinom', 'Schlechte Prognose']
    ],
    ex: 'Sonderformen mit sehr guter Prognose: tubulär, muzinös (Gallertkarzinom), kribriform. Inflammatorisch: Lymphangiosis der Haut.'
  },
  {
    id: 'k13-29', sec: '13.3', p: 42, type: 'single',
    q: 'Wohin metastasiert das invasiv-lobuläre Karzinom auf ungewöhnliche Weise?',
    opts: [
      'Peritoneum, GIT, Ovar, Meningen, Knochenmark',
      'Ausschließlich in die axillären Lymphknoten',
      'Es metastasiert praktisch nie'
    ],
    a: 0,
    ex: 'Invasiv-lobuläres Ca: ungewöhnliche Metastasierung (Peritoneum, GIT, Ovar, Meningen, Knochenmark).'
  },
  {
    id: 'k13-30', sec: '13.3', p: 43, type: 'single',
    q: 'Welche endokrine Therapie erhalten prämenopausale Patientinnen?',
    opts: ['Tamoxifen (ggf. + GnRH-Analoga)', 'Aromatasehemmer allein', 'Trastuzumab'],
    a: 0,
    ex: 'Endokrin: Tamoxifen prämenopausal, Aromatasehemmer postmenopausal, GnRH-Analoga. Trastuzumab ist eine Anti-HER2-Therapie.'
  },
  {
    id: 'k13-31', sec: '13.3', p: 42, type: 'kprim',
    q: 'Welche der folgenden sind Risikofaktoren des Mammakarzinoms?',
    st: [
      ['Frühe Menarche und späte Menopause', true],
      ['Postmenopausale Adipositas', true],
      ['Langes Stillen', false],
      ['Thoraxbestrahlung (z. B. bei M. Hodgkin)', true]
    ],
    ex: 'RF: Alter, lange Östrogenexposition (frühe Menarche, späte Menopause, Nulliparität, späte Erstgebärende, nicht gestillt, HRT), postmenopausale Adipositas, Alkohol, Bewegungsmangel, Strahlung, dichtes Drüsengewebe, Familie.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k13-t01', sec: '13.1', p: 42, type: 'tf', a: true, q: 'Das Fibroadenom ist der häufigste benigne Tumor junger Frauen.', ex: 'Fibroadenom: häufigster benigner Tumor junger Frauen; Epithel + Stroma.' },
  { id: 'k13-t02', sec: '13.1', p: 42, type: 'tf', a: false, q: 'Eine radiäre Narbe wird in der Stanzbiopsie als B2 eingestuft.', ex: 'Radiäre Narbe = B3 → Exzision.' },
  { id: 'k13-t03', sec: '13.1', p: 42, type: 'tf', a: true, q: 'Ein intraduktales Papillom kann eine blutige Mamillensekretion verursachen.', ex: 'Intraduktales Papillom: blutige Mamillensekretion.' },
  { id: 'k13-t04', sec: '13.1', p: 42, type: 'tf', a: true, q: 'Die Vakuumbiopsie wird zur Abklärung von Mikrokalk eingesetzt.', ex: 'Vakuumbiopsie (Mikrokalk).' },
  { id: 'k13-t05', sec: '13.2', p: 42, type: 'tf', a: false, q: 'Die einfache duktale Hyperplasie ist eine Präneoplasie.', ex: 'UDH: keine Präneoplasie (Altfrage 2008).' },
  { id: 'k13-t06', sec: '13.2', p: 42, type: 'tf', a: true, q: 'Das DCIS ist eine obligate Vorläuferläsion des Mammakarzinoms.', ex: 'DCIS = obligate Vorläuferläsion.' },
  { id: 'k13-t07', sec: '13.2', p: 42, type: 'tf', a: false, q: 'Das LCIS erhöht das Karzinomrisiko nur in der betroffenen Brust.', ex: 'LCIS: Indikatorläsion für ein erhöhtes Ca-Risiko beidseits.' },
  { id: 'k13-t08', sec: '13.2', p: 43, type: 'tf', a: false, q: 'Verkalkungen und Nekrosen sind typisch für das invasive Karzinom NST.', ex: 'Verkalkungen und Nekrosen sind typisch für das DCIS (Altfrage 2008).' },
  { id: 'k13-t09', sec: '13.2', p: 42, type: 'tf', a: true, q: 'Die Tumorzellen beim M. Paget der Mamille sind groß und hell (balloniert).', ex: 'M. Paget: große helle (ballonierte) Tumorzellen in der Epidermis.' },
  { id: 'k13-t10', sec: '13.3', p: 42, type: 'tf', a: true, q: 'Das Lebenszeitrisiko für ein Mammakarzinom liegt bei ca. 1 : 8.', ex: 'Lebenszeitrisiko ~1 : 8; Altersmedian ~64 J.' },
  { id: 'k13-t11', sec: '13.3', p: 43, type: 'tf', a: false, q: 'Das tubuläre Mammakarzinom hat eine schlechte Prognose.', ex: 'Tubulär: 5-JÜR ~100 % (Altfrage 2013B, 2019, 2021).' },
  { id: 'k13-t12', sec: '13.3', p: 42, type: 'tf', a: true, q: 'Das invasive Karzinom NST ist der häufigste Typ des Mammakarzinoms.', ex: 'NST (früher „invasiv duktal“): 70–80 %.' },
  { id: 'k13-t13', sec: '13.3', p: 42, type: 'tf', a: false, q: 'Das invasiv-lobuläre Karzinom ist E-Cadherin-positiv.', ex: 'Invasiv-lobulär: E-Cadherin-negativ.' },
  { id: 'k13-t14', sec: '13.3', p: 42, type: 'tf', a: true, q: 'BRCA1-assoziierte Mammakarzinome sind oft triple-negativ.', ex: 'BRCA1 (17q): oft triple-negativ, medulläre Züge, Ovar-Ca.' },
  { id: 'k13-t15', sec: '13.3', p: 43, type: 'tf', a: false, q: 'Die Tumorgröße gehört zum Grading nach Elston & Ellis.', ex: 'Tumorgröße gehört nicht dazu (Altfrage 2022).' },
  { id: 'k13-t16', sec: '13.3', p: 43, type: 'tf', a: true, q: 'Ein HER2-Score von 2+ erfordert eine In-situ-Hybridisierung.', ex: 'HER2 2+ = fraglich → FISH/CISH auf Amplifikation.' },
  { id: 'k13-t17', sec: '13.3', p: 43, type: 'tf', a: false, q: 'KRAS ist ein wichtiger prädiktiver Marker beim Mammakarzinom.', ex: 'KRAS spielt beim Mamma-Ca keine Rolle (Altfrage 2021).' },
  { id: 'k13-t18', sec: '13.3', p: 43, type: 'tf', a: true, q: 'Luminal-A-Karzinome haben die beste Prognose der molekularen Subtypen.', ex: 'Luminal A: ER+, PR hoch, HER2−, Ki-67 niedrig, G1/2; beste Prognose.' },
  { id: 'k13-t19', sec: '13.3', p: 43, type: 'tf', a: false, q: 'Der Androgenrezeptor ist ein Surrogatmarker der molekularen Subtypen.', ex: 'Nicht nach Androgenrezeptor (Altfrage 2022, 2024).' },
  { id: 'k13-t20', sec: '13.3', p: 43, type: 'tf', a: true, q: 'Ein Alter < 35 Jahre ist beim Mammakarzinom prognostisch ungünstig.', ex: 'Prognosefaktor Alter: < 35 J ungünstig.' },
  { id: 'k13-t21', sec: '13.3', p: 42, type: 'tf', a: false, q: 'Das Mammakarzinom des Mannes hat eine bessere Prognose als das der Frau.', ex: 'Mann: oft später diagnostiziert, keine bessere Prognose (Altfrage 2025).' },
  { id: 'k13-t22', sec: '13.3', p: 42, type: 'tf', a: true, q: 'Mammakarzinome des Mannes sind in > 90 % ER-positiv.', ex: 'Mann: fast immer NST, > 90 % ER+.' },
  { id: 'k13-t23', sec: '13.3', p: 43, type: 'tf', a: false, q: 'Aromatasehemmer werden v. a. bei prämenopausalen Frauen eingesetzt.', ex: 'Aromatasehemmer postmenopausal, Tamoxifen prämenopausal.' },
  { id: 'k13-t24', sec: '13.3', p: 43, type: 'tf', a: true, q: 'PARP-Inhibitoren werden bei BRCA-mutierten Mammakarzinomen eingesetzt.', ex: 'BRCA → PARP-Inhibitoren.' },
  { id: 'k13-t25', sec: '13.3', p: 43, type: 'tf', a: false, q: 'Ein triple-negatives Mammakarzinom schließt eine familiäre Belastung aus.', ex: 'Triple-negativ < 60 J ist sogar ein Grund für eine genetische Beratung (Altfrage 2025).' },
  { id: 'k13-t26', sec: '13.3', p: 43, type: 'tf', a: true, q: 'Knochenmetastasen des Mammakarzinoms sind osteolytisch oder gemischt.', ex: 'Hämatogen: Knochen (WS, osteolytisch/gemischt), Lunge, Leber, Hirn, Pleura.' },
  { id: 'k13-t27', sec: '13.3', p: 42, type: 'tf', a: true, q: 'Das muzinöse Karzinom (Gallertkarzinom) hat eine sehr gute Prognose.', ex: 'Sonderformen mit sehr guter Prognose: tubulär, muzinös, kribriform.' }
]);
