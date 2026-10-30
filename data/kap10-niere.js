/* Kapitel 10 – Niere & Nebenniere (PDF S. 32–35) */
PQ.registerChapter(10, [

  /* ---------- 10.1 Glomerulopathien ---------- */
  {
    id: 'k10-01', sec: '10.1', p: '32–33', type: 'single', alt: '2010',
    q: 'Glomerulonephritis – welche Aussage ist FALSCH?',
    opts: [
      'Die Poststreptokokken-GN tritt typischerweise 1–2 Tage nach der Infektion auf.',
      'Erythrozytenzylinder sind pathognomonisch für eine entzündliche glomeruläre Erkrankung.',
      'Auslöser der Poststreptokokken-GN sind β-hämolysierende Streptokokken der Gruppe A.',
      'Die noduläre Glomerulosklerose gehört nicht zu den Glomerulonephritiden.',
      'Bei der Poststreptokokken-GN finden sich granuläre Immunkomplexablagerungen kapillär und mesangial.'
    ],
    a: 0,
    ex: 'Die Poststreptokokken-GN ist eine „Zweiterkrankung“ 1–3 (1–4) Wochen nach dem Infekt (Pharyngitis, Haut), meist bei Kindern 2–10 J.'
  },
  {
    id: 'k10-02', sec: '10.1', p: '32–33', type: 'single', alt: '2012, 2024',
    q: 'Glomerulonephritis – welche Aussage ist FALSCH?',
    opts: [
      'Die Glomerulosklerose Kimmelstiel-Wilson entsteht durch Ablagerung von Immunkomplexen.',
      'Die zwei Grundmechanismen sind Anti-GBM-Antikörper und Immunkomplexablagerung.',
      'Die MPGN Typ II rekurriert am häufigsten im Transplantat.',
      'Die Poststreptokokken-GN tritt 2–3 Wochen nach dem Infekt auf.'
    ],
    a: 0,
    ex: 'Diabetische Nephropathie (Kimmelstiel-Wilson): noduläre Glomerulosklerose, hyaline Arteriolosklerose, GBM-Verdickung – keine GN, keine Immunkomplexe.'
  },
  {
    id: 'k10-03', sec: '10.1', p: 33, type: 'single', alt: '2009, 2013A',
    q: 'Goodpasture-Syndrom – welche Aussage ist FALSCH?',
    opts: [
      'Frauen sind dreimal häufiger betroffen.',
      'Es handelt sich um eine autoaggressive Erkrankung.',
      'Es liegt eine Anti-Basalmembran-GN vor.',
      'Typisch ist eine extrakapillär-proliferative GN mit Alveolarhämorrhagie.',
      'Es kommt zu rekurrierender Makrohämaturie.'
    ],
    a: 0,
    ex: 'Goodpasture: Männer > Frauen (junge Männer < 40 J).'
  },
  {
    id: 'k10-04', sec: '10.1', p: 33, type: 'single', alt: '2015',
    q: 'Goodpasture-Syndrom – welche Aussage ist FALSCH?',
    opts: [
      'Der Nierenbefund ist als Immunkomplex-GN einzustufen.',
      'Die wichtigste Differenzialdiagnose ist der M. Wegener.',
      'In ca. 20 % geht ein Atemwegsinfekt voraus.',
      'Die Immunfluoreszenz zeigt lineare IgG-Ablagerungen.'
    ],
    a: 0,
    ex: 'Goodpasture: Auto-AK gegen die α3-Kette des Kollagens IV (Typ II) – keine Immunkomplex-GN.'
  },
  {
    id: 'k10-05', sec: '10.1', p: '32–33', type: 'single', alt: '2012',
    q: 'Was ist die häufigste Ursache eines nephrotischen Syndroms bei Kindern?',
    opts: ['Minimal-Change-GN', 'Membranöse GN', 'FSGS', 'Poststreptokokken-GN'],
    a: 0,
    ex: 'Kinder: Minimal Change (LM unauffällig, EM Fußfortsatzverschmelzung, steroidsensibel). Erwachsene: membranöse GN, FSGS. Die Poststreptokokken-GN verursacht ein nephritisches Syndrom.'
  },
  {
    id: 'k10-06', sec: '10.1', p: '32–33', type: 'single', alt: '2008',
    q: 'Was ist die häufigste Ursache einer chronischen Niereninsuffizienz mit Urämie?',
    opts: ['Diabetische Glomerulosklerose', 'IgA-Nephropathie', 'Chronische Pyelonephritis', 'Zystennieren'],
    a: 0,
    ex: 'Häufigste Ursachen der chronischen NI: diabetische Nephropathie > hypertensive/vaskuläre Nephropathie > GN > interstitielle Nephritis/chronische Pyelonephritis > ADPKD.'
  },
  {
    id: 'k10-07', sec: '10.1', p: 33, type: 'single', alt: '2009',
    q: 'Was ist KEINE häufige Ursache einer chronischen Niereninsuffizienz?',
    opts: ['Benigne Nierentumoren', 'Zystennieren', 'Chronische Pyelonephritis', 'Nierensteine', 'Chronische Glomerulonephritis'],
    a: 0,
    ex: 'Zystennieren, chronische Pyelonephritis, Steine und chronische GN sind Ursachen der chronischen NI – benigne Nierentumoren nicht.'
  },
  {
    id: 'k10-08', sec: '10.1', p: 32, type: 'kprim',
    q: 'Nephrotisches Syndrom – welche Befunde treffen zu?',
    st: [
      ['Proteinurie > 3,5 g/d', true],
      ['Hyperlipidämie mit Lipidurie („Malteserkreuze“)', true],
      ['Erythrozytenzylinder und Akanthozyten', false],
      ['Verminderte Thromboseneigung', false]
    ],
    ex: 'Nephrotisch: Podozytenschaden; Proteinurie > 3,5 g/d, Hypalbuminämie, Ödeme, Hyperlipidämie; Thromboseneigung (AT-III-Verlust), Infektanfälligkeit, Vitamin-D-Mangel. Erythrozytenzylinder/Akanthozyten → nephritisch.'
  },
  {
    id: 'k10-09', sec: '10.1', p: 32, type: 'kprim',
    q: 'Nephritisches Syndrom – welche Befunde treffen zu?',
    st: [
      ['Hämaturie mit Erythrozytenzylindern', true],
      ['Hypertonie und Ödeme (Volhard-Trias)', true],
      ['Proteinurie > 3,5 g/d', false],
      ['Typische Ursache ist die Minimal-Change-GN', false]
    ],
    ex: 'Nephritisch: Endothel-/Mesangiumschaden (proliferative GN), Proteinurie < 3 g/d, Oligurie; typisch Poststreptokokken-GN, IgA-GN, RPGN. Die Minimal-Change-GN verursacht ein nephrotisches Syndrom.'
  },
  {
    id: 'k10-10', sec: '10.1', p: 32, type: 'match',
    q: 'Ordne die Glomerulopathie ihrem Kennzeichen zu.',
    pairs: [
      ['Poststreptokokken-GN', 'Subepitheliale „Humps“, C3 ↓'],
      ['IgA-Nephropathie', 'Mesangiale IgA-Ablagerungen, synpharyngitische Makrohämaturie'],
      ['Membranöse GN', 'Subepitheliale Deposits, „Spikes“, Anti-PLA2R'],
      ['Minimal-Change-GN', 'Lichtmikroskopisch unauffällig, Fußfortsatzverschmelzung'],
      ['Lupusnephritis', '„Full-house“-IF, Drahtschlingen']
    ],
    ex: 'Weitere: MPGN I (Doppelkonturen, HCV/HBV), MPGN II (C3-Nephritis-Faktor), FSGS (steroidresistent), diabetische Nephropathie (Kimmelstiel-Wilson).'
  },
  {
    id: 'k10-11', sec: '10.1', p: 32, type: 'match',
    q: 'Ordne den RPGN-Typ seinem Mechanismus zu.',
    pairs: [
      ['Typ I (~10 %)', 'Anti-GBM, lineare Fluoreszenz'],
      ['Typ II (~40 %)', 'Immunkomplex (postinfektiös, Lupus, Schönlein-Henoch)'],
      ['Typ III (~50 %)', 'Pauci-immun, ANCA (GPA, MPA)']
    ],
    ex: 'RPGN (extrakapillär, Halbmond-GN): rasches Nierenversagen in Wochen/Monaten; Typ I mit Lungenblutung = Goodpasture; frühe Biopsie, Plasmapherese.'
  },
  {
    id: 'k10-12', sec: '10.1', p: 32, type: 'single',
    q: 'Welche Glomerulonephritis ist weltweit am häufigsten?',
    opts: ['IgA-Nephropathie (Berger)', 'Membranöse GN', 'Minimal-Change-GN', 'MPGN Typ I'],
    a: 0,
    ex: 'IgA-Nephropathie: häufigste GN weltweit; mesangiale IgA-Ablagerungen; renale Form der Purpura Schönlein-Henoch.'
  },
  {
    id: 'k10-13', sec: '10.1', p: 32, type: 'single',
    q: 'Was ist die häufigste Ursache des nephrotischen Syndroms bei Erwachsenen?',
    opts: ['Membranöse GN', 'Minimal-Change-GN', 'IgA-Nephropathie', 'Poststreptokokken-GN'],
    a: 0,
    ex: 'Membranöse GN: häufigste Ursache des nephrotischen Syndroms bei Erwachsenen; sekundär bei Tumoren, Medikamenten, HBV, SLE.'
  },
  {
    id: 'k10-14', sec: '10.1', p: 32, type: 'single',
    q: 'Welcher Befund ist typisch für die diabetische Nephropathie?',
    opts: [
      'Noduläre Glomerulosklerose Kimmelstiel-Wilson (PAS+ mesangiale Knoten)',
      'Subepitheliale „Humps“',
      'Halbmonde mit linearer IgG-Fluoreszenz',
      'Drahtschlingen mit „Full-house“-IF'
    ],
    a: 0,
    ex: 'Diabetische Nephropathie: noduläre und diffuse Glomerulosklerose, hyaline Arteriolosklerose (afferent + efferent), GBM-Verdickung. Humps → Poststreptokokken-GN; lineare IF → Goodpasture; Full-house → Lupus.'
  },
  {
    id: 'k10-15', sec: '10.1', p: 32, type: 'single',
    q: 'Welche Glomerulopathie hat die höchste Rezidivrate im Transplantat?',
    opts: ['MPGN Typ II (Dense Deposit Disease)', 'MPGN Typ I', 'Poststreptokokken-GN'],
    a: 0,
    ex: 'MPGN Typ II: C3-Nephritis-Faktor, bevorzugt Kinder, ~100 % Rezidiv im Transplantat (höchste Rate). MPGN Typ I: ~30 %.'
  },
  {
    id: 'k10-16', sec: '10.1', p: 32, type: 'kprim',
    q: 'Poststreptokokken-GN – welche Aussagen treffen zu?',
    st: [
      ['Sie betrifft v. a. Kinder von 2–10 Jahren.', true],
      ['Das Serum-C3 ist erniedrigt.', true],
      ['Sie tritt 1–2 Tage nach dem Infekt auf.', false],
      ['Die Prognose bei Kindern ist schlecht.', false]
    ],
    ex: 'Akute diffuse endokapilläre GN: 1–3 Wochen nach Streptokokkeninfekt; diffus endokapillär proliferativ; „Flohstichniere“; Prognose bei Kindern sehr gut (> 95 %).'
  },
  {
    id: 'k10-17', sec: '10.1', p: 32, type: 'single',
    q: 'Was sind „Halbmonde“ in der Nierenbiopsie?',
    opts: [
      'Extrakapilläre Proliferation in der Bowman-Kapsel',
      'Vermehrte mesangiale Matrix',
      'Verdickte Basalmembran mit „Spikes“',
      'Fußfortsatzverschmelzung der Podozyten'
    ],
    a: 0,
    ex: 'Halbmonde = extrakapilläre Proliferation an der Bowman-Kapsel → RPGN (Halbmond-GN).'
  },
  {
    id: 'k10-18', sec: '10.1', p: 33, type: 'single',
    q: 'Wogegen richten sich die Autoantikörper beim Goodpasture-Syndrom?',
    opts: ['α3-Kette des Kollagens IV', 'Proteinase 3', 'Phospholipase-A2-Rezeptor (PLA2R)', 'Myeloperoxidase'],
    a: 0,
    ex: 'Goodpasture-Antigen = α3-Kette des Kollagens IV → Antigenverwandtschaft von alveolärer und glomerulärer Basalmembran. PR3 → GPA; PLA2R → membranöse GN; MPO → MPA.'
  },
  {
    id: 'k10-19', sec: '10.1', p: 32, type: 'match',
    q: 'Ordne den Begriff des Befallsmusters seiner Definition zu.',
    pairs: [
      ['Diffus', 'Alle Glomeruli'],
      ['Fokal', 'Einige Glomeruli'],
      ['Global', 'Ganzer Glomerulus'],
      ['Segmental', 'Teile des Schlingenkonvoluts']
    ],
    ex: 'Weitere Einteilungen: primär vs. sekundär, entzündlich vs. nicht entzündlich, proliferativ vs. nicht proliferativ.'
  },
  {
    id: 'k10-20', sec: '10.1', p: 32, type: 'single',
    q: 'Welche GN-Form zeigt eine lineare Immunfluoreszenz?',
    opts: ['Anti-GBM-GN (Goodpasture)', 'Immunkomplex-GN', 'Pauci-immune ANCA-GN'],
    a: 0,
    ex: 'Anti-GBM: lineare Fluoreszenz. Immunkomplexe (zirkulierend oder in situ): granuläre Fluoreszenz. ANCA-Formen sind pauci-immun.'
  },
  {
    id: 'k10-21', sec: '10.1', p: 32, type: 'single',
    q: 'Welcher Urinbefund ist pathognomonisch für eine entzündliche glomeruläre Erkrankung?',
    opts: ['Erythrozytenzylinder', 'Leukozytenzylinder', 'Lipidurie („Malteserkreuze“)'],
    a: 0,
    ex: 'Erythrozytenzylinder entstehen in den Tubuli und sind pathognomonisch für eine entzündliche glomeruläre Erkrankung. Leukozytenzylinder → akute Pyelonephritis; Malteserkreuze → nephrotisches Syndrom.'
  },

  /* ---------- 10.2 Interstitielle Nephritis & Pyelonephritis ---------- */
  {
    id: 'k10-22', sec: '10.2', p: 33, type: 'kprim', alt: '2010',
    q: 'Welche der folgenden sind Erreger bzw. Ursachen einer interstitiellen Nephritis?',
    st: [
      ['E. coli', true],
      ['Harnabflussstörungen', true],
      ['Proteus', true],
      ['Analgetika', true]
    ],
    ex: 'Alle vier treffen zu. Bakteriell (Pyelonephritis): E. coli 50–80 %, Proteus, Klebsiellen, Enterokokken. Abakteriell u. a.: Analgetikanephropathie (Phenacetin).'
  },
  {
    id: 'k10-23', sec: '10.2', p: 33, type: 'kprim', alt: '2013B',
    q: 'Welche der folgenden begünstigen eine Pyelonephritis?',
    st: [
      ['Retroperitoneale Fibrose', true],
      ['Ureterkarzinom', true],
      ['Nierenbeckensteine', true],
      ['Schwangerschaft', true]
    ],
    ex: 'Alle vier treffen zu. RF: Harnabflussstörung (Steine, BPH, Ureterkarzinom, retroperitoneale Fibrose, Schwangerschaft), vesikoureteraler Reflux, DM, Katheter, Analgetika.'
  },
  {
    id: 'k10-24', sec: '10.2', p: 33, type: 'single', alt: '2018, 2022',
    q: 'Was ist bei einer eitrigen Pyelonephritis am WENIGSTEN zu erwarten?',
    opts: ['(Partielle) Glomerulosklerose', 'Straßenförmiges Infiltrat', 'Intratubuläre und interstitielle Granulozyten', 'Infiltrate in der Rinde'],
    a: 0,
    ex: 'Akute Pyelonephritis: streifen-/straßenförmige Entzündung von der Papille zur Rinde, Granulozyten interstitiell und intratubulär, Rindenabszesse; die Glomeruli bleiben verschont.'
  },
  {
    id: 'k10-25', sec: '10.2', p: 33, type: 'single', alt: '2019',
    q: 'Akute Pyelonephritis – welche Aussage trifft am WENIGSTEN zu?',
    opts: ['Sie ist eine virale Infektion.', 'Das Infiltrat ist neutrophil.', 'Sie kann chronifizieren.', 'Sie entsteht meist aszendierend.', 'Es können Abszesse entstehen.'],
    a: 0,
    ex: 'Die Pyelonephritis ist bakteriell (aszendierend, E. coli 50–80 %), selten hämatogen.'
  },
  {
    id: 'k10-26', sec: '10.2', p: 33, type: 'single',
    q: 'Was bezeichnet die „Thyreoidisation“ der Niere?',
    opts: [
      'Tubulusatrophie mit kolloidartigen Zylindern bei chronischer Pyelonephritis',
      'Eingedicktes Nekrosematerial bei Nierentuberkulose',
      'Schaumzellige Entzündung bei xanthogranulomatöser Pyelonephritis'
    ],
    a: 0,
    ex: 'Chronische Pyelonephritis: lymphoplasmazelluläre Infiltrate, interstitielle Fibrose, Tubulusatrophie mit „Thyreoidisation“, periglomeruläre Fibrose. Eingedicktes Nekrosematerial = „Kittniere“ (Tbc).'
  },
  {
    id: 'k10-27', sec: '10.2', p: 33, type: 'match',
    q: 'Ordne die interstitielle Nephritis ihrem Kennzeichen zu.',
    pairs: [
      ['Akute Pyelonephritis', 'Neutrophile, Leukozytenzylinder, Rindenabszesse'],
      ['Chronische Pyelonephritis', 'Grobe narbige Einziehungen, Kelchdeformitäten'],
      ['Medikamentös-allergische Nephritis', 'NSAR, Penicilline, PPI; Eosinophile'],
      ['Analgetikanephropathie', 'Phenacetin, Papillennekrosen'],
      ['Nierentuberkulose', '„Kittniere“']
    ],
    ex: 'Nierentuberkulose: Epitheloidzellgranulome mit Verkäsung; Kittniere = eingedicktes Nekrosematerial in Nierenbecken und Kelchen.'
  },
  {
    id: 'k10-28', sec: '10.2', p: 33, type: 'single',
    q: 'Welcher Erreger verursacht die aszendierende Pyelonephritis am häufigsten?',
    opts: ['E. coli', 'Proteus', 'Enterokokken', 'Mycobacterium tuberculosis'],
    a: 0,
    ex: 'Aszendierende Pyelonephritis: E. coli 50–80 %, außerdem Proteus, Klebsiellen, Enterokokken. M. tuberculosis → Nierentuberkulose.'
  },
  {
    id: 'k10-29', sec: '10.2', p: 33, type: 'single',
    q: 'Welche Komplikation der akuten Pyelonephritis ist typisch bei Diabetes mellitus?',
    opts: ['Papillennekrose', 'Kittniere', 'Glomerulosklerose'],
    a: 0,
    ex: 'Komplikationen der akuten Pyelonephritis: Papillennekrose (DM), Abszess, Urosepsis. Kittniere → Tbc; die Glomeruli bleiben bei der Pyelonephritis verschont.'
  },
  {
    id: 'k10-30', sec: '10.2', p: 33, type: 'single',
    q: 'Welcher Tumor ist eine Spätfolge der Analgetikanephropathie (Phenacetin)?',
    opts: ['Urothelkarzinom des Nierenbeckens', 'Nephroblastom (Wilms-Tumor)', 'Angiomyolipom'],
    a: 0,
    ex: 'Analgetikanephropathie: Papillennekrosen, Urothel-Ca des Nierenbeckens. Wilms-Tumor → Kinder (WT1); Angiomyolipom → tuberöse Sklerose.'
  },
  {
    id: 'k10-31', sec: '10.2', p: 33, type: 'single',
    q: 'Welche Form der interstitiellen Nephritis zeigt typischerweise Eosinophile?',
    opts: [
      'Akute medikamentös-allergische Nephritis (NSAR, Penicilline, PPI)',
      'Akute eitrige Pyelonephritis',
      'Nierentuberkulose'
    ],
    a: 0,
    ex: 'Abakteriell akut medikamentös-allergisch: NSAR, Penicilline, PPI; Eosinophile. Eitrige Pyelonephritis: Neutrophile; Tbc: verkäsende Granulome.'
  },

  /* ---------- 10.3 Zystische Nierenerkrankungen & Fehlbildungen ---------- */
  {
    id: 'k10-32', sec: '10.3', p: '33–34', type: 'single', alt: '2012, 2016, 2020',
    q: 'Zystische Nierenerkrankungen – welche Aussage ist FALSCH?',
    opts: [
      'Bei der Hydronephrose bilden sich durch die Harnabflussstörung Nierenrindenzysten.',
      'Potter I entspricht der infantilen Form.',
      'Potter III entspricht dem Erwachsenentyp.',
      'Die einfache Nierenzyste ist meist gutartig und ohne OP-Indikation.',
      'Die Markschwammniere ist eine angeborene Fehlbildung der Sammelrohre.'
    ],
    a: 0,
    ex: 'Hydronephrose = Erweiterung von Nierenbecken und -kelchen durch Harnabflussstörung mit Parenchymatrophie; sie verursacht keine Rindenzysten.'
  },
  {
    id: 'k10-33', sec: '10.3', p: 33, type: 'match',
    q: 'Ordne den Potter-Typ seiner Entität zu.',
    pairs: [
      ['Potter I', 'ARPKD (infantile Form)'],
      ['Potter II', 'Multizystische Nierendysplasie'],
      ['Potter III', 'ADPKD (Erwachsenentyp)'],
      ['Potter IV', 'Zystische Dysplasie bei fetaler Harnwegsobstruktion']
    ],
    ex: 'Potter I: beidseits gleichmäßig kleine radiäre Zysten, Leberfibrose · II: meist einseitig, Dysplasie · III: PKD1/PKD2, große Zysten · IV: subkapsuläre Zysten.'
  },
  {
    id: 'k10-34', sec: '10.3', p: 33, type: 'kprim',
    q: 'ADPKD (Potter III) – welche Aussagen treffen zu?',
    st: [
      ['Ursache sind PKD1/PKD2-Mutationen.', true],
      ['Die Zysten sind klein, gleichmäßig und radiär angeordnet.', false],
      ['Sie ist meist einseitig.', false],
      ['Die terminale Niereninsuffizienz tritt typischerweise im Säuglingsalter auf.', false]
    ],
    ex: 'ADPKD: beidseits große Zysten, Nierenvergrößerung, Leberzysten, Hirnbasisaneurysmen (SAB), Hypertonie, terminale NI ab 40–60 J. Kleine radiäre Zysten → ARPKD (Potter I).'
  },
  {
    id: 'k10-35', sec: '10.3', p: 33, type: 'single',
    q: 'Was kennzeichnet die multizystische Nierendysplasie (Potter II)?',
    opts: [
      'Meist einseitig, unterschiedlich große Zysten, Knorpel und primitive Gänge',
      'Beidseits gleichmäßig kleine radiäre Zysten mit Leberfibrose',
      'Beidseits große Zysten mit Leberzysten und Hirnbasisaneurysmen'
    ],
    a: 0,
    ex: 'Potter II: meist einseitig, unterschiedlich große Zysten, Dysplasie, keine Leberbeteiligung. Die anderen Beschreibungen passen zu ARPKD und ADPKD.'
  },
  {
    id: 'k10-36', sec: '10.3', p: 34, type: 'single',
    q: 'Wie entsteht eine Hufeisenniere?',
    opts: [
      'Fusion der unteren Pole vor der Aorta; der Aufstieg wird durch die A. mesenterica inferior gehemmt',
      'Aszensionsstörung ohne Fusion',
      'Fehlende Anlage einer Niere'
    ],
    a: 0,
    ex: 'Fehlbildungen: Agenesie (fehlende Anlage), Hypoplasie, Doppelniere, Hufeisenniere, Beckenniere (Aszensionsstörung), gekreuzte Dystopie.'
  },
  {
    id: 'k10-37', sec: '10.3', p: 34, type: 'single',
    q: 'Was ist eine Markschwammniere?',
    opts: [
      'Angeborene, nicht erbliche zystische Erweiterung der papillären Sammelrohre mit Verkalkungen',
      'Autosomal-dominante polyzystische Nierenerkrankung',
      'Erworbene Zysten bei Langzeitdialyse'
    ],
    a: 0,
    ex: 'Markschwammniere: angeborene (nicht erbliche) Fehlbildung der papillären Sammelrohre mit Verkalkungen; Nephrolithiasis, HWI.'
  },
  {
    id: 'k10-38', sec: '10.3', p: 34, type: 'single',
    q: 'Was ist eine Hydronephrose?',
    opts: [
      'Erweiterung von Nierenbecken und -kelchen durch Harnabflussstörung mit Parenchymatrophie',
      'Bildung von Rindenzysten durch Harnabflussstörung',
      'Zystische Erweiterung der papillären Sammelrohre mit Verkalkungen'
    ],
    a: 0,
    ex: 'Die Hydronephrose (Harnstauungsniere) verursacht keine Rindenzysten (Altfrage). Erweiterte papilläre Sammelrohre → Markschwammniere.'
  },

  /* ---------- 10.4 Vaskuläre Nierenschäden, chronische NI, Steine ---------- */
  {
    id: 'k10-39', sec: '10.4', p: 34, type: 'single', alt: '2009, 2022, 2023, 2024',
    q: 'Was ist KEIN typischer Bestandteil von Nierensteinen?',
    opts: ['Cholesterin', 'Kalziumoxalat', 'Harnsäure', 'Zystin', 'Magnesium-Ammonium-Phosphat'],
    a: 0,
    ex: 'Nierensteine: Kalziumoxalat (~70–75 %), Kalziumphosphat, Struvit (Magnesium-Ammonium-Phosphat), Harnsäure/Urat, Zystin. Kein Cholesterin.'
  },
  {
    id: 'k10-40', sec: '10.4', p: 34, type: 'match',
    q: 'Ordne den Nierenstein seinem Kennzeichen zu.',
    pairs: [
      ['Kalziumoxalat', 'Häufigster Stein (~70–75 %)'],
      ['Struvit', 'Infektstein durch ureasebildende Proteus, Ausgussstein'],
      ['Harnsäure/Urat', 'Röntgennegativ; Gicht, Zellzerfall'],
      ['Zystin', 'Zystinurie']
    ],
    ex: 'Klinik: Kolik, Hämaturie; Komplikationen: Harnstau, Pyelonephritis, Pyonephrose.'
  },
  {
    id: 'k10-41', sec: '10.4', p: 34, type: 'match',
    q: 'Ordne den vaskulären Nierenschaden seinem Befund zu.',
    pairs: [
      ['Anämischer Niereninfarkt', 'Keilförmig, gelblich mit hämorrhagischem Randsaum'],
      ['Benigne Nephrosklerose', 'Hyaline Arteriolosklerose, fein granulierte Oberfläche'],
      ['Maligne Nephrosklerose', 'Fibrinoide Arteriolonekrosen, zwiebelschalenartige Intimaproliferation'],
      ['Schockniere', 'Blasse geschwollene Rinde, dunkelrotes Mark']
    ],
    ex: 'Anämischer Infarkt meist embolisch (Vorhofflimmern, Endokarditis) → Narbe. Maligne Nephrosklerose: „Flohstichniere“. Schockniere: akute Tubulusnekrose.'
  },
  {
    id: 'k10-42', sec: '10.4', p: 34, type: 'single',
    q: 'Welche Reihenfolge der häufigsten Ursachen der chronischen Niereninsuffizienz trifft zu?',
    opts: [
      'Diabetische Nephropathie > hypertensive/vaskuläre Nephropathie > GN',
      'GN > diabetische Nephropathie > ADPKD',
      'ADPKD > GN > diabetische Nephropathie'
    ],
    a: 0,
    ex: 'Diabetische Nephropathie > hypertensive/vaskuläre Nephropathie > GN > interstitielle Nephritis/chronische Pyelonephritis > ADPKD.'
  },
  {
    id: 'k10-43', sec: '10.4', p: 34, type: 'kprim',
    q: 'Folgen der chronischen Niereninsuffizienz – welche Aussagen treffen zu?',
    st: [
      ['Renale Anämie durch EPO-Mangel', true],
      ['Polyglobulie', false],
      ['Fibrinöse Perikarditis bei Urämie', true],
      ['Metabolische Alkalose', false]
    ],
    ex: 'Folgen: renale Anämie (EPO ↓), sekundärer HPT/renale Osteopathie, Hypertonie, Azidose, Urämie (fibrinöse Perikarditis, Urämiegastritis, Pruritus, Enzephalopathie).'
  },
  {
    id: 'k10-44', sec: '10.4', p: 34, type: 'single',
    q: 'Welcher Befund passt zur End-Stage-Niere?',
    opts: [
      'Schrumpfnieren mit globaler Glomerulosklerose, Tubulusatrophie und interstitieller Fibrose',
      'Geschwollene „Flohstichniere“',
      'Blasse geschwollene Rinde mit dunkelrotem Mark'
    ],
    a: 0,
    ex: 'End-Stage-Niere: Schrumpfnieren, globale Glomerulosklerose, Tubulusatrophie (Thyreoidisation), interstitielle Fibrose, Arteriosklerose; Ursache oft nicht mehr erkennbar. Blasse Rinde/dunkles Mark → Schockniere.'
  },

  /* ---------- 10.5 Nierentumoren ---------- */
  {
    id: 'k10-45', sec: '10.5', p: '34–35', type: 'single', alt: '2008',
    q: 'Nierentumoren – welche Aussage ist FALSCH?',
    opts: [
      'Der häufigste Typ ist das papilläre NZK.',
      'Das Grading gibt Hinweise auf die Prognose.',
      'Das Onkozytom ist immer gutartig.',
      'Papilläre Tumoren sind je nach Größe und Zytologie benigne oder maligne.',
      'Je nach Lage ist eine Teilresektion möglich.'
    ],
    a: 0,
    ex: 'Häufigster Typ ist das klarzellige NZK (70–80 %); papillär ~10–15 %.'
  },
  {
    id: 'k10-46', sec: '10.5', p: '34–35', type: 'single', alt: '2012',
    q: 'Nierenzellkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Das klarzellige NZK geht vom Epithel der Sammelrohre aus.',
      'Das papilläre NZK geht von den proximalen Tubuli aus.',
      'Beim klarzelligen NZK ist das VHL-Gen inaktiviert.',
      'Das klarzellige NZK ist der häufigste Typ.'
    ],
    a: 0,
    ex: 'Klarzelliges und papilläres NZK stammen aus dem proximalen Tubulus. Aus den Sammelrohren stammt das Ductus-Bellini-Karzinom.'
  },
  {
    id: 'k10-47', sec: '10.5', p: '34–35', type: 'single', alt: '2015, 2021',
    q: 'Nierentumoren – welche Aussage ist FALSCH?',
    opts: [
      'Das klarzellige NZK geht von den Mesangiumzellen aus.',
      'Die histologischen Typen unterscheiden sich leicht in ihrer Prognose.',
      'Das Ductus-Bellini-Karzinom ist viel seltener als das papilläre NZK.',
      'Das Onkozytom ist immer gutartig.'
    ],
    a: 0,
    ex: 'Das klarzellige NZK entsteht aus dem proximalen Tubulus, nicht aus Mesangiumzellen.'
  },
  {
    id: 'k10-48', sec: '10.5', p: '34–35', type: 'single', alt: '2013B, 2018, 2025',
    q: 'Nierenzellkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Das NZK ist das häufigste urologische Malignom.',
      'Männer sind häufiger betroffen als Frauen.',
      'Rauchen und Adipositas sind Risikofaktoren.',
      'Die Hämaturie ist das Leitsymptom.',
      'Das klarzellige NZK entsteht aus dem proximalen Tubulus.'
    ],
    a: 0,
    ex: 'Das NZK ist das dritthäufigste urologische Malignom (nach Prostata und Harnblase); m : w = 1,5–2 : 1.'
  },
  {
    id: 'k10-49', sec: '10.5', p: '34–35', type: 'single', alt: '2020',
    q: 'Nierentumoren – welche Aussage trifft zu?',
    opts: [
      'Nierentumoren können durch eine Hämaturie klinisch auffallen.',
      'Nierentumoren treten gehäuft mit Hodentumoren auf.',
      'Das Onkozytom ist ein aggressiver Tumor.',
      'Das papilläre NZK ist häufiger als das klarzellige.',
      'Das klarzellige NZK hat eine rotbraune Schnittfläche.'
    ],
    a: 0,
    ex: 'Hämaturie ist das Leitsymptom. Das Onkozytom ist immer benigne; das klarzellige NZK ist am häufigsten und hat eine gelblich-bunte Schnittfläche.'
  },
  {
    id: 'k10-50', sec: '10.5', p: '34–35', type: 'single', alt: '2025',
    q: 'Welche Histobeschreibung eines Nierentumors ist FALSCH?',
    opts: [
      'Onkozytom: kleine, basophile Zellen',
      'Chromophobes NZK: große helle Zellen mit retikuliertem Zytoplasma',
      'Klarzelliges NZK: Zellen mit ungefärbtem Zytoplasma',
      'Ductus-Bellini-Karzinom: variabel, eher kleinere Zellen',
      'Papilläres NZK: Papillen, teils eosinophil'
    ],
    a: 0,
    ex: 'Onkozytom: Zellen mit körnig-eosinophilem Zytoplasma (dicht gepackte Mitochondrien), runde Kerne, Nester.'
  },
  {
    id: 'k10-51', sec: '10.5', p: 35, type: 'single', alt: '2008, 2024, 2025',
    q: 'Welcher Tumor kommt (bei tumorfreier Niere) NICHT in der Nebenniere vor?',
    opts: ['Wilms-Tumor', 'Phäochromozytom', 'Neuroblastom', 'Nebennierenrindenkarzinom', 'Metastase eines kleinzelligen Bronchialkarzinoms'],
    a: 0,
    ex: 'Der Wilms-Tumor (Nephroblastom) liegt in der Niere, nicht in der Nebenniere.'
  },
  {
    id: 'k10-52', sec: '10.5', p: 34, type: 'match',
    q: 'Ordne den Nierentumor seinem Kennzeichen zu.',
    pairs: [
      ['Klarzelliges NZK', 'VHL-Inaktivierung (3p25), optisch leeres Zytoplasma'],
      ['Papilläres NZK', 'Papillen, Schaumzellen, Psammomkörper'],
      ['Chromophobes NZK', '„Pflanzenzellartiges“ Zytoplasma, Hale-Eisen+'],
      ['Onkozytom', 'Mahagonibraun mit zentraler sternförmiger Narbe'],
      ['Angiomyolipom', 'Fett, glatte Muskulatur, dickwandige Gefäße']
    ],
    ex: 'Chromophobes NZK und Onkozytom stammen aus den Schaltzellen. Das Angiomyolipom ist ein PEComa.'
  },
  {
    id: 'k10-53', sec: '10.5', p: 35, type: 'match',
    q: 'Ordne das familiäre Syndrom seinem Nierentumor zu.',
    pairs: [
      ['Von-Hippel-Lindau', 'Klarzelliges NZK, multipel/bilateral'],
      ['Hereditäres papilläres NZK (MET)', 'Papilläres NZK Typ 1'],
      ['Birt-Hogg-Dubé', 'Chromophobes NZK/Onkozytom'],
      ['Tuberöse Sklerose', 'Angiomyolipome'],
      ['Hereditäre Leiomyomatose (FH)', 'Aggressives papilläres NZK']
    ],
    ex: 'VHL außerdem: Hämangioblastome ZNS/Retina, Phäochromozytom, Pankreaszysten/NET.'
  },
  {
    id: 'k10-54', sec: '10.5', p: 34, type: 'match',
    q: 'Ordne die Paraneoplasie des Nierenzellkarzinoms ihrem Mediator zu.',
    pairs: [
      ['Polyglobulie', 'EPO'],
      ['Hyperkalzämie', 'PTHrP'],
      ['Hypertonie', 'Renin']
    ],
    ex: 'Weitere Paraneoplasie: Stauffer-Syndrom. Die klassische Trias (Flankenschmerz, Tumor, Makrohämaturie) ist selten.'
  },
  {
    id: 'k10-55', sec: '10.5', p: 34, type: 'single',
    q: 'Wonach richtet sich das ISUP/WHO-Grading (G1–G3) des Nierenzellkarzinoms?',
    opts: ['Nach der Nukleolengröße', 'Nach der Tumorgröße', 'Nach dem Wachstumsmuster (wie beim Gleason-Score)'],
    a: 0,
    ex: 'ISUP/WHO-Grading nach Nukleolengröße (G1–G3); G4 = sarkomatoid/rhabdoid/extreme Pleomorphie. Das Grading gibt Hinweise auf die Prognose.'
  },
  {
    id: 'k10-56', sec: '10.5', p: 34, type: 'single',
    q: 'Welche Prognose-Reihenfolge der NZK-Typen trifft zu (beste zuerst)?',
    opts: [
      'Chromophob > papillär > klarzellig > Ductus Bellini',
      'Klarzellig > papillär > chromophob > Ductus Bellini',
      'Ductus Bellini > klarzellig > papillär > chromophob'
    ],
    a: 0,
    ex: 'Die histologischen Typen unterscheiden sich leicht in ihrer Prognose: chromophob > papillär > klarzellig > Bellini (sehr aggressiv).'
  },
  {
    id: 'k10-57', sec: '10.5', p: 34, type: 'kprim',
    q: 'Nierenzellkarzinom – welche Aussagen treffen zu?',
    st: [
      ['Die Schnittfläche ist gelblich-bunt (Lipide).', true],
      ['Tumorzapfen können in die V. renalis und V. cava wachsen.', true],
      ['Das klarzellige NZK hat eine rotbraune Schnittfläche.', false],
      ['Das NZK ist strahlen- und chemosensibel.', false]
    ],
    ex: 'Makro: gelblich-bunt, Einblutungen, Nekrosen, Pseudokapsel, Tumorzapfen; 10–20 % primär metastasiert (hämatogen). Das NZK ist strahlen- und chemoresistent.'
  },
  {
    id: 'k10-58', sec: '10.5', p: 35, type: 'kprim',
    q: 'Wilms-Tumor (Nephroblastom) – welche Aussagen treffen zu?',
    st: [
      ['Er ist der häufigste Nierentumor im Kindesalter.', true],
      ['Er ist triphasisch (Blastem, Epithel, Stroma).', true],
      ['Er liegt typischerweise in der Nebenniere.', false],
      ['Die Prognose ist schlecht.', false]
    ],
    ex: 'Wilms-Tumor: 2–5 J, WT1 (WAGR, Denys-Drash, Beckwith-Wiedemann), Bauchtumor, gute Prognose; liegt in der Niere.'
  },
  {
    id: 'k10-59', sec: '10.5', p: 35, type: 'match',
    q: 'Ordne den Nebennierentumor seinem Kennzeichen zu.',
    pairs: [
      ['Phäochromozytom', 'Mark, Erwachsene, 10er-Regel'],
      ['Neuroblastom', 'Mark, Kinder, Homer-Wright-Rosetten'],
      ['Nebennierenrindenadenom', 'Cushing/Conn/inaktiv („Inzidentalom“)']
    ],
    ex: 'Phäochromozytom: MEN2, VHL, NF1. Neuroblastom: Katecholamine. Metastasen in der NN v. a. vom kleinzelligen Bronchial-Ca, Mamma, Melanom.'
  },
  {
    id: 'k10-60', sec: '10.5', p: 35, type: 'single',
    q: 'Wie wird ein metastasiertes Nierenzellkarzinom behandelt?',
    opts: [
      'Targeted Therapy (VEGF-TKI, mTOR-Inhibitoren) + Immuncheckpoint-Inhibitoren',
      'Alleinige Strahlentherapie',
      'Klassische Chemotherapie als Standard'
    ],
    a: 0,
    ex: 'Das NZK ist strahlen- und chemoresistent. Lokal: (nephronsparende) Teilresektion bzw. radikale Nephrektomie, wenn möglich Metastasenresektion.'
  },
  {
    id: 'k10-61', sec: '10.5', p: 34, type: 'single',
    q: 'Welcher Nierentumor ist immer benigne?',
    opts: ['Onkozytom', 'Chromophobes NZK', 'Ductus-Bellini-Karzinom', 'Papilläres NZK Typ 2'],
    a: 0,
    ex: 'Onkozytom (~5 %, Schaltzellen): immer benigne.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k10-t01', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Erythrozytenzylinder entstehen in den Tubuli.', ex: 'Erythrozytenzylinder entstehen in den Tubuli und sind pathognomonisch für eine entzündliche glomeruläre Erkrankung.' },
  { id: 'k10-t02', sec: '10.1', p: 32, type: 'tf', a: false, q: 'Die Poststreptokokken-GN tritt typischerweise 1–2 Tage nach dem Infekt auf.', ex: '1–3 (1–4) Wochen nach dem Infekt (Altfrage 2010).' },
  { id: 'k10-t03', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Bei der Poststreptokokken-GN ist das Serum-C3 erniedrigt.', ex: 'Poststreptokokken-GN: C3 ↓, subepitheliale „Humps“.' },
  { id: 'k10-t04', sec: '10.1', p: 32, type: 'tf', a: false, q: 'Die IgA-Nephropathie ist eine seltene Glomerulonephritis.', ex: 'IgA-Nephropathie: häufigste GN weltweit.' },
  { id: 'k10-t05', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Die IgA-Nephropathie ist die renale Form der Purpura Schönlein-Henoch.', ex: 'IgA-Nephropathie (Berger): renale Form der Purpura Schönlein-Henoch.' },
  { id: 'k10-t06', sec: '10.1', p: 32, type: 'tf', a: false, q: 'Die Minimal-Change-GN ist typischerweise steroidresistent.', ex: 'Minimal Change: steroidsensibel. Steroidresistent ist die FSGS.' },
  { id: 'k10-t07', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Die FSGS führt zu einem steroidresistenten nephrotischen Syndrom.', ex: 'FSGS: fokal-segmentale Sklerose; steroidresistent; Rezidiv im Transplantat.' },
  { id: 'k10-t08', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Anti-PLA2R-Antikörper sind typisch für die membranöse GN.', ex: 'Membranöse GN: subepitheliale Deposits, „Spikes“, Anti-PLA2R.' },
  { id: 'k10-t09', sec: '10.1', p: 32, type: 'tf', a: false, q: 'Die diabetische Nephropathie ist eine Immunkomplex-GN.', ex: 'Diabetische Nephropathie: keine GN, keine Immunkomplexe (Altfrage 2012, 2024).' },
  { id: 'k10-t10', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Die diabetische Nephropathie ist die häufigste Ursache der terminalen Niereninsuffizienz.', ex: 'Diabetische Nephropathie = häufigste Ursache der terminalen NI.' },
  { id: 'k10-t11', sec: '10.1', p: 33, type: 'tf', a: false, q: 'Beim Goodpasture-Syndrom zeigt die Immunfluoreszenz granuläre Ablagerungen.', ex: 'Goodpasture: lineare IgG-Fluoreszenz. Granulär → Immunkomplexe.' },
  { id: 'k10-t12', sec: '10.1', p: 33, type: 'tf', a: false, q: 'Das Goodpasture-Syndrom betrifft v. a. ältere Frauen.', ex: 'Goodpasture: Männer > Frauen, junge Männer < 40 J.' },
  { id: 'k10-t13', sec: '10.1', p: 33, type: 'tf', a: true, q: 'Unbehandelt verläuft das Goodpasture-Syndrom in ca. 90 % letal.', ex: 'Goodpasture: unbehandelt ~90 % letal.' },
  { id: 'k10-t14', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Beim nephrotischen Syndrom besteht durch AT-III-Verlust eine Thromboseneigung.', ex: 'Nephrotisch: Thromboseneigung (AT-III-Verlust), Infektanfälligkeit (IgG-Verlust), Vitamin-D-Mangel.' },
  { id: 'k10-t15', sec: '10.1', p: 32, type: 'tf', a: false, q: 'Die membranöse GN ist die häufigste Ursache des nephrotischen Syndroms bei Kindern.', ex: 'Bei Kindern Minimal Change; die membranöse GN ist bei Erwachsenen am häufigsten.' },
  { id: 'k10-t16', sec: '10.1', p: 32, type: 'tf', a: true, q: 'Die MPGN Typ I zeigt Doppelkonturen der Basalmembran.', ex: 'MPGN Typ I: Immunkomplexe (HCV/HBV), Doppelkonturen der GBM, C3 ↓.' },
  { id: 'k10-t17', sec: '10.1', p: 32, type: 'tf', a: false, q: 'Die pauci-immune RPGN (Typ III) ist typischerweise ANCA-negativ.', ex: 'RPGN Typ III: pauci-immun, ANCA (GPA c-ANCA, MPA p-ANCA).' },
  { id: 'k10-t18', sec: '10.2', p: 33, type: 'tf', a: true, q: 'Die aszendierende Pyelonephritis betrifft Frauen etwa 3-mal häufiger.', ex: 'Aszendierend: Frauen 3 : 1.' },
  { id: 'k10-t19', sec: '10.2', p: 33, type: 'tf', a: false, q: 'Bei der akuten eitrigen Pyelonephritis kommt es typischerweise zur Glomerulosklerose.', ex: 'Die Glomeruli bleiben verschont (Altfrage 2018, 2022).' },
  { id: 'k10-t20', sec: '10.2', p: 33, type: 'tf', a: true, q: 'Leukozytenzylinder sind typisch für die akute Pyelonephritis.', ex: 'Granulozyten interstitiell und intratubulär (Leukozytenzylinder).' },
  { id: 'k10-t21', sec: '10.2', p: 33, type: 'tf', a: false, q: 'Die akute Pyelonephritis ist meist viral bedingt.', ex: 'Die Pyelonephritis ist bakteriell (Altfrage 2019).' },
  { id: 'k10-t22', sec: '10.2', p: 33, type: 'tf', a: true, q: 'Die chronische Pyelonephritis macht ca. 20 % aller chronischen Niereninsuffizienzen aus.', ex: 'Chronische Pyelonephritis: ~20 % aller chronischen NI.' },
  { id: 'k10-t23', sec: '10.2', p: 33, type: 'tf', a: true, q: 'Die xanthogranulomatöse Pyelonephritis ist eine Differenzialdiagnose des Nierenzellkarzinoms.', ex: 'Xanthogranulomatöse Pyelonephritis: Schaumzellen, Abszesse (DD NZK).' },
  { id: 'k10-t24', sec: '10.2', p: 33, type: 'tf', a: false, q: 'Die „Kittniere“ ist eine Folge der chronischen E.-coli-Pyelonephritis.', ex: 'Kittniere = Nierentuberkulose (eingedicktes Nekrosematerial).' },
  { id: 'k10-t25', sec: '10.2', p: 33, type: 'tf', a: true, q: 'Die Analgetikanephropathie (Phenacetin) erhöht das Risiko für ein Urothelkarzinom des Nierenbeckens.', ex: 'Analgetikanephropathie: Papillennekrosen, Urothel-Ca des Nierenbeckens.' },
  { id: 'k10-t26', sec: '10.3', p: 34, type: 'tf', a: false, q: 'Bei der Hydronephrose bilden sich Nierenrindenzysten.', ex: 'Die Hydronephrose verursacht keine Rindenzysten (Altfrage 2012, 2016, 2020).' },
  { id: 'k10-t27', sec: '10.3', p: 33, type: 'tf', a: true, q: 'Die einfache Nierenzyste ist meist ein gutartiger Zufallsbefund ohne OP-Indikation.', ex: 'Einfache Nierenzyste: häufig, gutartig, echofrei mit dorsaler Schallverstärkung, meist ohne OP-Indikation.' },
  { id: 'k10-t28', sec: '10.3', p: 33, type: 'tf', a: false, q: 'Die ARPKD (Potter I) ist die Erwachsenenform der Zystennieren.', ex: 'Potter I = ARPKD = infantile Form; Erwachsenentyp = ADPKD (Potter III).' },
  { id: 'k10-t29', sec: '10.3', p: 33, type: 'tf', a: true, q: 'Die ADPKD ist mit Hirnbasisaneurysmen assoziiert.', ex: 'ADPKD: Leberzysten, Hirnbasisaneurysmen (SAB), Hypertonie.' },
  { id: 'k10-t30', sec: '10.3', p: 33, type: 'tf', a: false, q: 'Die multizystische Nierendysplasie geht typischerweise mit Leberzysten einher.', ex: 'Potter II: meist einseitig, keine Leberbeteiligung.' },
  { id: 'k10-t31', sec: '10.3', p: 34, type: 'tf', a: true, q: 'Erworbene Nierenzysten bei Langzeitdialyse erhöhen das NZK-Risiko.', ex: 'Erworbene Zysten bei Langzeitdialyse → NZK-Risiko ↑.' },
  { id: 'k10-t32', sec: '10.3', p: 34, type: 'tf', a: false, q: 'Die Markschwammniere ist eine erbliche Erkrankung.', ex: 'Markschwammniere: angeboren, aber nicht erblich.' },
  { id: 'k10-t33', sec: '10.4', p: 34, type: 'tf', a: false, q: 'Cholesterin ist ein häufiger Bestandteil von Nierensteinen.', ex: 'Nierensteine bestehen nie aus Cholesterin (Altfrage 2009, 2022–2024).' },
  { id: 'k10-t34', sec: '10.4', p: 34, type: 'tf', a: true, q: 'Kalziumoxalatsteine sind mit ca. 70–75 % am häufigsten.', ex: 'Kalziumoxalat ~70–75 %.' },
  { id: 'k10-t35', sec: '10.4', p: 34, type: 'tf', a: true, q: 'Harnsäuresteine sind röntgennegativ.', ex: 'Harnsäure/Urat: röntgennegativ; Gicht, Zellzerfall.' },
  { id: 'k10-t36', sec: '10.4', p: 34, type: 'tf', a: false, q: 'Struvitsteine bestehen aus Kalziumoxalat.', ex: 'Struvit = Magnesium-Ammonium-Phosphat (Infektsteine durch Proteus).' },
  { id: 'k10-t37', sec: '10.4', p: 34, type: 'tf', a: true, q: 'Der anämische Niereninfarkt entsteht meist embolisch.', ex: 'Anämischer Niereninfarkt: meist embolisch (Vorhofflimmern, Endokarditis).' },
  { id: 'k10-t38', sec: '10.4', p: 34, type: 'tf', a: false, q: 'Die benigne Nephrosklerose zeigt fibrinoide Arteriolonekrosen.', ex: 'Fibrinoide Arteriolonekrosen → maligne Nephrosklerose. Benigne: hyaline Arteriolosklerose.' },
  { id: 'k10-t39', sec: '10.4', p: 34, type: 'tf', a: true, q: 'Bei der Schockniere findet sich eine akute Tubulusnekrose.', ex: 'Schockniere: blasse geschwollene Rinde, dunkelrotes Mark, akute Tubulusnekrose.' },
  { id: 'k10-t40', sec: '10.4', p: 34, type: 'tf', a: false, q: 'Bei chronischer Niereninsuffizienz steigt die EPO-Produktion.', ex: 'Chronische NI: renale Anämie durch EPO ↓.' },
  { id: 'k10-t41', sec: '10.5', p: 34, type: 'tf', a: true, q: 'Das Nierenzellkarzinom ist das dritthäufigste urologische Malignom.', ex: 'NZK: dritthäufigstes urologisches Malignom nach Prostata und Harnblase.' },
  { id: 'k10-t42', sec: '10.5', p: 34, type: 'tf', a: false, q: 'Das papilläre NZK ist der häufigste Typ.', ex: 'Klarzellig 70–80 %, papillär ~10–15 % (Altfrage 2008).' },
  { id: 'k10-t43', sec: '10.5', p: 34, type: 'tf', a: true, q: 'Das klarzellige NZK entsteht aus dem proximalen Tubulus.', ex: 'Klarzelliges NZK: proximaler Tubulus, VHL-Inaktivierung (3p25).' },
  { id: 'k10-t44', sec: '10.5', p: 34, type: 'tf', a: false, q: 'Das chromophobe NZK entsteht aus dem proximalen Tubulus.', ex: 'Chromophobes NZK: Schaltzellen (distaler Tubulus/Sammelrohr).' },
  { id: 'k10-t45', sec: '10.5', p: 34, type: 'tf', a: true, q: 'Kleine papilläre Nierentumoren (< 15 mm, low grade) gelten als papilläres Adenom.', ex: 'Kleine papilläre Tumoren (< 15 mm, low grade) = papilläres Adenom (benigne).' },
  { id: 'k10-t46', sec: '10.5', p: 34, type: 'tf', a: false, q: 'Das Ductus-Bellini-Karzinom hat eine gute Prognose.', ex: 'Ductus-Bellini-Karzinom: sehr aggressiv.' },
  { id: 'k10-t47', sec: '10.5', p: 34, type: 'tf', a: true, q: 'Das Onkozytom ist immer benigne.', ex: 'Onkozytom: immer benigne (Altfrage).' },
  { id: 'k10-t48', sec: '10.5', p: 35, type: 'tf', a: false, q: 'Das Onkozytom besteht aus kleinen basophilen Zellen.', ex: 'Onkozytom: körnig-eosinophiles, mitochondrienreiches Zytoplasma (Altfrage 2025).' },
  { id: 'k10-t49', sec: '10.5', p: 34, type: 'tf', a: true, q: 'Das Angiomyolipom ist mit der tuberösen Sklerose assoziiert.', ex: 'Angiomyolipom (PEComa): tuberöse Sklerose (TSC1/2).' },
  { id: 'k10-t50', sec: '10.5', p: 35, type: 'tf', a: false, q: 'Das Nierenzellkarzinom ist strahlen- und chemosensibel.', ex: 'Das NZK ist strahlen- und chemoresistent.' },
  { id: 'k10-t51', sec: '10.5', p: 35, type: 'tf', a: true, q: 'Das Phäochromozytom ist mit MEN2, VHL und NF1 assoziiert.', ex: 'Phäochromozytom: Erwachsene; 10er-Regel; MEN2, VHL, NF1.' },
  { id: 'k10-t52', sec: '10.5', p: 35, type: 'tf', a: false, q: 'Der Wilms-Tumor liegt typischerweise in der Nebenniere.', ex: 'Der Wilms-Tumor liegt in der Niere (Altfrage 2008, 2024, 2025).' },
  { id: 'k10-t53', sec: '10.5', p: 35, type: 'tf', a: true, q: 'Nebennierenmetastasen stammen v. a. vom kleinzelligen Bronchialkarzinom, Mamma- und Melanom.', ex: 'Metastasen in der NN: v. a. kleinzelliges Bronchial-Ca, Mamma, Melanom.' }
]);
