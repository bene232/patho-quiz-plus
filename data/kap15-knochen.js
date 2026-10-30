/* Chapter 15 – Bone, joints, soft tissue (PDF pp. 47–51) */
PQ.registerChapter(15, [

  /* ---------- 15.1 Osteoarthritis ---------- */
  {
    id: 'k15-01', sec: '15.1', p: 47, type: 'kprim', alt: '2022, 2024',
    q: 'Arthrose – welche Aussagen treffen zu?',
    st: [
      ['Sie geht primär von der Synovialmembran aus.', false],
      ['Eine sekundäre Arthrose kann durch Trauma oder Stoffwechselerkrankung entstehen.', true],
      ['Geröllzysten und Sklerose finden sich schon im Frühstadium.', false],
      ['Das Röntgen ermöglicht eine frühe Diagnose.', false]
    ],
    ex: 'Die Arthrosis deformans geht vom Gelenkknorpel aus (nicht von der Synovialis!). Geröllzysten und subchondrale Sklerose gehören zu Stadium IV; das Röntgen ist erst spät aussagekräftig.'
  },
  {
    id: 'k15-02', sec: '15.1', p: 47, type: 'kprim', alt: '2019',
    q: 'Arthrose-Stadien nach Otte – welche Aussagen treffen zu?',
    st: [
      ['Stadium I: geringer Substanzverlust', false],
      ['Stadium III: Defekt über die gesamte Knorpeldicke', true],
      ['Stadium IV: vollständiger Knorpelverlust', true],
      ['Stadium 0: oberflächliche Fibrillierung', false]
    ],
    ex: 'Stadium I: oberflächennaher Proteoglykanverlust, oberflächliche Fissuren (Fibrillation), noch kein Substanzverlust. Die Fibrillierung gehört also zu Stadium I.'
  },
  {
    id: 'k15-04', sec: '15.1', p: 47, type: 'single',
    q: 'Wovon geht die Arthrosis deformans aus?',
    opts: ['Vom Gelenkknorpel', 'Von der Synovialis', 'Vom subchondralen Knochen'],
    a: 0,
    ex: 'Arthrosis deformans = Gelenkverschleiß über das altersübliche Maß hinaus; geht vom Gelenkknorpel aus (nicht von der Synovialis!) und bezieht später Knochen und Synovialis ein.'
  },
  {
    id: 'k15-08', sec: '15.1', p: 47, type: 'single',
    q: 'Welche Gelenke sind bei der Arthrose v. a. betroffen?',
    opts: [
      'Große, belastete Gelenke (Knie, Hüfte, Schulter) und Fingerendgelenke',
      'MCP- und PIP-Gelenke symmetrisch, DIP frei',
      'Großzehengrundgelenk (Podagra)',
      'Kniegelenk mit Meniskusverkalkung bei älteren Patienten'
    ],
    a: 0,
    ex: 'Arthrose: Knie, Hüfte, Schulter, Fingerendgelenke (Heberden). MCP/PIP symmetrisch → RA; Podagra → Gicht; Meniskusverkalkung → Chondrokalzinose.'
  },

  /* ---------- 15.2 Joint replacement pathology ---------- */
  {
    id: 'k15-09', sec: '15.2', p: 47, type: 'single', alt: '2013B, 2015, 2016',
    q: 'Periprothetische Membran – welche Aussage ist FALSCH?',
    opts: [
      'Nach der erweiterten Konsensusklassifikation entspricht Typ I dem Infektionstyp.',
      'Bei der Prothesenlockerung entsteht zwischen Prothese und Knochen eine periprothetische Membran.',
      'Die Histologie der Membran gibt Hinweise auf die Lockerungsursache.',
      'Typ II wird über die Zahl der neutrophilen Granulozyten pro HPF bestimmt.',
      'Typ III ist ein Mischtyp aus Abrieb und Infektion.'
    ],
    a: 0,
    ex: 'Konsensusklassifikation (Krenn/Morawietz): Typ I = abriebinduziert, Typ II = infektiös, Typ III = Mischtyp, Typ IV = indifferent (fibrös).'
  },
  {
    id: 'k15-11', sec: '15.2', p: 47, type: 'single',
    q: 'Ab welchem Befund gilt eine periprothetische Membran als infektiös (Typ II)?',
    opts: ['≥ 23 neutrophile Granulozyten in 10 HPF', 'Nachweis von Polyethylenpartikeln', 'Fibröse Membran ohne Entzündung', 'Arthrofibrose'],
    a: 0,
    ex: 'Typ II: Quantifizierung der neutrophilen Granulozyten pro HPF (≥ 23 in 10 HPF) – zuverlässiger als die Mikrobiologie. Partikel → Typ I; fibrös → Typ IV.'
  },
  {
    id: 'k15-12', sec: '15.2', p: 47, type: 'single',
    q: 'Wie führen Abriebpartikel zur Prothesenlockerung (Typ I)?',
    opts: [
      'Makrophagenaktivierung mit proinflammatorischen Mediatoren → Osteolysen',
      'Low-Grade-Infektion mit neutrophilen Granulozyten',
      'Fibrose ohne Entzündungsreaktion'
    ],
    a: 0,
    ex: 'Typ I: Polyethylen-, Metall-, Zement-, Keramikpartikel → Makrophagenaktivierung, Freisetzung proinflammatorischer Mediatoren → Osteolysen, Pseudotumoren.'
  },

  /* ---------- 15.3 Arthritides ---------- */
  {
    id: 'k15-13', sec: '15.3', p: 48, type: 'kprim', alt: '2022',
    q: 'Chronische Polyarthritis (RA) – welche Aussagen treffen zu?',
    st: [
      ['Typisch ist ein symmetrischer Befall großer Gelenke.', false],
      ['Histologisch zeigt sich eine proliferative Synovialitis.', true],
      ['Im Spätstadium kann es zur Ankylose kommen.', true],
      ['Granulome sind kein typischer Befund.', false]
    ],
    ex: 'RA: symmetrischer, polyartikulärer Befall v. a. kleiner Gelenke, später auch großer (2023/2024 als „großer UND kleiner Gelenke“ ✓). Rheumaknoten = rheumatoide Granulome laut KPK.'
  },
  {
    id: 'k15-14', sec: '15.3', p: 48, type: 'single', alt: '2008, 2010',
    q: 'Arthritis – welche Aussage ist FALSCH?',
    opts: [
      'Männer sind bei der rheumatoiden Arthritis häufiger betroffen.',
      'Bei Kindern < 2 J ist H. influenzae ein Erreger der eitrigen Arthritis.',
      'Auch Viren können eine Arthritis verursachen.',
      'Die Ätiologie der RA ist unklar.',
      'Die Basisaktivität der RA zeigt sich in Lymphozyten, Plasmazellen und Makrophagen.'
    ],
    a: 0,
    ex: 'RA: Frauen : Männer ≈ 3 : 1. Die letzte Option war 2008 als „aktuelle Aktivität“ formuliert, laut Skript ist es die Basisaktivität.'
  },
  {
    id: 'k15-15', sec: '15.3', p: 48, type: 'single', alt: '2018, 2020, 2023',
    q: 'Was ist KEINE Kristallarthropathie?',
    opts: ['Hyperparathyreoidismus', 'Gicht', 'Oxalose', 'Chondrokalzinose', 'Hydroxylapatit-Synovialitis'],
    a: 0,
    ex: 'Der Hyperparathyreoidismus selbst ist keine Kristallarthropathie (er ist aber mit der Chondrokalzinose assoziiert).'
  },
  {
    id: 'k15-16', sec: '15.3', p: 48, type: 'single', alt: '2019',
    q: 'Was ist für die Polymyositis typisch?',
    opts: ['Infiltration des Muskels durch T-Lymphozyten', 'Dystrophin-Mutation', 'Aktin-Mutation', 'Eosinophile Infiltrate', 'Poliovirus-Infektion'],
    a: 0,
    ex: 'Polymyositis: Infiltration des Muskels durch T-Lymphozyten (keine Dystrophin- oder Aktin-Mutation, keine Eosinophilen, kein Poliovirus).'
  },
  {
    id: 'k15-18', sec: '15.3', p: 48, type: 'single',
    q: 'Wo tritt der akute Gichtanfall typischerweise auf?',
    opts: ['Großzehengrundgelenk (Podagra)', 'Kniegelenk mit Meniskusverkalkung', 'Fingerendgelenke (Heberden)', 'Schulter (Hydroxylapatit)'],
    a: 0,
    ex: 'Akuter Gichtanfall: Großzehengrundgelenk = Podagra, nachts, nach Feier. Knie/Menisken → Chondrokalzinose; Heberden → Arthrose; Schulter → Hydroxylapatit-Tendinitis.'
  },
  {
    id: 'k15-19', sec: '15.3', p: 48, type: 'kprim',
    q: 'Gicht – welche Aussagen treffen zu?',
    st: [
      ['Sie ist nicht mit dem metabolischen Syndrom assoziiert.', false],
      ['Die primäre Hyperurikämie beruht auf einer Ausscheidungsstörung.', true],
      ['Tophi sind Urat-Ablagerungen mit Fremdkörpergranulom.', true],
      ['Die Uratkristalle sind rhomboid und positiv doppelbrechend.', false]
    ],
    ex: 'Gicht: häufigste Arthritisform, assoziiert mit metabolischem Syndrom; Urat nadelförmig, negativ doppelbrechend. Rhomboid, schwach positiv doppelbrechend = Kalziumpyrophosphat (Chondrokalzinose).'
  },
  {
    id: 'k15-24', sec: '15.3', p: 48, type: 'single',
    q: 'Welche Gelenke bleiben bei der rheumatoiden Arthritis typischerweise frei?',
    opts: ['DIP-Gelenke', 'MCP-Gelenke', 'PIP-Gelenke', 'Handgelenke'],
    a: 0,
    ex: 'RA: v. a. kleine Gelenke (MCP, PIP, Handgelenke; DIP frei), später auch große Gelenke.'
  },
  {
    id: 'k15-25', sec: '15.3', p: 48, type: 'single',
    q: 'Welcher Erreger ist der häufigste der eitrigen (infektiösen) Arthritis?',
    opts: ['Staphylococcus aureus', 'H. influenzae', 'Gonokokken', 'Parvovirus B19'],
    a: 0,
    ex: 'Infektiöse Arthritis: Staph. aureus (häufigster), Streptokokken, Gonokokken, gramnegative Keime; bei Kindern < 2 J H. influenzae; auch Viren (Röteln, Parvovirus B19, HBV) und Tbc.'
  },
  {
    id: 'k15-26', sec: '15.3', p: 48, type: 'single',
    q: 'Welche Arthritis tritt nach einer Urethritis oder Enteritis (Chlamydien, Yersinien, Salmonellen) auf?',
    opts: ['Reaktive Arthritis', 'Rheumatoide Arthritis', 'Arthritis urica', 'Chondrokalzinose'],
    a: 0,
    ex: 'Reaktive Arthritis: nach Urethritis/Enteritis durch Chlamydien, Yersinien, Salmonellen, Shigellen, Campylobacter; Reiter-Trias.'
  },
  {
    id: 'k15-27', sec: '15.3', p: 48, type: 'kprim',
    q: 'Rheumatoide Arthritis – welche Aussagen treffen zu?',
    st: [
      ['HLA-DR4, Rauchen und Citrullinierung spielen eine Rolle.', true],
      ['Frauen sind etwa 3-mal häufiger betroffen.', true],
      ['Der Altersgipfel liegt bei 70–80 Jahren.', false],
      ['Die RA ist auf die Gelenke beschränkt und keine Systemerkrankung.', false]
    ],
    ex: 'RA: systemische Autoimmunerkrankung, Ätiologie unklar (HLA-DR4, Rauchen, Citrullinierung); Frauen : Männer ≈ 3 : 1, 35–45 J.'
  },

  /* ---------- 15.4 Osteomyelitis ---------- */
  {
    id: 'k15-28', sec: '15.4', p: '48–49', type: 'single', alt: '2008, 2013B',
    q: 'Was ist die häufigste Ursache einer Osteomyelitis?',
    opts: ['Staphylococcus-aureus-Infektion', 'Tuberkulose', 'Salmonellen', 'Lues'],
    a: 0,
    ex: 'Unspezifische OM: Staph. aureus häufigster Erreger; Streptokokken, gramnegative Keime, Salmonellen bei Sichelzellanämie. Tbc und Lues verursachen eine spezifische OM.'
  },
  {
    id: 'k15-29', sec: '15.4', p: '48–49', type: 'single', alt: '2016',
    q: 'Was ist KEIN Erreger bzw. keine Ursache einer spezifischen Osteomyelitis?',
    opts: ['Staphylococcus aureus', 'Brucellen', 'Sarkoidose', 'Tuberkulose'],
    a: 0,
    ex: 'Spezifische OM: Tbc, Lues, Brucellose (M. Bang), Sarkoidose (M. Boeck), Typhus, Pilze, Echinokokken. Staph. aureus ist kein Erreger einer spezifischen OM.'
  },
  {
    id: 'k15-30', sec: '15.4', p: 49, type: 'kprim', alt: '2013B, 2015, 2019',
    q: 'Welche der folgenden sind Komplikationen der chronischen Osteomyelitis?',
    st: [
      ['Pathologische Fraktur', true],
      ['Fistelkarzinom', true],
      ['Sepsis', true],
      ['Beinlängenveränderung', true]
    ],
    ex: 'Alle vier treffen zu. Außerdem: AA-Amyloidose, kutane Fisteln, Gelenkeinbruch.'
  },
  {
    id: 'k15-31', sec: '15.4', p: '48–49', type: 'single', alt: '2022',
    q: 'Osteomyelitis – welche Aussage trifft NICHT zu?',
    opts: [
      'Die akute OM zeigt histologisch eine Markraumfibrose mit lymphozytärem Infiltrat und reaktiver Knochenneubildung.',
      'Bei Kleinkindern kann es zum Gelenkeinbruch kommen.',
      'Am häufigsten ist die exogene OM.',
      'Am Kiefer entsteht die OM oft odontogen.',
      'Staph. aureus verursacht eine unspezifische, M. tuberculosis eine spezifische OM.'
    ],
    a: 0,
    ex: 'Markraumfibrose, lymphoplasmazelluläres Infiltrat und reaktive Knochenneubildung sind Zeichen der chronischen OM. Akut: nekrotischer Knochen mit leeren Osteozytenlakunen, Markraumödem, Granulozyten.'
  },
  {
    id: 'k15-32', sec: '15.4', p: '48–49', type: 'single', alt: '2023',
    q: 'Osteomyelitis – welche Aussage trifft NICHT zu?',
    opts: [
      'Am häufigsten tritt die endogene OM auf.',
      'Die exogene OM geht meist in eine chronische OM über.',
      'Die endogene OM betrifft v. a. Kinder.',
      'Die endogene OM beginnt im Markraum.'
    ],
    a: 0,
    ex: 'Häufigste Form ist die exogene OM (~70 %; posttraumatisch, postoperativ, fortgeleitet). Die endogene (hämatogene) OM macht ~30 % aus.'
  },
  {
    id: 'k15-35', sec: '15.4', p: 49, type: 'single',
    q: 'Welcher histologische Befund ist typisch für die akute Osteomyelitis?',
    opts: [
      'Nekrotischer Knochen mit leeren Osteozytenlakunen, Markraumödem, neutrophile Granulozyten',
      'Markraumfibrose mit lymphoplasmazellulärem Infiltrat und Sklerose',
      'Sequester und Totenlade',
      'Geflechtknochen wie „chinesische Schriftzeichen“'
    ],
    a: 0,
    ex: 'Akute OM: partiell nekrotischer Knochen, leere Osteozytenlakunen, Markraumödem, Granulozyten (Abszess), gesteigerter Umbau. Fibrose, Sequester und Totenlade → chronisch; „chinesische Schriftzeichen“ → fibröse Dysplasie.'
  },
  {
    id: 'k15-36', sec: '15.4', p: 49, type: 'single',
    q: 'Was ist ein Fistelkarzinom?',
    opts: [
      'Plattenepithelkarzinom im Fistelgang einer chronischen Osteomyelitis',
      'Knochenmetastase eines Prostatakarzinoms',
      'Osteosarkom bei M. Paget'
    ],
    a: 0,
    ex: 'Das Fistelkarzinom (Plattenepithel-Ca im Fistelgang) ist eine Komplikation der chronischen OM.'
  },
  {
    id: 'k15-37', sec: '15.4', p: 48, type: 'single',
    q: 'Welche Erreger verursachen gehäuft eine Osteomyelitis bei Sichelzellanämie?',
    opts: ['Salmonellen', 'Brucellen', 'Mycobacterium tuberculosis'],
    a: 0,
    ex: 'Unspezifische OM u. a. durch Salmonellen bei Sichelzellanämie. Brucellen (M. Bang) und Tbc verursachen eine spezifische OM.'
  },
  {
    id: 'k15-38', sec: '15.4', p: '48–49', type: 'kprim',
    q: 'Osteomyelitis – welche Aussagen treffen zu?',
    st: [
      ['Die exogene OM macht ca. 70 % aus.', true],
      ['Die endogene OM betrifft zu ca. 80 % Kinder zwischen 2 und 16 Jahren.', true],
      ['Die endogene OM beginnt im Periost.', false],
      ['Staph. aureus ist ein Erreger der spezifischen OM.', false]
    ],
    ex: 'Die endogene (hämatogene) OM beginnt im Markraum; beim Erwachsenen v. a. Wirbelsäule (Spondylodiszitis). Staph. aureus verursacht eine unspezifische OM.'
  },

  /* ---------- 15.5 Osteopathies, fractures, bone cysts ---------- */
  {
    id: 'k15-40', sec: '15.5', p: 49, type: 'kprim', alt: '2021',
    q: 'Osteopathien – welche Zuordnungen treffen zu?',
    st: [
      ['Osteomalazie: verminderte Knochenmasse bei normaler Mineralisation', false],
      ['Osteosklerose: verbreiterte Kortikalis und/oder Spongiosabälkchen', true],
      ['Osteomalazie: röntgenologisch erhöhte Strahlendurchlässigkeit', true],
      ['Osteoporose: Mineralisationsstörung mit vermehrtem Osteoid', false]
    ],
    ex: 'Genau vertauscht: Osteoporose = verminderte Knochenmasse bei normaler Mineralisation; Osteomalazie = Mineralisationsstörung mit vermehrtem unmineralisiertem Osteoid.'
  },
  {
    id: 'k15-41', sec: '15.5', p: 49, type: 'single', alt: '2016, 2021',
    q: 'Osteoporose – welche Aussage ist FALSCH?',
    opts: [
      'Bei der Tuberkulose kommt es zur generalisierten Osteoporose.',
      'Die Altersosteoporose ist generalisiert.',
      'Typisch sind Keilwirbel.',
      'Histologisch zeigt sich eine Rarefizierung der Trabekel mit Lakunen.',
      'Die Osteomalazie sieht röntgenologisch ähnlich aus.'
    ],
    a: 0,
    ex: 'Bei Tbc entsteht eine lokalisierte, perifokale Osteoporose. Generalisiert: postmenopausal, senil, Steroide/Cushing, Hyperthyreose, HPT, Hypogonadismus, Malabsorption u. a.'
  },
  {
    id: 'k15-42', sec: '15.5', p: '49–50', type: 'single', alt: '2022, 2025',
    q: 'Frakturheilung – welche Aussage ist FALSCH?',
    opts: [
      'Bei der primären Knochenheilung entwickelt sich aus dem Frakturhämatom nach 1–2 Wochen Kallusgewebe.',
      'Eine Pseudarthrose ist eine mögliche Komplikation.',
      'Eine stabile Verbindung der Fragmente ermöglicht die primäre Heilung.',
      'Ein breiter Frakturspalt führt zur sekundären, mehrschrittigen Heilung.',
      'Der Kallus entsteht über Granulations-, Binde- und Knochengewebe.'
    ],
    a: 0,
    ex: 'Primäre (direkte) Heilung: stabile Fixierung, Kontakt/enger Spalt → Osteone überbrücken direkt, ohne Kallus. Kallus entsteht nur bei der sekundären Heilung.'
  },
  {
    id: 'k15-44', sec: '15.5', p: 49, type: 'single',
    q: 'Welcher DXA-Wert definiert eine Osteoporose?',
    opts: ['T-Score ≤ −2,5', 'T-Score ≥ +2,5', 'T-Score ≤ −1,0'],
    a: 0,
    ex: 'Diagnose der Osteoporose mit DXA: T-Score ≤ −2,5.'
  },
  {
    id: 'k15-46', sec: '15.5', p: 49, type: 'kprim',
    q: 'M. Paget (Osteitis deformans) – welche Aussagen treffen zu?',
    st: [
      ['Er ist die zweithäufigste Skeletterkrankung nach der Osteoporose.', true],
      ['Typisch ist eine Mosaikstruktur mit unregelmäßigen Kittlinien.', true],
      ['Die alkalische Phosphatase ist typischerweise erniedrigt.', false],
      ['Er betrifft meist nur einen Knochen.', false]
    ],
    ex: 'M. Paget: > 40 J; 70–80 % polyostotisch (Becken, Schädel, Femur, WS); Riesenosteoklasten, Faserknochen; AP ↑↑; Säbelscheidentibia, Hutgröße ↑; Osteosarkomrisiko.'
  },
  {
    id: 'k15-47', sec: '15.5', p: 49, type: 'single',
    q: 'Welcher Befund ist typisch für die fibröse Dysplasie?',
    opts: [
      'Geflechtknochenbälkchen ohne Osteoblastensaum wie „chinesische Schriftzeichen“',
      'Mosaikstruktur mit Riesenosteoklasten',
      'Blutgefüllte Kammern mit Riesenzellen in den Septen',
      'Breite Osteoidsäume mit Looser-Umbauzonen'
    ],
    a: 0,
    ex: 'Fibröse Dysplasie: GNAS-Mutation; Geflechtknochen in fibrösem Stroma; Röntgen Milchglas, Hirtenstabdeformität. Mosaikstruktur → M. Paget; Blutkammern → aneurysmatische Knochenzyste; Osteoidsäume → Osteomalazie.'
  },
  {
    id: 'k15-48', sec: '15.5', p: '49–50', type: 'single',
    q: 'Was gehört zum McCune-Albright-Syndrom?',
    opts: [
      'Polyostotische fibröse Dysplasie + Café-au-lait-Flecken + Pubertas praecox',
      'Multiple Enchondrome + Hämangiome',
      'Multiple kartilaginäre Exostosen (EXT1/2)',
      'Multiple Enchondrome ohne Hämangiome'
    ],
    a: 0,
    ex: 'McCune-Albright: fibröse Dysplasie + Café-au-lait-Flecken + Pubertas praecox. Enchondrome + Hämangiome → Maffucci; multiple Enchondrome → M. Ollier; multiple Exostosen → EXT1/2, autosomal-dominant.'
  },
  {
    id: 'k15-52', sec: '15.5', p: 49, type: 'single',
    q: 'Welcher Befund spricht für eine renale Osteopathie bei Hyperparathyreoidismus?',
    opts: [
      'Fibroosteoklasie, Osteitis fibrosa cystica (braune Tumoren)',
      'Mosaikstruktur, Säbelscheidentibia',
      'Milchglasbild, Hirtenstabdeformität'
    ],
    a: 0,
    ex: 'Renale Osteopathie/Osteodystrophie bei HPT: Fibroosteoklasie, Osteitis fibrosa cystica (braune Tumoren). Mosaikstruktur → M. Paget; Milchglas → fibröse Dysplasie.'
  },

  /* ---------- 15.6 Bone tumors ---------- */
  {
    id: 'k15-53', sec: '15.6', p: 50, type: 'single', alt: '2008, 2016',
    q: 'Osteosarkom – welche Aussage ist FALSCH?',
    opts: [
      'Das Durchschnittsalter liegt bei 39 Jahren.',
      'Die 5-JÜR hängt von der Chemotherapie-Response ab (gute Responder 80–90 %).',
      'Ca. 60 % liegen in der Knieregion.',
      'Es metastasiert hämatogen in die Lunge.',
      'Es ist der häufigste primär maligne Knochentumor.'
    ],
    a: 0,
    ex: 'Osteosarkom: 2. Lebensdekade (10–25 J; m > w), im Alter sekundär (M. Paget, Bestrahlung, Knocheninfarkt).'
  },
  {
    id: 'k15-54', sec: '15.6', p: 50, type: 'single', alt: '2023, Fragensammlung',
    q: 'Osteosarkom – welche Aussage ist FALSCH?',
    opts: [
      'Die 10-JÜR liegt bei 30–35 %.',
      'Der Altersgipfel liegt in der 2. Lebensdekade.',
      'Röntgenologisch finden sich Codman-Dreieck und Spiculae.',
      'Die Tumorzellen bilden Osteoid bzw. Knochen.'
    ],
    a: 0,
    ex: 'Osteosarkom: 10-JÜR insgesamt 60–75 %; gute Responder 5-JÜR 80–90 %. Therapie: neoadjuvante Chemo → OP → adjuvante Chemo.'
  },
  {
    id: 'k15-55', sec: '15.6', p: 50, type: 'single', alt: '2016, 2018, 2020, 2023, 2025',
    q: 'Histologie: zellreich, kleine runde gleichförmige Kerne, kaum Zytoplasma, Rosetten. Welcher Knochentumor passt?',
    opts: ['Ewing-Sarkom', 'Osteosarkom', 'Chondrosarkom', 'Riesenzelltumor', 'Osteochondrom'],
    a: 0,
    ex: 'Ewing-Sarkom: „kleine, runde, blaue“ Zellen, kaum Zytoplasma (PAS+ Glykogen), Homer-Wright-Rosetten; CD99, t(11;22) EWSR1-FLI1.'
  },
  {
    id: 'k15-56', sec: '15.6', p: 50, type: 'single', alt: '2025',
    q: 'Kappenartiges exophytisches Wachstum, zentral knochenähnlich, peripher knorpelähnlich, keine Atypie. Welche Diagnose passt?',
    opts: ['Kartilaginäre Exostose (Osteochondrom)', 'Enchondrom', 'Chondrosarkom', 'Osteosarkom'],
    a: 0,
    ex: 'Osteochondrom: häufigster benigner Knochentumor, < 20 J; pilzförmig/kappenartig exophytisch an der Metaphyse; zentral knochenähnlich, peripher Knorpelkappe, keine Atypien.'
  },
  {
    id: 'k15-57', sec: '15.6', p: 50, type: 'single', alt: '2013B, Fragensammlung',
    q: 'Welche Reihenfolge der Altersgipfel im 1., 2. und 3. Lebensdrittel trifft zu?',
    opts: [
      'Ewing-Sarkom – Chondrosarkom – Karzinommetastasen',
      'Chondrosarkom – Ewing-Sarkom – Karzinommetastasen',
      'Karzinommetastasen – Chondrosarkom – Ewing-Sarkom',
      'Ewing-Sarkom – Karzinommetastasen – Chondrosarkom'
    ],
    a: 0,
    ex: 'Altersgipfel: 1. Lebensdrittel Ewing-Sarkom (und Osteosarkom) · 2. Chondrosarkom · 3. Karzinommetastasen (und Plasmozytom).'
  },
  {
    id: 'k15-58', sec: '15.6', p: 50, type: 'single', alt: '2022, 2024, 2025',
    q: 'Knochentumoren – welche Aussage trifft NICHT zu?',
    opts: [
      'Primäre Knochentumoren sind häufiger als sekundäre.',
      '50 % der malignen Knochentumoren betreffen Kinder und Jugendliche.',
      'Benigne primäre Knochentumoren sind 3–4-mal häufiger als maligne.',
      'Metastasen sind sekundäre Knochentumoren.',
      'Klinik und Bildgebung geben oft Hinweise auf die Entität.'
    ],
    a: 0,
    ex: 'Sekundäre Knochentumoren (Metastasen) >> primäre; primäre sind sehr selten.'
  },
  {
    id: 'k15-59', sec: '15.6', p: '50–51', type: 'single', alt: '2019',
    q: 'PNET/Ewing-Sarkom – welche Aussage zur Prognose trifft zu?',
    opts: [
      'Die Heilungsrate mit modernen Therapiekonzepten liegt bei etwa 40 %.',
      'Pelvine und große Tumoren haben die beste Prognose.',
      'Watchful Waiting ist eine Therapieoption.',
      'Die Prognose ist stadienunabhängig.',
      'Die Genetik hat keinen Einfluss auf die Prognose.'
    ],
    a: 0,
    ex: 'Laut Altfrage ~40 % (heute bei lokalisierten Tumoren 60–70 %). Die Prognose ist stadienabhängig (Metastasen, Größe, pelvine Lage, Response).'
  },
  {
    id: 'k15-60', sec: '15.6', p: 51, type: 'single', alt: '2019',
    q: 'Was gehört laut KPK NICHT zur radiologischen DD einer lytischen Knochenläsion im HNO-Bereich?',
    opts: ['M. Paget', 'Entzündliche Läsion bzw. Mukozele', 'Chondrosarkom', 'Kongenitale Läsion', 'Invertiertes Papillom'],
    a: 0,
    ex: 'Laut KPK-Lösung gehören entzündliche Läsionen/Mukozele, Chondrosarkom, kongenitale Läsionen und invertiertes Papillom zur DD – der M. Paget nicht.'
  },
  {
    id: 'k15-64', sec: '15.6', p: 50, type: 'single',
    q: 'Welcher Primärtumor verursacht typischerweise osteoblastische Knochenmetastasen?',
    opts: ['Prostatakarzinom', 'Nierenzellkarzinom', 'Schilddrüsenkarzinom', 'Plasmozytom'],
    a: 0,
    ex: 'Osteoblastisch: Prostata (auch Mamma z. T., Karzinoid). Osteolytisch: Niere, Schilddrüse, Lunge, Mamma, Myelom.'
  },
  {
    id: 'k15-65', sec: '15.6', p: 50, type: 'kprim',
    q: 'Osteosarkom – welche Aussagen treffen zu?',
    st: [
      ['Es liegt meist in der Metaphyse langer Röhrenknochen, v. a. in der Kniegelenksregion.', true],
      ['Im Alter entsteht es sekundär, z. B. bei M. Paget oder nach Bestrahlung.', true],
      ['Es metastasiert primär lymphogen.', false],
      ['Es wird durch alleinige Operation ohne Chemotherapie behandelt.', false]
    ],
    ex: 'Osteosarkom: Metastasierung primär hämatogen in die Lunge (~20 % bei Diagnose); Therapie neoadjuvante Chemo → OP → adjuvante Chemo.'
  },
  {
    id: 'k15-66', sec: '15.6', p: 50, type: 'kprim',
    q: 'Ewing-Sarkom – welche Aussagen treffen zu?',
    st: [
      ['Es ist CD99-positiv und zeigt eine t(11;22) EWSR1-FLI1.', true],
      ['Fieber und BSG-Erhöhung machen die Osteomyelitis zur Differenzialdiagnose.', true],
      ['Es liegt typischerweise in der Epiphyse.', false],
      ['Es hat typischerweise keinen Weichteilanteil.', false]
    ],
    ex: 'Ewing-Sarkom: 2. Lebensjahrzehnt, Diaphyse, Becken, untere Extremität, Rippen; ausgedehnter Weichteilanteil.'
  },
  {
    id: 'k15-67', sec: '15.6', p: 50, type: 'kprim',
    q: 'Chondrosarkom – welche Aussagen treffen zu?',
    st: [
      ['Es ist der zweithäufigste primär maligne Knochentumor.', true],
      ['Es ist chemo- und strahlenresistent.', true],
      ['Es tritt bevorzugt im 1. Lebensjahrzehnt auf.', false],
      ['Beckentumoren haben eine bessere Prognose.', false]
    ],
    ex: 'Chondrosarkom (~20 %): 30.–60. LJ, Becken, prox. Femur/Humerus, Rippen; Grade 1–3 (G1 = atypischer Knorpeltumor); weite Resektion; 10-JÜR 40–70 %, Becken schlechter.'
  },
  {
    id: 'k15-68', sec: '15.6', p: 50, type: 'single',
    q: 'Welcher Faktor ist beim Osteosarkom prognostisch am wichtigsten?',
    opts: ['Response (Regressionsgrad) auf die neoadjuvante Chemotherapie', 'Tumorgröße', 'Geschlecht'],
    a: 0,
    ex: 'Die Response (Regressionsgrad) ist der prognostisch wichtigste Faktor: gute Responder 5-JÜR 80–90 %.'
  },
  {
    id: 'k15-70', sec: '15.6', p: 50, type: 'single',
    q: 'Ab welcher Dicke der Knorpelkappe ist ein Osteochondrom entartungsverdächtig?',
    opts: ['> 1–2 cm', '> 1–2 mm', '> 10 cm'],
    a: 0,
    ex: 'Osteochondrom: Entartung selten; eine Knorpelkappe > 1–2 cm ist verdächtig.'
  },

  /* ---------- 15.7 Soft tissue & tendons ---------- */
  {
    id: 'k15-71', sec: '15.7', p: 51, type: 'kprim', alt: '2010, 2013B',
    q: 'Myogene Tumoren – welche Aussagen treffen zu?',
    st: [
      ['Leiomyosarkome liegen häufig intraabdominal oder retroperitoneal.', true],
      ['Kutane Leiomyosarkome haben eine 5-JÜR von 20–30 %, intraabdominale von nahezu 100 %.', false],
      ['Das Rhabdomyosarkom ist das häufigste Weichgewebssarkom bei Kindern.', true],
      ['Rhabdomyosarkome liegen v. a. im Kopf-Hals-Bereich.', true]
    ],
    ex: 'Genau umgekehrt: intraabdominale Leiomyosarkome 5-JÜR 20–30 %, kutane nahe 100 % (kaum Metastasen).'
  },
  {
    id: 'k15-72', sec: '15.7', p: 51, type: 'single', alt: '2010',
    q: 'Weichgewebe und Sehnen – welche Aussage ist FALSCH?',
    opts: [
      'Das Sehnenscheidenganglion liegt in > 80 % am Fußrücken.',
      'Der Riesenzelltumor der Sehnenscheide entspricht der lokalisierten nodulären Synovitis.',
      'Der M. Dupuytren betrifft v. a. Männer > 40 J.',
      'Der M. Ledderhose betrifft die Plantaraponeurose.',
      'Desmoide der Bauchdeckenfaszie wachsen lokal aggressiv.'
    ],
    a: 0,
    ex: 'Das Ganglion („Überbein“) liegt v. a. am Handrücken.'
  },
  {
    id: 'k15-73', sec: '15.7', p: 51, type: 'single', alt: '2015',
    q: 'Weichgewebe und Sehnen – welche Aussage ist FALSCH?',
    opts: [
      'Der gutartige Riesenzelltumor der Sehnenscheide betrifft überwiegend den Fußrücken.',
      'Die Ätiologie des Ganglions ist unklar.',
      'Die Fasciitis nodularis wächst rasch und kann einen Tumor vortäuschen.',
      'Desmoide wachsen lokal aggressiv.'
    ],
    a: 0,
    ex: 'Der tenosynoviale Riesenzelltumor wächst langsam an Finger/Hand; histologisch Histiozyten, Riesenzellen, Hämosiderin, Schaumzellen.'
  },
  {
    id: 'k15-76', sec: '15.7', p: 51, type: 'single',
    q: 'Was ist das häufigste Sarkom des Erwachsenen?',
    opts: ['Liposarkom', 'Rhabdomyosarkom', 'Leiomyosarkom', 'Synovialsarkom'],
    a: 0,
    ex: 'Liposarkom: häufigstes Sarkom des Erwachsenen (~20 %), 5.–7. Dekade, Oberschenkel, Retroperitoneum. Das Rhabdomyosarkom ist bei Kindern am häufigsten, beim Erwachsenen selten.'
  },
  {
    id: 'k15-77', sec: '15.7', p: 51, type: 'single',
    q: 'Was ist der häufigste Weichgewebstumor?',
    opts: ['Lipom', 'Liposarkom', 'Leiomyom', 'Rhabdomyom'],
    a: 0,
    ex: 'Benigne: Lipom (häufigster Weichgewebstumor), Fibrom, Leiomyom, Rhabdomyom (sehr selten), Hämangiom, Schwannom, Neurofibrom.'
  },
  {
    id: 'k15-78', sec: '15.7', p: 51, type: 'single',
    q: 'Welche Parameter gehen in das Grading der Sarkome (FNCLCC) ein?',
    opts: ['Differenzierung, Mitosen, Nekrose', 'Tumorgröße, Lymphknoten, Metastasen', 'Lokalisation und Patientenalter'],
    a: 0,
    ex: 'FNCLCC: Differenzierung + Mitosen + Nekrose → G1–G3. Größe, Lymphknoten und Metastasen gehören zum TNM-Staging.'
  },
  {
    id: 'k15-79', sec: '15.7', p: 51, type: 'kprim',
    q: 'Sarkome – welche Aussagen treffen zu?',
    st: [
      ['Sarkome entstehen de novo, Präkanzerosen gibt es nicht.', true],
      ['Das Alter ist der wichtigste Risikofaktor.', true],
      ['Weichgewebssarkome machen ca. 20 % aller Malignome aus.', false],
      ['Die Immunhistochemie ist für die Liniendifferenzierung verzichtbar.', false]
    ],
    ex: 'Weichgewebstumoren sind selten (< 1 % der Malignome, ~3.000 Sarkome/J in D). Bekannte Ätiologie: Strahlung (Latenz ~10 J), HHV-8, NF1, Li-Fraumeni, chronisches Lymphödem. IHC ist unverzichtbar.'
  },
  {
    id: 'k15-82', sec: '15.7', p: 51, type: 'single',
    q: 'Was ist ein Ganglion („Überbein“)?',
    opts: [
      'Mukoide Zyste ohne Epithelauskleidung, v. a. am Handrücken',
      'Gutartiger Riesenzelltumor der Sehnenscheide',
      'Palmare Fibromatose'
    ],
    a: 0,
    ex: 'Ganglion: mukoide Zyste ohne Epithelauskleidung, v. a. Handrücken; Ätiologie trotz typischer Histologie unklar.'
  },

  /* ---------- True/false statements ---------- */
  { id: 'k15-t01', sec: '15.1', p: 47, type: 'tf', a: false, q: 'Die Arthrose geht primär von der Synovialis aus.', ex: 'Die Arthrose geht vom Gelenkknorpel aus (Altfrage 2022, 2024).' },
  { id: 'k15-t03', sec: '15.1', p: 47, type: 'tf', a: true, q: 'Die Heberden-Arthrose betrifft die Fingerendgelenke.', ex: 'Arthrose: große belastete Gelenke und Fingerendgelenke (Heberden).' },
  { id: 'k15-t04', sec: '15.1', p: 47, type: 'tf', a: false, q: 'Im Stadium I nach Otte besteht bereits ein deutlicher Substanzverlust.', ex: 'Stadium I: noch kein Substanzverlust (Altfrage 2019).' },
  { id: 'k15-t05', sec: '15.1', p: 47, type: 'tf', a: true, q: '„Brutkapseln“ (Chondrozytenproliferation) kennzeichnen Stadium II nach Otte.', ex: 'Stadium II: Fissuren bis in knochennahe Schichten, Chondrozytenproliferation („Brutkapseln“).' },
  { id: 'k15-t06', sec: '15.1', p: 47, type: 'tf', a: false, q: 'Das Röntgenbild ist bei der Arthrose früh aussagekräftig.', ex: 'Röntgen erst spät aussagekräftig (Altfrage 2022, 2024).' },
  { id: 'k15-t07', sec: '15.1', p: 47, type: 'tf', a: true, q: 'Geröllzysten sind subchondrale Pseudozysten im Spätstadium der Arthrose.', ex: 'Stadium IV: Knochenglatze, Sklerose, Osteophyten, Geröllzysten (subchondrale Pseudozysten).' },
  { id: 'k15-t08', sec: '15.2', p: 47, type: 'tf', a: false, q: 'Typ I der periprothetischen Membran entspricht dem Infektionstyp.', ex: 'Typ I = Abrieb, Typ II = Infekt (Altfrage).' },
  { id: 'k15-t11', sec: '15.2', p: 47, type: 'tf', a: false, q: 'Infektiöse Prothesenlockerungen treten typischerweise erst nach 10–15 Jahren auf.', ex: 'Typ II (infektiös): mittlere Standzeit ~2,5 J.' },
  { id: 'k15-t13', sec: '15.3', p: 48, type: 'tf', a: false, q: 'Bei der rheumatoiden Arthritis sind Männer häufiger betroffen.', ex: 'Frauen : Männer ≈ 3 : 1 (Altfrage 2008, 2010).' },
  { id: 'k15-t15', sec: '15.3', p: 48, type: 'tf', a: true, q: 'Der Pannus der RA ist Granulationsgewebe, das Knorpel und Knochen zerstört.', ex: 'Pannus: Granulationsgewebe zerstört Knorpel/Knochen (Erosionen).' },
  { id: 'k15-t16', sec: '15.3', p: 48, type: 'tf', a: false, q: 'Rheumatoide Granulome (Rheumaknoten) sind bei der RA kein typischer Befund.', ex: 'Rheumaknoten = rheumatoide Granulome gehören laut KPK zur RA (Altfrage 2022).' },
  { id: 'k15-t19', sec: '15.3', p: 48, type: 'tf', a: true, q: 'Der M. Bechterew ist mit HLA-B27 assoziiert.', ex: 'Spondyloarthritiden (M. Bechterew, HLA-B27).' },
  { id: 'k15-t21', sec: '15.3', p: 48, type: 'tf', a: false, q: 'Uratkristalle sind positiv doppelbrechend.', ex: 'Urat: nadelförmig, negativ doppelbrechend. Kalziumpyrophosphat: rhomboid, schwach positiv.' },
  { id: 'k15-t22', sec: '15.3', p: 48, type: 'tf', a: true, q: 'Für den Nachweis von Uratkristallen wird in Alkohol fixiert, weil sie sich in Formalin lösen.', ex: 'Mononatriumurat-Kristalle: Fixierung in Alkohol, in Formalin lösen sie sich.' },
  { id: 'k15-t24', sec: '15.3', p: 48, type: 'tf', a: true, q: 'Die Chondrokalzinose ist mit Hämochromatose und Hyperparathyreoidismus assoziiert.', ex: 'Assoziiert mit Hämochromatose, HPT, Hypomagnesiämie.' },
  { id: 'k15-t25', sec: '15.3', p: 48, type: 'tf', a: false, q: 'Der Hyperparathyreoidismus ist eine Kristallarthropathie.', ex: 'Der HPT selbst ist keine Kristallarthropathie (Altfrage 2018, 2020, 2023).' },
  { id: 'k15-t27', sec: '15.4', p: 48, type: 'tf', a: false, q: 'Die endogene (hämatogene) Osteomyelitis ist die häufigste Form.', ex: 'Exogene OM ~70 %, endogene ~30 % (Altfrage 2023).' },
  { id: 'k15-t29', sec: '15.4', p: 49, type: 'tf', a: false, q: 'Beim Kind liegt die hämatogene Osteomyelitis typischerweise in der Diaphyse.', ex: 'Kind: Metaphyse (Wachstumsfuge als Barriere). Diaphyse → Erwachsener.' },
  { id: 'k15-t30', sec: '15.4', p: 49, type: 'tf', a: false, q: 'Die Totenlade ist der tote Knochen bei chronischer Osteomyelitis.', ex: 'Toter Knochen = Sequester; Totenlade = reaktive Knochenneubildung.' },
  { id: 'k15-t31', sec: '15.4', p: 49, type: 'tf', a: false, q: 'Eine Markraumfibrose mit lymphozytärem Infiltrat ist typisch für die akute Osteomyelitis.', ex: 'Das ist die chronische OM (Altfrage 2022).' },
  { id: 'k15-t34', sec: '15.5', p: 49, type: 'tf', a: true, q: 'Bei der Osteoporose ist die Mineralisation normal.', ex: 'Osteoporose: verminderte Knochenmasse bei normaler Mineralisation.' },
  { id: 'k15-t36', sec: '15.5', p: 49, type: 'tf', a: true, q: 'Looser-Umbauzonen sind typisch für die Osteomalazie.', ex: 'Osteomalazie: breite Osteoidsäume, Looser-Umbauzonen.' },
  { id: 'k15-t37', sec: '15.5', p: 49, type: 'tf', a: false, q: 'Die Tuberkulose führt zu einer generalisierten Osteoporose.', ex: 'Tbc → lokalisierte, perifokale Osteoporose (Altfrage 2016, 2021).' },
  { id: 'k15-t40', sec: '15.5', p: 49, type: 'tf', a: true, q: 'Der M. Paget erhöht das Osteosarkomrisiko.', ex: 'M. Paget: Osteosarkomrisiko; das Osteosarkom des Älteren entsteht sekundär.' },
  { id: 'k15-t44', sec: '15.5', p: 49, type: 'tf', a: false, q: 'Bei der primären Frakturheilung bildet sich ein Kallus.', ex: 'Primäre Heilung: Osteone überbrücken direkt, ohne Kallus (Altfrage 2022, 2025).' },
  { id: 'k15-t47', sec: '15.6', p: 50, type: 'tf', a: false, q: 'Primäre Knochentumoren sind häufiger als Knochenmetastasen.', ex: 'Metastasen >> primäre Knochentumoren (Altfrage 2022, 2024, 2025).' },
  { id: 'k15-t49', sec: '15.6', p: 50, type: 'tf', a: true, q: 'Das Osteochondrom ist der häufigste benigne Knochentumor.', ex: 'Osteochondrom (kartilaginäre Exostose): häufigster benigner Knochentumor, < 20 J.' },
  { id: 'k15-t54', sec: '15.6', p: 50, type: 'tf', a: false, q: 'Das Osteosarkom hat seinen Altersgipfel bei ca. 39 Jahren.', ex: 'Osteosarkom: 2. Lebensdekade (Altfrage 2008, 2016).' },
  { id: 'k15-t56', sec: '15.6', p: 50, type: 'tf', a: true, q: 'Das Ewing-Sarkom zeigt im Röntgen eine zwiebelschalenartige Periostreaktion.', ex: 'Ewing-Sarkom: zwiebelschalenartige Periostreaktion, ausgedehnter Weichteilanteil.' },
  { id: 'k15-t57', sec: '15.6', p: 50, type: 'tf', a: true, q: 'Das Osteoidosteom verursacht nächtliche Schmerzen, die auf ASS/NSAR ansprechen.', ex: 'Osteoidosteom: junge Patienten, Nidus < 1,5 cm, nächtlicher Schmerz, Ansprechen auf ASS/NSAR.' },
  { id: 'k15-t58', sec: '15.6', p: 50, type: 'tf', a: false, q: 'Der Riesenzelltumor des Knochens liegt typischerweise in der Diaphyse.', ex: 'Riesenzelltumor: 20–40 J, Epiphyse (Knie, dist. Radius).' },
  { id: 'k15-t60', sec: '15.6', p: 50, type: 'tf', a: false, q: 'Knochenmetastasen des Nierenzellkarzinoms sind typischerweise osteoblastisch.', ex: 'Osteolytisch: Niere, Schilddrüse, Lunge, Mamma, Myelom.' },
  { id: 'k15-t65', sec: '15.7', p: 51, type: 'tf', a: true, q: 'Das alveoläre Rhabdomyosarkom hat eine schlechtere Prognose als das embryonale.', ex: 'Embryonal (häufigster) vs. alveolär (PAX3/7-FOXO1, schlechter).' },
  { id: 'k15-t69', sec: '15.7', p: 51, type: 'tf', a: true, q: 'Intraabdominale Desmoide treten gehäuft bei FAP/Gardner-Syndrom auf.', ex: 'Desmoid intraabdominal bei FAP/Gardner; Bauchdeckenfaszie v. a. bei Frauen post partum.' }
]);
