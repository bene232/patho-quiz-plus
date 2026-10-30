/* Kapitel 11 – Harnblase, Prostata, Hoden (PDF S. 36–38) */
PQ.registerChapter(11, [

  /* ---------- 11.1 Harnblase: Entzündung ---------- */
  {
    id: 'k11-01', sec: '11.1', p: 36, type: 'kprim', alt: '2012, 2015',
    q: 'Welche der folgenden sind Formen bzw. Ursachen einer Urozystitis?',
    st: [
      ['Bilharziose', true],
      ['Bestrahlung', true],
      ['Cyclophosphamid', true],
      ['Tuberkulose', true]
    ],
    ex: 'Alle vier treffen zu (ebenso die Urocystitis follicularis). Bilharziose: Schistosoma-Eier in der Wand; Cyclophosphamid/Ifosfamid → Acrolein → hämorrhagische Zystitis; Strahlenzystitis akut/chronisch.'
  },
  {
    id: 'k11-02', sec: '11.1', p: 36, type: 'match',
    q: 'Ordne die Zystitisform ihrem Kennzeichen zu.',
    pairs: [
      ['Adenovirus-Zystitis', 'Hämorrhagisch, bei Kindern'],
      ['Bilharziose', 'Schistosoma-Eier in der Wand, RF für Plattenepithel-Ca'],
      ['BCG-Zystitis', 'Nicht verkäsende Granulome'],
      ['Malakoplakie', 'Michaelis-Gutmann-Körperchen, gelbe Plaques'],
      ['Interstitielle (Hunner-)Zystitis', 'Ältere Frauen, Mastzellen']
    ],
    ex: 'Chronische Urozystitis außerdem: follicularis (Lymphfollikel), cystica/glandularis (von-Brunn-Nester), Plattenepithel-/glanduläre Metaplasie.'
  },
  {
    id: 'k11-03', sec: '11.1', p: 36, type: 'single',
    q: 'Welcher Metabolit verursacht die hämorrhagische Zystitis unter Cyclophosphamid?',
    opts: ['Acrolein', 'Mesna', 'Phenacetin'],
    a: 0,
    ex: 'Cyclophosphamid/Ifosfamid: Metabolit Acrolein → hämorrhagische Zystitis; Prophylaxe mit Mesna; außerdem RF für das Blasenkarzinom. Phenacetin → Analgetikanephropathie.'
  },
  {
    id: 'k11-04', sec: '11.1', p: 36, type: 'single',
    q: 'Welcher Erreger verursacht die bakterielle Zystitis am häufigsten?',
    opts: ['E. coli', 'Schistosoma haematobium', 'Adenovirus', 'Candida'],
    a: 0,
    ex: 'Bakteriell: gramnegative Koliforme, v. a. E. coli (Frauen 20–40 J; Dysurie). Schistosoma = Parasit (Bilharziose), Adenovirus = viral, Candida = Pilz.'
  },
  {
    id: 'k11-05', sec: '11.1', p: 36, type: 'single',
    q: 'Welche Organ-Tuberkulose ist die häufigste isolierte Organ-Tbc?',
    opts: ['Urogenital-Tbc', 'Spondylitis tuberculosa', 'Tuberkulöse Meningitis'],
    a: 0,
    ex: 'Urogenital-Tbc = häufigste isolierte Organ-Tbc.'
  },

  /* ---------- 11.2 Urotheltumoren ---------- */
  {
    id: 'k11-06', sec: '11.2', p: 36, type: 'single', alt: '2015, Fragensammlung',
    q: 'Urothelkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Papilläre, nicht invasive Urothelkarzinome werden als pTis bezeichnet.',
      'Cyclophosphamid ist ein Risikofaktor.',
      'Das Durchschnittsalter liegt bei ca. 60 Jahren.',
      'G2 und G3 werden als high grade zusammengefasst.',
      'Raucher haben ein ca. 4-fach erhöhtes Risiko.'
    ],
    a: 0,
    ex: 'Papillär, nicht invasiv = pTa. pTis = flaches Carcinoma in situ („flat tumour“).'
  },
  {
    id: 'k11-07', sec: '11.2', p: 36, type: 'single', alt: '2021',
    q: 'Urothelkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Flache, nicht papilläre Carcinomata in situ werden als pTa bezeichnet.',
      'Invasiv-papilläre und invasiv-solide Karzinome sind genetisch verschieden.',
      'Die Bilharziose ist ein Risikofaktor.',
      'Urothelkarzinome treten multizentrisch, synchron und metachron auf.',
      'Ca. 90 % der Blasentumoren sind Urothelkarzinome.'
    ],
    a: 0,
    ex: 'Flaches CIS = pTis. Zwei Entstehungswege: papillär, low grade, FGFR3 vs. flach (CIS) → solide invasiv, high grade, p53/RB.'
  },
  {
    id: 'k11-08', sec: '11.2', p: 36, type: 'kprim', alt: '2020',
    q: 'Urologische Neoplasien – welche Aussagen treffen zu?',
    st: [
      ['Nicht invasive Urothelkarzinome können papillär oder flach wachsen.', true],
      ['Urothelpapillome zeigen keine Atypien und kein invasives Wachstum.', true],
      ['Urothelkarzinome treten v. a. bei Rauchern auf.', true],
      ['Nicht invasive Urothelkarzinome werden als pTa bzw. pTis klassifiziert.', true]
    ],
    ex: 'Alle vier treffen zu. pTa = nicht invasiv papillär, pTis = Carcinoma in situ.'
  },
  {
    id: 'k11-09', sec: '11.2', p: 36, type: 'match',
    q: 'Ordne das T-Stadium des Harnblasenkarzinoms seiner Ausdehnung zu.',
    pairs: [
      ['pTa', 'Nicht invasiv papillär'],
      ['pTis', 'Carcinoma in situ („flat tumour“)'],
      ['pT1', 'Lamina propria'],
      ['pT2', 'Muscularis propria'],
      ['pT3', 'Perivesikales Fett']
    ],
    ex: 'pT2a innere, b äußere Hälfte der Muscularis propria · pT4a Prostata/Uterus/Vagina, pT4b Becken-/Bauchwand. Ab pT2 (muskelinvasiv) → radikale Zystektomie.'
  },
  {
    id: 'k11-10', sec: '11.2', p: 36, type: 'match',
    q: 'Ordne die urotheliale Läsion ihrem Kennzeichen zu.',
    pairs: [
      ['Urothelpapillom', 'Benigne, keine Atypien'],
      ['PUNLMP', '> 7 Zelllagen, keine Atypien, Progression < 5 %'],
      ['Low-grade-Urothelkarzinom (nicht invasiv)', 'Geringe Atypien, Rezidivrate 50–70 %'],
      ['Urotheliales Carcinoma in situ', 'Flach, hochgradige Atypien bis in die oberen Lagen'],
      ['Urotheldysplasie', 'Atypien nur bis in mittlere Lagen']
    ],
    ex: 'High-grade-Urothelkarzinom (≈ G2–G3): deutliche Atypien, Mitosen in allen Lagen, hohes Progressionsrisiko. CIS: Basalmembran intakt, p53, ~50 % invasiv innerhalb von 5 J.'
  },
  {
    id: 'k11-11', sec: '11.2', p: 36, type: 'kprim',
    q: 'Urothelkarzinom – welche Aussagen treffen zu?',
    st: [
      ['Leitsymptom ist die schmerzlose Makrohämaturie.', true],
      ['Urothelkarzinome treten typischerweise solitär und ohne Rezidive auf.', false],
      ['Der papilläre Entstehungsweg ist mit p53/RB-Veränderungen assoziiert.', false],
      ['Das Carcinoma in situ wird selten invasiv.', false]
    ],
    ex: 'Charakteristisch ist die Multizentrizität („field cancerization“) mit hoher Rezidivrate. Papillärer Weg: FGFR3; flacher Weg (CIS): p53/RB. Das CIS wird in ~50 % innerhalb von 5 J invasiv.'
  },
  {
    id: 'k11-12', sec: '11.2', p: 36, type: 'single',
    q: 'Welche berufliche Noxe ist ein Risikofaktor des Harnblasenkarzinoms?',
    opts: ['Aromatische Amine (β-Naphthylamin, Benzidin)', 'Asbest', 'Vinylchlorid', 'Quarzstaub'],
    a: 0,
    ex: 'Berufliche aromatische Amine (Anilinfarben, β-Naphthylamin, Benzidin; Gummi-, Farbstoffindustrie). Asbest → Lunge/Mesotheliom; Vinylchlorid → Angiosarkom der Leber; Quarz → Silikose.'
  },
  {
    id: 'k11-13', sec: '11.2', p: 36, type: 'single',
    q: 'Welcher Harnblasentumor ist typisch für die Bilharziose?',
    opts: ['Plattenepithelkarzinom', 'Low-grade-Urothelkarzinom', 'Urothelpapillom'],
    a: 0,
    ex: 'Bilharziose (Schistosoma haematobium) ist ein RF für das Plattenepithelkarzinom der Blase.'
  },
  {
    id: 'k11-14', sec: '11.2', p: 36, type: 'single',
    q: 'Wie viele urotheliale Carcinomata in situ werden innerhalb von 5 Jahren invasiv?',
    opts: ['~50 %', '< 5 %', '~100 %'],
    a: 0,
    ex: 'CIS: ~50 % invasiv innerhalb von 5 J. Eine Progression < 5 % haben PUNLMP und das nicht invasive Low-grade-Karzinom.'
  },
  {
    id: 'k11-15', sec: '11.2', p: 36, type: 'single',
    q: 'Was ist beim muskelinvasiven Harnblasenkarzinom (≥ pT2) die Standardtherapie?',
    opts: ['Radikale Zystektomie', 'Alleinige TUR-B', 'Alleinige intravesikale BCG-Therapie'],
    a: 0,
    ex: 'Nicht muskelinvasiv: TUR-B (± Nachresektion), adjuvant intravesikal BCG/Mitomycin. Muskelinvasiv: radikale Zystektomie (5-JÜR 50–60 %, N+ 34–43 %; neoadjuvant Cisplatin +5–7 %).'
  },
  {
    id: 'k11-16', sec: '11.2', p: 36, type: 'single',
    q: 'Was kennzeichnet das invertierte Papillom der Harnblase?',
    opts: [
      'Urothel wächst in die Lamina propria ein, die Oberfläche ist glatt',
      'Hochgradige Atypien bis in die oberen Lagen',
      'Infiltration der Muscularis propria'
    ],
    a: 0,
    ex: 'Urothelpapillom: benigne, keine Atypien, kein invasives Wachstum, < 1 %, eher junge Patienten; Sonderform invertiertes Papillom. Hochgradige Atypien → CIS; Muscularis → pT2.'
  },
  {
    id: 'k11-17', sec: '11.2', p: 36, type: 'single',
    q: 'Was ist charakteristisch für Urothelkarzinome?',
    opts: [
      'Multizentrizität mit hoher Rezidivrate („field cancerization“)',
      'Solitäres Auftreten ohne Rezidive',
      'Auftreten fast ausschließlich bei Frauen unter 40 Jahren'
    ],
    a: 0,
    ex: 'Urothelkarzinom: multizentrisch synchron und metachron; Männer : Frauen ≈ 3 : 1; Durchschnittsalter ~60 J (selten < 40).'
  },

  /* ---------- 11.3 Prostata: BPH & Prostatitis ---------- */
  {
    id: 'k11-18', sec: '11.3', p: 37, type: 'single', alt: '2015, 2018, 2020, 2022',
    q: 'Was ist KEINE typische Folge bzw. Komplikation der BPH?',
    opts: ['Prostatakarzinom', 'Detrusorhypertrophie („Balkenblase“)', 'Restharn', 'Akute Pyelonephritis', 'Hydronephrose'],
    a: 0,
    ex: 'Das Prostatakarzinom entsteht in einer anderen Zone (peripher) und ist keine Folge der BPH; nach TUR kann trotzdem ein Karzinom auftreten.'
  },
  {
    id: 'k11-19', sec: '11.3', p: 37, type: 'single', alt: '2012',
    q: 'Was ist KEINE Folge der BPH?',
    opts: ['Harnblasenkarzinom', 'Harnverhalt', 'Blasensteine', 'Erektile Dysfunktion', 'Niereninsuffizienz'],
    a: 0,
    ex: 'BPH-Folgen: Restharn, Balkenblase, Pseudodivertikel, Harnverhalt, Blasensteine, Harnstau/Hydronephrose, HWI/Pyelonephritis, Niereninsuffizienz, PSA ↑, (erektile Dysfunktion). Kein Harnblasenkarzinom.'
  },
  {
    id: 'k11-20', sec: '11.3', p: 37, type: 'single', alt: '2023',
    q: 'Was ist KEINE Folge der BPH?',
    opts: ['Blasenekstrophie', 'Pseudodivertikel der Harnblase', 'PSA-Erhöhung', 'Harnstau'],
    a: 0,
    ex: 'Die Blasenekstrophie ist angeboren und keine Folge der BPH.'
  },
  {
    id: 'k11-21', sec: '11.3', p: 37, type: 'single',
    q: 'In welcher Zone der Prostata entsteht die BPH?',
    opts: ['Transitionalzone (periurethral)', 'Periphere Zone', 'Zentrale Zone'],
    a: 0,
    ex: 'Zonen: periphere Zone (70 %, dorsal, Karzinom), Transitionalzone (periurethral, BPH), zentrale Zone.'
  },
  {
    id: 'k11-22', sec: '11.3', p: 37, type: 'kprim',
    q: 'Benigne Prostatahyperplasie – welche Aussagen treffen zu?',
    st: [
      ['Es proliferieren knotig Drüsen und fibromuskuläres Stroma.', true],
      ['Typisch ist eine fehlende Basalzellschicht.', false],
      ['Sie entsteht in der peripheren Zone.', false],
      ['Nach einer TUR kann kein Prostatakarzinom mehr auftreten.', false]
    ],
    ex: 'BPH: Transitionalzone, altersabhängig (DHT), Volumenzunahme ~1,6 %/J. Die fehlende Basalzellschicht kennzeichnet das Karzinom. Nach TUR kann trotzdem ein Karzinom auftreten (periphere Zone).'
  },
  {
    id: 'k11-23', sec: '11.3', p: 37, type: 'single',
    q: 'Welcher Befund passt zur akuten bakteriellen Prostatitis?',
    opts: [
      'Granulozyten, Mikroabszesse, vergrößerte ödematöse Drüse',
      'Knotige Proliferation in der Transitionalzone',
      'Kleine dicht stehende Drüsen ohne Basalzellschicht'
    ],
    a: 0,
    ex: 'Prostatitis: akut bakteriell, chronisch, granulomatös (nach Sekretstau, post-TUR/-Biopsie, BCG/Tbc, bei Wegener/Churg-Strauss). Knotige Proliferation → BPH; fehlende Basalzellen → Karzinom.'
  },
  {
    id: 'k11-24', sec: '11.3', p: 37, type: 'single',
    q: 'Welche Aussage zum PSA trifft zu?',
    opts: [
      'Es kann auch bei BPH und Prostatitis erhöht sein.',
      'Es ist spezifisch für das Prostatakarzinom.',
      'Es wird vom Urothel der Harnblase gebildet.'
    ],
    a: 0,
    ex: 'PSA = Protease zur Spermaverflüssigung; erhöht bei Karzinom, BPH, Prostatitis und nach Manipulation.'
  },

  /* ---------- 11.4 Prostatakarzinom ---------- */
  {
    id: 'k11-25', sec: '11.4', p: 37, type: 'single', alt: '2008, 2024',
    q: 'Prostatakarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Der Gleason-Score richtet sich überwiegend nach zytologischen Kriterien.',
      'Das okkulte Karzinom äußert sich zuerst durch Metastasen.',
      'Das PSA kann auch bei Prostatitis erhöht sein.',
      'Das latente Karzinom wird erst autoptisch entdeckt.',
      'In der Nachbarschaft finden sich häufig intraepitheliale Vorstufen.'
    ],
    a: 0,
    ex: 'Gleason-Score: rein strukturelles Grading nach Drüsenmuster/Wachstum – keine Zytologie, kein Kerngrading.'
  },
  {
    id: 'k11-26', sec: '11.4', p: 37, type: 'single', alt: '2021',
    q: 'Prostatakarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Für den Gleason-Score ist in erster Linie die Zytologie (Kerngröße und -form) von Bedeutung.',
      'Der Altersgipfel liegt bei ca. 70–75 Jahren.',
      'Weltweit gehört es zu den fünf häufigsten Karzinomen.',
      'Der Gleason-Score besteht aus zwei Zahlen und deren Summe.'
    ],
    a: 0,
    ex: 'Der Gleason-Score bewertet nur das Wachstumsmuster; die Zytologie spielt keine Rolle.'
  },
  {
    id: 'k11-27', sec: '11.4', p: 37, type: 'single', alt: '2012, 2013A',
    q: 'Prostatakarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Prostatakarzinome entwickeln sich typischerweise in den inneren Drüsenanteilen.',
      'Die lymphogene Metastasierung erfolgt primär in pelvine Lymphknoten.',
      'Vorläufer ist die HG-PIN.',
      'Bei Männern über 75 Jahren findet man bei jedem 2. ein latentes Karzinom.'
    ],
    a: 0,
    ex: 'Prostatakarzinom: periphere Zone (dorsal, tastbar bei der DRU), nicht in den inneren Drüsenanteilen.'
  },
  {
    id: 'k11-28', sec: '11.4', p: 37, type: 'single', alt: '2010',
    q: 'Prostatakarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Das Kerngrading ist auch nach Hormon- oder Strahlentherapie gut anwendbar.',
      'Der Altersgipfel liegt bei ca. 75 Jahren.',
      'Weltweit ist es etwa das vierthäufigste Karzinom.',
      'Das Kerngrading spielt beim Gleason-Score keine Rolle.',
      'Der Gleason-Score beschreibt das vorherrschende Wachstumsmuster.'
    ],
    a: 0,
    ex: 'Nach Hormon-/Strahlentherapie ist das Kerngrading wegen regressiver Veränderungen nicht mehr anwendbar.'
  },
  {
    id: 'k11-29', sec: '11.4', p: '37–38', type: 'single', alt: '2019',
    q: 'Prostatastanzbiopsie – welche Aussage trifft NICHT zu?',
    opts: [
      'Laut Leitlinie werden 4 Biopsien (2 pro Lappen) entnommen.',
      'Eine Indikation ist eine suspekte DRU.',
      'Die Biopsie erfolgt ultraschallgesteuert.',
      'Eine Indikation ist ein kontrolliert erhöhter PSA-Wert > 4 ng/ml.',
      'Bei einer Lebenserwartung < 5 Jahren kann man darauf verzichten.'
    ],
    a: 0,
    ex: 'Stanzbiopsie: 10–12 Zylinder, transrektal-ultraschallgesteuert (± MRT-Fusion).'
  },
  {
    id: 'k11-30', sec: '11.4', p: '37–38', type: 'kprim',
    q: 'Prostatakarzinom – welche Aussagen treffen zu?',
    st: [
      ['Die inneren Drüsenanteile sind meist nicht betroffen, oft nur die äußeren.', true],
      ['Es manifestiert sich oftmals erst durch Metastasen.', true],
      ['Das PSA kann auch bei Prostatitis erhöht sein.', true],
      ['Der Gleason-Score beruht auf der Kerngröße.', false]
    ],
    ex: 'Die ersten drei Aussagen stammen aus der Fragensammlung (alle ✓). Der Gleason-Score ist rein strukturell (Drüsenmuster), ohne Kerngrading.'
  },
  {
    id: 'k11-31', sec: '11.4', p: 38, type: 'single', alt: '2008, 2010, 2019',
    q: 'Welcher Primärtumor verursacht typischerweise osteoblastische Metastasen?',
    opts: ['Prostatakarzinom', 'Mammakarzinom', 'Nierenzellkarzinom', 'Bronchialkarzinom', 'Schilddrüsenkarzinom'],
    a: 0,
    ex: 'Prostata-Ca: hämatogen in den Knochen (~85 %, osteoblastisch; Wirbelsäule, Becken). Die übrigen wurden als „typisch osteoblastisch“ falsch gewertet.'
  },
  {
    id: 'k11-32', sec: '11.4', p: 37, type: 'match',
    q: 'Ordne die Manifestationsform des Prostatakarzinoms ihrer Definition zu.',
    pairs: [
      ['Inzident', 'Zufallsbefund im TUR-Material bei BPH'],
      ['Manifest', 'Positiver Tastbefund/Sono, bioptisch gesichert'],
      ['Latent', 'Erst autoptisch entdeckt'],
      ['Okkult', 'Zuerst Metastase, Primärtumor erst sekundär gefunden']
    ],
    ex: 'Latent: > 45 J bei jedem 3., > 75 J bei jedem 2. Mann. Okkult: IHC PSA/PAP/AR an der Metastase.'
  },
  {
    id: 'k11-33', sec: '11.4', p: 37, type: 'match',
    q: 'Ordne das Gleason-Muster seinem Wachstum zu.',
    pairs: [
      ['Muster 3', 'Einzelne infiltrierende Drüsen'],
      ['Muster 4', 'Kribriform bzw. fusioniert'],
      ['Muster 5', 'Solide, Einzelzellen, Komedonekrose']
    ],
    ex: 'Muster 3 ist das häufigste Muster. Score in Biopsien praktisch ≥ 6.'
  },
  {
    id: 'k11-34', sec: '11.4', p: 37, type: 'match',
    q: 'Ordne den Gleason-Score der ISUP-Gradgruppe zu.',
    pairs: [
      ['≤ 6', 'ISUP 1'],
      ['3 + 4', 'ISUP 2'],
      ['4 + 3', 'ISUP 3'],
      ['8', 'ISUP 4'],
      ['9–10', 'ISUP 5']
    ],
    ex: 'ISUP-Gradgruppen: 1 (≤ 6), 2 (3 + 4), 3 (4 + 3), 4 (8), 5 (9–10).'
  },
  {
    id: 'k11-35', sec: '11.4', p: 37, type: 'single',
    q: 'Welcher histologische Befund spricht für ein Prostatakarzinom?',
    opts: [
      'Fehlende Basalzellschicht (CK5/14, p63 negativ), AMACR-positiv',
      'Erhaltene, p63-positive Basalzellschicht',
      'Knotige Proliferation von fibromuskulärem Stroma'
    ],
    a: 0,
    ex: 'Azinäres Adenokarzinom: kleine dicht stehende Drüsen, fehlende Basalzellschicht, prominente Nukleolen, intraluminales Kristalloid, Perineuralinvasion; AMACR (P504S)+, PSA+, NKX3.1, AR. Knotige Stromaproliferation → BPH.'
  },
  {
    id: 'k11-36', sec: '11.4', p: 37, type: 'single',
    q: 'Wie wird der Gleason-Score in der Stanzbiopsie gebildet?',
    opts: [
      'Häufigstes + höchstes Muster',
      'Häufigstes + zweithäufigstes Muster',
      'Nur aus dem höchsten Muster'
    ],
    a: 0,
    ex: 'Biopsie: häufigstes + höchstes Muster; Resektat: häufigstes + zweithäufigstes Muster. Der Score besteht immer aus 2 Zahlen und deren Summe.'
  },
  {
    id: 'k11-37', sec: '11.4', p: 37, type: 'kprim',
    q: 'Prostatakarzinom – welche Aussagen treffen zu?',
    st: [
      ['Es ist das häufigste Malignom des Mannes in Deutschland.', true],
      ['Knochenmetastasen sind typischerweise osteolytisch.', false],
      ['Die lymphogene Metastasierung erfolgt zuerst in paraaortale Lymphknoten.', false],
      ['Vor dem 50. Lebensjahr ist es extrem selten.', true]
    ],
    ex: 'Metastasierung: lymphogen zuerst pelvin (obturatorisch, iliakal), dann paraaortal/inguinal; hämatogen Knochen (~85 %, osteoblastisch).'
  },
  {
    id: 'k11-38', sec: '11.4', p: 37, type: 'match',
    q: 'Ordne das T-Stadium des Prostatakarzinoms zu.',
    pairs: [
      ['T1', 'Klinisch nicht erkennbar'],
      ['T2', 'Organbegrenzt'],
      ['T3', 'Kapselüberschreitung bzw. Samenblasen'],
      ['T4', 'Nachbarorgane']
    ],
    ex: 'T1a ≤ 5 %, T1b > 5 % des TUR-Resektats, T1c Nadelbiopsie wegen PSA · T2a ≤ ½ Lappen, b > ½ Lappen, c beide Lappen · T3a extraprostatisch, b Samenblasen.'
  },
  {
    id: 'k11-39', sec: '11.4', p: 37, type: 'single',
    q: 'Ab welchem PSA-Wert gilt der Befund als suspekt?',
    opts: ['> 4 ng/ml', '> 0,4 ng/ml', '> 40 ng/ml'],
    a: 0,
    ex: 'PSA > 4 ng/ml suspekt; erhöht auch bei BPH, Prostatitis, nach Manipulation.'
  },

  /* ---------- 11.5 Hodentumoren ---------- */
  {
    id: 'k11-40', sec: '11.5', p: 38, type: 'single', alt: '2018, 2020, 2023',
    q: 'Histologie: große helle runde Zellen mit großen Kernen, dazwischen mehrkernige β-HCG-positive Zellen. Welche Diagnose passt?',
    opts: ['Seminom mit synzytiotrophoblastären Riesenzellen', 'Chorionkarzinom', 'Dottersacktumor', 'Embryonales Karzinom'],
    a: 0,
    ex: 'Seminom: Ballen großer, heller (glykogenreicher) runder Zellen mit großen Kernen; gelegentlich synzytiotrophoblastäre Riesenzellen (β-HCG+) → β-HCG leicht ↑.'
  },
  {
    id: 'k11-41', sec: '11.5', p: 38, type: 'single', alt: '2008',
    q: 'Hodentumoren – welche Aussage ist FALSCH?',
    opts: [
      'Mischtumoren sind selten (< 10 %).',
      'Das Seminom ist die häufigste Entität.',
      'Die D2-40-Immunhistochemie hilft bei der Erkennung von Tumorvorstufen.',
      'Die Bestimmung von β-HCG ist bei bestimmten Typen sinnvoll.',
      'Eine Biopsie des kontralateralen Hodens ist zu empfehlen.'
    ],
    a: 0,
    ex: 'Mischtumoren sind häufig (~15–40 %). Die kontralaterale Biopsie gilt laut KPK als richtig (fakultativ, v. a. < 40 J, Volumen < 12 ml).'
  },
  {
    id: 'k11-42', sec: '11.5', p: 38, type: 'kprim', alt: '2010',
    q: 'Hodentumoren – welche Aussagen treffen zu?',
    st: [
      ['Das Seminom ist die häufigste Entität.', true],
      ['Der Häufigkeitsgipfel liegt zwischen dem 20. und 40. Lebensjahr.', true],
      ['AFP ist insbesondere beim Seminom erhöht.', false],
      ['Die CK20-Immunhistochemie hilft bei der Erkennung von Vorstufen.', false]
    ],
    ex: 'Beim reinen Seminom ist das AFP immer normal. Die GCNIS ist PLAP-, OCT3/4-, D2-40- und CD117-positiv – nicht CK20.'
  },
  {
    id: 'k11-43', sec: '11.5', p: 38, type: 'kprim', alt: '2013B, 2015',
    q: 'Hodentumoren – welche Aussagen treffen zu?',
    st: [
      ['Etwa die Hälfte sind reine Seminome.', true],
      ['AFP dient insbesondere beim Chorionkarzinom der Verlaufskontrolle.', false],
      ['Vorläufer ist die IGCNU/TIN (heute GCNIS).', true],
      ['Ein Gefäßeinbruch hat Bedeutung für das pT-Stadium.', true]
    ],
    ex: 'Beim Chorionkarzinom dient β-HCG der Verlaufskontrolle; AFP ist dort nie erhöht (2024: „Chorion-Ca gut über AFP bestimmbar“ ✗).'
  },
  {
    id: 'k11-44', sec: '11.5', p: 38, type: 'single', alt: '2024',
    q: 'Was ist KEIN ovarieller Keimzelltumor?',
    opts: ['Seminom', 'Chorionkarzinom', 'Dottersacktumor', 'Teratom'],
    a: 0,
    ex: 'Das ovarielle Pendant des Seminoms heißt Dysgerminom. Chorionkarzinom, Dottersacktumor und Teratom kommen im Ovar vor.'
  },
  {
    id: 'k11-45', sec: '11.5', p: 38, type: 'match',
    q: 'Ordne den Hodentumor seinem Tumormarker zu.',
    pairs: [
      ['Dottersacktumor', 'AFP ↑↑'],
      ['Chorionkarzinom', 'β-HCG ↑↑'],
      ['Reines Seminom', 'AFP immer normal, PLAP'],
      ['Stromatumoren (Leydig, Sertoli)', 'Marker negativ']
    ],
    ex: 'Tumormarker: AFP → Dottersacktumor (+ EC), nie bei reinem Seminom/Chorion-Ca · β-HCG → Chorion-Ca, STGC · LDH (Tumorlast) · PLAP; Abnahme vor der Orchiektomie.'
  },
  {
    id: 'k11-46', sec: '11.5', p: 38, type: 'match',
    q: 'Ordne den Keimzelltumor seinem histologischen Kennzeichen zu.',
    pairs: [
      ['Seminom', 'Ballen großer heller Zellen, Septen mit Lymphozyten'],
      ['Embryonales Karzinom', 'Große pleomorphe Zellen, Nekrosen, CD30+'],
      ['Dottersacktumor', 'Schiller-Duval-Körper, hyaline Globuli'],
      ['Chorionkarzinom', 'Zyto- + Synzytiotrophoblast, Blutungen'],
      ['Teratom', 'Gewebe aller 3 Keimblätter']
    ],
    ex: 'Das embryonale Karzinom ist das häufigste Nicht-Seminom (~15 %) und hat keine Lymphozyten. Das postpubertäre Teratom des Mannes ist immer maligne einzustufen.'
  },
  {
    id: 'k11-47', sec: '11.5', p: 38, type: 'kprim',
    q: 'Hodentumoren – welche Aussagen treffen zu?',
    st: [
      ['Sie sind die häufigsten malignen Tumoren des Mannes zwischen 15 und 35 Jahren.', true],
      ['Ein Maldescensus testis ist ein Risikofaktor.', true],
      ['Das postpubertäre Teratom des Mannes ist immer benigne.', false],
      ['Der spermatozytische Tumor entsteht aus einer GCNIS.', false]
    ],
    ex: 'RF: Maldescensus (bis 8×), kontralateraler Hodentumor (bis 30×), GCNIS, Infertilität, Familie, Klinefelter, Leistenhernie. GCNIS = Vorläufer aller Keimzelltumoren außer dem spermatozytischen Tumor.'
  },
  {
    id: 'k11-48', sec: '11.5', p: 38, type: 'single',
    q: 'Wohin metastasieren Keimzelltumoren des Hodens (außer dem Chorionkarzinom) zuerst?',
    opts: [
      'Lymphogen retroperitoneal (paraaortal/parakaval)',
      'Früh hämatogen in Lunge und Hirn',
      'Zuerst mediastinal/supraklavikulär'
    ],
    a: 0,
    ex: 'Lymphogen retroperitoneal → mediastinal/supraklavikulär; spät hämatogen. Ausnahme Chorion-Ca: früh hämatogen (Lunge, Hirn).'
  },
  {
    id: 'k11-49', sec: '11.5', p: 38, type: 'single',
    q: 'Welcher Keimzelltumor ist der häufigste Hodentumor bei Kindern?',
    opts: ['Dottersacktumor', 'Seminom', 'Chorionkarzinom', 'Embryonales Karzinom'],
    a: 0,
    ex: 'Dottersacktumor: häufigster Hodentumor bei Kindern; AFP ↑↑.'
  },
  {
    id: 'k11-50', sec: '11.5', p: 38, type: 'single',
    q: 'Welche Marker exprimiert die Keimzellneoplasie in situ (GCNIS)?',
    opts: ['PLAP, OCT3/4, D2-40, CD117', 'CK20, CDX2', 'TTF-1, Napsin A'],
    a: 0,
    ex: 'GCNIS: große Zellen mit klarem Zytoplasma, großen hyperchromatischen Kernen und prominenten Nukleolen am Tubulusrand; PLAP, OCT3/4, D2-40 (Podoplanin), CD117+.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k11-t01', sec: '11.1', p: 36, type: 'tf', a: true, q: 'Die Urogenital-Tuberkulose ist die häufigste isolierte Organ-Tbc.', ex: 'Urogenital-Tbc = häufigste isolierte Organ-Tbc.' },
  { id: 'k11-t02', sec: '11.1', p: 36, type: 'tf', a: false, q: 'Die BCG-Zystitis zeigt verkäsende Granulome.', ex: 'BCG-Zystitis: nicht verkäsende Granulome.' },
  { id: 'k11-t03', sec: '11.1', p: 36, type: 'tf', a: true, q: 'Mesna dient der Prophylaxe der Cyclophosphamid-Zystitis.', ex: 'Cyclophosphamid → Acrolein → hämorrhagische Zystitis; Prophylaxe Mesna.' },
  { id: 'k11-t04', sec: '11.1', p: 36, type: 'tf', a: false, q: 'Die Malakoplakie ist durch Asteroid-Körperchen gekennzeichnet.', ex: 'Malakoplakie: Makrophagen mit Michaelis-Gutmann-Körperchen, gelbe Plaques. Asteroid-Körperchen → Sarkoidose.' },
  { id: 'k11-t05', sec: '11.1', p: 36, type: 'tf', a: true, q: 'Von-Brunn-Nester finden sich bei der Urocystitis cystica/glandularis.', ex: 'Chronische Urozystitis: cystica/glandularis (von-Brunn-Nester).' },
  { id: 'k11-t06', sec: '11.2', p: 36, type: 'tf', a: true, q: 'Ca. 90 % der Harnblasentumoren sind Urothelkarzinome.', ex: '90 % Urothelkarzinome; übrige Plattenepithel- und Adeno-Ca.' },
  { id: 'k11-t07', sec: '11.2', p: 36, type: 'tf', a: false, q: 'Papilläre, nicht invasive Urothelkarzinome werden als pTis bezeichnet.', ex: 'Papillär nicht invasiv = pTa (Altfrage 2015).' },
  { id: 'k11-t08', sec: '11.2', p: 36, type: 'tf', a: false, q: 'Das flache Carcinoma in situ der Harnblase wird als pTa klassifiziert.', ex: 'Flaches CIS = pTis (Altfrage 2021).' },
  { id: 'k11-t09', sec: '11.2', p: 36, type: 'tf', a: true, q: 'Leitsymptom des Harnblasenkarzinoms ist die schmerzlose Makrohämaturie.', ex: 'Leitsymptom: schmerzlose Makrohämaturie.' },
  { id: 'k11-t10', sec: '11.2', p: 36, type: 'tf', a: true, q: 'Zigarettenrauchen erhöht das Harnblasenkarzinomrisiko ca. 4-fach.', ex: 'Zigarettenrauchen: Risiko ~4-fach.' },
  { id: 'k11-t11', sec: '11.2', p: 36, type: 'tf', a: false, q: 'Frauen erkranken häufiger an Urothelkarzinomen als Männer.', ex: 'Männer : Frauen ≈ 3 : 1.' },
  { id: 'k11-t12', sec: '11.2', p: 36, type: 'tf', a: true, q: 'Der papilläre Entstehungsweg des Urothelkarzinoms ist mit FGFR3-Mutationen assoziiert.', ex: 'Papillär, low grade, FGFR3 vs. flach (CIS), high grade, p53/RB.' },
  { id: 'k11-t13', sec: '11.2', p: 36, type: 'tf', a: false, q: 'Das Urothelpapillom zeigt zytologische Atypien.', ex: 'Urothelpapillom: benigne, ohne zytologische Atypien und ohne invasives Wachstum.' },
  { id: 'k11-t14', sec: '11.2', p: 36, type: 'tf', a: true, q: 'Beim pT2-Harnblasenkarzinom ist die Muscularis propria infiltriert.', ex: 'pT2 = Muscularis propria (a innere, b äußere Hälfte).' },
  { id: 'k11-t15', sec: '11.2', p: 36, type: 'tf', a: false, q: 'Beim Carcinoma in situ der Harnblase ist die Basalmembran durchbrochen.', ex: 'CIS: Basalmembran intakt.' },
  { id: 'k11-t16', sec: '11.2', p: 36, type: 'tf', a: true, q: 'Nach einer TUR-B wird adjuvant intravesikal BCG oder Mitomycin gegeben.', ex: 'TUR-B (± Nachresektion), adjuvant intravesikal BCG/Mitomycin.' },
  { id: 'k11-t17', sec: '11.3', p: 37, type: 'tf', a: false, q: 'Das Prostatakarzinom ist eine typische Folge der BPH.', ex: 'Keine Folge der BPH – andere Zone (Altfrage 2015–2022).' },
  { id: 'k11-t18', sec: '11.3', p: 37, type: 'tf', a: true, q: 'Die BPH entsteht in der Transitionalzone.', ex: 'BPH: Transitionalzone (periurethral).' },
  { id: 'k11-t19', sec: '11.3', p: 37, type: 'tf', a: true, q: 'Eine „Balkenblase“ ist eine Folge der BPH.', ex: 'Hypertrophie der Harnblasenwandmuskulatur („Balkenblase“, Pseudodivertikel).' },
  { id: 'k11-t20', sec: '11.3', p: 37, type: 'tf', a: false, q: 'Die Blasenekstrophie ist eine Komplikation der BPH.', ex: 'Die Blasenekstrophie ist angeboren (Altfrage 2023).' },
  { id: 'k11-t21', sec: '11.3', p: 37, type: 'tf', a: true, q: 'Das PSA kann auch bei Prostatitis erhöht sein.', ex: 'PSA kann auch bei Prostatitis erhöht sein (Altfrage).' },
  { id: 'k11-t22', sec: '11.3', p: 37, type: 'tf', a: false, q: 'Die normale Prostata wiegt ca. 80 g.', ex: 'Prostata ~20 g.' },
  { id: 'k11-t23', sec: '11.4', p: 37, type: 'tf', a: true, q: 'Das Prostatakarzinom ist das häufigste Malignom des Mannes in Deutschland.', ex: 'Häufigstes Malignom des Mannes in D; weltweit unter den fünf häufigsten.' },
  { id: 'k11-t24', sec: '11.4', p: 37, type: 'tf', a: false, q: 'Der Gleason-Score beruht auf zytologischen Kriterien.', ex: 'Rein strukturelles Grading nach Drüsenmuster (Altfrage 2008, 2021, 2024).' },
  { id: 'k11-t25', sec: '11.4', p: 37, type: 'tf', a: true, q: 'Das Prostatakarzinom entsteht meist in der peripheren Zone.', ex: 'Periphere Zone (dorsal, tastbar bei der DRU).' },
  { id: 'k11-t26', sec: '11.4', p: 37, type: 'tf', a: true, q: 'Die HG-PIN gilt als Vorläufer des Prostatakarzinoms.', ex: 'Vorläufer: HG-PIN, häufig in der Nachbarschaft invasiver Karzinome.' },
  { id: 'k11-t27', sec: '11.4', p: 37, type: 'tf', a: false, q: 'Beim Prostatakarzinom ist die Basalzellschicht erhalten.', ex: 'Fehlende Basalzellschicht (CK5/14, p63 negativ).' },
  { id: 'k11-t28', sec: '11.4', p: 37, type: 'tf', a: true, q: 'Das Prostatakarzinom ist AMACR (P504S)-positiv.', ex: 'IHC: AMACR (P504S)+, PSA+, NKX3.1, Androgenrezeptor.' },
  { id: 'k11-t29', sec: '11.4', p: 37, type: 'tf', a: false, q: 'Das Kerngrading ist nach Hormon- oder Strahlentherapie gut anwendbar.', ex: 'Nach Hormon-/Strahlentherapie nicht mehr anwendbar (Altfrage 2010).' },
  { id: 'k11-t30', sec: '11.4', p: 37, type: 'tf', a: true, q: 'Gleason-Muster 4 entspricht kribriformen bzw. fusionierten Drüsen.', ex: 'Muster 3 einzelne Drüsen, 4 kribriform/fusioniert, 5 solide/Einzelzellen/Komedonekrose.' },
  { id: 'k11-t31', sec: '11.4', p: 38, type: 'tf', a: false, q: 'Leitliniengerecht werden bei der Prostatastanzbiopsie 4 Zylinder entnommen.', ex: '10–12 Zylinder (Altfrage 2019).' },
  { id: 'k11-t32', sec: '11.4', p: 37, type: 'tf', a: true, q: 'Knochenmetastasen des Prostatakarzinoms sind typischerweise osteoblastisch.', ex: 'Hämatogen Knochen (~85 %, osteoblastisch).' },
  { id: 'k11-t33', sec: '11.4', p: 37, type: 'tf', a: true, q: 'Latente Prostatakarzinome finden sich bei jedem 2. Mann über 75 Jahren.', ex: 'Latent: > 45 J bei jedem 3., > 75 J bei jedem 2. Mann.' },
  { id: 'k11-t34', sec: '11.4', p: 37, type: 'tf', a: false, q: 'Das Prostatakarzinom metastasiert lymphogen zuerst in die inguinalen Lymphknoten.', ex: 'Zuerst pelvin (obturatorisch, iliakal), dann paraaortal/inguinal.' },
  { id: 'k11-t35', sec: '11.5', p: 38, type: 'tf', a: true, q: 'Das Seminom ist der häufigste Hodentumor.', ex: 'Seminom ~40–55 % (Altfrage).' },
  { id: 'k11-t36', sec: '11.5', p: 38, type: 'tf', a: false, q: 'Beim reinen Seminom ist das AFP erhöht.', ex: 'Seminom: AFP immer normal (Altfrage 2010).' },
  { id: 'k11-t37', sec: '11.5', p: 38, type: 'tf', a: false, q: 'AFP dient beim Chorionkarzinom der Verlaufskontrolle.', ex: 'Chorion-Ca: β-HCG (Altfrage 2015, 2024).' },
  { id: 'k11-t38', sec: '11.5', p: 38, type: 'tf', a: true, q: 'Das Chorionkarzinom metastasiert früh hämatogen.', ex: 'Ausnahme Chorion-Ca: früh hämatogen (Lunge, Hirn).' },
  { id: 'k11-t39', sec: '11.5', p: 38, type: 'tf', a: true, q: 'Beim Hodentumor bestimmt die Gefäßinvasion das pT-Stadium.', ex: 'Gefäßinvasion bestimmt hier das pT-Stadium (pT2), anders als bei anderen Tumoren.' },
  { id: 'k11-t40', sec: '11.5', p: 38, type: 'tf', a: false, q: 'Mischtumoren des Hodens sind selten (< 10 %).', ex: 'Mischtumoren sind häufig (~15–40 %) (Altfrage 2008).' },
  { id: 'k11-t41', sec: '11.5', p: 38, type: 'tf', a: true, q: 'Der spermatozytische Tumor entsteht nicht aus einer GCNIS.', ex: 'GCNIS = Vorläufer aller Keimzelltumoren außer dem spermatozytischen Tumor.' },
  { id: 'k11-t42', sec: '11.5', p: 38, type: 'tf', a: false, q: 'Stromatumoren des Hodens (Leydig, Sertoli) sind typischerweise AFP-positiv.', ex: 'Stromatumoren (1–4 %): Marker negativ.' },
  { id: 'k11-t43', sec: '11.5', p: 38, type: 'tf', a: true, q: 'Das Seminom ist strahlen- und chemosensibel.', ex: 'Seminom: strahlen- und chemosensibel; Heilung > 90 %.' },
  { id: 'k11-t44', sec: '11.5', p: 38, type: 'tf', a: false, q: 'Das ovarielle Pendant des Seminoms ist der Dottersacktumor.', ex: 'Das ovarielle Pendant heißt Dysgerminom (Altfrage 2024).' }
]);
