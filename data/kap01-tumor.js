/* Kapitel 1 – Tumorklassifikation, Molekularpathologie & Methoden (PDF S. 4–6) */
PQ.registerChapter(1, [

  /* ---------- 1.1 Tumorklassifikation: Typing, Grading, Staging ---------- */
  {
    id: 'k1-01', sec: '1.1', p: '4–5', type: 'single', alt: '2015, 2021',
    q: 'Welcher Parameter ist für das histologische Grading NICHT geeignet?',
    opts: ['Lymphknotenbefall', 'Anteil drüsiger Strukturen', 'Kernpolymorphie', 'Mitosen pro 10 HPF', 'Nekrosen'],
    a: 0,
    ex: 'Grading-Parameter: Anteil drüsiger Strukturen, Kerngröße/-polymorphie, Mitosen pro 10 HPF, Nekrosen. LK-Befall, Tumorgröße und Metastasen gehören zum Staging.'
  },
  {
    id: 'k1-02', sec: '1.1', p: '4–5', type: 'single', alt: '2023',
    q: 'Kopftumoren – welche Aussage ist FALSCH?',
    opts: [
      'Ein malignes Astrozytom wird nach TNM in Stadien eingeteilt.',
      'Ein Schwannom (WHO-Grad 1) ist benigne.',
      'Ein Plattenepithelkarzinom des Nasenrachens mit G1 ist maligne.',
      'Ein Plattenepithelkarzinom des Nasenrachens wird nach TNM gestaged.'
    ],
    a: 0,
    ex: 'ZNS-Tumoren: WHO-Grad 1–4, kein TNM; Grad 1 = benigne – anders als bei Karzinomen, wo G1 trotzdem maligne ist.'
  },
  {
    id: 'k1-03', sec: '1.1', p: 4, type: 'match',
    q: 'Ordne das Organ seinem Grading-System zu.',
    pairs: [
      ['Mamma', 'Elston & Ellis'],
      ['Prostata', 'Gleason/ISUP-Gradgruppen'],
      ['Niere', 'ISUP/WHO (Nukleolengröße)'],
      ['NET', 'Ki-67 + Mitosen'],
      ['Sarkome', 'FNCLCC']
    ],
    ex: 'Außerdem: Endometrium Typ I nach soliden Anteilen; Harnblase WHO (PUNLMP/low/high grade); ZNS WHO-Grad 1–4.'
  },
  {
    id: 'k1-04', sec: '1.1', p: 4, type: 'single',
    q: 'Bei welchem Tumor erfolgt KEIN histologisches Grading?',
    opts: ['Schilddrüsenkarzinom', 'Mammakarzinom', 'Prostatakarzinom', 'Nierenzellkarzinom'],
    a: 0,
    ex: 'Das Typing legt fest, ob überhaupt ein Grading erfolgt: kein Grading bei Schilddrüsen-Ca, Keimzelltumoren, Melanom der Haut.'
  },
  {
    id: 'k1-05', sec: '1.1', p: 4, type: 'single',
    q: 'Was bedeutet „high grade“ im zweistufigen Grading?',
    opts: ['G3 + G4', 'G1 + G2', 'Nur G4'],
    a: 0,
    ex: 'G1 gut, G2 mäßig, G3 schlecht differenziert, G4 undifferenziert; low grade = G1 + G2, high grade = G3 + G4.'
  },
  {
    id: 'k1-06', sec: '1.1', p: 4, type: 'single',
    q: 'Was legt das Typing (histologischer Typ nach WHO) unter anderem fest?',
    opts: ['Ob überhaupt ein Grading erfolgt', 'Das T-Stadium', 'Den Resektionsstatus (R)'],
    a: 0,
    ex: 'Typing: histologischer Typ nach WHO (ICD-O-3-M), Prinzip „Histogenese“; legt fest, ob ein Grading erfolgt. Das T-Stadium gehört zum Staging, der R-Status zur R-Klassifikation.'
  },
  {
    id: 'k1-07', sec: '1.1', p: 4, type: 'single',
    q: 'Was bestimmt, welche TNM-Klassifikation gilt?',
    opts: ['Die Lokalisation (ICD-O-3-Topographieschlüssel)', 'Das Grading', 'Der Ki-67-Index'],
    a: 0,
    ex: 'Lokalisation (ICD-O-3-Topographie) bestimmt, welche TNM-Klassifikation gilt.'
  },
  {
    id: 'k1-08', sec: '1.1', p: 4, type: 'single',
    q: 'Wie wird das Typ-I-Endometriumkarzinom gegradet?',
    opts: [
      'Nach soliden Anteilen: ≤ 5 % G1, 6–50 % G2, > 50 % G3',
      'Nach der Nukleolengröße',
      'Nach Gleason-Mustern'
    ],
    a: 0,
    ex: 'Endometrium Typ I nach soliden Anteilen (bei starker Kernatypie up-grading); Typ II immer high grade. Nukleolengröße → Niere; Gleason → Prostata.'
  },
  {
    id: 'k1-09', sec: '1.1', p: 4, type: 'single',
    q: 'Welche Aussage zur Klassifikation von ZNS-Tumoren trifft zu?',
    opts: [
      'WHO-Grad 1 ist benigne; ein TNM gibt es nicht.',
      'Grad 1 ist wie bei Karzinomen maligne.',
      'ZNS-Tumoren werden nach TNM gestaged.'
    ],
    a: 0,
    ex: 'ZNS: WHO-Grad 1–4, Grad 1 = benigne; kein TNM.'
  },

  /* ---------- 1.2 TNM-System und R-Klassifikation ---------- */
  {
    id: 'k1-10', sec: '1.2', p: '4–5', type: 'single',
    q: 'Was bedeutet R2?',
    opts: [
      'Makroskopischer Residualtumor',
      'Erst mit Immunhistochemie mikroskopisch nachweisbarer Residualtumor',
      'Mikroskopischer Residualtumor am Rand',
      'Kein Residualtumor'
    ],
    a: 0,
    ex: 'R2 = makroskopischer Residualtumor (R2a makroskopisch, R2b makroskopisch + mikroskopisch bestätigt). In einer Altfrage war „erst mit IHC nachweisbar“ falsch.'
  },
  {
    id: 'k1-11', sec: '1.2', p: 4, type: 'match',
    q: 'Ordne die R-Klassifikation ihrer Bedeutung zu.',
    pairs: [
      ['RX', 'Nicht beurteilbar'],
      ['R0', 'Kein Residualtumor'],
      ['R1', 'Mikroskopischer Residualtumor am Rand'],
      ['R2', 'Makroskopischer Residualtumor']
    ],
    ex: 'RX z. B., wenn der Tumor in mehreren Fragmenten eingesandt wurde.'
  },
  {
    id: 'k1-12', sec: '1.2', p: 4, type: 'match',
    q: 'Ordne das TNM-Präfix seiner Bedeutung zu.',
    pairs: [
      ['c', 'Klinisch (Bildgebung, intraoperativ)'],
      ['p', 'Pathologisch (am Resektat)'],
      ['y', 'Nach neoadjuvanter Therapie'],
      ['r', 'Rezidiv'],
      ['a', 'Autopsie']
    ],
    ex: 'T = Primärtumor, N = regionäre Lymphknoten, M = Fernmetastasen; optional L, V, Pn.'
  },
  {
    id: 'k1-13', sec: '1.2', p: 4, type: 'single',
    q: 'Wann gilt der zirkumferentielle Resektionsrand (CRM) als positiv?',
    opts: ['Bei einem Tumorabstand ≤ 1 mm', 'Erst bei Tumor direkt am Rand', 'Bei einem Tumorabstand ≤ 1 cm'],
    a: 0,
    ex: 'CRM-Konzept (Rektum, Pankreas): Tumorabstand zum zirkumferentiellen Resektionsrand ≤ 1 mm = CRM+ (prognostisch ungünstig).'
  },
  {
    id: 'k1-14', sec: '1.2', p: 4, type: 'single',
    q: 'Was bedeutet pM1c beim kolorektalen Karzinom?',
    opts: ['Peritonealmetastasen', 'Metastasen in einem Organ', 'Metastasen in mehr als einem Organ'],
    a: 0,
    ex: 'KRK: pM1a = 1 Organ, pM1b = > 1 Organ, pM1c = Peritoneum; pMX ist obsolet.'
  },
  {
    id: 'k1-15', sec: '1.2', p: 4, type: 'single',
    q: 'Wofür stehen L, V und Pn in der TNM-Klassifikation?',
    opts: [
      'Lymphgefäß-, Venen- und Perineuralinvasion',
      'Lokalisation, Volumen und Pleomorphie',
      'Lymphknoten, Vaskulitis und Nekrose'
    ],
    a: 0,
    ex: 'Optional L (Lymphgefäß-), V (Venen-) und Pn (Perineuralinvasion).'
  },

  /* ---------- 1.3 Biomarker, prädiktive Faktoren, EGFR/KRAS ---------- */
  {
    id: 'k1-16', sec: '1.3', p: 5, type: 'single', alt: '2018, 2020, 2025',
    q: 'Welche Kombination ist KEINE typische Indikation für einen prädiktiven Faktor?',
    opts: ['Malignes Melanom: c-KIT', 'Magenkarzinom: HER2', 'Kolorektales Karzinom: KRAS', 'NSCLC: EGFR', 'Mammakarzinom: ER/PR'],
    a: 0,
    ex: 'Beim Melanom wird typischerweise BRAF (V600E) bzw. NRAS getestet; c-KIT nur bei akralen/mukosalen Melanomen.'
  },
  {
    id: 'k1-17', sec: '1.3', p: 5, type: 'kprim',
    q: 'EGFR und KRAS – welche Aussagen treffen zu?',
    st: [
      ['Eine EGFR-Mutation führt meist zu seiner Inaktivierung.', false],
      ['Eine KRAS-Mutation hemmt die Proliferation.', false],
      ['Eine niedrige EGFR-Expression ist mit Invasion, Metastasen und schlechter Prognose assoziiert.', false],
      ['Eine KRAS-Mutation beim KRK ist prognostisch ungünstiger.', true]
    ],
    ex: 'So in Altfragen gefragt. EGFR-Mutation → zunehmende Aktivierung. KRAS-Mutation → Dauer-Aktivierung → ungehemmte Proliferation. Ungünstig ist eine HOHE EGFR-Expression.'
  },
  {
    id: 'k1-18', sec: '1.3', p: 5, type: 'kprim',
    q: 'Lungenkarzinom – welche Aussagen treffen zu?',
    st: [
      ['Beim NSCLC wird ein EGFR-Test empfohlen.', true],
      ['Ein EML4-ALK-Test ist bei einem Teil der NSCLC sinnvoll.', true],
      ['In Europa haben ca. 12–15 % der NSCLC eine EGFR-Mutation.', true],
      ['Das kleinzellige Karzinom hat eine bessere Prognose als das NSCLC.', false]
    ],
    ex: 'So in Altfragen gefragt. Das NSCLC hat eine etwas bessere Prognose als das SCLC.'
  },
  {
    id: 'k1-19', sec: '1.3', p: 4, type: 'single',
    q: 'Was ist ein prädiktiver Marker?',
    opts: [
      'Ein Marker, der das Ansprechen auf eine Therapie voraussagt',
      'Ein Marker für das progressionsfreie bzw. Gesamtüberleben',
      'Ein Marker für die anatomische Ausbreitung (Staging)'
    ],
    a: 0,
    ex: 'Prädiktiver Marker = Grundlage der „Targeted Therapy“. Aussagen über das Überleben macht ein prognostischer Marker (z. B. Stadium, Grading, Ki-67).'
  },
  {
    id: 'k1-20', sec: '1.3', p: 4, type: 'match',
    q: 'Ordne den Begriff seiner Definition zu.',
    pairs: [
      ['Biomarker', 'Objektiv messbares Merkmal, das auf einen normalen oder krankhaften Prozess hinweist'],
      ['Prognostischer Marker', 'Aussage über progressionsfreies bzw. Gesamtüberleben'],
      ['Prädiktiver Marker', 'Sagt das Ansprechen auf eine Therapie voraus']
    ],
    ex: 'Biomarker: Zellen, Gene, Genprodukte, Moleküle wie Enzyme/Hormone.'
  },
  {
    id: 'k1-21', sec: '1.3', p: 5, type: 'match',
    q: 'Ordne den Tumor seinem prädiktiven Faktor zu.',
    pairs: [
      ['Kolorektales Karzinom', 'RAS-Wildtyp → anti-EGFR-Antikörper'],
      ['NSCLC', 'EGFR-Mutation, EML4-ALK, ROS1'],
      ['Malignes Melanom', 'BRAF V600E'],
      ['GIST', 'c-KIT/PDGFRA → Imatinib'],
      ['Mammakarzinom', 'ER/PR, HER2']
    ],
    ex: 'KRK außerdem BRAF und MSI-H (→ Immuntherapie); NSCLC außerdem BRAF, KRAS G12C, PD-L1.'
  },
  {
    id: 'k1-22', sec: '1.3', p: 5, type: 'single',
    q: 'In welcher Reihenfolge läuft der EGFR-Signalweg ab?',
    opts: [
      'EGFR → KRAS → RAS/MAPK → Cyclin D → Proliferation',
      'KRAS → EGFR → Cyclin D → RAS/MAPK → Proliferation',
      'RAS/MAPK → EGFR → KRAS → Proliferation'
    ],
    a: 0,
    ex: 'EGFR (Rezeptor-Tyrosinkinase) → KRAS (G-Protein downstream) → RAS/MAPK (Serin-Threonin-Kinasen) → Cyclin-D-Synthese → Proliferation.'
  },
  {
    id: 'k1-23', sec: '1.3', p: 5, type: 'single',
    q: 'Warum wirken EGFR-Inhibitoren bei einer KRAS-Mutation nicht?',
    opts: [
      'Weil das Signal unterhalb des EGFR-Blocks dauerhaft weiterläuft',
      'Weil die KRAS-Mutation den EGFR inaktiviert',
      'Weil die KRAS-Mutation die Proliferation hemmt'
    ],
    a: 0,
    ex: 'KRAS-Mutation → Dauer-Aktivierung; das Signal läuft unterhalb des EGFR-Blocks weiter. Die Ansprechrate ist bei KRAS-Wildtyp höher.'
  },
  {
    id: 'k1-24', sec: '1.3', p: 5, type: 'single',
    q: 'Bei welchen NSCLC-Patienten findet man eher eine EGFR-Mutation?',
    opts: ['Nichtraucher mit Adenokarzinom', 'Raucher', 'Patienten mit kleinzelligem Karzinom'],
    a: 0,
    ex: 'NSCLC: Raucher → eher KRAS, Nichtraucher → eher EGFR-Mutation/Amplifikation (Adeno-Ca; in Europa 10–15 % der NSCLC).'
  },
  {
    id: 'k1-25', sec: '1.3', p: 5, type: 'single',
    q: 'In welcher Reihenfolge erfolgt die KRAS-Bestimmung?',
    opts: [
      'Tumorhaltiger Block → Anreicherung → DNA-Isolation → PCR → Mutationsdetektion',
      'PCR → DNA-Isolation → Anreicherung → Mutationsdetektion',
      'Mutationsdetektion → PCR → DNA-Isolation → Anreicherung'
    ],
    a: 0,
    ex: 'KRAS-Bestimmung: tumorhaltiger Gewebeblock → Anreicherung (Dissektion) → DNA-Isolation/Reinigung → PCR-Amplifikation → Mutationsdetektion.'
  },
  {
    id: 'k1-26', sec: '1.3', p: 5, type: 'single',
    q: 'Bei welchen Melanomen ist c-KIT als prädiktiver Marker relevant?',
    opts: ['Bei akralen und mukosalen Melanomen', 'Bei allen kutanen Melanomen', 'Bei keinem Melanom'],
    a: 0,
    ex: 'Malignes Melanom: BRAF (V600E), NRAS; c-KIT nur bei akralen/mukosalen Melanomen.'
  },
  {
    id: 'k1-27', sec: '1.3', p: 5, type: 'single',
    q: 'Was ist der häufigste Mediastinaltumor beim Erwachsenen > 50 Jahre?',
    opts: ['Thymom', 'Lymphom', 'Keimzelltumor', 'Teratom'],
    a: 0,
    ex: 'Erwachsene > 50 J: Thymom; junge Erwachsene: Lymphom, Keimzelltumor. „4 T“: Thymom, Teratom, T-Lymphom, Thyroidea.'
  },
  {
    id: 'k1-28', sec: '1.3', p: 5, type: 'single',
    q: 'Welche Besonderheit hat die HER2-Testung beim Magen-/GÖÜ-Adenokarzinom?',
    opts: [
      'Andere Auswertekriterien und höhere intratumorale Heterogenität als beim Mammakarzinom',
      'HER2 spielt dort keine Rolle',
      'Die Auswertung ist einfacher als beim Mammakarzinom'
    ],
    a: 0,
    ex: 'Magen/GÖÜ: HER2 mit anderen Auswertekriterien, höherer intratumoraler Heterogenität als bei Mamma; IHC teils prädiktiver als FISH.'
  },

  /* ---------- 1.4 Färbungen & Immunhistochemie ---------- */
  {
    id: 'k1-29', sec: '1.4', p: 5, type: 'single',
    q: 'Welche Färbung stellt Mykobakterien dar?',
    opts: ['Ziehl-Neelsen', 'Grocott', 'Warthin-Starry', 'Gram', 'Giemsa'],
    a: 0,
    ex: 'So in einer Altfrage gefragt. Ziehl-Neelsen: säurefeste Stäbchen (Mykobakterien, Nocardien schwach). Grocott → Pilze, Pneumocystis; Warthin-Starry → Spirochäten, H. pylori.'
  },
  {
    id: 'k1-30', sec: '1.4', p: '5–6', type: 'kprim',
    q: 'Immunhistochemie – welche Aussagen treffen zu?',
    st: [
      ['Sie beruht auf einer Antigen-Antikörper-Reaktion.', true],
      ['Eine Signalverstärkung ist üblich.', true],
      ['Beim NSCLC unterscheidet sie Adeno- (TTF-1, Napsin A) und Plattenepithelkarzinom (p40, CK5/6).', true],
      ['Ki-67 markiert ruhende Zellen in der G0-Phase.', false]
    ],
    ex: 'Die ersten drei Aussagen stammen aus einer Altfrage (✓). Ki-67 = Proliferationsindex (Zellen außerhalb G0).'
  },
  {
    id: 'k1-31', sec: '1.4', p: 5, type: 'match',
    q: 'Ordne die Färbung ihrem Nachweis zu.',
    pairs: [
      ['PAS', 'Glykogen, Schleim, Pilze, M. Whipple'],
      ['Grocott', 'Pilze, Pneumocystis'],
      ['Warthin-Starry', 'Spirochäten, H. pylori, Bartonellen'],
      ['Kongorot', 'Amyloid (apfelgrüne Doppelbrechung)'],
      ['Berliner Blau', 'Eisen/Hämosiderin']
    ],
    ex: 'Weitere: Giemsa (Hämatologie, Mastzellen, H. pylori), Elastica-van-Gieson (elastische Fasern/Kollagen), Fettfärbung (z. B. NSD-Adenom).'
  },
  {
    id: 'k1-32', sec: '1.4', p: 6, type: 'match',
    q: 'Ordne den Immunmarker seiner Zuordnung zu.',
    pairs: [
      ['TTF-1, Napsin A', 'Lungen-Adenokarzinom'],
      ['p40, CK5/6', 'Plattenepithelkarzinom'],
      ['Synaptophysin, Chromogranin A', 'Neuroendokrine Tumoren'],
      ['Calretinin, WT1, D2-40', 'Mesotheliom'],
      ['CD30, CD15', 'Hodgkin-/Reed-Sternberg-Zellen']
    ],
    ex: 'TTF-1 auch Schilddrüse; CD56 ebenfalls neuroendokrin (SCLC, NET).'
  },
  {
    id: 'k1-33', sec: '1.4', p: 6, type: 'match',
    q: 'Ordne das CK7/CK20-Profil dem Tumor zu.',
    pairs: [
      ['CK7+/CK20−', 'Lunge, Mamma, Gallenwege'],
      ['CK7−/CK20+', 'Kolorektales Karzinom'],
      ['CK7−/CK20−', 'HCC']
    ],
    ex: 'CCC auch CK19; HCC: HepPar1, Glypican-3.'
  },
  {
    id: 'k1-34', sec: '1.4', p: 6, type: 'single',
    q: 'Welche Marker sprechen für ein Melanom?',
    opts: ['S100, SOX10, HMB45, Melan-A', 'CD31, CD34, ERG', 'Desmin, Myogenin'],
    a: 0,
    ex: 'Melanom: S100, SOX10, HMB45, Melan-A (S100 auch Schwannom). CD31/CD34/ERG → Gefäße; Desmin/Myogenin → Muskulatur.'
  },
  {
    id: 'k1-35', sec: '1.4', p: 6, type: 'single',
    q: 'Welcher Marker ist nur in Skelettmuskulatur (nicht in glatter Muskulatur) positiv?',
    opts: ['Myogenin', 'Desmin', 'CD117'],
    a: 0,
    ex: 'Desmin: glatte + Skelettmuskulatur; Myogenin: nur Skelettmuskel (Rhabdomyosarkom). CD117 → GIST, Mastzellen, Seminom.'
  },
  {
    id: 'k1-36', sec: '1.4', p: 6, type: 'single',
    q: 'Welcher Immunbefund spricht für ein Prostatakarzinom?',
    opts: ['AMACR+, Basalzellen (CK5/14, p63) fehlen', 'Thyreoglobulin+', 'Calretinin+'],
    a: 0,
    ex: 'Prostata: PSA, AMACR (P504S; PIN + Karzinom); beim Karzinom fehlen die Basalzellen. Thyreoglobulin → follikuläres SD-Ca; Calretinin → Mesotheliom.'
  },
  {
    id: 'k1-37', sec: '1.4', p: 5, type: 'single',
    q: 'Mit welcher Färbung wird Amyloid nachgewiesen?',
    opts: ['Kongorot (apfelgrüne Doppelbrechung im polarisierten Licht)', 'Berliner Blau', 'Elastica-van-Gieson'],
    a: 0,
    ex: 'Kongorot: Amyloid rot, im polarisierten Licht apfelgrüne Doppelbrechung. Berliner Blau → Eisen; EvG → elastische Fasern/Kollagen.'
  },

  /* ---------- 1.5 Metastasierungsmuster ---------- */
  {
    id: 'k1-38', sec: '1.5', p: 6, type: 'match',
    q: 'Ordne die Metastase ihrem typischen Primärtumor zu.',
    pairs: [
      ['Krukenberg-Tumor (Ovar)', 'Siegelringzell-Ca des Magens'],
      ['Osteoblastische Knochenmetastasen', 'Prostatakarzinom'],
      ['Häufigste Hirnmetastasen', 'Bronchialkarzinom (v. a. SCLC)'],
      ['Lebermetastasen (laut Altfrage am häufigsten)', 'Dickdarmkarzinom']
    ],
    ex: 'Nebenniere: v. a. kleinzelliges Bronchial-Ca, Mamma, Melanom. Ovar außerdem Mamma (lobulär), Kolon.'
  },
  {
    id: 'k1-39', sec: '1.5', p: 6, type: 'single',
    q: 'In welchem Verhältnis stehen Lebermetastasen zu primären Lebertumoren?',
    opts: ['40 : 1', '1 : 1', '1 : 40'],
    a: 0,
    ex: 'Leber: Metastase : primär = 40 : 1; Dickdarm > Mamma > Schilddrüse (Altfrage).'
  },
  {
    id: 'k1-40', sec: '1.5', p: 6, type: 'single',
    q: 'Welche Primärtumoren verursachen typischerweise osteolytische Knochenmetastasen?',
    opts: ['Niere, Schilddrüse, Lunge', 'Prostata', 'Keine – Knochenmetastasen sind immer osteoblastisch'],
    a: 0,
    ex: 'Osteoblastisch: Prostata; osteolytisch: Niere, Schilddrüse, Lunge, Mamma (oft gemischt).'
  },
  {
    id: 'k1-41', sec: '1.5', p: 6, type: 'single',
    q: 'Welche Primärtumoren führen selten zu Hirnmetastasen?',
    opts: ['Gallenblase und Prostata', 'Bronchialkarzinom', 'Mammakarzinom'],
    a: 0,
    ex: 'Gehirn: Bronchial-Ca (40–50 %) > Mamma (15–20 %) > Melanom (5–20 %) > Niere (5–10 %); selten Gallenblase, Prostata.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k1-t01', sec: '1.1', p: 4, type: 'tf', a: false, q: 'Der Lymphknotenbefall ist ein Grading-Parameter.', ex: 'LK-Befall gehört zum Staging (Altfrage 2015, 2021).' },
  { id: 'k1-t02', sec: '1.1', p: 4, type: 'tf', a: true, q: 'Beim Melanom der Haut erfolgt kein Grading.', ex: 'Kein Grading bei Schilddrüsen-Ca, Keimzelltumoren, Melanom der Haut.' },
  { id: 'k1-t03', sec: '1.1', p: 4, type: 'tf', a: true, q: 'Die endgültige Typisierung erfolgt oft erst am Resektat, nicht an der Biopsie.', ex: 'Endgültige Typisierung oft erst am Resektat.' },
  { id: 'k1-t04', sec: '1.1', p: 4, type: 'tf', a: false, q: 'Bei Karzinomen ist ein G1-Tumor benigne.', ex: 'Bei Karzinomen ist G1 trotzdem maligne; benigne ist Grad 1 nur bei ZNS-Tumoren.' },
  { id: 'k1-t05', sec: '1.1', p: 4, type: 'tf', a: true, q: 'Das Staging ist die wichtigste Grundlage für Prognose und stadienadaptierte Therapie.', ex: 'Staging: TNM (UICC) bzw. FIGO.' },
  { id: 'k1-t06', sec: '1.1', p: 4, type: 'tf', a: false, q: 'Ein Typ-II-Endometriumkarzinom mit wenigen soliden Anteilen wird als G1 eingestuft.', ex: 'Typ II ist immer high grade.' },
  { id: 'k1-t07', sec: '1.1', p: 4, type: 'tf', a: true, q: 'Harnblasentumoren werden nach WHO in PUNLMP, low grade und high grade eingeteilt.', ex: 'Harnblase: WHO PUNLMP / low grade / high grade.' },
  { id: 'k1-t08', sec: '1.2', p: '4–5', type: 'tf', a: false, q: 'R2 bezeichnet einen erst immunhistochemisch nachweisbaren Residualtumor.', ex: 'R2 = makroskopischer Residualtumor (Altfrage).' },
  { id: 'k1-t09', sec: '1.2', p: 4, type: 'tf', a: true, q: 'R1 bedeutet mikroskopischer Residualtumor am Resektionsrand.', ex: 'R1: mikroskopischer Residualtumor am Rand.' },
  { id: 'k1-t10', sec: '1.2', p: 4, type: 'tf', a: true, q: 'Das Präfix y kennzeichnet ein Stadium nach neoadjuvanter Therapie.', ex: 'y = nach neoadjuvanter (multimodaler) Therapie.' },
  { id: 'k1-t11', sec: '1.2', p: 4, type: 'tf', a: false, q: 'pMX ist beim kolorektalen Karzinom weiterhin gebräuchlich.', ex: 'pMX ist obsolet.' },
  { id: 'k1-t12', sec: '1.2', p: 4, type: 'tf', a: true, q: 'RX liegt z. B. vor, wenn ein Tumor in mehreren Fragmenten eingesandt wurde.', ex: 'RX: nicht beurteilbar (z. B. Tumor in mehreren Fragmenten).' },
  { id: 'k1-t13', sec: '1.2', p: 4, type: 'tf', a: false, q: 'Ein positiver zirkumferentieller Resektionsrand (CRM+) ist prognostisch günstig.', ex: 'CRM+ (≤ 1 mm) ist prognostisch ungünstig.' },
  { id: 'k1-t14', sec: '1.3', p: 4, type: 'tf', a: true, q: 'Prädiktive Marker sind die Grundlage der „Targeted Therapy“.', ex: 'Prädiktiver Marker: sagt das Ansprechen auf eine Therapie voraus.' },
  { id: 'k1-t15', sec: '1.3', p: 5, type: 'tf', a: false, q: 'Eine EGFR-Mutation führt meist zur Inaktivierung des Rezeptors.', ex: 'EGFR-Mutation → Konformationsänderung → zunehmende Aktivierung (Altfrage).' },
  { id: 'k1-t16', sec: '1.3', p: 5, type: 'tf', a: true, q: 'Eine hohe EGFR-Expression ist mit Invasion, Metastasierung und Chemoresistenz assoziiert.', ex: 'Hohe EGFR-Expression/-Aktivität → Invasion, Metastasierung, Chemoresistenz, ungünstige Prognose.' },
  { id: 'k1-t17', sec: '1.3', p: 5, type: 'tf', a: false, q: 'Eine KRAS-Mutation hemmt die Proliferation.', ex: 'KRAS-Mutation → Dauer-Aktivierung → ungehemmte Proliferation (Altfrage).' },
  { id: 'k1-t18', sec: '1.3', p: 5, type: 'tf', a: true, q: 'Anti-EGFR-Antikörper (Cetuximab, Panitumumab) wirken beim KRK nur bei RAS-Wildtyp.', ex: 'KRK: RAS (KRAS/NRAS) – nur bei Wildtyp anti-EGFR-AK.' },
  { id: 'k1-t19', sec: '1.3', p: 5, type: 'tf', a: true, q: 'KRAS ist ein G-Protein downstream des EGFR.', ex: 'KRAS: G-Protein, Mediator downstream des EGFR.' },
  { id: 'k1-t20', sec: '1.3', p: 5, type: 'tf', a: false, q: 'Beim malignen Melanom ist c-KIT der typische prädiktive Marker.', ex: 'Typisch ist BRAF; c-KIT nur bei akralen/mukosalen Melanomen (Altfrage 2018, 2020, 2025).' },
  { id: 'k1-t21', sec: '1.3', p: 5, type: 'tf', a: true, q: 'Ein MSI-H-Status beim KRK ist prädiktiv für eine Immuntherapie.', ex: 'KRK: MSI-H → Immuntherapie.' },
  { id: 'k1-t22', sec: '1.3', p: 5, type: 'tf', a: false, q: 'Das kleinzellige Lungenkarzinom hat eine bessere Prognose als das NSCLC.', ex: 'Das NSCLC hat eine etwas bessere Prognose (Altfrage).' },
  { id: 'k1-t23', sec: '1.3', p: 5, type: 'tf', a: true, q: 'Beim Magen-/GÖÜ-Adenokarzinom ist die HER2-IHC teils prädiktiver als die FISH.', ex: 'Magen/GÖÜ: IHC teils prädiktiver als FISH.' },
  { id: 'k1-t24', sec: '1.3', p: 5, type: 'tf', a: true, q: 'Die „4 T“ des vorderen Mediastinums sind Thymom, Teratom, T-Lymphom und Thyroidea.', ex: '„4 T“: Thymom, Teratom, T-Lymphom, Thyroidea.' },
  { id: 'k1-t25', sec: '1.4', p: 5, type: 'tf', a: true, q: 'CMV-Eulenaugenzellen sind schon in der HE-Färbung sichtbar.', ex: 'HE: Standard; CMV-Eulenaugenzellen schon in HE sichtbar.' },
  { id: 'k1-t26', sec: '1.4', p: 5, type: 'tf', a: false, q: 'Pneumocystis wird mit der Ziehl-Neelsen-Färbung dargestellt.', ex: 'Pneumocystis → Grocott. Ziehl-Neelsen → säurefeste Stäbchen.' },
  { id: 'k1-t27', sec: '1.4', p: 5, type: 'tf', a: true, q: 'H. pylori lässt sich mit Giemsa und Warthin-Starry darstellen.', ex: 'Giemsa: Hämatologie, Mastzellen, H. pylori; Warthin-Starry: Spirochäten, H. pylori, Bartonellen.' },
  { id: 'k1-t28', sec: '1.4', p: 5, type: 'tf', a: false, q: 'Amyloid zeigt in der Kongorotfärbung im polarisierten Licht eine rote Doppelbrechung.', ex: 'Kongorot: rot, im polarisierten Licht apfelgrüne Doppelbrechung.' },
  { id: 'k1-t29', sec: '1.4', p: 5, type: 'tf', a: true, q: 'Die Elastica-van-Gieson-Färbung stellt elastische Fasern und Kollagen dar.', ex: 'EvG: elastische Fasern/Kollagen (Gefäße, Zirrhose).' },
  { id: 'k1-t30', sec: '1.4', p: 6, type: 'tf', a: false, q: 'TTF-1 ist ausschließlich im Lungen-Adenokarzinom positiv.', ex: 'TTF-1 auch Schilddrüse.' },
  { id: 'k1-t31', sec: '1.4', p: 6, type: 'tf', a: true, q: 'CD117 (KIT) ist auch in Mastzellen und Seminomen positiv.', ex: 'CD117 (KIT), DOG1: GIST (CD117 auch Mastzellen, Seminom).' },
  { id: 'k1-t32', sec: '1.4', p: 6, type: 'tf', a: false, q: 'S100 ist spezifisch für Melanome.', ex: 'S100 auch beim Schwannom positiv.' },
  { id: 'k1-t33', sec: '1.4', p: 6, type: 'tf', a: true, q: 'Ki-67 markiert Zellen außerhalb der G0-Phase.', ex: 'Ki-67 = Proliferationsindex (Zellen außerhalb G0).' },
  { id: 'k1-t34', sec: '1.5', p: 6, type: 'tf', a: false, q: 'Knochenmetastasen des Prostatakarzinoms sind typischerweise osteolytisch.', ex: 'Prostata → osteoblastisch.' },
  { id: 'k1-t35', sec: '1.5', p: 6, type: 'tf', a: true, q: 'Der Krukenberg-Tumor ist eine Ovarmetastase eines Siegelringzellkarzinoms des Magens.', ex: 'Ovar: Krukenberg-Tumor (Siegelringzell-Ca des Magens), Mamma (lobulär), Kolon.' }
]);
