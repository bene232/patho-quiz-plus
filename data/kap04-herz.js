/* Kapitel 4 – Herz (PDF S. 12–15) */
PQ.registerChapter(4, [

  /* ---------- 4.1 Arteriosklerose & KHK ---------- */
  {
    id: 'k4-01', sec: '4.1', p: 12, type: 'single', alt: '2008',
    q: 'KHK – welche Aussage ist FALSCH?',
    opts: [
      'Ein chronisches Cor pulmonale kann Folge einer KHK sein.',
      'Arterielle Hypertonie, Nikotin, Fettstoffwechselstörungen und Diabetes mellitus sind Risikofaktoren.',
      'Symptome treten unter Belastung ab ca. 75 %, in Ruhe ab ca. 90 % Stenose auf.',
      'Eine arterielle Embolie kann indirekte Folge sein (über einen Wandthrombus).',
      'Eine KHK zeigt nicht zwangsläufig ein histologisches Korrelat am Myokard.'
    ],
    a: 0,
    ex: 'Das chronische Cor pulmonale ist Folge von Lungenerkrankungen (pulmonale Hypertonie bei COPD/Emphysem, Lungenfibrose, Silikose, rezidivierenden Embolien) – nicht der KHK. Alle anderen Aussagen sind richtig.'
  },
  {
    id: 'k4-02', sec: '4.2', p: 12, type: 'single', alt: '2019',
    q: 'KHK/Myokardinfarkt – welche Aussage ist FALSCH?',
    opts: [
      'Ein Myokardinfarkt ist histologisch bereits nach etwa 30 Minuten erkennbar.',
      'Versorgungstypen: Normaltyp ca. 80 %, Rechts- bzw. Linksversorgungstyp je ca. 10 %.',
      'Die häufigste Infarktlokalisation ist das RIVA-Stromgebiet (Vorderwand/Spitze/Septum).',
      'Ein nicht-transmuraler (subendokardialer) Infarkt kann z. B. bei Hypotonie entstehen.',
      'Rhythmusstörungen sind die häufigste Infarktkomplikation.'
    ],
    a: 0,
    ex: 'In den ersten 0–4 h ist lichtmikroskopisch noch keine Veränderung zu sehen (allenfalls Kontraktionsbänder, Wellenfasern). Eine beginnende Koagulationsnekrose ist frühestens nach ca. 4–6 h erkennbar.'
  },
  {
    id: 'k4-03', sec: '4.1', p: 12, type: 'single',
    q: 'Welche Manifestation der KHK ist am häufigsten?',
    opts: ['Angina pectoris', 'Myokardinfarkt', 'Plötzlicher Herztod', 'Ischämische Kardiomyopathie'],
    a: 0,
    ex: 'Manifestationen der KHK: Angina pectoris 55 %, Infarkt 25 %, plötzlicher Herztod 20 %; außerdem Rhythmusstörungen und ischämische Kardiomyopathie.'
  },
  {
    id: 'k4-04', sec: '4.1', p: 12, type: 'match',
    q: 'Ordne den KHK-Stenosegraden die Lumeneinengung zu.',
    pairs: [
      ['Grad I', '25–49 %'],
      ['Grad II (signifikant)', '50–74 %'],
      ['Grad III (kritisch)', '75–99 %'],
      ['Grad IV', '100 %']
    ],
    ex: 'Stenosegrade: I 25–49 % · II 50–74 % (signifikant) · III 75–99 % (kritisch) · IV 100 %. Symptomatisch ab ca. 75 % unter Belastung, ca. 90 % in Ruhe.'
  },
  {
    id: 'k4-05', sec: '4.1', p: 12, type: 'single',
    q: 'Welcher Faktor ist ein Risikofaktor 1. Ordnung der Arteriosklerose?',
    opts: ['Diabetes mellitus', 'Adipositas', 'Bewegungsmangel', 'Lipoprotein(a)', 'Homocystein'],
    a: 0,
    ex: 'Risikofaktoren 1. Ordnung: arterielle Hypertonie, Nikotin, Fettstoffwechselstörung (LDL ↑), Diabetes mellitus. Adipositas, Bewegungsmangel, Familie, Alter, männliches Geschlecht, Lp(a) und Homocystein sind Risikofaktoren 2. Ordnung.'
  },
  {
    id: 'k4-06', sec: '4.1', p: 12, type: 'single',
    q: 'Mönckeberg-Mediasklerose – welche Aussage trifft zu?',
    opts: [
      'Mediaverkalkung muskulärer Arterien ohne Lumeneinengung („Gänsegurgel-Arterien“)',
      'Lipidreiche Intimaplaques mit hochgradiger Lumeneinengung',
      'Segmentale Panvaskulitis der Extremitätengefäße bei jungen Rauchern',
      'Lymphozytär-granulomatöse Entzündung mit mehrkernigen Riesenzellen'
    ],
    a: 0,
    ex: 'Mönckeberg: Mediaverkalkung muskulärer Arterien (bei DM, Niereninsuffizienz, Alter) ohne Lumeneinengung. Lipidplaques der Intima = Arteriosklerose, Panvaskulitis bei Rauchern = M. Buerger, Riesenzellen = Riesenzellarteriitis.'
  },
  {
    id: 'k4-07', sec: '4.1', p: 12, type: 'single',
    q: 'In welcher Reihenfolge entwickeln sich die Stadien der Arteriosklerose?',
    opts: [
      'Fettstreifen → fibröse Plaque → komplizierte Läsion',
      'Fibröse Plaque → Fettstreifen → komplizierte Läsion',
      'Komplizierte Läsion → fibröse Plaque → Fettstreifen',
      'Fettstreifen → komplizierte Läsion → fibröse Plaque'
    ],
    a: 0,
    ex: 'Fettstreifen (Schaumzellen) → fibröse/fibroatheromatöse Plaque (Lipidkern + fibröse Kappe) → komplizierte Läsion (Ruptur, Ulzeration, Thrombose, Blutung, Verkalkung).'
  },

  /* ---------- 4.2 Myokardinfarkt ---------- */
  {
    id: 'k4-08', sec: '4.2', p: 12, type: 'kprim', alt: '2023',
    q: 'Welche der folgenden sind Komplikationen eines Myokardinfarkts?',
    st: [
      ['Kardiogener Schock', true],
      ['Eosinophilenreiche Endokarditis', false],
      ['Papillarmuskelruptur', true],
      ['Pericarditis epistenocardica', true]
    ],
    ex: 'Infarktkomplikationen u. a.: Rhythmusstörungen, kardiogener Schock, Papillarmuskelabriss (→ akute Mitralinsuffizienz), Ventrikelseptumruptur, freie Wandruptur, parietale Endokardthrombose, Pericarditis epistenocardica (früh, fibrinös), Dressler-Syndrom (spät). Eine eosinophilenreiche Endokarditis (Löffler, Hypereosinophilie) gehört nicht dazu.'
  },
  {
    id: 'k4-09', sec: '4.2', p: 12, type: 'kprim', alt: '2010',
    q: 'Welche der folgenden sind Komplikationen eines Myokardinfarkts?',
    st: [
      ['Kardiogener Schock', true],
      ['Thrombotische Endokarditis', false],
      ['Papillarmuskelruptur', true],
      ['Ventrikelseptumdefekt', true]
    ],
    ex: '„Ventrikelseptumdefekt“ ist hier als Ventrikelseptumruptur (erworbener Septumdefekt) gemeint und wird als richtig gewertet. Die Endocarditis thrombotica ist eine abakterielle Endokarditis bei Malignom, Urämie, Kachexie; nach einem Infarkt entsteht dagegen eine parietale Endokardthrombose (Wandthrombus).',
    dis: 'In den KPK-Facts steht „Ventrikelseptumruptur, aber kein VSD“. Gemeint ist: kein angeborener VSD. Die Septumruptur ist pathophysiologisch ein erworbener Defekt – die meisten Lösungen werten die Aussage deshalb als richtig.'
  },
  {
    id: 'k4-10', sec: '4.2', p: 12, type: 'match',
    q: 'Ordne die Koronararterie dem typischen Infarktgebiet zu.',
    pairs: [
      ['RIVA', 'Vorderwand, Herzspitze, Septum'],
      ['RCA', 'Hinterwand / inferior'],
      ['RCX', 'Seiten- / Hinterwand']
    ],
    ex: 'RIVA → Vorderwand/Spitze/Septum (häufigste Lokalisation), RCA → Hinterwand/inferior, RCX → Seiten-/Hinterwand.'
  },
  {
    id: 'k4-11', sec: '4.2', p: 12, type: 'match',
    q: 'Ordne dem Zeitpunkt nach Infarktbeginn den typischen Befund zu.',
    pairs: [
      ['0–4 h', 'Lichtmikroskopisch noch keine Veränderung'],
      ['ca. 12 h', 'Voll ausgebildete Koagulationsnekrose (lehmgelb, hyperämischer Randsaum)'],
      ['10–24 h bis Tag 3', 'Einwanderung neutrophiler Granulozyten'],
      ['Ab Tag 4 bis 3. Woche', 'Makrophagen, Granulationsgewebe vom Rand her'],
      ['Ab 6. Woche', 'Kollagene Narbe (weiß, derb)']
    ],
    ex: '0–4 h: keine Veränderung (allenfalls Kontraktionsbänder, Wellenfasern) · 4–6 h: beginnende Koagulationsnekrose · ca. 12 h: voll ausgebildete Koagulationsnekrose · 10–24 h bis Tag 3: Neutrophile · ab Tag 4 bis 3. Woche: Makrophagen, Granulationsgewebe · ab 6. Woche bis 3 Monate: kollagene Narbe.'
  },
  {
    id: 'k4-12', sec: '4.2', p: 12, type: 'single',
    q: 'Ab wann ist ein Myokardinfarkt frühestens als beginnende Koagulationsnekrose erkennbar?',
    opts: ['Nach ca. 4–6 Stunden', 'Nach ca. 30 Minuten', 'Nach ca. 3 Tagen', 'Nach ca. 6 Wochen'],
    a: 0,
    ex: '0–4 h: lichtmikroskopisch noch keine Veränderung. 4–6 h: beginnende Koagulationsnekrose (enzymhistochemisch erkennbar). Ca. 12 h: voll ausgebildete Koagulationsnekrose.'
  },
  {
    id: 'k4-13', sec: '4.2', p: 12, type: 'single',
    q: 'Welche Komplikation des Myokardinfarkts ist die häufigste?',
    opts: ['Rhythmusstörungen (v. a. Kammerflimmern)', 'Freie Herzwandruptur', 'Papillarmuskelabriss', 'Dressler-Syndrom', 'Herzwandaneurysma'],
    a: 0,
    ex: 'Rhythmusstörungen (v. a. Kammerflimmern) sind die häufigste Infarktkomplikation. Die freie Wandruptur betrifft 3–6 % (Tag 3–10); Dressler-Syndrom und Herzwandaneurysma sind Spätkomplikationen.'
  },
  {
    id: 'k4-14', sec: '4.2', p: 12, type: 'match',
    q: 'Ordne die Infarktkomplikation ihrer Folge bzw. ihrem Kennzeichen zu.',
    pairs: [
      ['Papillarmuskelabriss', 'Akute Mitralinsuffizienz'],
      ['Freie Herzwandruptur', 'Hämoperikard / Tamponade (Tag 3–10)'],
      ['Parietale Endokardthrombose', 'Arterielle Embolien (Hirn, Darm, Milz, Niere)'],
      ['Pericarditis epistenocardica', 'Früh, fibrinös'],
      ['Dressler-Syndrom', 'Spät, autoimmun']
    ],
    ex: 'Papillarmuskelabriss → akute Mitralinsuffizienz · freie Wandruptur (3–6 %, Tag 3–10) → Hämoperikard/Tamponade · parietale Endokardthrombose (ca. 45 %) → arterielle Embolien · Pericarditis epistenocardica (ca. 30 %, früh, fibrinös) · Dressler-Syndrom (spät, autoimmun).'
  },
  {
    id: 'k4-15', sec: '4.2', p: 12, type: 'single',
    q: 'Welche Aussage zum nicht-transmuralen (subendokardialen) Infarkt trifft zu?',
    opts: [
      'Er entspricht einem NSTEMI und kann z. B. bei Hypotonie entstehen.',
      'Er entspricht einem STEMI.',
      'Er betrifft definitionsgemäß die gesamte Wanddicke.',
      'Er ist histologisch bereits nach 30 Minuten erkennbar.'
    ],
    a: 0,
    ex: 'Transmural = STEMI; nicht-transmural/subendokardial = NSTEMI, z. B. bei Hypotonie. Definition des Infarkts: ischämische Myokardnekrose (Troponin-Anstieg + Klinik/EKG).'
  },

  /* ---------- 4.3 Herzhypertrophie & Cor pulmonale ---------- */
  {
    id: 'k4-16', sec: '4.3', p: 13, type: 'single',
    q: 'Worauf beruht eine Herzhypertrophie?',
    opts: ['Zunahme der Myozytengröße', 'Zunahme der Myozytenzahl', 'Ersatz des Myokards durch Fett- und Bindegewebe', 'Endomyokardfibrose mit Lumeneinengung'],
    a: 0,
    ex: 'Hypertrophie = Zunahme der Myozytengröße (nicht der Zahl); kritisches Herzgewicht ca. 500 g. Fett-/Bindegewebsersatz = ARVC, Endomyokardfibrose = restriktive Kardiomyopathie.'
  },
  {
    id: 'k4-17', sec: '4.3', p: 13, type: 'single',
    q: 'Welche Ursache führt typischerweise zu einer konzentrischen Herzhypertrophie?',
    opts: ['Aortenklappenstenose', 'Aorteninsuffizienz', 'Mitralinsuffizienz', 'Ventrikelseptumdefekt (Shunt)'],
    a: 0,
    ex: 'Konzentrische Hypertrophie bei Druckbelastung (Hypertonie, Aortenstenose, Aortenisthmusstenose); exzentrische/dilatative Hypertrophie bei Volumenbelastung (Insuffizienzen, Shunts).'
  },
  {
    id: 'k4-18', sec: '4.3', p: 13, type: 'single',
    q: 'Was ist eine typische Ursache eines chronischen Cor pulmonale?',
    opts: ['COPD / Lungenemphysem', 'Koronare Herzkrankheit', 'Aortenklappenstenose', 'Arterielle (systemische) Hypertonie'],
    a: 0,
    ex: 'Cor pulmonale = Rechtsherzhypertrophie/-dilatation infolge pulmonaler Hypertonie bei Lungenerkrankung: akut (Lungenembolie), chronisch (COPD/Emphysem, Lungenfibrose, Silikose, rezidivierende Embolien). Folgen: Stauungsleber (Muskatnussleber), Ödeme.'
  },

  /* ---------- 4.4 Kardiomyopathien ---------- */
  {
    id: 'k4-19', sec: '4.4', p: 13, type: 'single', alt: '2013, 2021–2024',
    q: 'Welche Region ist bei der hypertrophen obstruktiven Kardiomyopathie (HOCM) am stärksten betroffen?',
    opts: ['Ventrikelseptum, subvalvulär', 'Herzspitze', 'Freie Wand des rechten Ventrikels', 'Linker Vorhof'],
    a: 0,
    ex: 'HOCM: asymmetrische Septumhypertrophie mit subvalvulärem Muskelwulst („subvalvuläre muskuläre Aortenstenose“). Eine spitzennahe Hypertrophie ohne Obstruktion spricht für eine HNCM.'
  },
  {
    id: 'k4-20', sec: '4.4', p: 13, type: 'match',
    q: 'Ordne die Kardiomyopathie ihrem Kennzeichen zu.',
    pairs: [
      ['HOCM', 'Asymmetrische Septumhypertrophie mit subvalvulärem Muskelwulst'],
      ['ARVC', 'Ersatz des rechtsventrikulären Myokards durch Fett- und Bindegewebe'],
      ['DCM', 'Dilatation + systolische Dysfunktion'],
      ['RCM', 'Endomyokardfibrose, gestörte diastolische Dehnbarkeit'],
      ['Ionenkanalerkrankungen', 'Long-QT-, Brugada-Syndrom']
    ],
    ex: 'Primär genetisch: HCM (HOCM/HNCM), ARVC, Ionenkanalerkrankungen. Primär gemischt: DCM, RCM. Primär erworben: Myokarditis, peripartale KMP, Tako-Tsubo. Sekundär: ischämisch, hypertensiv, valvulär, metabolisch/endokrin, toxisch, neuromuskulär.'
  },
  {
    id: 'k4-21', sec: '4.4', p: 13, type: 'single',
    q: 'Welche Kardiomyopathie zählt zu den sekundären (spezifischen) Formen?',
    opts: ['Ischämische Kardiomyopathie', 'Hypertrophe Kardiomyopathie', 'Arrhythmogene rechtsventrikuläre KMP (ARVC)', 'Dilatative Kardiomyopathie', 'Stress-Kardiomyopathie (Tako-Tsubo)'],
    a: 0,
    ex: 'Sekundär (spezifisch): ischämisch, hypertensiv, valvulär, metabolisch/endokrin, toxisch (Alkohol, Anthrazykline), neuromuskulär. HCM und ARVC = primär genetisch, DCM = primär gemischt, Tako-Tsubo = primär erworben.'
  },
  {
    id: 'k4-22', sec: '4.4', p: 13, type: 'single',
    q: 'Was ist der typische histologische Befund der hypertrophen Kardiomyopathie?',
    opts: ['Myozyten-Disarray und Fibrose', 'Ersatz des Myokards durch Fettgewebe', 'Lymphozytäres Infiltrat mit Myozytennekrosen', 'Aschoff-Knötchen mit Anitschkow-Zellen'],
    a: 0,
    ex: 'HCM: Myozyten-Disarray, Fibrose; Mutationen in Sarkomergenen (Myosin-bindendes Protein C, β-Myosin); plötzlicher Herztod junger Sportler.'
  },
  {
    id: 'k4-23', sec: '4.4', p: 13, type: 'single',
    q: 'Wie wird die Stress-Kardiomyopathie (Tako-Tsubo) eingeteilt?',
    opts: ['Primär erworben', 'Primär genetisch', 'Primär gemischt', 'Sekundär (spezifisch)'],
    a: 0,
    ex: 'Primär erworben: Myokarditis, peripartale KMP, Stress-KMP (Tako-Tsubo).'
  },
  {
    id: 'k4-24', sec: '4.4', p: 13, type: 'single',
    q: 'Welche Aussage zur dilatativen Kardiomyopathie (DCM) trifft zu?',
    opts: [
      'Etwa 25 % der Fälle sind familiär.',
      'Leitbefund ist ein normal großer Ventrikel mit gestörter diastolischer Dehnbarkeit.',
      'Sie gehört zu den primär genetischen Kardiomyopathien.',
      'Typisch ist eine asymmetrische Septumhypertrophie.'
    ],
    a: 0,
    ex: 'DCM (primär gemischt): Dilatation + systolische Dysfunktion des linken oder beider Ventrikel; ca. 25 % familiär, sonst nach Myokarditis, Alkohol, toxisch, peripartal. Normal großer Ventrikel mit diastolischer Störung = RCM.'
  },

  /* ---------- 4.5 Myokarditis ---------- */
  {
    id: 'k4-25', sec: '4.5', p: 13, type: 'single', alt: '2010, 2019',
    q: 'Myokarditis/Kardiomyopathie – welche Aussage ist FALSCH?',
    opts: [
      'Die Virusmyokarditis zeigt typischerweise ein granulozytäres Infiltrat.',
      'Die Diphtherie ist das wichtigste Beispiel einer infekttoxischen Myokarditis.',
      'Die ischämische Kardiomyopathie ist eine sekundäre Kardiomyopathie.',
      'Die HOCM ist eine primäre Kardiomyopathie.',
      'Die Dallas-Kriterien dienen der Diagnose einer Myokarditis in der Endomyokardbiopsie.'
    ],
    a: 0,
    ex: 'Die Virusmyokarditis (z. B. Coxsackie B) zeigt ein lymphozytäres Infiltrat mit Myozytennekrosen. Granulozytär/abszedierend ist die bakterielle Myokarditis.'
  },
  {
    id: 'k4-26', sec: '4.5', p: 13, type: 'kprim', alt: '2016, 2023, 2025',
    q: 'Myokarditis – welche Zuordnungen treffen zu?',
    st: [
      ['Coxsackie-Virus: lymphozytäres Infiltrat', true],
      ['Riesenzellmyokarditis: rapider Verlauf', true],
      ['Perivaskuläre Granulome mit Anitschkow-Makrophagen: Sarkoidose', false],
      ['Epitheloidzellige Granulome ohne Nekrosen: rheumatische Myokarditis', false]
    ],
    ex: 'Anitschkow-Zellen (Aschoff-Knötchen) sind typisch für die rheumatische Myokarditis. Epitheloidzellige Granulome ohne Nekrose sprechen für eine Sarkoidose, mit Nekrosen für die rheumatische Form.'
  },
  {
    id: 'k4-27', sec: '4.5', p: 13, type: 'single',
    q: 'Welche Myokarditis ist infekttoxisch (Exotoxin hemmt die Proteinsynthese, keine Erreger im Myokard)?',
    opts: ['Diphtherie', 'Coxsackie-B-Myokarditis', 'Staphylokokken-Myokarditis', 'Chagas-Myokarditis (T. cruzi)'],
    a: 0,
    ex: 'Diphtherie = infekttoxische Myokarditis: Das Exotoxin hemmt die Proteinsynthese → Verfettung und Nekrosen, keine Erreger im Myokard.'
  },
  {
    id: 'k4-28', sec: '4.5', p: 13, type: 'match',
    q: 'Ordne die Myokarditis-Form ihrem Kennzeichen zu.',
    pairs: [
      ['Viral (Coxsackie B)', 'Lymphozytäres Infiltrat mit Myozytennekrosen'],
      ['Bakteriell', 'Granulozytär / abszedierend'],
      ['Rheumatisch', 'Aschoff-Knötchen mit Anitschkow-Zellen'],
      ['Sarkoidose', 'Epitheloidzellige Granulome ohne Nekrose'],
      ['Riesenzellmyokarditis', 'Unklare Ätiologie, rapider, oft letaler Verlauf']
    ],
    ex: 'Viral → lymphozytär (Verlauf Virusinfekt → Autoimmunität → DCM). Bakteriell (Staph., Pneumokokken, Pseudomonas, Klebsiellen) → granulozytär/abszedierend. Granulomatös: rheumatisch (Aschoff/Anitschkow) bzw. Sarkoidose (ohne Nekrose).'
  },
  {
    id: 'k4-29', sec: '4.5', p: 13, type: 'single',
    q: 'Was besagen die Dallas-Kriterien (1987) für die Myokarditis?',
    opts: [
      'Entzündliches Infiltrat + Myozytennekrose ohne ischämische Ursache',
      'Nachweis von Erregern im Myokard',
      'Troponin-Anstieg + Klinik/EKG',
      'Epitheloidzellige Granulome mit Riesenzellen'
    ],
    a: 0,
    ex: 'Dallas-Kriterien: Infiltrat + Myozytennekrose ohne ischämische Ursache. Erstbiopsie: Myokarditis / Borderline / keine; Folgebiopsie: persistierend / abheilend / abgeheilt. Troponin + Klinik/EKG ist die Definition des Myokardinfarkts.'
  },
  {
    id: 'k4-30', sec: '4.5', p: 13, type: 'single',
    q: 'Wie lautet das immunhistochemische Kriterium der Myokarditis?',
    opts: [
      '≥ 14 Leukozyten/mm² (davon bis zu 4 Monozyten) mit ≥ 7 CD3+ T-Zellen/mm²',
      '≥ 7 Leukozyten/mm² mit ≥ 14 CD3+ T-Zellen/mm²',
      '≥ 4 Leukozyten/mm² mit ≥ 1 CD3+ T-Zelle/mm²',
      '≥ 50 Leukozyten/mm² ohne T-Zell-Kriterium'
    ],
    a: 0,
    ex: 'IHC-Kriterium: ≥ 14 Leukozyten/mm² (davon bis zu 4 Monozyten) mit ≥ 7 CD3+ T-Zellen/mm². Diagnose per Endomyokardbiopsie.'
  },

  /* ---------- 4.6 Endokarditis ---------- */
  {
    id: 'k4-31', sec: '4.6', p: 14, type: 'kprim', alt: '2013, 2020, 2025',
    q: 'Endokarditis – welche Aussagen treffen zu?',
    st: [
      ['Die Endocarditis parietalis fibroplastica Löffler führt zur Endokardfibrose.', true],
      ['Die Endocarditis verrucosa simplex besteht im Wesentlichen nur aus Fibrin.', true],
      ['Bei bakterieller Endokarditis sind periphere Infarkte (z. B. Milz) typisch.', true],
      ['Die Endocarditis ulceropolyposa ist nichtinfektiös und tumorassoziiert.', false]
    ],
    ex: 'Die Endocarditis (ulcero-)polyposa ist die infektiöse subakute Form (Endocarditis lenta, Strep. viridans) mit großen wulstigen Vegetationen aus Fibrin, Thrombozyten, Leukozyten und Erregern.'
  },
  {
    id: 'k4-32', sec: '4.6', p: 14, type: 'kprim', alt: '2010',
    q: 'Herzklappen/Endokarditis – welche Aussagen treffen zu?',
    st: [
      ['Die Aortenklappenstenose ist heute meist nicht rheumatisch bedingt.', true],
      ['Endokarditische Klappenschäden betreffen überwiegend das rechte Herz.', false],
      ['Eine Stauungsleber kann Folge eines Klappenschadens sein.', true],
      ['Bei akuter Endokarditis findet sich häufig eine Vaskularisierung des Klappenstromas.', false]
    ],
    ex: 'Klappenschäden überwiegend links (Mitral- > Aortenklappe); rechts v. a. bei i.v.-Drogenabusus. Die Vaskularisierung des Klappenstromas ist eine Spätfolge der abgelaufenen Endokarditis, kein akuter Befund. Die Aortenklappenstenose ist heute meist senil-kalzifizierend, nur noch ca. 25 % rheumatisch.'
  },
  {
    id: 'k4-33', sec: '4.6', p: 14, type: 'single', alt: '2008',
    q: 'Endokarditis/Klappenfehler – welche Aussage ist FALSCH?',
    opts: [
      'Endokarditische Klappenschäden finden sich überwiegend am rechten Herzen.',
      'Eine Aortenklappenstenose ist in ca. 25 % rheumatisch bedingt.',
      'Eine ischämische Gastropathie (Embolie) kann Folge eines Klappenschadens sein.',
      'Eine Endocarditis verrucosa simplex kann bei Tumorerkrankungen auftreten.',
      'Nach abgelaufener Endokarditis findet sich eine Vaskularisierung des Klappenstromas.'
    ],
    a: 0,
    ex: 'Der Klappenschaden betrifft überwiegend das linke Herz (Mitral- > Aortenklappe); das rechte Herz v. a. bei i.v.-Drogenabusus (Trikuspidalklappe).'
  },
  {
    id: 'k4-34', sec: '4.6', p: 14, type: 'match',
    q: 'Ordne die Endokarditis-Form ihrem Kennzeichen zu.',
    pairs: [
      ['E. verrucosa rheumatica', '2–3 Wochen nach Infekt mit β-hämolysierenden Streptokokken der Gruppe A'],
      ['E. verrucosa simplex', 'Abakteriell, im Wesentlichen nur Fibrinauflagerungen'],
      ['Libman-Sacks-Endokarditis', 'Abakteriell bei SLE / Antiphospholipid-Syndrom'],
      ['E. parietalis fibroplastica Löffler', 'Wandendokard, Hypereosinophilie → Endomyokardfibrose'],
      ['Karzinoid-Herz', 'Rechtsbetonte Endokardfibrose']
    ],
    ex: 'E. verrucosa rheumatica: molekulares Mimikry, Wärzchen am Schließungsrand, v. a. Mitralklappe → später Mitralstenose. E. verrucosa simplex: paraneoplastisch/auszehrende Erkrankungen. Löffler: Wandendokard (nicht Klappen) → restriktive KMP.'
  },
  {
    id: 'k4-35', sec: '4.6', p: 13, type: 'single',
    q: 'Welcher Erreger ist der häufigste bei der akuten infektiösen Endokarditis?',
    opts: ['Staphylococcus aureus', 'Streptococcus viridans', 'Enterokokken', 'HACEK-Gruppe'],
    a: 0,
    ex: 'Akut: Staph. aureus, Endocarditis ulcerosa (Klappenzerstörung, Perforation). Subakut (lenta): Strep. viridans, E. (ulcero-)polyposa. Gesamt: Staphylokokken ca. 35 %, Streptokokken ca. 30 %, Enterokokken ca. 10 %, HACEK, Pilze.'
  },
  {
    id: 'k4-36', sec: '4.6', p: 13, type: 'single',
    q: 'Was ist typisch für die Endocarditis lenta (subakut)?',
    opts: [
      'Strep. viridans; große wulstige Vegetationen (E. polyposa)',
      'Staph. aureus; Klappenzerstörung und Perforation (E. ulcerosa)',
      'Kleine Wärzchen am Schließungsrand 2–3 Wochen nach Streptokokken-Infekt',
      'Befall des Wandendokards bei Hypereosinophilie'
    ],
    a: 0,
    ex: 'Subakut (lenta): Strep. viridans; E. (ulcero-)polyposa = große wulstige Vegetationen aus Fibrin, Thrombozyten, Leukozyten, Erregern. Staph. aureus/E. ulcerosa = akute Form; Wärzchen = E. verrucosa rheumatica; Wandendokard = Löffler.'
  },
  {
    id: 'k4-37', sec: '4.6', p: 14, type: 'single',
    q: 'Welche Herzklappe ist bei der Endokarditis infolge i.v.-Drogenabusus typischerweise betroffen?',
    opts: ['Trikuspidalklappe', 'Mitralklappe', 'Aortenklappe', 'Pulmonalklappe'],
    a: 0,
    ex: 'Der Klappenschaden betrifft überwiegend das linke Herz (Mitral- > Aortenklappe); das rechte Herz v. a. bei i.v.-Drogenabusus (Trikuspidalklappe, Staphylokokken). Folge der Rechtsherz-Endokarditis: Lungenembolien/-abszesse.'
  },
  {
    id: 'k4-38', sec: '4.6', p: 14, type: 'single',
    q: 'Was ist die häufigste Ursache erworbener Herzklappenfehler?',
    opts: ['Abgelaufene Endokarditis (Defektheilung)', 'Marfan-Syndrom', 'Karzinoid-Syndrom', 'Lues (Mesaortitis)'],
    a: 0,
    ex: 'Die Defektheilung nach Endokarditis (Klappenrandverdickung, Vernarbung, Verkalkung, Vaskularisierung des Klappenstromas) ist die häufigste Ursache erworbener Klappenfehler.'
  },
  {
    id: 'k4-39', sec: '4.6', p: 14, type: 'single',
    q: 'Welche Folge ist typisch für eine bakterielle Endokarditis des linken Herzens?',
    opts: [
      'Septische Embolien mit peripheren Infarkten (Milz, Niere, Gehirn)',
      'Endomyokardfibrose mit restriktiver Kardiomyopathie',
      'Rechtsbetonte Endokardfibrose',
      'Lungenabszesse durch septische Lungenembolien'
    ],
    a: 0,
    ex: 'Folgen: septische Embolien → periphere Infarkte (Milz, Niere, Gehirn), Herdnephritis Löhlein, Osler-Knötchen, Janeway-Läsionen, Splinter-Blutungen, Roth-Flecken. Lungenembolien/-abszesse entstehen bei der Rechtsherz-Endokarditis.'
  },

  /* ---------- 4.7 Erworbene Klappenfehler ---------- */
  {
    id: 'k4-40', sec: '4.7', p: 14, type: 'kprim', alt: '2021',
    q: 'Erworbene Klappenfehler – welche Zuordnungen treffen zu?',
    st: [
      ['Mitralstenose: großer linker Vorhof + Rechtsherzhypertrophie', true],
      ['Mitralinsuffizienz: großer linker Vorhof + Rechtsherzhypertrophie', true],
      ['Aortenklappenstenose: späte (konsekutive) Linksdilatation', true],
      ['Aorteninsuffizienz: frühe (primäre) Linksdilatation', true]
    ],
    ex: 'In dieser Altfrage waren alle 4 Aussagen richtig. Druckbelastung (Aortenstenose) → konzentrische Hypertrophie, erst spät Dilatation; Volumenbelastung (Aorteninsuffizienz) → früh Dilatation. Beide Mitralvitien vergrößern den linken Vorhof und belasten über den Rückstau das rechte Herz.'
  },
  {
    id: 'k4-41', sec: '4.7', p: 14, type: 'match',
    q: 'Ordne dem Klappenfehler seine häufigste Ursache zu.',
    pairs: [
      ['Aortenklappenstenose', 'Senil-kalzifizierend (degenerativ), bikuspide Klappe'],
      ['Aorteninsuffizienz', 'Bakterielle Endokarditis, Aortenwurzeldilatation (Marfan, Lues)'],
      ['Mitralstenose', 'Rheumatisches Fieber'],
      ['Mitralinsuffizienz', 'Mitralklappenprolaps, ischämisch (Papillarmuskel)']
    ],
    ex: 'Aortenklappenstenose: senil-kalzifizierend, bikuspide Klappe, nur noch ca. 25 % rheumatisch. Mitralinsuffizienz außerdem: Endokarditis, relative Insuffizienz bei LV-Dilatation.'
  },
  {
    id: 'k4-42', sec: '4.7', p: 14, type: 'single',
    q: 'Welcher Befund ist typisch für die Mitralstenose?',
    opts: [
      'Großer linker Vorhof, kleiner linker Ventrikel, Stauungslunge',
      'Konzentrische Linksherzhypertrophie mit Angina und Synkopen',
      'Frühe (primäre) Linksdilatation durch Volumenbelastung',
      'Rechtsbetonte Endokardfibrose'
    ],
    a: 0,
    ex: 'Mitralstenose: großer LA, kleiner LV, Stauungslunge (Herzfehlerzellen), pulmonale Hypertonie → Rechtsherzhypertrophie; Vorhofflimmern, Vorhofthromben → Embolien. Konzentrische Hypertrophie = Aortenstenose, frühe Dilatation = Aorteninsuffizienz.'
  },

  /* ---------- 4.8 Angeborene Herzfehler ---------- */
  {
    id: 'k4-43', sec: '4.8', p: '14–15', type: 'kprim', alt: '2015, 2019, 2021, 2022',
    q: 'Zur Fallot-Tetralogie gehören:',
    st: [
      ['Linksherzhypertrophie', false],
      ['Pulmonalstenose', true],
      ['Ventrikelseptumdefekt (VSD)', true],
      ['Rechtsherzhypertrophie', true]
    ],
    ex: 'Fallot-Tetralogie = VSD + Pulmonalstenose + über dem VSD reitende (dextroponierte) Aorta + Rechtsherzhypertrophie. Eine Linksherzhypertrophie gehört nicht dazu.'
  },
  {
    id: 'k4-44', sec: '4.8', p: '14–15', type: 'single', alt: '2016',
    q: 'Was gehört NICHT zur Fallot-Tetralogie?',
    opts: ['Aortenisthmusstenose', 'Ventrikelseptumdefekt', 'Pulmonalstenose', 'Über dem VSD reitende Aorta', 'Rechtsherzhypertrophie'],
    a: 0,
    ex: 'Fallot-Tetralogie = VSD + Pulmonalstenose + reitende Aorta + Rechtsherzhypertrophie (+ ASD = Pentalogie). Die Aortenisthmusstenose ist eine eigene Obstruktion des linken Herzens.'
  },
  {
    id: 'k4-45', sec: '4.8', p: 15, type: 'single', alt: '2008, 2013, 2016',
    q: 'Angeborene Herzfehler – welche Aussage ist richtig?',
    opts: [
      'Die präduktale Aortenisthmusstenose hat die schlechtere Prognose.',
      'Die Ebstein-Anomalie betrifft das linke Herz.',
      'Die Fallot-Tetralogie ist das häufigste Vitium mit Rechts-links-Shunt.',
      'Die präduktale Aortenisthmusstenose ist die adulte Form.',
      'Ein spaltförmig offenes Foramen ovale ist meist pathologisch.'
    ],
    a: 0,
    ex: 'Präduktal = infantil, tubuläre Hypoplasie, schlechtere Prognose (untere Körperhälfte über den PDA versorgt); postduktal = adult. Ebstein betrifft die Trikuspidalklappe (rechts). Laut Tabelle ist der Truncus arteriosus communis (14 %) häufiger als Fallot (7 %). Spaltförmiges PFO bei ca. 25 % der Erwachsenen, kein pathologischer Befund.'
  },
  {
    id: 'k4-46', sec: '4.8', p: 15, type: 'single', alt: '2015',
    q: 'Welcher Herzfehler geht mit einem Rechts-links-Shunt einher?',
    opts: ['Fallot-Tetralogie', 'Ventrikelseptumdefekt', 'Vorhofseptumdefekt', 'Persistierender Ductus arteriosus'],
    a: 0,
    ex: 'VSD, ASD und PDA sind primär Links-rechts-Shunts (azyanotisch). Die Fallot-Tetralogie ist ein R→L-Shunt mit verminderter Lungendurchblutung.'
  },
  {
    id: 'k4-47', sec: '4.8', p: '14–15', type: 'match',
    q: 'Ordne dem Herzfehler das passende Kennzeichen zu.',
    pairs: [
      ['Ventrikelseptumdefekt', 'Häufigster angeborener Herzfehler (27 %)'],
      ['Ebstein-Anomalie', 'Trikuspidalklappe nach apikal verlagert'],
      ['Postduktale Aortenisthmusstenose', 'Rippenusuren, schwache Femoralispulse'],
      ['Fallot-Tetralogie', 'Holzschuhherz, verminderte Lungengefäßzeichnung'],
      ['Persistierender Ductus arteriosus', 'Blutfluss Aorta → Pulmonalis']
    ],
    ex: 'Ebstein: Trikuspidalklappe nach apikal verlagert → „Atrialisierung“ des RV. Postduktale Isthmusstenose: Kollateralen (Rippenusuren), Hypertonie der oberen Körperhälfte, schwache Femoralispulse. Fallot: Holzschuhherz, verminderte Lungengefäßzeichnung.'
  },
  {
    id: 'k4-48', sec: '4.8', p: 14, type: 'match',
    q: 'Ordne den Herzfehler seiner Gruppe zu.',
    pairs: [
      ['Vorhofseptumdefekt', 'L→R-Shunt (azyanotisch)'],
      ['Transposition der großen Arterien', 'R→L-Shunt, Lungendurchblutung ↑'],
      ['Trikuspidalatresie', 'R→L-Shunt, Lungendurchblutung ↓'],
      ['Hypoplastisches Linksherz', 'Obstruktion links'],
      ['Pulmonalatresie', 'Obstruktion rechts']
    ],
    ex: 'L→R (ca. 50 %): VSD, PDA, ASD, Endokardkissendefekt. R→L (ca. 30 %): mit Lungendurchblutung ↑ Truncus, TGA; mit ↓ Fallot, Trikuspidalatresie, Ebstein. Obstruktion (ca. 20 %): links Aortenisthmusstenose, Aortenstenose/-atresie, hypoplastisches Linksherz; rechts Pulmonalstenose/-atresie.'
  },
  {
    id: 'k4-49', sec: '4.8', p: 14, type: 'single',
    q: 'Welcher ist laut Skript der häufigste zyanotische Herzfehler jenseits der Neugeborenenperiode?',
    opts: ['Fallot-Tetralogie', 'Ventrikelseptumdefekt', 'Ebstein-Anomalie', 'Aortenisthmusstenose'],
    a: 0,
    ex: 'Fallot = häufigster zyanotischer Herzfehler jenseits der Neugeborenenperiode. Achtung Falle: „Fallot ist das häufigste Vitium mit R-L-Shunt“ wurde in Altklausuren als falsch gewertet, weil laut Tabelle der Truncus arteriosus communis (14 %) häufiger ist als Fallot (7 %).'
  },
  {
    id: 'k4-50', sec: '4.8', p: 15, type: 'single',
    q: 'Welcher Befund ist typisch für die postduktale (adulte) Aortenisthmusstenose?',
    opts: [
      'Rippenusuren durch Kollateralen, Hypertonie der oberen Körperhälfte',
      'Versorgung der unteren Körperhälfte über den PDA',
      'Tubuläre Hypoplasie mit schlechterer Prognose',
      'Kräftige Femoralispulse'
    ],
    a: 0,
    ex: 'Postduktal = adult: Kollateralen (Rippenusuren), Hypertonie der oberen Körperhälfte, schwache Femoralispulse, Linksherzhypertrophie. Präduktal = infantil: tubuläre Hypoplasie, Versorgung der unteren Körperhälfte über den PDA, schlechtere Prognose.'
  },
  {
    id: 'k4-51', sec: '4.8', p: 15, type: 'single',
    q: 'Ein spaltförmig offenes Foramen ovale …',
    opts: [
      '… findet sich bei ca. 25 % der Erwachsenen und ist kein pathologischer Befund.',
      '… ist meist pathologisch.',
      '… ist der häufigste angeborene Herzfehler.',
      '… schließt eine paradoxe Embolie aus.'
    ],
    a: 0,
    ex: 'Spaltförmiges PFO: bei ca. 25 % der Erwachsenen, kein pathologischer Befund – eine paradoxe Embolie ist aber möglich. Häufigster angeborener Herzfehler ist der VSD (27 %).'
  },

  /* ---------- 4.9 Perikarditis & Herztumoren ---------- */
  {
    id: 'k4-52', sec: '4.9', p: 15, type: 'single', alt: '2013, 2016, 2024',
    q: 'Welche Reihenfolge der Herztumoren beim Erwachsenen (nach Häufigkeit) ist richtig?',
    opts: [
      'Myxom > papilläres Fibroelastom > Teratom',
      'Papilläres Fibroelastom > Myxom > Teratom',
      'Teratom > Myxom > papilläres Fibroelastom',
      'Rhabdomyom > Myxom > Fibrom'
    ],
    a: 0,
    ex: 'Erwachsene: Myxom > Lipom > papilläres Fibroelastom > Teratom. Kinder: Rhabdomyom > Fibrom.'
  },
  {
    id: 'k4-53', sec: '4.9', p: 15, type: 'kprim', alt: '2015, 2018',
    q: 'Herztumoren – welche Aussagen treffen zu?',
    st: [
      ['Das Rhabdomyom ist der häufigste Herztumor bei Kindern.', true],
      ['Herztumoren sind bei Kindern häufiger maligne als bei Erwachsenen.', false],
      ['Am Herzen kommen auch Lymphangiome vor.', true],
      ['Eine wichtige Differenzialdiagnose des Vorhofmyxoms ist der Thrombus.', true]
    ],
    ex: 'Kindliche Herztumoren sind fast immer benigne; maligne Herztumoren sind bei Erwachsenen häufiger. Lymphangiome sind selten (ca. 2 %), kommen aber vor.'
  },
  {
    id: 'k4-54', sec: '4.9', p: 15, type: 'single', alt: '2008',
    q: 'Kardiales Fibrom – welche Aussage ist richtig?',
    opts: [
      'Echokardiographisch ist differenzialdiagnostisch an eine hypertrophe Kardiomyopathie zu denken.',
      'Es macht ca. 70 % der kindlichen Herztumoren aus.',
      'Es ist echokardiographisch schlecht abgrenzbar.',
      'Es ist der häufigste Herztumor des Erwachsenen.'
    ],
    a: 0,
    ex: 'Kardiales Fibrom: Ventrikelwand/Septum, echokardiographisch gut umschrieben, DD hypertrophe Kardiomyopathie. Häufigster Herztumor bei Kindern ist das Rhabdomyom, bei Erwachsenen das Myxom.'
  },
  {
    id: 'k4-55', sec: '4.9', p: 15, type: 'match',
    q: 'Ordne den Herztumor seinem Kennzeichen zu.',
    pairs: [
      ['Myxom', 'Linker Vorhof, sternförmige Zellen in myxoider Matrix'],
      ['Papilläres Fibroelastom', 'Herzklappen, „Seeanemone“'],
      ['Rhabdomyom', 'Tuberöse Sklerose, „Spinnenzellen“'],
      ['Kardiales Fibrom', 'Ventrikelwand/Septum, DD hypertrophe KMP'],
      ['Angiosarkom', 'Häufigster primär maligner Herztumor']
    ],
    ex: 'Myxom: linker Vorhof, gestielt am Vorhofseptum, gallertig; Synkope (Ventilmechanismus), Embolien, B-Symptome. Rhabdomyom: oft schon bei Geburt, Hamartom, spontane Regression.'
  },
  {
    id: 'k4-56', sec: '4.9', p: 15, type: 'single',
    q: 'Wo ist das Herzmyxom typischerweise lokalisiert?',
    opts: [
      'Im linken Vorhof, gestielt am Vorhofseptum (Fossa ovalis)',
      'An den Herzklappen',
      'In der Ventrikelwand bzw. im Septum'
    ],
    a: 0,
    ex: 'Myxom: linker Vorhof, gestielt am Vorhofseptum (Fossa ovalis), gallertig; Klinik: Synkope (Ventilmechanismus), Embolien, B-Symptome. Klappen = papilläres Fibroelastom; Ventrikelwand/Septum = kardiales Fibrom.'
  },
  {
    id: 'k4-57', sec: '4.9', p: 15, type: 'single',
    q: 'Welche Perikarditis-Form wird als „Zottenherz“ bezeichnet?',
    opts: ['Fibrinöse Perikarditis', 'Eitrige Perikarditis', 'Hämorrhagische Perikarditis', 'Pericarditis constrictiva'],
    a: 0,
    ex: 'Fibrinös = „Zottenherz“ (Urämie, Pericarditis epistenocardica nach MI, Dressler, rheumatisch, viral). Pericarditis constrictiva = „Panzerherz“ (Verkalkung). Hämorrhagisch: Tumor, Tbc.'
  },
  {
    id: 'k4-58', sec: '4.9', p: 15, type: 'single',
    q: 'Was ist der häufigste primär maligne Herztumor?',
    opts: ['Angiosarkom', 'Lymphangiosarkom', 'Myxom', 'Rhabdomyom'],
    a: 0,
    ex: 'Häufigster primär maligner Herztumor: Angiosarkom. „Lymphangiosarkom häufigster beim Erwachsenen“ war in einer Altfrage falsch. Myxom und Rhabdomyom sind benigne. Insgesamt sind Metastasen (Lunge, Mamma, Melanom, Lymphom) viel häufiger als primäre Herztumoren.'
  },

  /* ---------- Weitere K-prim ---------- */
  {
    id: 'k4-59', sec: '4.1', p: 12, type: 'kprim',
    q: 'Arteriosklerose & KHK – welche Aussagen treffen zu?',
    st: [
      ['Die Arteriosklerose betrifft die Intima großer und mittelgroßer Arterien.', true],
      ['Die Mönckeberg-Mediasklerose führt zu einer Lumeneinengung.', false],
      ['Eine Koronarstenose von 50–74 % gilt als signifikant (Grad II).', true],
      ['Der plötzliche Herztod ist mit ca. 55 % die häufigste Manifestation der KHK.', false]
    ],
    ex: 'Mönckeberg = Mediaverkalkung ohne Lumeneinengung. KHK-Manifestationen: Angina pectoris 55 %, Infarkt 25 %, plötzlicher Herztod 20 %.'
  },
  {
    id: 'k4-60', sec: '4.2', p: 12, type: 'kprim',
    q: 'Myokardinfarkt – welche Aussagen zum zeitlichen Ablauf treffen zu?',
    st: [
      ['In den ersten 0–4 h ist lichtmikroskopisch noch keine Veränderung zu sehen.', true],
      ['Neutrophile Granulozyten wandern erst ab der 3. Woche ein.', false],
      ['Makrophagen und Granulationsgewebe dominieren bereits in den ersten 24 h.', false],
      ['Die kollagene Narbe entsteht ab der 6. Woche.', true]
    ],
    ex: '10–24 h bis Tag 3: Neutrophile · ab Tag 4 bis 3. Woche: Makrophagen, Granulationsgewebe vom Rand her · ab 6. Woche bis 3 Monate: kollagene Narbe.'
  },
  {
    id: 'k4-61', sec: '4.3', p: 13, type: 'kprim',
    q: 'Herzhypertrophie & Cor pulmonale – welche Aussagen treffen zu?',
    st: [
      ['Volumenbelastung führt zu einer exzentrischen/dilatativen Hypertrophie.', true],
      ['Eine Aortenisthmusstenose führt über Druckbelastung zu einer konzentrischen Hypertrophie.', true],
      ['Das Cor pulmonale ist eine Linksherzhypertrophie.', false],
      ['Eine Silikose kann ein chronisches Cor pulmonale verursachen.', true]
    ],
    ex: 'Cor pulmonale = Rechtsherzhypertrophie/-dilatation infolge pulmonaler Hypertonie bei Lungenerkrankung (chronisch z. B. COPD/Emphysem, Lungenfibrose, Silikose, rezidivierende Embolien).'
  },
  {
    id: 'k4-62', sec: '4.4', p: 13, type: 'kprim',
    q: 'Einteilung der Kardiomyopathien – welche Zuordnungen treffen zu?',
    st: [
      ['HCM: primär genetisch', true],
      ['DCM: sekundär (spezifisch)', false],
      ['Tako-Tsubo-Kardiomyopathie: primär erworben', true],
      ['Ischämische Kardiomyopathie: primär genetisch', false]
    ],
    ex: 'Primär genetisch: HCM, ARVC, Ionenkanalerkrankungen. Primär gemischt: DCM, RCM. Primär erworben: Myokarditis, peripartale KMP, Tako-Tsubo. Sekundär: u. a. ischämisch, hypertensiv, valvulär, toxisch.'
  },
  {
    id: 'k4-63', sec: '4.5', p: 13, type: 'kprim',
    q: 'Myokarditis – welche Aussagen treffen zu?',
    st: [
      ['Die bakterielle Myokarditis ist granulozytär bzw. abszedierend.', true],
      ['Bei der Diphtherie-Myokarditis hemmt das Exotoxin die Proteinsynthese.', true],
      ['Die Riesenzellmyokarditis verläuft langsam und gutartig.', false],
      ['Die Diagnose wird per Endomyokardbiopsie gestellt.', true]
    ],
    ex: 'Riesenzellmyokarditis: unklare Ätiologie, rapider, oft letaler Verlauf. Diagnose der Myokarditis: Endomyokardbiopsie (Dallas-Kriterien, IHC-Kriterium).'
  },
  {
    id: 'k4-64', sec: '4.6', p: '13–14', type: 'kprim',
    q: 'Endokarditis-Formen – welche Aussagen treffen zu?',
    st: [
      ['Die Endocarditis verrucosa rheumatica tritt 2–3 Wochen nach einem Infekt mit β-hämolysierenden Streptokokken der Gruppe A auf.', true],
      ['Die Libman-Sacks-Endokarditis ist eine bakterielle Endokarditis.', false],
      ['Beim Karzinoid-Herz ist die Endokardfibrose rechtsbetont.', true],
      ['Die Endocarditis lenta wird typischerweise durch Staph. aureus verursacht.', false]
    ],
    ex: 'Libman-Sacks: abakteriell bei SLE/Antiphospholipid-Syndrom. Endocarditis lenta (subakut): Strep. viridans; Staph. aureus ist der häufigste Erreger der akuten Form.'
  },
  {
    id: 'k4-65', sec: '4.7', p: 14, type: 'kprim',
    q: 'Erworbene Klappenfehler – welche Aussagen treffen zu?',
    st: [
      ['Die Mitralstenose wird meist durch rheumatisches Fieber verursacht.', true],
      ['Bei der Mitralstenose ist der linke Ventrikel typischerweise vergrößert.', false],
      ['Die Aorteninsuffizienz führt zu einer exzentrischen Hypertrophie.', true],
      ['Die Aortenklappenstenose führt zu einer frühen (primären) Linksdilatation.', false]
    ],
    ex: 'Mitralstenose: großer linker Vorhof, kleiner linker Ventrikel. Aortenklappenstenose: konzentrische Hypertrophie → späte (konsekutive) Dilatation. Aorteninsuffizienz: Volumenbelastung → frühe (primäre) Dilatation, exzentrische Hypertrophie.'
  },
  {
    id: 'k4-66', sec: '4.8', p: '14–15', type: 'kprim',
    q: 'Angeborene Herzfehler – welche Aussagen treffen zu?',
    st: [
      ['Der VSD ist der häufigste angeborene Herzfehler.', true],
      ['Der persistierende Ductus arteriosus ist ein Rechts-links-Shunt.', false],
      ['Die Ebstein-Anomalie betrifft die Trikuspidalklappe.', true],
      ['Die postduktale Aortenisthmusstenose hat die schlechtere Prognose.', false]
    ],
    ex: 'PDA = Links-rechts-Shunt (Blut Aorta → Pulmonalis). Die präduktale (infantile) Aortenisthmusstenose hat die schlechtere Prognose.'
  },
  {
    id: 'k4-67', sec: '4.9', p: 15, type: 'kprim',
    q: 'Perikarditis & Herztumoren – welche Aussagen treffen zu?',
    st: [
      ['Die fibrinöse Perikarditis wird als „Zottenherz“ bezeichnet.', true],
      ['Das papilläre Fibroelastom sitzt typischerweise im linken Vorhof.', false],
      ['Das Rhabdomyom enthält „Spinnenzellen“ (Arachnozyten).', true],
      ['Das kardiale Fibrom ist echokardiographisch schlecht abgrenzbar.', false]
    ],
    ex: 'Papilläres Fibroelastom: Klappen („Seeanemone“); im linken Vorhof sitzt das Myxom. Kardiales Fibrom: echokardiographisch gut umschrieben, DD hypertrophe KMP.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k4-t01', sec: '4.1', p: 12, type: 'tf', a: true, q: 'Die Arteriosklerose ist eine Erkrankung der Intima großer und mittelgroßer Arterien.', ex: 'Chronische Erkrankung der Intima großer und mittelgroßer Arterien mit Lipideinlagerung, Fibrose, Verkalkung.' },
  { id: 'k4-t02', sec: '4.1', p: 12, type: 'tf', a: false, q: 'Die Mönckeberg-Mediasklerose führt typischerweise zu einer hochgradigen Lumeneinengung.', ex: 'Mönckeberg = Mediaverkalkung muskulärer Arterien ohne Lumeneinengung („Gänsegurgel-Arterien“).' },
  { id: 'k4-t03', sec: '4.1', p: 12, type: 'tf', a: false, q: 'Adipositas ist ein Risikofaktor 1. Ordnung der Arteriosklerose.', ex: 'Adipositas ist ein Risikofaktor 2. Ordnung. 1. Ordnung: Hypertonie, Nikotin, Fettstoffwechselstörung, Diabetes mellitus.' },
  { id: 'k4-t04', sec: '4.1', p: 12, type: 'tf', a: true, q: 'Bei ca. 80 % der Menschen liegt ein Normalversorgungstyp der Koronarien vor.', ex: 'Normaltyp ca. 80 %, Rechts- bzw. Linksversorgungstyp je ca. 10 %.' },
  { id: 'k4-t05', sec: '4.1', p: 12, type: 'tf', a: false, q: 'Eine KHK wird in Ruhe typischerweise schon ab ca. 50 % Stenose symptomatisch.', ex: 'Symptomatisch ab ca. 75 % unter Belastung und ca. 90 % in Ruhe.' },
  { id: 'k4-t06', sec: '4.1', p: 12, type: 'tf', a: true, q: 'Die infrarenale Aorta abdominalis ist eine Prädilektionsstelle der Arteriosklerose.', ex: 'Prädilektionsstellen: Aorta abdominalis (infrarenal), Koronararterien, Carotisbifurkation, Becken-/Beinarterien, Abgänge/Verzweigungen.' },
  { id: 'k4-t07', sec: '4.2', p: 12, type: 'tf', a: true, q: 'Die RCA versorgt typischerweise die Hinterwand bzw. die inferiore Wand.', ex: 'RCA → Hinterwand/inferior; RIVA → Vorderwand/Spitze/Septum; RCX → Seiten-/Hinterwand.' },
  { id: 'k4-t08', sec: '4.2', p: 12, type: 'tf', a: true, q: 'Neutrophile Granulozyten wandern ca. 10–24 h bis Tag 3 nach Infarktbeginn ein.', ex: '10–24 h bis Tag 3: Einwanderung neutrophiler Granulozyten; ab Tag 4: Makrophagen und Granulationsgewebe.' },
  { id: 'k4-t09', sec: '4.2', p: 12, type: 'tf', a: false, q: 'Eine kollagene Infarktnarbe ist bereits nach einer Woche ausgebildet.', ex: 'Die kollagene Narbe (weiß, derb) entsteht ab der 6. Woche bis 3 Monate.' },
  { id: 'k4-t10', sec: '4.2', p: 12, type: 'tf', a: false, q: 'Das Dressler-Syndrom ist eine frühe, infektiöse Perikarditis nach Infarkt.', ex: 'Das Dressler-Syndrom ist spät und autoimmun. Früh und fibrinös ist die Pericarditis epistenocardica.' },
  { id: 'k4-t11', sec: '4.2', p: 12, type: 'tf', a: true, q: 'Ein Papillarmuskelabriss nach Infarkt führt zur akuten Mitralinsuffizienz.', ex: 'Papillarmuskelabriss → akute Mitralinsuffizienz (→ Lungenödem).' },
  { id: 'k4-t12', sec: '4.2', p: 12, type: 'tf', a: true, q: 'Eine freie Herzwandruptur tritt typischerweise an Tag 3–10 nach Infarkt auf.', ex: 'Freie Herzwandruptur: 3–6 %, Tag 3–10 → Hämoperikard/Tamponade.' },
  { id: 'k4-t13', sec: '4.3', p: 13, type: 'tf', a: true, q: 'Das kritische Herzgewicht liegt bei ca. 500 g.', ex: 'Kritisches Herzgewicht ca. 500 g.' },
  { id: 'k4-t14', sec: '4.3', p: 13, type: 'tf', a: false, q: 'Bei der Herzhypertrophie nimmt vor allem die Zahl der Myozyten zu.', ex: 'Hypertrophie = Zunahme der Myozytengröße, nicht der Zahl.' },
  { id: 'k4-t15', sec: '4.3', p: 13, type: 'tf', a: true, q: 'Eine Stauungsleber (Muskatnussleber) ist eine Folge des Cor pulmonale.', ex: 'Folgen des Cor pulmonale: Stauungsleber (Muskatnussleber), Ödeme.' },
  { id: 'k4-t16', sec: '4.4', p: 13, type: 'tf', a: false, q: 'Die HOCM ist eine sekundäre Kardiomyopathie.', ex: 'Die HOCM ist eine primäre (genetische) Kardiomyopathie. Sekundär ist z. B. die ischämische KMP.' },
  { id: 'k4-t17', sec: '4.4', p: 13, type: 'tf', a: true, q: 'Die ARVC ist durch den Ersatz des rechtsventrikulären Myokards durch Fett- und Bindegewebe gekennzeichnet.', ex: 'ARVC: Fett-/Bindegewebsersatz des RV-Myokards, Arrhythmien, plötzlicher Herztod.' },
  { id: 'k4-t18', sec: '4.4', p: 13, type: 'tf', a: true, q: 'Die Amyloidose ist eine Ursache der restriktiven Kardiomyopathie.', ex: 'RCM-Ursachen: Amyloidose, Löffler-Endokarditis (eosinophil), Endokardfibroelastose.' },
  { id: 'k4-t19', sec: '4.4', p: 13, type: 'tf', a: true, q: 'Die hypertrophe Kardiomyopathie ist eine Ursache des plötzlichen Herztods junger Sportler.', ex: 'HCM: Myozyten-Disarray, Sarkomergene, plötzlicher Herztod junger Sportler.' },
  { id: 'k4-t20', sec: '4.4', p: 13, type: 'tf', a: false, q: 'Long-QT- und Brugada-Syndrom gehören zu den sekundären Kardiomyopathien.', ex: 'Long-QT und Brugada sind Ionenkanalerkrankungen und zählen zu den primär genetischen Kardiomyopathien.' },
  { id: 'k4-t21', sec: '4.5', p: 13, type: 'tf', a: false, q: 'Die Virusmyokarditis zeigt typischerweise ein granulozytäres Infiltrat.', ex: 'Viral → lymphozytäres Infiltrat mit Myozytennekrosen. Granulozytär/abszedierend = bakteriell.' },
  { id: 'k4-t22', sec: '4.5', p: 13, type: 'tf', a: true, q: 'Coxsackie-B-Viren gelten als kardiotrop.', ex: 'Coxsackie B = kardiotrop; weitere Erreger: Parvo B19, HHV-6, Adeno.' },
  { id: 'k4-t23', sec: '4.5', p: 13, type: 'tf', a: false, q: 'Anitschkow-Zellen sind typisch für die Sarkoidose-Myokarditis.', ex: 'Anitschkow-Zellen (Aschoff-Knötchen) sind typisch für die rheumatische Myokarditis. Sarkoidose: epitheloidzellige Granulome ohne Nekrose.' },
  { id: 'k4-t24', sec: '4.5', p: 13, type: 'tf', a: true, q: 'Eine Virusmyokarditis kann über Autoimmunität in eine DCM übergehen.', ex: 'Verlauf: Virusinfekt → Autoimmunität → DCM.' },
  { id: 'k4-t25', sec: '4.5', p: 13, type: 'tf', a: false, q: 'Bei der Diphtherie-Myokarditis lassen sich die Erreger im Myokard nachweisen.', ex: 'Diphtherie = infekttoxische Myokarditis: Das Exotoxin wirkt, im Myokard finden sich keine Erreger.' },
  { id: 'k4-t26', sec: '4.6', p: 13, type: 'tf', a: true, q: 'Staphylococcus aureus ist der häufigste Erreger der akuten infektiösen Endokarditis.', ex: 'Akut: Staph. aureus (E. ulcerosa). Subakut/lenta: Strep. viridans.' },
  { id: 'k4-t27', sec: '4.6', p: 14, type: 'tf', a: false, q: 'Die Endocarditis ulceropolyposa ist nichtinfektiös und tumorassoziiert.', ex: 'Die E. (ulcero-)polyposa ist infektiös (lenta, Strep. viridans). Abakteriell/tumorassoziiert sind E. verrucosa simplex und E. thrombotica.' },
  { id: 'k4-t28', sec: '4.6', p: 14, type: 'tf', a: true, q: 'Die Endocarditis verrucosa simplex besteht im Wesentlichen nur aus Fibrinauflagerungen.', ex: 'E. verrucosa simplex: abakteriell, im Wesentlichen nur Fibrin; bei auszehrenden Erkrankungen/Tumoren.' },
  { id: 'k4-t29', sec: '4.6', p: 14, type: 'tf', a: false, q: 'Eine Vaskularisierung des Klappenstromas ist typisch für die akute Endokarditis.', ex: 'Die Vaskularisierung des Klappenstromas ist eine Spätfolge der abgelaufenen Endokarditis.' },
  { id: 'k4-t30', sec: '4.6', p: 14, type: 'tf', a: true, q: 'Die Libman-Sacks-Endokarditis tritt bei SLE bzw. Antiphospholipid-Syndrom auf.', ex: 'Libman-Sacks: abakteriell bei SLE/Antiphospholipid-Syndrom.' },
  { id: 'k4-t31', sec: '4.6', p: 14, type: 'tf', a: false, q: 'Beim Karzinoid-Herz ist die Endokardfibrose linksbetont.', ex: 'Karzinoid-Herz: rechtsbetonte Endokardfibrose.' },
  { id: 'k4-t32', sec: '4.6', p: 14, type: 'tf', a: false, q: 'Die Endocarditis parietalis fibroplastica Löffler betrifft vor allem die Herzklappen.', ex: 'Löffler betrifft das Wandendokard (nicht die Klappen): Hypereosinophilie → Nekrosen → Endomyokardfibrose → restriktive KMP.' },
  { id: 'k4-t33', sec: '4.6', p: 14, type: 'tf', a: true, q: 'Die Endocarditis verrucosa rheumatica betrifft v. a. die Mitralklappe und führt später zur Mitralstenose.', ex: 'E. verrucosa rheumatica: Wärzchen am Schließungsrand, v. a. Mitralklappe → später Mitralstenose.' },
  { id: 'k4-t34', sec: '4.6', p: 14, type: 'tf', a: true, q: 'Endokarditische Klappenschäden betreffen überwiegend das linke Herz.', ex: 'Überwiegend links (Mitral- > Aortenklappe); rechts v. a. bei i.v.-Drogenabusus.' },
  { id: 'k4-t35', sec: '4.7', p: 14, type: 'tf', a: true, q: 'Die Aortenklappenstenose führt zu einer konzentrischen Linksherzhypertrophie.', ex: 'Aortenklappenstenose → konzentrische Linksherzhypertrophie → späte (konsekutive) Linksdilatation; Angina, Synkope.' },
  { id: 'k4-t36', sec: '4.7', p: 14, type: 'tf', a: false, q: 'Die Aortenklappenstenose ist heute meist rheumatisch bedingt.', ex: 'Heute meist senil-kalzifizierend (degenerativ) oder bikuspide Klappe; nur noch ca. 25 % rheumatisch.' },
  { id: 'k4-t37', sec: '4.7', p: 14, type: 'tf', a: true, q: 'Die häufigste Ursache der Mitralstenose ist das rheumatische Fieber.', ex: 'Mitralstenose: häufigste Ursache rheumatisches Fieber.' },
  { id: 'k4-t38', sec: '4.7', p: 14, type: 'tf', a: true, q: 'Herzfehlerzellen in der Stauungslunge sind typisch für die Mitralstenose.', ex: 'Mitralstenose: großer LA, kleiner LV, Stauungslunge (Herzfehlerzellen), pulmonale Hypertonie.' },
  { id: 'k4-t39', sec: '4.8', p: 14, type: 'tf', a: true, q: 'Der VSD ist mit 27 % der häufigste angeborene Herzfehler.', ex: 'VSD 27 % (häufigster), PDA 9 %, ASD 6 %, Endokardkissendefekt 5 %.' },
  { id: 'k4-t40', sec: '4.8', p: 15, type: 'tf', a: false, q: 'Die Ebstein-Anomalie betrifft die Mitralklappe.', ex: 'Ebstein: Die Trikuspidalklappe (rechtes Herz) ist nach apikal verlagert → „Atrialisierung“ des RV.' },
  { id: 'k4-t41', sec: '4.8', p: 15, type: 'tf', a: false, q: 'Die präduktale Aortenisthmusstenose ist die adulte Form.', ex: 'Präduktal = infantil (schlechtere Prognose), postduktal = adult.' },
  { id: 'k4-t42', sec: '4.8', p: 14, type: 'tf', a: true, q: 'Fallot-Tetralogie + ASD wird als Fallot-Pentalogie bezeichnet.', ex: 'Fallot-Tetralogie + ASD = Pentalogie.' },
  { id: 'k4-t43', sec: '4.8', p: 15, type: 'tf', a: true, q: 'Die Schwere der Fallot-Tetralogie richtet sich v. a. nach dem Ausmaß der Pulmonalstenose.', ex: 'Schwere ∝ Pulmonalstenose; Zyanose in den ersten 6 Monaten.' },
  { id: 'k4-t44', sec: '4.8', p: 15, type: 'tf', a: false, q: 'Ein spaltförmig offenes Foramen ovale ist bei Erwachsenen meist pathologisch.', ex: 'Spaltförmiges PFO: bei ca. 25 % der Erwachsenen, kein pathologischer Befund (paradoxe Embolie möglich).' },
  { id: 'k4-t45', sec: '4.9', p: 15, type: 'tf', a: true, q: 'Herzmetastasen sind viel häufiger als primäre Herztumoren.', ex: 'Metastasen (Lunge, Mamma, Melanom, Lymphom) sind viel häufiger als primäre Herztumoren.' },
  { id: 'k4-t46', sec: '4.9', p: 15, type: 'tf', a: false, q: 'Primäre Herztumoren sind zu ca. 75 % maligne.', ex: 'Primäre Herztumoren sind zu ca. 75 % benigne.' },
  { id: 'k4-t47', sec: '4.9', p: 15, type: 'tf', a: true, q: 'Das Rhabdomyom ist mit der tuberösen Sklerose assoziiert und kann sich spontan zurückbilden.', ex: 'Rhabdomyom: oft schon bei Geburt, tuberöse Sklerose, „Spinnenzellen“, Hamartom, spontane Regression.' },
  { id: 'k4-t48', sec: '4.9', p: 15, type: 'tf', a: false, q: 'Herztumoren sind bei Kindern häufiger maligne als bei Erwachsenen.', ex: 'Kindliche Herztumoren sind fast immer benigne; maligne Herztumoren sind bei Erwachsenen häufiger.' },
  { id: 'k4-t49', sec: '4.9', p: 15, type: 'tf', a: true, q: 'Ein Herzmyxom kann durch einen Ventilmechanismus Synkopen verursachen.', ex: 'Myxom-Klinik: Synkope (Ventilmechanismus), Embolien, B-Symptome.' },
  { id: 'k4-t50', sec: '4.9', p: 15, type: 'tf', a: true, q: 'Die Pericarditis constrictiva wird auch als „Panzerherz“ bezeichnet.', ex: 'Pericarditis constrictiva = Panzerherz (Verkalkung), Folge einer Perikarditis.' }
]);
