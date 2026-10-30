/* Chapter 17 – Head & neck: salivary glands, oral cavity, jaw (PDF p. 57) */
PQ.registerChapter(17, [

  /* ---------- 17.1 Salivary glands ---------- */
  {
    id: 'k17-01', sec: '17.1', p: 57, type: 'single',
    q: 'Welche Speicheldrüse ist am häufigsten von einer Sialolithiasis betroffen?',
    opts: ['Glandula submandibularis', 'Glandula parotis', 'Glandula sublingualis'],
    a: 0,
    ex: 'Sialolithiasis: v. a. Gl. submandibularis (~80 %; muköses, alkalisches, kalkreiches Sekret, aufsteigender Gang); Männer, mittleres Alter; schmerzhafte Schwellung beim Essen.'
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

  /* ---------- 17.2 Oral cavity & differential diagnosis of neck swelling ---------- */
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

  /* ---------- 17.3 Jaw ---------- */
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

  /* ---------- True/false statements ---------- */
  { id: 'k17-t10', sec: '17.2', p: 57, type: 'tf', a: true, q: 'HPV16-assoziierte oropharyngeale Karzinome sind p16-positiv.', ex: 'Oropharyngeal HPV16-assoziiert (p16+, bessere Prognose).' },
  { id: 'k17-t12', sec: '17.3', p: 57, type: 'tf', a: true, q: 'Die radikuläre Zyste ist die häufigste Kieferzyste.', ex: 'Radikuläre Zyste: häufigste; entzündlich, an der Wurzelspitze eines devitalen Zahns.' },
  { id: 'k17-t15', sec: '17.3', p: 57, type: 'tf', a: false, q: 'Die odontogene Keratozyste rezidiviert praktisch nie.', ex: 'Odontogene Keratozyste: Rezidivneigung.' },
]);
