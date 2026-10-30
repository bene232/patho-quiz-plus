/* Kapitel 2 – Immunpathologie, Granulome, Infektionen (PDF S. 7–9) */
PQ.registerChapter(2, [

  /* ---------- 2.1 Hypersensitivitätsreaktionen ---------- */
  {
    id: 'k2-01', sec: '2.1', p: 7, type: 'single', alt: '2025',
    q: 'Hypersensitivitätsreaktionen – welche Zuordnung ist richtig?',
    opts: [
      'Typ I – IgE – Asthma bronchiale',
      'Typ III – Antikörper – chronische Abstoßung',
      'Typ IV – M. Basedow',
      'Typ IV – Immunkomplexe – Goodpasture-Syndrom',
      'Typ II – Immunkomplexe – Asthma bronchiale'
    ],
    a: 0,
    ex: 'Chronische Abstoßung = CD4-T-Zellen; M. Basedow = Typ IIb; Goodpasture = Typ II (Anti-GBM); extrinsisches Asthma = Typ I.'
  },
  {
    id: 'k2-02', sec: '2.1', p: 7, type: 'single',
    q: 'Welcher Hypersensitivitätstyp liegt der Purpura Schönlein-Henoch zugrunde?',
    opts: ['Typ III (IgA-Immunkomplexe)', 'Typ IV', 'Typ I', 'Typ IIb'],
    a: 0,
    ex: 'So in einer Altfrage gefragt („Typ IV“ ✗). Purpura Schönlein-Henoch: Typ III, IgA-Immunkomplexe, Granulozyten in der Gefäßwand, Kapillarwandnekrosen, Serum-IgA hoch.'
  },
  {
    id: 'k2-03', sec: '2.1', p: 7, type: 'match',
    q: 'Ordne den Hypersensitivitätstyp seinem Mechanismus zu.',
    pairs: [
      ['Typ I', 'IgE auf Mastzellen → Degranulation'],
      ['Typ IIa', 'AK gegen Zell-/Matrixantigene → Opsonierung, Lyse'],
      ['Typ IIb', 'AK aktiviert oder blockiert einen Rezeptor'],
      ['Typ III', 'Immunkomplexablagerung → Komplement → Granulozyten'],
      ['Typ IV', 'Sensibilisierte T-Zellen → Zytokine (IFN-γ)']
    ],
    ex: 'Typ II außerdem als ADCC: AK-beladene Zielzelle → NK-Zellen (CD16) → Perforin/Granzym.'
  },
  {
    id: 'k2-04', sec: '2.1', p: 7, type: 'match',
    q: 'Ordne die Erkrankung ihrem Hypersensitivitätstyp zu.',
    pairs: [
      ['Anaphylaxie', 'Typ I'],
      ['Goodpasture-Syndrom', 'Typ IIa'],
      ['Myasthenia gravis', 'Typ IIb'],
      ['Serumkrankheit', 'Typ III'],
      ['Kontaktekzem', 'Typ IV']
    ],
    ex: 'Weitere Beispiele: Typ IIa Transfusionszwischenfall, AIHA, Pemphigus · Typ IIb M. Basedow · Typ III SLE, PAN, Poststreptokokken-GN · Typ IV Tbc, Sarkoidose, Transplantatabstoßung.'
  },
  {
    id: 'k2-05', sec: '2.1', p: 7, type: 'single',
    q: 'Welche Erkrankung beruht auf einer antikörperabhängigen zellulären Zytotoxizität (ADCC)?',
    opts: ['Hashimoto-Thyreoiditis', 'M. Basedow', 'Kontaktekzem', 'Serumkrankheit'],
    a: 0,
    ex: 'ADCC: Hashimoto, chronisch-atrophische (Typ-A-)Gastritis, hyperakute Abstoßung. Basedow = IIb; Kontaktekzem = IV; Serumkrankheit = III.'
  },
  {
    id: 'k2-06', sec: '2.1', p: 7, type: 'single',
    q: 'Welche histologischen Befunde sind typisch für das Asthma bronchiale?',
    opts: [
      'Eosinophile, verdickte Basalmembran, Becherzellhyperplasie, Curschmann-Spiralen',
      'Hyaline Membranen',
      'Epitheloidzellige, nicht verkäsende Granulome'
    ],
    a: 0,
    ex: 'Asthma: Eosinophile, verdickte Basalmembran, Becherzellhyperplasie, Muskelhypertrophie, Dyskrinie; Curschmann-Spiralen, Charcot-Leyden-Kristalle. Intrinsisches Asthma zeigt dasselbe Bild.'
  },
  {
    id: 'k2-07', sec: '2.1', p: 7, type: 'single',
    q: 'Welche Hypersensitivitätstypen werden als „Allergie“ bezeichnet?',
    opts: ['Typ I und Typ IV', 'Typ II und Typ III', 'Nur Typ III'],
    a: 0,
    ex: 'Typ I und Typ IV werden als „Allergie“ bezeichnet.'
  },
  {
    id: 'k2-08', sec: '2.1', p: 7, type: 'single',
    q: 'Woraus entstehen die Charcot-Leyden-Kristalle beim Asthma?',
    opts: ['Aus Eosinophilen', 'Aus neutrophilen Granulozyten', 'Aus Erythrozyten'],
    a: 0,
    ex: 'Charcot-Leyden-Kristalle stammen aus Eosinophilen.'
  },

  /* ---------- 2.2 Granulome ---------- */
  {
    id: 'k2-09', sec: '2.2', p: 7, type: 'kprim', alt: '2015, 2019, 2024',
    q: 'Granulomatöse Erkrankungen – welche Zuordnungen treffen zu?',
    st: [
      ['Rheumatisches/rheumatoides Granulom: Langhans-Riesenzelle', false],
      ['Sarkoidose: Asteroid-Körperchen', true],
      ['Tuberkulose: käsige Nekrose', true],
      ['Fremdkörpergranulom: ungeordnet liegende Kerne in Riesenzellen', true]
    ],
    ex: 'Langhans-Riesenzellen gehören zur Tbc. Rheumatisches Fieber: Aschoff-Knötchen (fibrinoide Nekrose + Anitschkow-Zellen + Aschoff-Riesenzellen); Rheumaknoten: zentrale fibrinoide Nekrose, palisadenförmige Histiozyten.'
  },
  {
    id: 'k2-10', sec: '2.2', p: '7–8', type: 'single', alt: '2020',
    q: 'Was ist NICHT mit einer granulomatösen Entzündung assoziiert?',
    opts: [
      'Pneumokokkenpneumonie im Stadium der roten Hepatisation',
      'M. Wegener',
      'Sarkoidose',
      'Mycobacterium tuberculosis',
      'Cryptococcus'
    ],
    a: 0,
    ex: 'M. Wegener (GPA, nekrotisierend), Sarkoidose, Tbc und Cryptococcus sind granulomatös; die Lobärpneumonie ist es nicht.'
  },
  {
    id: 'k2-11', sec: '2.2', p: '7–8', type: 'kprim',
    q: 'Tuberkulose und Sarkoidose – welche Aussagen treffen zu?',
    st: [
      ['Bei der Tbc findet sich im Gegensatz zur Sarkoidose eine zentrale Nekrose.', true],
      ['Bei beiden kommt es zur Granulombildung.', true],
      ['Die Tbc ist heute (u. a. durch HIV) wieder ein größeres Problem.', true],
      ['Die Granulome der Sarkoidose verkäsen.', false]
    ],
    ex: 'Die ersten drei Aussagen stammen aus der Altfrage 2018 (✓). Sarkoidose: epitheloidzellig, nicht verkäsend.'
  },
  {
    id: 'k2-12', sec: '2.2', p: 7, type: 'match',
    q: 'Ordne das Granulom seinem Kennzeichen zu.',
    pairs: [
      ['Tuberkulose', 'Langhans-Riesenzellen, zentrale Verkäsung'],
      ['Sarkoidose', 'Nicht verkäsend, Asteroid- und Schaumann-Körper'],
      ['Fremdkörpergranulom', 'Ungeordnete Kerne, z. T. doppelbrechendes Material'],
      ['Rheumatisches Fieber', 'Aschoff-Knötchen mit Anitschkow-Zellen'],
      ['Rheumaknoten (RA)', 'Zentrale fibrinoide Nekrose, palisadenförmige Histiozyten']
    ],
    ex: 'Weitere Granulome: M. Crohn (nicht verkäsend), GPA (nekrotisierend), Pilze, Lues (Gumma), Brucellose, Katzenkratzkrankheit, BCG-Zystitis.'
  },
  {
    id: 'k2-13', sec: '2.2', p: 7, type: 'single',
    q: 'Was ist ein Schaumann-Körper?',
    opts: [
      'Muschelartig verkalkter Einschluss in Riesenzellen bei Sarkoidose',
      'Sternförmiger Einschluss in Langhans-Zellen bei Tbc',
      'Eosinophiler Einschluss in Neuronen bei M. Parkinson'
    ],
    a: 0,
    ex: 'Sarkoidose: in Riesenzellen Asteroid-Körperchen (sternförmig) und Schaumann-Körper (muschelartig verkalkt). Eosinophile neuronale Einschlüsse = Lewy-Körperchen.'
  },
  {
    id: 'k2-14', sec: '2.2', p: 7, type: 'single',
    q: 'Bei welcher Erkrankung entstehen Aschoff-Knötchen?',
    opts: ['Rheumatisches Fieber', 'Rheumatoide Arthritis', 'Sarkoidose', 'Tuberkulose'],
    a: 0,
    ex: 'Aschoff-Knötchen: fibrinoide Nekrose + Anitschkow-Zellen („Raupenzellen“) + Aschoff-Riesenzellen; perivaskulär im Myokard. RA → Rheumaknoten.'
  },
  {
    id: 'k2-15', sec: '2.2', p: 7, type: 'single',
    q: 'Welche Riesenzellen finden sich bei einer Aspirationspneumonie?',
    opts: ['Fremdkörper-Riesenzellen', 'Langhans-Riesenzellen mit Verkäsung', 'Reed-Sternberg-Zellen'],
    a: 0,
    ex: 'Riesenzellen bei Pneumonie: Aspiration (Fremdkörper-RZ) ✓, Tbc ✓, Sarkoidose ✓, Klebsiellen ✗. Reed-Sternberg-Zellen → Hodgkin-Lymphom.'
  },
  {
    id: 'k2-16', sec: '2.2', p: 7, type: 'single',
    q: 'Wo liegen die Aschoff-Knötchen beim rheumatischen Fieber?',
    opts: ['Perivaskulär im Myokard', 'Subkutan an Streckseiten', 'In den Hiluslymphknoten'],
    a: 0,
    ex: 'Aschoff-Knötchen: perivaskulär im Myokard. Subkutane Knoten (und Lunge) → Rheumaknoten der RA.'
  },

  /* ---------- 2.3 Transplantation & Abstoßung ---------- */
  {
    id: 'k2-17', sec: '2.3', p: 8, type: 'kprim', alt: '2016, 2021',
    q: 'Nierentransplantation – welche Aussagen treffen zu?',
    st: [
      ['Die akute Abstoßung zeigt eine hochgradige Lumeneinengung durch Intimafibrose.', false],
      ['Diabetische Nephropathie und MPGN II haben die höchste Rezidivrate im Transplantat.', true],
      ['Prinzipiell können alle Kompartimente des Nephrons betroffen sein.', true],
      ['Die chronische Abstoßung zeigt typischerweise eine lymphozytäre Tubulitis.', false]
    ],
    ex: 'Intimafibrose/Gefäßstenose (Transplantatvaskulopathie) → chronische Abstoßung. Tubulitis → akute zelluläre Abstoßung.'
  },
  {
    id: 'k2-18', sec: '2.3', p: 8, type: 'match',
    q: 'Ordne die Abstoßungsform ihrem Kennzeichen zu.',
    pairs: [
      ['Hyperakut', 'Präformierte AK (AB0/HLA), Minuten bis Stunden'],
      ['Akut zellulär', 'CD8-/CD4-T-Zellen, Tubulitis, Endothelialitis'],
      ['Akut humoral', 'Donorspezifische AK, C4d, Kapillaritis'],
      ['Chronisch', 'Transplantatvaskulopathie mit Intimafibrose']
    ],
    ex: 'Hyperakut: Komplement, Granulozyten, Gefäßthrombosen (Typ II). Chronisch (Monate bis Jahre): CD4-T-Zellen, interstitielle Fibrose, Tubulusatrophie.'
  },
  {
    id: 'k2-19', sec: '2.3', p: 8, type: 'single',
    q: 'Wie wird einer hyperakuten Abstoßung vorgebeugt?',
    opts: ['Durch ein Cross-Match vor der Transplantation', 'Durch eine C4d-Färbung nach der Transplantation', 'Durch Steroide Wochen nach der Transplantation'],
    a: 0,
    ex: 'Hyperakute Abstoßung durch präformierte AK (AB0/HLA) → Prävention durch Cross-Match.'
  },
  {
    id: 'k2-20', sec: '2.3', p: 8, type: 'single',
    q: 'Welche Trias kennzeichnet die akute Abstoßung eines Lebertransplantats?',
    opts: [
      'Portalfeld-Lymphozyten, Gallengangsschaden, Endothelialitis',
      'Gallengangsverlust > 50 % und Arteriolenverlust',
      'Verfettung, Mallory-Denk-Körper, perizelluläre Fibrose'
    ],
    a: 0,
    ex: 'Gallengangs- und Arteriolenverlust kennzeichnen die chronische Abstoßung der Leber; Mallory-Denk-Körper die alkoholische Leberschädigung.'
  },
  {
    id: 'k2-21', sec: '2.3', p: 8, type: 'single',
    q: 'Welcher Befund spricht für eine akute humorale Abstoßung?',
    opts: ['C4d-Positivität und Kapillaritis', 'Intimafibrose mit Gefäßstenose', 'Gallengangsverlust'],
    a: 0,
    ex: 'Akut humoral: donorspezifische AK, C4d, Kapillaritis. Intimafibrose und Gallengangsverlust → chronisch.'
  },
  {
    id: 'k2-22', sec: '2.3', p: 8, type: 'single',
    q: 'Welche Zellen tragen die chronische Transplantatabstoßung?',
    opts: ['CD4-T-Zellen', 'Präformierte Antikörper', 'IgE-beladene Mastzellen'],
    a: 0,
    ex: 'Chronisch: CD4-T-Zellen, chronische Endothelentzündung → Intimafibrose/Gefäßstenose. Präformierte AK → hyperakut; IgE/Mastzellen → Typ I.'
  },

  /* ---------- 2.4 Immunsuppression & opportunistische Erreger ---------- */
  {
    id: 'k2-23', sec: '2.4', p: 8, type: 'match',
    q: 'Ordne das humane Herpesvirus seiner Erkrankung zu.',
    pairs: [
      ['HHV-3 (VZV)', 'Windpocken, Zoster'],
      ['HHV-4 (EBV)', 'Mononukleose, Burkitt, Nasopharynx-Ca'],
      ['HHV-5 (CMV)', 'Eulenaugenzellen, Retinitis'],
      ['HHV-6/7', 'Exanthema subitum (Dreitagefieber)'],
      ['HHV-8 (KSHV)', 'Kaposi-Sarkom']
    ],
    ex: 'HHV-1/2 (HSV): Herpes labialis, HSV-Enzephalitis (temporal) / Herpes genitalis, neonatal.'
  },
  {
    id: 'k2-24', sec: '2.4', p: 8, type: 'single',
    q: 'Bei welcher Konstellation ist das CMV-Risiko nach Transplantation am höchsten?',
    opts: ['Spender CMV-positiv, Empfänger CMV-negativ', 'Spender CMV-negativ, Empfänger CMV-positiv', 'Spender und Empfänger CMV-negativ'],
    a: 0,
    ex: 'CMV: Risiko bei Spender+/Empfänger− (serologischer Mismatch).'
  },
  {
    id: 'k2-25', sec: '2.4', p: 8, type: 'single',
    q: 'Was sind CMV-„Eulenaugenzellen“?',
    opts: [
      'Vergrößerte Zellen mit basophilem intranukleärem Einschluss und hellem Hof',
      'Mehrkernige Riesenzellen mit hufeisenförmig angeordneten Kernen',
      'Zellen mit perinukleärem Hof und „Rosinenkernen“'
    ],
    a: 0,
    ex: 'Eulenaugenzellen sind schon in HE erkennbar. Hufeisenförmige Kerne → Langhans-Riesenzellen; perinukleärer Hof/Rosinenkerne → HPV-Koilozyten.'
  },
  {
    id: 'k2-26', sec: '2.4', p: 8, type: 'single',
    q: 'Welche Morphologie ist typisch für Aspergillus?',
    opts: ['Septierte Hyphen mit spitzwinkliger (45°) Verzweigung', 'Pseudohyphen', 'Schaumiges intraalveoläres Exsudat'],
    a: 0,
    ex: 'Aspergillus: septiert, spitzwinklige (45°) Verzweigung. Pseudohyphen → Candida; schaumiges Exsudat → Pneumocystis.'
  },
  {
    id: 'k2-27', sec: '2.4', p: 8, type: 'single',
    q: 'Welche Erkrankung ist mit EBV assoziiert?',
    opts: ['Posttransplantäre lymphoproliferative Erkrankung (PTLD)', 'Kaposi-Sarkom', 'Exanthema subitum', 'Progressive multifokale Leukenzephalopathie'],
    a: 0,
    ex: 'EBV (HHV-4, B-Zellen): Mononukleose, PTLD, Burkitt, Hodgkin, Nasopharynx-Ca, orale Haarleukoplakie. Kaposi → HHV-8; Exanthema subitum → HHV-6/7; PML → JC-Virus.'
  },
  {
    id: 'k2-28', sec: '2.4', p: 8, type: 'kprim',
    q: 'HIV – welche Aussagen treffen zu?',
    st: [
      ['Zielzellen sind u. a. CD4-T-Zellen und Makrophagen.', true],
      ['Die HIV-Lymphadenopathie zeigt floride Keimzentren mit zerstörtem FDC-Netz.', true],
      ['Langerhans-Zellen werden nicht infiziert.', false],
      ['Gliazellen sind keine Zielzellen.', false]
    ],
    ex: 'HIV-Zielzellen: CD4-T-Zellen, Makrophagen, follikulär-dendritische Zellen, Glia, Langerhans-Zellen. FDC-Netz in CD21 darstellbar.'
  },
  {
    id: 'k2-29', sec: '2.4', p: 8, type: 'single',
    q: 'Welcher Tumor gehört zu den frühesten Tumoren nach Transplantation (Median 22 Monate)?',
    opts: ['Kaposi-Sarkom', 'Hepatozelluläres Karzinom', 'Kolorektales Karzinom'],
    a: 0,
    ex: 'HHV-8: Kaposi-Sarkom (> 90 % HHV-8+), primäres Ergusslymphom, M. Castleman; einer der frühesten Tumoren nach Transplantation.'
  },
  {
    id: 'k2-30', sec: '2.4', p: 8, type: 'single',
    q: 'Welches Virus verursacht die progressive multifokale Leukenzephalopathie (PML)?',
    opts: ['JC-Virus', 'CMV', 'HHV-8'],
    a: 0,
    ex: 'Opportunistisch u. a.: JC-Virus (PML), Toxoplasmose, Candida, atypische Mykobakterien (Lymphknoten), Pneumocystis.'
  },

  /* ---------- 2.5 Amyloidose ---------- */
  {
    id: 'k2-31', sec: '2.5', p: '8–9', type: 'single', alt: '2019',
    q: 'Amyloidose – welche Aussage ist FALSCH?',
    opts: [
      'Die AL-Amyloidose verursacht die zerebralen Plaques beim M. Alzheimer.',
      'Kongorot zeigt eine grüne Doppelbrechung.',
      'Es kommt zur Organomegalie.',
      'Amyloid hat eine β-Faltblattstruktur und färbt sich „stärkeähnlich“.',
      'Die AL-Amyloidose ist die häufigste Form.'
    ],
    a: 0,
    ex: 'Die Alzheimer-Plaques bestehen aus Aβ (Amyloid-Precursor-Protein), nicht aus AL (Ig-Leichtketten).'
  },
  {
    id: 'k2-32', sec: '2.5', p: 9, type: 'single',
    q: 'Was weist die kongophile Färbung im Gehirn nach?',
    opts: ['β-Amyloid', 'Tau-Protein', 'Neurofibrilläre Tangles'],
    a: 0,
    ex: 'So in einer Altfrage gefragt: kongophile Färbung → β-Amyloid (nicht Tau, nicht Tangles).'
  },
  {
    id: 'k2-33', sec: '2.5', p: 9, type: 'single',
    q: 'Eine kongophile Angiopathie verursacht eine atypische kortikale Blutung. Welcher Antikörper weist sie am besten nach?',
    opts: ['Anti-β-Amyloid', 'Anti-Tau', 'Anti-α-Synuklein'],
    a: 0,
    ex: 'So in einer Altfrage gefragt. Zerebrale Amyloidangiopathie (Aβ) → atypische Lobärblutungen.'
  },
  {
    id: 'k2-34', sec: '2.5', p: '8–9', type: 'match',
    q: 'Ordne den Amyloidtyp seinem Vorläuferprotein zu.',
    pairs: [
      ['AL', 'Ig-Leichtketten'],
      ['AA', 'Serum-Amyloid A'],
      ['ATTR', 'Transthyretin'],
      ['AE (ACal)', 'Calcitonin'],
      ['Aβ2M', 'β2-Mikroglobulin']
    ],
    ex: 'Aβ: Amyloid-Precursor-Protein (M. Alzheimer, Amyloidangiopathie).'
  },
  {
    id: 'k2-35', sec: '2.5', p: '8–9', type: 'match',
    q: 'Ordne den Amyloidtyp seinem Vorkommen zu.',
    pairs: [
      ['AL', 'Plasmozytom/Myelom, monoklonale Gammopathie'],
      ['AA', 'Chronische Entzündung (RA, Tbc, CED)'],
      ['ATTR', 'Senil (Herz), familiär (Polyneuropathie)'],
      ['Aβ2M', 'Langzeitdialyse (Karpaltunnel)'],
      ['AE (ACal)', 'Medulläres SD-Karzinom']
    ],
    ex: 'AA außerdem bei Osteomyelitis und Bronchiektasen.'
  },
  {
    id: 'k2-36', sec: '2.5', p: 8, type: 'kprim',
    q: 'Amyloidose – welche Aussagen treffen zu?',
    st: [
      ['Amyloid wird extrazellulär abgelagert.', true],
      ['Eine restriktive Kardiomyopathie ist eine mögliche Folge.', true],
      ['Kongorot zeigt im polarisierten Licht eine blaue Doppelbrechung.', false],
      ['Amyloid wird intrazellulär in Lysosomen gespeichert.', false]
    ],
    ex: 'Amyloidose: extrazelluläre Ablagerung fibrillärer Proteine mit β-Faltblattstruktur; Kongorot → apfelgrüne Doppelbrechung; Typisierung per IHC; Folgen Organomegalie, nephrotisches Syndrom, restriktive Kardiomyopathie.'
  },
  {
    id: 'k2-37', sec: '2.5', p: 8, type: 'single',
    q: 'Welche ist die häufigste systemische Amyloidose in Industrieländern?',
    opts: ['AL-Amyloidose', 'AA-Amyloidose', 'ATTR-Amyloidose'],
    a: 0,
    ex: 'AL (Ig-Leichtketten) = häufigste systemische Form in Industrieländern.'
  },

  /* ---------- 2.6 Autoimmunerkrankungen ---------- */
  {
    id: 'k2-38', sec: '2.6', p: 9, type: 'match',
    q: 'Ordne die Autoimmunerkrankung ihrem Autoantikörper zu.',
    pairs: [
      ['Limitierte Sklerodermie (CREST)', 'Anti-Centromer'],
      ['Diffuse Sklerodermie', 'Anti-Scl-70 (Topoisomerase I)'],
      ['SLE', 'ANA, ds-DNA'],
      ['Pemphigus vulgaris', 'Anti-Desmoglein 1/3']
    ],
    ex: 'Diffuse Sklerodermie: Lunge, Niere, Ösophagus. SLE: Immunkomplexe (Typ III) → Lupus-GN, Libman-Sacks-Endokarditis, Vaskulitis.'
  },
  {
    id: 'k2-39', sec: '2.6', p: 9, type: 'single',
    q: 'Was kennzeichnet das bullöse Pemphigoid im Unterschied zum Pemphigus vulgaris?',
    opts: [
      'Subepidermale Blase mit linearer Fluoreszenz an der Basalmembran',
      'Suprabasale akantholytische Blase mit „Grabsteinzellen“',
      'Netzförmige interzelluläre IgG/C3-Fluoreszenz'
    ],
    a: 0,
    ex: 'Pemphigus vulgaris: suprabasale akantholytische Blase („Grabsteinzellen“), netzförmige interzelluläre IgG/C3-Fluoreszenz, AK gegen Desmoglein 1/3.'
  },
  {
    id: 'k2-40', sec: '2.6', p: 9, type: 'single',
    q: 'Welcher Mechanismus erklärt das rheumatische Fieber nach einem Streptokokkeninfekt?',
    opts: ['Molekulares Mimikry', 'Freisetzung sequestrierter Antigene', 'Medikamentös induzierte Autoimmunität'],
    a: 0,
    ex: 'Mechanismen: genetisch (HLA), Freisetzung sequestrierter Antigene (sympathische Ophthalmie, Vasektomie), molekulares Mimikry (rheumatisches Fieber nach Strep A), Medikamente (Procainamid → SLE), Infektionen.'
  },
  {
    id: 'k2-41', sec: '2.6', p: 9, type: 'single',
    q: 'Welches Medikament kann einen SLE auslösen?',
    opts: ['Procainamid', 'Mesna', 'Imatinib'],
    a: 0,
    ex: 'Procainamid → SLE. Mesna schützt vor der Cyclophosphamid-Zystitis; Imatinib → GIST, CML.'
  },
  {
    id: 'k2-42', sec: '2.6', p: 9, type: 'single',
    q: 'Warum wird der Fetus in der Schwangerschaft nicht abgestoßen?',
    opts: [
      'Der Synzytiotrophoblast trägt kein HLA I/II; Progesteron und AFP wirken immunsuppressiv',
      'Die Mutter bildet während der Schwangerschaft keine T-Zellen',
      'Der Synzytiotrophoblast exprimiert besonders viel HLA I/II'
    ],
    a: 0,
    ex: 'Physiologische Immuntoleranz: Progesteron, AFP, Uterusmakrophagen und T-Suppressorzellen wirken immunsuppressiv; der Synzytiotrophoblast trägt kein HLA I/II.'
  },
  {
    id: 'k2-43', sec: '2.6', p: 9, type: 'single',
    q: 'Wie häufig sind Autoimmunerkrankungen insgesamt?',
    opts: ['3–5 %, Frauen : Männer ≈ 3 : 1', '< 0,1 %, Männer häufiger', '> 30 %, beide Geschlechter gleich'],
    a: 0,
    ex: 'Autoimmunerkrankungen: fehlerhafte T-/B-Zell-Aktivierung gegen Körperantigene; Frauen : Männer ≈ 3 : 1, Gesamthäufigkeit 3–5 %.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k2-t01', sec: '2.1', p: 7, type: 'tf', a: true, q: 'Bei der Typ-I-Reaktion degranulieren Mastzellen nach IgE-Bindung.', ex: 'Typ I: IgE auf Mastzellen → Degranulation (Histamin, Leukotriene, Prostaglandine).' },
  { id: 'k2-t02', sec: '2.1', p: 7, type: 'tf', a: false, q: 'Die Purpura Schönlein-Henoch ist eine Typ-IV-Reaktion.', ex: 'Purpura Schönlein-Henoch = Typ III (IgA-Immunkomplexe) (Altfrage).' },
  { id: 'k2-t03', sec: '2.1', p: 7, type: 'tf', a: false, q: 'Der M. Basedow ist eine Typ-IV-Reaktion.', ex: 'M. Basedow = Typ IIb (TSH-R-Stimulation) (Altfrage 2025).' },
  { id: 'k2-t04', sec: '2.1', p: 7, type: 'tf', a: true, q: 'Die Myasthenia gravis ist eine Typ-IIb-Reaktion (ACh-Rezeptor-Blockade).', ex: 'Typ IIb: M. Basedow, Myasthenia gravis, perniziöse Anämie, 30 % der chronischen Urtikaria.' },
  { id: 'k2-t05', sec: '2.1', p: 7, type: 'tf', a: true, q: 'Die Serumkrankheit tritt ca. 7–10 Tage nach Antigenkontakt auf.', ex: 'Typ III: Serumkrankheit (7–10 d), Arthus-Reaktion.' },
  { id: 'k2-t06', sec: '2.1', p: 7, type: 'tf', a: false, q: 'Das Goodpasture-Syndrom ist eine Immunkomplexreaktion (Typ III).', ex: 'Goodpasture = Typ II (Anti-GBM) (Altfrage 2025).' },
  { id: 'k2-t07', sec: '2.1', p: 7, type: 'tf', a: true, q: 'Die Riesenzellarteriitis ist eine Typ-IV-Reaktion.', ex: 'Typ IV u. a.: Tbc, Sarkoidose, Kontaktekzem, Transplantatabstoßung, Riesenzellarteriitis.' },
  { id: 'k2-t08', sec: '2.1', p: 7, type: 'tf', a: false, q: 'Das intrinsische Asthma zeigt ein anderes histologisches Bild als das extrinsische.', ex: 'Intrinsisches Asthma: keine allergische Komponente, aber gleiches histologisches Bild.' },
  { id: 'k2-t09', sec: '2.1', p: 7, type: 'tf', a: true, q: 'Die hyperakute Abstoßung beruht auf einer Typ-II-Reaktion.', ex: 'Typ II (ADCC): u. a. hyperakute Abstoßung.' },
  { id: 'k2-t10', sec: '2.2', p: 7, type: 'tf', a: true, q: 'Langhans-Riesenzellen haben hufeisenförmig am Rand liegende Kerne.', ex: 'Tbc: Langhans-Riesenzellen (Kerne hufeisenförmig am Rand).' },
  { id: 'k2-t11', sec: '2.2', p: 7, type: 'tf', a: false, q: 'Rheumatische Granulome enthalten typischerweise Langhans-Riesenzellen.', ex: 'Langhans-Riesenzellen → Tbc (Altfrage 2015, 2019, 2024).' },
  { id: 'k2-t12', sec: '2.2', p: 7, type: 'tf', a: true, q: 'Fremdmaterial in Fremdkörpergranulomen ist z. T. doppelbrechend.', ex: 'Fremdkörpergranulom: ungeordnete Kerne, Fremdmaterial z. T. doppelbrechend (Aspiration, Gichttophus, Nahtmaterial).' },
  { id: 'k2-t13', sec: '2.2', p: 7, type: 'tf', a: false, q: 'Die Granulome beim M. Crohn sind verkäsend.', ex: 'M. Crohn: nicht verkäsende Granulome.' },
  { id: 'k2-t14', sec: '2.2', p: 8, type: 'tf', a: true, q: 'Die Pneumokokkenpneumonie im Stadium der roten Hepatisation ist nicht granulomatös.', ex: 'Altfrage 2020: nicht mit granulomatöser Entzündung assoziiert.' },
  { id: 'k2-t15', sec: '2.2', p: 7, type: 'tf', a: false, q: 'Klebsiellen-Pneumonien zeigen typischerweise mehrkernige Riesenzellen.', ex: 'Riesenzellen bei Pneumonie: Aspiration ✓, Tbc ✓, Sarkoidose ✓, Klebsiellen ✗.' },
  { id: 'k2-t16', sec: '2.2', p: 7, type: 'tf', a: true, q: 'Cryptococcus kann eine granulomatöse Entzündung hervorrufen.', ex: 'Weitere Granulome: Pilze (Cryptococcus, Histoplasma).' },
  { id: 'k2-t17', sec: '2.3', p: 8, type: 'tf', a: false, q: 'Eine Intimafibrose mit Lumeneinengung ist typisch für die akute Abstoßung.', ex: 'Intimafibrose → chronische Abstoßung (Altfrage 2016, 2021).' },
  { id: 'k2-t18', sec: '2.3', p: 8, type: 'tf', a: true, q: 'Eine Tubulitis ist ein Zeichen der akuten zellulären Abstoßung.', ex: 'Akut zellulär (Niere): interstitielle Lymphozyten, Tubulitis, Gefäßrejektion.' },
  { id: 'k2-t19', sec: '2.3', p: 8, type: 'tf', a: false, q: 'Die hyperakute Abstoßung tritt erst nach Monaten auf.', ex: 'Hyperakut: Minuten bis Stunden.' },
  { id: 'k2-t20', sec: '2.3', p: 8, type: 'tf', a: true, q: 'Die MPGN Typ II rezidiviert im Nierentransplantat in ca. 100 %.', ex: 'Höchste Rezidivrate: MPGN Typ II (~100 %) und diabetische Nephropathie.' },
  { id: 'k2-t21', sec: '2.3', p: 8, type: 'tf', a: true, q: 'Die chronische Abstoßung der Leber zeigt einen Gallengangsverlust.', ex: 'Chronisch (Leber): Gallengangsverlust (> 50 % spät), Arteriolenverlust.' },
  { id: 'k2-t22', sec: '2.4', p: 8, type: 'tf', a: true, q: 'EBV infiziert B-Zellen.', ex: 'EBV (HHV-4, B-Zellen).' },
  { id: 'k2-t23', sec: '2.4', p: 8, type: 'tf', a: false, q: 'Das Kaposi-Sarkom ist in weniger als 10 % HHV-8-positiv.', ex: 'Kaposi-Sarkom: > 90 % HHV-8+.' },
  { id: 'k2-t24', sec: '2.4', p: 8, type: 'tf', a: true, q: 'HHV-8 ist mit dem primären Ergusslymphom und dem M. Castleman assoziiert.', ex: 'HHV-8: Kaposi-Sarkom, primäres Ergusslymphom, M. Castleman.' },
  { id: 'k2-t25', sec: '2.4', p: 8, type: 'tf', a: false, q: 'Aspergillus bildet Pseudohyphen.', ex: 'Aspergillus: septierte Hyphen mit 45°-Verzweigung. Pseudohyphen → Candida.' },
  { id: 'k2-t26', sec: '2.4', p: 8, type: 'tf', a: true, q: 'Atypische Mykobakterien befallen bei Immunsuppression v. a. Lymphknoten.', ex: 'Opportunistisch: atypische Mykobakterien (Lymphknoten).' },
  { id: 'k2-t27', sec: '2.4', p: 8, type: 'tf', a: false, q: 'Die Mononukleose zeigt eine monotone Lymphozytenpopulation in der Milz.', ex: 'Mononukleose: bunte Pulpahyperplasie.' },
  { id: 'k2-t28', sec: '2.5', p: 8, type: 'tf', a: true, q: 'Der Name Amyloid geht auf das stärkeähnliche Färbeverhalten (Jod) zurück.', ex: 'Amyloid: Name wegen des stärkeähnlichen Färbeverhaltens (Jod).' },
  { id: 'k2-t29', sec: '2.5', p: 9, type: 'tf', a: false, q: 'Die AL-Amyloidose verursacht die Plaques beim M. Alzheimer.', ex: 'Alzheimer-Plaques = Aβ (Altfrage 2019).' },
  { id: 'k2-t30', sec: '2.5', p: 8, type: 'tf', a: true, q: 'Die AA-Amyloidose entsteht bei chronischen Entzündungen.', ex: 'AA: Serum-Amyloid A; RA, Tbc, Osteomyelitis, CED, Bronchiektasen.' },
  { id: 'k2-t31', sec: '2.5', p: 8, type: 'tf', a: false, q: 'Die ATTR-Amyloidose entsteht aus Immunglobulin-Leichtketten.', ex: 'ATTR: Transthyretin. Ig-Leichtketten → AL.' },
  { id: 'k2-t32', sec: '2.5', p: 8, type: 'tf', a: true, q: 'Eine Amyloidose kann ein nephrotisches Syndrom verursachen.', ex: 'Folgen: Organomegalie, nephrotisches Syndrom, restriktive Kardiomyopathie.' },
  { id: 'k2-t33', sec: '2.5', p: 9, type: 'tf', a: false, q: 'Die kongophile Färbung im Gehirn weist Tau-Protein nach.', ex: 'Kongophil = β-Amyloid (nicht Tau, nicht Tangles).' },
  { id: 'k2-t34', sec: '2.6', p: 9, type: 'tf', a: true, q: 'Autoimmunerkrankungen betreffen Frauen etwa 3-mal häufiger als Männer.', ex: 'Frauen : Männer ≈ 3 : 1.' },
  { id: 'k2-t35', sec: '2.6', p: 9, type: 'tf', a: false, q: 'Beim Pemphigus vulgaris liegt die Blase subepidermal.', ex: 'Pemphigus vulgaris: suprabasale akantholytische Blase. Subepidermal → bullöses Pemphigoid.' },
  { id: 'k2-t36', sec: '2.6', p: 9, type: 'tf', a: true, q: 'Die sympathische Ophthalmie entsteht durch Freisetzung sequestrierter Antigene.', ex: 'Freisetzung sequestrierter Antigene: sympathische Ophthalmie, Vasektomie.' },
  { id: 'k2-t37', sec: '2.6', p: 9, type: 'tf', a: false, q: 'Der Synzytiotrophoblast exprimiert HLA I und II.', ex: 'Der Synzytiotrophoblast trägt kein HLA I/II.' },
  { id: 'k2-t38', sec: '2.6', p: 9, type: 'tf', a: true, q: 'Die Libman-Sacks-Endokarditis ist eine Komplikation des SLE.', ex: 'SLE: Immunkomplexe → Lupus-GN, Libman-Sacks-Endokarditis, Vaskulitis.' }
]);
