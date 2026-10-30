/* Kapitel 6 – Lunge & Pleura (PDF S. 19–22) */
PQ.registerChapter(6, [

  /* ---------- 6.1 Pneumonien ---------- */
  {
    id: 'k6-01', sec: '6.1', p: 19, type: 'single', alt: '2008',
    q: 'Pneumonie – welche Aussage ist FALSCH?',
    opts: [
      'Die gelbe Hepatisation tritt am 1.–2. Tag auf.',
      'Eine septikopyämische Pneumonie kann von einer Osteomyelitis ausgehen.',
      'Interstitielle Pneumonien werden vorwiegend durch Viren verursacht.',
      'Die 4 klassischen Stadien sind heute kaum noch zu sehen.',
      'Eine Lungengangrän ist eine mögliche Komplikation.'
    ],
    a: 0,
    ex: 'Die gelbe Hepatisation (eitrig) liegt an Tag 6–9. Tag 1–2 ist die Anschoppung (serös). Wegen der frühen Antibiotikatherapie ist der klassische Verlauf heute kaum noch zu sehen.'
  },
  {
    id: 'k6-02', sec: '6.1', p: 19, type: 'kprim', alt: '2010, 2024',
    q: 'Pneumonie – welche Aussagen treffen zu?',
    st: [
      ['Eine Septikopyämie kann von einer Osteomyelitis ausgehen.', true],
      ['Interstitielle Pneumonien werden vorwiegend durch Bakterien verursacht.', false],
      ['Die 4 klassischen Stadien der Lobärpneumonie sieht man heute selten.', true],
      ['Die rote Hepatisation ist eine eitrige Entzündung.', false]
    ],
    ex: 'Interstitielle Pneumonien sind vorwiegend viral (RSV, Influenza, Parainfluenza, Adeno, CMV, Masern), außerdem Mykoplasmen, Chlamydien, Pneumocystis. Die rote Hepatisation (Tag 3–4) ist hämorrhagisch-fibrinös; eitrig ist die gelbe.'
  },
  {
    id: 'k6-03', sec: '6.1', p: 19, type: 'single', alt: '2015',
    q: 'Was ist KEINE (direkte) Komplikation einer Lobärpneumonie?',
    opts: ['Lungenembolie', 'Lungenabszess', 'Pleuraempyem', 'Karnifikation', 'Septikopyämie'],
    a: 0,
    ex: 'Komplikationen: Lungenabszess, Lungengangrän, Pleuritis/Pleuraempyem, Septikopyämie, toxisches Herz-Kreislauf-Versagen, Karnifikation, bronchopleurale Fistel. Keine Lungenembolie.'
  },
  {
    id: 'k6-04', sec: '6.1', p: 19, type: 'kprim', alt: '2013',
    q: 'Welche der folgenden können Erreger einer Pneumonie sein?',
    st: [
      ['Aspergillus', true],
      ['Klebsiellen', true],
      ['Nocardien', true],
      ['Toxoplasmen', true]
    ],
    ex: 'Alle vier sind Pneumonie-Erreger (Altfrage: alle ✓).'
  },
  {
    id: 'k6-05', sec: '6.1', p: 19, type: 'match',
    q: 'Ordne den Tag der unbehandelten Lobärpneumonie ihrem Stadium zu.',
    pairs: [
      ['Tag 1–2', 'Anschoppung (serös)'],
      ['Tag 3–4', 'Rote Hepatisation (hämorrhagisch-fibrinös)'],
      ['Tag 5–6', 'Graue Hepatisation (fibrinös)'],
      ['Tag 6–9', 'Gelbe Hepatisation (eitrig)'],
      ['Ab ca. Tag 9–10', 'Lyse (resorptiv)']
    ],
    ex: 'Anschoppung: Hyperämie, Ödem, Erreger · rote Hepatisation: Erythrozyten + Fibrin, leberartig fest · graue: Erythrozytenzerfall, Fibrin + Granulozyten · gelbe: Granulozyten-Exsudat · Lyse durch Makrophagen → Restitutio (~14 d).'
  },
  {
    id: 'k6-06', sec: '6.1', p: 19, type: 'single',
    q: 'Welcher Erreger ist der häufigste der ambulant erworbenen Pneumonie?',
    opts: ['Streptococcus pneumoniae', 'Pseudomonas aeruginosa', 'Pneumocystis jirovecii', 'Aspergillus'],
    a: 0,
    ex: 'Ambulant v. a. Strep. pneumoniae (30–60 %), H. influenzae, Mykoplasmen, Chlamydien, Legionellen. Pseudomonas ist ein typisch nosokomialer Erreger, Pneumocystis ein opportunistischer.'
  },
  {
    id: 'k6-07', sec: '6.1', p: 19, type: 'single',
    q: 'Welche Erreger dominieren bei der nosokomialen Pneumonie?',
    opts: [
      'Gramnegative Erreger (Pseudomonas, Klebsiellen, E. coli)',
      'Mykoplasmen und Chlamydien',
      'RSV und Influenzaviren',
      'Pneumocystis jirovecii'
    ],
    a: 0,
    ex: 'Nosokomial > 60 % gramnegativ (Pseudomonas, Klebsiellen, E. coli), außerdem Staph. aureus. Mykoplasmen/Chlamydien sind ambulante, RSV/Influenza typische interstitielle (virale) Erreger.'
  },
  {
    id: 'k6-08', sec: '6.1', p: 19, type: 'single',
    q: 'Was kennzeichnet die Bronchopneumonie im Vergleich zur Lobärpneumonie?',
    opts: [
      'Herdförmiger, asynchroner Verlauf, vom Bronchus ausgehend',
      'Synchroner Verlauf in einem ganzen Lappen',
      'Entzündung ausschließlich im Interstitium',
      'Granulomatöse Entzündung mit zentraler Verkäsung'
    ],
    a: 0,
    ex: 'Lobärpneumonie: synchroner Verlauf in einem Lappen. Bronchopneumonie: herdförmig, asynchron, vom Bronchus ausgehend (Sonderformen: Friedländer-/Klebsiellen-, Staphylokokken-, Aspirations-, septische Pneumonie).'
  },
  {
    id: 'k6-09', sec: '6.1', p: 19, type: 'match',
    q: 'Ordne den Begriff der Ursache der Lungenentzündung zu.',
    pairs: [
      ['Pneumonie', 'Infektiös'],
      ['Pneumonitis', 'Physikalisch-chemisch'],
      ['Alveolitis', 'Allergisch-toxisch']
    ],
    ex: 'Pneumonie = akute oder chronische Entzündung im Alveolarraum und/oder Interstitium. Einteilung anatomisch (alveolär vs. interstitiell), nach Erreger, Histologie, Verlauf und Setting.'
  },
  {
    id: 'k6-10', sec: '6.1', p: 19, type: 'single',
    q: 'Was bezeichnet die Karnifikation als Komplikation einer Pneumonie?',
    opts: [
      'Fehlende Lyse mit bindegewebiger Organisation (fleischartig)',
      'Eitrige Einschmelzung mit Abszessbildung',
      'Hämatogene Streuung mit Abszessen in anderen Organen',
      'Fistel zwischen Bronchialsystem und Pleura'
    ],
    a: 0,
    ex: 'Karnifikation: fehlende Lyse → bindegewebige Organisation, fleischartig. Die anderen Optionen beschreiben Lungenabszess, Septikopyämie und bronchopleurale Fistel.'
  },
  {
    id: 'k6-11', sec: '6.1', p: 19, type: 'single',
    q: 'Welche Beschreibung passt zur Pneumocystis-Pneumonie (PcP)?',
    opts: [
      'Immunsuppression (z. B. HIV, CD4 < 200), schaumiges eosinophiles intraalveoläres Exsudat, Grocott-Färbung',
      'Hyaline Membranen nach Schock oder Sepsis',
      'Epitheloidzellige, nicht verkäsende Granulome mit Hilus-Lymphknoten',
      'Lobärer Befall mit roter und gelber Hepatisation'
    ],
    a: 0,
    ex: 'PcP: Immunsuppression (HIV, CD4 < 200), schaumiges, eosinophiles intraalveoläres Exsudat, Erregernachweis mit Grocott. Hyaline Membranen → DAD; nicht verkäsende Granulome → Sarkoidose; Hepatisation → Lobärpneumonie.'
  },
  {
    id: 'k6-12', sec: '6.1', p: 19, type: 'kprim',
    q: 'Pneumonie – welche Zuordnungen treffen zu?',
    st: [
      ['Interstitielle Pneumonie: vorwiegend viral (RSV, Influenza, CMV)', true],
      ['Nosokomiale Pneumonie: überwiegend Mykoplasmen', false],
      ['Aspergillom: saprophytische Besiedlung einer Kaverne', true],
      ['Rote Hepatisation: Tag 6–9', false]
    ],
    ex: 'Nosokomial > 60 % gramnegativ (Pseudomonas, Klebsiellen, E. coli). Die rote Hepatisation liegt an Tag 3–4; Tag 6–9 ist die gelbe Hepatisation.'
  },

  /* ---------- 6.2 Tuberkulose ---------- */
  {
    id: 'k6-13', sec: '6.2', p: '19–20', type: 'kprim', alt: '2010, 2015, 2018, 2021, 2022',
    q: 'Tuberkulose – welche Aussagen treffen zu?',
    st: [
      ['HIV ist ein wesentlicher Risikofaktor.', true],
      ['Das Granulom zeigt im Gegensatz zur Sarkoidose eine zentrale Nekrose.', true],
      ['Eine Silikose erhöht das Tbc-Risiko.', true],
      ['Die Primär-Tbc verläuft meist unbemerkt.', true]
    ],
    ex: 'Alle vier treffen zu. Weitere Risikofaktoren: Immunsuppression, Diabetes, Alkohol, Unterernährung, Migration/Armut. Die Erstinfektion heilt meist unbemerkt (wie ein grippaler Infekt) mit Narbe/Verkalkung aus.'
  },
  {
    id: 'k6-14', sec: '6.2', p: '19–20', type: 'single', alt: '2008',
    q: 'Tuberkulose – welche Aussage ist FALSCH?',
    opts: [
      'Die Sepsis tuberculosa acutissima Landouzy ist eine nekrotisierende Entzündung mit Entwicklung kleiner Granulome.',
      'Die Primär-Tbc wird oft als grippaler Infekt verkannt.',
      'Die Symptome der postprimären Tbc sind unspezifisch.',
      'Die Inzidenz in Deutschland liegt bei etwa 10/100.000 pro Jahr.',
      'Eine Silikose erhöht das Tbc-Risiko.'
    ],
    a: 0,
    ex: 'Sepsis Landouzy: anergische, hochakute Sepsis bei schwerer Immunschwäche – nekrotisierende Entzündung in zahlreichen Organen OHNE Granulombildung, hohe Letalität.'
  },
  {
    id: 'k6-15', sec: '6.2', p: 19, type: 'single',
    q: 'Woraus besteht der Primärkomplex der Tuberkulose?',
    opts: [
      'Ghon-Herd (subpleural im Mittel-/Untergeschoss) + Hilus-Lymphknoten',
      'Simon-Spitzenherd + Oberlappenkaverne',
      'Miliare Streuherde in mehreren Organen',
      'Tuberkulom + Atelektase'
    ],
    a: 0,
    ex: 'Erstinfektion: nach 3–6 Wochen Ghon-Herd + Hilus-LK = Primärkomplex. Simon-Spitzenherde und Miliar-Tbc entstehen durch hämatogene Streuung, Tuberkulom und Atelektasen bei Progression der Primär-Tbc.'
  },
  {
    id: 'k6-16', sec: '6.2', p: 19, type: 'single',
    q: 'Mit welcher Färbung werden Mykobakterien nachgewiesen?',
    opts: ['Ziehl-Neelsen', 'Grocott', 'Berliner Blau', 'Kongorot'],
    a: 0,
    ex: 'M. tuberculosis ist säurefest → Ziehl-Neelsen. Grocott → Pneumocystis; Berliner Blau → Eisen (Asbestkörperchen, Herzfehlerzellen); Kongorot → Amyloid.'
  },
  {
    id: 'k6-17', sec: '6.2', p: 19, type: 'single',
    q: 'Auf welcher Immunreaktion beruht die Granulombildung bei der Tuberkulose?',
    opts: ['Typ-IV-Reaktion (Th1, IFN-γ)', 'Typ-I-Reaktion (IgE)', 'Typ-II-Reaktion (zytotoxische Antikörper)', 'Typ-III-Reaktion (Immunkomplexe)'],
    a: 0,
    ex: 'Tbc: Typ-IV-Reaktion (Th1, IFN-γ = Basis des IGRA) → aktivierte Makrophagen = Epitheloidzellen + Langhans-Riesenzellen + Lymphozytenwall + zentrale Verkäsung.'
  },
  {
    id: 'k6-18', sec: '6.2', p: '19–20', type: 'match',
    q: 'Ordne die Tbc-Form ihrem Kennzeichen zu.',
    pairs: [
      ['Primärkomplex', 'Ghon-Herd + Hilus-Lymphknoten'],
      ['Hämatogene Streuung', 'Simon-Spitzenherde, Miliar-Tbc'],
      ['Sepsis Landouzy', 'Nekrotisierende Entzündung ohne Granulome'],
      ['Postprimäre Tbc', 'Endogene Reaktivierung, Oberlappenkaverne']
    ],
    ex: 'Postprimäre Tbc: meist bei Immunschwäche; 80 % Lunge (Oberlappen, Kaverne), 20 % extrapulmonal. Einbruch ins Bronchialsystem → „offene“ Tbc.'
  },
  {
    id: 'k6-19', sec: '6.2', p: 20, type: 'match',
    q: 'Ordne die extrapulmonale Tbc ihrem Befund zu.',
    pairs: [
      ['Urogenital-Tbc', 'Kittniere'],
      ['Knochen-Tbc', 'Spondylitis mit Gibbus und Senkungsabszess'],
      ['ZNS-Tbc', 'Meningitis']
    ],
    ex: 'Extrapulmonal (20 % der postprimären Tbc): Lymphknoten, Urogenital (Kittniere), Nebenniere, Knochen (Spondylitis tuberculosa), ZNS/Meningitis.'
  },

  /* ---------- 6.3 Sarkoidose ---------- */
  {
    id: 'k6-20', sec: '6.3', p: 20, type: 'single',
    q: 'Welcher histologische Befund ist typisch für die Sarkoidose?',
    opts: ['Epitheloidzellige, nicht verkäsende Granulome', 'Granulome mit zentraler Verkäsung', 'Hyaline Membranen', 'Hantelförmige Asbestkörperchen'],
    a: 0,
    ex: 'Sarkoidose: Multisystemerkrankung unklarer Ursache mit epitheloidzelligen, nicht verkäsenden Granulomen (CD4-Th1-Reaktion). Verkäsung → Tbc; hyaline Membranen → DAD.'
  },
  {
    id: 'k6-21', sec: '6.3', p: 20, type: 'match',
    q: 'Ordne den Röntgentyp der Sarkoidose seinem Befund zu.',
    pairs: [
      ['Typ I', 'Bihiläre Lymphadenopathie'],
      ['Typ II', 'Bihiläre Lymphadenopathie + Lungeninfiltrate'],
      ['Typ III', 'Nur Lungeninfiltrate'],
      ['Typ IV', 'Fibrose']
    ],
    ex: 'Röntgen-Typen: 0 kein Befund · I bihiläre Lymphadenopathie · II + Lungeninfiltrate · III nur Lunge · IV Fibrose.'
  },
  {
    id: 'k6-22', sec: '6.3', p: 20, type: 'single',
    q: 'Welcher BAL-Befund passt zur Sarkoidose?',
    opts: [
      'Lymphozytäre Alveolitis mit CD4/CD8 > 3,5',
      'Lymphozytäre Alveolitis mit erniedrigtem CD4/CD8',
      'Hyaline Membranen ohne Lymphozyten'
    ],
    a: 0,
    ex: 'Sarkoidose: lymphozytäre Alveolitis, CD4/CD8 > 3,5. Bei exogen-allergischer Alveolitis und HIV ist der Quotient erniedrigt.'
  },
  {
    id: 'k6-23', sec: '6.3', p: 20, type: 'kprim',
    q: 'Sarkoidose – welche Aussagen treffen zu?',
    st: [
      ['In ca. 90 % sind Lunge und Hilus-Lymphknoten betroffen.', true],
      ['In Riesenzellen finden sich Asteroid- und Schaumann-Körperchen.', true],
      ['Die Granulome zeigen eine zentrale Verkäsung.', false],
      ['Die Granulombildung ist eine CD8-T-Zell-Reaktion.', false]
    ],
    ex: 'Sarkoidose: nicht verkäsende Granulome durch eine CD4-Th1-Reaktion; Hyperkalzämie über die 1α-Hydroxylase der Makrophagen; Biopsie zum Ausschluss von Tbc, Fremdkörper, Hodgkin.'
  },

  /* ---------- 6.4 Diffuser Alveolarschaden ---------- */
  {
    id: 'k6-24', sec: '6.4', p: 20, type: 'kprim', alt: '2010, 2013, 2015, 2016, 2021',
    q: 'Diffuser Alveolarschaden (DAD) – welche Aussagen treffen zu?',
    st: [
      ['Vorherrschend sind intraalveoläre neutrophile Granulozyten.', false],
      ['Schock und Sepsis sind typische Ursachen.', true],
      ['Im Verlauf kommt es zur Organisation mit Pneumozyten-II-Proliferation und Fibrose.', true],
      ['Nach überlebter Akutphase kommt es nur selten zur Restitutio.', false]
    ],
    ex: 'Vorherrschender Befund sind hyaline Membranen (exsudative Phase). Überlebt der Patient die Akutphase, kommt es in der Mehrzahl zur Restitutio ad integrum, teils aber zur Wabenlunge. Beginn akut innerhalb von 24–48 h.'
  },
  {
    id: 'k6-25', sec: '6.4', p: 20, type: 'single',
    q: 'Welcher Befund herrscht in der exsudativen Phase des DAD vor?',
    opts: ['Hyaline Membranen', 'Intraalveoläre neutrophile Granulozyten', 'Epitheloidzellige Granulome', 'Fibroblastenfoci'],
    a: 0,
    ex: 'DAD: akuter alveolokapillärer Schaden mit Pneumozyten- und Endothelnekrosen, Ödem und hyalinen Membranen (vorherrschend). Fibroblastenfoci kennzeichnen die UIP.'
  },
  {
    id: 'k6-26', sec: '6.4', p: 20, type: 'single',
    q: 'Welche Ursache ist typisch für einen diffusen Alveolarschaden?',
    opts: ['Schock bzw. Sepsis', 'Asbestexposition', 'Schimmeliges Heu', 'α1-Antitrypsin-Mangel'],
    a: 0,
    ex: 'DAD-Ursachen: Schock, Sepsis, Infektion, Trauma, Aspiration, Drogen/Medikamente, Bestrahlung, metabolisch, hämatologisch. Asbest → Asbestose; Heu → Farmerlunge; α1-AT-Mangel → panlobuläres Emphysem.'
  },
  {
    id: 'k6-27', sec: '6.4', p: 20, type: 'single',
    q: 'Wie geht ein DAD aus, wenn der Patient die Akutphase überlebt?',
    opts: [
      'Meist Restitutio ad integrum, teils Wabenlunge',
      'Nur selten Restitutio',
      'Immer Übergang in eine Wabenlunge'
    ],
    a: 0,
    ex: 'In der Mehrzahl Restitutio ad integrum, teils aber Wabenlunge. Der Schock kann also Spätursache einer Lungenfibrose sein.'
  },

  /* ---------- 6.5 Interstitielle Lungenerkrankungen & Fibrose ---------- */
  {
    id: 'k6-28', sec: '6.5', p: '20–21', type: 'single', alt: '2008',
    q: 'Lungenfibrose – welche Aussage ist FALSCH?',
    opts: [
      'Das Caplan-Syndrom ist eine mögliche Komplikation der UIP.',
      'Ein Teil der idiopathischen interstitiellen Pneumonien ist durch Kortison und Rauchkarenz besserbar.',
      'Eine Lungenfibrose kann Spätfolge eines Schocks sein.',
      'In der Wabenlunge als Endzustand ist die Ätiologie oft nicht mehr bestimmbar.',
      'Die UIP verläuft progredient ohne nennenswerte therapeutische Beeinflussbarkeit.'
    ],
    a: 0,
    ex: 'Caplan-Syndrom = rheumatoide Arthritis + Pneumokoniose (Silikose/Kohle) mit Rheumaknoten in der Lunge – kein Zusammenhang mit der UIP.'
  },
  {
    id: 'k6-29', sec: '6.5', p: '20–21', type: 'single', alt: '2013',
    q: 'UIP (idiopathische Lungenfibrose) – welche Aussage ist FALSCH?',
    opts: [
      'Die UIP zeichnet sich durch ein gutes therapeutisches Ansprechen aus.',
      'Das histologische Bild ist zeitlich und räumlich heterogen.',
      'Die UIP verläuft langsam progredient.',
      'Es findet sich eine Pneumozyten-II-Hyperplasie.'
    ],
    a: 0,
    ex: 'UIP/IPF: ältere Menschen, unbekannte Ursache, langsam progredient, ohne nennenswerte therapeutische Beeinflussbarkeit (Kortison wirkungslos; heute Antifibrotika).'
  },
  {
    id: 'k6-30', sec: '6.5', p: '20–21', type: 'single', alt: 'Fragensammlung',
    q: 'UIP – welche Aussage ist FALSCH?',
    opts: [
      'Typischer Auslöser ist ein einseitiger schwerer Lungenschaden.',
      'Sie betrifft vor allem ältere Menschen.',
      'Sie ist subpleural und basal betont.',
      'Histologisch finden sich Fibroblastenfoci.',
      'Das Endstadium ist die Wabenlunge.'
    ],
    a: 0,
    ex: 'Die Ursache der UIP ist unbekannt (idiopathisch). Histo: subpleural/basal betont, herdförmige Fibroblastenproliferation („Fibroblastenfoci“), Pneumozyten-II-Hyperplasie → Wabenlunge.'
  },
  {
    id: 'k6-31', sec: '6.5', p: '20–21', type: 'single', alt: '2020',
    q: 'Interstitielle Lungenerkrankungen – welche Aussage trifft am WENIGSTEN zu?',
    opts: [
      'Der Fassthorax ist das morphologische Korrelat der ILD.',
      'Es besteht eine restriktive Ventilationsstörung.',
      'Die relative Einsekundenkapazität (FEV1/VC) ist normal bis erhöht.',
      'Typisch sind Belastungsdyspnoe und trockener Husten.',
      'Auskultatorisch findet sich Knisterrasseln.'
    ],
    a: 0,
    ex: 'ILD: restriktive Ventilationsstörung mit Erniedrigung aller Lungenvolumina, FEV1/VC normal bis erhöht. Kein Fassthorax – der gehört zum Emphysem.'
  },
  {
    id: 'k6-32', sec: '6.5', p: '20–21', type: 'kprim', alt: '2015',
    q: 'Welche der folgenden können eine interstitielle Lungenerkrankung verursachen?',
    st: [
      ['Asbest', true],
      ['Silikat', true],
      ['Beryllium', true],
      ['Therapeutische Bestrahlung', true]
    ],
    ex: 'Alle vier treffen zu. Weitere Ursachen: Viren, Hartmetall, organische Antigene (EAA), Medikamente (Amiodaron, Bleomycin, Methotrexat, Nitrofurantoin), Kollagenosen/RA, chronische Stauung, Urämie, Schock, idiopathisch.'
  },
  {
    id: 'k6-33', sec: '6.5', p: '20–21', type: 'single', alt: '2019',
    q: 'Ursachen der exogen-allergischen Alveolitis sind alle folgenden – AUSSER:',
    opts: [
      'Viren wie EBV oder CMV',
      'Schimmeliges Heu (Farmerlunge)',
      'Federn und Kot (Vogelhalterlunge)',
      'Thermoactinomyceten in Befeuchtern',
      'Bagasse (Bagassose)'
    ],
    a: 0,
    ex: 'EAA (Hypersensitivitätspneumonitis, Typ III + IV): Farmerlunge, Vogelhalterlunge, Befeuchter-/Klimaanlagenlunge, Schimmelpilze/Aspergillen, Bagassose. Nicht durch Viren (EBV, CMV).'
  },
  {
    id: 'k6-34', sec: '6.5', p: 21, type: 'kprim', alt: '2022',
    q: 'Bei welchen Erkrankungen finden sich mehrkernige Riesenzellen in der Lunge?',
    st: [
      ['Aspiration', true],
      ['Klebsiellen-Pneumonie', false],
      ['Tuberkulose', true],
      ['Sarkoidose', true]
    ],
    ex: 'Laut Altklausur-Lösung: Aspiration ✓, Tbc ✓ (Langhans-Riesenzellen), Sarkoidose ✓ (Riesenzellen mit Asteroid-/Schaumann-Körperchen); Klebsiellen ✗.'
  },
  {
    id: 'k6-35', sec: '6.5', p: 20, type: 'match',
    q: 'Ordne die exogen-allergische Alveolitis ihrem Auslöser zu.',
    pairs: [
      ['Farmerlunge', 'Saccharopolyspora rectivirgula (schimmeliges Heu)'],
      ['Vogelhalterlunge', 'Federn/Kot'],
      ['Befeuchterlunge', 'Thermoactinomyceten']
    ],
    ex: 'EAA: lymphozytäre Alveolitis, kleine nicht verkäsende Granulome, Bronchiolitis; Therapie Antigenkarenz.'
  },
  {
    id: 'k6-36', sec: '6.5', p: 20, type: 'single',
    q: 'Welche Histologie passt zur exogen-allergischen Alveolitis?',
    opts: [
      'Lymphozytäre Alveolitis, kleine nicht verkäsende Granulome, Bronchiolitis',
      'Hyaline Membranen, granulozytenbetont',
      'Zwiebelschalenartige hyalinisierte Knötchen mit doppelbrechenden Partikeln',
      'Hantelförmige eisenhaltige Körperchen'
    ],
    a: 0,
    ex: 'EAA: lymphozytäre Alveolitis, kleine nicht verkäsende Granulome, Bronchiolitis. Hyaline Membranen → DAD/AIP; Silikoseknötchen → Silikose; Asbestkörperchen → Asbestose.'
  },
  {
    id: 'k6-37', sec: '6.5', p: 20, type: 'single',
    q: 'Welche Hypersensitivitätstypen liegen der exogen-allergischen Alveolitis zugrunde?',
    opts: ['Typ III + IV', 'Nur Typ I', 'Nur Typ II'],
    a: 0,
    ex: 'Exogen-allergische Alveolitis (Hypersensitivitätspneumonitis): Typ III + IV.'
  },
  {
    id: 'k6-38', sec: '6.5', p: 20, type: 'single',
    q: 'Was ist histologisch typisch für die UIP (idiopathische Lungenfibrose)?',
    opts: [
      'Zeitlich und räumlich heterogenes Bild mit Fibroblastenfoci, subpleural/basal betont',
      'Hyaline Membranen, granulozytenbetont',
      'Epitheloidzellige, nicht verkäsende Granulome',
      'Zeitlich homogenes Bild ohne Fibrose'
    ],
    a: 0,
    ex: 'UIP: zeitlich und räumlich heterogen, subpleural/basal betont, Fibroblastenfoci, Pneumozyten-II-Hyperplasie → Wabenlunge. Hyaline Membranen → AIP (idiopathischer DAD).'
  },
  {
    id: 'k6-39', sec: '6.5', p: 20, type: 'match',
    q: 'Ordne die idiopathische interstitielle Pneumonie ihrem Kennzeichen zu.',
    pairs: [
      ['UIP/IPF', 'Ältere, Fibroblastenfoci, Kortison wirkungslos'],
      ['DIP/RB-ILD', 'Rauchassoziiert, durch Rauchkarenz besserbar'],
      ['AIP', 'Idiopathischer DAD mit hyalinen Membranen']
    ],
    ex: 'Andere idiopathische interstitielle Pneumonien (NSIP, DIP/RB-ILD, COP) sind teilweise durch Kortikoide und Rauchkarenz besserbar – anders als die UIP.'
  },
  {
    id: 'k6-40', sec: '6.5', p: 20, type: 'single',
    q: 'Welcher Befund ist typisch für die Silikose?',
    opts: [
      'Hyalinisierte, zwiebelschalenartige Knötchen mit doppelbrechenden Partikeln',
      'Hantelförmige, eisenhaltige Asbestkörperchen',
      'Schaumiges, eosinophiles intraalveoläres Exsudat',
      'Nicht verkäsende Granulome mit Schaumann-Körperchen'
    ],
    a: 0,
    ex: 'Silikose: Quarz → Makrophagen → Silikoseknötchen (hyalinisiert, zwiebelschalenartig, doppelbrechend), Schwielen, Hilus-LK mit Eierschalenverkalkung, Emphysem.'
  },
  {
    id: 'k6-41', sec: '6.5', p: 20, type: 'kprim',
    q: 'Silikose – welche Aussagen treffen zu?',
    st: [
      ['Die Hilus-Lymphknoten zeigen eine Eierschalenverkalkung.', true],
      ['Die Silikoseknötchen enthalten keine doppelbrechenden Partikel.', false],
      ['Das Lungenkrebsrisiko ist nicht erhöht.', false],
      ['Das Caplan-Syndrom ist die Kombination aus Silikose und UIP.', false]
    ],
    ex: 'Silikoseknötchen enthalten doppelbrechende Partikel; Tbc- und Lungenkrebsrisiko sind erhöht. Caplan-Syndrom = RA + Pneumokoniose mit Rheumaknoten in der Lunge.'
  },
  {
    id: 'k6-42', sec: '6.5', p: 20, type: 'single',
    q: 'Was ist das Caplan-Syndrom?',
    opts: [
      'Rheumatoide Arthritis + Pneumokoniose mit Rheumaknoten in der Lunge',
      'Eine Komplikation der UIP',
      'Asbestose mit Pleuramesotheliom',
      'Sarkoidose mit Hyperkalzämie'
    ],
    a: 0,
    ex: 'Caplan-Syndrom = RA + Pneumokoniose (Silikose/Kohle) mit Rheumaknoten in der Lunge; kein Zusammenhang mit der UIP (Altfrage 2008).'
  },

  /* ---------- 6.6 Asbest & Mesotheliom ---------- */
  {
    id: 'k6-43', sec: '6.6', p: 21, type: 'single', alt: '2020',
    q: 'Asbestose – welche Aussage ist FALSCH?',
    opts: [
      'Pleuraplaques sind häufig Vorstufe eines Mesothelioms.',
      'Die häufigste Komplikation ist die Pleuritis.',
      'Etwa 50 % der Patienten sterben an Tumoren.',
      'Das Mesotheliom-Risiko ist schon ab 1 Faserjahr erhöht.',
      'Rauchen und Asbest wirken überadditiv.'
    ],
    a: 0,
    ex: 'Pleuraplaques (hyalin, verkalkt) sind ein „Marker der Exposition“, keine Präkanzerose.'
  },
  {
    id: 'k6-44', sec: '6.6', p: 21, type: 'single',
    q: 'Wie sehen Asbestkörperchen aus?',
    opts: ['Eisenhaltig, hantelförmig, Berliner-Blau-positiv', 'Doppelbrechend, in zwiebelschalenartigen Knötchen', 'Sternförmig in Riesenzellen', 'Kongophil'],
    a: 0,
    ex: 'Asbestkörperchen: eisenhaltig, hantelförmig (Berliner Blau). Zwiebelschalenartige Knötchen → Silikose; sternförmige Asteroid-Körperchen → Sarkoidose; kongophil → Amyloid.'
  },
  {
    id: 'k6-45', sec: '6.6', p: 21, type: 'match',
    q: 'Ordne die Berufskrankheit ihrer Erkrankung zu.',
    pairs: [
      ['BK 4103', 'Asbestose'],
      ['BK 4104', 'Lungen-/Larynxkarzinom durch Asbest'],
      ['BK 4105', 'Mesotheliom']
    ],
    ex: 'Berufskrankheiten: BK 4103 (Asbestose), 4104 (Lungen-/Larynx-Ca), 4105 (Mesotheliom).'
  },
  {
    id: 'k6-46', sec: '6.6', p: 21, type: 'single',
    q: 'Ab welcher Asbestbelastung ist das Bronchialkarzinomrisiko verdoppelt?',
    opts: ['Nach 25 Faserjahren', 'Ab ≤ 1 Faserjahr', 'Nach 5 Faserjahren', 'Nach 100 Faserjahren'],
    a: 0,
    ex: 'Bronchial-Ca ×2 nach 25 Faserjahren (1 Faserjahr = 10⁶ Fasern/m³ × 1 Jahr). Das Pleuramesotheliom-Risiko ist schon ab ≤ 1 Faserjahr erhöht.'
  },
  {
    id: 'k6-47', sec: '6.6', p: 21, type: 'single',
    q: 'Welches Immunprofil passt zum malignen Pleuramesotheliom?',
    opts: [
      'Calretinin, WT1, D2-40, CK5/6 positiv; Adeno-Marker negativ',
      'TTF-1 und Napsin A positiv',
      'Synaptophysin, Chromogranin und CD56 positiv',
      'p40 positiv, Calretinin negativ'
    ],
    a: 0,
    ex: 'Mesotheliom: Calretinin, WT1, D2-40, CK5/6 (+), Adeno-Marker (−), BAP1-Verlust. TTF-1/Napsin A → Adenokarzinom; Synaptophysin → kleinzelliges Ca; p40 → Plattenepithel-Ca.'
  },
  {
    id: 'k6-48', sec: '6.6', p: 21, type: 'kprim',
    q: 'Malignes Pleuramesotheliom – welche Aussagen treffen zu?',
    st: [
      ['Es wächst diffus pleuraummauernd („Panzer“).', true],
      ['Es ist TTF-1-positiv.', false],
      ['Die Prognose ist gut.', false],
      ['Pleuraplaques sind seine obligate Vorstufe.', false]
    ],
    ex: 'Mesotheliom: Erguss, Thoraxschmerz, Dyspnoe; epitheloid/sarkomatoid/biphasisch; Adeno-Marker (wie TTF-1) negativ; sehr schlechte Prognose (Monate). Pleuraplaques sind keine Präkanzerose.'
  },

  /* ---------- 6.7 Emphysem, COPD, Kreislauf ---------- */
  {
    id: 'k6-49', sec: '6.7', p: 21, type: 'single', alt: '2022, Fragensammlung',
    q: 'Lungenemphysem – welche Aussage ist FALSCH?',
    opts: [
      'Bei chronischer Bronchitis entsteht typischerweise ein panlobuläres Emphysem.',
      'Das Emphysem ist eine Manifestation der COPD.',
      'Rauchen ist die Hauptursache.',
      'Typisch sind Fassthorax sowie leise Atemgeräusche und Herztöne.',
      'Ein α1-Antitrypsin-Mangel kann ein Emphysem verursachen.'
    ],
    a: 0,
    ex: 'Chronische Bronchitis/Rauchen → zentrilobuläres (zentroazinäres) Emphysem der Oberlappen. Panlobulär → α1-Antitrypsin-Mangel, Unterlappen.'
  },
  {
    id: 'k6-50', sec: '6.7', p: 21, type: 'single', alt: '2015, 2019, 2021',
    q: 'Lungeninfarkt – welche Aussage ist FALSCH?',
    opts: [
      'Lungeninfarkte liegen häufig in zentralen Lungenabschnitten.',
      'Sie entstehen durch Thromboembolie in kleine periphere Pulmonalarterienäste.',
      'Sie sind hämorrhagisch.',
      'Sie liegen subpleural.',
      'Sie entstehen v. a. bei zusätzlicher Linksherzinsuffizienz.'
    ],
    a: 0,
    ex: 'Lungeninfarkt: Thromboembolie in kleine periphere Pulmonalarterienäste; v. a. bei zusätzlicher Lungenstauung (Linksherzinsuffizienz), sonst reicht meist die bronchialarterielle Versorgung; hämorrhagisch, keilförmig, subpleural/peripher, Pleuritis. Nicht zentral.',
    dis: 'Im Original lautete eine weitere Option „entstehen durch Thrombemboli in Bronchialarterienästen“. Die ist streng genommen ebenfalls unpräzise, denn es sind Pulmonalarterienäste. Gesucht war laut Lösung aber „zentral“. Die Option wurde hier durch die korrekte Formulierung (Pulmonalarterienäste) ersetzt.'
  },
  {
    id: 'k6-51', sec: '6.7', p: 21, type: 'match',
    q: 'Ordne den Emphysemtyp seiner Ursache bzw. Lokalisation zu.',
    pairs: [
      ['Zentrilobulär', 'Rauchen, chronische Bronchitis; Oberlappen'],
      ['Panlobulär', 'α1-Antitrypsin-Mangel; Unterlappen'],
      ['Narbenemphysem', 'Um Narben (Tbc, Silikose)'],
      ['Interstitielles Emphysem', 'Luft im Interstitium (Beatmung, Trauma)'],
      ['Altersemphysem', '„Altersblähung“ ohne Destruktion']
    ],
    ex: 'Außerdem: Überdehnungsemphysem – kompensatorisch nach Teilresektion/Schrumpfung.'
  },
  {
    id: 'k6-52', sec: '6.7', p: 21, type: 'single',
    q: 'Wie ist die chronische Bronchitis definiert?',
    opts: [
      'Husten mit Auswurf an den meisten Tagen über ≥ 3 Monate in 2 aufeinanderfolgenden Jahren',
      'Irreversible Erweiterung der Lufträume distal der terminalen Bronchiolen',
      'Akuter alveolokapillärer Schaden mit hyalinen Membranen'
    ],
    a: 0,
    ex: 'Chronische Bronchitis: Becherzellhyperplasie, Schleimdrüsenhypertrophie (Reid-Index ↑). Die Erweiterung distal der terminalen Bronchiolen ist das Emphysem, der alveolokapilläre Schaden der DAD.'
  },
  {
    id: 'k6-53', sec: '6.7', p: 21, type: 'single',
    q: 'Was zeigt die chronische Stauungslunge bei Linksherzinsuffizienz?',
    opts: [
      'Braune Induration mit Herzfehlerzellen (Siderophagen, Berliner Blau)',
      'Hyaline Membranen',
      'Wabenlunge mit Fibroblastenfoci',
      'Silikoseknötchen'
    ],
    a: 0,
    ex: 'Stauungslunge: akut Lungenödem, chronisch braune Induration mit Herzfehlerzellen (Siderophagen, Berliner Blau).'
  },
  {
    id: 'k6-54', sec: '6.7', p: 21, type: 'kprim',
    q: 'Lungenemphysem – welche Aussagen treffen zu?',
    st: [
      ['Es ist eine irreversible Erweiterung der Lufträume distal der terminalen Bronchiolen mit Wandzerstörung.', true],
      ['Der Klopfschall ist hypersonor.', true],
      ['Das panlobuläre Emphysem betrifft bevorzugt die Oberlappen.', false],
      ['Das Altersemphysem geht mit ausgeprägter Wanddestruktion einher.', false]
    ],
    ex: 'Emphysem-Klinik: Fassthorax, abgeschwächtes Atemgeräusch, hypersonorer Klopfschall, leise Herztöne, „Pink Puffer“. Panlobulär → Unterlappen; Altersemphysem = „Altersblähung“ ohne Destruktion.'
  },

  /* ---------- 6.8 Lungenkarzinom ---------- */
  {
    id: 'k6-55', sec: '6.8', p: 22, type: 'single', alt: '2015, 2018, 2022, 2025',
    q: 'Histologie: zellreich, chromatindichte Kerne ohne bzw. mit minimalem Zytoplasma, Synaptophysin-positiv. Welche Diagnose passt?',
    opts: ['Kleinzelliges Karzinom', 'Plattenepithelkarzinom', 'Adenokarzinom', 'Großzelliges Karzinom'],
    a: 0,
    ex: 'SCLC: kleine Zellen, chromatindichte Kerne ohne/mit minimalem Zytoplasma, Kernmoulding, keine Nukleolen, Quetschartefakte, viele Mitosen; Synaptophysin, Chromogranin, CD56.'
  },
  {
    id: 'k6-56', sec: '6.8', p: 22, type: 'single', alt: '2013, 2016',
    q: 'Histologie: teils helle, teils chromatindichte Kerne, breites Zytoplasma, Verhornung und Interzellularbrücken. Welche Diagnose passt?',
    opts: ['Plattenepithelkarzinom', 'Kleinzelliges Karzinom', 'Adenokarzinom', 'Malignes Mesotheliom'],
    a: 0,
    ex: 'Plattenepithelkarzinom: zentral (Hilus), Verhornung und/oder Interzellularbrücken; p40, CK5/6; starke Raucherassoziation.'
  },
  {
    id: 'k6-57', sec: '6.8', p: 22, type: 'single', alt: '2008',
    q: 'Bronchialkarzinom – welche Aussage trifft zu?',
    opts: [
      'Paraneoplastisch kann eine Hyperkalzämie auftreten.',
      'Es gibt typische Frühsymptome.',
      'Das kleinzellige Karzinom macht ca. 70 % aus.',
      'Das kleinzellige Karzinom wird primär operiert.',
      'Das Adenokarzinom liegt häufig zentral.'
    ],
    a: 0,
    ex: 'Hyperkalzämie (PTHrP) beim Plattenepithel-Ca. Keine Frühsymptome; SCLC ~15–25 %, Therapie Radiochemotherapie; Adenokarzinom peripher.'
  },
  {
    id: 'k6-58', sec: '6.8', p: 22, type: 'single', alt: '2023, 2024',
    q: 'Lungenkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'NSCLC zeigen häufiger als SCLC eine paraneoplastische Symptomatik.',
      'Das Adenokarzinom ist geringer mit Rauchen assoziiert.',
      'Es gibt keine Frühsymptome.',
      'Die Unterscheidung SCLC/NSCLC ist therapierelevant.',
      'Das Adenokarzinom liegt meist peripher.'
    ],
    a: 0,
    ex: 'Das SCLC hat die häufigsten Paraneoplasien (ADH → SIADH, ACTH → Cushing, Lambert-Eaton).'
  },
  {
    id: 'k6-59', sec: '6.8', p: 22, type: 'single', alt: '2020',
    q: 'Welches Wachstumsmuster kennzeichnet das nicht invasive (in-situ) Adenokarzinom der Lunge?',
    opts: ['Rein lepidisch (entlang der Alveolarwände)', 'Mikropapillär', 'Solide', 'Azinär'],
    a: 0,
    ex: 'Die nicht invasive Form ist rein lepidisch (früher „bronchioloalveolär“). Azinär, papillär, mikropapillär und solide sind Muster des invasiven Adenokarzinoms.'
  },
  {
    id: 'k6-60', sec: '6.8', p: 22, type: 'match',
    q: 'Ordne den Thoraxtumor seinen Immunmarkern zu.',
    pairs: [
      ['Adenokarzinom', 'TTF-1, Napsin A'],
      ['Plattenepithelkarzinom', 'p40, CK5/6'],
      ['Kleinzelliges Karzinom', 'Synaptophysin, Chromogranin, CD56'],
      ['Pleuramesotheliom', 'Calretinin, WT1, D2-40']
    ],
    ex: 'Das Mesotheliom ist außerdem CK5/6-positiv und Adeno-Marker-negativ.'
  },
  {
    id: 'k6-61', sec: '6.8', p: 22, type: 'match',
    q: 'Ordne die Paraneoplasie des Lungenkarzinoms ihrem Mediator zu.',
    pairs: [
      ['Hyperkalzämie (Plattenepithel-Ca)', 'PTHrP'],
      ['SIADH (SCLC)', 'ADH'],
      ['Cushing-Syndrom (SCLC)', 'ACTH']
    ],
    ex: 'Das SCLC hat die häufigsten Paraneoplasien (SIADH, Cushing, Lambert-Eaton); beim Plattenepithel-Ca ist die Hyperkalzämie durch PTHrP typisch.'
  },
  {
    id: 'k6-62', sec: '6.8', p: 22, type: 'single',
    q: 'Welcher Typ ist heute der häufigste Lungenkarzinomtyp?',
    opts: ['Adenokarzinom', 'Plattenepithelkarzinom', 'Kleinzelliges Karzinom', 'Großzelliges Karzinom'],
    a: 0,
    ex: 'Das Adenokarzinom ist heute der häufigste Typ und der häufigste Tumor bei Nichtrauchern/Frauen.'
  },
  {
    id: 'k6-63', sec: '6.8', p: 22, type: 'kprim',
    q: 'Kleinzelliges Lungenkarzinom (SCLC) – welche Aussagen treffen zu?',
    st: [
      ['Es metastasiert früh (Hirn, Leber, Nebenniere, Knochen).', true],
      ['Es zeigt prominente Nukleolen.', false],
      ['Es wird in frühen Stadien primär operiert.', false],
      ['Es hat eine bessere Prognose als das NSCLC.', false]
    ],
    ex: 'SCLC: zentral, stark raucherassoziiert, früh metastasierend, keine Nukleolen; Radiochemotherapie; initial chemosensibel, Prognose sehr schlecht. Operiert werden NSCLC in frühen Stadien; NSCLC hat eine etwas bessere Prognose.'
  },
  {
    id: 'k6-64', sec: '6.8', p: 22, type: 'kprim',
    q: 'Adenokarzinom der Lunge – welche Aussagen treffen zu?',
    st: [
      ['Es liegt meist peripher.', true],
      ['Es ist der häufigste Typ bei Nichtrauchern und Frauen.', true],
      ['Es ist typischerweise p40-positiv.', false],
      ['EGFR-Mutationen finden sich v. a. bei Rauchern.', false]
    ],
    ex: 'Adenokarzinom: TTF-1, Napsin A (p40 → Plattenepithel-Ca). EGFR v. a. bei Adeno/Nichtrauchern/Asiaten, KRAS bei Rauchern.'
  },
  {
    id: 'k6-65', sec: '6.8', p: 22, type: 'single',
    q: 'Was ist der wichtigste Risikofaktor des Lungenkarzinoms?',
    opts: ['Rauchen', 'Radon', 'Asbest', 'Dieselabgase'],
    a: 0,
    ex: 'Rauchen ist der wichtigste RF (Dauer > Menge; Aufhören senkt das Risiko); ferner Asbest, Radon, Dieselabgase, Arsen, Chrom, Nickel, Uran, Narben.'
  },
  {
    id: 'k6-66', sec: '6.8', p: '21–22', type: 'single',
    q: 'Welcher Thoraxtumor hat eine gute Prognose?',
    opts: ['Karzinoid (NET G1/G2)', 'Kleinzelliges Karzinom', 'Malignes Pleuramesotheliom'],
    a: 0,
    ex: 'Karzinoid (typisch/atypisch): zentral, NET G1/G2, gute Prognose. SCLC und Mesotheliom haben eine sehr schlechte Prognose.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k6-t01', sec: '6.1', p: 19, type: 'tf', a: false, q: 'Die gelbe Hepatisation der Lobärpneumonie tritt am 1.–2. Tag auf.', ex: 'Gelbe Hepatisation (eitrig): Tag 6–9 (Altfrage 2008).' },
  { id: 'k6-t02', sec: '6.1', p: 19, type: 'tf', a: true, q: 'Die rote Hepatisation entspricht einer hämorrhagisch-fibrinösen Entzündung.', ex: 'Rote Hepatisation (Tag 3–4): Erythrozyten + Fibrin, leberartig fest.' },
  { id: 'k6-t03', sec: '6.1', p: 19, type: 'tf', a: false, q: 'Die Lungenembolie ist eine typische Komplikation der Lobärpneumonie.', ex: 'Keine Lungenembolie (Altfrage 2015).' },
  { id: 'k6-t04', sec: '6.1', p: 19, type: 'tf', a: true, q: 'Bei der Lobärpneumonie verläuft die Entzündung synchron in einem Lappen.', ex: 'Lobärpneumonie: synchron in einem Lappen; Bronchopneumonie: herdförmig, asynchron.' },
  { id: 'k6-t05', sec: '6.1', p: 19, type: 'tf', a: false, q: 'Bei nosokomialen Pneumonien überwiegen grampositive Erreger.', ex: 'Nosokomial > 60 % gramnegativ (Pseudomonas, Klebsiellen, E. coli).' },
  { id: 'k6-t06', sec: '6.1', p: 19, type: 'tf', a: true, q: 'Bei der Pneumocystis-Pneumonie gelingt der Erregernachweis mit der Grocott-Färbung.', ex: 'PcP: Erregernachweis mit Grocott.' },
  { id: 'k6-t07', sec: '6.1', p: 19, type: 'tf', a: false, q: 'Das Aspergillom ist eine invasive Form der Aspergillose.', ex: 'Aspergillus: allergisch, saprophytisch (= Aspergillom in Kaverne) oder invasiv.' },
  { id: 'k6-t08', sec: '6.1', p: 19, type: 'tf', a: true, q: 'Eine septikopyämische Pneumonie entsteht durch hämatogene Streuung, z. B. bei Endokarditis.', ex: 'Septikopyämische Pneumonie: hämatogene Streuung, z. B. von Osteomyelitis oder Endokarditis.' },
  { id: 'k6-t09', sec: '6.2', p: 19, type: 'tf', a: true, q: 'Mykobakterien sind säurefest und werden mit der Ziehl-Neelsen-Färbung dargestellt.', ex: 'M. tuberculosis: säurefest, Ziehl-Neelsen.' },
  { id: 'k6-t10', sec: '6.2', p: 19, type: 'tf', a: true, q: 'Die Th1-Reaktion mit IFN-γ ist die Grundlage des IGRA.', ex: 'Typ-IV-Reaktion (Th1, IFN-γ = Basis des IGRA).' },
  { id: 'k6-t11', sec: '6.2', p: 19, type: 'tf', a: false, q: 'Der Ghon-Herd liegt typischerweise in der Lungenspitze.', ex: 'Ghon-Herd: Mittel-/Untergeschoss, subpleural. Spitzenherde (Simon) entstehen durch hämatogene Streuung.' },
  { id: 'k6-t12', sec: '6.2', p: 19, type: 'tf', a: false, q: 'Simon-Spitzenherde entsprechen dem Primärherd der Erstinfektion.', ex: 'Primärherd = Ghon-Herd. Simon-Spitzenherde entstehen durch hämatogene Streuung bei Progression.' },
  { id: 'k6-t13', sec: '6.2', p: 20, type: 'tf', a: false, q: 'Bei der Sepsis Landouzy entstehen zahlreiche kleine Granulome.', ex: 'Sepsis Landouzy: nekrotisierende Entzündung OHNE Granulombildung (Altfrage 2008).' },
  { id: 'k6-t14', sec: '6.2', p: 20, type: 'tf', a: true, q: 'Die postprimäre Tbc betrifft zu ca. 80 % die Lunge, v. a. den Oberlappen.', ex: 'Postprimäre Tbc: 80 % Lunge (Oberlappen, Kaverne), 20 % extrapulmonal.' },
  { id: 'k6-t15', sec: '6.2', p: 20, type: 'tf', a: true, q: 'Die Kittniere ist eine Manifestation der Urogenital-Tbc.', ex: 'Extrapulmonal: Urogenital (Kittniere), Nebenniere, Knochen, ZNS.' },
  { id: 'k6-t16', sec: '6.2', p: 19, type: 'tf', a: false, q: 'Die Primär-Tbc verläuft meist mit schwerer Symptomatik.', ex: 'Die Erstinfektion heilt meist unbemerkt (wie ein grippaler Infekt) aus.' },
  { id: 'k6-t17', sec: '6.2', p: 20, type: 'tf', a: true, q: 'Die Spondylitis tuberculosa kann zu Gibbus und Senkungsabszess führen.', ex: 'Knochen-Tbc: Spondylitis tuberculosa mit Gibbus und Senkungsabszess.' },
  { id: 'k6-t18', sec: '6.3', p: 20, type: 'tf', a: false, q: 'Die Granulome der Sarkoidose sind verkäsend.', ex: 'Sarkoidose: epitheloidzellige, nicht verkäsende Granulome.' },
  { id: 'k6-t19', sec: '6.3', p: 20, type: 'tf', a: true, q: 'Bei der Sarkoidose ist der CD4/CD8-Quotient in der BAL erhöht.', ex: 'Sarkoidose: CD4/CD8 > 3,5.' },
  { id: 'k6-t20', sec: '6.3', p: 20, type: 'tf', a: false, q: 'Bei der exogen-allergischen Alveolitis ist der CD4/CD8-Quotient in der BAL erhöht.', ex: 'Bei EAA und HIV ist der CD4/CD8-Quotient erniedrigt.' },
  { id: 'k6-t21', sec: '6.3', p: 20, type: 'tf', a: true, q: 'Röntgen-Typ I der Sarkoidose ist die bihiläre Lymphadenopathie.', ex: 'Typ I: bihiläre Lymphadenopathie; II + Lungeninfiltrate; III nur Lunge; IV Fibrose.' },
  { id: 'k6-t22', sec: '6.4', p: 20, type: 'tf', a: true, q: 'Beim DAD sind hyaline Membranen der vorherrschende Befund der exsudativen Phase.', ex: 'DAD: Pneumozyten- und Endothelnekrosen, Ödem, hyaline Membranen (vorherrschend).' },
  { id: 'k6-t23', sec: '6.4', p: 20, type: 'tf', a: false, q: 'Beim DAD dominieren intraalveoläre neutrophile Granulozyten.', ex: 'Vorherrschend sind hyaline Membranen, nicht Neutrophile (Altfrage).' },
  { id: 'k6-t24', sec: '6.4', p: 20, type: 'tf', a: true, q: 'Der DAD beginnt akut innerhalb von 24–48 h.', ex: 'Akuter Beginn innerhalb von 24–48 h → respiratorisches Versagen (ARDS).' },
  { id: 'k6-t25', sec: '6.4', p: 20, type: 'tf', a: false, q: 'Nach überlebter Akutphase eines DAD kommt es nur selten zur Restitutio ad integrum.', ex: 'In der Mehrzahl kommt es zur Restitutio ad integrum, teils zur Wabenlunge.' },
  { id: 'k6-t26', sec: '6.4', p: 20, type: 'tf', a: true, q: 'Ein Schock kann Spätursache einer Lungenfibrose sein.', ex: 'Über den DAD kann ein Schock zur Wabenlunge führen.' },
  { id: 'k6-t27', sec: '6.5', p: 20, type: 'tf', a: true, q: 'Interstitielle Lungenerkrankungen führen zu einer restriktiven Ventilationsstörung.', ex: 'Restriktiv mit Erniedrigung aller Lungenvolumina und normaler bis erhöhter FEV1/VC.' },
  { id: 'k6-t28', sec: '6.5', p: 20, type: 'tf', a: false, q: 'Der Fassthorax ist das morphologische Korrelat interstitieller Lungenerkrankungen.', ex: 'Der Fassthorax gehört zum Emphysem (Altfrage 2020).' },
  { id: 'k6-t29', sec: '6.5', p: 20, type: 'tf', a: false, q: 'Die UIP spricht gut auf Kortison an.', ex: 'UIP: Kortison wirkungslos; heute Antifibrotika (Altfrage 2013).' },
  { id: 'k6-t30', sec: '6.5', p: 20, type: 'tf', a: true, q: 'Die Wabenlunge ist das Endstadium vieler Lungenfibrosen.', ex: 'Wabenlunge = Endstadium vieler Fibrosen; die Ätiologie ist dann oft nicht mehr bestimmbar.' },
  { id: 'k6-t31', sec: '6.5', p: 20, type: 'tf', a: true, q: 'Amiodaron kann eine Lungenfibrose auslösen.', ex: 'Medikamente: Amiodaron, Bleomycin, Methotrexat, Nitrofurantoin.' },
  { id: 'k6-t32', sec: '6.5', p: 20, type: 'tf', a: false, q: 'Die exogen-allergische Alveolitis wird typischerweise durch Viren wie EBV oder CMV ausgelöst.', ex: 'EAA nicht durch Viren (Altfrage 2019).' },
  { id: 'k6-t33', sec: '6.5', p: 20, type: 'tf', a: true, q: 'Die Therapie der exogen-allergischen Alveolitis ist die Antigenkarenz.', ex: 'EAA: Therapie Antigenkarenz.' },
  { id: 'k6-t34', sec: '6.5', p: 20, type: 'tf', a: true, q: 'Bei der Silikose zeigen die Hilus-Lymphknoten eine Eierschalenverkalkung.', ex: 'Silikose: Hilus-LK mit Eierschalenverkalkung.' },
  { id: 'k6-t35', sec: '6.5', p: 20, type: 'tf', a: false, q: 'Das Caplan-Syndrom ist eine Komplikation der UIP.', ex: 'Caplan = RA + Pneumokoniose mit Rheumaknoten; kein Zusammenhang mit der UIP (Altfrage 2008).' },
  { id: 'k6-t36', sec: '6.5', p: 20, type: 'tf', a: false, q: 'Die akute interstitielle Pneumonie (AIP) ist lymphozytenbetont und zeigt keine hyalinen Membranen.', ex: 'AIP = idiopathischer DAD: hyaline Membranen, granulozytenbetont.' },
  { id: 'k6-t37', sec: '6.6', p: 21, type: 'tf', a: false, q: 'Pleuraplaques sind eine Präkanzerose des Mesothelioms.', ex: 'Pleuraplaques: „Marker der Exposition“, keine Präkanzerose (Altfrage 2020).' },
  { id: 'k6-t38', sec: '6.6', p: 21, type: 'tf', a: true, q: 'Die häufigste Pleurakomplikation der Asbestexposition ist die Asbestpleuritis mit rezidivierenden Ergüssen.', ex: 'Pleura: Plaques, diffuse Pleurafibrose, Asbestpleuritis/rezidivierende Ergüsse (häufigste Komplikation).' },
  { id: 'k6-t39', sec: '6.6', p: 21, type: 'tf', a: true, q: 'Rauchen und Asbest wirken beim Lungenkrebsrisiko überadditiv.', ex: 'Rauchen + Asbest wirken überadditiv (multiplikativ).' },
  { id: 'k6-t40', sec: '6.6', p: 21, type: 'tf', a: true, q: 'Das Pleuramesotheliom-Risiko ist schon ab ≤ 1 Faserjahr erhöht.', ex: 'Mesotheliom schon ab ≤ 1 Faserjahr; Bronchial-Ca ×2 nach 25 Faserjahren.' },
  { id: 'k6-t41', sec: '6.6', p: 21, type: 'tf', a: false, q: 'Asbestassoziierte Tumoren treten typischerweise innerhalb von 1–2 Jahren nach der Exposition auf.', ex: 'Latenz 15–40 Jahre.' },
  { id: 'k6-t42', sec: '6.6', p: 21, type: 'tf', a: false, q: 'Das maligne Pleuramesotheliom hat eine gute Prognose.', ex: 'Sehr schlechte Prognose (Monate).' },
  { id: 'k6-t43', sec: '6.6', p: 21, type: 'tf', a: false, q: 'Die Asbestose betrifft vor allem die Lungenoberfelder.', ex: 'Asbestose: interstitielle Fibrose der Unterfelder, subpleural.' },
  { id: 'k6-t44', sec: '6.7', p: 21, type: 'tf', a: false, q: 'Das panlobuläre Emphysem ist typisch für die chronische Bronchitis des Rauchers.', ex: 'Rauchen/chronische Bronchitis → zentrilobulär (Altfrage 2022).' },
  { id: 'k6-t45', sec: '6.7', p: 21, type: 'tf', a: false, q: 'Der α1-Antitrypsin-Mangel verursacht ein zentrilobuläres Emphysem der Oberlappen.', ex: 'α1-AT-Mangel → panlobuläres Emphysem der Unterlappen.' },
  { id: 'k6-t46', sec: '6.7', p: 21, type: 'tf', a: true, q: 'Lungeninfarkte sind hämorrhagisch, keilförmig und liegen subpleural.', ex: 'Lungeninfarkt: hämorrhagisch, keilförmig, subpleural/peripher, Pleuritis.' },
  { id: 'k6-t47', sec: '6.7', p: 21, type: 'tf', a: true, q: 'Ohne zusätzliche Lungenstauung reicht nach einer Lungenembolie meist die bronchialarterielle Versorgung aus.', ex: 'Ein Infarkt entsteht v. a. bei zusätzlicher Lungenstauung (Linksherzinsuffizienz).' },
  { id: 'k6-t48', sec: '6.7', p: 21, type: 'tf', a: true, q: 'Herzfehlerzellen sind Siderophagen bei chronischer Lungenstauung.', ex: 'Chronische Stauung: braune Induration mit Herzfehlerzellen (Berliner Blau).' },
  { id: 'k6-t49', sec: '6.8', p: 22, type: 'tf', a: false, q: 'Das Lungenkarzinom zeigt typische Frühsymptome.', ex: 'Keine Frühsymptome; Husten, Hämoptysen, Rekurrensparese, Horner, Einflussstauung sind spät.' },
  { id: 'k6-t50', sec: '6.8', p: 22, type: 'tf', a: true, q: 'Das Plattenepithelkarzinom der Lunge liegt typischerweise zentral.', ex: 'Plattenepithel-Ca: zentral (Hilus).' },
  { id: 'k6-t51', sec: '6.8', p: 22, type: 'tf', a: false, q: 'Das kleinzellige Karzinom macht ca. 70 % der Lungenkarzinome aus.', ex: 'SCLC ~15–25 %, NSCLC ~75–85 % (Altfrage 2008).' },
  { id: 'k6-t52', sec: '6.8', p: 22, type: 'tf', a: true, q: 'Beim Lungenkarzinom ist die Rauchdauer wichtiger als die Rauchmenge.', ex: 'Rauchen: Dauer > Menge; Aufhören senkt das Risiko.' },
  { id: 'k6-t53', sec: '6.8', p: 22, type: 'tf', a: true, q: 'KRAS-Mutationen finden sich beim NSCLC v. a. bei Rauchern.', ex: 'EGFR v. a. bei Adeno/Nichtrauchern/Asiaten; KRAS bei Rauchern.' },
  { id: 'k6-t54', sec: '6.8', p: 22, type: 'tf', a: false, q: 'Das kleinzellige Karzinom ist primär chemoresistent.', ex: 'SCLC: initial chemosensibel, Prognose trotzdem sehr schlecht.' },
  { id: 'k6-t55', sec: '6.8', p: 22, type: 'tf', a: true, q: 'Das großzellige Lungenkarzinom ist eine Ausschlussdiagnose.', ex: 'Großzelliges Karzinom: peripher, undifferenziert, Ausschlussdiagnose.' },
  { id: 'k6-t56', sec: '6.8', p: 22, type: 'tf', a: false, q: 'Das Lambert-Eaton-Syndrom ist eine typische Paraneoplasie des Adenokarzinoms.', ex: 'Lambert-Eaton, SIADH und Cushing sind typische Paraneoplasien des SCLC.' },
  { id: 'k6-t57', sec: '6.8', p: 22, type: 'tf', a: true, q: 'Lungenmetastasen eines Mammakarzinoms können sich als Lymphangiosis carcinomatosa zeigen.', ex: 'Mamma-Ca in der Lunge: Rundherde, Lymphangiosis carcinomatosa (retikuläre Zeichnung, Dyspnoe), Pleurakarzinose mit Erguss.' }
]);
