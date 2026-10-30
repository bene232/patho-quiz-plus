/* Kapitel 12 – Schilddrüse & Nebenschilddrüse (PDF S. 39–41) */
PQ.registerChapter(12, [

  /* ---------- 12.1 Struma, Funktion, Thyreoiditis ---------- */
  {
    id: 'k12-01', sec: '12.1', p: 39, type: 'single', alt: '2009, 2013A',
    q: 'Schilddrüse – welche Aussage trifft zu?',
    opts: [
      'Ursachen einer Unterfunktion mit Schilddrüsenhyperplasie können neben Jodmangel und Hormonsynthesestörungen auch strumigene Substanzen sein.',
      'Hypothalamus und Hypophyse spielen für die Schilddrüsenfunktion nur eine untergeordnete Rolle.',
      'Beim M. Basedow sind die Follikel gefüllt und kolloidreich.',
      'Die Struma colloides nodosa ist eine Präkanzerose.',
      'Histologisch gibt es keine Hinweise auf die Follikelaktivität.'
    ],
    a: 0,
    ex: 'Strumigene Substanzen: Thiocyanat, Lithium, Thyreostatika, Kohlarten. Regelkreis TRH → TSH → T3/T4. Basedow: kolloidarme Follikel. Struma colloides nodosa: keine Präkanzerose. Die Follikelaktivität ist histologisch beurteilbar.'
  },
  {
    id: 'k12-02', sec: '12.1', p: 39, type: 'single', alt: '2016',
    q: 'Schilddrüse – welche Aussage ist FALSCH?',
    opts: [
      'Histologisch gibt es keine Hinweise auf den Aktivitätszustand der Follikel.',
      'Beim M. Basedow sind die Follikel leer und kolloidarm.',
      'Strumigene Substanzen können eine Struma verursachen.',
      'Die Hashimoto-Thyreoiditis führt zur Hypothyreose.'
    ],
    a: 0,
    ex: 'Aktiv = hochprismatisches Epithel, kolloidarme/leere Follikel mit Resorptionsvakuolen, Papillenknospen; inaktiv = flaches Epithel, kolloidreiche große Follikel.'
  },
  {
    id: 'k12-03', sec: '12.1', p: 39, type: 'match',
    q: 'Ordne die Schilddrüsenerkrankung ihrem Kennzeichen zu.',
    pairs: [
      ['M. Basedow', 'Stimulierende AK gegen den TSH-Rezeptor (TRAK)'],
      ['Hashimoto-Thyreoiditis', 'Anti-TPO- und Anti-Tg-AK'],
      ['Thyreoiditis de Quervain', 'Subakut-granulomatös nach Virusinfekt'],
      ['Riedel-Struma', 'Fibrosierend (IgG4)']
    ],
    ex: 'De Quervain: schmerzhaft, Riesenzellen um Kolloid, BSG ↑. Hashimoto: ADCC/Typ IV.'
  },
  {
    id: 'k12-04', sec: '12.1', p: 39, type: 'single',
    q: 'Welches histologische Bild zeigt eine aktive Schilddrüse?',
    opts: [
      'Hochprismatisches Epithel, kolloidarme Follikel mit Resorptionsvakuolen',
      'Flaches Epithel, große kolloidreiche Follikel',
      'Riesenzellen um Kolloid'
    ],
    a: 0,
    ex: 'Inaktiv = flaches Epithel, kolloidreiche große Follikel. Riesenzellen um Kolloid → Thyreoiditis de Quervain.'
  },
  {
    id: 'k12-05', sec: '12.1', p: 39, type: 'kprim',
    q: 'Hashimoto-Thyreoiditis – welche Aussagen treffen zu?',
    st: [
      ['Es finden sich dichte lymphozytäre Infiltrate mit Keimzentren.', true],
      ['Onkozytäre Hürthle-Zellen sind typisch.', true],
      ['Sie führt typischerweise zur Hyperthyreose mit TSH-Suppression.', false],
      ['Sie ist ein Risikofaktor für das medulläre Karzinom.', false]
    ],
    ex: 'Hashimoto: Follikelzerstörung, später Fibrose/Atrophie → Hypothyreose (TSH ↑, T3/T4 ↓); RF für das MALT-Lymphom.'
  },
  {
    id: 'k12-06', sec: '12.1', p: 39, type: 'single',
    q: 'Was ist die Merseburger Trias des M. Basedow?',
    opts: ['Struma, Tachykardie, Exophthalmus', 'Schmerzhafte Schilddrüse und erhöhte BSG', 'Hypothyreose mit TSH ↑'],
    a: 0,
    ex: 'M. Basedow: Hyperthyreose, Merseburger Trias (Struma, Tachykardie, Exophthalmus/endokrine Orbitopathie). Schmerz + BSG ↑ → de Quervain; Hypothyreose mit TSH ↑ → Hashimoto.'
  },
  {
    id: 'k12-07', sec: '12.1', p: 39, type: 'single',
    q: 'Welcher Hypersensitivitätstyp liegt dem M. Basedow zugrunde?',
    opts: ['Typ IIb (stimulierende Antikörper)', 'Typ I', 'Typ III'],
    a: 0,
    ex: 'M. Basedow: Typ IIb, TRAK = stimulierende Auto-AK gegen den TSH-Rezeptor.'
  },
  {
    id: 'k12-08', sec: '12.1', p: 39, type: 'single',
    q: 'Für welchen Tumor ist die Hashimoto-Thyreoiditis ein Risikofaktor?',
    opts: ['MALT-Lymphom', 'Medulläres Karzinom', 'Phäochromozytom'],
    a: 0,
    ex: 'Hashimoto: RF für das MALT-Lymphom. Das medulläre Karzinom stammt von den C-Zellen (RET, MEN2); das Phäochromozytom gehört zu MEN2/VHL/NF1.'
  },
  {
    id: 'k12-09', sec: '12.1', p: 39, type: 'single',
    q: 'Welche Thyreoiditis ist schmerzhaft und zeigt Riesenzellen um Kolloid?',
    opts: ['Thyreoiditis de Quervain', 'Hashimoto-Thyreoiditis', 'Riedel-Struma'],
    a: 0,
    ex: 'De Quervain: subakut-granulomatös nach Virusinfekt, schmerzhaft, Riesenzellen um Kolloid, BSG ↑.'
  },

  /* ---------- 12.2 Schilddrüsenkarzinome ---------- */
  {
    id: 'k12-10', sec: '12.2', p: '39–40', type: 'single', alt: '2008',
    q: 'Schilddrüsenkarzinom – welche Aussage trifft zu?',
    opts: [
      'Es gibt eine follikuläre Variante des papillären SD-Karzinoms.',
      'Das medulläre Karzinom ist der häufigste Typ.',
      'RET-Mutationen finden sich v. a. beim follikulären Karzinom.',
      'Für das follikuläre Karzinom sind zytologische Kriterien entscheidend.',
      'Das anaplastische Karzinom hat eine relativ günstige Prognose.'
    ],
    a: 0,
    ex: 'Follikuläre Variante des PTC = follikulärer Aufbau mit PTC-Kernen. Häufigster Typ ist das papilläre Ca; RET → medullär; follikuläres Ca: Diagnose nur über Kapsel-/Gefäßinvasion; anaplastisch: extrem schlechte Prognose.'
  },
  {
    id: 'k12-11', sec: '12.2', p: '39–40', type: 'single', alt: '2012',
    q: 'Schilddrüsenkarzinom – welche Aussage trifft zu?',
    opts: [
      'Das follikuläre Karzinom ist rein nach zytologischen Kriterien in manchen Fällen nicht von einer benignen Proliferation zu unterscheiden.',
      'Es gibt eine papilläre Variante des follikulären Karzinoms.',
      'Das papilläre Karzinom metastasiert bevorzugt hämatogen.',
      'Das medulläre Karzinom geht vom Follikelepithel aus.'
    ],
    a: 0,
    ex: 'Es gibt eine follikuläre Variante des papillären Ca – nicht umgekehrt. PTC metastasiert lymphogen; das medulläre Ca stammt von den C-Zellen.'
  },
  {
    id: 'k12-12', sec: '12.2', p: '39–40', type: 'single', alt: '2015',
    q: 'Follikuläres SD-Karzinom – welche Aussage trifft zu?',
    opts: [
      'Auch bei Fernmetastasen bei Erstdiagnose ist mit adäquater Therapie noch in 10–50 % eine Heilung möglich.',
      'Es ist zytologisch anhand von Kernkriterien sicher abgrenzbar.',
      'Es ist der häufigste Typ.',
      'Es ist typischerweise RET-mutiert.'
    ],
    a: 0,
    ex: 'FTC: 10-JÜR 70–80 %; trotz Fernmetastasen bei Erstdiagnose noch 10–50 % Heilung. Molekular RAS, PAX8-PPARγ (RET → MTC).'
  },
  {
    id: 'k12-13', sec: '12.2', p: '39–40', type: 'single', alt: '2019',
    q: 'Follikuläres SD-Karzinom – welche Aussage trifft zu?',
    opts: [
      'Die Diagnose wird am Operationspräparat durch Nachweis invasiven Wachstums durch die Kapsel oder in Gefäße gestellt.',
      'Es steckt hinter den meisten Knoten in Süddeutschland.',
      'Es metastasiert bevorzugt in Leber und Nebenniere.',
      'Ein Schnellschnitt ist grundsätzlich unmöglich.',
      'Es zeigt ein typisches zytologisches Bild.'
    ],
    a: 0,
    ex: 'FTC: maligne nur durch Kapsel- und/oder Gefäßinvasion; hämatogen in Lunge und Knochen. Der Schnellschnitt ist nur wenig treffsicher, aber nicht grundsätzlich unmöglich.'
  },
  {
    id: 'k12-14', sec: '12.2', p: 40, type: 'single', alt: '2019',
    q: 'Eine 84-jährige Patientin hat einen schnell wachsenden 5-cm-Schilddrüsenknoten und eine Recurrensparese; es liegt ein anaplastisches Karzinom vor. Welche Aussage trifft NICHT zu?',
    opts: [
      'Es tritt eher im jungen Lebensalter auf.',
      'Die Prognose ist extrem schlecht.',
      'Es ist zytologisch gut diagnostizierbar.',
      'Die Recurrensparese zeigt ein lokal fortgeschrittenes Stadium (T4).',
      'Es ist hochmaligne und undifferenziert.'
    ],
    a: 0,
    ex: 'Anaplastisches Ca: Ältere (~70 J), Spindel-, Riesen-, polymorphe Zellen; mittleres Überleben ~6 Monate; immer UICC-Stadium IV.'
  },
  {
    id: 'k12-15', sec: '12.2', p: 40, type: 'single', alt: '2018',
    q: 'Schilddrüsenkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'UICC II und III werden zusammengefasst.',
      'Die Klassifikation erfolgt nach TNM.',
      'Ein histologisches Grading wird beim SD-Karzinom nicht durchgeführt.',
      'Das anaplastische Karzinom ist immer UICC-Stadium IV.'
    ],
    a: 0,
    ex: 'Gewertet wie die KPK-Lösung: UICC II und III werden nicht zusammengefasst. SD-Ca: TNM/UICC, kein histologisches Grading; anaplastisch immer Stadium IV.',
    dis: 'Die KPK-Lösung der Frage von 2018 lautet C („UICC II und III werden zusammengefasst“ ist falsch). Im Original lautete Option B „Das papilläre SD-Ca wird wegen guter Prognose nicht gestaged“ – auch das ist falsch, denn das papilläre Ca wird sehr wohl nach TNM gestaged, nur nicht gegradet. Option B wurde hier durch eine eindeutig richtige Aussage ersetzt.'
  },
  {
    id: 'k12-16', sec: '12.2', p: 40, type: 'kprim',
    q: 'Papilläres SD-Karzinom – welche Aussagen treffen zu?',
    st: [
      ['Die 10-JÜR liegt bei ca. 90 %.', true],
      ['Es metastasiert v. a. lymphogen in die Halslymphknoten.', true],
      ['Es ist typischerweise mit einer RET-Keimbahnmutation (MEN2) assoziiert.', false],
      ['Es nimmt kein Radiojod auf.', false]
    ],
    ex: 'Die ersten beiden Aussagen stammen aus der Fragensammlung (✓). PTC: BRAF V600E, RET/PTC-Rearrangement (nicht Keimbahn); Therapie Thyreoidektomie + Radiojod + L-Thyroxin. RET-Keimbahn → MTC (MEN2).'
  },
  {
    id: 'k12-17', sec: '12.2', p: 39, type: 'match',
    q: 'Ordne das Schilddrüsenkarzinom seinem histologischen Kennzeichen zu.',
    pairs: [
      ['Papilläres Karzinom', 'Milchglaskerne, Kernfurchen, Psammomkörper'],
      ['Follikuläres Karzinom', 'Kapsel- und/oder Gefäßinvasion'],
      ['Medulläres Karzinom', 'C-Zellen, Calcitonin, Amyloid'],
      ['Anaplastisches Karzinom', 'Spindel-/Riesenzellen, kein Thyreoglobulin']
    ],
    ex: 'PTC: papilläre Strukturen + Kernkriterien (Milchglaskerne, Kernfurchen, Pseudoinklusionen, Überlappung), multifokal. MTC: Zellnester, Amyloid (Kongorot+), Calcitonin, CEA, Chromogranin+.'
  },
  {
    id: 'k12-18', sec: '12.2', p: 40, type: 'match',
    q: 'Ordne das Schilddrüsenkarzinom seiner Molekularpathologie zu.',
    pairs: [
      ['Papillär', 'BRAF V600E, RET/PTC-Rearrangement'],
      ['Follikulär', 'RAS, PAX8-PPARγ'],
      ['Medullär', 'RET-Protoonkogen'],
      ['Anaplastisch', 'p53, TERT']
    ],
    ex: 'MTC: RET-Keimbahn bei MEN2/FMTC → RET-Analyse bei jedem MTC obligat.'
  },
  {
    id: 'k12-19', sec: '12.2', p: 40, type: 'match',
    q: 'Ordne das Syndrom seinen endokrinen Tumoren zu.',
    pairs: [
      ['MEN1', 'Nebenschilddrüse, endokrines Pankreas, Hypophyse'],
      ['MEN2A', 'MTC, Phäochromozytom, pHPT'],
      ['MEN2B', 'MTC, Phäo, Schleimhautneurome, marfanoider Habitus'],
      ['Cowden (PTEN)', 'Follikuläres SD-Ca'],
      ['FAP', 'Kribriform-morulare Variante des PTC']
    ],
    ex: 'MEN1: Menin; MEN2A/2B: RET. Außerdem VHL (Phäo, Pankreas-NET), NF1 (Phäo).'
  },
  {
    id: 'k12-20', sec: '12.2', p: 40, type: 'single',
    q: 'Was muss vor einer Operation eines medullären SD-Karzinoms immer ausgeschlossen werden?',
    opts: ['Ein Phäochromozytom', 'Ein Hypophysenadenom', 'Ein Insulinom'],
    a: 0,
    ex: 'Vor einer Operation bei MTC immer ein Phäochromozytom ausschließen (MEN2A/2B).'
  },
  {
    id: 'k12-21', sec: '12.2', p: 39, type: 'single',
    q: 'Was ist der wichtigste Risikofaktor für Schilddrüsenkarzinome?',
    opts: ['Ionisierende Strahlung im Kindesalter', 'Hashimoto-Thyreoiditis', 'Struma colloides nodosa'],
    a: 0,
    ex: 'Wichtigster RF: ionisierende Strahlung im Kindesalter (Tschernobyl). Hashimoto → MALT-Lymphom; die Struma colloides nodosa ist keine Präkanzerose.'
  },
  {
    id: 'k12-22', sec: '12.2', p: 39, type: 'single',
    q: 'In welcher Reihenfolge nehmen Differenzierung und Prognose der SD-Karzinome ab?',
    opts: [
      'Papillär > follikulär > medullär > anaplastisch',
      'Follikulär > papillär > anaplastisch > medullär',
      'Medullär > papillär > follikulär > anaplastisch'
    ],
    a: 0,
    ex: '10-JÜR: papillär ~90 %, follikulär 70–80 %, medullär ~50 %, anaplastisch mittleres Überleben ~6 Monate.'
  },
  {
    id: 'k12-23', sec: '12.2', p: 40, type: 'single',
    q: 'Warum lässt sich eine follikuläre Neoplasie zytologisch nicht sicher als Karzinom oder Adenom einordnen?',
    opts: [
      'Weil die Diagnose den Nachweis einer Kapsel- bzw. Gefäßinvasion am Operationspräparat erfordert',
      'Weil follikuläre Karzinome kein Thyreoglobulin bilden',
      'Weil sie immer Psammomkörper enthalten'
    ],
    a: 0,
    ex: 'PTC und ATC sind zytologisch gut diagnostizierbar; die follikuläre Neoplasie nicht (im Schnellschnitt kaum), weil die Invasion entscheidet. Psammomkörper → PTC.'
  },
  {
    id: 'k12-24', sec: '12.2', p: 40, type: 'single',
    q: 'Wie werden Schilddrüsenkarzinome klassifiziert?',
    opts: ['Nach TNM/UICC, ohne histologisches Grading', 'Nach dem Gleason-Score', 'Nach WHO-Graden 1–4 wie ZNS-Tumoren'],
    a: 0,
    ex: 'Kein histologisches Grading; TNM: T1 ≤ 2 cm, T2 2–4 cm, T3 > 4 cm oder minimal extrathyreoidal, T4 Infiltration von Larynx, Trachea, Ösophagus, N. recurrens.'
  },
  {
    id: 'k12-25', sec: '12.2', p: 40, type: 'single',
    q: 'Welche Therapie ist beim medullären SD-Karzinom NICHT wirksam?',
    opts: ['Radiojodtherapie', 'Thyreoidektomie mit Lymphadenektomie', 'Tyrosinkinaseinhibitoren'],
    a: 0,
    ex: 'MTC: Thyreoidektomie + LK; kein Radiojod (C-Zellen speichern kein Jod), TKI.'
  },
  {
    id: 'k12-26', sec: '12.2', p: '39–40', type: 'kprim',
    q: 'Medulläres SD-Karzinom – welche Aussagen treffen zu?',
    st: [
      ['Es geht von den C-Zellen aus.', true],
      ['Calcitonin und CEA dienen als Tumormarker.', true],
      ['Eine RET-Analyse ist nur bei positiver Familienanamnese nötig.', false],
      ['Es speichert Radiojod.', false]
    ],
    ex: 'MTC: 2–5 %, sporadisch 50–60 J, hereditär jung; früh lymphogen + hämatogen; 10-JÜR ~50 %; RET-Analyse bei jedem MTC obligat.'
  },
  {
    id: 'k12-27', sec: '12.2', p: 40, type: 'single',
    q: 'Welcher Schilddrüsenbefund ist malignomverdächtig?',
    opts: [
      'Kalter, echoarmer, derber, unverschieblicher Knoten',
      'Diffus vergrößerte, „honigglänzende“ Drüse',
      'Schmerzhafte Schwellung mit BSG-Erhöhung nach Virusinfekt'
    ],
    a: 0,
    ex: 'Kalter und echoarmer Knoten ist malignomverdächtig (~10 % der kalten Knoten maligne). Honigglänzende Drüse → Basedow; schmerzhaft nach Virusinfekt → de Quervain.'
  },
  {
    id: 'k12-28', sec: '12.2', p: 40, type: 'single',
    q: 'Wie lange ist das mittlere Überleben beim anaplastischen SD-Karzinom?',
    opts: ['~6 Monate', '~5 Jahre', '~10 Jahre'],
    a: 0,
    ex: 'Anaplastisches Ca: extrem schlechte Prognose, mittleres Überleben ~6 Monate; meist inoperabel.'
  },
  {
    id: 'k12-29', sec: '12.2', p: 40, type: 'single',
    q: 'Wie metastasiert das follikuläre SD-Karzinom typischerweise?',
    opts: ['Hämatogen (Lunge, Knochen)', 'Lymphogen in die Halslymphknoten', 'Bevorzugt in Leber und Nebenniere'],
    a: 0,
    ex: 'FTC: hämatogen (Lunge, Knochen). Lymphogen → PTC. „Bevorzugt Leber und Nebenniere“ wurde 2019 als falsch gewertet.'
  },
  {
    id: 'k12-30', sec: '12.2', p: 40, type: 'single',
    q: 'Bis zu welchem Alter gibt es bei differenzierten SD-Karzinomen nur die Stadien I/II?',
    opts: ['Unter 55 Jahren', 'Unter 25 Jahren', 'Unter 75 Jahren'],
    a: 0,
    ex: 'Bei differenzierten SD-Ca < 55 J gibt es nur Stadium I/II.'
  },

  /* ---------- 12.3 Nebenschilddrüse & Hyperparathyreoidismus ---------- */
  {
    id: 'k12-31', sec: '12.3', p: 41, type: 'single', alt: '2021, 2022',
    q: 'Nebenschilddrüse – welche Aussage ist FALSCH?',
    opts: [
      'Ein Adenom ist das Korrelat eines sekundären HPT.',
      'Eine Hyperplasie betrifft meist alle 4 Nebenschilddrüsen.',
      'Das NSD-Karzinom ist schwer vom Adenom zu unterscheiden.',
      'Eine Fettfärbung ist hilfreich.',
      'Die intraoperative PTH-Bestimmung ist sinnvoll.'
    ],
    a: 0,
    ex: 'Das Adenom ist das Korrelat des primären HPT (solitäres Adenom 75–85 %). Sekundärer HPT → Hyperplasie aller 4 Drüsen.'
  },
  {
    id: 'k12-32', sec: '12.3', p: 41, type: 'single', alt: '2023',
    q: 'Nebenschilddrüsenadenom – welche Aussage ist FALSCH?',
    opts: [
      'Es zeigt histologisch eine monomorphe Hauptzellpopulation mit zellulären Atypien.',
      'Es ist das Korrelat des primären HPT.',
      'Es ist fettarm bis fettfrei.',
      'Oft findet sich ein Randsaum normaler Nebenschilddrüse.'
    ],
    a: 0,
    ex: 'Adenom = umschriebene, monomorphe Hauptzellproliferation ohne Atypien (Atypien sind kein Kriterium).'
  },
  {
    id: 'k12-33', sec: '12.3', p: 41, type: 'single', alt: '2010',
    q: 'Was gehört NICHT zum Symptomkomplex des Hyperparathyreoidismus?',
    opts: ['Hypoplasie der Nebenschilddrüsen', 'Nephrolithiasis', 'Osteitis fibrosa cystica', 'Ulcus ventriculi', 'Pankreatitis'],
    a: 0,
    ex: '„Stein-, Bein-, Magenpein“: Nephrolithiasis, Osteoporose/Osteitis fibrosa cystica, Ulzera (Gastrin ↑), Pankreatitis, Hyperkalzämiesyndrom.'
  },
  {
    id: 'k12-34', sec: '12.3', p: 41, type: 'kprim', alt: '2016',
    q: 'Welche der folgenden sind Folgen des primären HPT?',
    st: [
      ['Ulcus ventriculi', true],
      ['Pankreatitis', true],
      ['Nierensteine', true],
      ['Osteitis fibrosa cystica', true]
    ],
    ex: 'Alle vier treffen zu. Osteitis fibrosa cystica generalisata von Recklinghausen: dissezierende Fibroosteoklasie, „braune Tumoren“.'
  },
  {
    id: 'k12-35', sec: '12.3', p: 41, type: 'match',
    q: 'Ordne die Ursache des primären HPT ihrer Häufigkeit zu.',
    pairs: [
      ['Solitäres Adenom', '75–85 %'],
      ['Hyperplasie', '~15 %'],
      ['Karzinom', '1–2 %']
    ],
    ex: 'Multiple Adenome 1–3 %. pHPT: Prävalenz 0,1–0,5 %, w > m; Assoziation mit MEN1/MEN2A.'
  },
  {
    id: 'k12-36', sec: '12.3', p: 41, type: 'match',
    q: 'Ordne die Form des Hyperparathyreoidismus ihrer Ursache zu.',
    pairs: [
      ['Primärer HPT', 'Autonome PTH-Sekretion, meist Adenom'],
      ['Sekundärer HPT', 'Chronische Niereninsuffizienz oder Vitamin-D-Mangel'],
      ['Tertiärer HPT', 'Autonomie nach langem sekundärem HPT']
    ],
    ex: 'Sekundärer HPT: reaktiv (Phosphat ↑, Calcitriol ↓ bei NI) → Hyperplasie aller 4 Drüsen.'
  },
  {
    id: 'k12-37', sec: '12.3', p: 41, type: 'single',
    q: 'Welche Laborkonstellation passt zum primären HPT?',
    opts: ['Ca ↑, PTH ↑, Phosphat ↓, AP ↑', 'Ca ↑ bei supprimiertem PTH', 'Ca ↓ bei erniedrigtem PTH'],
    a: 0,
    ex: 'pHPT: Ca ↑, PTH ↑, Phosphat ↓, AP ↑. Hyperkalzämie mit supprimiertem PTH → Tumor (PTHrP, Osteolysen).'
  },
  {
    id: 'k12-38', sec: '12.3', p: 41, type: 'single',
    q: 'Was beweist ein Nebenschilddrüsenkarzinom?',
    opts: ['Invasion von Kapsel, Gefäßen oder Nachbarstrukturen bzw. Metastasen', 'Zelluläre Atypien', 'Fettarmes Gewebe'],
    a: 0,
    ex: 'Das NSD-Karzinom ist schwer vom Adenom zu unterscheiden; beweisend sind Invasion bzw. Metastasen. Atypien sind kein Kriterium; fettarm sind auch Adenom und Hyperplasie.'
  },
  {
    id: 'k12-39', sec: '12.3', p: 41, type: 'single',
    q: 'Was zeigt ein Abfall des intraoperativen PTH um > 50 % nach Entfernung eines Epithelkörperchens an?',
    opts: ['Das Adenom wurde entfernt.', 'Es liegt eine Hyperplasie aller 4 Drüsen vor.', 'Es liegt noch ein weiteres Adenom vor.'],
    a: 0,
    ex: 'PTH-Abfall > 50 % → Adenom entfernt; kein Abfall → Hyperplasie/weiteres Adenom.'
  },
  {
    id: 'k12-40', sec: '12.3', p: 41, type: 'single',
    q: 'Was sind „braune Tumoren“ beim Hyperparathyreoidismus?',
    opts: [
      'Riesenzellen + Hämosiderin bei Osteitis fibrosa cystica',
      'Metastasen eines Nebenschilddrüsenkarzinoms',
      'Onkozytäre Hürthle-Zell-Knoten der Schilddrüse'
    ],
    a: 0,
    ex: 'Osteitis fibrosa cystica generalisata von Recklinghausen: dissezierende Fibroosteoklasie, „braune Tumoren“ = Riesenzellen + Hämosiderin. Hürthle-Zellen → Hashimoto.'
  },
  {
    id: 'k12-41', sec: '12.3', p: 40, type: 'kprim',
    q: 'Normale Nebenschilddrüse – welche Aussagen treffen zu?',
    st: [
      ['Normalerweise gibt es 4 Epithelkörperchen.', true],
      ['Die oxyphilen Zellen nehmen im Alter zu.', true],
      ['Interstitielles Fett fehlt normalerweise.', false],
      ['Jedes Epithelkörperchen wiegt normal ca. 1 g.', false]
    ],
    ex: 'Normal: 4 Epithelkörperchen (je 30–70 mg, 2–7 mm); Hauptzellen (klar, glykogenreich), oxyphile Zellen; interstitielles Fett ~50 %.'
  },
  {
    id: 'k12-42', sec: '12.3', p: 41, type: 'single',
    q: 'Welche Hyperkalzämie geht mit supprimiertem PTH einher?',
    opts: ['Tumorhyperkalzämie (PTHrP, Osteolysen)', 'Primärer HPT', 'Tertiärer HPT'],
    a: 0,
    ex: 'DD Hyperkalzämie: Tumor (PTHrP, Osteolysen; PTH supprimiert!), Sarkoidose/Tbc (Calcitriol), Vitamin-D-Intoxikation, Immobilisation, Thiazide.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k12-t01', sec: '12.1', p: 39, type: 'tf', a: false, q: 'Die Struma colloides nodosa ist eine Präkanzerose.', ex: 'Struma colloides nodosa = knotige Kolloidstruma, keine Präkanzerose (Altfrage).' },
  { id: 'k12-t02', sec: '12.1', p: 39, type: 'tf', a: true, q: 'Strumigene Substanzen wie Lithium oder Thyreostatika können eine Struma verursachen.', ex: 'Strumigene Substanzen: Thiocyanat, Lithium, Thyreostatika, Kohlarten.' },
  { id: 'k12-t03', sec: '12.1', p: 39, type: 'tf', a: false, q: 'Beim M. Basedow sind die Follikel kolloidreich und gefüllt.', ex: 'Basedow: kolloidarme Follikel mit Randvakuolen (Altfrage 2009, 2013A).' },
  { id: 'k12-t04', sec: '12.1', p: 39, type: 'tf', a: true, q: 'Beim M. Basedow ist die Schilddrüse diffus vergrößert und „honigglänzend“.', ex: 'Basedow: diffus vergrößerte, „honigglänzende“ Drüse.' },
  { id: 'k12-t05', sec: '12.1', p: 39, type: 'tf', a: false, q: 'Die Hashimoto-Thyreoiditis führt typischerweise zur Hyperthyreose.', ex: 'Hashimoto → Hypothyreose (TSH ↑, T3/T4 ↓).' },
  { id: 'k12-t06', sec: '12.1', p: 39, type: 'tf', a: true, q: 'Die Hashimoto-Thyreoiditis ist ein Risikofaktor für das MALT-Lymphom.', ex: 'Hashimoto: RF für MALT-Lymphom.' },
  { id: 'k12-t07', sec: '12.1', p: 39, type: 'tf', a: true, q: 'Die Riedel-Struma ist eine fibrosierende (IgG4-)Thyreoiditis.', ex: 'Riedel-Struma: fibrosierend (IgG4).' },
  { id: 'k12-t08', sec: '12.1', p: 39, type: 'tf', a: false, q: 'Hypothalamus und Hypophyse spielen für die Schilddrüsenfunktion nur eine untergeordnete Rolle.', ex: 'Regelkreis TRH → TSH → T3/T4 mit negativer Rückkopplung (Altfrage).' },
  { id: 'k12-t09', sec: '12.2', p: 39, type: 'tf', a: true, q: 'Schilddrüsenkarzinome sind die häufigsten endokrinen Malignome.', ex: 'SD-Ca: häufigste endokrine Malignome, insgesamt aber selten (~4/100.000).' },
  { id: 'k12-t10', sec: '12.2', p: 39, type: 'tf', a: false, q: 'Das medulläre Karzinom ist der häufigste Schilddrüsenkarzinomtyp.', ex: 'Häufigster Typ: papillär (60–85 %); medullär 2–5 % (Altfrage 2008).' },
  { id: 'k12-t11', sec: '12.2', p: 39, type: 'tf', a: true, q: 'Das papilläre Karzinom zeigt Milchglaskerne, Kernfurchen und Kerneinschlüsse.', ex: 'PTC-Kernkriterien: Milchglaskerne, Kernfurchen, Pseudoinklusionen, Überlappung.' },
  { id: 'k12-t12', sec: '12.2', p: 39, type: 'tf', a: true, q: 'Das follikuläre Karzinom ist in Jodmangel- und Strumaendemiegebieten häufiger.', ex: 'FTC 10–30 % (häufiger in Jodmangelgebieten); PTC v. a. in Gebieten ohne Jodmangel.' },
  { id: 'k12-t13', sec: '12.2', p: 40, type: 'tf', a: false, q: 'Das papilläre SD-Karzinom metastasiert typischerweise hämatogen.', ex: 'PTC: lymphogen (Halslymphknoten); FTC: hämatogen.' },
  { id: 'k12-t14', sec: '12.2', p: 40, type: 'tf', a: false, q: 'RET-Keimbahnmutationen sind typisch für das follikuläre Karzinom.', ex: 'RET-Protoonkogen (Keimbahn bei MEN2/FMTC) → medulläres Ca (Altfrage 2008, 2015).' },
  { id: 'k12-t15', sec: '12.2', p: 40, type: 'tf', a: true, q: 'Bei jedem medullären SD-Karzinom ist eine RET-Analyse obligat.', ex: 'RET-Analyse bei jedem MTC obligat.' },
  { id: 'k12-t16', sec: '12.2', p: 39, type: 'tf', a: true, q: 'Das medulläre Karzinom enthält kongorotpositives Amyloid aus Calcitonin.', ex: 'MTC: Amyloid (aus Calcitonin, Kongorot+).' },
  { id: 'k12-t17', sec: '12.2', p: 39, type: 'tf', a: false, q: 'Das anaplastische SD-Karzinom tritt eher bei jungen Patienten auf.', ex: 'ATC: Ältere, ~70 J (Altfrage 2019).' },
  { id: 'k12-t18', sec: '12.2', p: 40, type: 'tf', a: true, q: 'Das anaplastische SD-Karzinom ist immer UICC-Stadium IV.', ex: 'ATC: immer UICC-Stadium IV.' },
  { id: 'k12-t19', sec: '12.2', p: 40, type: 'tf', a: false, q: 'Das follikuläre Karzinom ist zytologisch sicher vom follikulären Adenom zu unterscheiden.', ex: 'Die Diagnose erfordert die Kapsel-/Gefäßinvasion am OP-Präparat.' },
  { id: 'k12-t20', sec: '12.2', p: 40, type: 'tf', a: true, q: 'Ca. 10 % der kalten Schilddrüsenknoten sind maligne.', ex: '„Kalter“ und echoarmer Knoten malignomverdächtig (~10 % maligne).' },
  { id: 'k12-t21', sec: '12.2', p: 40, type: 'tf', a: false, q: 'Ein Schnellschnitt ist beim follikulären Karzinom grundsätzlich unmöglich.', ex: 'Der Schnellschnitt ist nur wenig treffsicher (Altfrage 2019).' },
  { id: 'k12-t22', sec: '12.2', p: 40, type: 'tf', a: true, q: 'Beim Schilddrüsenkarzinom gibt es kein histologisches Grading.', ex: 'Klassifikation: kein histologisches Grading; TNM/UICC.' },
  { id: 'k12-t23', sec: '12.2', p: 40, type: 'tf', a: false, q: 'Das papilläre SD-Karzinom wird wegen der guten Prognose nicht nach TNM gestaged.', ex: 'Das papilläre Ca wird sehr wohl nach TNM gestaged, aber nicht gegradet.' },
  { id: 'k12-t24', sec: '12.2', p: 40, type: 'tf', a: true, q: 'Das papilläre Karzinom wird mit Thyreoidektomie, Radiojod und L-Thyroxin behandelt.', ex: 'PTC/FTC: Thyreoidektomie + Radiojod + L-Thyroxin (TSH-Suppression).' },
  { id: 'k12-t25', sec: '12.2', p: 40, type: 'tf', a: false, q: 'Das medulläre Karzinom wird mit Radiojod behandelt.', ex: 'MTC: kein Radiojod (keine Jodspeicherung).' },
  { id: 'k12-t26', sec: '12.2', p: 39, type: 'tf', a: true, q: 'Das papilläre SD-Karzinom wächst häufig multifokal.', ex: 'PTC: multifokal (20–87 %).' },
  { id: 'k12-t27', sec: '12.2', p: 40, type: 'tf', a: true, q: 'Eine Recurrensparese beim SD-Karzinom entspricht einem T4-Stadium.', ex: 'T4 = Infiltration von Larynx, Trachea, Ösophagus, N. recurrens (lokal fortgeschritten).' },
  { id: 'k12-t28', sec: '12.3', p: 41, type: 'tf', a: false, q: 'Ein Nebenschilddrüsenadenom ist das Korrelat des sekundären HPT.', ex: 'Adenom = primärer HPT (Altfrage 2021, 2022).' },
  { id: 'k12-t29', sec: '12.3', p: 41, type: 'tf', a: true, q: 'Beim sekundären HPT sind alle 4 Nebenschilddrüsen hyperplastisch.', ex: 'Sekundärer HPT → Hyperplasie aller 4 Drüsen.' },
  { id: 'k12-t30', sec: '12.3', p: 41, type: 'tf', a: false, q: 'Zelluläre Atypien sind ein Kriterium des Nebenschilddrüsenadenoms.', ex: 'Atypien sind kein Kriterium (Altfrage 2023).' },
  { id: 'k12-t31', sec: '12.3', p: 41, type: 'tf', a: true, q: 'Eine Fettfärbung hilft, ein Adenom von normalem Nebenschilddrüsengewebe zu unterscheiden.', ex: 'Adenom fettarm/-frei; Fettfärbung hilft bei der Unterscheidung.' },
  { id: 'k12-t32', sec: '12.3', p: 41, type: 'tf', a: false, q: 'Das Nebenschilddrüsenkarzinom ist leicht vom Adenom zu unterscheiden.', ex: 'Karzinom: schwer vom Adenom zu unterscheiden.' },
  { id: 'k12-t33', sec: '12.3', p: 41, type: 'tf', a: true, q: 'Nierensteine bzw. eine Nephrokalzinose finden sich beim primären HPT in 40–50 %.', ex: 'Nephrolithiasis/Nephrokalzinose (40–50 %).' },
  { id: 'k12-t34', sec: '12.3', p: 41, type: 'tf', a: false, q: 'Beim primären HPT ist das Phosphat erhöht.', ex: 'pHPT: Phosphat ↓.' },
  { id: 'k12-t35', sec: '12.3', p: 41, type: 'tf', a: true, q: 'Bei der Tumorhyperkalzämie ist das PTH supprimiert.', ex: 'Tumor (PTHrP, Osteolysen; PTH supprimiert!).' },
  { id: 'k12-t36', sec: '12.3', p: 41, type: 'tf', a: true, q: 'Der primäre HPT ist mit MEN1 und MEN2A assoziiert.', ex: 'pHPT: Assoziation mit MEN1/MEN2A.' },
  { id: 'k12-t37', sec: '12.3', p: 41, type: 'tf', a: false, q: 'Bei einer Hyperplasie aller 4 Nebenschilddrüsen fällt das intraoperative PTH nach Entfernung einer Drüse um > 50 %.', ex: 'Kein Abfall → Hyperplasie/weiteres Adenom.' },
  { id: 'k12-t38', sec: '12.3', p: 41, type: 'tf', a: true, q: 'Sarkoidose und Tuberkulose können über Calcitriol eine Hyperkalzämie verursachen.', ex: 'DD Hyperkalzämie: Sarkoidose/Tbc (Calcitriol).' }
]);
