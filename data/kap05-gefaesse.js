/* Kapitel 5 – Gefäße: Vaskulitis, Aneurysma, Thrombose, Gefäßtumoren (PDF S. 16–18) */
PQ.registerChapter(5, [

  /* ---------- 5.1 Vaskulitiden ---------- */
  {
    id: 'k5-01', sec: '5.1', p: 16, type: 'kprim', alt: '2013',
    q: 'Riesenzellarteriitis – welche Aussagen treffen zu?',
    st: [
      ['Sie ist die häufigste Vaskulitis in Deutschland.', true],
      ['Im akuten Stadium zeigt sich eine lymphozytär-granulomatöse Entzündung mit mehrkernigen Riesenzellen.', true],
      ['Sie befällt mittlere bis große Gefäße der oberen Körperhälfte bzw. des Kopfes.', true],
      ['Der Myokardinfarkt ist eine häufige Komplikation.', false]
    ],
    ex: 'Gefürchtet sind bei der RZA Erblindung (A. ophthalmica), Schlaganfall und Aortenaneurysma – nicht der Myokardinfarkt.'
  },
  {
    id: 'k5-02', sec: '5.1', p: 16, type: 'single', alt: '2021–2023',
    q: 'Riesenzellarteriitis – welche Aussage ist FALSCH?',
    opts: [
      'Histologisch ist eine fibrinöse und granulozytäre Entzündung typisch.',
      'Es besteht die Gefahr einer Erblindung.',
      'Die BSG ist erhöht.',
      'Sie tritt meist nach dem 50. Lebensjahr auf.',
      'Sie ist mit einer Polymyalgia rheumatica assoziiert.'
    ],
    a: 0,
    ex: 'RZA-Histologie: lymphozytär-granulomatöse Panarteriitis mit mehrkernigen Riesenzellen an der fragmentierten Elastica interna, Intimaproliferation (Typ-IV-Reaktion). Granulozyten in der Gefäßwand sind typisch für die leukozytoklastische IgA-Vaskulitis.'
  },
  {
    id: 'k5-03', sec: '5.1', p: '16–17', type: 'single', alt: '2025',
    q: 'Eine 72-jährige Frau mit Kopfschmerz und Sehstörung erhält eine Biopsie der A. temporalis. Welche Aussage zur vorliegenden Erkrankung trifft zu?',
    opts: [
      'In der Gefäßwand lassen sich (nicht immer, nur fokal) mehrkernige Riesenzellen nachweisen.',
      'Typisch sind Thrombosen ohne Entzündung.',
      'Die Entzündung ist immer sehr ausgeprägt.',
      'Es entstehen nie Aneurysmen.',
      'Die Erkrankung ist primär degenerativ.'
    ],
    a: 0,
    ex: 'Riesenzellarteriitis: Riesenzellen sind wegen des segmentalen Befalls nicht in jedem Schnitt zu finden (Biopsie ≥ 1 cm). Ein Aortenaneurysma ist eine mögliche Komplikation. Im Original war das eine Bildfrage – die Antworten lassen sich aber ohne Bild lösen.'
  },
  {
    id: 'k5-04', sec: '5.1', p: 17, type: 'single', alt: '2010',
    q: 'Vaskulitiden – welche Aussage ist FALSCH?',
    opts: [
      'Die Panarteriitis nodosa befällt überwiegend kapilläre Gefäße.',
      'Die Chapel-Hill-Einteilung erfolgt u. a. nach der Gefäßgröße.',
      'Bei rheumatoider Arthritis kann eine sekundäre Vaskulitis auftreten.',
      'Der M. Buerger betrifft die Extremitäten.',
      'Die Purpura Schönlein-Henoch ist die häufigste systemische Vaskulitis bei Kindern.'
    ],
    a: 0,
    ex: 'PAN: nekrotisierende Vaskulitis mittelgroßer muskulärer Arterien (nicht Kapillaren!), ANCA-negativ, HBV-assoziiert, Mikroaneurysmen, keine Glomerulonephritis.'
  },
  {
    id: 'k5-05', sec: '5.1', p: 17, type: 'single', alt: '2013',
    q: 'Chapel-Hill-Klassifikation – welche Zuordnung ist FALSCH?',
    opts: [
      'Riesenzellarteriitis – überwiegend kleine Gefäße',
      'Takayasu-Arteriitis – große Gefäße',
      'Panarteriitis nodosa – mittelgroße Gefäße',
      'Mikroskopische Polyangiitis – kleine Gefäße (ANCA-assoziiert)',
      'IgA-Vaskulitis – kleine Gefäße (Immunkomplex)'
    ],
    a: 0,
    ex: 'Große Gefäße: RZA, Takayasu. Mittelgroße: PAN, Kawasaki. Kleine, ANCA-assoziiert: GPA, MPA, EGPA. Kleine, Immunkomplex: IgA-Vaskulitis, kryoglobulinämische und kutane leukozytoklastische Vaskulitis, Anti-GBM.'
  },
  {
    id: 'k5-06', sec: '5.1', p: 17, type: 'single', alt: '2015',
    q: 'M. Wegener (GPA): Welcher Befund ist für die Diagnose am WENIGSTEN hilfreich?',
    opts: ['ANA im Serum', 'c-ANCA im Serum', 'Granulome in Lunge und Niere', 'Beginn im oberen Nasen-Rachen-Raum', 'Granulomatöse Vaskulitis'],
    a: 0,
    ex: 'GPA: nekrotisierende granulomatöse Entzündung, beginnt im oberen Respirationstrakt (Nase, NNH) → Lunge (Granulome, Kavernen) → Niere (RPGN, pulmorenales Syndrom); c-ANCA (PR3) in 50–95 %. ANA sind dagegen typisch für den SLE.'
  },
  {
    id: 'k5-07', sec: '5.1', p: 16, type: 'match',
    q: 'Ordne die Vaskulitis der befallenen Gefäßgröße zu (Chapel Hill 2012).',
    pairs: [
      ['Riesenzellarteriitis', 'Große Gefäße'],
      ['Panarteriitis nodosa', 'Mittelgroße Gefäße'],
      ['Mikroskopische Polyangiitis', 'Kleine Gefäße, ANCA-assoziiert'],
      ['IgA-Vaskulitis (Schönlein-Henoch)', 'Kleine Gefäße, Immunkomplex'],
      ['M. Behçet', 'Variable Gefäßgröße']
    ],
    ex: 'Große: RZA, Takayasu · mittelgroße: PAN, Kawasaki · kleine ANCA-assoziierte (pauci-immun): GPA, MPA, EGPA · kleine Immunkomplex-Vaskulitiden: IgA, kryoglobulinämisch, kutan leukozytoklastisch, Anti-GBM · variabel: M. Behçet, Cogan-Syndrom.'
  },
  {
    id: 'k5-08', sec: '5.1', p: 16, type: 'match',
    q: 'Ordne die Vaskulitis ihrem Leitbefund zu.',
    pairs: [
      ['GPA (M. Wegener)', 'c-ANCA (Proteinase 3), nekrotisierende Granulome'],
      ['Mikroskopische Polyangiitis', 'p-ANCA (MPO), nicht granulomatös'],
      ['EGPA (Churg-Strauss)', 'Asthma + Eosinophilie + Granulome'],
      ['Panarteriitis nodosa', 'HBV-assoziiert, ANCA-negativ, Mikroaneurysmen'],
      ['Kryoglobulinämische Vaskulitis', 'HCV (80 %), Komplement ↓']
    ],
    ex: 'c-ANCA (zytoplasmatisch) → Proteinase 3 → GPA; p-ANCA (perinukleär) → Myeloperoxidase → MPA, EGPA. Kryoglobulinämische Vaskulitis: IgM-IgG-Komplexe, HCV (80 %), Komplement ↓, Rheumafaktor +.'
  },
  {
    id: 'k5-09', sec: '5.1', p: 16, type: 'single',
    q: 'Welche Beschreibung passt zur Takayasu-Arteriitis?',
    opts: [
      'Junge Frauen < 40 J, Aorta und Abgänge, „pulseless disease“',
      'Patienten > 50 J, A. temporalis, Kauclaudicatio',
      'Kinder, Koronaraneurysmen, mukokutanes Lymphknotensyndrom',
      'Junge männliche Raucher, Arterien und Venen der Extremitäten'
    ],
    a: 0,
    ex: 'Takayasu: junge Frauen < 40 J, Aorta und Abgänge, „pulseless disease“, Histologie wie RZA. Die anderen Beschreibungen passen zu RZA, Kawasaki und M. Buerger.'
  },
  {
    id: 'k5-10', sec: '5.1', p: 16, type: 'single',
    q: 'Panarteriitis nodosa – welche Aussage trifft zu?',
    opts: [
      'Sie ist HBV-assoziiert und bildet Mikroaneurysmen.',
      'Sie befällt überwiegend Kapillaren.',
      'Sie ist typischerweise c-ANCA-positiv.',
      'Sie geht typischerweise mit einer Glomerulonephritis einher.'
    ],
    a: 0,
    ex: 'PAN: nekrotisierend, mittelgroße muskuläre Arterien (nicht Kapillaren!), ANCA-negativ, HBV-assoziiert, Mikroaneurysmen („nodosa“), Nieren-/Darm-/Koronar-/Nerveninfarkte, keine Glomerulonephritis; Typ III.'
  },
  {
    id: 'k5-11', sec: '5.1', p: 16, type: 'single',
    q: 'Welche Vaskulitis ist mit Asthma, Eosinophilie (> 10 %) und Granulomen assoziiert?',
    opts: ['EGPA (Churg-Strauss)', 'GPA (M. Wegener)', 'Mikroskopische Polyangiitis', 'Panarteriitis nodosa'],
    a: 0,
    ex: 'EGPA: Asthma + Eosinophilie (> 10 %) + Granulome, Neuropathie, Endomyokarditis; p-ANCA; IgE ↑.'
  },
  {
    id: 'k5-12', sec: '5.1', p: 16, type: 'single',
    q: 'Welcher histologische Befund ist typisch für die Purpura Schönlein-Henoch (IgA-Vaskulitis)?',
    opts: [
      'Leukozytoklastische Vaskulitis mit Granulozyten in der Gefäßwand, fibrinoiden Kapillarwandnekrosen und IgA-Ablagerungen',
      'Lymphozytär-granulomatöse Panarteriitis mit mehrkernigen Riesenzellen',
      'Nekrotisierende granulomatöse Entzündung des oberen Respirationstrakts',
      'Nekrotisierende Arteriitis mittelgroßer Arterien mit Mikroaneurysmen'
    ],
    a: 0,
    ex: 'IgA-Vaskulitis: häufigste systemische Vaskulitis bei Kindern/jungen Patienten, nach Atemwegsinfekt; palpable Purpura (Beine/Gesäß), Arthralgien, Bauchschmerzen, IgA-Nephritis; Serum-IgA ↑; Typ III.'
  },
  {
    id: 'k5-13', sec: '5.1', p: 16, type: 'single',
    q: 'Welcher Hypersensitivitätstyp liegt der Riesenzellarteriitis zugrunde?',
    opts: ['Typ IV', 'Typ I', 'Typ II', 'Typ III'],
    a: 0,
    ex: 'RZA = Typ IV (zellulär). Panarteriitis nodosa und IgA-Vaskulitis sind dagegen Typ-III-Reaktionen (Immunkomplexe).'
  },
  {
    id: 'k5-14', sec: '5.1', p: 16, type: 'single',
    q: 'Thrombangiitis obliterans (M. Winiwarter-Buerger) – welche Beschreibung trifft zu?',
    opts: [
      'Segmentale Panvaskulitis kleiner/mittlerer Arterien und Venen der Extremitäten bei jungen männlichen Rauchern',
      'Arteriosklerose der Becken-/Beinarterien',
      'Riesenzellige Vaskulitis großer Gefäße bei Patienten > 50 J',
      'IgA-Immunkomplexvaskulitis bei Kindern nach Atemwegsinfekt'
    ],
    a: 0,
    ex: 'M. Buerger: Thrombose → Obliteration, Akrennekrosen, Thrombophlebitis migrans; Ursache peripherer Durchblutungsstörungen ohne Arteriosklerose.'
  },
  {
    id: 'k5-15', sec: '5.1', p: 16, type: 'single',
    q: 'Warum sollte die Temporalisbiopsie bei V. a. Riesenzellarteriitis mindestens 1 cm lang sein?',
    opts: [
      'Wegen des segmentalen Befalls – Riesenzellen sind nicht in jedem Schnitt zu finden.',
      'Weil die Riesenzellarteriitis vor allem die Kapillaren befällt.',
      'Weil die Diagnose über c-ANCA im Gewebe gestellt wird.',
      'Weil die Entzündung immer diffus die ganze Arterie erfasst.'
    ],
    a: 0,
    ex: 'Riesenzellen sind nicht in jedem Schnitt nachweisbar (segmentaler Befall) → Biopsie ≥ 1 cm. Die RZA befällt mittlere bis große Arterien; c-ANCA gehört zur GPA.'
  },
  {
    id: 'k5-16', sec: '5.1', p: 16, type: 'single',
    q: 'Welche Komplikation ist bei der Riesenzellarteriitis besonders gefürchtet?',
    opts: ['Erblindung (Befall der A. ophthalmica)', 'Myokardinfarkt', 'Rapid-progressive Glomerulonephritis', 'Koronaraneurysmen'],
    a: 0,
    ex: 'RZA: Gefahr der Erblindung (A. ophthalmica) und des Schlaganfalls, Aortenaneurysma. Der Myokardinfarkt wurde in der Altfrage 2013 als falsch gewertet. RPGN → GPA/MPA; Koronaraneurysmen → Kawasaki.'
  },

  /* ---------- 5.2 Aneurysma & Dissektion ---------- */
  {
    id: 'k5-17', sec: '5.2', p: 17, type: 'single', alt: '2008, 2018, 2021',
    q: 'Was ist KEINE Ursache für ein Aortenaneurysma?',
    opts: ['Einnahme von Aminoglykosiden', 'Atherosklerose', 'Lues', 'Kokainabusus', 'Marfan-Syndrom'],
    a: 0,
    ex: 'Ursachen: Atherosklerose (häufigste), Trauma, Lues, Marfan, Ehlers-Danlos, Kokain, mykotisch/infektiös, Vaskulitis (RZA, Takayasu, Kawasaki). Nicht: Aminoglykoside.'
  },
  {
    id: 'k5-18', sec: '5.2', p: 17, type: 'match',
    q: 'Ordne die Aneurysmaform ihrer Definition zu.',
    pairs: [
      ['Aneurysma verum', 'Alle Wandschichten erweitert (sack- oder spindelförmig)'],
      ['Aneurysma spurium', 'Perivaskuläres Hämatom nach Wandverletzung (z. B. Punktion)'],
      ['Aneurysma dissecans', 'Intimaeinriss, Blutung in die Media mit falschem Lumen']
    ],
    ex: 'Verum = echtes Aneurysma aller Wandschichten; spurium = „falsches“ Aneurysma (Hämatom nach Punktion); dissecans = Einriss der Intima mit Blutung in die Media.'
  },
  {
    id: 'k5-19', sec: '5.2', p: 17, type: 'single',
    q: 'Wo liegen atherosklerotische Aortenaneurysmen in ca. 85 % der Fälle?',
    opts: ['Infrarenale Aorta abdominalis', 'Aorta ascendens', 'Aortenbogen', 'Suprarenale Aorta abdominalis'],
    a: 0,
    ex: 'Atherosklerose ist die häufigste Ursache; ca. 85 % liegen in der infrarenalen Aorta abdominalis. Die Mesaortitis luetica betrifft dagegen Aorta ascendens und Bogen.'
  },
  {
    id: 'k5-20', sec: '5.2', p: 17, type: 'single',
    q: 'Was ist typisch für die Mesaortitis luetica?',
    opts: [
      'Befall von Aorta ascendens/Bogen, Vasa-vasorum-Endarteriitis, „Baumrindenaorta“',
      'Atherosklerotischer Befall der infrarenalen Aorta',
      'Zystische Medianekrose bei Fibrillin-Defekt',
      'Mediaverkalkung ohne Lumeneinengung'
    ],
    a: 0,
    ex: 'Lues: Aorta ascendens/Bogen, Endarteriitis der Vasa vasorum, „Baumrindenaorta“. Fibrillin/zystische Medianekrose = Marfan, Mediaverkalkung ohne Stenose = Mönckeberg.'
  },
  {
    id: 'k5-21', sec: '5.2', p: 17, type: 'single',
    q: 'Welcher Durchmesser ist im Skript als Grenze für die Rupturgefahr eines Aortenaneurysmas genannt?',
    opts: ['> 5,5 cm', '> 2,5 cm', '> 3,5 cm', '> 10 cm'],
    a: 0,
    ex: 'Komplikationen des Aneurysmas: Ruptur (Durchmesser > 5,5 cm), Thrombose/Embolie, Kompression.'
  },
  {
    id: 'k5-22', sec: '5.2', p: 17, type: 'single',
    q: 'Was bedeutet eine Aortendissektion Typ Stanford A?',
    opts: [
      'Die Aorta ascendens ist beteiligt (→ OP).',
      'Nur die Aorta descendens ist betroffen.',
      'Es liegt ein perivaskuläres Hämatom nach Punktion vor.',
      'Es handelt sich um eine Mediaverkalkung ohne Stenose.'
    ],
    a: 0,
    ex: 'Stanford A: Aorta ascendens beteiligt → OP (vs. Stanford B). Ursachen: Mediadegeneration (zystische Medianekrose Erdheim-Gsell), Hypertonie, Marfan, bikuspide Klappe, Schwangerschaft, Kokain. Komplikationen: Ruptur, Hämoperikard/Tamponade, Organischämie.'
  },
  {
    id: 'k5-23', sec: '5.2', p: 17, type: 'single',
    q: 'Welche Veränderung liegt beim Marfan-Syndrom an der Aorta zugrunde?',
    opts: [
      'Fibrillin-Defekt mit zystischer Medianekrose',
      'Endarteriitis der Vasa vasorum',
      'Atherosklerotische Plaques der Intima',
      'Mediaverkalkung muskulärer Arterien'
    ],
    a: 0,
    ex: 'Marfan-Syndrom: Fibrillin, zystische Medianekrose → Aneurysma und Aortendissektion; außerdem Aortenwurzeldilatation als Ursache einer Aorteninsuffizienz.'
  },

  /* ---------- 5.3 Thrombose, Thrombophlebitis, Embolie ---------- */
  {
    id: 'k5-24', sec: '5.3', p: 17, type: 'single', alt: '2009, 2019, 2021',
    q: 'Was ist KEINE Ursache einer tiefen Venenthrombose?',
    opts: ['Längeres Radfahren im Liegerad', 'Polycythaemia vera', 'Prostatakarzinom', 'Antiphospholipid-Syndrom', 'Adipositas'],
    a: 0,
    ex: 'TVT-Ursachen u. a.: Immobilisation, OP/Trauma, Malignome (Pankreas, Prostata, Magen, Lunge), Kontrazeptiva, Schwangerschaft, Adipositas, Hyperviskosität (Polycythaemia vera), Antiphospholipid-Syndrom, HIT II, AT-III-Mangel, Faktor-V-Leiden. Nicht: Radfahren im Liegerad, isolierte Thrombozytopenie.'
  },
  {
    id: 'k5-25', sec: '5.3', p: 17, type: 'kprim', alt: '2015/2016',
    q: 'Ursachen bzw. Risikofaktoren einer tiefen Venenthrombose sind:',
    st: [
      ['Immobilisation', true],
      ['Pankreaskarzinom', true],
      ['Isolierte Thrombozytopenie', false],
      ['Heparininduzierte Thrombozytopenie (HIT)', true]
    ],
    ex: 'Eine isolierte Thrombozytopenie ist keine TVT-Ursache – die HIT II dagegen schon. Malignome (v. a. Pankreas) erhöhen das Thromboserisiko (Trousseau).'
  },
  {
    id: 'k5-26', sec: '5.3', p: 17, type: 'kprim',
    q: 'Welche Faktoren begünstigen eine tiefe Venenthrombose?',
    st: [
      ['Hyperviskositätssyndrom', true],
      ['Orale Kontrazeptiva', true],
      ['Radfahren im Liegerad', false],
      ['Faktor-V-Leiden', true]
    ],
    ex: 'Hyperviskosität (Polycythaemia vera, Paraproteinämie), orale Kontrazeptiva/Hormontherapie und Faktor-V-Leiden sind TVT-Ursachen. Radfahren im Liegerad ist keine (Altfrage).'
  },
  {
    id: 'k5-27', sec: '5.3', p: 17, type: 'match',
    q: 'Ordne die Komponente der Virchow-Trias einem Beispiel zu.',
    pairs: [
      ['Endothelschaden', 'Entzündung, Trauma'],
      ['Blutstromveränderung', 'Stase bei Immobilisation, Wirbel an Varizen'],
      ['Veränderte Blutzusammensetzung', 'Hyperkoagulabilität']
    ],
    ex: 'Virchow-Trias: (1) Endothelschaden (Entzündung, Trauma) · (2) Blutstromveränderung (Stase: Immobilisation, Herzinsuffizienz; Wirbel: Varizen) · (3) Blutzusammensetzung/Hyperkoagulabilität.'
  },
  {
    id: 'k5-28', sec: '5.3', p: 17, type: 'single',
    q: 'Wo ist die tiefe Venenthrombose am häufigsten lokalisiert?',
    opts: ['V. femoralis', 'V. poplitea', 'Unterschenkelvenen', 'V. iliaca'],
    a: 0,
    ex: 'Lokalisation: V. femoralis 50 %, V. poplitea 20 %, Unterschenkel 20 %, V. iliaca 10 %; 2/3 links (Beckenvenensporn).'
  },
  {
    id: 'k5-29', sec: '5.3', p: 17, type: 'match',
    q: 'Ordne den Befund seinem Kennzeichen zu.',
    pairs: [
      ['Abscheidungsthrombus', 'Zahn-Linien, wandhaftend, rau, brüchig'],
      ['Gerinnungsthrombus', 'Rot, homogen'],
      ['Organisation', 'Einsprossen von Endothel und Fibroblasten → Rekanalisation'],
      ['Postmortales Gerinnsel', 'Glatt, feucht-glänzend, elastisch, nicht wandhaftend']
    ],
    ex: 'Abscheidungs-(Plättchen-)Thrombus: Zahn-Linien (Lamellen aus Thrombozyten/Fibrin + Erythrozyten). Postmortales Gerinnsel: glatt, feucht-glänzend, elastisch, nicht wandhaftend, „Speckhaut“.'
  },
  {
    id: 'k5-30', sec: '5.3', p: 17, type: 'match',
    q: 'Ordne den Begriff seiner Beschreibung zu.',
    pairs: [
      ['Thrombophlebitis', 'Entzündung oberflächlicher Venen mit Thrombose'],
      ['Phlebothrombose', 'Thrombose tiefer Venen, meist ohne Entzündung'],
      ['M. Mondor', 'Thrombophlebitis seitlicher Thoraxvenen'],
      ['Thrombophlebitis migrans', 'Bei M. Buerger und Pankreaskarzinom']
    ],
    ex: 'Thrombophlebitis: epifasziale Venen (Varizen, Venenkatheter), Rubor, Calor, Dolor, keine Schwellung. Phlebothrombose: tiefe Venen, meist ohne Entzündung. Thrombophlebitis migrans/saltans: M. Buerger, Pankreas-Ca.'
  },

  /* ---------- 5.4 pAVK ---------- */
  {
    id: 'k5-31', sec: '5.4', p: 17, type: 'single', alt: '2008',
    q: 'pAVK – welche Aussage ist FALSCH?',
    opts: [
      'Im Stadium IV sind die Gewebsschäden in der Mehrzahl durch Revaskularisation reversibel.',
      'Nikotin ist (neben Diabetes mellitus) der wichtigste Risikofaktor.',
      'Das Stadium II ist durch eine Claudicatio intermittens gekennzeichnet.',
      'Bei Fieber im Stadium IV muss man an eine eitrige Osteomyelitis denken.',
      'Der M. Buerger ist eine nicht-arteriosklerotische Ursache.'
    ],
    a: 0,
    ex: 'Fontaine IV = Nekrose/Gangrän, irreversibel.'
  },
  {
    id: 'k5-32', sec: '5.4', p: 17, type: 'match',
    q: 'Ordne das Fontaine-Stadium der pAVK zu.',
    pairs: [
      ['Stadium I', 'Asymptomatisch'],
      ['Stadium IIa', 'Claudicatio, Gehstrecke > 200 m'],
      ['Stadium IIb', 'Claudicatio, Gehstrecke < 200 m'],
      ['Stadium III', 'Ruheschmerz'],
      ['Stadium IV', 'Nekrose / Gangrän']
    ],
    ex: 'Fontaine: I asymptomatisch · II Claudicatio intermittens (a > 200 m, b < 200 m) · III Ruheschmerz · IV Nekrose/Gangrän, irreversibel.'
  },

  /* ---------- 5.5 Vaskuläre Tumoren & Malformationen ---------- */
  {
    id: 'k5-33', sec: '5.5', p: 18, type: 'single', alt: '2010',
    q: 'Vaskuläre Tumoren – welche Aussage ist FALSCH?',
    opts: [
      'Glomustumoren zeigen häufig ein malignes Verhalten.',
      'Das pyogene Granulom entsteht im Rahmen entzündlicher Veränderungen.',
      'Kapilläre und kavernöse Hämangiome sind benigne.',
      'Das Kaposi-Sarkom ist in über 90 % HHV-8-positiv.',
      'Das Hämangioendotheliom ist ein intermediärer Tumor.'
    ],
    a: 0,
    ex: 'Glomustumor: modifizierte glatte Muskelzellen des Glomuskörperchens, schmerzhaft, subungual, benigne.'
  },
  {
    id: 'k5-34', sec: '5.5', p: 18, type: 'match',
    q: 'Ordne den vaskulären Tumor seinem Kennzeichen zu.',
    pairs: [
      ['Glomustumor', 'Schmerzhaft, subungual'],
      ['Pyogenes Granulom', 'Rasch wachsender, oft ulzerierter Knoten an Lippe/Finger'],
      ['Kaposi-Sarkom', 'HHV-8, Spindelzellen, schlitzförmige Gefäße'],
      ['Angiosarkom', 'Kopfhaut älterer Menschen; CD31, CD34, ERG'],
      ['Kavernöses Hämangiom', 'Häufigster benigner Lebertumor']
    ],
    ex: 'Benigne: Hämangiom, pyogenes Granulom, Glomustumor, Lymphangiom. Intermediär: Hämangioendotheliom, Kaposi-Sarkom. Maligne: Angiosarkom (sehr schlechte Prognose).'
  },
  {
    id: 'k5-35', sec: '5.5', p: 18, type: 'single',
    q: 'Was bezeichnet das Stewart-Treves-Syndrom?',
    opts: [
      'Angiosarkom bei chronischem Lymphödem nach Mastektomie',
      'Kaposi-Sarkom nach Organtransplantation',
      'Kavernöse Hämangiome bei Hippel-Lindau',
      'Zystisches Lymphangiom am Hals'
    ],
    a: 0,
    ex: 'Angiosarkom: Kopfhaut älterer Menschen, nach Bestrahlung, bei chronischem Lymphödem (Stewart-Treves nach Mastektomie), Leber (Vinylchlorid, Thorotrast, Arsen), Herz.'
  },
  {
    id: 'k5-36', sec: '5.5', p: 18, type: 'single',
    q: 'Was unterscheidet eine vaskuläre Malformation vom (infantilen) Hämangiom?',
    opts: [
      'Sie ist bei Geburt vorhanden, wächst proportional mit und bildet sich nicht zurück.',
      'Sie bildet sich typischerweise spontan zurück.',
      'Sie ist eine echte Neoplasie mit Endothelproliferation.',
      'Sie ist ein maligner Gefäßtumor.'
    ],
    a: 0,
    ex: 'Vaskuläre Malformation: keine Neoplasie, sondern Gefäßfehlbildung (kapillär „Feuermal“, venös, lymphatisch, arteriovenös); Endothel ohne Proliferation. Zerebrale AVM → intrazerebrale Blutung.'
  },
  {
    id: 'k5-37', sec: '5.5', p: 18, type: 'match',
    q: 'Ordne die Form des Kaposi-Sarkoms ihrem Kennzeichen zu.',
    pairs: [
      ['Klassisch', 'Ältere Männer aus Süd-/Osteuropa, Beine, gute Prognose'],
      ['Endemisch', 'Afrikanisch, aggressiv'],
      ['Epidemisch', 'HIV-assoziiert'],
      ['Iatrogen', 'Nach Transplantation; Rückbildung nach Reduktion der Immunsuppression']
    ],
    ex: 'Kaposi-Sarkom: HHV-8 > 90 %; Patch → Plaque → Knoten; Spindelzellen, schlitzförmige Gefäße, Erythrozytenextravasate, Hämosiderin.'
  },
  {
    id: 'k5-38', sec: '5.5', p: 18, type: 'single',
    q: 'Welche Noxe ist ein Risikofaktor für das Angiosarkom der Leber?',
    opts: ['Vinylchlorid', 'HHV-8', 'Aminoglykoside', 'Kokain'],
    a: 0,
    ex: 'Angiosarkom der Leber: Vinylchlorid, Thorotrast, Arsen. HHV-8 → Kaposi-Sarkom.'
  },
  {
    id: 'k5-39', sec: '5.5', p: 18, type: 'single',
    q: 'Welcher Gefäßtumor gilt als intermediär (lokal aggressiv, selten Metastasen)?',
    opts: ['Hämangioendotheliom', 'Glomustumor', 'Kavernöses Hämangiom', 'Angiosarkom'],
    a: 0,
    ex: 'Benigne: Hämangiom, pyogenes Granulom, Glomustumor, Lymphangiom. Intermediär: Hämangioendotheliom, Kaposi-Sarkom. Maligne: Angiosarkom.'
  },

  /* ---------- Weitere K-prim ---------- */
  {
    id: 'k5-40', sec: '5.1', p: 16, type: 'kprim',
    q: 'ANCA und Vaskulitiden – welche Aussagen treffen zu?',
    st: [
      ['Die GPA ist typischerweise c-ANCA-positiv (Proteinase 3).', true],
      ['Die mikroskopische Polyangiitis ist granulomatös.', false],
      ['Die EGPA geht mit Asthma und Eosinophilie einher.', true],
      ['Die Panarteriitis nodosa ist p-ANCA-positiv.', false]
    ],
    ex: 'MPA: p-ANCA (MPO), nekrotisierend, nicht granulomatös. PAN: ANCA-negativ, HBV-assoziiert.'
  },
  {
    id: 'k5-41', sec: '5.1', p: 16, type: 'kprim',
    q: 'Vaskulitiden – welche Zuordnungen treffen zu?',
    st: [
      ['Takayasu-Arteriitis: junge Frauen unter 40 Jahren', true],
      ['Kawasaki-Syndrom: Koronaraneurysmen bei Kindern', true],
      ['Kryoglobulinämische Vaskulitis: in ca. 80 % HBV-assoziiert', false],
      ['IgA-Vaskulitis: erhöhtes Serum-IgA', true]
    ],
    ex: 'Die kryoglobulinämische Vaskulitis ist in ca. 80 % HCV-assoziiert (IgM-IgG-Komplexe, Komplement ↓, Rheumafaktor +). HBV-assoziiert ist die Panarteriitis nodosa.'
  },
  {
    id: 'k5-42', sec: '5.2', p: 17, type: 'kprim',
    q: 'Aneurysma & Dissektion – welche Aussagen treffen zu?',
    st: [
      ['Das Aneurysma spurium ist ein perivaskuläres Hämatom nach Wandverletzung.', true],
      ['Die Mesaortitis luetica betrifft vor allem die infrarenale Aorta.', false],
      ['Das Marfan-Syndrom prädisponiert zur Aortendissektion.', true],
      ['Bei der Stanford-B-Dissektion ist die Aorta ascendens beteiligt.', false]
    ],
    ex: 'Mesaortitis luetica: Aorta ascendens/Bogen („Baumrindenaorta“); infrarenal liegen ca. 85 % der atherosklerotischen Aneurysmen. Beteiligung der Aorta ascendens = Stanford A (→ OP).'
  },
  {
    id: 'k5-43', sec: '5.3', p: 17, type: 'kprim',
    q: 'Thrombose – welche Aussagen treffen zu?',
    st: [
      ['Die V. femoralis ist mit ca. 50 % die häufigste Lokalisation der TVT.', true],
      ['Tiefe Beinvenenthrombosen treten überwiegend rechts auf.', false],
      ['Der Abscheidungsthrombus zeigt Zahn-Linien.', true],
      ['Die Thrombophlebitis betrifft die tiefen Venen.', false]
    ],
    ex: 'TVT: 2/3 links (Beckenvenensporn). Thrombophlebitis = Entzündung oberflächlicher (epifaszialer) Venen; Thrombose tiefer Venen = Phlebothrombose.'
  },
  {
    id: 'k5-44', sec: '5.4', p: 17, type: 'kprim',
    q: 'pAVK – welche Aussagen treffen zu?',
    st: [
      ['Das Fontaine-Stadium II ist durch eine Claudicatio intermittens gekennzeichnet.', true],
      ['Das Stadium IV (Nekrose/Gangrän) ist irreversibel.', true],
      ['Der M. Buerger ist eine arteriosklerotische Ursache der pAVK.', false],
      ['Fieber im Stadium IV lässt an eine eitrige Osteomyelitis denken.', true]
    ],
    ex: 'Der M. Buerger ist eine nicht-arteriosklerotische Ursache peripherer Durchblutungsstörungen (segmentale Panvaskulitis bei jungen Rauchern).'
  },
  {
    id: 'k5-45', sec: '5.5', p: 18, type: 'kprim',
    q: 'Vaskuläre Tumoren – welche Aussagen treffen zu?',
    st: [
      ['Das Angiosarkom ist CD31-, CD34- und ERG-positiv.', true],
      ['Das kavernöse Hämangiom ist der häufigste benigne Lebertumor.', true],
      ['Das Kaposi-Sarkom gilt als benigne.', false],
      ['Vaskuläre Malformationen bilden sich meist spontan zurück.', false]
    ],
    ex: 'Kaposi-Sarkom: intermediär (wie das Hämangioendotheliom). Vaskuläre Malformationen wachsen proportional mit und bilden sich nicht zurück – im Gegensatz zum Hämangiom.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k5-t01', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Die Riesenzellarteriitis ist die häufigste Vaskulitis in Deutschland.', ex: 'RZA: häufigste Vaskulitis in Deutschland; > 50 J (meist > 60).' },
  { id: 'k5-t02', sec: '5.1', p: 17, type: 'tf', a: false, q: 'Die Riesenzellarteriitis betrifft überwiegend kleine Gefäße.', ex: 'Die RZA betrifft mittlere bis große Arterien der oberen Körperhälfte/des Kopfes (Altfrage 2013).' },
  { id: 'k5-t03', sec: '5.1', p: 16, type: 'tf', a: false, q: 'Bei der Riesenzellarteriitis sind Riesenzellen in jedem Schnitt nachweisbar.', ex: 'Riesenzellen sind nicht in jedem Schnitt zu sehen (segmentaler Befall, Biopsie ≥ 1 cm).' },
  { id: 'k5-t04', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Die Riesenzellarteriitis tritt meist nach dem 50. Lebensjahr auf.', ex: 'RZA: > 50 J (meist > 60); BSG ↑↑, Assoziation mit Polymyalgia rheumatica.' },
  { id: 'k5-t05', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Die Panarteriitis nodosa ist ANCA-negativ und befällt mittelgroße muskuläre Arterien.', ex: 'PAN: mittelgroße muskuläre Arterien, ANCA-negativ, HBV-assoziiert, Mikroaneurysmen.' },
  { id: 'k5-t06', sec: '5.1', p: 16, type: 'tf', a: false, q: 'Die Panarteriitis nodosa geht typischerweise mit einer Glomerulonephritis einher.', ex: 'PAN: Nieren-, Darm-, Koronar- und Nerveninfarkte, aber keine Glomerulonephritis.' },
  { id: 'k5-t07', sec: '5.1', p: 16, type: 'tf', a: true, q: 'c-ANCA richtet sich gegen Proteinase 3 und ist typisch für die GPA.', ex: 'c-ANCA (zytoplasmatisch) → Proteinase 3 → GPA (M. Wegener).' },
  { id: 'k5-t08', sec: '5.1', p: 16, type: 'tf', a: true, q: 'p-ANCA richtet sich gegen Myeloperoxidase.', ex: 'p-ANCA (perinukleär) → Myeloperoxidase → MPA, EGPA (auch PSC, CU).' },
  { id: 'k5-t09', sec: '5.1', p: 16, type: 'tf', a: false, q: 'Die mikroskopische Polyangiitis ist typischerweise granulomatös.', ex: 'MPA: p-ANCA, nekrotisierend, nicht granulomatös; Niere 70 % (RPGN), Lungenkapillaritis.' },
  { id: 'k5-t10', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Die GPA beginnt typischerweise im oberen Respirationstrakt (Nase, Nasennebenhöhlen).', ex: 'GPA: oberer Respirationstrakt → Lunge (Granulome, Kavernen) → Niere (RPGN, pulmorenales Syndrom).' },
  { id: 'k5-t11', sec: '5.1', p: 16, type: 'tf', a: false, q: 'Die Purpura Schönlein-Henoch ist eine Typ-IV-Reaktion.', ex: 'Die IgA-Vaskulitis ist eine Typ-III-Reaktion (IgA-Immunkomplexe).' },
  { id: 'k5-t12', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Das Kawasaki-Syndrom betrifft Kinder und kann zu Koronaraneurysmen führen.', ex: 'Kawasaki: Kinder, Koronaraneurysmen, mukokutanes Lymphknotensyndrom.' },
  { id: 'k5-t13', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Die kryoglobulinämische Vaskulitis ist in ca. 80 % mit HCV assoziiert.', ex: 'Kryoglobulinämische Vaskulitis: IgM-IgG-Komplexe, HCV (80 %), Komplement ↓, Rheumafaktor +.' },
  { id: 'k5-t14', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Die Takayasu-Arteriitis betrifft typischerweise junge Frauen unter 40 Jahren.', ex: 'Takayasu: junge Frauen < 40 J, Aorta und Abgänge, „pulseless disease“.' },
  { id: 'k5-t15', sec: '5.1', p: 16, type: 'tf', a: false, q: 'Der M. Buerger ist eine Form der Arteriosklerose.', ex: 'M. Buerger ist eine segmentale Panvaskulitis – eine Ursache peripherer Durchblutungsstörungen ohne Arteriosklerose.' },
  { id: 'k5-t16', sec: '5.1', p: 16, type: 'tf', a: true, q: 'Die EGPA (Churg-Strauss) geht mit erhöhtem IgE einher.', ex: 'EGPA: Asthma + Eosinophilie + Granulome, p-ANCA, IgE ↑.' },
  { id: 'k5-t17', sec: '5.2', p: 17, type: 'tf', a: true, q: 'Ein Aneurysma spurium ist ein perivaskuläres Hämatom nach Wandverletzung.', ex: 'Aneurysma spurium: perivaskuläres Hämatom nach Wandverletzung, z. B. Punktion.' },
  { id: 'k5-t18', sec: '5.2', p: 17, type: 'tf', a: true, q: 'Beim Aneurysma verum sind alle Wandschichten erweitert.', ex: 'Aneurysma verum: alle Wandschichten erweitert, sack- oder spindelförmig.' },
  { id: 'k5-t19', sec: '5.2', p: 17, type: 'tf', a: false, q: 'Aminoglykoside sind eine typische Ursache von Aortenaneurysmen.', ex: 'Aminoglykoside sind keine Ursache (Altfrage 2008, 2018, 2021).' },
  { id: 'k5-t20', sec: '5.2', p: 17, type: 'tf', a: true, q: 'Die zystische Medianekrose (Erdheim-Gsell) prädisponiert zur Aortendissektion.', ex: 'Aortendissektion: Mediadegeneration (zystische Medianekrose Erdheim-Gsell), Hypertonie, Marfan, bikuspide Klappe, Schwangerschaft, Kokain.' },
  { id: 'k5-t21', sec: '5.2', p: 17, type: 'tf', a: false, q: 'Bei der Stanford-B-Dissektion ist die Aorta ascendens beteiligt.', ex: 'Die Beteiligung der Aorta ascendens definiert Stanford A (→ OP).' },
  { id: 'k5-t22', sec: '5.2', p: 17, type: 'tf', a: true, q: 'Die Atherosklerose ist die häufigste Ursache des Aortenaneurysmas.', ex: 'Atherosklerose = häufigste Ursache; ca. 85 % infrarenale Aorta abdominalis.' },
  { id: 'k5-t23', sec: '5.3', p: 17, type: 'tf', a: true, q: 'Etwa zwei Drittel der tiefen Beinvenenthrombosen treten links auf.', ex: '2/3 links – wegen des Beckenvenensporns.' },
  { id: 'k5-t24', sec: '5.3', p: 17, type: 'tf', a: false, q: 'Eine isolierte Thrombozytopenie ist ein Risikofaktor für eine TVT.', ex: 'Die isolierte Thrombozytopenie ist keine TVT-Ursache (anders als die HIT II).' },
  { id: 'k5-t25', sec: '5.3', p: 17, type: 'tf', a: true, q: 'Ein AT-III-Mangel, z. B. beim nephrotischen Syndrom, begünstigt eine TVT.', ex: 'AT-III-Mangel (z. B. nephrotisches Syndrom) ist eine TVT-Ursache.' },
  { id: 'k5-t26', sec: '5.3', p: 17, type: 'tf', a: false, q: 'Die Thrombophlebitis geht typischerweise mit einer ausgeprägten Schwellung einher.', ex: 'Thrombophlebitis: Rubor, Calor, Dolor – keine Schwellung.' },
  { id: 'k5-t27', sec: '5.3', p: 17, type: 'tf', a: false, q: 'Ein postmortales Gerinnsel ist wandhaftend, rau und brüchig.', ex: 'Wandhaftend, rau, brüchig = Abscheidungsthrombus. Postmortales Gerinnsel: glatt, feucht-glänzend, elastisch, nicht wandhaftend.' },
  { id: 'k5-t28', sec: '5.3', p: 17, type: 'tf', a: true, q: 'Das postthrombotische Syndrom ist eine Komplikation der TVT.', ex: 'Komplikationen der TVT: Lungenembolie, postthrombotisches Syndrom, Rezidiv.' },
  { id: 'k5-t29', sec: '5.3', p: 17, type: 'tf', a: true, q: 'Zahn-Linien sind typisch für den Abscheidungsthrombus.', ex: 'Abscheidungs-(Plättchen-)Thrombus: Zahn-Linien aus Thrombozyten/Fibrin + Erythrozyten.' },
  { id: 'k5-t30', sec: '5.4', p: 17, type: 'tf', a: true, q: 'Fontaine-Stadium III ist durch Ruheschmerzen gekennzeichnet.', ex: 'Fontaine III = Ruheschmerz; IV = Nekrose/Gangrän.' },
  { id: 'k5-t31', sec: '5.4', p: 17, type: 'tf', a: false, q: 'Im Fontaine-Stadium IIb beträgt die schmerzfreie Gehstrecke mehr als 200 m.', ex: 'IIa: > 200 m, IIb: < 200 m.' },
  { id: 'k5-t32', sec: '5.4', p: 17, type: 'tf', a: true, q: 'Nikotin ist der wichtigste Risikofaktor der pAVK (neben Diabetes mellitus).', ex: 'pAVK: Nikotin ist der wichtigste Risikofaktor (neben DM).' },
  { id: 'k5-t33', sec: '5.5', p: 18, type: 'tf', a: false, q: 'Glomustumoren zeigen häufig ein malignes Verhalten.', ex: 'Glomustumoren sind benigne (Altfrage 2010).' },
  { id: 'k5-t34', sec: '5.5', p: 18, type: 'tf', a: true, q: 'Das kapilläre (infantile) Hämangiom ist der häufigste Tumor des Kindesalters und bildet sich oft spontan zurück.', ex: 'Kapilläres Hämangiom: infantil, oft angeboren, häufigster Tumor des Kindesalters, spontane Regression.' },
  { id: 'k5-t35', sec: '5.5', p: 18, type: 'tf', a: true, q: 'Das Kaposi-Sarkom ist in über 90 % HHV-8-positiv.', ex: 'Kaposi-Sarkom: HHV-8 > 90 %.' },
  { id: 'k5-t36', sec: '5.5', p: 18, type: 'tf', a: false, q: 'Das Angiosarkom hat eine gute Prognose.', ex: 'Angiosarkom: sehr schlechte Prognose.' },
  { id: 'k5-t37', sec: '5.5', p: 18, type: 'tf', a: true, q: 'Das Hämangioperizytom wird heute als solitärer fibröser Tumor bezeichnet.', ex: 'Hämangioperizytom → heute solitärer fibröser Tumor.' },
  { id: 'k5-t38', sec: '5.5', p: 18, type: 'tf', a: true, q: 'Das Hygroma colli ist ein zystisches Lymphangiom.', ex: 'Lymphangiom: kavernös, kapillär, zystisch (= Hygroma colli).' },
  { id: 'k5-t39', sec: '5.5', p: 18, type: 'tf', a: false, q: 'Vaskuläre Malformationen bilden sich wie Hämangiome meist spontan zurück.', ex: 'Malformationen sind bei Geburt vorhanden, wachsen proportional mit und bilden sich nicht zurück – das unterscheidet sie vom Hämangiom.' },
  { id: 'k5-t40', sec: '5.5', p: 18, type: 'tf', a: true, q: 'Zerebrale arteriovenöse Malformationen können eine intrazerebrale Blutung verursachen.', ex: 'Zerebrale AVM → intrazerebrale Blutung.' }
]);
