/* Kapitel 7 – Ösophagus, Magen, Dünndarm (PDF S. 23–25) */
PQ.registerChapter(7, [

  /* ---------- 7.1 Ösophagus ---------- */
  {
    id: 'k7-01', sec: '7.1', p: 23, type: 'kprim', alt: '2022, 2024',
    q: 'Ösophaguskarzinom – welche Aussagen treffen zu?',
    st: [
      ['Eine neoadjuvante Radiochemotherapie verbessert beim lokal fortgeschrittenen Karzinom das Überleben.', true],
      ['Eine verminderte Säuresekretion ist ein Risikofaktor für das Adenokarzinom.', false],
      ['Im Frühstadium ist unter bestimmten Umständen eine endoskopische Resektion möglich.', true],
      ['HER2 ist beim Ösophagus-Adenokarzinom gleichmäßiger verteilt und leichter auszuwerten als beim Mammakarzinom.', false]
    ],
    ex: 'GERD-RF ist eine erhöhte Säuresekretion. HER2 beim Ösophagus-/Magen-Adeno-Ca: höhere intratumorale Heterogenität als beim Mamma-Ca → schwieriger auszuwerten. Neoadjuvante Therapie im Stadium II–IVa: Überleben ~13 % besser.'
  },
  {
    id: 'k7-02', sec: '7.1', p: 23, type: 'kprim', alt: '2012',
    q: 'Barrett-Ösophagus – welche Aussagen treffen zu?',
    st: [
      ['Das Adenokarzinom entsteht aus dem Barrett-Ösophagus.', true],
      ['Eine HG-IEN geht in ca. 75 % in ein Karzinom über.', false],
      ['Adipositas fördert die Refluxkrankheit.', true],
      ['Die Inzidenz des Adenokarzinoms ist konstant.', false]
    ],
    ex: 'Karzinomrisiko aus Barrett: keine IEN ~2 %, LG-IEN ~7 %, HG-IEN ~22 % (nicht 75 %). Das Adenokarzinom hat in Industrienationen eine steigende Inzidenz.'
  },
  {
    id: 'k7-03', sec: '7.1', p: 23, type: 'single', alt: '2008',
    q: 'Refluxkrankheit und Ösophagus-Adenokarzinom – welche Aussage trifft zu?',
    opts: [
      'Adipositas ist eine typische Ursache der GERD.',
      'Alkohol ist ein Risikofaktor des Adenokarzinoms.',
      'H. pylori ist ein Risikofaktor des Adenokarzinoms.',
      'Eine IEN zeigt definitionsgemäß eine Frühinvasion.',
      'Eine Barrett-Mukosa findet sich nur bei ca. 20 % der Patienten.'
    ],
    a: 0,
    ex: 'Alkohol und HP sind KEINE RF des Adeno-Ca (HP eher protektiv). Eine IEN ist definitionsgemäß nicht invasiv. Barrett-Mukosa ist bei ~80 % der Patienten nachweisbar.'
  },
  {
    id: 'k7-04', sec: '7.1', p: 23, type: 'kprim',
    q: 'Plattenepithelkarzinom des Ösophagus – welche Aussagen treffen zu?',
    st: [
      ['Alkohol (hochprozentig) und Rauchen sind die wichtigsten Risikofaktoren.', true],
      ['Es liegt an den physiologischen Engen, v. a. im mittleren/unteren Drittel.', true],
      ['Es entsteht über eine Barrett-Metaplasie.', false],
      ['Weltweit ist es seltener als das Adenokarzinom.', false]
    ],
    ex: 'PE-Ca: weltweit ~85 % (Entwicklungsländer), in Industrienationen < 40 %; atrophische Ösophagitis → Dysplasie → CIS → Karzinom. Barrett → Adenokarzinom.'
  },
  {
    id: 'k7-05', sec: '7.1', p: 23, type: 'single',
    q: 'Was ist ein Barrett-Ösophagus?',
    opts: [
      'Ersatz des Plattenepithels durch Zylinderepithel mit Becherzellen (intestinale Metaplasie)',
      'Atrophische Ösophagitis mit Dysplasie des Plattenepithels',
      'Weißliche Beläge mit PAS-positiven Pseudohyphen'
    ],
    a: 0,
    ex: 'Barrett: endoskopisch lachsrote Zungen, Z-Linie nach proximal verschoben; short (< 3 cm) vs. long segment (> 3 cm, höheres Risiko). Pseudohyphen → Soorösophagitis.'
  },
  {
    id: 'k7-06', sec: '7.1', p: 23, type: 'single',
    q: 'Wie hoch ist das Karzinomrisiko eines Barrett-Ösophagus mit hochgradiger IEN?',
    opts: ['~22 %', '~75 %', '~2 %', '~7 %'],
    a: 0,
    ex: 'Keine IEN ~2 %, LG-IEN ~7 %, HG-IEN ~22 % (nicht 75 % – Altfrage 2012).'
  },
  {
    id: 'k7-07', sec: '7.1', p: 23, type: 'single',
    q: 'Wann reicht beim Ösophaguskarzinom eine endoskopische Resektion aus?',
    opts: [
      'Beim Frühkarzinom pT1a (Mukosa; sm < 500 µm, G1/2, L0)',
      'Bei T1b–T3-Tumoren',
      'Beim Plattenepithelkarzinom im oberen Drittel'
    ],
    a: 0,
    ex: 'T1b–T3 → Ösophagektomie + Lymphadenektomie; PE-Ca im oberen Drittel → primäre Radiochemotherapie.'
  },
  {
    id: 'k7-08', sec: '7.1', p: 23, type: 'single',
    q: 'Welcher histologische Befund passt zur Refluxösophagitis?',
    opts: [
      'Basalzellhyperplasie, verlängerte Papillen, intraepitheliale Eosinophile',
      'PAS-positive Pseudohyphen',
      'Zylinderepithel mit Becherzellen'
    ],
    a: 0,
    ex: 'Refluxösophagitis: Basalzellhyperplasie, verlängerte Papillen, intraepitheliale Eosinophile/Granulozyten, Erosionen. Pseudohyphen → Soor; Becherzellen → Barrett.'
  },
  {
    id: 'k7-09', sec: '7.1', p: 23, type: 'single',
    q: 'Wann tritt beim Ösophaguskarzinom das Leitsymptom Dysphagie auf?',
    opts: ['Spät, ab > 60 % Lumeneinengung', 'Früh, schon bei ca. 10 % Lumeneinengung', 'Nur beim Adenokarzinom'],
    a: 0,
    ex: 'Leitsymptom Dysphagie (spät, ab > 60 % Lumeneinengung) bei beiden Typen; Männer 2–4×; 5-JÜR gesamt < 10 %.'
  },

  /* ---------- 7.2 Gastritis ---------- */
  {
    id: 'k7-10', sec: '7.2', p: '23–24', type: 'single', alt: '2013A, 2015',
    q: 'Typ-A-Gastritis – welche Aussage ist FALSCH?',
    opts: [
      'Sie zeigt histologisch immer eine HP-Besiedlung.',
      'Sie führt zur Korpusatrophie.',
      'Sie kann eine perniziöse Anämie verursachen.',
      'Es finden sich Antikörper gegen Parietalzellen.',
      'Ein NET ist eine seltene Komplikation.'
    ],
    a: 0,
    ex: 'Typ A ist autoimmun (AK gegen Parietalzellen/H+/K+-ATPase und Intrinsic Factor) – nicht HP-bedingt und nicht über einen HP-Nachweis zu diagnostizieren.'
  },
  {
    id: 'k7-11', sec: '7.2', p: '23–24', type: 'single', alt: '2013B, 2018, 2024',
    q: 'Typ-A-Gastritis – welche Aussage ist FALSCH?',
    opts: [
      'Bevorzugt betroffen ist das Antrum.',
      'Sie ist autoimmun bedingt.',
      'Es kommt zum Intrinsic-Factor- und Vitamin-B12-Mangel.',
      'Das Infiltrat besteht aus Lymphozyten und Plasmazellen.'
    ],
    a: 0,
    ex: 'Typ A: Korpus/Fundus, Antrum frei. Das Antrum ist bei der Typ-B- und Typ-C-Gastritis betroffen.'
  },
  {
    id: 'k7-12', sec: '7.2', p: '23–24', type: 'single', alt: '2009',
    q: 'Typ-B-Gastritis – welche Aussage trifft zu?',
    opts: [
      'Sie wird meistens durch H. pylori verursacht.',
      'Sie ist autoimmun bedingt.',
      'Sie geht fast immer mit einer Korpusgastritis einher.',
      'Sie verursacht eine perniziöse Anämie.'
    ],
    a: 0,
    ex: 'Typ B (~80 %): H. pylori; Antrum, aszendiert später zum Korpus. Autoimmun und perniziöse Anämie → Typ A.'
  },
  {
    id: 'k7-13', sec: '7.2', p: '23–24', type: 'kprim', alt: '2016',
    q: 'Typ-B-Gastritis – welche Aussagen treffen zu?',
    st: [
      ['Sie ist überwiegend bakteriell (H. pylori) bedingt.', true],
      ['Sie betrifft bevorzugt das Antrum.', true],
      ['Es finden sich lymphozytäre und neutrophile Infiltrate.', true],
      ['Sie kann ein MALT-Lymphom verursachen.', true]
    ],
    ex: 'Alle vier treffen zu. Chronisch-aktiv: Lymphozyten/Plasmazellen + neutrophile Granulozyten (Aktivität), Lymphfollikel, stäbchenförmige Bakterien (Giemsa/Warthin-Starry).'
  },
  {
    id: 'k7-14', sec: '7.2', p: '23–24', type: 'single', alt: '2012',
    q: 'Typ-B-Gastritis – welche Aussage ist FALSCH?',
    opts: [
      'Sie führt typischerweise gehäuft zu neuroendokrinen Tumoren.',
      'Sie ist ein Risikofaktor für das MALT-Lymphom.',
      'Sie betrifft bevorzugt das Antrum.',
      'Es kann eine herdförmige intestinale Metaplasie auftreten.'
    ],
    a: 0,
    ex: 'NET (Typ 1) entstehen bei der Typ-A-Gastritis (Achlorhydrie → Hypergastrinämie → ECL-Zell-Hyperplasie).'
  },
  {
    id: 'k7-15', sec: '7.2', p: '23–24', type: 'match',
    q: 'Ordne den Gastritistyp seiner Ursache zu.',
    pairs: [
      ['Typ A (~5 %)', 'Autoantikörper gegen Parietalzellen und Intrinsic Factor'],
      ['Typ B (~80 %)', 'Helicobacter pylori'],
      ['Typ C (~15 %)', 'NSAR, Steroide, Alkohol, Gallereflux'],
      ['Typ D', 'Sonderformen (lymphozytär, granulomatös, eosinophil, kollagen)']
    ],
    ex: 'Granulomatöse Gastritis z. B. bei M. Crohn und Sarkoidose; Kombinationsformen (A + B) kommen vor.'
  },
  {
    id: 'k7-16', sec: '7.2', p: 24, type: 'match',
    q: 'Ordne den Gastritistyp seiner typischen Folge zu.',
    pairs: [
      ['Typ A', 'Perniziöse Anämie, NET Typ 1'],
      ['Typ B', 'Ulkus, MALT-Lymphom, Magenkarzinom'],
      ['Typ C', 'Erosionen, Ulzera, Blutung']
    ],
    ex: 'Typ A: IF-Mangel → B12-Mangel → perniziöse (megaloblastäre) Anämie, funikuläre Myelose; Magen-Ca-Risiko ↑. Typ B außerdem: atrophische Gastritis, Riesenfaltengastritis, ITP, chronische Urtikaria.'
  },
  {
    id: 'k7-17', sec: '7.2', p: 23, type: 'single',
    q: 'Welcher histologische Befund ist typisch für die chemische (Typ-C-)Gastritis?',
    opts: [
      'Kaum Entzündung, foveoläre Hyperplasie, glatte Muskelfasern in der Lamina propria',
      'Chronisch-aktive Entzündung mit stäbchenförmigen Bakterien auf dem Epithel',
      'Verlust der Parietalzellen mit ECL-Zell-Hyperplasie'
    ],
    a: 0,
    ex: 'Typ C: kaum Entzündung, foveoläre Hyperplasie, Ödem, Kapillarektasie, glatte Muskelfasern. Bakterien → Typ B; Parietalzellverlust → Typ A.'
  },
  {
    id: 'k7-18', sec: '7.2', p: 24, type: 'single',
    q: 'Woraus müssen zur Diagnose einer chronischen Gastritis Biopsien entnommen werden?',
    opts: ['Aus Antrum UND Korpus', 'Nur aus dem Antrum', 'Nur aus dem Duodenum'],
    a: 0,
    ex: 'Die Diagnose einer chronischen Gastritis ist nur histologisch möglich (Biopsien aus Antrum UND Korpus). Sydney-System: Ätiologie, Topographie, Grad, Aktivität, Atrophie, intestinale Metaplasie, HP.'
  },
  {
    id: 'k7-19', sec: '7.2', p: 24, type: 'single',
    q: 'Wie entsteht bei der Typ-A-Gastritis ein neuroendokriner Tumor?',
    opts: [
      'Achlorhydrie → Hypergastrinämie → ECL-Zell-Hyperplasie → NET Typ 1',
      'HP-Infektion → MALT → NET',
      'Gallereflux → foveoläre Hyperplasie → NET'
    ],
    a: 0,
    ex: 'Typ A: Achlorhydrie → Hypergastrinämie → ECL-Hyperplasie → NET Typ 1 (Mikrokarzinoide, ~5 %).'
  },

  /* ---------- 7.3 Erosion & Ulkus ---------- */
  {
    id: 'k7-20', sec: '7.3', p: 24, type: 'single', alt: '2009, 2013A',
    q: 'Ulkus – welche Aussage ist FALSCH?',
    opts: [
      'Paracetamol fördert die Ulkusentstehung im Magen.',
      'H. pylori und akuter Stress begünstigen Ulzera.',
      'NSAR fördern die Ulkusentstehung.',
      'Ein Polytrauma kann ein Stressulkus auslösen.',
      'Ein blutendes Ulkus kann Teerstuhl verursachen.'
    ],
    a: 0,
    ex: 'NSAR/ASS hemmen die Prostaglandine; Paracetamol ist kein NSAR.'
  },
  {
    id: 'k7-21', sec: '7.3', p: 24, type: 'single', alt: '2019–2021',
    q: 'Erosion und Ulkus – welche Aussage ist FALSCH?',
    opts: [
      'Im Gegensatz zum Ulkus durchdringt die Erosion die Muscularis mucosae.',
      'Eine Ulkusblutung kann lebensbedrohlich sein.',
      'NSAR fördern die Ulkusentstehung.',
      'Jedes Magenulkus wird biopsiert.'
    ],
    a: 0,
    ex: 'Erosion: Defekt, der die Muscularis mucosae nicht überschreitet (heilt narbenlos). Ulkus: Defekt durch die Muscularis mucosae hindurch.'
  },
  {
    id: 'k7-22', sec: '7.3', p: 24, type: 'match',
    q: 'Ordne das Ulkus bzw. Syndrom seiner Ursache zu.',
    pairs: [
      ['Curling-Ulkus', 'Verbrennung'],
      ['Cushing-Ulkus', 'Schädel-Hirn-Trauma'],
      ['Zollinger-Ellison-Syndrom', 'Gastrinom']
    ],
    ex: 'Weitere aggressive Faktoren: H. pylori, NSAR/ASS, Glukokortikoide (+ NSAR), Säure/Pepsin, Rauchen, Gallereflux, Hyperparathyreoidismus (Gastrin ↑).'
  },
  {
    id: 'k7-23', sec: '7.3', p: 24, type: 'kprim',
    q: 'Welche Faktoren schützen die Magenschleimhaut?',
    st: [
      ['Schleim und Bikarbonat', true],
      ['Prostaglandine', true],
      ['Glukokortikoide', false],
      ['Gallereflux', false]
    ],
    ex: 'Protektiv: Schleim, Bikarbonat, Prostaglandine, Durchblutung, Epithelregeneration. Glukokortikoide (v. a. mit NSAR) und Gallereflux sind aggressive Faktoren.'
  },
  {
    id: 'k7-24', sec: '7.3', p: 24, type: 'single',
    q: 'Wo liegen peptische Ulzera am häufigsten?',
    opts: ['Im Duodenum', 'Im Magenfundus', 'An der großen Kurvatur des Magens'],
    a: 0,
    ex: 'Das Duodenalulkus ist häufiger als das Magenulkus; Magenulzera liegen v. a. an der kleinen Kurvatur und im Antrum.'
  },
  {
    id: 'k7-25', sec: '7.3', p: 24, type: 'single',
    q: 'Welche Ulkuskomplikation betrifft typischerweise das Pankreas?',
    opts: ['Penetration', 'Narbenstenose', 'Teerstuhl'],
    a: 0,
    ex: 'Komplikationen: Blutung (Hämatemesis, Teerstuhl/Meläna), Perforation, Penetration (Pankreas), Narbenstenose (Pylorus), maligne Entartung selten.'
  },
  {
    id: 'k7-26', sec: '7.3', p: 24, type: 'single',
    q: 'Wie ist ein Ulkus histologisch von luminal nach basal geschichtet?',
    opts: [
      'Fibrin/Exsudat → fibrinoide Nekrose → Granulationsgewebe → Narbe',
      'Granulationsgewebe → Fibrin → Narbe → fibrinoide Nekrose',
      'Narbe → Granulationsgewebe → fibrinoide Nekrose → Fibrin'
    ],
    a: 0,
    ex: 'Ulkus-Wandschichten: Fibrin/Exsudat → fibrinoide Nekrose → Granulationsgewebe → Narbe.'
  },

  /* ---------- 7.4 Magenkarzinom ---------- */
  {
    id: 'k7-27', sec: '7.4', p: '24–25', type: 'single', alt: '2008',
    q: 'Magenkarzinom – welche Aussage trifft zu?',
    opts: [
      'Die HP-Infektion ist ein Risikofaktor.',
      'Die meisten Magenkarzinome sind bei Diagnose inoperabel.',
      'Die Laurén-Typen unterscheiden sich nicht in der Differenzierung.',
      'Auf eine Lymphadenektomie kann oft verzichtet werden.',
      'Nitrosamine sind nicht mehr von Bedeutung.'
    ],
    a: 0,
    ex: 'RF: H. pylori, Nitrosamine, Rauchen, Typ-A-Gastritis u. a. Laurén: intestinal gut differenziert vs. diffus schlecht differenziert. Standard: D2-Lymphadenektomie.'
  },
  {
    id: 'k7-28', sec: '7.4', p: '24–25', type: 'single', alt: '2021, 2022',
    q: 'Magenkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Der diffuse Typ nach Laurén wird als gut differenziertes Adenokarzinom graduiert.',
      'Der diffuse Typ zeigt Siegelringzellen.',
      'Der intestinale Typ ist HP- und metaplasieassoziiert.',
      'Der diffuse Typ hat eine schlechtere Prognose.'
    ],
    a: 0,
    ex: 'Diffuser Typ: Siegelringzellen, schlecht differenziert, infiltrativ („Linitis plastica“), jüngere Patienten, Frauen, CDH1.'
  },
  {
    id: 'k7-29', sec: '7.4', p: '24–25', type: 'single', alt: '2020',
    q: 'Magenkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Das diffuse Magenkarzinom führt häufig zur Perforation.',
      'Magenkarzinom und MALT-Lymphom sind HP-assoziiert.',
      'Die Peritonealkarzinose ist für das Staging relevant.',
      'In Deutschland wird es meist fortgeschritten diagnostiziert.',
      'Beim diffusen Typ ist die Peristaltik gestört.'
    ],
    a: 0,
    ex: 'Der diffuse Typ wächst infiltrativ („Linitis plastica“/Schrumpfmagen) mit gestörter Peristaltik; eine häufige Perforation ist nicht typisch (Altfrage).'
  },
  {
    id: 'k7-30', sec: '7.4', p: 24, type: 'kprim',
    q: 'Magenkarzinom vom diffusen Typ nach Laurén – welche Aussagen treffen zu?',
    st: [
      ['Typisch sind Siegelringzellen und infiltratives Wachstum („Linitis plastica“).', true],
      ['Er ist mit CDH1 (E-Cadherin) assoziiert.', true],
      ['Er betrifft typischerweise ältere Männer mit HP-assoziierter Metaplasie.', false],
      ['Er hat eine bessere Prognose als der intestinale Typ.', false]
    ],
    ex: 'Intestinaler Typ: drüsig, gut differenziert, polypös/expansiv, ältere Männer, HP/Metaplasie, bessere Prognose. Diffuser Typ: jüngere Patienten, Frauen, schlechtere Prognose.'
  },
  {
    id: 'k7-31', sec: '7.4', p: 24, type: 'single',
    q: 'Wie ist das Magenfrühkarzinom definiert?',
    opts: [
      'Auf Mukosa/Submukosa begrenzt, unabhängig vom LK-Status',
      'Auf die Mukosa begrenzt und ohne Lymphknotenmetastasen',
      'Tumor < 2 cm, unabhängig von der Infiltrationstiefe'
    ],
    a: 0,
    ex: 'Frühkarzinom = auf Mukosa/Submukosa begrenzt (unabhängig vom LK-Status).'
  },
  {
    id: 'k7-32', sec: '7.4', p: 24, type: 'match',
    q: 'Ordne die Metastase des Magenkarzinoms ihrer Lokalisation zu.',
    pairs: [
      ['Virchow-Lymphknoten', 'Links supraklavikulär'],
      ['Krukenberg-Tumor', 'Ovar'],
      ['Schnitzler-Metastase', 'Douglas-Raum']
    ],
    ex: 'Metastasierung: lymphogen (regionär, Virchow), hämatogen (Leber), Peritonealkarzinose (präoperativ ausschließen!).'
  },
  {
    id: 'k7-33', sec: '7.4', p: 24, type: 'single',
    q: 'Welches Gen ist beim hereditären diffusen Magenkarzinom mutiert?',
    opts: ['CDH1 (E-Cadherin)', 'c-KIT', 'RET', 'MLH1-Promotor'],
    a: 0,
    ex: 'Hereditäres diffuses Magen-Ca: CDH1/E-Cadherin. c-KIT → GIST; RET → MEN2/medulläres SD-Ca; MLH1-Methylierung → sporadische MSI-Karzinome.'
  },
  {
    id: 'k7-34', sec: '7.4', p: 24, type: 'kprim',
    q: 'Welche der folgenden sind Risikofaktoren des Magenkarzinoms?',
    st: [
      ['Helicobacter pylori', true],
      ['Nitrosamine (gepökelte, geräucherte, salzige Speisen)', true],
      ['Z. n. Magenteilresektion (Billroth II)', true],
      ['Blutgruppe 0', false]
    ],
    ex: 'Weitere RF: Rauchen, Typ-A-Gastritis/perniziöse Anämie, Adenome, M. Ménétrier, genetisch (CDH1, Lynch, FAP, Blutgruppe A).'
  },
  {
    id: 'k7-35', sec: '7.4', p: 24, type: 'single',
    q: 'Welche Lymphadenektomie ist beim Magenkarzinom Standard?',
    opts: ['D2-Lymphadenektomie', 'Keine Lymphadenektomie', 'Nur der Sentinel-Lymphknoten'],
    a: 0,
    ex: 'Therapie: Gastrektomie/subtotale Resektion mit standardmäßiger D2-Lymphadenektomie, perioperative Chemotherapie (FLOT); HER2-Testung (Trastuzumab).'
  },

  /* ---------- 7.5 GIST & NET ---------- */
  {
    id: 'k7-36', sec: '7.5', p: 25, type: 'single', alt: '2008, Fragensammlung',
    q: 'GIST – welche Aussage ist FALSCH?',
    opts: [
      'GIST verhalten sich auch bei einer Größe > 10 cm überwiegend benigne.',
      'GIST gehen von den interstitiellen Cajal-Zellen aus.',
      'GIST sind im Magen häufiger als im Dünndarm.',
      'Ca. 5 % liegen im Kolorektum/Anorektum.'
    ],
    a: 0,
    ex: 'Malignitätsrisiko nach Größe, Mitosen/50 HPF und Lokalisation; > 10 cm = hohes Risiko.'
  },
  {
    id: 'k7-37', sec: '7.5', p: 25, type: 'single', alt: '2008, Fragensammlung',
    q: 'Welche Mutation ist typisch für GIST?',
    opts: ['Aktivierende c-KIT-Mutation', 'c-RET-Mutation', 'CDH1-Mutation', 'APC-Mutation'],
    a: 0,
    ex: 'GIST: aktivierende c-KIT-Mutation (Tyrosinkinase; ~80 %) oder PDGFRA; nicht c-RET. Therapie OP + Imatinib.'
  },
  {
    id: 'k7-38', sec: '7.5', p: 25, type: 'match',
    q: 'Ordne den Magen-NET-Typ seinem Kennzeichen zu.',
    pairs: [
      ['Typ 1', 'Bei A-Gastritis, multipel, klein, benigne Tendenz'],
      ['Typ 2', 'Gastrinom/MEN1'],
      ['Typ 3', 'Sporadisch, solitär, aggressiv']
    ],
    ex: 'NET allgemein: Synaptophysin/Chromogranin; Grading nach Ki-67/Mitosen; NEC = schlecht differenziert.'
  },
  {
    id: 'k7-39', sec: '7.5', p: 25, type: 'match',
    q: 'Ordne den NET-Grad seinem Ki-67-Index zu.',
    pairs: [
      ['G1', '< 3 %'],
      ['G2', '3–20 %'],
      ['G3', '> 20 %']
    ],
    ex: 'Grading der NET nach Ki-67/Mitosen.'
  },
  {
    id: 'k7-40', sec: '7.5', p: 25, type: 'single',
    q: 'Welche Immunhistochemie ist typisch für GIST?',
    opts: ['CD117 (KIT), DOG1, CD34', 'Synaptophysin, Chromogranin', 'Desmin, Myogenin'],
    a: 0,
    ex: 'GIST: CD117, DOG1, CD34; spindelzellig/epitheloid. Synaptophysin/Chromogranin → NET; Desmin/Myogenin → Rhabdomyosarkom.'
  },

  /* ---------- 7.6 Dünndarm ---------- */
  {
    id: 'k7-41', sec: '7.6', p: 25, type: 'single', alt: '2010',
    q: 'Zöliakie – welche Aussage ist FALSCH?',
    opts: [
      'Histologisch charakteristisch ist ein granulozytäres intraepitheliales Infiltrat.',
      'Es gibt zwei Altersgipfel.',
      'Endomysium-Antikörper sind in > 60 % positiv.',
      'Sie ist in Irland häufig, in Schweden selten.',
      'Ursache ist eine Glutenunverträglichkeit.'
    ],
    a: 0,
    ex: 'Zöliakie: IEL ↑, Kryptenhyperplasie, Zottenatrophie, lymphoplasmazelluläres Infiltrat – keine granulozytären Infiltrate, keine Kryptenabszesse. EmA-Anteil und Irland/Schweden laut Altfrage.'
  },
  {
    id: 'k7-42', sec: '7.6', p: 25, type: 'kprim', alt: '2019',
    q: 'Zöliakie – welche Aussagen treffen zu?',
    st: [
      ['Endomysium-Antikörper sind in einem Teil der Fälle positiv.', true],
      ['Es gibt deutliche regionale Unterschiede.', true],
      ['Auslöser ist Gluten.', true],
      ['Typisch ist ein intraepitheliales neutrophiles Infiltrat.', false]
    ],
    ex: 'Intraepithelial sind Lymphozyten vermehrt (> 25–40/100 Enterozyten), keine Neutrophilen.'
  },
  {
    id: 'k7-43', sec: '7.6', p: 25, type: 'single', alt: '2018, 2023',
    q: 'Was ist bei der Zöliakie NICHT typisch?',
    opts: [
      'Neutrophile Granulozyten im Stroma',
      'Zottenatrophie',
      'Kryptenhyperplasie',
      'Vermehrte intraepitheliale Lymphozyten',
      'Lymphoplasmazelluläres Infiltrat der Lamina propria'
    ],
    a: 0,
    ex: 'Granulozytäre/neutrophile Infiltrate und Kryptenabszesse sind untypisch für die Zöliakie.'
  },
  {
    id: 'k7-44', sec: '7.6', p: 25, type: 'single', alt: '2025',
    q: 'Enteritis – welche Aussage ist FALSCH?',
    opts: [
      'Bei der Giardiasis werden PAS-positive SPC-Zellen nachgewiesen.',
      'Die Giardiasis betrifft v. a. Kinder.',
      'Tropheryma whipplei wird per PCR nachgewiesen.',
      'Lamblien sind fakultativ pathogen.',
      'Beim M. Whipple ist ein ZNS-Befall möglich.'
    ],
    a: 0,
    ex: 'PAS-positive SPC-Makrophagen gehören zum M. Whipple. Giardiasis: birnenförmige Trophozoiten auf dem Zottenepithel.'
  },
  {
    id: 'k7-45', sec: '7.6', p: 25, type: 'single',
    q: 'Welche HLA-Typen sind bei der Zöliakie in ca. 97 % nachweisbar?',
    opts: ['HLA-DQ2/DQ8', 'HLA-B27', 'HLA-DR4'],
    a: 0,
    ex: 'Zöliakie: HLA-DQ2/DQ8 bei ~97 %. HLA-B27 → M. Bechterew; HLA-DR4 → rheumatoide Arthritis.'
  },
  {
    id: 'k7-46', sec: '7.6', p: 25, type: 'single',
    q: 'Welchen prädiktiven Wert hat der HLA-DQ2/DQ8-Nachweis bei der Zöliakie?',
    opts: [
      'Niedriger positiver, aber ca. 100 % negativer prädiktiver Wert',
      'Hoher positiver, aber niedriger negativer prädiktiver Wert',
      'Er ist für die Diagnose beweisend'
    ],
    a: 0,
    ex: 'HLA-DQ2/DQ8: niedriger positiver, aber ~100 % negativer prädiktiver Wert – ein negativer Befund schließt die Zöliakie praktisch aus.'
  },
  {
    id: 'k7-47', sec: '7.6', p: 25, type: 'match',
    q: 'Ordne die Dünndarmerkrankung ihrem histologischen Kennzeichen zu.',
    pairs: [
      ['Zöliakie', 'IEL ↑, Kryptenhyperplasie, Zottenatrophie'],
      ['M. Whipple', 'PAS-positive Makrophagen (SPC-Zellen)'],
      ['Giardiasis', 'Birnenförmige Trophozoiten auf dem Zottenepithel'],
      ['CVID', 'Kaum Plasmazellen'],
      ['Autoimmunenteropathie', 'Anti-Enterozyten-/Becherzell-AK, EmA negativ']
    ],
    ex: 'DD Zottenatrophie außerdem: tropische Sprue, M. Crohn, Nahrungsmittelintoleranz, Infektionen.'
  },
  {
    id: 'k7-48', sec: '7.6', p: 25, type: 'single',
    q: 'Welche Komplikation entsteht aus einer refraktären Zöliakie Typ II?',
    opts: ['Enteropathie-assoziiertes T-Zell-Lymphom', 'MALT-Lymphom', 'GIST'],
    a: 0,
    ex: 'Refraktäre Zöliakie Typ II: aberrante, klonale IEL → Enteropathie-assoziiertes T-Zell-Lymphom. MALT-Lymphom → HP-Gastritis.'
  },
  {
    id: 'k7-49', sec: '7.6', p: 25, type: 'single',
    q: 'Was unterscheidet Maldigestion und Malabsorption?',
    opts: [
      'Maldigestion = gestörte intraluminale Aufspaltung, Malabsorption = gestörte Resorption am Enterozyten',
      'Maldigestion = gestörte Resorption, Malabsorption = gestörte Aufspaltung',
      'Beide Begriffe sind gleichbedeutend'
    ],
    a: 0,
    ex: 'Malassimilation = Maldigestion (z. B. Pankreasinsuffizienz) + Malabsorption → Diarrhö, Steatorrhö, Gewichtsverlust, Mangelerscheinungen.'
  },
  {
    id: 'k7-50', sec: '7.6', p: 25, type: 'kprim',
    q: 'Zöliakie – welche Aussagen treffen zu?',
    st: [
      ['Frauen sind etwa doppelt so häufig betroffen wie Männer.', true],
      ['Typ-1-Diabetiker und Patienten mit IgA-Mangel sind Risikogruppen.', true],
      ['Die Biopsien werden aus dem terminalen Ileum entnommen.', false],
      ['Eine Dermatitis herpetiformis Duhring spricht gegen eine Zöliakie.', false]
    ],
    ex: 'Zöliakie: ~1 : 100; Biopsien (3–5) aus dem distalen Duodenum; Klinik u. a. Dermatitis herpetiformis Duhring, Anämie, Osteoporose, oft oligo-/asymptomatisch.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k7-t01', sec: '7.1', p: 23, type: 'tf', a: false, q: 'Alkohol ist ein Risikofaktor des Barrett-Adenokarzinoms.', ex: 'Alkohol und H. pylori sind keine RF des Adeno-Ca (Altfrage 2008).' },
  { id: 'k7-t02', sec: '7.1', p: 23, type: 'tf', a: true, q: 'H. pylori wirkt beim Ösophagus-Adenokarzinom eher protektiv.', ex: 'HP ist eher protektiv für das Adeno-Ca.' },
  { id: 'k7-t03', sec: '7.1', p: 23, type: 'tf', a: true, q: 'Das Adenokarzinom des Ösophagus liegt zu ca. 95 % im distalen Drittel bzw. am gastroösophagealen Übergang.', ex: 'Adeno-Ca: distales Drittel/GÖÜ (~95 %).' },
  { id: 'k7-t04', sec: '7.1', p: 23, type: 'tf', a: false, q: 'Eine intraepitheliale Neoplasie des Ösophagus zeigt definitionsgemäß eine Frühinvasion.', ex: 'Eine IEN ist definitionsgemäß nicht invasiv (Altfrage 2008).' },
  { id: 'k7-t05', sec: '7.1', p: 23, type: 'tf', a: true, q: 'Ein Long-Segment-Barrett (> 3 cm) hat ein höheres Karzinomrisiko als ein Short-Segment-Barrett.', ex: 'Short (< 3 cm) vs. long segment (> 3 cm, höheres Risiko).' },
  { id: 'k7-t06', sec: '7.1', p: 23, type: 'tf', a: true, q: 'Das Ösophaguskarzinom metastasiert wegen der fehlenden Serosa früh lymphogen.', ex: 'Frühe lymphogene Metastasierung (fehlende Serosa!), hämatogen spät.' },
  { id: 'k7-t07', sec: '7.1', p: 23, type: 'tf', a: false, q: 'Die 5-JÜR des Ösophaguskarzinoms liegt insgesamt bei ca. 50 %.', ex: '5-JÜR gesamt < 10 %.' },
  { id: 'k7-t08', sec: '7.1', p: 23, type: 'tf', a: true, q: 'Die Soorösophagitis zeigt PAS-positive Pseudohyphen.', ex: 'Soorösophagitis (Candida; Immunsuppression): weißliche Beläge, Pseudohyphen (PAS).' },
  { id: 'k7-t09', sec: '7.2', p: 23, type: 'tf', a: false, q: 'Die Typ-A-Gastritis betrifft bevorzugt das Antrum.', ex: 'Typ A: Korpus/Fundus, Antrum frei (Altfrage 2013B, 2018, 2024).' },
  { id: 'k7-t10', sec: '7.2', p: 24, type: 'tf', a: true, q: 'Die Typ-A-Gastritis kann zu einer perniziösen Anämie führen.', ex: 'IF-Mangel → Vitamin-B12-Mangel → perniziöse Anämie.' },
  { id: 'k7-t11', sec: '7.2', p: 24, type: 'tf', a: false, q: 'Die Typ-A-Gastritis wird durch den Nachweis von H. pylori diagnostiziert.', ex: 'Typ A ist autoimmun (Altfrage 2015).' },
  { id: 'k7-t12', sec: '7.2', p: 23, type: 'tf', a: true, q: 'Die Typ-B-Gastritis ist mit ca. 80 % die häufigste Gastritisform.', ex: 'Typ A ~5 %, Typ B ~80 %, Typ C ~15 %.' },
  { id: 'k7-t13', sec: '7.2', p: 24, type: 'tf', a: false, q: 'Die Typ-B-Gastritis führt typischerweise gehäuft zu neuroendokrinen Tumoren.', ex: 'NET entstehen bei der Typ-A-Gastritis (Altfrage 2012).' },
  { id: 'k7-t14', sec: '7.2', p: 23, type: 'tf', a: true, q: 'Neutrophile Granulozyten zeigen die Aktivität einer chronischen Gastritis an.', ex: 'Chronisch-aktiv: Lymphozyten/Plasmazellen (chronisch) + neutrophile Granulozyten (Aktivität).' },
  { id: 'k7-t15', sec: '7.2', p: 23, type: 'tf', a: true, q: 'H. pylori lässt sich mit der Giemsa- oder Warthin-Starry-Färbung darstellen.', ex: 'Stäbchenförmige Bakterien auf dem Epithel (Giemsa/Warthin-Starry).' },
  { id: 'k7-t16', sec: '7.2', p: 24, type: 'tf', a: false, q: 'Die meisten HP-Infizierten entwickeln eine manifeste Gastritis oder ein Ulkus.', ex: 'Nur 10–20 % der HP-Infizierten bekommen eine manifeste Gastritis/Ulkus.' },
  { id: 'k7-t17', sec: '7.2', p: 24, type: 'tf', a: true, q: 'Eine chronische Gastritis kann nur histologisch diagnostiziert werden.', ex: 'Diagnose nur histologisch (Biopsien aus Antrum UND Korpus).' },
  { id: 'k7-t18', sec: '7.3', p: 24, type: 'tf', a: false, q: 'Eine Erosion durchbricht die Muscularis mucosae.', ex: 'Erosion: überschreitet die Muscularis mucosae nicht (Altfrage 2019–2021).' },
  { id: 'k7-t19', sec: '7.3', p: 24, type: 'tf', a: true, q: 'Erosionen heilen narbenlos.', ex: 'Erosion heilt narbenlos.' },
  { id: 'k7-t20', sec: '7.3', p: 24, type: 'tf', a: false, q: 'Paracetamol ist ein NSAR und fördert die Ulkusentstehung.', ex: 'Paracetamol ist kein NSAR (Altfrage 2009, 2013A).' },
  { id: 'k7-t21', sec: '7.3', p: 24, type: 'tf', a: true, q: 'Ein Hyperparathyreoidismus kann über eine Gastrinerhöhung Ulzera begünstigen.', ex: 'Aggressive Faktoren u. a.: Gastrinom (Zollinger-Ellison), Hyperparathyreoidismus (Gastrin ↑).' },
  { id: 'k7-t22', sec: '7.3', p: 24, type: 'tf', a: false, q: 'Das Magenulkus ist häufiger als das Duodenalulkus.', ex: 'Duodenalulkus häufiger als Magenulkus.' },
  { id: 'k7-t23', sec: '7.3', p: 24, type: 'tf', a: true, q: 'Jedes Magenulkus wird biopsiert, um ein Ulkuskarzinom auszuschließen.', ex: 'Jedes Magenulkus wird biopsiert (DD Ulkuskarzinom).' },
  { id: 'k7-t24', sec: '7.3', p: 24, type: 'tf', a: false, q: 'Die maligne Entartung ist eine häufige Komplikation des Magenulkus.', ex: 'Maligne Entartung selten.' },
  { id: 'k7-t25', sec: '7.4', p: 24, type: 'tf', a: false, q: 'Das Magenkarzinom nimmt in Westeuropa zu.', ex: 'Magen-Ca: rückläufig in Westeuropa, hoch in Japan/Korea.' },
  { id: 'k7-t26', sec: '7.4', p: 24, type: 'tf', a: false, q: 'Der diffuse Typ nach Laurén ist gut differenziert.', ex: 'Diffuser Typ: schlecht differenziert (Altfrage 2021, 2022).' },
  { id: 'k7-t27', sec: '7.4', p: 24, type: 'tf', a: true, q: 'Der intestinale Typ nach Laurén hat eine bessere Prognose als der diffuse Typ.', ex: 'Intestinal: bessere Prognose; diffus: schlechtere Prognose.' },
  { id: 'k7-t28', sec: '7.4', p: 24, type: 'tf', a: false, q: 'Ein Magenfrühkarzinom liegt nur vor, wenn keine Lymphknotenmetastasen bestehen.', ex: 'Frühkarzinom = auf Mukosa/Submukosa begrenzt, unabhängig vom LK-Status.' },
  { id: 'k7-t29', sec: '7.4', p: 24, type: 'tf', a: true, q: 'Vor einer Magenkarzinom-Operation muss eine Peritonealkarzinose ausgeschlossen werden.', ex: 'Peritonealkarzinose präoperativ ausschließen!' },
  { id: 'k7-t30', sec: '7.4', p: 24, type: 'tf', a: true, q: 'Beim Magenkarzinom wird der HER2-Status bestimmt (Trastuzumab).', ex: 'HER2-Testung (Trastuzumab); HER2 ~30 % beim intestinalen, ~5 % beim diffusen Typ.' },
  { id: 'k7-t31', sec: '7.4', p: 24, type: 'tf', a: false, q: 'Nitrosamine spielen für das Magenkarzinom keine Rolle mehr.', ex: 'Nitrosamine sind ein RF (Altfrage 2008).' },
  { id: 'k7-t32', sec: '7.5', p: 25, type: 'tf', a: true, q: 'GIST sind die häufigsten mesenchymalen Tumoren des GIT.', ex: 'GIST: häufigster mesenchymaler Tumor des GIT; Cajal-Zellen.' },
  { id: 'k7-t33', sec: '7.5', p: 25, type: 'tf', a: false, q: 'GIST liegen am häufigsten im Dünndarm.', ex: 'Magen ~60 % > Dünndarm ~20–30 % > Kolorektum/Anorektum ~5 % > Ösophagus.' },
  { id: 'k7-t34', sec: '7.5', p: 25, type: 'tf', a: false, q: 'GIST des Magens haben eine ungünstigere Prognose als GIST des Dünndarms.', ex: 'Dünndarm ungünstiger als Magen.' },
  { id: 'k7-t35', sec: '7.5', p: 25, type: 'tf', a: true, q: 'Bei GIST wird Imatinib eingesetzt.', ex: 'Therapie OP + Imatinib (prädiktiv: Mutationsstatus).' },
  { id: 'k7-t36', sec: '7.5', p: 25, type: 'tf', a: true, q: 'Der Magen-NET Typ 1 entsteht bei einer Typ-A-Gastritis.', ex: 'Typ 1: bei A-Gastritis, Hypergastrinämie, multipel, klein, benigne Tendenz.' },
  { id: 'k7-t37', sec: '7.6', p: 25, type: 'tf', a: true, q: 'Bei der Zöliakie deamidiert die Gewebstransglutaminase das Gliadin.', ex: 'tTG deamidiert Gliadin → höhere Affinität zu HLA-DQ2/DQ8 → CD4-T-Zell-Aktivierung.' },
  { id: 'k7-t38', sec: '7.6', p: 25, type: 'tf', a: false, q: 'Bei der Zöliakie sind Kryptenabszesse typisch.', ex: 'Keine granulozytären Infiltrate und keine Kryptenabszesse.' },
  { id: 'k7-t39', sec: '7.6', p: 25, type: 'tf', a: true, q: 'Bei der Zöliakie-Serologie sollte das Gesamt-IgA mitbestimmt werden.', ex: 'Serologie: tTG-IgA und EmA-IgA; Gesamt-IgA mitbestimmen.' },
  { id: 'k7-t40', sec: '7.6', p: 25, type: 'tf', a: true, q: 'Der M. Whipple wird durch Tropheryma whipplei verursacht.', ex: 'M. Whipple: Tropheryma whipplei (PCR-Nachweis).' },
  { id: 'k7-t41', sec: '7.6', p: 25, type: 'tf', a: false, q: 'Der M. Whipple heilt unbehandelt meist spontan aus.', ex: 'M. Whipple: unbehandelt letal (Antibiose).' },
  { id: 'k7-t42', sec: '7.6', p: 25, type: 'tf', a: false, q: 'Bei der Giardiasis finden sich PAS-positive SPC-Zellen.', ex: 'SPC-Zellen → M. Whipple (Altfrage 2025).' },
  { id: 'k7-t43', sec: '7.6', p: 25, type: 'tf', a: true, q: 'Rota- und Noroviren können eine Enteritis verursachen.', ex: 'Enteritis-Erreger: Lamblien, Salmonellen, Coxsackie-, Rota-, Noroviren, Yersinien, Candida u. a.' },
  { id: 'k7-t44', sec: '7.6', p: 25, type: 'tf', a: true, q: 'Die Zöliakie erhöht das Risiko für ein Dünndarm-Adenokarzinom.', ex: 'Komplikationen: refraktäre Zöliakie (Typ II → EATL), Dünndarm-Adeno-Ca.' }
]);
