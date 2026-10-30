/* Kapitel 8 – Kolon & Rektum (PDF S. 26–28) */
PQ.registerChapter(8, [

  /* ---------- 8.1 Chronisch-entzündliche Darmerkrankungen ---------- */
  {
    id: 'k8-01', sec: '8.1', p: 26, type: 'kprim', alt: '2013B, 2018',
    q: 'Colitis ulcerosa – welche Befunde treffen zu?',
    st: [
      ['Epitheloidzellige Granulome', false],
      ['Gestörte Kryptenarchitektur', true],
      ['Schleimarmut/Becherzellverlust', true],
      ['Regelmäßiger Rektumbefall', true]
    ],
    ex: 'CU: Kryptenabszesse, Becherzellverlust/Schleimarmut, gestörte Kryptenarchitektur, basale Plasmozytose; Rektum immer befallen. Epitheloidzellige, nicht verkäsende Granulome sprechen für M. Crohn.'
  },
  {
    id: 'k8-02', sec: '8.1', p: 26, type: 'kprim', alt: '2012, 2020',
    q: 'M. Crohn – welche Befunde treffen zu?',
    st: [
      ['Epitheloidzellige Granulome', true],
      ['Pflastersteinrelief', true],
      ['Regelmäßiger Rektumbefall', false],
      ['Gestörte Kryptenarchitektur', true]
    ],
    ex: 'MC: Granulome (~30–50 %), Pflastersteinrelief; Rektum oft frei. Eine gestörte Kryptenarchitektur ist seltener als bei CU, aber möglich.'
  },
  {
    id: 'k8-03', sec: '8.1', p: 26, type: 'single', alt: '2008, 2010, Fragensammlung',
    q: 'Was ist KEINE Komplikation des M. Crohn?',
    opts: ['Endokarditis', 'Fisteln', 'Anorektale Abszesse', 'Stenosen bzw. Ileus', 'Malabsorption'],
    a: 0,
    ex: 'MC-Komplikationen: Fisteln, (anorektale) Abszesse, Stenosen/Ileus, Perforation, Malabsorption (B12, Gallensäuren → Steine), KRK. Keine Endokarditis (auch die Perikarditis wurde als falsch gewertet).'
  },
  {
    id: 'k8-04', sec: '8.1', p: 26, type: 'kprim', alt: '2019, 2021',
    q: 'Welche der folgenden sind Komplikationen bzw. Begleiterkrankungen des M. Crohn?',
    st: [
      ['Perforation', true],
      ['Fisteln/anorektale Abszesse', true],
      ['Arthritis', true],
      ['Erythema nodosum', true]
    ],
    ex: 'Alle vier treffen zu. Extraintestinal (bei CU und MC): Arthritis, Iritis/Uveitis, Erythema nodosum, Pyoderma gangraenosum, Sakroiliitis/M. Bechterew, AA-Amyloidose.'
  },
  {
    id: 'k8-05', sec: '8.1', p: 26, type: 'single',
    q: 'Welche Wandschichten befällt die Colitis ulcerosa?',
    opts: ['Mukosa (+ oberflächliche Submukosa)', 'Alle Wandschichten (transmural)', 'Vor allem das Mesenterium („Fettfinger“)'],
    a: 0,
    ex: 'CU: Mukosa (+ oberflächliche Submukosa). Transmural und „Fettfinger“ kennzeichnen den M. Crohn.'
  },
  {
    id: 'k8-06', sec: '8.1', p: 26, type: 'kprim',
    q: 'Welche Befunde sprechen für eine Colitis ulcerosa (und nicht für einen M. Crohn)?',
    st: [
      ['Kryptenabszesse und basale Plasmozytose', true],
      ['Epitheloidzellige Granulome', false],
      ['Pflastersteinrelief und „Schneckenspuren“', false],
      ['Fisteln und anorektale Abszesse', false]
    ],
    ex: 'Granulome, Pflastersteinrelief, lineare Ulzera („Schneckenspuren“) und Fisteln sprechen für M. Crohn.'
  },
  {
    id: 'k8-07', sec: '8.1', p: 26, type: 'kprim',
    q: 'Welche Befunde sprechen für einen M. Crohn?',
    st: [
      ['Diskontinuierlicher Befall („skip lesions“)', true],
      ['Befall auf die Mukosa beschränkt', false],
      ['Backwash-Ileitis', false],
      ['PSC als Leitassoziation', false]
    ],
    ex: 'MC: gesamter GIT, diskontinuierlich, transmural. Mukosabefall, Backwash-Ileitis und PSC (Leitassoziation) gehören zur Colitis ulcerosa.'
  },
  {
    id: 'k8-08', sec: '8.1', p: 26, type: 'single',
    q: 'Welche extraintestinale Erkrankung ist die Leitassoziation der Colitis ulcerosa?',
    opts: ['Primär sklerosierende Cholangitis (PSC)', 'Endokarditis', 'Vitamin-B12-Malabsorption'],
    a: 0,
    ex: 'CU: PSC = Leitassoziation. Eine Endokarditis gehört nicht zu den CED-Manifestationen; die B12-Malabsorption ist eine Komplikation des M. Crohn (terminales Ileum).'
  },
  {
    id: 'k8-09', sec: '8.1', p: 26, type: 'single',
    q: 'Welche Komplikation ist typisch für die Colitis ulcerosa?',
    opts: ['Toxisches Megakolon', 'Fisteln', 'Gallensteine durch Gallensäureverlust'],
    a: 0,
    ex: 'CU: toxisches Megakolon, Blutung, KRK (Risiko ↑ mit Dauer und Ausdehnung), PSC. Fisteln und Gallensteine (Gallensäuremalabsorption) sind Komplikationen des M. Crohn.'
  },
  {
    id: 'k8-10', sec: '8.1', p: 26, type: 'single',
    q: 'Wo liegt der Befallsschwerpunkt des M. Crohn?',
    opts: ['Terminales Ileum und proximales Kolon', 'Rektum, kontinuierlich nach proximal', 'Ausschließlich das Rektum'],
    a: 0,
    ex: 'MC: gesamter GIT, diskontinuierlich, v. a. terminales Ileum + proximales Kolon; Rektum oft frei. Kontinuierlich vom Rektum nach proximal = CU.'
  },

  /* ---------- 8.2 Weitere Kolitiden ---------- */
  {
    id: 'k8-11', sec: '8.2', p: '26–27', type: 'kprim', alt: '2013B, 2022',
    q: 'Kolitiden – welche Aussagen treffen zu?',
    st: [
      ['Die antibiotikaassoziierte Kolitis ist typischerweise lymphozytär.', false],
      ['Eine Herzklappenentzündung kann indirekt zur ischämischen Kolitis führen.', true],
      ['Die kollagene Kolitis führt zu wässriger Diarrhö.', true],
      ['Eine CMV-Kolitis ist schon in der HE-Färbung vermutbar.', true]
    ],
    ex: 'Die pseudomembranöse (antibiotikaassoziierte) Kolitis ist eine fibrinöse, nicht lymphozytäre Entzündung. Endokarditis/Klappenvitien → Embolien → indirekt ischämische Kolitis. CMV: Eulenaugenzellen schon in HE, Bestätigung per IHC.'
  },
  {
    id: 'k8-12', sec: '8.2', p: '26–27', type: 'single', alt: '2010',
    q: 'Kolitiden – welche Aussage trifft zu?',
    opts: [
      'Entzündungen der Herzklappen können indirekt zu einer ischämischen Kolitis führen.',
      'Ein CMV-Verdacht ergibt sich erst nach der Immunhistochemie.',
      'Die Colitis ulcerosa ist typischerweise transmural.',
      'Die antibiotikaassoziierte Kolitis ist typischerweise lymphozytär.',
      'Die Colitis ulcerosa geht nicht mit einem erhöhten Karzinomrisiko einher.'
    ],
    a: 0,
    ex: 'CMV-Eulenaugenzellen sind schon in HE erkennbar; die CU ist auf Mukosa (+ oberflächliche Submukosa) beschränkt und erhöht das KRK-Risiko; die AB-Kolitis ist fibrinös (pseudomembranös).'
  },
  {
    id: 'k8-13', sec: '8.2', p: '26–27', type: 'single', alt: '2009',
    q: 'Pseudomembranöse Kolitis und Divertikulose – welche Aussage trifft zu?',
    opts: [
      'Ein langer Krankenhausaufenthalt ist ein anamnestischer Hinweis auf eine pseudomembranöse Kolitis.',
      'Das Fibrin liegt auf intakter Schleimhaut.',
      'Der Erreger ist EHEC.',
      'Die Divertikulose ist eine Dünndarmerkrankung.',
      'Eine Divertikulitis muss fast nie chirurgisch behandelt werden.'
    ],
    a: 0,
    ex: 'Pseudomembranöse Kolitis: C. difficile nach Antibiotika und langem Krankenhausaufenthalt; Pseudomembranen „vulkanartig“ aus geschädigter Mukosa; nicht EHEC. Divertikulose: Dickdarm, v. a. Sigma; bei Komplikationen/rezidivierenden Schüben chirurgische Intervention.'
  },
  {
    id: 'k8-14', sec: '8.2', p: '26–27', type: 'kprim', alt: 'Fragensammlung',
    q: 'Pseudomembranöse Kolitis und Divertikulose – welche Aussagen treffen zu?',
    st: [
      ['Clostridioides difficile produziert Toxine.', true],
      ['Antibiotika können eine pseudomembranöse Kolitis auslösen.', true],
      ['Typisch sind Fibrinauflagerungen.', true],
      ['Die Divertikulose ist eine Dickdarmerkrankung.', true]
    ],
    ex: 'Alle vier treffen zu. C. difficile (Toxin A/B); Pseudomembranen aus Fibrin, Schleim, Granulozyten und Detritus. Divertikulose v. a. im Sigma.'
  },
  {
    id: 'k8-15', sec: '8.2', p: 26, type: 'match',
    q: 'Ordne die Kolitis ihrem Kennzeichen zu.',
    pairs: [
      ['Pseudomembranöse Kolitis', 'C. difficile nach Antibiotika, gelblich-weiße Pseudomembranen'],
      ['Kollagene Kolitis', 'Subepitheliales Kollagenband > 10 µm'],
      ['Lymphozytäre Kolitis', 'Intraepitheliale Lymphozyten ↑'],
      ['CMV-Kolitis', 'Eulenaugenzellen bei Immunsuppression'],
      ['Ischämische Kolitis', 'Wasserscheiden (linke Flexur, rektosigmoidal)']
    ],
    ex: 'Mikroskopische Kolitis (kollagen/lymphozytär): endoskopisch unauffällig, wässrige Diarrhö, ältere Frauen.'
  },
  {
    id: 'k8-16', sec: '8.2', p: 26, type: 'single',
    q: 'Woraus bestehen die Pseudomembranen der pseudomembranösen Kolitis?',
    opts: ['Fibrin, Schleim, Granulozyten und Detritus', 'Subepithelialem Kollagen', 'Lymphozyten und Plasmazellen'],
    a: 0,
    ex: 'Gelblich-weiße Pseudomembranen aus Fibrin, Schleim, Granulozyten und Detritus – eine fibrinöse, nicht lymphozytäre Entzündung. Subepitheliales Kollagen → kollagene Kolitis.'
  },
  {
    id: 'k8-17', sec: '8.2', p: 26, type: 'single',
    q: 'Wodurch ist die mikroskopische Kolitis klinisch gekennzeichnet?',
    opts: [
      'Wässrige Diarrhö bei endoskopisch unauffälliger Schleimhaut, v. a. ältere Frauen',
      'Blutig-schleimige Diarrhö mit Tenesmen',
      'Gelblich-weiße Pseudomembranen in der Endoskopie'
    ],
    a: 0,
    ex: 'Mikroskopische Kolitis: endoskopisch unauffällig, Diagnose nur histologisch. Blutig-schleimige Diarrhö mit Tenesmen → CU; Pseudomembranen → C. difficile.'
  },
  {
    id: 'k8-18', sec: '8.2', p: 26, type: 'single',
    q: 'Wo liegen ischämische Kolitiden bevorzugt?',
    opts: ['An Wasserscheiden (linke Flexur, rektosigmoidal)', 'Im terminalen Ileum', 'Im Rektum, kontinuierlich nach proximal'],
    a: 0,
    ex: 'Ischämische Kolitis: Arteriosklerose, Low-Flow (Herzinsuffizienz, Schock = NOMI), Embolien; Wasserscheiden (linke Flexur, rektosigmoidal).'
  },
  {
    id: 'k8-19', sec: '8.2', p: 26, type: 'kprim',
    q: 'Divertikulose/Divertikulitis – welche Aussagen treffen zu?',
    st: [
      ['Meist handelt es sich um Pseudodivertikel.', true],
      ['Die Divertikulose betrifft v. a. den Dünndarm.', false],
      ['Ballaststoffreiche Kost ist ein Risikofaktor.', false],
      ['Eine Fistel zur Blase ist eine mögliche Komplikation.', true]
    ],
    ex: 'Divertikulose: Dickdarm, v. a. Sigma; Pseudodivertikel (Schleimhautausstülpung durch Muskellücken an Gefäßdurchtrittsstellen); RF ballaststoffarme Kost, Alter, Obstipation, Adipositas. Komplikationen: Abszess, Perforation, Fistel (Blase), Stenose, Blutung.'
  },

  /* ---------- 8.3 Kolorektale Polypen ---------- */
  {
    id: 'k8-20', sec: '8.3', p: 27, type: 'single', alt: '2013A, 2015, 2019',
    q: 'Kolorektale Polypen – welche Aussage ist FALSCH?',
    opts: [
      'Peutz-Jeghers-Polypen zählen zu den echten Neoplasien.',
      'Mukosaprolaps-Polypen sind nicht neoplastisch.',
      'Für hyperplastische Polypen wird eine neoplastische Genese diskutiert.',
      'Adenome sind benigne, haben aber ein erhöhtes Entartungsrisiko.',
      'Adenome enthalten nahezu immer eine Dysplasie.'
    ],
    a: 0,
    ex: 'Juvenile und Peutz-Jeghers-Polypen sind Hamartome = keine echten Neoplasien (PJ: baumartig verzweigte Muscularis mucosae).'
  },
  {
    id: 'k8-21', sec: '8.3', p: 27, type: 'single', alt: '2013B',
    q: 'Serratierte Polypen – welche Aussage ist FALSCH?',
    opts: [
      'Der hyperplastische Polyp zeigt meist eine gering- bis mäßiggradige Dysplasie.',
      'Der hyperplastische Polyp zeigt die Serratierung in der oberen Kryptenhälfte.',
      'Der hyperplastische Polyp liegt eher linkskolisch.',
      'Das TSA zeigt Serratierung und Zytoplasma-Eosinophilie.',
      'Das SSA zeigt T- bzw. L-förmige Kryptenbasen.'
    ],
    a: 0,
    ex: 'Hyperplastischer Polyp: häufig, klein, linkskolisch/Rektum; Serratierung (Sägezahn) in der oberen Kryptenhälfte; keine Dysplasie.'
  },
  {
    id: 'k8-22', sec: '8.3', p: 27, type: 'match',
    q: 'Ordne den serratierten Polypen seinem Kennzeichen zu.',
    pairs: [
      ['Hyperplastischer Polyp', 'Serratierung nur in der oberen Kryptenhälfte, keine Dysplasie'],
      ['Sessiles serratiertes Adenom (SSA/SSL)', 'Rechtskolisch, T-/L-förmige Kryptenbasen, BRAF'],
      ['Traditionelles serratiertes Adenom (TSA)', 'Linkskolisch, Eosinophilie, ektope Krypten, KRAS']
    ],
    ex: 'SSA/SSL: flach, Schleimkappe, Serratierung bis zur Kryptenbasis; BRAF, CIMP → serratierter Karzinogeneseweg (MSI). TSA: fast immer Dysplasie.'
  },
  {
    id: 'k8-23', sec: '8.3', p: 27, type: 'match',
    q: 'Ordne den Adenomtyp seinem Anteil zu.',
    pairs: [
      ['Tubulär', '~75 %'],
      ['Tubulovillös', '~25 %'],
      ['Villös', '~5 %']
    ],
    ex: 'Das konventionelle Adenom ist der häufigste neoplastische Polyp: benigne Neoplasie mit obligater intraepithelialer Neoplasie/Dysplasie (low/high grade).'
  },
  {
    id: 'k8-24', sec: '8.3', p: 27, type: 'single',
    q: 'Welcher ist der häufigste neoplastische Polyp im Kolon?',
    opts: ['Konventionelles Adenom', 'Hyperplastischer Polyp', 'Peutz-Jeghers-Polyp', 'Juveniler Polyp'],
    a: 0,
    ex: 'Adenom = häufigster neoplastischer Polyp. Der hyperplastische Polyp gilt traditionell als nicht neoplastisch; juvenile und PJ-Polypen sind Hamartome.'
  },
  {
    id: 'k8-25', sec: '8.3', p: 27, type: 'kprim',
    q: 'Welche Faktoren erhöhen das Entartungsrisiko eines Adenoms?',
    st: [
      ['Villöser Anteil', true],
      ['Größe > 1 cm', true],
      ['Gestielte Wuchsform', false],
      ['Hochgradige Dysplasie', true]
    ],
    ex: 'Risiko ↑ mit villösem Anteil, Größe > 1 cm, breitbasiger (sessiler) Wuchsform, Anzahl > 3 und hochgradiger Dysplasie.'
  },
  {
    id: 'k8-26', sec: '8.3', p: 27, type: 'single',
    q: 'Ab wann spricht man bei einem kolorektalen Adenom von einem Karzinom?',
    opts: ['Ab Infiltration der Submukosa', 'Ab hochgradiger Dysplasie', 'Ab einer Größe > 2 cm', 'Ab einem villösen Anteil'],
    a: 0,
    ex: 'Karzinom erst ab Infiltration der Submukosa. Hochgradige Dysplasie, Größe und villöser Anteil erhöhen nur das Entartungsrisiko.'
  },
  {
    id: 'k8-27', sec: '8.3', p: 27, type: 'single',
    q: 'Wie hoch ist das Entartungsrisiko eines tubulären Adenoms > 2 cm?',
    opts: ['~10 %', '~1 %', 'bis 40 %'],
    a: 0,
    ex: 'Tubulär < 1 cm ~1 %, > 2 cm ~10 %; villös bis 40 %.'
  },
  {
    id: 'k8-28', sec: '8.3', p: 27, type: 'single',
    q: 'Wie ist die serratierte Polyposis (WHO) definiert?',
    opts: [
      '≥ 5 serratierte Polypen proximal des Sigmas (≥ 2 > 1 cm) oder > 20 im gesamten Kolon',
      'Hunderte bis tausende Adenome im gesamten Kolon',
      'Hamartomatöse Polypen mit perioralen Pigmentflecken'
    ],
    a: 0,
    ex: 'Hunderte bis tausende Adenome → FAP; hamartomatöse Polypen mit perioralen Pigmentflecken → Peutz-Jeghers.'
  },
  {
    id: 'k8-29', sec: '8.3', p: 27, type: 'single',
    q: 'Wann wird eine Vorsorgekoloskopie mit unauffälligem Befund wiederholt?',
    opts: ['Nach 10 Jahren', 'Nach 1 Jahr', 'Nach 3 Jahren'],
    a: 0,
    ex: 'Die Vorsorgekoloskopie senkt die KRK-Rate um ~50 %; bei unauffälligem Befund Wiederholung nach 10 Jahren.'
  },
  {
    id: 'k8-30', sec: '8.3', p: 27, type: 'single',
    q: 'Was kennzeichnet Peutz-Jeghers-Polypen histologisch?',
    opts: ['Baumartig verzweigte Muscularis mucosae (Hamartom)', 'Serratierung bis zur Kryptenbasis', 'Obligate intraepitheliale Neoplasie'],
    a: 0,
    ex: 'Peutz-Jeghers-Polypen sind Hamartome mit baumartig verzweigter Muscularis mucosae. Serratierung bis zur Basis → SSA; obligate Dysplasie → Adenom.'
  },

  /* ---------- 8.4 Kolorektales Karzinom ---------- */
  {
    id: 'k8-31', sec: '8.4', p: '27–28', type: 'single', alt: '2010, 2013A, Fragensammlung',
    q: 'Kolorektales Karzinom – welche Aussage ist FALSCH?',
    opts: [
      'Das muzinöse Adenokarzinom macht ca. 80 % der Fälle aus.',
      'Polypen enthalten in ca. 5 % bereits Karzinomanteile.',
      'Das KRK tritt meist sporadisch auf.',
      'Bei Lymphknotenbefall sinkt die 5-JÜR auf ca. 50–60 %.',
      'Die Inzidenz ist in den USA höher als in Japan.'
    ],
    a: 0,
    ex: 'Adenokarzinom NOS ~90 %, muzinös ~10 % (> 50 % extrazellulärer Schleim).'
  },
  {
    id: 'k8-32', sec: '8.4', p: '27–28', type: 'single', alt: '2021, 2024',
    q: 'Kolorektales Karzinom – welche Aussage ist FALSCH?',
    opts: [
      'Die überwiegende Mehrzahl entsteht de novo.',
      'Das Siegelringzellkarzinom ist im Kolon selten.',
      'Die Mortalität ist niedriger als die Inzidenz.',
      'Das KRK tritt meist sporadisch auf.',
      'Die Inzidenz ist in Europa deutlich höher als in Ostafrika.'
    ],
    a: 0,
    ex: 'Die meisten KRK entstehen über Vorläuferpolypen (Adenom-Karzinom-Sequenz, serratierter Weg), nicht de novo.'
  },
  {
    id: 'k8-33', sec: '8.4', p: 27, type: 'match',
    q: 'Ordne die Stufe der Adenom-Karzinom-Sequenz ihrer genetischen Veränderung zu.',
    pairs: [
      ['Normalschleimhaut → frühes Adenom', 'APC-Verlust'],
      ['Intermediäres Adenom', 'KRAS-Mutation'],
      ['Spätes Adenom', '18q-Verlust (SMAD4/DCC)'],
      ['Karzinom', 'p53-Verlust']
    ],
    ex: 'Klassische Adenom-Karzinom-Sequenz / chromosomale Instabilität: 60–70 % der sporadischen KRK und FAP.'
  },
  {
    id: 'k8-34', sec: '8.4', p: 27, type: 'match',
    q: 'Ordne den Karzinogeneseweg des KRK seinem Kennzeichen zu.',
    pairs: [
      ['Chromosomale Instabilität', 'Adenom-Karzinom-Sequenz, 60–70 %, FAP'],
      ['MSI-Weg', 'Mismatch-Repair-Defekt (Lynch, MLH1-Hypermethylierung)'],
      ['Serratierter Weg', 'SSA, BRAF, CIMP-high, rechtskolisch'],
      ['Alternativer Weg', 'TSA, KRAS, MSI-low/MSS']
    ],
    ex: 'Serratierter Weg (15–20 %): SSA → BRAF, CIMP-high, MLH1-Methylierung → MSI. Alternativer Weg (15–20 %): TSA, KRAS.'
  },
  {
    id: 'k8-35', sec: '8.4', p: 27, type: 'single',
    q: 'Welches Immunprofil ist typisch für das kolorektale Adenokarzinom?',
    opts: ['CK20+/CK7−, CDX2+', 'TTF-1+, Napsin A+', 'Calretinin+, WT1+', 'Synaptophysin+, Chromogranin+'],
    a: 0,
    ex: 'KRK: CK20+/CK7−, CDX2+; typische „schmutzige Nekrose“. TTF-1/Napsin A → Lungen-Adenokarzinom; Calretinin/WT1 → Mesotheliom; Synaptophysin → neuroendokrin.'
  },
  {
    id: 'k8-36', sec: '8.4', p: 27, type: 'kprim',
    q: 'Rechts- vs. linksseitiges KRK – welche Aussagen treffen zu?',
    st: [
      ['Rechtsseitige Karzinome werden später symptomatisch (Anämie).', true],
      ['Rechtsseitige Karzinome betreffen häufiger Männer und Jüngere.', false],
      ['Rechtsseitige Karzinome sprechen besser auf anti-EGFR an.', false],
      ['Rechtes und linkes Kolon haben dieselbe embryonale Herkunft.', false]
    ],
    ex: 'Rechts: später symptomatisch, häufiger MSI/BRAF, Frauen, Ältere, Peritonealkarzinose, schlechteres Ansprechen auf anti-EGFR. Embryonal: midgut (rechts) vs. hindgut (links).'
  },
  {
    id: 'k8-37', sec: '8.4', p: 28, type: 'single',
    q: 'Wie viele Lymphknoten sollen beim KRK mindestens untersucht werden?',
    opts: ['≥ 12', '≥ 3', '≥ 30'],
    a: 0,
    ex: 'Staging nach TNM mit ≥ 12 LK. Bei LK-Befall sinkt die 5-JÜR unabhängig vom T-Stadium auf ~50–60 %, durch adjuvante Chemotherapie deutlich verbesserbar.'
  },
  {
    id: 'k8-38', sec: '8.4', p: 28, type: 'match',
    q: 'Ordne den Begriff zum Rektumkarzinom zu.',
    pairs: [
      ['Definition Rektum', 'Bis 16 cm ab Anokutanlinie'],
      ['Neoadjuvante Radiochemotherapie', 'Ab cT3/N+'],
      ['Operation', 'TME, CRM ≥ 1 mm'],
      ['„yp“-Klassifikation', 'Nach neoadjuvanter Therapie, mit Regressionsgrading']
    ],
    ex: 'Rektumkarzinom: Hämatochezie, Stuhlunregelmäßigkeiten, „Bleistiftstuhl“; Staging mit MRT/Endosonographie; TME = totale mesorektale Exzision, ggf. Rektumexstirpation.'
  },
  {
    id: 'k8-39', sec: '8.4', p: 27, type: 'single',
    q: 'Welcher histologische Befund ist typisch für das kolorektale Adenokarzinom?',
    opts: ['„Schmutzige Nekrose“ (dirty necrosis)', 'Verkäsende Granulome', 'Psammomkörper'],
    a: 0,
    ex: 'KRK: typische „schmutzige Nekrose“, CK20+/CK7−, CDX2+.'
  },
  {
    id: 'k8-40', sec: '8.4', p: 27, type: 'match',
    q: 'Ordne den histologischen KRK-Subtyp seinem Kennzeichen zu.',
    pairs: [
      ['Adenokarzinom NOS', '~90 %'],
      ['Muzinöses Adenokarzinom', '> 50 % extrazellulärer Schleim'],
      ['Siegelringzellkarzinom', '< 1 %, schlechte Prognose'],
      ['Medulläres Karzinom', 'MSI-H, rechts, eher günstig']
    ],
    ex: 'Das muzinöse Adenokarzinom macht ~10 % aus (nicht 80 % – Altfrage).'
  },
  {
    id: 'k8-41', sec: '8.4', p: 27, type: 'single',
    q: 'Welche CED erhöht das KRK-Risiko stärker?',
    opts: ['Colitis ulcerosa', 'M. Crohn', 'Beide gleich stark'],
    a: 0,
    ex: 'KRK-Risikofaktoren u. a.: CED (CU > MC), PSC, Alter, rotes/verarbeitetes Fleisch, ballaststoffarme Kost, Adipositas, Rauchen, Alkohol, Familie, FAP/Lynch, Adenome.'
  },
  {
    id: 'k8-42', sec: '8.4', p: 28, type: 'single',
    q: 'Welche Symptome passen zum Rektumkarzinom?',
    opts: [
      '„Bleistiftstuhl“ und Hämatochezie',
      'Wässrige Diarrhö bei unauffälliger Endoskopie',
      'Nicht blutige Diarrhö mit Schmerzen im rechten Unterbauch'
    ],
    a: 0,
    ex: 'Rektumkarzinom: Hämatochezie, Stuhlunregelmäßigkeiten, „Bleistiftstuhl“. Wässrige Diarrhö bei unauffälliger Endoskopie → mikroskopische Kolitis; rechter Unterbauch → M. Crohn.'
  },

  /* ---------- 8.5 Hereditäre Syndrome ---------- */
  {
    id: 'k8-43', sec: '8.5', p: 28, type: 'single', alt: '2009, 2013A, 2024',
    q: 'Ein 43-jähriger Patient hat mehrere hundert Kolonpolypen. Sein Vater hatte Adenome und ein Sigmakarzinom, die Geschwister haben Adenome. Welche Aussage trifft zu?',
    opts: [
      'Verantwortlich ist das APC-Gen auf Chromosom 5q21.',
      'Es handelt sich um ein HNPCC.',
      'Es handelt sich um ein Cowden-Syndrom.',
      'Das KRK-Risiko liegt bei ca. 60 %.',
      'Ursache sind Mutationen der Mismatch-Repair-Gene.'
    ],
    a: 0,
    ex: 'FAP: APC (5q21), autosomal-dominant; hunderte bis tausende Adenome; KRK-Risiko ~100 % ohne Prophylaxe → prophylaktische (Prokto-)Kolektomie.'
  },
  {
    id: 'k8-44', sec: '8.5', p: 28, type: 'match',
    q: 'Ordne das Syndrom seinem Gen zu.',
    pairs: [
      ['FAP', 'APC (5q21)'],
      ['Lynch-Syndrom', 'MSH2, MLH1, MSH6, PMS2'],
      ['Peutz-Jeghers-Syndrom', 'STK11'],
      ['Cowden-Syndrom', 'PTEN'],
      ['Juvenile Polyposis', 'SMAD4/BMPR1A']
    ],
    ex: 'Lynch: Mismatch-Repair-Gene MSH2 > MLH1 > MSH6 > PMS2 (EPCAM), autosomal-dominant.'
  },
  {
    id: 'k8-45', sec: '8.5', p: 28, type: 'match',
    q: 'Ordne die FAP-Variante ihrem Kennzeichen zu.',
    pairs: [
      ['Gardner-Syndrom', '+ Osteome, Desmoide, Epidermoidzysten'],
      ['Turcot-Syndrom', '+ Medulloblastom'],
      ['MUTYH-assoziierte Polyposis', 'Autosomal-rezessiv']
    ],
    ex: 'Weitere Variante: attenuierte FAP.'
  },
  {
    id: 'k8-46', sec: '8.5', p: 28, type: 'kprim',
    q: 'Lynch-Syndrom (HNPCC) – welche Aussagen treffen zu?',
    st: [
      ['Das Endometriumkarzinom ist die zweithäufigste Manifestation.', true],
      ['Die Karzinome liegen bevorzugt rechtsseitig und sind MSI-H.', true],
      ['Typisch sind hunderte bis tausende Adenome.', false],
      ['Der Erbgang ist autosomal-rezessiv.', false]
    ],
    ex: 'Lynch: wenige Adenome (beschleunigte Progression), rechtsseitig, < 50 J, MSI-H, muzinös/medullär, TILs; autosomal-dominant; KRK lifetime ~50–80 %.'
  },
  {
    id: 'k8-47', sec: '8.5', p: 28, type: 'kprim',
    q: 'FAP – welche Aussagen treffen zu?',
    st: [
      ['Das KRK-Risiko liegt ohne Prophylaxe bei ca. 100 %.', true],
      ['Auch im Duodenum (Papille) entstehen Adenome.', true],
      ['Die FAP macht ca. 10 % aller KRK aus.', false],
      ['Eine prophylaktische Kolektomie ist nicht indiziert.', false]
    ],
    ex: 'FAP: ~1 % aller KRK; Adenome ab der 2. Dekade, auch Duodenum/Papille (Ampullen-Ca), Fundusdrüsenpolypen; Karzinom bis ~40.–50. LJ → prophylaktische (Prokto-)Kolektomie.'
  },
  {
    id: 'k8-48', sec: '8.5', p: 28, type: 'single',
    q: 'Wie wird ein Lynch-Syndrom diagnostisch abgeklärt?',
    opts: [
      'MMR-Protein-IHC bzw. MSI-Analyse → Keimbahntest',
      'APC-Sequenzierung',
      'Nachweis hunderter Adenome in der Koloskopie'
    ],
    a: 0,
    ex: 'Lynch: Amsterdam-II-/Bethesda-Kriterien; Diagnostik MMR-Protein-IHC/MSI-Analyse → Keimbahntest. APC und hunderte Adenome → FAP.'
  },
  {
    id: 'k8-49', sec: '8.5', p: 28, type: 'single',
    q: 'Welche Tumoren gehören zum Muir-Torre-Syndrom (Lynch-Variante)?',
    opts: ['Talgdrüsentumoren', 'Osteome und Desmoide', 'Hamartomatöse Polypen mit perioralen Pigmentflecken'],
    a: 0,
    ex: 'Lynch extrakolisch: Endometrium, Ovar, Magen, Dünndarm, Urothel, Gallenwege, Gehirn (Turcot), Talgdrüsen (Muir-Torre). Osteome/Desmoide → Gardner; Pigmentflecken → Peutz-Jeghers.'
  },
  {
    id: 'k8-50', sec: '8.5', p: 28, type: 'single',
    q: 'Welches Syndrom geht mit perioralen Pigmentflecken und hamartomatösen Polypen einher?',
    opts: ['Peutz-Jeghers-Syndrom (STK11)', 'FAP (APC)', 'Lynch-Syndrom (Mismatch-Repair-Gene)', 'Gardner-Syndrom'],
    a: 0,
    ex: 'Peutz-Jeghers: STK11; hamartomatöse Polypen, periorale Pigmentflecken; Risiko für Pankreas-, Mamma-, Ovar-, Hoden-Ca.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k8-t01', sec: '8.1', p: 26, type: 'tf', a: true, q: 'Die Colitis ulcerosa befällt immer das Rektum.', ex: 'CU: Kolon, Rektum immer, kontinuierlich von distal nach proximal.' },
  { id: 'k8-t02', sec: '8.1', p: 26, type: 'tf', a: false, q: 'Die Colitis ulcerosa ist im Gegensatz zum M. Crohn typischerweise transmural.', ex: 'Umgekehrt: CU = Mukosa, MC = transmural (Altfrage).' },
  { id: 'k8-t03', sec: '8.1', p: 26, type: 'tf', a: false, q: 'Eine langjährige Colitis ulcerosa geht nicht mit einem erhöhten Karzinomrisiko einher.', ex: 'CU: KRK-Risiko ↑ mit Dauer und Ausdehnung (Altfrage).' },
  { id: 'k8-t04', sec: '8.1', p: 26, type: 'tf', a: true, q: 'Epitheloidzellige Granulome finden sich bei ca. 30–50 % der Patienten mit M. Crohn.', ex: 'MC: epitheloidzellige, nicht verkäsende Granulome (~30–50 %).' },
  { id: 'k8-t05', sec: '8.1', p: 26, type: 'tf', a: true, q: 'Beim M. Crohn ist das Rektum oft frei.', ex: 'MC: v. a. terminales Ileum + proximales Kolon; Rektum oft frei.' },
  { id: 'k8-t06', sec: '8.1', p: 26, type: 'tf', a: false, q: 'Die Backwash-Ileitis ist typisch für den M. Crohn.', ex: 'Backwash-Ileitis gehört zur Colitis ulcerosa.' },
  { id: 'k8-t07', sec: '8.1', p: 26, type: 'tf', a: true, q: 'Das „Fahrradschlauch“-Kolon (Haustrenverlust) ist ein Spätbefund der Colitis ulcerosa.', ex: 'CU-Spätstadium: „Fahrradschlauch“ (Haustrenverlust).' },
  { id: 'k8-t08', sec: '8.1', p: 26, type: 'tf', a: false, q: 'Die Endokarditis ist eine extraintestinale Manifestation der CED.', ex: 'Keine Endokarditis (Altfrage 2008, 2010).' },
  { id: 'k8-t09', sec: '8.1', p: 26, type: 'tf', a: true, q: 'Pyoderma gangraenosum und Erythema nodosum sind extraintestinale Manifestationen der CED.', ex: 'Extraintestinal: Arthritis, Iritis/Uveitis, Erythema nodosum, Pyoderma gangraenosum, Sakroiliitis, AA-Amyloidose.' },
  { id: 'k8-t10', sec: '8.1', p: 26, type: 'tf', a: true, q: 'Die Gallensäuremalabsorption beim M. Crohn kann zu Gallensteinen führen.', ex: 'MC: Malabsorption (B12, Gallensäuren → Steine).' },
  { id: 'k8-t11', sec: '8.2', p: 26, type: 'tf', a: true, q: 'Die pseudomembranöse Kolitis wird durch Toxine von Clostridioides difficile verursacht.', ex: 'C. difficile (Toxin A/B) nach Antibiotika.' },
  { id: 'k8-t12', sec: '8.2', p: 26, type: 'tf', a: false, q: 'Die pseudomembranöse Kolitis wird typischerweise durch EHEC verursacht.', ex: 'Nicht EHEC (Altfrage 2009).' },
  { id: 'k8-t13', sec: '8.2', p: 26, type: 'tf', a: false, q: 'Die antibiotikaassoziierte Kolitis ist eine lymphozytäre Entzündung.', ex: 'Fibrinöse (pseudomembranöse), nicht lymphozytäre Entzündung (Altfrage).' },
  { id: 'k8-t14', sec: '8.2', p: 26, type: 'tf', a: true, q: 'Die kollagene Kolitis zeigt ein subepitheliales Kollagenband > 10 µm.', ex: 'Kollagene Kolitis: subepitheliales Kollagenband > 10 µm.' },
  { id: 'k8-t15', sec: '8.2', p: 26, type: 'tf', a: false, q: 'Bei der mikroskopischen Kolitis ist die Endoskopie typischerweise auffällig.', ex: 'Mikroskopische Kolitis: endoskopisch unauffällig.' },
  { id: 'k8-t16', sec: '8.2', p: 26, type: 'tf', a: true, q: 'CMV-Eulenaugenzellen sind schon in der HE-Färbung erkennbar.', ex: 'CMV-Kolitis: Eulenaugenzellen in HE, Bestätigung per IHC.' },
  { id: 'k8-t17', sec: '8.2', p: 26, type: 'tf', a: true, q: 'Eine Mesenterialvenenthrombose führt zum hämorrhagischen Darminfarkt.', ex: 'Hämorrhagisch: Mesenterialarterienverschluss mit Rückstrom, Mesenterialvenenthrombose, Strangulation/Volvulus/Invagination/Hernie.' },
  { id: 'k8-t18', sec: '8.2', p: 26, type: 'tf', a: false, q: 'Anämische Infarkte sind im Darm häufig.', ex: 'Anämische (arterielle) Infarkte sind im Darm selten.' },
  { id: 'k8-t19', sec: '8.2', p: 26, type: 'tf', a: false, q: 'Die Divertikulose ist eine Erkrankung des Dünndarms.', ex: 'Divertikulose: Dickdarm, v. a. Sigma (Altfrage 2009).' },
  { id: 'k8-t20', sec: '8.2', p: 26, type: 'tf', a: true, q: 'Ballaststoffarme Kost ist ein Risikofaktor der Divertikulose.', ex: 'RF: ballaststoffarme Kost, Alter, Obstipation, Adipositas.' },
  { id: 'k8-t21', sec: '8.3', p: 27, type: 'tf', a: false, q: 'Peutz-Jeghers-Polypen sind echte Neoplasien.', ex: 'Hamartome = keine echten Neoplasien (Altfrage 2013A, 2015, 2019).' },
  { id: 'k8-t22', sec: '8.3', p: 27, type: 'tf', a: false, q: 'Der hyperplastische Polyp zeigt meist eine Dysplasie.', ex: 'Hyperplastischer Polyp: keine Dysplasie (Altfrage 2013B).' },
  { id: 'k8-t23', sec: '8.3', p: 27, type: 'tf', a: true, q: 'Das sessile serratierte Adenom liegt bevorzugt rechtskolisch.', ex: 'SSA/SSL: rechtskolisch, flach, Schleimkappe.' },
  { id: 'k8-t24', sec: '8.3', p: 27, type: 'tf', a: true, q: 'Das traditionelle serratierte Adenom zeigt fast immer eine Dysplasie.', ex: 'TSA: linkskolisch, Eosinophilie, ektope Krypten; fast immer Dysplasie; KRAS.' },
  { id: 'k8-t25', sec: '8.3', p: 27, type: 'tf', a: true, q: 'Konventionelle Adenome zeigen obligat eine intraepitheliale Neoplasie (Dysplasie).', ex: 'Adenom: benigne Neoplasie mit obligater intraepithelialer Neoplasie/Dysplasie.' },
  { id: 'k8-t26', sec: '8.3', p: 27, type: 'tf', a: false, q: 'Villöse Adenome sind der häufigste Adenomtyp.', ex: 'Tubulär ~75 %, tubulovillös ~25 %, villös ~5 %.' },
  { id: 'k8-t27', sec: '8.3', p: 27, type: 'tf', a: true, q: 'Eine breitbasige (sessile) Wuchsform erhöht das Entartungsrisiko eines Adenoms.', ex: 'Risiko ↑: villöser Anteil, Größe > 1 cm, breitbasig, Anzahl > 3, hochgradige Dysplasie.' },
  { id: 'k8-t28', sec: '8.3', p: 27, type: 'tf', a: true, q: 'Die Vorsorgekoloskopie senkt die KRK-Rate um ca. 50 %.', ex: 'Vorsorgekoloskopie senkt die KRK-Rate um ~50 %.' },
  { id: 'k8-t29', sec: '8.3', p: 27, type: 'tf', a: false, q: 'Ein Karzinom liegt bereits vor, wenn ein Adenom eine hochgradige Dysplasie zeigt.', ex: 'Karzinom erst ab Infiltration der Submukosa.' },
  { id: 'k8-t30', sec: '8.4', p: 27, type: 'tf', a: false, q: 'Die Mehrzahl der kolorektalen Karzinome entsteht de novo.', ex: 'Die meisten entstehen über Vorläuferpolypen (Altfrage 2021, 2024).' },
  { id: 'k8-t31', sec: '8.4', p: 27, type: 'tf', a: true, q: 'Etwa 90 % der kolorektalen Karzinome sind sporadisch.', ex: 'Mehrheitlich sporadisch (~90 %), 5–10 % erblich.' },
  { id: 'k8-t32', sec: '8.4', p: 27, type: 'tf', a: false, q: 'Das muzinöse Adenokarzinom macht ca. 80 % der kolorektalen Karzinome aus.', ex: 'Muzinös ~10 %, NOS ~90 % (Altfrage).' },
  { id: 'k8-t33', sec: '8.4', p: 27, type: 'tf', a: true, q: 'In der Adenom-Karzinom-Sequenz steht der APC-Verlust am Anfang.', ex: 'APC-Verlust → KRAS → 18q-Verlust → p53-Verlust.' },
  { id: 'k8-t34', sec: '8.4', p: 27, type: 'tf', a: true, q: 'Der serratierte Karzinogeneseweg verläuft über BRAF-Mutation und CIMP-high.', ex: 'Serratierter Weg: SSA → BRAF, CIMP-high, MLH1-Methylierung → MSI.' },
  { id: 'k8-t35', sec: '8.4', p: 27, type: 'tf', a: true, q: 'Das medulläre Karzinom des Kolons ist MSI-H und hat eine eher günstige Prognose.', ex: 'Medulläres Ca: MSI-H, rechts, eher günstig.' },
  { id: 'k8-t36', sec: '8.4', p: 27, type: 'tf', a: false, q: 'Kolorektale Adenokarzinome sind typischerweise CK7-positiv und CK20-negativ.', ex: 'KRK: CK20+/CK7−, CDX2+.' },
  { id: 'k8-t37', sec: '8.4', p: 28, type: 'tf', a: true, q: 'Vor einer anti-EGFR-Therapie des KRK wird der RAS-Status bestimmt.', ex: 'Molekularpathologie: RAS-Status vor anti-EGFR-Therapie, BRAF, MSI.' },
  { id: 'k8-t38', sec: '8.4', p: 28, type: 'tf', a: true, q: 'Kolonkarzinome metastasieren v. a. über die Pfortader in die Leber.', ex: 'Metastasen v. a. Leber (Pfortader), Lunge (Rektum: auch V. cava → Lunge).' },
  { id: 'k8-t39', sec: '8.4', p: 28, type: 'tf', a: false, q: 'Das Rektumkarzinom ist definiert als Karzinom bis 30 cm ab Anokutanlinie.', ex: 'Rektumkarzinom: bis 16 cm ab Anokutanlinie.' },
  { id: 'k8-t40', sec: '8.4', p: 28, type: 'tf', a: true, q: 'Beim Rektumkarzinom wird ab cT3/N+ neoadjuvant radiochemotherapiert.', ex: 'Neoadjuvante Radiochemotherapie ab cT3/N+, dann TME.' },
  { id: 'k8-t41', sec: '8.5', p: 28, type: 'tf', a: true, q: 'Das APC-Gen liegt auf Chromosom 5q21.', ex: 'FAP: APC (5q21), autosomal-dominant (Altfrage 2009, 2013A, 2024).' },
  { id: 'k8-t42', sec: '8.5', p: 28, type: 'tf', a: false, q: 'Das KRK-Risiko bei FAP liegt ohne Prophylaxe bei ca. 60 %.', ex: 'FAP: ~100 % ohne Prophylaxe.' },
  { id: 'k8-t43', sec: '8.5', p: 28, type: 'tf', a: false, q: 'Die MUTYH-assoziierte Polyposis wird autosomal-dominant vererbt.', ex: 'MUTYH-assoziierte Polyposis: autosomal-rezessiv.' },
  { id: 'k8-t44', sec: '8.5', p: 28, type: 'tf', a: true, q: 'Beim Lynch-Syndrom ist das Endometriumkarzinom die zweithäufigste Manifestation.', ex: 'Lynch extrakolisch: Endometrium (zweithäufigste Manifestation!), Ovar, Magen u. a.' },
  { id: 'k8-t45', sec: '8.5', p: 28, type: 'tf', a: false, q: 'Das Lynch-Syndrom ist durch hunderte bis tausende Adenome gekennzeichnet.', ex: 'Lynch: wenige Adenome mit beschleunigter Progression; hunderte Adenome → FAP.' }
]);
