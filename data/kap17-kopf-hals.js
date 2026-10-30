/* Kapitel 17 – Kopf-Hals: Speicheldrüsen, Mundhöhle, Kiefer (PDF S. 57) */
PQ.registerChapter(17, [

  /* ---------- 17.1 Speicheldrüsen ---------- */
  {
    id: 'k17-01', sec: '17.1', p: 57, type: 'single',
    q: 'Welche Speicheldrüse ist am häufigsten von einer Sialolithiasis betroffen?',
    opts: ['Glandula submandibularis', 'Glandula parotis', 'Glandula sublingualis'],
    a: 0,
    ex: 'Sialolithiasis: v. a. Gl. submandibularis (~80 %; muköses, alkalisches, kalkreiches Sekret, aufsteigender Gang); Männer, mittleres Alter; schmerzhafte Schwellung beim Essen.'
  },
  {
    id: 'k17-02', sec: '17.1', p: 57, type: 'match',
    q: 'Ordne den Speicheldrüsentumor seinem Kennzeichen zu.',
    pairs: [
      ['Pleomorphes Adenom', 'Häufigster Tumor, chondromyxoides Stroma'],
      ['Warthin-Tumor', 'Ältere Raucher, bilateral, onkozytäres Epithel + lymphatisches Stroma'],
      ['Mukoepidermoidkarzinom', 'Häufigster maligner Tumor, MAML2'],
      ['Adenoid-zystisches Karzinom', 'Kribriform, Perineuralscheideninfiltration, MYB'],
      ['Sekretorisches Karzinom', 'ETV6-NTRK3 → NTRK-Inhibitoren']
    ],
    ex: 'Weitere: Basalzelladenom (benigne), Azinuszell-Ca, Speichelgang-Ca (Androgenrezeptor, HER2).'
  },
  {
    id: 'k17-03', sec: '17.1', p: 57, type: 'single',
    q: 'Welche Regel gilt für Speicheldrüsentumoren?',
    opts: [
      'Je kleiner die Drüse, desto häufiger ist der Tumor maligne.',
      'Je größer die Drüse, desto häufiger ist der Tumor maligne.',
      'Die meisten Speicheldrüsentumoren liegen in der Glandula sublingualis.'
    ],
    a: 0,
    ex: 'Tumoren: ~80 % in der Parotis; je kleiner die Drüse, desto häufiger maligne.'
  },
  {
    id: 'k17-04', sec: '17.1', p: 57, type: 'kprim',
    q: 'Speicheldrüsenerkrankungen – welche Aussagen treffen zu?',
    st: [
      ['Das Sjögren-Syndrom erhöht das Risiko für ein MALT-Lymphom.', true],
      ['Der Küttner-Tumor ist eine chronisch-sklerosierende (IgG4-)Sialadenitis.', true],
      ['Die zystische lymphoide Hyperplasie der Parotis ist v. a. HIV-assoziiert.', true],
      ['Die bakteriell-eitrige Sialadenitis wird v. a. durch Pneumokokken verursacht.', false]
    ],
    ex: 'Bakteriell-eitrige Sialadenitis: Staph. aureus (Exsikkose, postoperativ). Weitere Formen: viral (Mumps, CMV), obstruktiv, Sjögren (lymphoepitheliale Läsionen), Strahlensialadenitis, granulomatös.'
  },
  {
    id: 'k17-05', sec: '17.1', p: 57, type: 'single',
    q: 'Welches Risiko besteht nach Enukleation eines pleomorphen Adenoms?',
    opts: ['Rezidiv', 'Übergang in einen Warthin-Tumor', 'Fernmetastasen in die Lunge als Regelfall'],
    a: 0,
    ex: 'Pleomorphes Adenom: häufigster Tumor, Frauen, epithelial-myoepithelial + chondromyxoides Stroma; Rezidiv bei Enukleation, Karzinom ex pleomorphem Adenom.'
  },
  {
    id: 'k17-06', sec: '17.1', p: 57, type: 'single',
    q: 'Welches Speicheldrüsenkarzinom infiltriert typischerweise Perineuralscheiden und metastasiert spät in die Lunge?',
    opts: ['Adenoid-zystisches Karzinom', 'Mukoepidermoidkarzinom', 'Sekretorisches Karzinom'],
    a: 0,
    ex: 'Adenoid-zystisches Ca: kribriform, Perineuralscheideninfiltration, späte Fernmetastasen Lunge; MYB.'
  },

  /* ---------- 17.2 Mundhöhle & DD Halsschwellung ---------- */
  {
    id: 'k17-07', sec: '17.2', p: 57, type: 'single',
    q: 'Was ist eine Leukoplakie?',
    opts: [
      'Weißlicher, nicht abwischbarer Fleck, der keiner anderen Erkrankung zuzuordnen ist (klinische Ausschlussdiagnose)',
      'Abwischbarer weißer Belag durch Candida',
      'Bandförmiges lymphozytäres Infiltrat mit Wickham-Streifen'
    ],
    a: 0,
    ex: 'Leukoplakie: homogen oder inhomogen (erythroleukoplakisch, verrukös: höheres Risiko); Entartungsrisiko ~1–3 %/J. Abwischbare Beläge → Soor; Wickham-Streifen → Lichen planus.'
  },
  {
    id: 'k17-08', sec: '17.2', p: 57, type: 'single',
    q: 'Welche Schleimhautläsion der Mundhöhle hat das höchste Entartungsrisiko?',
    opts: ['Erythroplakie', 'Homogene Leukoplakie', 'Reizfibrom'],
    a: 0,
    ex: 'Erythroplakie hat das höchste Risiko; inhomogene Leukoplakien ein höheres als homogene. Das Reizfibrom ist benigne.'
  },
  {
    id: 'k17-09', sec: '17.2', p: 57, type: 'match',
    q: 'Ordne die Mundschleimhauterkrankung ihrem Kennzeichen zu.',
    pairs: [
      ['Pemphigus vulgaris', 'Intraepitheliale Blase, Desmoglein 3'],
      ['Schleimhautpemphigoid', 'Subepitheliale Blase'],
      ['Candidose (Soor)', 'Abwischbare Beläge, PAS-positive Pseudohyphen'],
      ['Lichen planus', 'Bandförmiges lymphozytäres Infiltrat, Wickham-Streifen'],
      ['Aktinomykose', 'Drusen']
    ],
    ex: 'Soor: Immunsuppression, Prothesen, Antibiotika, Steroide. Weitere: Herpes (Gingivostomatitis), Hand-Fuß-Mund (Coxsackie), Herpangina, aphthöse Ulzera, ANUG.'
  },
  {
    id: 'k17-10', sec: '17.2', p: 57, type: 'kprim',
    q: 'Plattenepithelkarzinom der Mundhöhle – welche Aussagen treffen zu?',
    st: [
      ['Rauchen und Alkohol wirken synergistisch.', true],
      ['Typische Lokalisationen sind Zungenrand und Mundboden.', true],
      ['HPV16-assoziierte oropharyngeale Karzinome haben eine schlechtere Prognose.', false],
      ['Es metastasiert typischerweise zuerst in die Lunge.', false]
    ],
    ex: 'PE-Ca (> 90 % der Mundhöhlenmalignome): auch Betel; Feldkanzerisierung, Leukoplakie → Dysplasie → CIS → invasiv (TP53, CDKN2A); oropharyngeal HPV16 (p16+, bessere Prognose); Metastasen in Halslymphknoten.'
  },
  {
    id: 'k17-11', sec: '17.2', p: 57, type: 'single',
    q: 'Welche Halsschwellung liegt typischerweise median?',
    opts: ['Mediane Halszyste (Ductus thyreoglossus)', 'Laterale Halszyste (Kiemengang)', 'Glomus caroticum (Paragangliom)'],
    a: 0,
    ex: 'Median: mediane Halszyste, Struma/SD-Knoten, Dermoid. Lateral: reaktive Lymphadenitis, LK-Metastasen, Lymphom, laterale Halszyste, Glomus caroticum, Schwannom, Speicheldrüse.'
  },
  {
    id: 'k17-12', sec: '17.2', p: 57, type: 'single',
    q: 'Welche Dysplasiekriterien (WHO) sind zytologische Kriterien?',
    opts: [
      'Kernpleomorphie, Hyperchromasie, N/C-Relation ↑, atypische Mitosen',
      'Gestörte Schichtung, tropfenförmige Reteleisten, basale Hyperplasie',
      'Polaritätsverlust und vorzeitige Verhornung'
    ],
    a: 0,
    ex: 'Architektonisch: gestörte Schichtung, Polaritätsverlust, tropfenförmige Reteleisten, basale Hyperplasie, suprabasale Mitosen, vorzeitige Verhornung. Zytologisch: Kernpleomorphie, Hyperchromasie, N/C ↑, atypische Mitosen, prominente Nukleolen.'
  },
  {
    id: 'k17-13', sec: '17.2', p: 57, type: 'single',
    q: 'Welche orale Veränderung ist typisch für eine Leukämie?',
    opts: ['Gingivahyperplasie', '„Strawberry“-Gingiva', 'Wickham-Streifen'],
    a: 0,
    ex: 'Systemerkrankungen: M. Crohn (Granulome), Lichen planus (Wickham-Streifen), Sarkoidose, Leukämie (Gingivahyperplasie), Wegener (Gingiva „strawberry“).'
  },

  /* ---------- 17.3 Kiefer ---------- */
  {
    id: 'k17-14', sec: '17.3', p: 57, type: 'match',
    q: 'Ordne die Kieferzyste ihrem Kennzeichen zu.',
    pairs: [
      ['Radikuläre Zyste', 'Häufigste; an der Wurzelspitze eines devitalen Zahns'],
      ['Follikuläre (dentigere) Zyste', 'Um die Krone eines retinierten Zahns'],
      ['Odontogene Keratozyste', 'Parakeratose, Rezidivneigung, Gorlin-Goltz (PTCH1)'],
      ['Ductus-nasopalatinus-Zyste', 'Nicht odontogen']
    ],
    ex: 'Radikuläre Zyste: entzündlich. Follikuläre Zyste z. B. um 38/48. Keratozyste: palisadierte Basalzellen.'
  },
  {
    id: 'k17-15', sec: '17.3', p: 57, type: 'single',
    q: 'Welcher odontogene Tumor liegt typischerweise im Unterkiefer-Kieferwinkel und wächst multilokulär „seifenblasenartig“?',
    opts: ['Ameloblastom', 'Odontom', 'Pindborg-Tumor', 'Zementoblastom'],
    a: 0,
    ex: 'Ameloblastom: häufigster klinisch relevanter odontogener Tumor; lokal aggressiv, Rezidive; Palisaden, Sternretikulum; BRAF V600E.'
  },
  {
    id: 'k17-16', sec: '17.3', p: 57, type: 'kprim',
    q: 'Ameloblastom – welche Aussagen treffen zu?',
    st: [
      ['Es wächst lokal aggressiv und rezidiviert.', true],
      ['Histologisch zeigt es Palisaden und Sternretikulum.', true],
      ['Es metastasiert früh in die Lunge.', false],
      ['Es liegt bevorzugt im Oberkiefer-Frontzahnbereich.', false]
    ],
    ex: 'Ameloblastom: Unterkiefer-Kieferwinkel, multilokulär „seifenblasenartig“, lokal aggressiv. Maligne odontogene Tumoren (z. B. ameloblastisches Karzinom) sind selten.'
  },
  {
    id: 'k17-17', sec: '17.3', p: 57, type: 'single',
    q: 'Was ist der häufigste odontogene „Tumor“?',
    opts: ['Odontom (Hamartom)', 'Odontogenes Myxom', 'Ameloblastisches Fibrom'],
    a: 0,
    ex: 'Odontom: häufigster odontogener „Tumor“, eigentlich ein Hamartom (komplex/zusammengesetzt). Das Ameloblastom ist der häufigste klinisch relevante odontogene Tumor.'
  },
  {
    id: 'k17-18', sec: '17.3', p: 57, type: 'single',
    q: 'In welcher Reihenfolge verläuft die Zahnentwicklung?',
    opts: ['Knospen- → Kappen- → Glockenstadium', 'Kappen- → Knospen- → Glockenstadium', 'Glocken- → Kappen- → Knospenstadium'],
    a: 0,
    ex: 'Zahnleiste, Schmelzorgan (Ektoderm), Papille (Ektomesenchym) → Dentin/Pulpa; Schmelz- und Dentinbildung → Wurzelbildung (Hertwig-Scheide) → Durchbruch.'
  },
  {
    id: 'k17-19', sec: '17.3', p: 57, type: 'match',
    q: 'Ordne die Kieferläsion ihrem Kennzeichen zu.',
    pairs: [
      ['Cherubismus', 'Kinder, bilateral, Riesenzellen'],
      ['Pindborg-Tumor', 'Amyloid'],
      ['Osteosarkom des Kiefers', 'Ältere Patienten'],
      ['Odontogene Osteomyelitis', 'Nach Zahnextraktion']
    ],
    ex: 'Weitere Kieferläsionen: ossifizierendes Fibrom, ossäre und fibröse Dysplasie, zentrales Riesenzellgranulom, Knochenzysten, Osteoradionekrose, Bisphosphonat-assoziierte Kiefernekrose.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k17-t01', sec: '17.1', p: 57, type: 'tf', a: true, q: 'Ca. 80 % der Speicheldrüsentumoren liegen in der Parotis.', ex: 'Tumoren: ~80 % in der Parotis.' },
  { id: 'k17-t02', sec: '17.1', p: 57, type: 'tf', a: false, q: 'Der Warthin-Tumor betrifft typischerweise junge Frauen.', ex: 'Warthin-Tumor (Zystadenolymphom): ältere Raucher, Männer, bilateral.' },
  { id: 'k17-t03', sec: '17.1', p: 57, type: 'tf', a: true, q: 'Das Mukoepidermoidkarzinom kommt auch bei Kindern vor.', ex: 'Mukoepidermoid-Ca: häufigster maligner Speicheldrüsentumor, auch bei Kindern; MAML2.' },
  { id: 'k17-t04', sec: '17.1', p: 57, type: 'tf', a: false, q: 'Ein pleomorphes Adenom kann nicht maligne entarten.', ex: 'Karzinom ex pleomorphem Adenom ist möglich.' },
  { id: 'k17-t05', sec: '17.1', p: 57, type: 'tf', a: true, q: 'Das Speichelgangkarzinom exprimiert Androgenrezeptor und HER2.', ex: 'Speichelgang-Ca: Androgenrezeptor, HER2.' },
  { id: 'k17-t06', sec: '17.2', p: 57, type: 'tf', a: false, q: 'Die orale Candidose zeigt nicht abwischbare weiße Beläge.', ex: 'Soor: abwischbare Beläge. Nicht abwischbar → Leukoplakie.' },
  { id: 'k17-t07', sec: '17.2', p: 57, type: 'tf', a: true, q: 'Inhomogene (erythroleukoplakische, verruköse) Leukoplakien haben ein höheres Entartungsrisiko als homogene.', ex: 'Inhomogen (erythroleukoplakisch, verrukös): höheres Risiko.' },
  { id: 'k17-t08', sec: '17.2', p: 57, type: 'tf', a: true, q: 'Das Entartungsrisiko einer oralen Leukoplakie liegt bei ca. 1–3 % pro Jahr.', ex: 'Entartungsrisiko ~1–3 %/J.' },
  { id: 'k17-t09', sec: '17.2', p: 57, type: 'tf', a: false, q: 'Der Pemphigus vulgaris der Mundschleimhaut bildet subepitheliale Blasen.', ex: 'Pemphigus vulgaris: intraepithelial (Desmoglein 3). Subepithelial → Schleimhautpemphigoid.' },
  { id: 'k17-t10', sec: '17.2', p: 57, type: 'tf', a: true, q: 'HPV16-assoziierte oropharyngeale Karzinome sind p16-positiv.', ex: 'Oropharyngeal HPV16-assoziiert (p16+, bessere Prognose).' },
  { id: 'k17-t11', sec: '17.2', p: 57, type: 'tf', a: false, q: 'Die laterale Halszyste geht vom Ductus thyreoglossus aus.', ex: 'Laterale Halszyste: Kiemengang. Ductus thyreoglossus → mediane Halszyste.' },
  { id: 'k17-t12', sec: '17.3', p: 57, type: 'tf', a: true, q: 'Die radikuläre Zyste ist die häufigste Kieferzyste.', ex: 'Radikuläre Zyste: häufigste; entzündlich, an der Wurzelspitze eines devitalen Zahns.' },
  { id: 'k17-t13', sec: '17.3', p: 57, type: 'tf', a: false, q: 'Die follikuläre Zyste liegt an der Wurzelspitze eines devitalen Zahns.', ex: 'Follikuläre (dentigere) Zyste: um die Krone eines retinierten Zahns.' },
  { id: 'k17-t14', sec: '17.3', p: 57, type: 'tf', a: true, q: 'Das Ameloblastom trägt häufig eine BRAF-V600E-Mutation.', ex: 'Ameloblastom: BRAF V600E.' },
  { id: 'k17-t15', sec: '17.3', p: 57, type: 'tf', a: false, q: 'Die odontogene Keratozyste rezidiviert praktisch nie.', ex: 'Odontogene Keratozyste: Rezidivneigung.' },
  { id: 'k17-t16', sec: '17.3', p: 57, type: 'tf', a: true, q: 'Das Schmelzorgan stammt aus dem Ektoderm.', ex: 'Schmelzorgan (Ektoderm), Papille (Ektomesenchym) → Dentin/Pulpa.' }
]);
