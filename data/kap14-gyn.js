/* Kapitel 14 – Zervix, Uterus, Ovar (PDF S. 44–46) */
PQ.registerChapter(14, [

  /* ---------- 14.1 Zervixkarzinom & Präneoplasien ---------- */
  {
    id: 'k14-01', sec: '14.1', p: 44, type: 'single', alt: '2010, 2013A',
    q: 'Zervixkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Es handelt sich in 90 % um ein Adenokarzinom.',
      'Die Inzidenz ist in Madagaskar höher als in Israel.',
      'Beim Carcinoma in situ ist eine Konisation ausreichend.',
      'Ca. 80 % sind mit HPV 16/18/31/45 assoziiert.',
      'Promiskuität und geringe Sexualhygiene sind Risikofaktoren.'
    ],
    a: 0,
    ex: 'Zervixkarzinom: ~80 % Plattenepithelkarzinom, 10–20 % Adenokarzinom (überwiegend ebenfalls HPV-assoziiert), selten kleinzellig.'
  },
  {
    id: 'k14-02', sec: '14.1', p: 44, type: 'single', alt: '2013B',
    q: 'Zervixkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Adenokarzinome der Zervix sind nicht HPV-assoziiert.',
      'Beim frühinvasiven Karzinom (FIGO IA1) beträgt die Stromainvasion ≤ 3 mm.',
      'Fernmetastasen treten am häufigsten in der Lunge auf.',
      'Die 5-JÜR liegt stadienabhängig bei ca. 20–95 %.',
      'Die Inzidenz ist in Afrika ca. 4-mal so hoch wie in Westeuropa.'
    ],
    a: 0,
    ex: 'Auch die Adenokarzinome der Zervix sind überwiegend HPV-assoziiert (Zunahme).'
  },
  {
    id: 'k14-03', sec: '14.1', p: 44, type: 'single', alt: '2019',
    q: 'Zervixkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Typisch ist die lymphogene Ausbreitung in die inguinalen Lymphknoten.',
      'Die CIN ist die typische Vorläuferläsion.',
      'HPV 16, 18 und 31 sind stark assoziiert.',
      'Meist handelt es sich um ein Plattenepithelkarzinom.'
    ],
    a: 0,
    ex: 'Lymphogen in regionäre pelvine LK (parazervikal, parametran, iliakal, präsakral); inguinal untypisch. Inguinale LK → Vulvakarzinom.'
  },
  {
    id: 'k14-04', sec: '14.1', p: 44, type: 'single', alt: '2012',
    q: 'Das Zervixkarzinom ist überwiegend bedingt durch:',
    opts: ['HPV', 'Östrogen', 'KRAS-Mutationen', 'HNPCC'],
    a: 0,
    ex: 'Ätiologie: HPV (high risk 16, 18, 31, 33, 45 u. a.). Nicht: Östrogenstimulus, KRAS, HNPCC.'
  },
  {
    id: 'k14-05', sec: '14.1', p: 44, type: 'single', alt: '2020',
    q: 'Zervikale Vorläuferläsionen – welche Aussage trifft NICHT zu?',
    opts: [
      'Ein Pap IVa-g indiziert in der Regel eine Wertheim-Meigs-OP.',
      'Die HPV-Prävalenz liegt bei 15- bis 24-Jährigen bei ca. 70 %.',
      'HPV befällt bevorzugt die Transformationszone.',
      'Pap IVa-p entspricht einem CIN 3/CIS.',
      'Ein CIS geht in ca. 60 % in ein invasives Karzinom über.'
    ],
    a: 0,
    ex: 'Pap IVa-g (≈ AIS) → Konisation, keine Wertheim-Meigs-OP. Ein CIS geht in ~30–60 % in ein invasives Ca über (laut Altfrage 60 %).'
  },
  {
    id: 'k14-06', sec: '14.1', p: 44, type: 'single', alt: '2023',
    q: 'Was ist der häufigste Typ des Zervixkarzinoms?',
    opts: ['HPV-assoziiertes Plattenepithelkarzinom', 'HPV-unabhängiges Adenokarzinom', 'Kleinzelliges Karzinom', 'Klarzelliges Karzinom'],
    a: 0,
    ex: 'Häufigster Typ = HPV-assoziiertes PE-Ca (~80 %). Kleinzellige Karzinome sind selten; das klarzellige Karzinom nach Diethylstilbestrol betrifft die Vagina.'
  },
  {
    id: 'k14-07', sec: '14.1', p: 44, type: 'kprim',
    q: 'Zervixkarzinom – welche Aussagen treffen zu?',
    st: [
      ['Die Mehrzahl sind Plattenepithelkarzinome.', true],
      ['Geringe Sexualhygiene und Promiskuität sind Risikofaktoren.', true],
      ['HPV 16, 18 und 31 sind stark assoziiert.', true],
      ['Ein Östrogenstimulus ist ein wesentlicher Risikofaktor.', false]
    ],
    ex: 'Die ersten drei Aussagen stammen aus der K-prim-Altfrage 2016 (alle ✓). Östrogen ist kein RF des Zervixkarzinoms (Altfrage 2012).'
  },
  {
    id: 'k14-08', sec: '14.1', p: 44, type: 'match',
    q: 'Ordne die Zytologie (Münchner Nomenklatur III) der Histologie zu.',
    pairs: [
      ['IIID1', '≈ CIN 1'],
      ['IIID2', '≈ CIN 2'],
      ['IVa-p', '≈ CIN 3/CIS'],
      ['IVa-g', '≈ AIS (glandulär)'],
      ['V', 'Karzinom']
    ],
    ex: 'IVb = V. a. Invasion. CIN I = LSIL (unteres Drittel), CIN III = HSIL (Atypien in der gesamten Epitheldicke, Basalmembran intakt).'
  },
  {
    id: 'k14-09', sec: '14.1', p: 44, type: 'match',
    q: 'Ordne das FIGO-Stadium des Zervixkarzinoms zu.',
    pairs: [
      ['I', 'Auf den Uterus begrenzt'],
      ['II', 'Jenseits des Uterus, nicht unteres Vaginaldrittel/Beckenwand'],
      ['III', 'Unteres Vaginaldrittel, Beckenwand oder Hydronephrose'],
      ['IVA', 'Blasen- oder Rektumschleimhaut'],
      ['IVB', 'Fernmetastasen']
    ],
    ex: 'Frühinvasives Karzinom (FIGO IA): Stromainvasion IA1 ≤ 3 mm, IA2 3–5 mm.'
  },
  {
    id: 'k14-10', sec: '14.1', p: 44, type: 'single',
    q: 'Wie wirken die HPV-Onkoproteine E6 und E7?',
    opts: ['E6 baut p53 ab, E7 inaktiviert Rb', 'E6 inaktiviert Rb, E7 baut p53 ab', 'Beide aktivieren KRAS'],
    a: 0,
    ex: 'HPV-Persistenz (~20 %) → E6 baut p53 ab, E7 inaktiviert Rb → p16-Überexpression → CIN. KRAS spielt beim Zervixkarzinom keine Rolle.'
  },
  {
    id: 'k14-11', sec: '14.1', p: 44, type: 'single',
    q: 'Welcher histologische Befund ist typisch für eine HPV-Infektion?',
    opts: ['Koilozyten (perinukleärer Hof, „Rosinenkerne“)', 'Eulenaugenzellen', 'Langhans-Riesenzellen'],
    a: 0,
    ex: 'HPV-Histologie: Koilozyten, Akanthose, Para-/Hyperkeratose. Eulenaugenzellen → CMV; Langhans-Riesenzellen → Tbc.'
  },
  {
    id: 'k14-12', sec: '14.1', p: 44, type: 'single',
    q: 'Welche Therapie ist bei CIN III/CIS ausreichend?',
    opts: ['Konisation', 'Radikale Hysterektomie (Wertheim-Meigs)', 'Primäre Radiochemotherapie'],
    a: 0,
    ex: 'CIN III/CIS → Konisation ausreichend. Invasives Karzinom: radikale Hysterektomie (Wertheim-Meigs) bzw. primäre Radiochemotherapie.'
  },
  {
    id: 'k14-13', sec: '14.1', p: 44, type: 'single',
    q: 'Wo treten Fernmetastasen des Zervixkarzinoms am häufigsten auf?',
    opts: ['Lunge', 'Gehirn', 'Haut'],
    a: 0,
    ex: 'Ausbreitung v. a. lokal per continuitatem und lymphogen pelvin; hämatogen spät, Fernmetastasen am häufigsten Lunge (+ paraaortale LK, Knochen, Leber).'
  },
  {
    id: 'k14-14', sec: '14.1', p: 44, type: 'single',
    q: 'Wann soll laut STIKO gegen HPV geimpft werden?',
    opts: ['Mit 9–14 Jahren, vor der Kohabitarche', 'Erst ab 30 Jahren', 'Nur nach positivem HPV-Test'],
    a: 0,
    ex: 'Prävention: HPV-Impfung vor der Kohabitarche (STIKO 9–14 J); Früherkennung mit Zytologie/HPV-Test.'
  },
  {
    id: 'k14-15', sec: '14.1', p: 44, type: 'match',
    q: 'Ordne den Tumor von Vagina bzw. Vulva seinem Kennzeichen zu.',
    pairs: [
      ['Klarzelliges Vaginalkarzinom', 'Nach Diethylstilbestrol'],
      ['Sarcoma botryoides', 'Mädchen'],
      ['Vulvakarzinom', '> 90 % Plattenepithel-Ca, LK inguinal']
    ],
    ex: 'Vagina: PE-Ca (VAIN, HPV), Klarzell-Ca nach DES, Sarcoma botryoides. Vulva: > 90 % PE-Ca, extramammärer Paget.'
  },

  /* ---------- 14.2 Endometrium ---------- */
  {
    id: 'k14-16', sec: '14.2', p: '44–45', type: 'kprim', alt: '2012, 2018, 2020',
    q: 'Endometriumkarzinom Typ II – welche Aussagen treffen zu?',
    st: [
      ['Die Vorläuferläsion manifestiert sich durch eine Postmenopausenblutung.', false],
      ['Es umfasst seröse und klarzellige Karzinome.', true],
      ['Es ist immer östrogenabhängig.', false],
      ['Es hat eine günstige Prognose.', false]
    ],
    ex: 'Typ II: östrogenunabhängig, 65–75 J, atrophes Endometrium; Vorläufer SEIC (oft in Polypen) – Blutung erst beim manifesten Ca; serös/klarzellig, immer high grade; ungünstige Prognose.'
  },
  {
    id: 'k14-17', sec: '14.2', p: '44–45', type: 'kprim', alt: '2013B, 2019',
    q: 'Endometrium – welche Aussagen treffen zu?',
    st: [
      ['Das endometrioide Adenokarzinom ist nicht mit Östrogen assoziiert.', false],
      ['Die Infiltrationstiefe ist am Abradat nicht sicher bestimmbar.', true],
      ['Die atypische adenomatöse Hyperplasie geht nur selten in ein Karzinom über.', false],
      ['Das Endometriumkarzinom kann im Rahmen eines HNPCC vorkommen.', true]
    ],
    ex: 'Das endometrioide Ca (Typ I) ist östrogenabhängig. Atypische Hyperplasie/EIN: Ca-Risiko 28–52 %, also häufig. Lynch: Endometrium-Ca ist die zweithäufigste Manifestation.'
  },
  {
    id: 'k14-18', sec: '14.2', p: 45, type: 'single', alt: '2022, 2023, 2024',
    q: 'Was gehört NICHT zur molekularen WHO-2020-Klassifikation des Endometriumkarzinoms?',
    opts: ['KRAS-mutiert', 'POLE-ultramutiert', 'dMMR/MSI-H', 'p53-abnormal', 'NSMP (no specific molecular profile)'],
    a: 0,
    ex: 'WHO 2020: POLE-ultramutiert (beste Prognose) · dMMR/MSI-H · p53-abnormal (schlechteste) · NSMP – nicht KRAS.'
  },
  {
    id: 'k14-19', sec: '14.2', p: '44–45', type: 'single', alt: '2009',
    q: 'Glandulär-zystische Endometriumhyperplasie – welche Aussage trifft zu?',
    opts: [
      'Sie kann als Folge eines Granulosazelltumors auftreten.',
      'Sie ist eine obligate Präkanzerose.',
      'Sie entsteht unter Gestagen.',
      'Sie wird mit Östrogenen behandelt.',
      'Sie tritt selten um die Menopause auf.'
    ],
    a: 0,
    ex: 'Die glandulär-zystische Hyperplasie ist keine obligate Präkanzerose, entsteht nicht unter Gestagen, wird mit Gestagenen (nicht Östrogenen) behandelt und tritt v. a. perimenopausal auf. Östrogenbildende Tumoren (Granulosazelltumor, Thekom) sind Ursachen.'
  },
  {
    id: 'k14-20', sec: '14.2', p: 45, type: 'kprim', alt: '2025',
    q: 'Welche der folgenden sind Prognosefaktoren des Endometriumkarzinoms?',
    st: [
      ['Infiltration der Zervix', true],
      ['Angioinvasion', true],
      ['Myometrium-Invasionstiefe', true],
      ['Uterusgewicht', false]
    ],
    ex: 'Prognosefaktoren: Typ bzw. molekularer Subtyp, Stadium, Myometrium-Invasionstiefe, Zervixstroma-Infiltration, Grading (nur Typ I), L/V, LK, Alter. Nicht das Uterusgewicht.'
  },
  {
    id: 'k14-21', sec: '14.2', p: '44–45', type: 'kprim', alt: '2023',
    q: 'Welche der folgenden sind histomorphologisch erfassbare Ursachen von Blutungsstörungen?',
    st: [
      ['Einfache Hyperplasie', true],
      ['Leiomyome', true],
      ['Endometriumkarzinom', true],
      ['Granulosazelltumor', true]
    ],
    ex: 'Alle vier treffen zu. Submuköse Leiomyome verursachen Blutungsstörungen; der Granulosazelltumor bildet Östrogen → Endometriumhyperplasie/-Ca.'
  },
  {
    id: 'k14-22', sec: '14.2', p: 45, type: 'kprim',
    q: 'Endometriumkarzinom Typ I – welche Aussagen treffen zu?',
    st: [
      ['Es ist östrogenabhängig.', true],
      ['Vorläufer ist die atypische Hyperplasie/EIN.', true],
      ['Typisch sind p53-Mutationen und Psammomkörper.', false],
      ['Es entsteht typischerweise auf atrophem Endometrium in der späten Postmenopause.', false]
    ],
    ex: 'Typ I (~80 %): 55–65 J, endometrioides Adeno-Ca, PTEN, KRAS, β-Catenin, MSI; günstige Prognose. p53/Psammomkörper und atrophes Endometrium → Typ II (serös).'
  },
  {
    id: 'k14-23', sec: '14.2', p: 45, type: 'match',
    q: 'Ordne das FIGO-Stadium des Endometriumkarzinoms zu.',
    pairs: [
      ['IA', '≤ ½ Myometrium'],
      ['IB', '≥ ½ Myometrium'],
      ['II', 'Zervixstroma'],
      ['III', 'Serosa, Adnexe, Vagina, Parametrien bzw. LK'],
      ['IV', 'Blase/Darm, Fernmetastasen']
    ],
    ex: 'LK-Befall = IIIC. Metastasierung: lokal (Beckenorgane, Peritoneum), lymphogen pelvin/paraaortal, hämatogen Lunge.'
  },
  {
    id: 'k14-24', sec: '14.2', p: 44, type: 'single',
    q: 'Wie hoch ist das Karzinomrisiko einer atypischen Endometriumhyperplasie (EIN)?',
    opts: ['28–52 %', '0–3,5 %', '> 90 %'],
    a: 0,
    ex: 'Hyperplasie ohne Atypie: Ca-Risiko 0–3,5 %. Atypische Hyperplasie/EIN: 28–52 %, Vorläufer des Typ-I-Ca, Latenz ~4–8 J.'
  },
  {
    id: 'k14-25', sec: '14.2', p: 44, type: 'single',
    q: 'Was ist das Leitsymptom des Endometriumkarzinoms?',
    opts: ['Postmenopausenblutung', 'Zyklische Dysmenorrhö und Dyspareunie', 'Virilisierung'],
    a: 0,
    ex: 'Postmenopausenblutung bzw. azyklische Blutung → Karzinomverdacht bis zum Ausschluss durch fraktionierte Abrasio/Hysteroskopie. Dysmenorrhö/Dyspareunie → Endometriose; Virilisierung → Sertoli-Leydig-Zelltumor.'
  },
  {
    id: 'k14-26', sec: '14.2', p: 44, type: 'single',
    q: 'Was ist KEINE Ursache einer Endometriumhyperplasie?',
    opts: ['Gestagengabe', 'Tamoxifen', 'Adipositas', 'PCOS', 'Granulosazelltumor'],
    a: 0,
    ex: 'Ursachen: Östrogen ohne Gestagen-Gegengewicht – anovulatorische Zyklen, PCOS, Adipositas (Aromatase im Fett), HRT ohne Gestagen, Tamoxifen, östrogenbildende Tumoren. Die Hyperplasie entsteht nicht unter Gestagen.'
  },
  {
    id: 'k14-27', sec: '14.2', p: 45, type: 'single',
    q: 'Welches Endometriumkarzinom zeigt Drüsen „Rücken an Rücken“ ohne Stroma?',
    opts: ['Endometrioides Adenokarzinom (Typ I)', 'Seröses Karzinom (Typ II)', 'Klarzelliges Karzinom (Typ II)'],
    a: 0,
    ex: 'Endometrioides Adeno-Ca: Drüsen „Rücken an Rücken“, mehrreihiges atypisches Epithel, oft plattenepitheliale/muzinöse Differenzierung; Grading G1–G3 nach soliden Anteilen.'
  },
  {
    id: 'k14-28', sec: '14.2', p: 45, type: 'single',
    q: 'Welche Faktoren schützen vor dem Endometriumkarzinom?',
    opts: ['Orale Kontrazeptiva und Multiparität', 'Tamoxifen und Adipositas', 'Nulliparität und späte Menopause'],
    a: 0,
    ex: 'RF: unopponiertes Östrogen, Adipositas, Nulliparität, frühe Menarche/späte Menopause, DM, Hypertonie, Tamoxifen, PCOS, Lynch, Cowden. Protektiv: orale Kontrazeptiva, Multiparität.'
  },
  {
    id: 'k14-29', sec: '14.2', p: 45, type: 'single',
    q: 'Bei welchem Endometriumkarzinom wird ein Grading (G1–G3) vorgenommen?',
    opts: ['Endometrioides Karzinom (Typ I)', 'Seröses Karzinom (Typ II)', 'Klarzelliges Karzinom (Typ II)'],
    a: 0,
    ex: 'Typ-II-Karzinome (serös, klarzellig) sind immer high grade – kein Grading. Grading nur beim Typ I.'
  },
  {
    id: 'k14-30', sec: '14.2', p: 45, type: 'single',
    q: 'Welche molekularen Veränderungen sind typisch für das Typ-II-Endometriumkarzinom?',
    opts: ['p53, p16, HER2', 'PTEN, KRAS, β-Catenin', 'FOXL2'],
    a: 0,
    ex: 'Typ II: p53, p16, HER2. Typ I: PTEN, KRAS, β-Catenin, MSI. FOXL2 → Granulosazelltumor.'
  },

  /* ---------- 14.3 Weitere Uterustumoren & Endometriose ---------- */
  {
    id: 'k14-31', sec: '14.3', p: '45–46', type: 'single', alt: '2022',
    q: 'Was ist der häufigste maligne mesenchymale Tumor des Uterus?',
    opts: ['Leiomyosarkom', 'Karzinosarkom', 'Endometriales Stromasarkom', 'Leiomyom'],
    a: 0,
    ex: 'Leiomyosarkom: häufigster maligner mesenchymaler Tumor des Uterus. Das Karzinosarkom ist ein gemischter Tumor (heute metaplastisches Ca); das Leiomyom ist benigne.'
  },
  {
    id: 'k14-32', sec: '14.3', p: '45–46', type: 'single', alt: '2025',
    q: 'Ein Uterustumor besteht aus dicht gepackten glatten Muskelzellen ohne Atypien und ist faserreich. Welche Diagnose passt?',
    opts: ['Leiomyom', 'Leiomyosarkom', 'Karzinosarkom', 'Adenomyose'],
    a: 0,
    ex: 'Leiomyom: dicht gepackte spindelige glatte Muskelzellen in Faszikeln, ohne Atypien, kaum Mitosen, faserreiches Bindegewebe; Makro derb, weiß, wirbelig.'
  },
  {
    id: 'k14-33', sec: '14.3', p: 45, type: 'match',
    q: 'Ordne den Begriff seiner Definition zu.',
    pairs: [
      ['Adenomyose', 'Endometrium tief im Myometrium'],
      ['Endometriose', 'Ektopes Endometrium außerhalb des Uterus'],
      ['Endometriom', '„Schokoladenzyste“ des Ovars']
    ],
    ex: 'Adenomyose: vergrößerter Uterus, Dysmenorrhö. Endometriose: Ovar, Douglas, Ligg. sacrouterina, Peritoneum, Darm, Blase; Drüsen, Stroma, Hämosiderophagen.'
  },
  {
    id: 'k14-34', sec: '14.3', p: 45, type: 'kprim',
    q: 'Leiomyom des Uterus – welche Aussagen treffen zu?',
    st: [
      ['Es ist der häufigste Tumor der Frau.', true],
      ['Es ist östrogenabhängig.', true],
      ['Es ist eine Vorstufe des Leiomyosarkoms.', false],
      ['Histologisch finden sich zahlreiche Mitosen und Atypien.', false]
    ],
    ex: 'Leiomyom: ~30–50 % der Frauen > 35 J; submukös, intramural, subserös; ohne Atypien, kaum Mitosen; keine Vorstufe des Leiomyosarkoms.'
  },
  {
    id: 'k14-35', sec: '14.3', p: 45, type: 'single',
    q: 'Welche Kriterien sprechen für ein Leiomyosarkom des Uterus?',
    opts: [
      'Atypien, Mitosen > 10/10 HPF, Tumorzellnekrosen',
      'Wirbelige Schnittfläche und Hyalinisierung',
      'Drüsen und Stroma im Myometrium'
    ],
    a: 0,
    ex: 'Leiomyosarkom: 50–55 J, hochmaligne, 5-JÜR 15–25 %. Wirbelige Schnittfläche/Hyalinisierung → Leiomyom; Drüsen und Stroma im Myometrium → Adenomyose.'
  },
  {
    id: 'k14-36', sec: '14.3', p: 45, type: 'match',
    q: 'Ordne die Gestationstrophoblasterkrankung ihrem Kennzeichen zu.',
    pairs: [
      ['Komplette Blasenmole', '46,XX androgenetisch, kein Embryo'],
      ['Partielle Blasenmole', 'Triploid'],
      ['Chorionkarzinom', 'Trophoblast ohne Zotten, β-HCG ↑↑, Methotrexat kurativ']
    ],
    ex: 'Chorionkarzinom: 50 % nach Blasenmole; Zyto- + Synzytiotrophoblast ohne Zotten, früh hämatogen in die Lunge.'
  },
  {
    id: 'k14-37', sec: '14.3', p: 45, type: 'single',
    q: 'Welche Klinik ist typisch für die Endometriose?',
    opts: ['Zyklische Dysmenorrhö, Dyspareunie, Sterilität', 'Postmenopausenblutung', 'Virilisierung'],
    a: 0,
    ex: 'Endometriose: ~10 % der Frauen im gebärfähigen Alter; Theorien: retrograde Menstruation/Implantation, Metaplasie, Metastasierung; RF für endometrioides und klarzelliges Ovar-Ca.'
  },
  {
    id: 'k14-38', sec: '14.3', p: 45, type: 'single',
    q: 'Wie wird das Karzinosarkom (maligner Müller-Mischtumor) heute aufgefasst?',
    opts: ['Als metaplastisches Karzinom', 'Als reines Sarkom', 'Als benigner Mischtumor'],
    a: 0,
    ex: 'Karzinosarkom: Ca + Sarkom (homolog/heterolog, z. B. chondroid); heute als metaplastisches Ca aufgefasst; ältere Frauen, Prognose schlecht.'
  },

  /* ---------- 14.4 Ovar ---------- */
  {
    id: 'k14-39', sec: '14.4', p: 46, type: 'single', alt: '2009',
    q: 'Ovarialkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Das Ovarialkarzinom leitet sich von Granulosazellen ab.',
      'Das serös-papilläre Karzinom ist am häufigsten.',
      'Eine Peritonealkarzinose ist bei Diagnose häufig.',
      'Es tritt nicht selten bilateral auf.',
      'Regionäre Lymphknoten sind die paraaortalen.'
    ],
    a: 0,
    ex: 'Das Ovarialkarzinom stammt vom Oberflächenepithel, der Tube oder aus Endometriose – nicht von Granulosazellen.'
  },
  {
    id: 'k14-40', sec: '14.4', p: 46, type: 'single', alt: '2013B',
    q: 'Ovarialtumoren – welche Aussage ist FALSCH?',
    opts: [
      'Allen Ovarialkarzinomen geht ein Borderline-Tumor voraus.',
      'Bei Borderline-Tumoren sind Implantate möglich.',
      'Im Ovar kommen endometrioide Adenokarzinome vor.',
      'Seröse Karzinome können auch von Tube oder Peritoneum ausgehen.',
      'Muzinöse Tumoren sind die zweithäufigsten.'
    ],
    a: 0,
    ex: 'Ein Borderline-Tumor geht nur dem low-grade serösen und dem muzinösen Karzinom voraus.'
  },
  {
    id: 'k14-41', sec: '14.4', p: 46, type: 'single', alt: '2015',
    q: '„Implantate“ gibt es nur bei:',
    opts: ['Borderline-Tumoren', 'High-grade serösen Karzinomen', 'Reifen zystischen Teratomen', 'Thekomen'],
    a: 0,
    ex: 'Nur bei Borderline-Tumoren gibt es „Implantate“ (Absiedlungen auf Peritoneum und anderen Organen, nicht invasiv oder invasiv).'
  },
  {
    id: 'k14-42', sec: '14.4', p: 46, type: 'single', alt: '2015, 2020',
    q: 'Welches Ovarialkarzinom ist mit Endometriose assoziiert?',
    opts: ['Endometrioides Karzinom', 'High-grade seröses Karzinom', 'Brenner-Tumor', 'Low-grade seröses Karzinom', 'Dysgerminom'],
    a: 0,
    ex: 'Endometriose-assoziiert: endometrioides und klarzelliges (und seromuzinöses) Karzinom.'
  },
  {
    id: 'k14-43', sec: '14.4', p: 46, type: 'single', alt: '2022',
    q: 'Welche Mutation ist typisch für das low-grade seröse Ovarialkarzinom?',
    opts: ['KRAS', 'p53', 'BRCA1', 'FOXL2'],
    a: 0,
    ex: 'Low-grade serös: KRAS/BRAF; über Zystadenom → serösen Borderline-Tumor. p53 und BRCA → high-grade serös; FOXL2 → Granulosazelltumor.'
  },
  {
    id: 'k14-44', sec: '14.4', p: 46, type: 'single', alt: '2023',
    q: 'Was ist die klassische Vorläuferläsion des high-grade serösen Ovarialkarzinoms?',
    opts: ['Seröses tubares intraepitheliales Karzinom (STIC)', 'Seröser Borderline-Tumor', 'Endometriose', 'Atypische Endometriumhyperplasie'],
    a: 0,
    ex: 'HGSC: Vorläufer STIC in den Fimbrien – Ursprung also auch Tube/Peritoneum. Der seröse Borderline-Tumor ist Vorläufer des low-grade serösen Ca.'
  },
  {
    id: 'k14-45', sec: '14.4', p: 46, type: 'single', alt: '2018',
    q: 'Ovarialkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Es entsteht ausschließlich aus dem ovariellen Oberflächenepithel.',
      'Ca. 5–10 % sind genetisch bedingt.',
      'Das seröse Karzinom ist der häufigste Typ.',
      'Das low-grade seröse Karzinom hat eine gute Prognose.',
      'Es wird meist spät diagnostiziert.'
    ],
    a: 0,
    ex: 'Ursprung: Oberflächenepithel, Tube (STIC) und Endometriose. 2018 war außerdem „klarzellige Ca sind meist niedrig maligne“ falsch.'
  },
  {
    id: 'k14-46', sec: '14.4', p: 46, type: 'single', alt: '2025',
    q: 'Eine 62-Jährige hat Blutungen und Brustspannen. Am Ovar findet sich ein 7 cm großer, solider, gelblicher Tumor. Welche Diagnose passt?',
    opts: ['Thekom mit Östrogenproduktion', 'Reifes zystisches Teratom', 'Sertoli-Leydig-Zelltumor', 'Dysgerminom', 'Krukenberg-Tumor'],
    a: 0,
    ex: 'Thekom: postmenopausal, gelb, Östrogen (→ Blutung, Brustspannen). Sertoli-Leydig bildet Androgene; das Dysgerminom betrifft junge Frauen; das Teratom ist zystisch.'
  },
  {
    id: 'k14-47', sec: '14.4', p: 46, type: 'match',
    q: 'Ordne den Ovarialtumor seinem Kennzeichen zu.',
    pairs: [
      ['Granulosazelltumor', 'Call-Exner-Körperchen, „Kaffeebohnenkerne“, FOXL2'],
      ['Fibrom', 'Meigs-Syndrom (+ Aszites + Pleuraerguss)'],
      ['Sertoli-Leydig-Zelltumor', 'Androgene, Virilisierung'],
      ['Reifes zystisches Teratom', 'Haare, Talg, Zähne'],
      ['Krukenberg-Tumor', 'Siegelringzell-Metastase (Magen)']
    ],
    ex: 'Granulosazelltumor: Östrogen → Endometriumhyperplasie/-Ca; Inhibin. Reifes Teratom (Dermoidzyste): häufigster Ovarialtumor junger Frauen, benigne.'
  },
  {
    id: 'k14-48', sec: '14.4', p: 46, type: 'match',
    q: 'Ordne den ovariellen Keimzelltumor seinem Kennzeichen zu.',
    pairs: [
      ['Dottersacktumor', 'AFP'],
      ['Chorionkarzinom', 'HCG'],
      ['Dysgerminom', 'Pendant zum Seminom']
    ],
    ex: 'Keimzelltumoren betreffen junge Frauen. „Seminom“ ist kein ovarieller Begriff.'
  },
  {
    id: 'k14-49', sec: '14.4', p: 46, type: 'match',
    q: 'Ordne das Ovarialkarzinom seinem Kennzeichen zu.',
    pairs: [
      ['High-grade serös', 'p53, BRCA, Vorläufer STIC'],
      ['Low-grade serös', 'KRAS/BRAF, über serösen Borderline-Tumor'],
      ['Endometrioid', 'Endometriose, oft synchrones Endometrium-Ca'],
      ['Klarzellig', 'Endometriose, immer high grade, chemoresistent'],
      ['Muzinös', 'Oft groß, einseitig; DD Metastase aus dem GIT']
    ],
    ex: 'HGSC: häufigster Typ (~70 %), aggressiv, chemosensibel. LGSC: indolent, chemoresistent. Brenner: meist benigne.'
  },
  {
    id: 'k14-50', sec: '14.4', p: 46, type: 'kprim',
    q: 'Borderline-Tumor des Ovars – welche Aussagen treffen zu?',
    st: [
      ['Es besteht eine Epithelproliferation mit Atypien ohne destruierende Stromainvasion.', true],
      ['Nur bei Borderline-Tumoren gibt es Implantate.', true],
      ['Die Patientinnen sind älter als beim Ovarialkarzinom.', false],
      ['Die Prognose ist schlecht.', false]
    ],
    ex: 'Borderline-Tumor (atypisch proliferierender Tumor): Frauen jünger, gute Prognose.'
  },
  {
    id: 'k14-51', sec: '14.4', p: 46, type: 'kprim',
    q: 'Ovarialkarzinom – welche Aussagen treffen zu?',
    st: [
      ['Es hat die höchste Letalität der malignen Genitaltumoren der Frau.', true],
      ['Orale Kontrazeptiva wirken protektiv.', true],
      ['Ca. 75 % werden im FIGO-Stadium I diagnostiziert.', false],
      ['Das klarzellige Karzinom ist meist niedrig maligne.', false]
    ],
    ex: 'Ovarialkarzinom: zweithäufigster maligner Genitaltumor; Altersgipfel 60–70 J; spät diagnostiziert (~75 % FIGO III/IV). Klarzellig: immer high grade (Altfrage 2018).'
  },
  {
    id: 'k14-52', sec: '14.4', p: 46, type: 'single',
    q: 'Welcher Tumormarker wird beim Ovarialkarzinom bestimmt?',
    opts: ['CA-125', 'PSA', 'Inhibin'],
    a: 0,
    ex: 'Ovarialkarzinom: Tumormarker CA-125. Inhibin ist ein Marker des Granulosazelltumors.'
  },
  {
    id: 'k14-53', sec: '14.4', p: 46, type: 'single',
    q: 'Was ist der häufigste Ovarialtumor junger Frauen?',
    opts: ['Reifes zystisches Teratom (Dermoidzyste)', 'Dysgerminom', 'Granulosazelltumor', 'Brenner-Tumor'],
    a: 0,
    ex: 'Reifes zystisches Teratom (Dermoidzyste): häufigster Ovarialtumor junger Frauen, benigne; Haare, Talg, Zähne.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k14-t01', sec: '14.1', p: 44, type: 'tf', a: false, q: 'Das Zervixkarzinom ist in ca. 90 % ein Adenokarzinom.', ex: '~80 % Plattenepithelkarzinom (Altfrage 2010, 2013A).' },
  { id: 'k14-t02', sec: '14.1', p: 44, type: 'tf', a: true, q: 'HPV befällt bevorzugt die ekto-endozervikale Transformationszone.', ex: 'HPV befällt die Transformationszone (Basalzellen über Mikroläsionen).' },
  { id: 'k14-t03', sec: '14.1', p: 44, type: 'tf', a: false, q: 'HPV 6 und 11 sind High-risk-Typen.', ex: 'HPV 6/11 sind Low-risk-Typen → Kondylome.' },
  { id: 'k14-t04', sec: '14.1', p: 44, type: 'tf', a: true, q: 'Nur ca. 0,7 % der HPV-Infizierten entwickeln ein Zervixkarzinom.', ex: 'Lebenszeitrisiko einer Infektion 70–85 %, aber nur ~0,7 % entwickeln ein Ca.' },
  { id: 'k14-t05', sec: '14.1', p: 44, type: 'tf', a: false, q: 'Adenokarzinome der Zervix sind nicht HPV-assoziiert.', ex: 'Auch die Adenokarzinome sind überwiegend HPV-assoziiert (Altfrage 2013B).' },
  { id: 'k14-t06', sec: '14.1', p: 44, type: 'tf', a: true, q: 'Rauchen ist ein Risikofaktor des Zervixkarzinoms.', ex: 'RF u. a.: früher Geschlechtsverkehr, viele Partner, Rauchen, Immunsuppression, orale Kontrazeptiva, Koinfektionen.' },
  { id: 'k14-t07', sec: '14.1', p: 44, type: 'tf', a: false, q: 'Ein Östrogenstimulus ist ein wesentlicher Risikofaktor des Zervixkarzinoms.', ex: 'Nicht: Östrogenstimulus, KRAS, HNPCC (Altfrage 2012).' },
  { id: 'k14-t08', sec: '14.1', p: 44, type: 'tf', a: true, q: 'Bei CIN III/CIS ist die Basalmembran intakt.', ex: 'CIN III: Atypien in der gesamten Epitheldicke, Basalmembran intakt.' },
  { id: 'k14-t09', sec: '14.1', p: 44, type: 'tf', a: false, q: 'Ein Pap IVa-g indiziert in der Regel eine Wertheim-Meigs-Operation.', ex: 'Pap IVa-g → Konisation (Altfrage 2020).' },
  { id: 'k14-t10', sec: '14.1', p: 44, type: 'tf', a: true, q: 'Paraaortale Lymphknoten sind beim Zervixkarzinom nicht regionär.', ex: 'Regionär: parazervikal, parametran, iliakal, präsakral; paraaortal nicht regionär.' },
  { id: 'k14-t11', sec: '14.1', p: 44, type: 'tf', a: false, q: 'Das Zervixkarzinom metastasiert typischerweise in die inguinalen Lymphknoten.', ex: 'Inguinal untypisch (Altfrage 2019).' },
  { id: 'k14-t12', sec: '14.1', p: 44, type: 'tf', a: true, q: 'Die p16-Überexpression ist Folge der Rb-Inaktivierung durch HPV-E7.', ex: 'E7 inaktiviert Rb → p16-Überexpression.' },
  { id: 'k14-t13', sec: '14.1', p: 44, type: 'tf', a: true, q: 'Das Vulvakarzinom ist in > 90 % ein Plattenepithelkarzinom.', ex: 'Vulva: > 90 % PE-Ca; LK inguinal.' },
  { id: 'k14-t14', sec: '14.2', p: 44, type: 'tf', a: true, q: 'Die atypische Endometriumhyperplasie hat ein Karzinomrisiko von 28–52 %.', ex: 'Atypische Hyperplasie/EIN: Ca-Risiko 28–52 %.' },
  { id: 'k14-t15', sec: '14.2', p: 44, type: 'tf', a: false, q: 'Die glandulär-zystische Hyperplasie ist eine obligate Präkanzerose.', ex: 'Keine obligate Präkanzerose (Altfrage 2009).' },
  { id: 'k14-t16', sec: '14.2', p: 44, type: 'tf', a: false, q: 'Die glandulär-zystische Hyperplasie wird mit Östrogenen behandelt.', ex: 'Behandlung mit Gestagenen, nicht Östrogenen.' },
  { id: 'k14-t17', sec: '14.2', p: 44, type: 'tf', a: true, q: 'Tamoxifen kann eine Endometriumhyperplasie verursachen.', ex: 'Ursachen u. a.: HRT ohne Gestagen, Tamoxifen, östrogenbildende Tumoren.' },
  { id: 'k14-t18', sec: '14.2', p: 45, type: 'tf', a: true, q: 'Das Typ-I-Endometriumkarzinom ist östrogenabhängig.', ex: 'Typ I (~80 %): östrogenabhängig, endometrioid.' },
  { id: 'k14-t19', sec: '14.2', p: 45, type: 'tf', a: false, q: 'Das Typ-II-Endometriumkarzinom hat eine günstige Prognose.', ex: 'Typ II: ungünstig (frühe peritoneale/lymphogene Ausbreitung).' },
  { id: 'k14-t20', sec: '14.2', p: 45, type: 'tf', a: false, q: 'Seröse Endometriumkarzinome werden nach G1–G3 gegradet.', ex: 'Typ II: immer high grade, kein Grading.' },
  { id: 'k14-t21', sec: '14.2', p: 45, type: 'tf', a: true, q: 'Das POLE-ultramutierte Endometriumkarzinom hat die beste Prognose.', ex: 'POLE-ultramutiert = beste, p53-abnormal = schlechteste Prognose.' },
  { id: 'k14-t22', sec: '14.2', p: 45, type: 'tf', a: false, q: 'KRAS-mutiert ist eine Gruppe der molekularen WHO-2020-Klassifikation des Endometriumkarzinoms.', ex: 'Nicht KRAS (Altfrage 2022–2024).' },
  { id: 'k14-t23', sec: '14.2', p: 45, type: 'tf', a: true, q: 'Die Myometrium-Invasionstiefe ist am Abradat nicht beurteilbar.', ex: 'Invasionstiefe am Abradat nicht beurteilbar; Zervixbefall am Abradat unsicher (Verschleppung).' },
  { id: 'k14-t24', sec: '14.2', p: 45, type: 'tf', a: false, q: 'Das Uterusgewicht ist ein Prognosefaktor des Endometriumkarzinoms.', ex: 'Nicht das Uterusgewicht (Altfrage 2025).' },
  { id: 'k14-t25', sec: '14.2', p: 44, type: 'tf', a: true, q: 'Adipositas fördert die Endometriumhyperplasie über die Aromatase im Fettgewebe.', ex: 'Adipositas (Aromatase im Fett) → Östrogen ↑.' },
  { id: 'k14-t26', sec: '14.3', p: 45, type: 'tf', a: true, q: 'Das Leiomyom ist der häufigste Tumor der Frau.', ex: 'Leiomyom: häufigster Tumor der Frau (~30–50 % > 35 J).' },
  { id: 'k14-t27', sec: '14.3', p: 45, type: 'tf', a: false, q: 'Das Leiomyom ist eine Vorstufe des Leiomyosarkoms.', ex: 'Das Leiomyom ist keine Vorstufe des Leiomyosarkoms.' },
  { id: 'k14-t28', sec: '14.3', p: 46, type: 'tf', a: false, q: 'Das Karzinosarkom ist der häufigste maligne mesenchymale Tumor des Uterus.', ex: 'Das ist das Leiomyosarkom; das Karzinosarkom ist ein gemischter Tumor (Altfrage 2022).' },
  { id: 'k14-t29', sec: '14.3', p: 45, type: 'tf', a: true, q: 'Die Endometriose betrifft ca. 10 % der Frauen im gebärfähigen Alter.', ex: 'Endometriose: ~10 % der Frauen im gebärfähigen Alter.' },
  { id: 'k14-t30', sec: '14.3', p: 45, type: 'tf', a: false, q: 'Die komplette Blasenmole ist triploid.', ex: 'Komplett: 46,XX androgenetisch, kein Embryo; partiell: triploid.' },
  { id: 'k14-t31', sec: '14.3', p: 45, type: 'tf', a: true, q: 'Etwa 50 % der Chorionkarzinome entstehen nach einer Blasenmole.', ex: 'Chorionkarzinom: 50 % nach Blasenmole.' },
  { id: 'k14-t32', sec: '14.3', p: 45, type: 'tf', a: true, q: 'Bei der Adenomyose liegt Endometrium tief im Myometrium.', ex: 'Adenomyose: Drüsen + Stroma tief im Myometrium → vergrößerter Uterus, Dysmenorrhö.' },
  { id: 'k14-t33', sec: '14.4', p: 46, type: 'tf', a: false, q: 'Das Ovarialkarzinom leitet sich von Granulosazellen ab.', ex: 'Abstammung von Oberflächenepithel/Tube/Endometriose (Altfrage 2009).' },
  { id: 'k14-t34', sec: '14.4', p: 46, type: 'tf', a: true, q: 'Das high-grade seröse Karzinom ist der häufigste Typ des Ovarialkarzinoms.', ex: 'HGSC: häufigster Typ (~70 %).' },
  { id: 'k14-t35', sec: '14.4', p: 46, type: 'tf', a: false, q: 'Das low-grade seröse Ovarialkarzinom ist typischerweise p53-mutiert.', ex: 'LGSC: KRAS/BRAF; p53 → HGSC (Altfrage 2022).' },
  { id: 'k14-t36', sec: '14.4', p: 46, type: 'tf', a: false, q: 'Klarzellige Ovarialkarzinome sind meist niedrig maligne.', ex: 'Klarzellig: immer high grade (Altfrage 2018).' },
  { id: 'k14-t37', sec: '14.4', p: 46, type: 'tf', a: true, q: 'Das Meigs-Syndrom besteht aus Ovarialfibrom, Aszites und Pleuraerguss.', ex: 'Fibrom (Meigs-Syndrom: + Aszites + Pleuraerguss).' },
  { id: 'k14-t38', sec: '14.4', p: 46, type: 'tf', a: false, q: 'Der Granulosazelltumor bildet typischerweise Androgene.', ex: 'Granulosazelltumor → Östrogen. Androgene → Sertoli-Leydig-Zelltumor.' },
  { id: 'k14-t39', sec: '14.4', p: 46, type: 'tf', a: true, q: 'Das Dysgerminom ist das ovarielle Pendant zum Seminom.', ex: 'Dysgerminom = Pendant zum Seminom.' },
  { id: 'k14-t40', sec: '14.4', p: 46, type: 'tf', a: false, q: 'Das Seminom kommt als Keimzelltumor im Ovar vor.', ex: '„Seminom“ ist kein ovarieller Begriff (Altfrage 2024).' },
  { id: 'k14-t41', sec: '14.4', p: 46, type: 'tf', a: true, q: 'Krukenberg-Tumoren sind Siegelringzell-Metastasen, v. a. eines Magenkarzinoms.', ex: 'Metastasen im Ovar: Krukenberg (Siegelringzellen; Magen), Kolon, Mamma (lobulär), Endometrium.' },
  { id: 'k14-t42', sec: '14.4', p: 46, type: 'tf', a: true, q: 'Tubenligatur und Salpingektomie wirken protektiv gegen das Ovarialkarzinom.', ex: 'Protektiv: orale Kontrazeptiva, Schwangerschaften, Stillen, Tubenligatur/Salpingektomie.' },
  { id: 'k14-t43', sec: '14.4', p: 46, type: 'tf', a: false, q: 'Das Ovarialkarzinom wird meist im FIGO-Stadium I diagnostiziert.', ex: 'Spät diagnostiziert: ~75 % FIGO III/IV.' },
  { id: 'k14-t44', sec: '14.4', p: 46, type: 'tf', a: true, q: 'Das high-grade seröse Ovarialkarzinom ist chemosensibel.', ex: 'HGSC: aggressiv, chemosensibel. LGSC: indolent, chemoresistent.' }
]);
