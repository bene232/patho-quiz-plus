/* Kapitel 3 – Hämatopathologie: Knochenmark, Leukämien, Lymphome (PDF S. 10–11) */
PQ.registerChapter(3, [

  /* ---------- 3.1 Knochenmark ---------- */
  {
    id: 'k3-01', sec: '3.1', p: 10, type: 'single',
    q: 'In welchem Verhältnis stehen Granulopoese und Erythropoese im normalen Knochenmark?',
    opts: ['Granulopoese : Erythropoese ≈ 3 : 1', 'Granulopoese : Erythropoese ≈ 1 : 3', 'Granulopoese : Erythropoese ≈ 1 : 1'],
    a: 0,
    ex: 'Normalbefund: Granulopoese : Erythropoese ≈ 3 : 1; Megakaryozyten einzeln, reif; Lymphozyten < 20 %, Plasmazellen < 5 %, Blasten < 5 %.'
  },
  {
    id: 'k3-02', sec: '3.1', p: 10, type: 'match',
    q: 'Ordne den Parameter dem Normalbefund des Knochenmarks zu.',
    pairs: [
      ['Zellularität (Erwachsene)', 'Ca. 50 % Zellen : 50 % Fett'],
      ['Lymphozyten', '< 20 %'],
      ['Plasmazellen', '< 5 %'],
      ['Granulopoese : Erythropoese', '≈ 3 : 1']
    ],
    ex: 'Die Zellularität ist altersabhängig (im Alter fettreicher). Blasten < 5 %.'
  },
  {
    id: 'k3-03', sec: '3.1', p: 10, type: 'match',
    q: 'Ordne die Untersuchungsmethode des Knochenmarks ihrer Aussage zu.',
    pairs: [
      ['Aspirationszytologie', 'Ausstrich, Giemsa'],
      ['Beckenkammstanze', 'Zellularität, Fasern, Architektur'],
      ['Durchflusszytometrie', 'Immunphänotyp'],
      ['Molekulargenetik (PCR)', 'BCR-ABL, JAK2']
    ],
    ex: 'Außerdem Zytogenetik/FISH.'
  },
  {
    id: 'k3-04', sec: '3.1', p: 10, type: 'single',
    q: 'Wie verändert sich das Knochenmark bei akut-entzündlichen Erkrankungen?',
    opts: ['Die Granulopoese ist gesteigert.', 'Alle drei Reihen sind vermindert.', 'Nur die Erythropoese ist gesteigert.'],
    a: 0,
    ex: 'Reaktive Veränderungen: bei akut-entzündlichen Erkrankungen ist die Granulopoese gesteigert (nicht alle drei Reihen vermindert – Altfrage 2009).'
  },
  {
    id: 'k3-05', sec: '3.1', p: 10, type: 'kprim',
    q: 'Welche der folgenden sind Indikationen zur Knochenmarkpunktion?',
    st: [
      ['Unklare Zytopenie', true],
      ['Lymphom-Staging', true],
      ['Verdacht auf Plasmozytom', true],
      ['Metastasensuche', true]
    ],
    ex: 'Alle vier treffen zu. Weitere Indikationen: unklare Zytose, V. a. Leukämie, MDS, MPN, unklares Fieber, Speicherkrankheiten.'
  },

  /* ---------- 3.2 Myeloische Neoplasien ---------- */
  {
    id: 'k3-06', sec: '3.2', p: 10, type: 'kprim', alt: '2010, 2013',
    q: 'CML und CLL – welche Aussagen treffen zu?',
    st: [
      ['Bei der CML findet sich die t(9;22) mit BCR-ABL.', true],
      ['Das Richter-Syndrom ist eine Transformation der CLL.', true],
      ['Die CLL exprimiert B-Zell-Antigene.', true],
      ['CML und Polycythaemia vera gehören zu den MPN.', true]
    ],
    ex: 'Alle vier treffen zu. Richter-Syndrom = Transformation der CLL in ein hochmalignes (DLBCL-)Lymphom.'
  },
  {
    id: 'k3-07', sec: '3.2', p: 10, type: 'single', alt: '2008',
    q: 'CLL – welche Aussage ist FALSCH?',
    opts: [
      'Die CLL zeigt meist T-Zell-Antigene.',
      'Die CLL ist die häufigste Leukämie des Erwachsenen.',
      'Typisch sind Gumprecht-Kernschatten.',
      'Die Zellen sind CD5- und CD23-positiv.'
    ],
    a: 0,
    ex: 'CLL: kleine reife B-Zellen (CD5+, CD23+, CD20 schwach); keine T-Zell-Antigene.'
  },
  {
    id: 'k3-08', sec: '3.2', p: 10, type: 'single', alt: '2012, 2013, 2024',
    q: 'AML – welche Aussage ist FALSCH?',
    opts: [
      'Sie geht fast immer (98 %) mit einem Philadelphia-Chromosom einher.',
      'Die Splenomegalie ist geringer als bei der CML.',
      'Sie kann aus einer CML entstehen.',
      'Im Knochenmark finden sich Myeloblasten.'
    ],
    a: 0,
    ex: 'AML: ≥ 20 % Blasten; aus MDS oder CML (Blastenkrise); Splenomegalie seltener und schwächer als bei CML; das Philadelphia-Chromosom ist NICHT typisch.'
  },
  {
    id: 'k3-09', sec: '3.2', p: 10, type: 'single', alt: '2015, 2020, 2021',
    q: 'Myeloische Neoplasien – welche Aussage ist FALSCH?',
    opts: [
      'Bei der primären Myelofibrose geht die normale Hämatopoese direkt in das Fibrosestadium über.',
      'JAK2 ist ein Marker der MPN.',
      'Bei der Polycythaemia vera sind alle 3 Reihen vermehrt.',
      'Bei der CML ist die Granulopoese vermehrt.',
      'Eine AML liegt ab ≥ 20 % Blasten im Knochenmark vor.'
    ],
    a: 0,
    ex: 'PMF: zuerst präfibrotisch-hyperzellulär, dann Fibrose – kein direkter Übergang; erst Leuko-/Thrombozytose, dann Panzytopenie.'
  },
  {
    id: 'k3-10', sec: '3.2', p: '10–11', type: 'single', alt: '2009',
    q: 'Hämatopoese bei myeloischen Neoplasien – welche Aussage trifft zu?',
    opts: [
      'Bei der CML ist die Granulopoese gesteigert.',
      'Bei der Polycythaemia vera ist nur die Erythropoese gesteigert.',
      'Bei der essentiellen Thrombozythämie sind alle Reihen gesteigert.',
      'Bei akuter Entzündung sind alle Reihen vermindert.'
    ],
    a: 0,
    ex: 'CML: Granulopoese stark vermehrt (alle Reifungsstufen). PV: Panmyelose (alle 3 Reihen). ET: nur die Megakaryopoese stark vermehrt. Akute Entzündung: Granulopoese gesteigert.'
  },
  {
    id: 'k3-11', sec: '3.2', p: 10, type: 'match',
    q: 'Ordne die myeloproliferative Neoplasie ihrem Leitbefund zu.',
    pairs: [
      ['CML', 't(9;22) BCR-ABL, massive Splenomegalie'],
      ['Polycythaemia vera', 'JAK2 V617F (~95 %), Panmyelose'],
      ['Primäre Myelofibrose', 'Fibrose, extramedulläre Blutbildung'],
      ['Essentielle Thrombozythämie', 'Thrombozyten ≥ 450/nl, Riesen-Megakaryozyten']
    ],
    ex: 'PMF und ET: JAK2/CALR/MPL. PV → post-polyzythämische Myelofibrose; CML → Blastenkrise.'
  },
  {
    id: 'k3-12', sec: '3.2', p: 10, type: 'match',
    q: 'Ordne die hämatologische Neoplasie ihrer Definition zu.',
    pairs: [
      ['AML', '≥ 20 % Myeloblasten in Blut oder KM'],
      ['MDS', 'Ineffektive, dysplastische Hämatopoese, Blasten < 20 %'],
      ['Plasmazellmyelom', '> 10 % klonale Plasmazellen im KM'],
      ['ALL', 'Häufigste Leukämie im Kindesalter'],
      ['CLL', 'Häufigste Leukämie des Erwachsenen']
    ],
    ex: 'MDS: klonale Stammzellerkrankung → Zytopenien, Übergang in AML. ALL: Lymphoblasten (TdT+, CD10+, CD19+ bzw. CD3+).'
  },
  {
    id: 'k3-13', sec: '3.2', p: 10, type: 'single',
    q: 'Welcher Immunphänotyp passt zur CLL?',
    opts: ['CD5+, CD23+, CD20 schwach', 'CD5+, CD23−, Cyclin D1+', 'TdT+, CD10+'],
    a: 0,
    ex: 'CLL: CD5+, CD23+, CD20 schwach. CD5+/CD23−/Cyclin D1 → Mantelzell-Lymphom; TdT/CD10 → ALL.'
  },
  {
    id: 'k3-14', sec: '3.2', p: 10, type: 'single',
    q: 'Was ist das Richter-Syndrom?',
    opts: [
      'Transformation einer CLL in ein hochmalignes (DLBCL-)Lymphom',
      'Blastenkrise einer CML',
      'Übergang eines MDS in eine AML'
    ],
    a: 0,
    ex: 'Richter-Syndrom = Transformation der CLL in ein hochmalignes (DLBCL) Lymphom.'
  },
  {
    id: 'k3-15', sec: '3.2', p: 10, type: 'kprim',
    q: 'Plasmazellmyelom – welche Aussagen treffen zu?',
    st: [
      ['Die Plasmazellen sind CD38/CD138-positiv.', true],
      ['Es zeigt eine κ- oder λ-Leichtkettenrestriktion.', true],
      ['Typisch ist eine Hypokalzämie.', false],
      ['Typisch ist eine AA-Amyloidose.', false]
    ],
    ex: 'Plasmazellmyelom: > 10 % klonale Plasmazellen; Osteolysen, Hyperkalzämie, Nierenversagen, AL-Amyloidose.'
  },
  {
    id: 'k3-16', sec: '3.2', p: 10, type: 'single',
    q: 'Was ist das Hauptkriterium der systemischen Mastozytose?',
    opts: ['Dichte Mastzellaggregate im Knochenmark', 'KIT D816V', 'Tryptase > 20 ng/ml', 'CD2/CD25-Koexpression'],
    a: 0,
    ex: 'Hauptkriterium: dichte Mastzellaggregate im KM. Nebenkriterien: > 25 % atypische Mastzellen, KIT D816V, CD2/CD25-Koexpression, Tryptase > 20 ng/ml.'
  },
  {
    id: 'k3-17', sec: '3.2', p: 10, type: 'single',
    q: 'Welche Mutation findet sich bei ca. 95 % der Patienten mit Polycythaemia vera?',
    opts: ['JAK2 V617F', 'BCR-ABL', 'KIT D816V'],
    a: 0,
    ex: 'PV: JAK2 V617F (~95 %). BCR-ABL → CML; KIT D816V → systemische Mastozytose.'
  },
  {
    id: 'k3-18', sec: '3.2', p: 10, type: 'kprim',
    q: 'Primäre Myelofibrose – welche Aussagen treffen zu?',
    st: [
      ['Es gibt ein präfibrotisch-hyperzelluläres Frühstadium.', true],
      ['Es kommt zu extramedullärer Blutbildung in Milz und Leber.', true],
      ['Typisch ist die t(9;22).', false],
      ['Im Spätstadium entwickelt sich typischerweise eine Polyglobulie.', false]
    ],
    ex: 'PMF: JAK2/CALR/MPL; atypische, geclusterte Megakaryozyten; erst Leuko-/Thrombozytose, dann Panzytopenie. t(9;22) → CML.'
  },
  {
    id: 'k3-19', sec: '3.2', p: 10, type: 'single',
    q: 'Welcher Befund kennzeichnet die ALL?',
    opts: ['Lymphoblasten, TdT+, CD10+', 'Kleine reife B-Zellen, CD5+, CD23+', '≥ 20 % Myeloblasten'],
    a: 0,
    ex: 'ALL: häufigste Leukämie im Kindesalter; Lymphoblasten (TdT+, CD10+, CD19+ bzw. CD3+). Reife B-Zellen CD5+/CD23+ → CLL; Myeloblasten → AML.'
  },
  {
    id: 'k3-20', sec: '3.2', p: 10, type: 'single',
    q: 'Welcher Megakaryozytenbefund ist typisch für die CML?',
    opts: ['Kleine „Zwergformen“', 'Riesenformen mit hyperlobulierten Kernen', 'Atypische, geclusterte Megakaryozyten'],
    a: 0,
    ex: 'CML: Megakaryopoese variabel, kleine „Zwergformen“. Riesenformen → ET; atypische geclusterte Megakaryozyten → PMF.'
  },

  /* ---------- 3.3 Lymphome ---------- */
  {
    id: 'k3-21', sec: '3.3', p: 11, type: 'single', alt: '2016, 2024',
    q: 'Welche Reihenfolge der Non-Hodgkin-Lymphome nach Häufigkeit trifft zu?',
    opts: ['DLBCL > B-CLL > Burkitt', 'Burkitt > DLBCL > B-CLL', 'B-CLL > Burkitt > DLBCL'],
    a: 0,
    ex: 'Gesamtreihenfolge der B-NHL: DLBCL (~30–40 %) > CLL/SLL > follikulär > MALT > Mantelzell > Burkitt (selten).'
  },
  {
    id: 'k3-22', sec: '3.3', p: 11, type: 'single',
    q: 'Welche Erkrankung wird durch HHV-8 verursacht?',
    opts: ['Kaposi-Sarkom', 'Non-Hodgkin-Lymphom', 'Genitalwarzen', 'Herpes simplex'],
    a: 0,
    ex: 'So in einer Altfrage gefragt: HHV-8 → Kaposi-Sarkom (nicht NHL, Genitalwarzen oder HSV).'
  },
  {
    id: 'k3-23', sec: '3.3', p: '10–11', type: 'match',
    q: 'Ordne die Neoplasie ihrer Translokation zu.',
    pairs: [
      ['Follikuläres Lymphom', 't(14;18), BCL2'],
      ['Burkitt-Lymphom', 't(8;14), MYC'],
      ['Mantelzell-Lymphom', 't(11;14), Cyclin D1'],
      ['CML', 't(9;22), BCR-ABL']
    ],
    ex: 'FL: BCL2-Überexpression → Apoptose ↓. Burkitt: MYC-Translokation, Ki-67 ~100 %.'
  },
  {
    id: 'k3-24', sec: '3.3', p: 11, type: 'match',
    q: 'Ordne das Lymphom seinem Kennzeichen zu.',
    pairs: [
      ['DLBCL', 'Häufigstes NHL, große Blasten'],
      ['Burkitt-Lymphom', '„Sternhimmel“, Ki-67 ~100 %'],
      ['MALT-Lymphom', 'H.-pylori-Gastritis, lymphoepitheliale Läsionen'],
      ['Klassisches Hodgkin-Lymphom', 'Hodgkin- und Reed-Sternberg-Zellen, CD30+, CD15+'],
      ['Mantelzell-Lymphom', 'Cyclin D1, CD5+, CD23−']
    ],
    ex: 'DLBCL: Kern ≥ Makrophagenkern. MALT: Marginalzonen-Lymphom, Eradikation kann heilen.'
  },
  {
    id: 'k3-25', sec: '3.3', p: 11, type: 'match',
    q: 'Ordne das Ann-Arbor-/Lugano-Stadium seiner Ausbreitung zu.',
    pairs: [
      ['I', 'Eine LK-Region'],
      ['II', '≥ 2 Regionen auf einer Zwerchfellseite'],
      ['III', 'Beidseits des Zwerchfells'],
      ['IV', 'Disseminierter extranodaler Befall']
    ],
    ex: 'Zusatz A/B: ohne/mit B-Symptomen (Fieber > 38 °C, Nachtschweiß, Gewichtsverlust > 10 % in 6 Monaten).'
  },
  {
    id: 'k3-26', sec: '3.3', p: 11, type: 'single',
    q: 'Welche Marker nutzt der Hans-Algorithmus beim DLBCL?',
    opts: ['CD10, BCL6, MUM1', 'CD5, CD23, Cyclin D1', 'CD30, CD15, PAX5'],
    a: 0,
    ex: 'Hans-Algorithmus (IHC CD10, BCL6, MUM1) → GCB (bessere Prognose) vs. non-GCB/ABC.'
  },
  {
    id: 'k3-27', sec: '3.3', p: 11, type: 'single',
    q: 'Was bedeutet „Double hit“ beim großzelligen B-Zell-Lymphom?',
    opts: [
      'FISH-Nachweis eines MYC- plus BCL2- und/oder BCL6-Rearrangements',
      'IHC-Koexpression von MYC ≥ 40 % und BCL2 ≥ 50 %',
      'CD10- und BCL6-Positivität (GCB-Typ)'
    ],
    a: 0,
    ex: 'FISH: MYC + BCL2 und/oder BCL6 = double/triple hit → „High-grade B-Zell-Lymphom“ (sehr aggressiv). Die IHC-Koexpression heißt „double expressor“ (häufiger beim ABC-Typ).'
  },
  {
    id: 'k3-28', sec: '3.3', p: 11, type: 'kprim',
    q: 'Klassisches Hodgkin-Lymphom – welche Aussagen treffen zu?',
    st: [
      ['Die Tumorzellen sind CD30- und CD15-positiv.', true],
      ['EBV/LMP1 ist immer negativ.', false],
      ['Die Hodgkin-/Reed-Sternberg-Zellen sind stark CD20-positiv.', false],
      ['Es gibt nur einen Altersgipfel jenseits von 60 Jahren.', false]
    ],
    ex: 'Klassisches Hodgkin: wenige Hodgkin- (einkernig) und Reed-Sternberg-Zellen (mehrkernig) in reaktivem Infiltrat; CD30+, CD15+, CD20−/schwach, PAX5 schwach, EBV/LMP1 ±; Gipfel < 30 und > 60 J.'
  },
  {
    id: 'k3-29', sec: '3.3', p: 11, type: 'single',
    q: 'Was gehört zur B-Symptomatik?',
    opts: [
      'Fieber > 38 °C, Nachtschweiß, Gewichtsverlust > 10 % in 6 Monaten',
      'Schmerzhafte Lymphknotenschwellung, Juckreiz, Husten',
      'Gewichtszunahme, Ödeme, Hypertonie'
    ],
    a: 0,
    ex: 'Klinik: schmerzlose LK-Schwellung, B-Symptomatik (Fieber > 38 °C, Nachtschweiß, Gewichtsverlust > 10 % in 6 Monaten).'
  },
  {
    id: 'k3-30', sec: '3.3', p: 11, type: 'single',
    q: 'Welches Lymphom entspricht dem Keimzentrumsstadium der B-Zell-Reifung?',
    opts: ['Follikuläres Lymphom', 'Mantelzell-Lymphom', 'CLL'],
    a: 0,
    ex: 'Mantelzell-L. = prä-Keimzentrum; FL, Burkitt, GCB-DLBCL = Keimzentrum; CLL, MALT, Myelom = post-Keimzentrum.'
  },
  {
    id: 'k3-31', sec: '3.3', p: 11, type: 'single',
    q: 'Welches Markerprofil zeigt ein reaktives Keimzentrum?',
    opts: ['CD10+, BCL6+, BCL2 negativ', 'CD10+, BCL6+, BCL2+', 'CD5+, CD23+'],
    a: 0,
    ex: 'Reaktives Keimzentrum: CD10+ BCL6+, BCL2 negativ. Das follikuläre Lymphom ist dagegen BCL2+ (t(14;18)); CD5+/CD23+ → CLL.'
  },
  {
    id: 'k3-32', sec: '3.3', p: 11, type: 'kprim',
    q: 'Burkitt-Lymphom – welche Aussagen treffen zu?',
    st: [
      ['Typisch ist ein „Sternhimmel“-Bild.', true],
      ['Typisch ist die t(14;18).', false],
      ['Die Tumorzellen sind BCL2-positiv.', false],
      ['Es ist das häufigste B-NHL.', false]
    ],
    ex: 'Burkitt: monomorph, mittelgroß, basophiles Zytoplasma, Ki-67 ~100 %; MYC-Translokation t(8;14); CD20, CD10, BCL6+, BCL2−; endemisch EBV; selten.'
  },
  {
    id: 'k3-33', sec: '3.3', p: 11, type: 'single',
    q: 'Warum braucht man für die Lymphomdiagnose immer Immunhistochemie und Molekularpathologie?',
    opts: [
      'Weil maligne lymphatische Zellen morphologisch kaum von normalen zu unterscheiden sind',
      'Weil Lymphome nie von Lymphknoten ausgehen',
      'Weil Lymphome polyklonale Neoplasien sind'
    ],
    a: 0,
    ex: 'Lymphom = klonale (monoklonale) Neoplasie lymphatischer Zellen, meist von Lymphknoten/lymphatischem Gewebe ausgehend.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k3-t01', sec: '3.1', p: 10, type: 'tf', a: true, q: 'Beim Erwachsenen besteht das Knochenmark zu etwa 50 % aus Zellen und 50 % aus Fett.', ex: 'Zellularität altersabhängig: Erwachsene etwa 50 : 50, im Alter fettreicher.' },
  { id: 'k3-t02', sec: '3.1', p: 10, type: 'tf', a: false, q: 'Im normalen Knochenmark machen Blasten bis zu 20 % aus.', ex: 'Normal: Blasten < 5 %. Ab ≥ 20 % Blasten → AML.' },
  { id: 'k3-t03', sec: '3.1', p: 10, type: 'tf', a: true, q: 'Die Beckenkammstanze erlaubt die Beurteilung von Zellularität, Fasern und Architektur.', ex: 'Beckenkammstanze (Histologie): Zellularität, Fasern, Architektur.' },
  { id: 'k3-t04', sec: '3.1', p: 11, type: 'tf', a: false, q: 'Bei akut-entzündlichen Erkrankungen sind alle drei Reihen im Knochenmark vermindert.', ex: 'Die Granulopoese ist gesteigert (Altfrage 2009).' },
  { id: 'k3-t05', sec: '3.2', p: 10, type: 'tf', a: true, q: 'Die CML ist durch das Philadelphia-Chromosom t(9;22) gekennzeichnet.', ex: 'CML: t(9;22) → BCR-ABL (Philadelphia-Chromosom).' },
  { id: 'k3-t06', sec: '3.2', p: 10, type: 'tf', a: false, q: 'Die AML geht fast immer mit einem Philadelphia-Chromosom einher.', ex: 'Das Philadelphia-Chromosom ist bei der AML NICHT typisch (Altfrage 2012, 2013, 2024).' },
  { id: 'k3-t07', sec: '3.2', p: 10, type: 'tf', a: true, q: 'Eine CML kann in eine Blastenkrise (AML oder ALL) übergehen.', ex: 'CML → Blastenkrise (AML oder ALL).' },
  { id: 'k3-t08', sec: '3.2', p: 11, type: 'tf', a: false, q: 'Bei der Polycythaemia vera ist nur die Erythropoese gesteigert.', ex: 'PV: Panmyelose (alle 3 Reihen) (Altfrage 2009).' },
  { id: 'k3-t09', sec: '3.2', p: 11, type: 'tf', a: false, q: 'Bei der essentiellen Thrombozythämie sind alle Reihen gesteigert.', ex: 'ET: Erythro- und Granulopoese normal, nur die Megakaryopoese stark vermehrt (Altfrage 2009).' },
  { id: 'k3-t10', sec: '3.2', p: 10, type: 'tf', a: true, q: 'Bei der essentiellen Thrombozythämie liegen die Thrombozyten bei ≥ 450/nl.', ex: 'ET: Thrombozyten ≥ 450/nl; Riesenformen mit hyperlobulierten Kernen.' },
  { id: 'k3-t11', sec: '3.2', p: 10, type: 'tf', a: false, q: 'Bei der primären Myelofibrose geht die normale Hämatopoese direkt in das Fibrosestadium über.', ex: 'Zuerst präfibrotisch-hyperzellulär, dann Fibrose (Altfrage 2015, 2020, 2021).' },
  { id: 'k3-t12', sec: '3.2', p: 10, type: 'tf', a: true, q: 'Ein MDS kann in eine AML übergehen.', ex: 'MDS: Übergang in AML.' },
  { id: 'k3-t13', sec: '3.2', p: 10, type: 'tf', a: false, q: 'Die CLL zeigt meist T-Zell-Antigene.', ex: 'CLL: B-Zellen, keine T-Zell-Antigene (Altfrage 2008).' },
  { id: 'k3-t14', sec: '3.2', p: 10, type: 'tf', a: true, q: 'Gumprecht-Kernschatten sind typisch für die CLL.', ex: 'CLL → Gumprecht-Kernschatten.' },
  { id: 'k3-t15', sec: '3.2', p: 10, type: 'tf', a: true, q: 'Das Plasmazellmyelom kann eine AL-Amyloidose verursachen.', ex: 'Plasmazellmyelom: Osteolysen, Hyperkalzämie, Nierenversagen, AL-Amyloidose.' },
  { id: 'k3-t16', sec: '3.2', p: 10, type: 'tf', a: false, q: 'Beim MDS liegen definitionsgemäß ≥ 20 % Blasten vor.', ex: 'MDS: Blasten < 20 %; ≥ 20 % → AML.' },
  { id: 'k3-t17', sec: '3.2', p: 10, type: 'tf', a: true, q: 'KIT D816V ist ein Nebenkriterium der systemischen Mastozytose.', ex: 'Nebenkriterien: > 25 % atypische Mastzellen, KIT D816V, CD2/CD25-Koexpression, Tryptase > 20 ng/ml.' },
  { id: 'k3-t18', sec: '3.3', p: 11, type: 'tf', a: true, q: 'Das DLBCL ist das häufigste Non-Hodgkin-Lymphom.', ex: 'DLBCL ~30–40 % der B-NHL.' },
  { id: 'k3-t19', sec: '3.3', p: 11, type: 'tf', a: false, q: 'Das follikuläre Lymphom ist BCL2-negativ.', ex: 'FL: CD20, CD10, BCL6, BCL2+.' },
  { id: 'k3-t20', sec: '3.3', p: 11, type: 'tf', a: true, q: 'Beim follikulären Lymphom führt die t(14;18) zur BCL2-Überexpression mit verminderter Apoptose.', ex: 'FL: t(14;18) → BCL2-Überexpression (Apoptose ↓).' },
  { id: 'k3-t21', sec: '3.3', p: 11, type: 'tf', a: false, q: 'Der GCB-Typ des DLBCL hat eine schlechtere Prognose als der ABC-Typ.', ex: 'GCB-Typ: bessere Prognose.' },
  { id: 'k3-t22', sec: '3.3', p: 11, type: 'tf', a: true, q: 'Ein MALT-Lymphom des Magens kann durch eine HP-Eradikation geheilt werden.', ex: 'MALT: Magen, H.-pylori-Gastritis (Typ B); Eradikation kann heilen.' },
  { id: 'k3-t23', sec: '3.3', p: 11, type: 'tf', a: false, q: 'HHV-8 verursacht Genitalwarzen.', ex: 'HHV-8 → Kaposi-Sarkom (Altfrage).' },
  { id: 'k3-t24', sec: '3.3', p: 11, type: 'tf', a: true, q: 'Das endemische Burkitt-Lymphom (Afrika) ist EBV-assoziiert.', ex: 'Burkitt: EBV (endemisch, Afrika).' },
  { id: 'k3-t25', sec: '3.3', p: 11, type: 'tf', a: false, q: 'Das Mantelzell-Lymphom ist CD5-negativ.', ex: 'Mantelzell-Lymphom: t(11;14) → Cyclin D1, CD5+, CD23−.' },
  { id: 'k3-t26', sec: '3.3', p: 11, type: 'tf', a: true, q: 'Der Parakortex des Lymphknotens ist die T-Zone.', ex: 'Parakortex = T-Zone (CD3, interdigitierende dendritische Zellen, hochendotheliale Venolen).' },
  { id: 'k3-t27', sec: '3.3', p: 11, type: 'tf', a: true, q: 'Der Zusatz B im Ann-Arbor-Stadium steht für eine B-Symptomatik.', ex: 'Zusatz A/B: ohne/mit B-Symptomen.' }
]);
