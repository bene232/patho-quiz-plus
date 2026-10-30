/* Kapitel 9 – Leber, Gallenwege, Pankreas (PDF S. 29–31) */
PQ.registerChapter(9, [

  /* ---------- 9.1 Leberrundherd & Lebertumoren ---------- */
  {
    id: 'k9-01', sec: '9.1', p: 29, type: 'kprim', alt: '2012, 2013A, 2019',
    q: 'Lebertumoren – welche Aussagen treffen zu?',
    st: [
      ['Der Fuchsbandwurm kann eine Leberraumforderung verursachen.', true],
      ['Das Leberzelladenom neigt gelegentlich zu Blutungen.', true],
      ['Metastasen sind etwa 40-mal häufiger als primäre Lebertumoren.', true],
      ['Die solitäre cholangioläre Zyste ist ein häufiger Sono-Zufallsbefund.', true]
    ],
    ex: 'Alle vier treffen zu. E. multilocularis (Fuchsbandwurm): infiltratives, tumorähnliches Wachstum. Hepatozelluläres Adenom: Blutungs- und Rupturneigung.'
  },
  {
    id: 'k9-02', sec: '9.1', p: 29, type: 'single', alt: '2010',
    q: 'Lebertumoren – welche Aussage ist FALSCH?',
    opts: [
      'Das Hepatoblastom ist der typische Lebertumor älterer Menschen.',
      'Das Hämangiom ist der häufigste benigne Lebertumor.',
      'Das HCC ist der häufigste primär maligne Lebertumor.',
      'Die FNH ist benigne.'
    ],
    a: 0,
    ex: 'Hepatoblastom: häufigster maligner Lebertumor im Kindesalter (~50 %; 70–90 % < 2 J), AFP ↑ (90 %); nicht bei älteren Menschen.'
  },
  {
    id: 'k9-03', sec: '9.1', p: 29, type: 'single', alt: '2013B, 2020, 2023, 2025',
    q: 'Welche Zuordnung ist FALSCH?',
    opts: [
      'FNH – maligne',
      'Hepatozelluläres Adenom – benigne',
      'Infantiles Hämangioendotheliom – benigne',
      'Angiosarkom – maligne',
      'Mesenchymales Hamartom – benigne'
    ],
    a: 0,
    ex: 'Die fokal noduläre Hyperplasie ist benigne, meist < 5 cm, ein Zufallsbefund; keine Exzision, keine Vorstufe des HCC.'
  },
  {
    id: 'k9-04', sec: '9.1', p: 29, type: 'single', alt: '2008',
    q: 'Hepatozelluläres Karzinom – welche Aussage trifft zu?',
    opts: [
      'Bei HBs-Positivität ist das HCC-Risiko etwa 400-fach erhöht.',
      'Das HCC exprimiert typischerweise CK20.',
      'Im Westen macht das HCC ca. 15 % aller Malignome aus.',
      'Das fibrolamelläre HCC hat eine schlechtere Prognose.',
      'Die FNH ist eine Vorstufe des HCC.'
    ],
    a: 0,
    ex: 'HBs-Positivität → HCC-Risiko ~100- bis 400-fach. HCC: CK7−/CK20−; im Westen ~1 % aller Malignome; fibrolamellär bessere Prognose (5-JÜR ~76 %); FNH keine Vorstufe.'
  },
  {
    id: 'k9-05', sec: '9.1', p: 29, type: 'single', alt: '2015',
    q: 'Hepatozelluläres Karzinom – welche Aussage ist FALSCH?',
    opts: [
      'Beim fibrolamellären HCC ist die Prognose schlechter.',
      'HBs-Positivität erhöht das HCC-Risiko.',
      'Im Westen macht das HCC ca. 1 % aller Malignome aus.',
      'Aflatoxine sind ein Risikofaktor.',
      'Das HCC ist der häufigste primär maligne Lebertumor.'
    ],
    a: 0,
    ex: 'Fibrolamelläres HCC: Jugendliche/junge Erwachsene (20–30 J), keine Zirrhose, lamelläre Fibrose, onkozytäre Zellen, DNAJB1-PRKACA; bessere Prognose.'
  },
  {
    id: 'k9-06', sec: '9.1', p: '29–30', type: 'single', alt: '2009, 2013A',
    q: 'Welche Lebermetastase ist am WENIGSTEN zu erwarten?',
    opts: ['Prostatakarzinom', 'Kolorektales Karzinom', 'Mammakarzinom', 'Pankreaskarzinom', 'Malignes Melanom'],
    a: 0,
    ex: 'Lebermetastasen beim Prostatakarzinom sind selten – es metastasiert v. a. in die Knochen.'
  },
  {
    id: 'k9-07', sec: '9.1', p: '29–30', type: 'single', alt: '2016, 2022',
    q: 'Welche Reihenfolge der Primärtumoren von Lebermetastasen (nach Wahrscheinlichkeit) gilt laut Altklausur?',
    opts: ['Dickdarm > Mamma > Schilddrüse', 'Schilddrüse > Mamma > Dickdarm', 'Mamma > Schilddrüse > Dickdarm'],
    a: 0,
    ex: 'Häufigste Primärtumoren nach Altfrage: Dickdarm > Mamma > Schilddrüse. Histologisch sind Lebermetastasen meist Adeno-Ca (39 %) bzw. Karzinom NOS (36 %).'
  },
  {
    id: 'k9-08', sec: '9.1', p: 29, type: 'match',
    q: 'Ordne den benignen Leberbefund seinem Kennzeichen zu.',
    pairs: [
      ['Hämangiom', 'Häufigster benigner Lebertumor, Irisblendenphänomen'],
      ['FNH', 'Zentrale sternförmige Narbe, Frauen'],
      ['Hepatozelluläres Adenom', 'Junge Frauen, Kontrazeptiva, Blutungsneigung'],
      ['Von-Meyenburg-Komplex', 'Gallengangshamartom']
    ],
    ex: 'Hämangiom: sono homogen echoreich; keine perkutane Biopsie (Blutungsgefahr). Adenom: ohne Zirrhose; auch Anabolika, Adipositas.'
  },
  {
    id: 'k9-09', sec: '9.1', p: 29, type: 'match',
    q: 'Ordne den Subtyp des hepatozellulären Adenoms seinem Kennzeichen zu.',
    pairs: [
      ['Inflammatorisch', '~50 %'],
      ['HNF1α', '~35 %'],
      ['β-Catenin', '~15 %, Entartungsrisiko']
    ],
    ex: 'Hepatozelluläres Adenom: junge Frauen, orale Kontrazeptiva/Anabolika, Adipositas; ohne Zirrhose; Blutungs- und Rupturneigung.'
  },
  {
    id: 'k9-10', sec: '9.1', p: 29, type: 'kprim',
    q: 'Fokal noduläre Hyperplasie (FNH) – welche Aussagen treffen zu?',
    st: [
      ['Typisch ist eine zentrale sternförmige Narbe mit dystrophen Gefäßen.', true],
      ['Sie betrifft v. a. Männer.', false],
      ['Sie muss stets exzidiert werden.', false],
      ['Sie ist eine Vorstufe des HCC.', false]
    ],
    ex: 'FNH: benigne, Frauen >> Männer, Hyperplasie als Reaktion auf abnormen Blutfluss; meist < 5 cm, Zufallsbefund; keine Exzision, keine Vorstufe des HCC.'
  },
  {
    id: 'k9-11', sec: '9.1', p: 29, type: 'match',
    q: 'Ordne den malignen Lebertumor seinem Kennzeichen zu.',
    pairs: [
      ['HCC', 'HepPar1, Glypican-3, AFP'],
      ['Fibrolamelläres HCC', 'Junge Patienten ohne Zirrhose, DNAJB1-PRKACA'],
      ['Cholangiozelluläres Karzinom', 'Desmoplastisches Stroma, CK7/CK19+'],
      ['Hepatoblastom', 'Kinder < 2 J, AFP ↑'],
      ['Angiosarkom', 'Vinylchlorid, Thorotrast, Arsen']
    ],
    ex: 'CCC: Adeno-Ca mit tubulären Strukturen; RF PSC, Leberegel (Asien), Choledochuszysten; nicht mit Gallensteinen assoziiert.'
  },
  {
    id: 'k9-12', sec: '9.1', p: 29, type: 'kprim',
    q: 'Welche Zuordnungen von Risikofaktor und Lebertumor treffen zu?',
    st: [
      ['Chronische Hepatitis B → HCC', true],
      ['Aflatoxin B1 → HCC', true],
      ['Gallensteine → cholangiozelluläres Karzinom', false],
      ['Vinylchlorid → Angiosarkom', true]
    ],
    ex: 'HCC-RF: Zirrhose jeder Genese, HBV (auch ohne Zirrhose onkogen), HCV, Alkohol, NASH, Aflatoxin B1 (p53-Mutation), Hämochromatose, α1-AT-Mangel, M. Wilson. Das CCC ist nicht mit Gallensteinen assoziiert.'
  },
  {
    id: 'k9-13', sec: '9.1', p: 29, type: 'single',
    q: 'Welches Immunprofil spricht für ein HCC?',
    opts: ['HepPar1+, Glypican-3+, CK7−/CK20−', 'CK7+/CK19+ mit desmoplastischem Stroma', 'CK20+/CDX2+'],
    a: 0,
    ex: 'HCC: trabekulär/pseudoglandulär, Gallepigment, Endothelauskleidung der Trabekel; HepPar1/Glypican-3/Arginase; CK7−/CK20−. CK7/CK19 → CCC; CK20/CDX2 → kolorektale Metastase.'
  },
  {
    id: 'k9-14', sec: '9.1', p: 29, type: 'match',
    q: 'Ordne die zystische Leberläsion ihrem Kennzeichen zu.',
    pairs: [
      ['Echinococcus granulosus (Hundebandwurm)', 'Singuläre, scharf begrenzte Zyste mit Tochterzysten'],
      ['Echinococcus multilocularis (Fuchsbandwurm)', 'Infiltratives, tumorähnliches Wachstum'],
      ['Muzinöses Zystadenom', 'Frauen, ovarielles Stroma'],
      ['Solitäre biliäre Zyste', 'Häufiger Sono-Zufallsbefund']
    ],
    ex: 'Weitere zystische Läsionen: polyzystische Lebererkrankung (ADPKD), Abszess (pyogen, Amöben), Pseudozysten.'
  },
  {
    id: 'k9-15', sec: '9.1', p: 29, type: 'single',
    q: 'Warum soll ein Leberhämangiom nicht perkutan biopsiert werden?',
    opts: ['Wegen der Blutungsgefahr', 'Weil es sonographisch nicht darstellbar ist', 'Weil es meist maligne entartet'],
    a: 0,
    ex: 'Hämangiom: sono homogen echoreich, Irisblendenphänomen; keine perkutane Biopsie wegen Blutungsgefahr; benigne.'
  },

  /* ---------- 9.2 Leberzirrhose & portale Hypertonie ---------- */
  {
    id: 'k9-16', sec: '9.2', p: 30, type: 'single',
    q: 'Wie ist die Leberzirrhose definiert?',
    opts: [
      'Irreversibler, diffuser Umbau mit Bindegewebssepten und Regeneratknoten',
      'Reversible Verfettung der Hepatozyten',
      'Herdförmige Hyperplasie mit zentraler Narbe'
    ],
    a: 0,
    ex: 'Zirrhose: irreversibler, diffuser Umbau mit Septen und Regeneratknoten → zerstörte Läppchen- und Gefäßarchitektur. Herdförmige Hyperplasie mit zentraler Narbe → FNH.'
  },
  {
    id: 'k9-17', sec: '9.2', p: 30, type: 'match',
    q: 'Ordne die Färbung ihrem Nachweis in der Leber zu.',
    pairs: [
      ['Elastica-van-Gieson', 'Bindegewebssepten'],
      ['Berliner Blau', 'Eisen'],
      ['Rhodanin', 'Kupfer']
    ],
    ex: 'Zirrhose-Histo: Septen, Regeneratknoten ohne Zentralvene, duktuläre Proliferation; Eisen (Hämochromatose), Kupfer (M. Wilson).'
  },
  {
    id: 'k9-18', sec: '9.2', p: 30, type: 'kprim',
    q: 'Welche der folgenden sind Folgen der portalen Hypertonie?',
    st: [
      ['Ösophagus- und Fundusvarizen', true],
      ['Splenomegalie/Hypersplenismus', true],
      ['Aszites mit Gefahr der spontan bakteriellen Peritonitis', true],
      ['Caput medusae', true]
    ],
    ex: 'Alle vier treffen zu; außerdem Hämorrhoiden. Weitere Zirrhosekomplikationen: Leberversagen und HCC.'
  },
  {
    id: 'k9-19', sec: '9.2', p: 30, type: 'single',
    q: 'Welche Parameter gehen in den Child-Pugh-Score ein?',
    opts: [
      'Bilirubin, Albumin, Quick/INR, Aszites, Enzephalopathie',
      'AST, ALT, γGT, AP, Lipase',
      'AFP, CEA, CA 19-9'
    ],
    a: 0,
    ex: 'Child-Pugh-Score (A/B/C): Bilirubin, Albumin, Quick/INR, Aszites, Enzephalopathie.'
  },
  {
    id: 'k9-20', sec: '9.2', p: 30, type: 'single',
    q: 'Was ist in Deutschland die häufigste Ursache der Leberzirrhose?',
    opts: ['Alkohol', 'Hepatitis B', 'Hämochromatose', 'M. Wilson'],
    a: 0,
    ex: 'Ursachen: Alkohol (D ~50 %), HBV/HCV, NASH, Autoimmunhepatitis, PBC/PSC, Hämochromatose, M. Wilson, α1-AT-Mangel, kardial, Budd-Chiari, Medikamente.'
  },
  {
    id: 'k9-21', sec: '9.2', p: 30, type: 'single',
    q: 'Welcher histologische Befund ist typisch für die alkoholische Leberschädigung?',
    opts: [
      'Mallory-Denk-Körper und ballonierte Hepatozyten',
      'Floride Gallengangsläsion mit Granulomen',
      'Zwiebelschalenartige periduktale Fibrose'
    ],
    a: 0,
    ex: 'Bei Alkohol: Verfettung, ballonierte Hepatozyten, Mallory-Denk-Körper, perizelluläre Fibrose. Floride Gallengangsläsion → PBC; zwiebelschalenartige Fibrose → PSC.'
  },

  /* ---------- 9.3 PSC & PBC ---------- */
  {
    id: 'k9-22', sec: '9.3', p: 30, type: 'single', alt: '2013A, 2016',
    q: 'PSC und PBC – welche Aussage ist FALSCH?',
    opts: [
      'PSC-Patienten haben bei rechtzeitiger Therapie (u. a. Steroide) auch ohne Transplantation eine nur gering eingeschränkte Lebenserwartung.',
      'Die PBC betrifft v. a. Frauen mittleren Alters.',
      'Die PSC betrifft v. a. jüngere Männer.',
      'Ca. 2/3 der PSC-Patienten haben eine Colitis ulcerosa.',
      'Bei > 95 % der PBC-Patienten finden sich AMA.'
    ],
    a: 0,
    ex: 'PSC: Lebenserwartung ohne Transplantation stark eingeschränkt, Steroide wirkungslos.'
  },
  {
    id: 'k9-23', sec: '9.3', p: 30, type: 'single', alt: '2016',
    q: 'Welche Aussage trifft auf die PBC NICHT zu?',
    opts: [
      'Destruktion der extrahepatischen Gallengänge',
      'Chronisch nicht-eitrige destruierende Cholangitis der kleinen intrahepatischen Gänge',
      'Antimitochondriale Antikörper (M2)',
      'Assoziation mit Sjögren und Hashimoto'
    ],
    a: 0,
    ex: 'Die PBC betrifft nur die kleinen intrahepatischen Gallengänge. Intra- UND extrahepatisch → PSC.'
  },
  {
    id: 'k9-24', sec: '9.3', p: 30, type: 'kprim',
    q: 'Primär sklerosierende Cholangitis (PSC) – welche Aussagen treffen zu?',
    st: [
      ['Sie befällt intra- und extrahepatische Gallenwege („Perlschnur“ in der MRCP).', true],
      ['Histologisch zeigt sich eine zwiebelschalenartige periduktale Fibrose.', true],
      ['Typisch sind antimitochondriale Antikörper in > 95 %.', false],
      ['Steroide sind die wirksamste Therapie.', false]
    ],
    ex: 'PSC: Männer (2 : 1), 3.–5. Dekade; p-ANCA (60–80 %); segmental (Biopsie nicht immer aussagekräftig); Steroide wirkungslos. AMA > 95 % → PBC.'
  },
  {
    id: 'k9-25', sec: '9.3', p: 30, type: 'kprim',
    q: 'Primär biliäre Cholangitis (PBC) – welche Aussagen treffen zu?',
    st: [
      ['Sie betrifft v. a. Frauen (~9 : 1).', true],
      ['Das IgM ist erhöht.', true],
      ['Sie ist eng mit der Colitis ulcerosa assoziiert.', false],
      ['Typisch ist ein p-ANCA-Nachweis in 60–80 %.', false]
    ],
    ex: 'PBC: ~50 J; AMA (M2) > 95 %, IgM ↑, AP/γGT ↑; Assoziation mit Sjögren, Hashimoto; Stadien I portal → IV Zirrhose; UDCA, Lebertransplantation. CU und p-ANCA → PSC.'
  },
  {
    id: 'k9-26', sec: '9.3', p: 30, type: 'single',
    q: 'Für welche Tumoren ist die PSC ein Risikofaktor?',
    opts: [
      'Cholangiozelluläres Karzinom, KRK (mit CED), Gallenblasen- und Pankreaskarzinom',
      'Hepatoblastom',
      'Angiosarkom der Leber'
    ],
    a: 0,
    ex: 'PSC: RF für CCC (10–20 %), KRK (mit CED), Gallenblasen-, Pankreas-Ca. Angiosarkom → Vinylchlorid, Thorotrast, Arsen.'
  },

  /* ---------- 9.4 Gallenblase & Gallenwege ---------- */
  {
    id: 'k9-27', sec: '9.4', p: '30–31', type: 'kprim', alt: '2013B, 2016, 2018, 2025',
    q: 'Welche der folgenden sind Risikofaktoren für Gallensteine?',
    st: [
      ['Weibliches Geschlecht', true],
      ['Z. n. Schwangerschaften', true],
      ['Dunkelhäutigkeit', false],
      ['Übergewicht', true]
    ],
    ex: '„6 F“: female, fat, forty, fertile, fair (hellhäutig), family; außerdem Fasten/rasche Gewichtsabnahme, Ileumresektion/M. Crohn, Diabetes, Hämolyse. Dunkelhäutigkeit ist kein RF.'
  },
  {
    id: 'k9-28', sec: '9.4', p: '30–31', type: 'single', alt: '2008',
    q: 'Was ist KEINE typische Ursache einer akuten Cholezystitis?',
    opts: [
      'Thrombosen bzw. Thrombembolien im Truncus coeliacus',
      'Steinabgang bzw. Steineinklemmung',
      'Chemische Irritation durch Lysolecithin',
      'Sekundär bakterielle Infektion (E. coli, Klebsiellen)'
    ],
    a: 0,
    ex: 'Akute Cholezystitis: zu 90–95 % steinbedingt; Druckerhöhung/Ischämie, chemische Irritation durch Lysolecithin, sekundär bakteriell; akalkulös bei Intensivpatienten.'
  },
  {
    id: 'k9-29', sec: '9.4', p: '30–31', type: 'single', alt: '2010',
    q: 'Was ist eine typische Ursache einer akuten Cholezystitis?',
    opts: ['Intraluminale Druckerhöhung durch Steinabgang', 'Männliches Geschlecht', 'Untergewicht', 'Verminderte Cholesterinsekretion'],
    a: 0,
    ex: 'Ursache: intraluminale Druckerhöhung/Ischämie durch Steinabgang bzw. Einklemmung.'
  },
  {
    id: 'k9-30', sec: '9.4', p: '30–31', type: 'single', alt: '2016, 2018, 2019',
    q: 'Gallenblasenkarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Die Prognose ist meist günstig.',
      'Es handelt sich meist um ein Adenokarzinom.',
      'Frauen sind häufiger betroffen.',
      'In > 90 % besteht ein Gallensteinleiden.',
      'Die PSC ist ein Risikofaktor.'
    ],
    a: 0,
    ex: 'Gallenblasenkarzinom: spät symptomatisch, früh in die Leber infiltrierend → schlechte Prognose (5-JÜR ~5–20 %).'
  },
  {
    id: 'k9-31', sec: '9.4', p: 30, type: 'match',
    q: 'Ordne die Gallenblasenveränderung ihrem Kennzeichen zu.',
    pairs: [
      ['Cholesterinose', 'Gelbe Stippchen, schaumzellige Makrophagen'],
      ['Hydrops', 'Prall, dünnwandig bei Abflussbehinderung'],
      ['Chronische Cholezystitis', 'Wandfibrose, Rokitansky-Aschoff-Sinus'],
      ['Porzellangallenblase', 'Verkalkte Wand, Präkanzerose']
    ],
    ex: 'Cholesterinose = „Stippchen“-/Erdbeergallenblase. Hydrops: Stein im Ductus cysticus, Tumor.'
  },
  {
    id: 'k9-32', sec: '9.4', p: 30, type: 'single',
    q: 'Woraus bestehen die meisten Gallensteine?',
    opts: ['Cholesterin', 'Bilirubinpigment', 'Kalziumoxalat'],
    a: 0,
    ex: 'Cholezystolithiasis: ~80 % Cholesterinsteine (Übersättigung, Nukleation, Hypomotilität), Pigmentsteine (Hämolyse, Infekt), gemischt. Kalziumoxalat → Nierensteine.'
  },
  {
    id: 'k9-33', sec: '9.4', p: 30, type: 'single',
    q: 'Was ist ein Klatskin-Tumor?',
    opts: [
      'Gallengangskarzinom an der Hepatikusgabel (Leberpforte)',
      'Gallenblasenkarzinom bei Porzellangallenblase',
      'Distales Gallengangskarzinom mit Courvoisier-Zeichen'
    ],
    a: 0,
    ex: 'Extrahepatisches Gallengangskarzinom: Klatskin-Tumor an der Hepatikusgabel; RF PSC, Leberegel, Choledochuszysten; schmerzloser Ikterus; Courvoisier-Zeichen bei distaler Lage.'
  },
  {
    id: 'k9-34', sec: '9.4', p: 30, type: 'kprim',
    q: 'Gallenblasenkarzinom – welche Aussagen treffen zu?',
    st: [
      ['Der Altersgipfel liegt bei ca. 70 Jahren.', true],
      ['Gallensteine spielen als Risikofaktor keine Rolle.', false],
      ['Es wird früh symptomatisch.', false],
      ['Männer sind 2- bis 3-mal häufiger betroffen.', false]
    ],
    ex: 'Gallenblasenkarzinom: Frauen (2–3 : 1), > 90 % Gallensteinleiden; Adeno-Ca 80–90 %; RF Porzellangallenblase, große Steine, PSC, Adipositas, Polypen > 1 cm; spät symptomatisch.'
  },

  /* ---------- 9.5 Pankreas ---------- */
  {
    id: 'k9-35', sec: '9.5', p: 31, type: 'single', alt: '2013B, 2025',
    q: 'Pankreaskarzinom – welche Aussage ist FALSCH?',
    opts: [
      'Die 5-JÜR liegt bei etwa 50 %.',
      'Es gehört weltweit zu den 10 häufigsten Neoplasien.',
      'Das duktale Adenokarzinom ist der häufigste Typ.',
      'Der Pankreaskopf ist die häufigste Lokalisation.',
      'Die Hauptmanifestation liegt im 50.–70. Lebensjahr.'
    ],
    a: 0,
    ex: 'Prognose sehr schlecht: 5-JÜR < 10 % (nach R0-Resektion ~20 %).'
  },
  {
    id: 'k9-36', sec: '9.5', p: 31, type: 'single', alt: '2008',
    q: 'Was ist laut Altklausur-Lösung die häufigste Ursache einer nekrotisierenden Pankreatitis?',
    opts: ['Gallenwegserkrankungen', 'Hypertriglyzeridämie', 'Mumps', 'Pancreas divisum'],
    a: 0,
    ex: 'Laut Lösung Gallenwegserkrankungen. Alkohol ist ähnlich häufig (biliär + Alkohol zusammen ~80 %) und wird deshalb hier nicht als Option angeboten.'
  },
  {
    id: 'k9-37', sec: '9.5', p: 31, type: 'kprim',
    q: 'Welche der folgenden sind Ursachen einer Pankreatitis?',
    st: [
      ['Cholezystolithiasis', true],
      ['Iatrogen (ERCP)', true],
      ['Viren', true],
      ['Alkohol', true]
    ],
    ex: 'So als K-prim-Altfrage gefragt (alle ✓). Weitere Ursachen: Hypertriglyzeridämie, Hyperkalzämie (HPT), Medikamente (Azathioprin, Valproat), Trauma, Pancreas divisum, idiopathisch.'
  },
  {
    id: 'k9-38', sec: '9.5', p: 31, type: 'single', alt: '2019',
    q: 'Was ist die wichtigste radiologische Differenzialdiagnose der IgG4-Autoimmunpankreatitis?',
    opts: ['Pankreaskopfkarzinom', 'Pankreaspseudozyste', 'Serös-zystische Neoplasie'],
    a: 0,
    ex: 'IgG4-AIP: „Wurstpankreas“; wichtigste radiologische DD Pankreaskopfkarzinom; steroidsensibel.'
  },
  {
    id: 'k9-39', sec: '9.5', p: 31, type: 'match',
    q: 'Ordne die zystische Pankreasläsion ihrem Kennzeichen zu.',
    pairs: [
      ['IPMN', 'Häufigste zystische Neoplasie, im Gangsystem'],
      ['MCN', 'Fast nur Frauen, ovarielles Stroma'],
      ['SCN', 'Ältere Frauen, benigne, mikrozystisch'],
      ['SPN', 'Junge Frauen, β-Catenin, niedrig maligne'],
      ['Pseudozyste', 'Nach Pankreatitis, kein Epithel']
    ],
    ex: 'IPMN: Hauptgang = höheres Risiko als Seitengang; invasive Form mit besserer Prognose als das PDAC. MCN: Korpus/Schwanz, ER/PR+. SPN: > 80 % Heilung durch OP.'
  },
  {
    id: 'k9-40', sec: '9.5', p: 31, type: 'match',
    q: 'Ordne das Pankreasenzym seiner Wirkung bei der nekrotisierenden Pankreatitis zu.',
    pairs: [
      ['Trypsin', 'Autodigestion'],
      ['Lipase', 'Fettgewebsnekrosen mit Kalkseifen („Kalkspritzer“)'],
      ['Elastase', 'Gefäßarrosion und Blutung']
    ],
    ex: 'Formen: ödematös-interstitiell vs. hämorrhagisch-nekrotisierend. Komplikationen: Pseudozyste, Abszess, Sepsis, ARDS, Schock, Nierenversagen.'
  },
  {
    id: 'k9-41', sec: '9.5', p: 31, type: 'kprim',
    q: 'Duktales Adenokarzinom des Pankreas – welche Aussagen treffen zu?',
    st: [
      ['KRAS ist in > 90 % aktiviert.', true],
      ['p16 (CDKN2A) ist typischerweise überaktiv.', false],
      ['Es liegt überwiegend im Pankreasschwanz.', false],
      ['Eine Perineuralscheideninfiltration ist untypisch.', false]
    ],
    ex: 'PDAC: KRAS > 90 %, Inaktivierung von p16, p53, SMAD4; Vorläufer PanIN; Kopf 60–70 %; atypische Drüsen in desmoplastischem Stroma mit Perineuralscheideninfiltration.'
  },
  {
    id: 'k9-42', sec: '9.5', p: 31, type: 'single',
    q: 'Welches klinische Zeichen ist typisch für ein Pankreaskopfkarzinom?',
    opts: ['Schmerzloser Ikterus mit Courvoisier-Zeichen', 'Polyglobulie', 'Virilisierung'],
    a: 0,
    ex: 'Pankreaskopf (60–70 %) → schmerzloser Ikterus, Courvoisier-Zeichen; Korpus/Schwanz spät symptomatisch; Thrombophlebitis migrans (Trousseau). Polyglobulie → NZK; Virilisierung → Sertoli-Leydig.'
  },
  {
    id: 'k9-43', sec: '9.5', p: 31, type: 'kprim',
    q: 'Chronische Pankreatitis – welche Aussagen treffen zu?',
    st: [
      ['Häufigste Ursache ist Alkohol (70–80 %).', true],
      ['Die Langerhans-Inseln bleiben lange erhalten.', true],
      ['Pseudozysten sind mit Epithel ausgekleidet.', false],
      ['Eine endokrine Insuffizienz (Diabetes) tritt nicht auf.', false]
    ],
    ex: 'Chronische Pankreatitis: Fibrose, Gangektasie mit Verkalkungen/Steinen, Azinusatrophie, Pseudozysten (ohne Epithel) → exokrine (Steatorrhö) und endokrine Insuffizienz (DM); hereditär PRSS1, SPINK1, CFTR.'
  },
  {
    id: 'k9-44', sec: '9.5', p: 31, type: 'single',
    q: 'Welche Histologie passt zur IgG4-Autoimmunpankreatitis?',
    opts: [
      'Lymphoplasmazelluläres Infiltrat, storiforme Fibrose, obliterative Phlebitis',
      'Atypische Drüsen in desmoplastischem Stroma mit Perineuralinfiltration',
      'Fettgewebsnekrosen mit Kalkseifen'
    ],
    a: 0,
    ex: 'IgG4-AIP: lymphoplasmazellulär, storiforme Fibrose, obliterative Phlebitis, IgG4-Plasmazellen. Atypische Drüsen → PDAC; Kalkseifen → akute nekrotisierende Pankreatitis.'
  },
  {
    id: 'k9-45', sec: '9.5', p: 31, type: 'kprim',
    q: 'Diabetes mellitus – welche Aussagen treffen zu?',
    st: [
      ['Typ 1 beruht auf einer autoimmunen Insulitis durch T-Zellen.', true],
      ['Beim Typ 2 findet sich Inselamyloid (IAPP/Amylin).', true],
      ['Die hyaline Arteriolosklerose ist Ausdruck der Makroangiopathie.', false],
      ['Die diabetische Nephropathie ist eine Immunkomplex-GN.', false]
    ],
    ex: 'Mikroangiopathie: Retina, Nerven, hyaline Arteriolosklerose; Makroangiopathie: KHK, pAVK, Gangrän. Diabetische Nephropathie (Kimmelstiel-Wilson): keine Immunkomplexe.'
  },
  {
    id: 'k9-46', sec: '9.5', p: 31, type: 'single',
    q: 'Wonach werden pankreatische neuroendokrine Tumoren gegradet?',
    opts: ['Nach Ki-67 (G1 < 3 %, G2 3–20 %, G3 > 20 %)', 'Nach dem Gleason-Score', 'Nach der Nukleolengröße (ISUP)'],
    a: 0,
    ex: 'Pankreatische NEN: Grading nach Ki-67 bzw. NEC; Marker Synaptophysin, Chromogranin A; syndromal bei MEN1, VHL, tuberöser Sklerose; alle NET haben malignes Potenzial.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k9-t01', sec: '9.1', p: 29, type: 'tf', a: true, q: 'Das Hämangiom ist der häufigste benigne Lebertumor.', ex: 'Hämangiom: häufigster benigner Lebertumor.' },
  { id: 'k9-t02', sec: '9.1', p: '29–30', type: 'tf', a: false, q: 'Das Leberhämangiom zeigt sonographisch meist ein identisches Bild wie Metastasen.', ex: 'Hämangiom: sono homogen echoreich, Irisblendenphänomen (Altfrage 2008).' },
  { id: 'k9-t03', sec: '9.1', p: '29–30', type: 'tf', a: false, q: 'Eine perkutane Biopsie ist beim Leberhämangiom unproblematisch.', ex: 'Keine perkutane Biopsie – Blutungsgefahr (Altfrage 2008).' },
  { id: 'k9-t04', sec: '9.1', p: 29, type: 'tf', a: false, q: 'Die FNH ist eine Vorstufe des HCC.', ex: 'FNH: benigne, keine Vorstufe des HCC (Altfrage 2008).' },
  { id: 'k9-t05', sec: '9.1', p: 29, type: 'tf', a: true, q: 'Das β-Catenin-aktivierte hepatozelluläre Adenom hat ein Entartungsrisiko.', ex: 'Subtypen: inflammatorisch (~50 %), HNF1α (~35 %), β-Catenin (~15 %, Entartungsrisiko).' },
  { id: 'k9-t06', sec: '9.1', p: 29, type: 'tf', a: true, q: 'Lebermetastasen sind ca. 40-mal häufiger als primäre Lebertumoren.', ex: 'Metastase : primär = 40 : 1.' },
  { id: 'k9-t07', sec: '9.1', p: 29, type: 'tf', a: false, q: 'Das fibrolamelläre HCC tritt typischerweise in einer Zirrhoseleber älterer Männer auf.', ex: 'Fibrolamelläres HCC: Jugendliche/junge Erwachsene, keine Zirrhose.' },
  { id: 'k9-t08', sec: '9.1', p: 29, type: 'tf', a: true, q: 'Das HCC ist in Afrika südlich der Sahara und in Südostasien häufig.', ex: 'HCC: weltweit eines der häufigsten Malignome (Afrika, Südostasien); im Westen ~1 %.' },
  { id: 'k9-t09', sec: '9.1', p: 29, type: 'tf', a: false, q: 'Das HCC macht in westlichen Industrienationen ca. 15 % aller Malignome aus.', ex: 'Im Westen ~1 % aller Malignome (Altfrage 2008, 2015).' },
  { id: 'k9-t10', sec: '9.1', p: 29, type: 'tf', a: true, q: 'Das Hepatitis-B-Virus ist auch ohne Zirrhose onkogen.', ex: 'HBV ist auch ohne Zirrhose onkogen.' },
  { id: 'k9-t11', sec: '9.1', p: 29, type: 'tf', a: false, q: 'Das cholangiozelluläre Karzinom ist mit Gallensteinen assoziiert.', ex: 'CCC: RF PSC, Leberegel, Choledochuszysten; nicht mit Gallensteinen assoziiert.' },
  { id: 'k9-t12', sec: '9.1', p: 29, type: 'tf', a: true, q: 'Beim Hepatoblastom ist das AFP in ca. 90 % erhöht.', ex: 'Hepatoblastom: AFP ↑ (90 %).' },
  { id: 'k9-t13', sec: '9.1', p: 29, type: 'tf', a: false, q: 'Das Hepatoblastom ist der typische Lebertumor älterer Menschen.', ex: 'Hepatoblastom: Kindesalter, 70–90 % < 2 J (Altfrage 2010).' },
  { id: 'k9-t14', sec: '9.1', p: 29, type: 'tf', a: true, q: 'Der Fuchsbandwurm (E. multilocularis) wächst in der Leber infiltrativ und tumorähnlich.', ex: 'E. multilocularis/alveolaris: infiltratives, tumorähnliches Wachstum.' },
  { id: 'k9-t15', sec: '9.1', p: 30, type: 'tf', a: false, q: 'Prostatakarzinome metastasieren häufig in die Leber.', ex: 'Lebermetastasen beim Prostata-Ca sind selten (Altfrage 2009, 2013A).' },
  { id: 'k9-t16', sec: '9.2', p: 30, type: 'tf', a: true, q: 'Die mikronoduläre Zirrhose (< 3 mm) ist typisch für Alkohol.', ex: 'Mikronodulär (< 3 mm; Alkohol) vs. makronodulär (> 3 mm; Virushepatitis).' },
  { id: 'k9-t17', sec: '9.2', p: 30, type: 'tf', a: false, q: 'Die Regeneratknoten der Zirrhose enthalten eine Zentralvene.', ex: 'Regeneratknoten ohne Zentralvene.' },
  { id: 'k9-t18', sec: '9.2', p: 30, type: 'tf', a: true, q: 'Kupfer wird in der Leber mit der Rhodanin-Färbung nachgewiesen.', ex: 'Eisen (Berliner Blau), Kupfer (Rhodanin).' },
  { id: 'k9-t19', sec: '9.2', p: 30, type: 'tf', a: true, q: 'Spider naevi, Palmarerythem und Gynäkomastie sind Folgen des Hyperöstrogenismus bei Zirrhose.', ex: 'Leberversagen: u. a. Hyperöstrogenismus mit Spider naevi, Palmarerythem, Gynäkomastie.' },
  { id: 'k9-t20', sec: '9.2', p: 30, type: 'tf', a: false, q: 'Die Leberzirrhose ist reversibel.', ex: 'Zirrhose = irreversibler, diffuser Umbau.' },
  { id: 'k9-t21', sec: '9.3', p: 30, type: 'tf', a: true, q: 'Die PBC betrifft v. a. Frauen mittleren Alters.', ex: 'PBC: Frauen (~9 : 1), ~50 J.' },
  { id: 'k9-t22', sec: '9.3', p: 30, type: 'tf', a: false, q: 'Die PBC zerstört die extrahepatischen Gallengänge.', ex: 'PBC: nur kleine intrahepatische Gänge (Altfrage 2016).' },
  { id: 'k9-t23', sec: '9.3', p: 30, type: 'tf', a: true, q: 'Ca. 2/3 der PSC-Patienten haben eine Colitis ulcerosa.', ex: 'PSC: CED, v. a. CU (~2/3–75 %).' },
  { id: 'k9-t24', sec: '9.3', p: 30, type: 'tf', a: true, q: 'Die PSC ist ein Risikofaktor für das cholangiozelluläre Karzinom.', ex: 'PSC: RF für CCC (10–20 %).' },
  { id: 'k9-t25', sec: '9.3', p: 30, type: 'tf', a: false, q: 'Bei der PSC sind Steroide wirksam und machen eine Transplantation meist überflüssig.', ex: 'PSC: Steroide wirkungslos; Lebenserwartung ohne Transplantation stark eingeschränkt (Altfrage 2013A, 2016).' },
  { id: 'k9-t26', sec: '9.3', p: 30, type: 'tf', a: true, q: 'Bei der PBC finden sich in > 95 % antimitochondriale Antikörper (M2).', ex: 'PBC: AMA (M2) > 95 %.' },
  { id: 'k9-t27', sec: '9.4', p: 31, type: 'tf', a: false, q: 'Dunkelhäutigkeit ist ein Risikofaktor für Gallensteine.', ex: 'Dunkelhäutigkeit ist kein RF; „fair“ = hellhäutig (Altfrage).' },
  { id: 'k9-t28', sec: '9.4', p: 30, type: 'tf', a: true, q: 'Ca. 80 % der Gallensteine sind Cholesterinsteine.', ex: '~80 % Cholesterinsteine.' },
  { id: 'k9-t29', sec: '9.4', p: 30, type: 'tf', a: true, q: 'Die akute Cholezystitis ist zu 90–95 % steinbedingt.', ex: 'Akute Cholezystitis: zu 90–95 % steinbedingt.' },
  { id: 'k9-t30', sec: '9.4', p: 31, type: 'tf', a: false, q: 'Thrombosen im Truncus coeliacus sind eine typische Ursache der akuten Cholezystitis.', ex: 'Keine typische Ursache (Altfrage 2008).' },
  { id: 'k9-t31', sec: '9.4', p: 30, type: 'tf', a: true, q: 'Die Porzellangallenblase ist eine Präkanzerose.', ex: 'Porzellangallenblase (verkalkte Wand) = Präkanzerose.' },
  { id: 'k9-t32', sec: '9.4', p: 31, type: 'tf', a: false, q: 'Das Gallenblasenkarzinom hat meist eine günstige Prognose.', ex: 'Schlechte Prognose (5-JÜR ~5–20 %) (Altfrage 2016, 2018, 2019).' },
  { id: 'k9-t33', sec: '9.4', p: 30, type: 'tf', a: true, q: 'Eine akalkulöse Cholezystitis tritt bei Intensivpatienten auf.', ex: 'Akalkulös bei Intensivpatienten.' },
  { id: 'k9-t34', sec: '9.5', p: 31, type: 'tf', a: true, q: 'Gallenwegserkrankungen und Alkohol verursachen zusammen ca. 80 % der akuten Pankreatitiden.', ex: 'Biliär und Alkohol zusammen ~80 %.' },
  { id: 'k9-t35', sec: '9.5', p: 31, type: 'tf', a: false, q: 'Pankreaspseudozysten sind mit Epithel ausgekleidet.', ex: 'Pseudozyste: nach Pankreatitis, kein Epithel, Amylase ↑.' },
  { id: 'k9-t36', sec: '9.5', p: 31, type: 'tf', a: true, q: 'Eine Hyperkalzämie (z. B. bei HPT) kann eine akute Pankreatitis auslösen.', ex: 'Ursachen u. a.: Hypertriglyzeridämie, Hyperkalzämie (HPT).' },
  { id: 'k9-t37', sec: '9.5', p: 31, type: 'tf', a: false, q: 'Die 5-JÜR des Pankreaskarzinoms liegt bei etwa 50 %.', ex: '5-JÜR < 10 % (Altfrage 2013B, 2025).' },
  { id: 'k9-t38', sec: '9.5', p: 31, type: 'tf', a: true, q: 'Das Pankreaskarzinom kann eine Thrombophlebitis migrans (Trousseau) verursachen.', ex: 'Thrombophlebitis migrans (Trousseau).' },
  { id: 'k9-t39', sec: '9.5', p: 31, type: 'tf', a: false, q: 'Die serös-zystische Neoplasie (SCN) des Pankreas ist maligne.', ex: 'SCN: ältere Frauen, benigne, mikrozystisch, zentrale Narbe.' },
  { id: 'k9-t40', sec: '9.5', p: 31, type: 'tf', a: true, q: 'Die invasive IPMN hat eine bessere Prognose als das konventionelle duktale Adenokarzinom.', ex: 'IPMN: invasive Form mit besserer Prognose als konventionelles PDAC.' },
  { id: 'k9-t41', sec: '9.5', p: 31, type: 'tf', a: false, q: 'Die IgG4-Autoimmunpankreatitis spricht nicht auf Steroide an.', ex: 'IgG4-AIP: steroidsensibel.' },
  { id: 'k9-t42', sec: '9.5', p: 31, type: 'tf', a: true, q: 'Alle neuroendokrinen Tumoren des Pankreas haben malignes Potenzial.', ex: 'Pankreatische NEN: alle NET haben malignes Potenzial.' },
  { id: 'k9-t43', sec: '9.5', p: 31, type: 'tf', a: true, q: 'BRCA1/2-Mutationen und das Peutz-Jeghers-Syndrom erhöhen das Risiko für ein Pankreaskarzinom.', ex: 'Hereditär: familiär, BRCA1/2, Peutz-Jeghers, hereditäre Pankreatitis, Lynch, FAMMM (p16).' }
]);
