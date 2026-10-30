/* Kapitel 16 – Neuropathologie (PDF S. 52–56) */
PQ.registerChapter(16, [

  /* ---------- 16.1 ZNS-Tumoren: Grundlagen ---------- */
  {
    id: 'k16-01', sec: '16.1', p: '52–53', type: 'kprim', alt: '2025',
    q: 'WHO-Klassifikation der ZNS-Tumoren – welche Aussagen treffen zu?',
    st: [
      ['WHO-Grad 1–2 sind maligne, Grad 3–4 semimaligne.', false],
      ['Die Typisierung erfolgt nach Tumorgröße und Infiltrationstiefe.', false],
      ['Die Operation ist in allen Graden der Grundpfeiler der Therapie.', false],
      ['Die Graduierung meint die Einteilung in die WHO-Grade 1–4.', true]
    ],
    ex: 'Die WHO-Grade beschreiben den biologischen Verlauf: Grad 1 langsam, gutartig · Grad 2 infiltrativ, rezidivierend · Grad 3 anaplastisch, maligne · Grad 4 hochmaligne. Die Typisierung erfolgt histologisch und molekular („integrierte Diagnose“), nicht nach Größe oder Infiltrationstiefe. Die Aussage zur OP in allen Graden ist laut Altklausur-Lösung falsch.'
  },
  {
    id: 'k16-02', sec: '16.1', p: 52, type: 'single',
    q: 'Welcher WHO-Grad beschreibt einen langsam wachsenden, gutartigen ZNS-Tumor, der durch Resektion potenziell heilbar ist?',
    opts: ['Grad 1', 'Grad 2', 'Grad 3', 'Grad 4'],
    a: 0,
    ex: 'Grad 1 = langsam, gutartig, durch Resektion potenziell heilbar. Anders als bei Karzinomen ist Grad 1 bei ZNS-Tumoren benigne („Ampelschema“: bei anderen Tumoren ist G1 trotzdem maligne).'
  },
  {
    id: 'k16-03', sec: '16.1', p: 52, type: 'match',
    q: 'Ordne den WHO-Grad der ZNS-Tumoren seinem biologischen Verlauf zu.',
    pairs: [
      ['Grad 1', 'Langsam, gutartig, durch Resektion potenziell heilbar'],
      ['Grad 2', 'Infiltrativ, rezidivierend, Progression möglich'],
      ['Grad 3', 'Anaplastisch, maligne'],
      ['Grad 4', 'Hochmaligne, unbehandelt rasch letal']
    ],
    ex: 'WHO-Grading (Grad 1–4) beschreibt den biologischen Verlauf. ZNS-Tumoren werden nicht nach TNM klassifiziert.'
  },
  {
    id: 'k16-04', sec: '16.1', p: 52, type: 'single',
    q: 'Welche intrakraniellen Tumoren sind beim Erwachsenen am häufigsten?',
    opts: ['Metastasen', 'Meningeome', 'Glioblastome', 'Schwannome'],
    a: 0,
    ex: 'Häufigste intrakranielle Tumoren des Erwachsenen sind Metastasen. Häufigster primärer Hirntumor ist das Meningeom, häufigster maligner primärer Hirntumor das Glioblastom.'
  },
  {
    id: 'k16-05', sec: '16.1', p: 52, type: 'match',
    q: 'Ordne die Beschreibung dem ZNS-Tumor zu.',
    pairs: [
      ['Häufigster intrakranieller Tumor des Erwachsenen', 'Metastasen'],
      ['Häufigster primärer Hirntumor', 'Meningeom'],
      ['Häufigster maligner primärer Hirntumor', 'Glioblastom'],
      ['Häufigster Hirntumor des Kindes', 'Pilozytisches Astrozytom'],
      ['Häufigster maligner Hirntumor des Kindes', 'Medulloblastom']
    ],
    ex: 'Kinder (überwiegend infratentoriell): pilozytisches Astrozytom (häufigster), Medulloblastom (häufigster maligner), Ependymom, Kraniopharyngeom, Keimzelltumoren.'
  },
  {
    id: 'k16-06', sec: '16.1', p: 52, type: 'match',
    q: 'Ordne die molekulare Veränderung dem Tumor zu.',
    pairs: [
      ['1p/19q-Kodeletion', 'Oligodendrogliom'],
      ['ATRX-Verlust + TP53', 'IDH-mutiertes Astrozytom'],
      ['EGFR-Amplifikation, TERT-Promotor, +7/−10', 'Glioblastom, IDH-Wildtyp'],
      ['KIAA1549-BRAF', 'Pilozytisches Astrozytom'],
      ['H3 K27M', 'Diffuses Mittelliniengliom']
    ],
    ex: 'Außerdem: IDH1/2 bei diffusen Gliomen (prognostisch günstig), MGMT-Promotormethylierung (prädiktiv für Temozolomid), NF2 bei Meningeom und Schwannom.'
  },
  {
    id: 'k16-07', sec: '16.1', p: 52, type: 'single',
    q: 'Welche Bedeutung hat die MGMT-Promotormethylierung bei Gliomen?',
    opts: [
      'Sie ist prädiktiv für das Ansprechen auf Temozolomid und prognostisch günstig.',
      'Sie ist ein diagnostischer Marker des Oligodendroglioms.',
      'Sie ist prognostisch ungünstig.',
      'Sie kennzeichnet das diffuse Mittelliniengliom.'
    ],
    a: 0,
    ex: 'MGMT-Promotormethylierung: prädiktiv für Temozolomid, prognostisch günstig, aber kein diagnostischer Marker. Das Oligodendrogliom ist durch IDH-Mutation + 1p/19q-Kodeletion definiert, das diffuse Mittelliniengliom durch H3 K27M.'
  },
  {
    id: 'k16-08', sec: '16.1', p: 52, type: 'kprim',
    q: 'IDH-Mutation – welche Aussagen treffen zu?',
    st: [
      ['IDH1/2-Mutationen kennzeichnen die diffusen Gliome (Astrozytom, Oligodendrogliom).', true],
      ['Eine IDH-Mutation ist prognostisch günstig.', true],
      ['Das Glioblastom ist definitionsgemäß IDH-mutiert.', false],
      ['Das Oligodendrogliom ist definitionsgemäß IDH-Wildtyp.', false]
    ],
    ex: 'Das Glioblastom ist als IDH-Wildtyp definiert (EGFR-Amplifikation, TERT, +7/−10). Das Oligodendrogliom ist definitionsgemäß IDH-mutiert + 1p/19q-kodeletiert.'
  },
  {
    id: 'k16-09', sec: '16.1', p: 52, type: 'single',
    q: 'Wie werden ZNS-Tumoren typisiert?',
    opts: [
      'Histologisch und molekular („integrierte Diagnose“)',
      'Nach dem TNM-System',
      'Nach Tumorgröße und Infiltrationstiefe'
    ],
    a: 0,
    ex: 'ZNS-Tumoren werden nicht nach TNM klassifiziert; die Typisierung erfolgt histologisch und molekular („integrierte Diagnose“), nicht nach Größe/Infiltrationstiefe.'
  },
  {
    id: 'k16-10', sec: '16.1', p: 52, type: 'single',
    q: 'Welche Aussage zum Glioblastom trifft zu?',
    opts: [
      'Altersgipfel 50–70 J, mediane Überlebenszeit ca. 15 Monate',
      'Häufigster Hirntumor des Kindesalters',
      'Meist WHO-Grad 1 und durch Resektion heilbar',
      'Häufigster primärer Hirntumor überhaupt'
    ],
    a: 0,
    ex: 'Glioblastom: häufigster maligner primärer Hirntumor, 50–70 J, mediane Überlebenszeit ~15 Monate, WHO-Grad 4. Häufigster primärer Hirntumor ist das Meningeom, häufigster kindlicher das pilozytische Astrozytom.'
  },

  /* ---------- 16.2 ZNS-Tumoren: Entitäten ---------- */
  {
    id: 'k16-11', sec: '16.2', p: '52–53', type: 'single', alt: '2018, 2019, 2022',
    q: 'Welcher Tumor zeigt 4 genetische Subtypen mit benignem bis hochmalignem Verlauf?',
    opts: ['Medulloblastom', 'Pilozytisches Astrozytom', 'Meningeom', 'Oligodendrogliom', 'Ependymom'],
    a: 0,
    ex: 'Medulloblastom (WHO 4): 4 genetische Subgruppen – WNT (beste Prognose), SHH, Gruppe 3 (MYC, schlechteste), Gruppe 4.'
  },
  {
    id: 'k16-12', sec: '16.2', p: '52–53', type: 'kprim', alt: '2025',
    q: 'Ein 8-jähriger Junge hat Kopfschmerzen, morgendliche Übelkeit und eine Gangunsicherheit. Es wird ein Medulloblastom diagnostiziert. Welche Aussagen treffen zu?',
    st: [
      ['Es ist ein embryonaler Tumor, der den 4. Ventrikel einengt.', true],
      ['Es ist überwiegend WHO-Grad 1 mit günstiger Prognose.', false],
      ['Es liegt am häufigsten frontal oder parietal.', false],
      ['Es metastasiert gelegentlich entlang des Liquorraums.', true]
    ],
    ex: 'Medulloblastom: embryonaler Tumor, WHO 4, Kinder 3–8 J, Kleinhirn (Vermis), engt den 4. Ventrikel ein → Hydrozephalus (morgendlicher Kopfschmerz, Nüchternerbrechen, Gangataxie); Abtropfmetastasen über den Liquorraum.'
  },
  {
    id: 'k16-13', sec: '16.2', p: '52–53', type: 'single', alt: '2018, 2021',
    q: 'Pilozytisches Astrozytom – welche Aussage ist FALSCH?',
    opts: [
      'Es zeigt meist eine sekundäre Malignisierung.',
      'Es kommt im N. opticus und im Kleinhirn vor.',
      'Es ist eine Ursache therapierefraktärer kindlicher Epilepsie.',
      'Es ist überwiegend WHO-Grad 1.',
      'Bei Erwachsenen ist es eine Rarität.'
    ],
    a: 0,
    ex: 'Das pilozytische Astrozytom zeigt nur sehr selten eine sekundäre Malignisierung; selten ist es anaplastisch (Grad 3).'
  },
  {
    id: 'k16-14', sec: '16.2', p: '52–53', type: 'single', alt: '2021, 2022',
    q: 'Bei einem Erwachsenen findet sich ein intrakranieller Tumor mit hoher Zelldichte, Zellpolymorphie und bandförmigen Nekrosen. Welche Diagnose ist am wahrscheinlichsten?',
    opts: ['Glioblastom', 'Pilozytisches Astrozytom', 'Meningeom', 'Schwannom', 'Oligodendrogliom'],
    a: 0,
    ex: 'Glioblastom: hohe Zelldichte, starke Zell-/Kernpolymorphie („multiforme“), viele Mitosen, (strich-/bandförmige) Nekrosen mit Pseudopalisaden und mikrovaskuläre Proliferate.'
  },
  {
    id: 'k16-15', sec: '16.2', p: '52–53', type: 'kprim', alt: '2023',
    q: 'Welche Merkmale sind typisch für das Glioblastom?',
    st: [
      ['Starke Variation der Differenzierung', true],
      ['Hohe Proliferation', true],
      ['Endothelproliferate', true],
      ['Nekrosen', true]
    ],
    ex: 'Alle vier treffen zu. Nekrosen mit Pseudopalisaden und mikrovaskuläre (Endothel-)Proliferate sind jeweils diagnostisch; hohe Proliferation (Ki-67).'
  },
  {
    id: 'k16-16', sec: '16.2', p: '52–53', type: 'single', alt: '2019',
    q: 'Primäre Hirntumoren – welche Aussage trifft am ehesten zu?',
    opts: [
      'Oligodendrogliome haben eine bessere Prognose als diffuse Astrozytome.',
      'Das diffuse Astrozytom ist meist vollständig resezierbar.',
      'Die TNM-Klassifikation ist für Hirntumoren relevant.',
      'Das Glioblastom metastasiert häufig in Lunge und Knochen.'
    ],
    a: 0,
    ex: 'Oligodendrogliome: bessere Prognose als Astrozytome, chemosensibel. Diffuse Astrozytome infiltrieren diffus (keine kurative Resektion), TNM gilt nicht für ZNS-Tumoren, und Glioblastome metastasieren extrakraniell praktisch nicht. Die alte Lösung nennt zusätzlich „können zu einem Glioblastom progredieren“.'
  },
  {
    id: 'k16-17', sec: '16.2', p: '52–53', type: 'single', alt: '2024',
    q: 'Gliome – welche Aussage trifft zu?',
    opts: [
      'Oligodendrogliome können im Verlauf eine Progression zum Glioblastom zeigen.',
      'Oligodendrogliome sind typischerweise IDH-Wildtyp.',
      'Diffuse Astrozytome sind bei günstiger Lage kurativ resezierbar.',
      'Glioblastome metastasieren häufig extrakraniell.'
    ],
    a: 0,
    ex: 'Gewertet wie die Altklausur-Lösung. Oligodendrogliome sind definitionsgemäß IDH-mutiert + 1p/19q-kodeletiert. Diffuse Astrozytome: keine kurative Resektion möglich, auch nicht bei günstiger Lage. Glioblastome: extrakraniell praktisch keine Metastasen.',
    dis: 'Nach WHO 2021 ist ein Oligodendrogliom immer IDH-mutiert + 1p/19q-kodeletiert, und „Glioblastom“ ist für IDH-Wildtyp-Tumoren reserviert. Die Altklausur-Lösung (2019/2024) lautet trotzdem „Oligodendrogliome können zum Glioblastom progredieren“. Im Original stand als Option A „immer IDH-mutiert“ – das ist nach WHO 2021 ebenfalls korrekt und wurde hier durch eine eindeutig falsche Option ersetzt. Im Zweifel nach der Formulierung der Vorlesung bzw. KPK gehen.'
  },
  {
    id: 'k16-18', sec: '16.2', p: 53, type: 'kprim', alt: '2020, 2023, 2024',
    q: 'Welche Tumoren liegen im Rückenmark typischerweise intramedullär?',
    st: [
      ['Meningeom', false],
      ['Pilozytisches Astrozytom', true],
      ['Ependymom', true],
      ['Neurinom', false]
    ],
    ex: 'Intramedullär: Ependymom, (pilozytisches) Astrozytom, Hämangioblastom. Intradural-extramedullär: Meningeom, Schwannom/Neurinom. Extradural: Metastasen, Lymphom.'
  },
  {
    id: 'k16-19', sec: '16.2', p: 53, type: 'single', alt: '2019, 2020',
    q: 'Hämangioblastome treten gehäuft auf bei:',
    opts: ['Von-Hippel-Lindau-Krankheit', 'Neurofibromatose Typ 1', 'Neurofibromatose Typ 2', 'Trisomie 21'],
    a: 0,
    ex: 'Hämangioblastom (WHO 1): Kleinhirn, zystisch mit Knoten; von-Hippel-Lindau (+ Retina, NZK, Phäochromozytom); EPO → Polyglobulie. NF1 → Neurofibrom, Optikusgliom; NF2 → Meningeom, Vestibularisschwannome; Trisomie 21 → Alzheimer-Risiko.'
  },
  {
    id: 'k16-20', sec: '16.2', p: '52–53', type: 'single', alt: '2024',
    q: 'Wovon gehen Meningeome aus?',
    opts: ['Deckzellen der Arachnoidea (meningotheliale Zellen)', 'Schwann-Zellen', 'Plexus choroideus', 'Substantia nigra'],
    a: 0,
    ex: 'Meningeom: aus Deckzellen der Arachnoidea; extrazerebral, durabasal, scharf begrenzt, verdrängend. Schwann-Zellen → Schwannom; Plexus choroideus → Plexuskarzinom; Substantia nigra → M. Parkinson.'
  },
  {
    id: 'k16-21', sec: '16.2', p: 53, type: 'single', alt: '2018',
    q: 'Ein 56-Jähriger hat eine einseitige Hörminderung. Im Kleinhirnbrückenwinkel liegt ein Tumor mit Bündeln und palisadenartigen Kernen, Ki-67 2–3 %, GFAP− und EMA−. Welche Diagnose passt?',
    opts: ['Schwannom (Neurinom)', 'Meningeom', 'Pilozytisches Astrozytom', 'Ependymom', 'Hämangioblastom'],
    a: 0,
    ex: 'Schwannom (WHO 1): Kleinhirnbrückenwinkel (N. vestibularis → Akustikusneurinom), Antoni A (zellreich, Bündel, Palisaden, Verocay-Körperchen) und Antoni B; S100+, GFAP−, EMA−, Ki-67 niedrig. Das Meningeom wäre EMA+.'
  },
  {
    id: 'k16-22', sec: '16.2', p: 53, type: 'single', alt: '2020–2022',
    q: 'Welcher Primärtumor führt am WENIGSTEN häufig zu zerebralen Metastasen?',
    opts: ['Gallenblasenkarzinom', 'Bronchialkarzinom', 'Mammakarzinom', 'Malignes Melanom', 'Nierenzellkarzinom'],
    a: 0,
    ex: 'Hirnmetastasen: Bronchial-Ca (40–50 %, v. a. SCLC) > Mamma (15–20 %) > Melanom (5–20 %) > Nierenzell-Ca (5–10 %) > KRK; selten Gallenblase, Prostata.'
  },
  {
    id: 'k16-23', sec: '16.2', p: 53, type: 'single', alt: '2023',
    q: 'Karzinome im Gehirn – welche Aussage ist FALSCH?',
    opts: [
      'Sie entstehen beim Erwachsenen häufig im Plexus choroideus.',
      'Sie können eine neuroendokrine Komponente haben.',
      'Häufig handelt es sich um Metastasen von Mamma- oder Lungenkarzinomen.',
      'Sie können aus den Nasennebenhöhlen einwachsen.',
      'Sie können als Meningeosis carcinomatosa auftreten.'
    ],
    a: 0,
    ex: 'Karzinome im Gehirn sind fast immer Metastasen oder wachsen per continuitatem aus den Nasennebenhöhlen ein. Das Plexuskarzinom ist ein seltener Tumor des Kindesalters.'
  },
  {
    id: 'k16-24', sec: '16.2', p: 52, type: 'match',
    q: 'Ordne den Tumor seinem histologischen Kennzeichen zu.',
    pairs: [
      ['Pilozytisches Astrozytom', 'Rosenthal-Fasern, „haarförmige“ bipolare Zellen'],
      ['Oligodendrogliom', '„Spiegeleier“, „Maschendraht“-Kapillaren'],
      ['Ependymom', 'Perivaskuläre Pseudorosetten'],
      ['Medulloblastom', 'Kleine runde blaue Zellen, Homer-Wright-Rosetten'],
      ['Meningeom', 'Zellwirbel (Zwiebelschalen), Psammomkörper']
    ],
    ex: 'Weitere Kennzeichen: pilozytisch auch eosinophile granuläre Körperchen; Ependymom auch echte ependymale Rosetten; Meningeom EMA+.'
  },
  {
    id: 'k16-25', sec: '16.2', p: '52–53', type: 'match',
    q: 'Ordne den Tumor dem zugehörigen Syndrom zu.',
    pairs: [
      ['Hämangioblastom', 'Von-Hippel-Lindau-Krankheit'],
      ['Bilaterale Vestibularisschwannome', 'Neurofibromatose Typ 2'],
      ['Plexiformes Neurofibrom', 'Neurofibromatose Typ 1']
    ],
    ex: 'NF1: Neurofibrom (plexiform → MPNST), pilozytisches Astrozytom des N. opticus/Chiasma. NF2: bilaterale Vestibularisschwannome, Meningeom. VHL: Hämangioblastom + Retina, NZK, Phäochromozytom.'
  },
  {
    id: 'k16-26', sec: '16.2', p: 52, type: 'single',
    q: 'Welche Befunde sind beim Glioblastom (neben hoher Zelldichte und Polymorphie) jeweils diagnostisch?',
    opts: [
      'Nekrosen mit Pseudopalisaden und mikrovaskuläre Proliferate',
      'Rosenthal-Fasern und eosinophile granuläre Körperchen',
      'Psammomkörper und Zellwirbel',
      'Homer-Wright-Rosetten'
    ],
    a: 0,
    ex: 'Glioblastom: (strich-/bandförmige) Nekrosen mit Pseudopalisaden und mikrovaskuläre (Endothel-)Proliferate – beide jeweils diagnostisch. Rosenthal-Fasern → pilozytisches Astrozytom, Psammomkörper → Meningeom, Homer-Wright-Rosetten → Medulloblastom.'
  },
  {
    id: 'k16-27', sec: '16.2', p: 52, type: 'single',
    q: 'Welche Lokalisation ist typisch für das Oligodendrogliom?',
    opts: ['Frontallappen (mit Epilepsie und Verkalkungen)', 'Kleinhirnbrückenwinkel', 'Filum terminale', '4. Ventrikel beim Kind'],
    a: 0,
    ex: 'Oligodendrogliom: Frontallappen, Epilepsie, Verkalkungen. Kleinhirnbrückenwinkel → Schwannom; Filum terminale → myxopapilläres Ependymom; 4. Ventrikel beim Kind → Ependymom.'
  },
  {
    id: 'k16-28', sec: '16.2', p: 52, type: 'single',
    q: 'Welches Bild ist typisch für das Glioblastom?',
    opts: [
      'Ringförmiges Kontrastmittel-Enhancement mit zentraler Nekrose, „Schmetterlingsgliom“ über den Balken',
      'Zystischer Kleinhirntumor mit wandständigem Knoten',
      'Extrazerebraler, durabasaler, scharf begrenzter Tumor',
      'Bikonvexe Raumforderung mit luzidem Intervall'
    ],
    a: 0,
    ex: 'Glioblastom: Großhirn, „Schmetterlingsgliom“ (Balken), ringförmiges KM-Enhancement mit zentraler Nekrose. Zystisch mit Knoten → pilozytisches Astrozytom/Hämangioblastom; durabasal → Meningeom; bikonvex mit luzidem Intervall → Epiduralhämatom.'
  },
  {
    id: 'k16-29', sec: '16.2', p: 52, type: 'kprim',
    q: 'Meningeom – welche Aussagen treffen zu?',
    st: [
      ['Es ist bei Frauen häufiger (Progesteronrezeptor-positiv).', true],
      ['Es ist meist WHO-Grad 1 (ca. 80 %).', true],
      ['Es liegt typischerweise intramedullär.', false],
      ['Der Ki-67-Index liegt typischerweise über 20 %.', false]
    ],
    ex: 'Meningeom: Frauen, NF2, Z. n. Bestrahlung; meist WHO 1 (~80 %); intradural-extramedullär bzw. durabasal; Ki-67 meist < 5 %.'
  },
  {
    id: 'k16-30', sec: '16.2', p: 52, type: 'single',
    q: 'Welcher Befund macht ein Meningeom zum atypischen Meningeom (WHO-Grad 2)?',
    opts: ['Hirninvasion oder ≥ 4 Mitosen/10 HPF', 'Psammomkörper', 'Zellwirbel (Zwiebelschalen)', 'Progesteronrezeptor-Positivität'],
    a: 0,
    ex: 'Atypisches Meningeom (Grad 2): Hirninvasion (die GFAP-Immunhistochemie zeigt die Infiltration), ≥ 4 Mitosen/10 HPF. Psammomkörper, Zellwirbel und PR-Positivität sind typische Merkmale auch des WHO-1-Meningeoms.'
  },
  {
    id: 'k16-31', sec: '16.2', p: 52, type: 'single',
    q: 'Welche molekulare Subgruppe des Medulloblastoms hat die beste Prognose?',
    opts: ['WNT', 'SHH', 'Gruppe 3 (MYC)', 'Gruppe 4'],
    a: 0,
    ex: 'Medulloblastom-Subgruppen: WNT (beste Prognose), SHH, Gruppe 3 (MYC, schlechteste), Gruppe 4.'
  },
  {
    id: 'k16-32', sec: '16.2', p: 52, type: 'single',
    q: 'Welcher Tumor ist der häufigste intramedulläre Tumor des Erwachsenen?',
    opts: ['Ependymom', 'Meningeom', 'Schwannom', 'Glioblastom'],
    a: 0,
    ex: 'Ependymom: beim Erwachsenen spinal intramedullär (häufigster intramedullärer Tumor; im Rückenmark meist gutartig). Meningeom und Schwannom liegen intradural-extramedullär.'
  },
  {
    id: 'k16-33', sec: '16.2', p: 52, type: 'match',
    q: 'Ordne die Lokalisation des Ependymoms zu.',
    pairs: [
      ['Ependymom bei Kindern', '4. Ventrikel (Hydrozephalus)'],
      ['Ependymom bei Erwachsenen', 'Spinal intramedullär'],
      ['Myxopapilläres Ependymom', 'Filum terminale']
    ],
    ex: 'Ependymom (WHO 2–3): perivaskuläre Pseudorosetten, echte ependymale Rosetten.'
  },
  {
    id: 'k16-34', sec: '16.2', p: 53, type: 'kprim',
    q: 'Schwannom (Neurinom) – welche Aussagen treffen zu?',
    st: [
      ['Es ist S100-positiv.', true],
      ['Es ist GFAP- und EMA-positiv.', false],
      ['Antoni-A-Areale sind zellreich mit palisadenartigen Kernen (Verocay-Körperchen).', true],
      ['Es ist ein maligner Tumor (WHO-Grad 4).', false]
    ],
    ex: 'Schwannom: WHO 1, benigne, glatt begrenzt, gekapselt; Antoni A (zellreich) und Antoni B (zellarm, locker); hyalinisierte Gefäße, Siderophagen; S100+, GFAP−, EMA−, Ki-67 niedrig.'
  },
  {
    id: 'k16-35', sec: '16.2', p: 53, type: 'match',
    q: 'Ordne das spinale Kompartiment seinen typischen Tumoren zu.',
    pairs: [
      ['Intramedullär', 'Ependymom, pilozytisches Astrozytom, Hämangioblastom'],
      ['Intradural-extramedullär', 'Meningeom, Schwannom/Neurinom'],
      ['Extradural', 'Metastasen, Lymphom']
    ],
    ex: 'Spinale Tumoren: intramedullär = Ependymom, (pilozytisches) Astrozytom, Hämangioblastom · intradural-extramedullär = Meningeom, Schwannom · extradural = Metastasen, Lymphom.'
  },
  {
    id: 'k16-36', sec: '16.2', p: 53, type: 'single',
    q: 'Welcher Primärtumor ist die häufigste Quelle von Hirnmetastasen?',
    opts: ['Bronchialkarzinom (v. a. SCLC)', 'Mammakarzinom', 'Malignes Melanom', 'Nierenzellkarzinom', 'Kolorektales Karzinom'],
    a: 0,
    ex: 'Bronchial-Ca (40–50 %) > Mamma (15–20 %) > Melanom (5–20 %; neigt zu Einblutung) > Nierenzell-Ca (5–10 %) > KRK.'
  },
  {
    id: 'k16-37', sec: '16.2', p: 53, type: 'single',
    q: 'Wie stellen sich Hirnmetastasen typischerweise dar?',
    opts: [
      'An der Mark-Rinden-Grenze, scharf begrenzt, mit perifokalem Ödem',
      'Periventrikulär im Marklager („Dawson\'s fingers“)',
      'Als Ringherde in den Basalganglien bei HIV',
      'Als Blut in den basalen Zisternen'
    ],
    a: 0,
    ex: 'Hirnmetastasen: Mark-Rinden-Grenze, scharf begrenzt, perifokales Ödem. Dawson\'s fingers → MS; Ringherde in den Basalganglien → Toxoplasmose; Blut in den basalen Zisternen → SAB.'
  },
  {
    id: 'k16-38', sec: '16.2', p: 53, type: 'single',
    q: 'Welche Beschreibung passt zum primären ZNS-Lymphom?',
    opts: [
      'DLBCL, bei Immunsuppression EBV-assoziiert, periventrikulär',
      'Kleinhirn, zystisch mit Knoten, von-Hippel-Lindau',
      'Kleinhirnbrückenwinkel, NF2, S100+',
      'Kinder, Kleinhirnwurm, Abtropfmetastasen'
    ],
    a: 0,
    ex: 'Primäres ZNS-Lymphom: DLBCL, Immunsuppression (EBV), periventrikulär. Die übrigen Beschreibungen passen zu Hämangioblastom, Schwannom und Medulloblastom.'
  },
  {
    id: 'k16-39', sec: '16.2', p: 52, type: 'kprim',
    q: 'Pilozytisches Astrozytom – welche Aussagen treffen zu?',
    st: [
      ['Typisch ist ein zystischer Tumor mit wandständigem Knoten.', true],
      ['Es zeigt Rosenthal-Fasern und eosinophile granuläre Körperchen.', true],
      ['Es ist durch eine 1p/19q-Kodeletion definiert.', false],
      ['Es tritt überwiegend bei älteren Erwachsenen auf.', false]
    ],
    ex: 'Pilozytisches Astrozytom (WHO 1): Kinder/Jugendliche (bei Erwachsenen selten); Kleinhirn, N. opticus/Chiasma (NF1), Hypothalamus, Hirnstamm, Rückenmark; KIAA1549-BRAF. Die 1p/19q-Kodeletion definiert das Oligodendrogliom.'
  },
  {
    id: 'k16-40', sec: '16.2', p: 52, type: 'kprim',
    q: 'Diffuses Astrozytom, IDH-mutiert – welche Aussagen treffen zu?',
    st: [
      ['Es tritt bevorzugt bei jungen Erwachsenen auf.', true],
      ['Bei günstiger Lage ist eine kurative Resektion möglich.', false],
      ['Typisch sind ATRX-Verlust und p53.', true],
      ['Es ist definitionsgemäß 1p/19q-kodeletiert.', false]
    ],
    ex: 'Diffuses Astrozytom (WHO 2–4): junge Erwachsene; diffus infiltrierend – keine kurative Resektion, auch nicht bei günstiger Lage; pfeilspitzartige Kerne, GFAP; ATRX-Verlust, p53; Progression zu höhergradigem Astrozytom.'
  },
  {
    id: 'k16-41', sec: '16.2', p: 52, type: 'kprim',
    q: 'Oligodendrogliom – welche Aussagen treffen zu?',
    st: [
      ['Es liegt bevorzugt im Frontallappen.', true],
      ['Es hat eine schlechtere Prognose als Astrozytome.', false],
      ['Es ist chemosensibel.', true],
      ['Verkalkungen sprechen gegen ein Oligodendrogliom.', false]
    ],
    ex: 'Oligodendrogliom (WHO 2–3): IDH-mutiert + 1p/19q-kodeletiert; Frontallappen, Epilepsie, Verkalkungen; „Spiegeleier“, „Maschendraht“-Kapillaren; bessere Prognose als Astrozytome, chemosensibel.'
  },

  /* ---------- 16.3 Neurodegeneration & Demenzen ---------- */
  {
    id: 'k16-42', sec: '16.3', p: 54, type: 'single', alt: '2018',
    q: 'Wo findet man Lewy-Körper?',
    opts: ['Im Zytoplasma von Neuronen', 'Im Zellkern von Neuronen', 'In Gliazellen (wie bei der MSA)', 'Extrazellulär (wie Amyloidplaques)'],
    a: 0,
    ex: 'Lewy-Körperchen = eosinophile, rundliche intrazytoplasmatische Einschlüsse in Neuronen aus α-Synuklein (mit hellem Halo). Gliale α-Synuklein-Einschlüsse kennzeichnen die MSA.'
  },
  {
    id: 'k16-43', sec: '16.3', p: 54, type: 'single', alt: '2020',
    q: 'Phosphoryliertes Tau-Protein bildet:',
    opts: ['Neurofibrilläre Tangles', 'Diffuse Plaques', 'Lewy-Körperchen', 'Floride Plaques'],
    a: 0,
    ex: 'Intraneuronale neurofibrilläre Tangles aus hyperphosphoryliertem Tau (gepaarte helikale Filamente). Diffuse Plaques = β-Amyloid; Lewy-Körperchen = α-Synuklein; floride Plaques = PrP bei vCJD.'
  },
  {
    id: 'k16-44', sec: '16.3', p: 54, type: 'single', alt: '2021',
    q: 'Worauf beruhen die CERAD-Kriterien?',
    opts: [
      'Dichte der neuritischen Plaques in Relation zum Alter',
      'Ausbreitung der neurofibrillären Tangles (transentorhinal → neokortikal)',
      'Ausbreitung der Lewy-Körper',
      'Ausmaß der Amyloidangiopathie'
    ],
    a: 0,
    ex: 'CERAD-Kriterien: Dichte der neuritischen Plaques in Relation zum Alter (A–C). Die Ausbreitung der Tangles beschreiben die Braak-Stadien I–VI.'
  },
  {
    id: 'k16-45', sec: '16.3', p: 54, type: 'single', alt: '2019, 2023',
    q: 'Alzheimer-Demenz – welche Aussage trifft am WENIGSTEN zu?',
    opts: [
      'Sie ist mit diffusen Amyloidplaques assoziiert.',
      'Es findet sich eine vaskuläre Amyloidose.',
      'Es finden sich Neurofibrillenveränderungen.',
      'Es findet sich eine erhebliche Astrogliose.',
      'Es finden sich neuritische Plaques.'
    ],
    a: 0,
    ex: 'Diffuse Plaques sind unspezifisch (auch bei gesunden Alten). Diagnostisch sind neuritische Plaques (Amyloidkern + dystrophe tau-positive Neuriten).'
  },
  {
    id: 'k16-46', sec: '16.3', p: 54, type: 'kprim', alt: '2022',
    q: 'Was ist charakteristisch für die senile Demenz vom Alzheimer-Typ?',
    st: [
      ['Helikale Neurofibrillenveränderungen', true],
      ['Diffuse Amyloidplaques', false],
      ['Amyloidangiopathie', true],
      ['Neuritische Amyloidplaques', true]
    ],
    ex: 'Alzheimer: neuritische Plaques, neurofibrilläre Tangles (gepaarte helikale Filamente), kongophile Amyloidangiopathie, Neuronen-/Synapsenverlust, Astrogliose. Diffuse Plaques sind unspezifisch.'
  },
  {
    id: 'k16-47', sec: '16.3', p: 54, type: 'single', alt: '2021–2023',
    q: 'Was ist bei der Creutzfeldt-Jakob-Krankheit NICHT zu erwarten?',
    opts: ['Entzündliche Infiltrate', 'Gliose', 'Spongiöse Auflockerung', 'Nervenzellverlust', 'Befall kortikal und subkortikal'],
    a: 0,
    ex: 'CJD-Histologie: spongiforme Auflockerung (Vakuolen), Nervenzellverlust, Astrogliose, PrP-Ablagerungen, Befall kortikal und subkortikal – keine entzündlichen Infiltrate.'
  },
  {
    id: 'k16-48', sec: '16.3', p: 54, type: 'kprim', alt: '2020',
    q: 'Obduktion bei sporadischer ALS – welche Strukturen sind betroffen?',
    st: [
      ['Hinterstränge', false],
      ['Vorderhörner des Rückenmarks', true],
      ['Vordere Zentralwindung', true],
      ['Hintere Zentralwindung', false]
    ],
    ex: 'ALS: Degeneration des 1. Motoneurons (vordere Zentralwindung, Pyramidenbahn) und des 2. Motoneurons (Vorderhörner, motorische Hirnnervenkerne). Die Sensibilität (Hinterstränge, hintere Zentralwindung) bleibt verschont.'
  },
  {
    id: 'k16-49', sec: '16.3', p: 54, type: 'match',
    q: 'Ordne das abgelagerte Protein der Erkrankung zu.',
    pairs: [
      ['Tau', 'Alzheimer (Tangles), M. Pick, PSP, CBD'],
      ['α-Synuklein', 'M. Parkinson, Lewy-Körper-Demenz, MSA'],
      ['TDP-43', 'ALS'],
      ['Prionprotein', 'Creutzfeldt-Jakob-Krankheit'],
      ['Huntingtin (Polyglutamin)', 'Chorea Huntington']
    ],
    ex: 'Proteinablagerungen: Tau (Alzheimer, FTLD/Pick, PSP, CBD) · α-Synuklein (Parkinson, DLB, MSA) · β-Amyloid (Alzheimer, Amyloidangiopathie) · TDP-43 (ALS, FTLD) · Prionprotein (CJD) · Huntingtin (Chorea Huntington).'
  },
  {
    id: 'k16-50', sec: '16.3', p: 53, type: 'single',
    q: 'Welche Demenzform ist am häufigsten?',
    opts: ['Alzheimer-Demenz', 'Vaskuläre Demenz', 'Lewy-Körper-Demenz', 'Frontotemporale Lobärdegeneration'],
    a: 0,
    ex: 'Alzheimer ~60 %, vaskuläre Demenz ~15–20 %; daneben Lewy-Körper-Demenz, Parkinson-Demenz, FTLD (M. Pick), CJD, Normaldruckhydrozephalus, Chorea Huntington, Mischformen.'
  },
  {
    id: 'k16-51', sec: '16.3', p: 54, type: 'kprim',
    q: 'Pathogenese des M. Alzheimer – welche Aussagen treffen zu?',
    st: [
      ['APP wird durch β- und γ-Sekretase (Presenilin) gespalten.', true],
      ['Die Tau-Hyperphosphorylierung steht am Anfang der Kaskade, noch vor der APP-Spaltung.', false],
      ['Diffuse Plaques sind für die Diagnose beweisend.', false],
      ['ApoE4 und Trisomie 21 sind genetische Risikofaktoren.', true]
    ],
    ex: 'Amyloid-Kaskade: APP-Spaltung → Aβ42 aggregiert → Oligomere/Plaques → Synapsentoxizität, Entzündung → Tau-Hyperphosphorylierung → Tangles → Neuronenuntergang. Genetisch: APP, PSEN1/2, Trisomie 21, ApoE4. Diffuse Plaques sind unspezifisch.'
  },
  {
    id: 'k16-52', sec: '16.3', p: 54, type: 'match',
    q: 'Ordne den Alzheimer-Befund seiner Beschreibung zu.',
    pairs: [
      ['Neuritische Plaques', 'Amyloidkern + dystrophe tau-positive Neuriten (diagnostisch)'],
      ['Diffuse Plaques', 'Unspezifisch, auch bei gesunden Alten'],
      ['Neurofibrilläre Tangles', 'Intraneuronal, hyperphosphoryliertes Tau'],
      ['Amyloidangiopathie', 'Kongophile Ablagerungen in Gefäßen']
    ],
    ex: 'Außerdem: Neuronen-/Synapsenverlust, Astrogliose, granulovakuoläre Degeneration, Hirano-Körperchen. Makro: Atrophie temporal (Hippocampus), parietal, frontal; Hydrocephalus e vacuo.'
  },
  {
    id: 'k16-53', sec: '16.3', p: 54, type: 'single',
    q: 'Welcher Befund ist typisch für den M. Parkinson?',
    opts: [
      'Depigmentierung der Substantia nigra durch Untergang dopaminerger Neurone',
      'Spongiforme Auflockerung ohne Entzündung',
      'Bunina-Körperchen in Vorderhornzellen',
      'Scharf begrenzte Herde im periventrikulären Marklager'
    ],
    a: 0,
    ex: 'M. Parkinson: Untergang der dopaminergen Neurone der Substantia nigra (pars compacta) → Depigmentierung; Lewy-Körperchen. Spongiforme Auflockerung → CJD; Bunina-Körperchen → ALS; periventrikuläre Herde → MS.'
  },
  {
    id: 'k16-54', sec: '16.3', p: 54, type: 'single',
    q: 'Wann spricht man von einer Lewy-Körper-Demenz statt von einer Parkinson-Demenz?',
    opts: [
      'Wenn die Demenz vor oder innerhalb eines Jahres nach den motorischen Symptomen auftritt',
      'Wenn keine Lewy-Körper nachweisbar sind',
      'Wenn statt α-Synuklein Tau abgelagert wird'
    ],
    a: 0,
    ex: 'Demenz bei Parkinson in bis zu ~40 % (kortikale Lewy-Körper). Lewy-Körper-Demenz, wenn die Demenz vor oder innerhalb eines Jahres nach der Motorik auftritt.'
  },
  {
    id: 'k16-55', sec: '16.3', p: 54, type: 'match',
    q: 'Ordne die Form der Creutzfeldt-Jakob-Krankheit ihrem Kennzeichen zu.',
    pairs: [
      ['Sporadisch', 'Ca. 85–90 %, 60–70 J'],
      ['Genetisch', 'Ca. 10 %, PRNP-Mutationen'],
      ['Iatrogen', 'Dura-/Korneatransplantate, Wachstumshormon'],
      ['Variante CJD (vCJD)', 'BSE, junge Patienten, floride Plaques']
    ],
    ex: 'Prionerkrankungen: Fehlfaltung von PrPᶜ → PrPˢᶜ (β-Faltblatt, proteaseresistent). Kuru durch Kannibalismus; zu den genetischen Formen gehören auch GSS und FFI.'
  },
  {
    id: 'k16-56', sec: '16.3', p: 54, type: 'single',
    q: 'Welche Zusatzbefunde passen zur Creutzfeldt-Jakob-Krankheit?',
    opts: [
      'Periodische Sharp-Wave-Komplexe im EEG und 14-3-3 im Liquor',
      'Oligoklonale Banden im Liquor',
      'Positives Tuschepräparat',
      'Blut im Liquor (Drei-Gläser-Probe)'
    ],
    a: 0,
    ex: 'CJD: rasch progrediente Demenz, Myoklonien, Ataxie, akinetischer Mutismus, Tod meist < 1 J; EEG periodische Sharp-Wave-Komplexe, Liquor 14-3-3/RT-QuIC. Oligoklonale Banden → MS; Tuschepräparat → Cryptococcus; Drei-Gläser-Probe → SAB.'
  },
  {
    id: 'k16-57', sec: '16.3', p: 54, type: 'kprim',
    q: 'Amyotrophe Lateralsklerose – welche Aussagen treffen zu?',
    st: [
      ['Es gehen 1. und 2. Motoneuron zugrunde.', true],
      ['Bunina-Körperchen finden sich in Vorderhornzellen.', true],
      ['Die Sensibilität ist früh betroffen.', false],
      ['Die meisten Fälle sind familiär (SOD1).', false]
    ],
    ex: 'ALS: spastische + schlaffe atrophe Paresen, Faszikulationen; sporadisch ~90 %, familiär (SOD1, C9orf72); Bunina-Körperchen, TDP-43; Muskel: neurogene Atrophie. Die Sensibilität bleibt verschont.'
  },
  {
    id: 'k16-58', sec: '16.3', p: 54, type: 'single',
    q: 'Welche Ablagerung kennzeichnet die Multisystematrophie (MSA)?',
    opts: ['α-Synuklein in glialen Einschlüssen', 'Tau in neurofibrillären Tangles', 'Huntingtin (Polyglutamin)', 'Prionprotein'],
    a: 0,
    ex: 'α-Synuklein: Parkinson, Lewy-Körper-Demenz und MSA (gliale Einschlüsse).'
  },
  {
    id: 'k16-59', sec: '16.3', p: 54, type: 'single',
    q: 'Was versteht man unter der subkortikalen arteriosklerotischen Enzephalopathie (Binswanger)?',
    opts: [
      'Vaskuläre Demenz durch Mikroangiopathie mit Marklagerschäden und Lakunen',
      'Frontotemporale Lobärdegeneration mit Tau-Ablagerung',
      'Prionerkrankung mit spongiformer Auflockerung',
      'Demenz durch Normaldruckhydrozephalus'
    ],
    a: 0,
    ex: 'Vaskuläre Demenz: Multiinfarktdemenz, Binswanger (Mikroangiopathie bei Hypertonie, Hyalinose; Marklagerschäden, Lakunen), strategische Infarkte (Thalamus), Amyloidangiopathie.'
  },

  /* ---------- 16.4 Zerebrovaskuläre Erkrankungen & Blutungen ---------- */
  {
    id: 'k16-60', sec: '16.4', p: 55, type: 'kprim', alt: '2019',
    q: 'Intrakranielle Blutungen – welche Aussagen treffen zu?',
    st: [
      ['Epidurale Blutungen sind meist venös.', false],
      ['Intrazerebrale Blutungen entstehen häufig durch Hypertonie.', true],
      ['Eine AVM kann eine intrazerebrale Blutung verursachen.', true],
      ['Quelle einer SAB sind häufig Hirnbasisaneurysmen.', true]
    ],
    ex: 'Das Epiduralhämatom ist arteriell (A. meningea media, Schädelfraktur temporal). Venös (Brückenvenen) ist das Subduralhämatom.'
  },
  {
    id: 'k16-61', sec: '16.4', p: 55, type: 'single', alt: '2020',
    q: 'Was ist die häufigste Ursache einer nicht-traumatischen intrazerebralen Blutung?',
    opts: ['Arterielle Hypertonie', 'Arterielle Hypotonie', 'Amyloidangiopathie', 'Hirntumor', 'Gerinnungsstörung'],
    a: 0,
    ex: 'Hypertonie ist die häufigste Ursache der nicht-traumatischen ICB. Weitere Ursachen: Amyloidangiopathie (lobär, Ältere), AVM, Kavernom, Tumor, Gerinnungsstörung.'
  },
  {
    id: 'k16-62', sec: '16.4', p: 55, type: 'single', alt: '2024',
    q: 'Intrazerebrale Massenblutung – welche Aussage trifft zu?',
    opts: [
      'Als Komplikation kann ein Hämatozephalus internus auftreten.',
      'Häufigste Ursache ist eine arterielle Hypotonie.',
      'Blutungsquelle sind typischerweise die Brückenvenen.',
      'Sie ist bikonvex und durch die Schädelnähte begrenzt.'
    ],
    a: 0,
    ex: 'ICB: Ventrikeleinbruch → Hämatozephalus internus; häufigste Ursache Hypertonie. Brückenvenen → Subduralhämatom; bikonvex/Nähte als Grenze → Epiduralhämatom. Im Original eine Bildfrage – die Antworten lassen sich aber ohne Bild lösen.'
  },
  {
    id: 'k16-63', sec: '16.4', p: '54–55', type: 'single', alt: '2025',
    q: 'Ein 75-Jähriger entwickelt nach einem Bagatelltrauma eine langsam zunehmende Verwirrtheit und eine Hemiparese. Das CT zeigt eine halbmondförmige hypodense Raumforderung; histologisch Dura mit fibroblastischer Reaktion und Blutungsresiduen. Was trifft zu?',
    opts: [
      'Ursache ist meist eine venöse Ruptur der Brückenvenen.',
      'Es handelt sich um eine intrazerebrale Massenblutung.',
      'Es handelt sich um ein linsenförmiges Epiduralhämatom.',
      'Mikroskopisch typisch sind Bunina-Körperchen in Vorderhornneuronen.'
    ],
    a: 0,
    ex: 'Chronisches Subduralhämatom: ältere Menschen, Bagatelltrauma, Alkohol, Antikoagulation; Kapselbildung durch fibroblastische Reaktion der Dura, Hämosiderin; CT im Verlauf hypodens. Bunina-Körperchen gehören zur ALS.'
  },
  {
    id: 'k16-64', sec: '16.4', p: '54–55', type: 'single', alt: '2024',
    q: 'Was ist postischämisch im ZNS am WENIGSTEN zu erwarten?',
    opts: ['Lewy-Körperchen', 'Ödem', 'Vergrößerte Mitochondrien', 'Mikrogliaaktivierung', '„Eosinophile“ Neuronenveränderungen'],
    a: 0,
    ex: 'Nach Ischämie: 6–12 h „rote/eosinophile Neurone“, Ödem, geschwollene Mitochondrien; später Granulozyten, Makrophagen, Mikrogliaaktivierung. Lewy-Körperchen gehören zum M. Parkinson.'
  },
  {
    id: 'k16-65', sec: '16.4', p: 55, type: 'match',
    q: 'Ordne die Blutung ihrer Blutungsquelle zu.',
    pairs: [
      ['Epiduralhämatom', 'A. meningea media (Schädelfraktur temporal)'],
      ['Subduralhämatom', 'Brückenvenen'],
      ['Subarachnoidalblutung', 'Hirnbasisaneurysma (Circulus Willisii)'],
      ['Intrazerebrale Blutung', 'Hypertonie, Amyloidangiopathie, AVM']
    ],
    ex: 'SAB: Ruptur eines Hirnbasisaneurysmas in ~80–90 % (v. a. A. communicans anterior), AVM. ICB: Hypertonie (häufigste nicht-traumatische Ursache), Amyloidangiopathie, AVM, Kavernom, Tumor, Gerinnungsstörung.'
  },
  {
    id: 'k16-66', sec: '16.4', p: 55, type: 'match',
    q: 'Ordne die Blutung ihrer Form bzw. ihrem Leitbefund zu.',
    pairs: [
      ['Epiduralhämatom', 'Bikonvex, luzides Intervall'],
      ['Subduralhämatom', 'Halbmondförmig über der Hemisphäre'],
      ['Subarachnoidalblutung', 'Vernichtungskopfschmerz, Blut in den basalen Zisternen'],
      ['Intrazerebrale Blutung', 'Massenblutung im Parenchym, v. a. Stammganglien']
    ],
    ex: 'Epidural: bikonvex/linsenförmig (Nähte als Grenze), rasche Einklemmung. Subdural: halbmond-/sichelförmig. SAB: Meningismus, 40–60 J, Diagnose CT, sonst Liquor. ICB: Prädilektion Putamen/Capsula interna, Thalamus, Pons, Kleinhirn.'
  },
  {
    id: 'k16-67', sec: '16.4', p: 54, type: 'match',
    q: 'Ordne den Infarkttyp seiner Beschreibung zu.',
    pairs: [
      ['Territorialinfarkt', 'Versorgungsgebiet einer großen Arterie, am häufigsten A. cerebri media'],
      ['Lakunärer Infarkt', 'Mikroangiopathie; Basalganglien, Thalamus, Pons'],
      ['Grenzzoneninfarkt', 'Wasserscheiden bei globaler Hypoperfusion']
    ],
    ex: 'Grenzzoneninfarkt: zwischen den Versorgungsgebieten großer Arterien (z. B. ACA/ACM) bei Hypotonie, Herzstillstand, Stenosen.'
  },
  {
    id: 'k16-68', sec: '16.4', p: 54, type: 'match',
    q: 'Ordne die Zeit nach einem Hirninfarkt dem histologischen Befund zu.',
    pairs: [
      ['6–12 h', '„Rote/eosinophile Neurone“, Ödem'],
      ['1–2 d', 'Neutrophile Granulozyten'],
      ['Ab ca. 3–5 d', 'Makrophagen (Fettkörnchenzellen), Kapillarsprossung'],
      ['Wochen bis Monate', 'Pseudozyste mit Astrogliose']
    ],
    ex: 'Infarktstadien: 6–12 h rote/eosinophile Neurone (Kernpyknose), Ödem, geschwollene Mitochondrien · 1–2 d Granulozyten · ab ~3–5 d Makrophagen, Mikrogliaaktivierung, Kapillarsprossung · Wochen bis Monate Resorption → Pseudozyste (Kolliquationsnekrose).'
  },
  {
    id: 'k16-69', sec: '16.4', p: 54, type: 'single',
    q: 'Welche Nekroseform liegt beim Hirninfarkt vor?',
    opts: ['Kolliquationsnekrose', 'Koagulationsnekrose', 'Verkäsende Nekrose', 'Fibrinoide Nekrose'],
    a: 0,
    ex: 'Der Hirninfarkt wird resorbiert → Pseudozyste mit Astrogliose (Kolliquationsnekrose). Die Koagulationsnekrose ist typisch für den Myokardinfarkt, die Verkäsung für die Tuberkulose.'
  },
  {
    id: 'k16-70', sec: '16.4', p: 54, type: 'single',
    q: 'Wodurch entsteht ein Grenzzoneninfarkt typischerweise?',
    opts: [
      'Globale Hypoperfusion (Hypotonie, Herzstillstand, Stenosen)',
      'Mikroangiopathie bei Hypertonie',
      'Ruptur eines Hirnbasisaneurysmas',
      'Ruptur der Brückenvenen'
    ],
    a: 0,
    ex: 'Grenzzoneninfarkt: Wasserscheiden zwischen großen Versorgungsgebieten (z. B. ACA/ACM) bei globaler Hypoperfusion. Mikroangiopathie → lakunärer Infarkt; Aneurysmaruptur → SAB; Brückenvenen → Subduralhämatom.'
  },
  {
    id: 'k16-71', sec: '16.4', p: 54, type: 'single',
    q: 'Was ist der wichtigste Risikofaktor des Hirninfarkts?',
    opts: ['Arterielle Hypertonie', 'Vorhofflimmern', 'Diabetes mellitus', 'Hyperlipidämie'],
    a: 0,
    ex: 'Hirninfarkt (~80–85 % aller Schlaganfälle): RF Hypertonie (wichtigster), Vorhofflimmern (kardioembolisch), Arteriosklerose (Carotis), DM, Rauchen, Hyperlipidämie, Alter.'
  },
  {
    id: 'k16-72', sec: '16.4', p: 55, type: 'single',
    q: 'Welche Ursache ist typisch für lobäre (atypische) intrazerebrale Blutungen bei älteren Menschen?',
    opts: ['Zerebrale Amyloidangiopathie', 'Ruptur der Brückenvenen', 'Riss der A. meningea media', 'Ruptur eines Hirnbasisaneurysmas'],
    a: 0,
    ex: 'Hypertensive Blutungen liegen in Stammganglien, Thalamus, Pons, Kleinhirn; lobär/atypisch spricht für eine Amyloidangiopathie (Ältere).'
  },
  {
    id: 'k16-73', sec: '16.4', p: 55, type: 'kprim',
    q: 'Subarachnoidalblutung – welche Aussagen treffen zu?',
    st: [
      ['Ursache ist in ca. 80–90 % die Ruptur eines Hirnbasisaneurysmas.', true],
      ['Leitsymptom ist ein luzides Intervall.', false],
      ['Die Blutung ist bikonvex und durch die Schädelnähte begrenzt.', false],
      ['Typische Komplikationen sind Vasospasmus und Hydrozephalus.', true]
    ],
    ex: 'SAB: Vernichtungskopfschmerz, Meningismus; 40–60 J, ADPKD; Diagnose CT, sonst Liquor (Drei-Gläser-Probe). Luzides Intervall und bikonvexe Form kennzeichnen das Epiduralhämatom.'
  },
  {
    id: 'k16-74', sec: '16.4', p: 55, type: 'kprim',
    q: 'Epiduralhämatom – welche Aussagen treffen zu?',
    st: [
      ['Die Blutung ist arteriell (A. meningea media).', true],
      ['Typisch ist ein luzides Intervall.', true],
      ['Die Blutung ist halbmondförmig über der Hemisphäre.', false],
      ['Typisch ist ein langsamer Verlauf über Wochen nach Bagatelltrauma.', false]
    ],
    ex: 'Epiduralhämatom: Schädelfraktur temporal, bikonvex/linsenförmig, luzides Intervall, rasche Einklemmung. Halbmondförmig und langsamer Verlauf nach Bagatelltrauma passen zum (chronischen) Subduralhämatom.'
  },
  {
    id: 'k16-75', sec: '16.4', p: 55, type: 'single',
    q: 'Wo entstehen Duret-Blutungen?',
    opts: [
      'Im Hirnstamm bei Einklemmung',
      'Subependymal bei unreifen Frühgeborenen',
      'Petechial im Marklager bei Fettembolie',
      'In den Stammganglien bei Hypertonie'
    ],
    a: 0,
    ex: 'Duret-Blutungen: Hirnstamm bei Einklemmung. Subependymale/germinale Matrixblutung → unreife Frühgeborene (IRDS); petechiale Marklagerblutungen → Purpura cerebri; Stammganglien → hypertensive ICB.'
  },

  /* ---------- 16.5 Entzündliche ZNS-Erkrankungen ---------- */
  {
    id: 'k16-76', sec: '16.5', p: '55–56', type: 'single', alt: '2020',
    q: 'Multiple Sklerose – welche Aussage ist FALSCH?',
    opts: [
      'Es kommt primär zur Zerstörung von Axonen und Nervenzellen.',
      'Es finden sich lymphozytäre Infiltrate und Makrophagen.',
      'Die Herde liegen typischerweise periventrikulär.',
      'Eine partielle Regeneration der Oligodendroglia ist möglich.',
      'Es bilden sich Antikörper gegen Myelinbestandteile.'
    ],
    a: 0,
    ex: 'MS: Entmarkung bei relativ erhaltenen Axonen – primär kein Axon-/Nervenzelluntergang, der Axonverlust ist sekundär. Partielle Remyelinisierung („Schattenherde“) durch Oligodendrozyten-Vorläufer.'
  },
  {
    id: 'k16-77', sec: '16.5', p: '55–56', type: 'single', alt: '2021',
    q: 'Bei der Autopsie einer 55-Jährigen finden sich scharf demarkierte, münzgroße, graue, derbe Herde im periventrikulären Marklager. Welche Diagnose passt?',
    opts: ['Multiple Sklerose', 'Hirnmetastasen', 'Creutzfeldt-Jakob-Krankheit', 'Zerebrale Toxoplasmose'],
    a: 0,
    ex: 'MS, Makro: alte Herde scharf begrenzt, grau(-glasig), derb, münzgroß im periventrikulären Marklager. Metastasen liegen an der Mark-Rinden-Grenze, CJD zeigt spongiforme Auflockerung, Toxoplasmose Ringherde in den Basalganglien.'
  },
  {
    id: 'k16-78', sec: '16.5', p: '55–56', type: 'single', alt: '2025',
    q: 'Die Meningen zeigen eine gelblich-graue, trübe Oberfläche. Welche Diagnose passt?',
    opts: ['Bakterielle (eitrige) Meningitis', 'Virale (lymphozytäre) Meningitis', 'Subarachnoidalblutung', 'Meningeom'],
    a: 0,
    ex: 'Eitrige Meningitis: makroskopisch gelblich-grünliche, trübe „Haube“ über der Konvexität; Granulozyten im Subarachnoidalraum. Die virale Meningitis ist klar. Im Original eine Bildfrage – die Beschreibung reicht zur Lösung.'
  },
  {
    id: 'k16-79', sec: '16.5', p: 55, type: 'match',
    q: 'Ordne die Meningitisform ihren typischen Erregern zu.',
    pairs: [
      ['Eitrige Meningitis des Neugeborenen', 'E. coli, B-Streptokokken, Listerien'],
      ['Eitrige Meningitis bei Kindern/Erwachsenen', 'Pneumokokken, Meningokokken, H. influenzae'],
      ['Lymphozytäre (virale) Meningitis', 'Enteroviren']
    ],
    ex: 'Komplikationen der eitrigen Meningitis: Hydrozephalus, Waterhouse-Friderichsen. Die virale Meningitis ist klar, mit Lymphozyten.'
  },
  {
    id: 'k16-80', sec: '16.5', p: 55, type: 'match',
    q: 'Ordne die ZNS-Infektion ihrem Kennzeichen zu.',
    pairs: [
      ['Toxoplasmose', 'Ringherde in den Basalganglien'],
      ['Cryptococcus', 'Nachweis im Tuschepräparat'],
      ['CMV', 'Ventrikulitis'],
      ['PML', 'JC-Virus, Befall der Oligodendrozyten'],
      ['HSV-Enzephalitis', 'Hämorrhagisch-nekrotisierend, temporal']
    ],
    ex: 'Opportunistische ZNS-Erreger bei HIV: Toxoplasmose, Cryptococcus, CMV, PML (JC-Virus), Candida/Aspergillus, primäres ZNS-Lymphom (EBV), Tbc. HSV-Enzephalitis: Cowdry-A-Einschlüsse.'
  },
  {
    id: 'k16-81', sec: '16.5', p: 55, type: 'single',
    q: 'Welche Meningitis ist basal betont, sulzig-gelatinös und geht mit Hirnnervenausfällen einher?',
    opts: ['Tuberkulöse Meningitis', 'Eitrige Pneumokokken-Meningitis', 'Virale (Enterovirus-)Meningitis'],
    a: 0,
    ex: 'Tuberkulöse Meningitis: basal, sulzig-gelatinös, Hirnnervenausfälle, Granulome mit Verkäsung. Die eitrige Meningitis bildet eine „Haube“ über der Konvexität, die virale ist klar.'
  },
  {
    id: 'k16-82', sec: '16.5', p: 55, type: 'kprim',
    q: 'Multiple Sklerose – welche Aussagen treffen zu?',
    st: [
      ['Frauen sind 2- bis 3-mal häufiger betroffen.', true],
      ['Eine Retrobulbärneuritis ist oft die Erstmanifestation.', true],
      ['Der Altersgipfel liegt bei 60–70 Jahren.', false],
      ['Die remyelinisierten „Schattenherde“ entstehen durch Schwann-Zellen.', false]
    ],
    ex: 'MS: Frauen 2–3 : 1, 20–40 J; Herde periventrikulär („Dawson\'s fingers“), Balken, N. opticus, Hirnstamm, Kleinhirn, Rückenmark. Schattenherde entstehen durch Oligodendrozyten-Vorläufer. Diagnostik: MRT + Liquor (oligoklonale Banden).'
  },
  {
    id: 'k16-83', sec: '16.5', p: 55, type: 'single',
    q: 'Welcher Befund ist typisch für die HIV-Enzephalopathie?',
    opts: [
      'Mikrogliale Knötchen, mehrkernige Riesenzellen, Myelinblässe',
      'Cowdry-A-Einschlüsse im Temporallappen',
      'Spongiforme Auflockerung ohne Entzündung',
      'Basale Granulome mit Verkäsung'
    ],
    a: 0,
    ex: 'HIV-Enzephalopathie: mikrogliale Knötchen, mehrkernige Riesenzellen, Myelinblässe → HIV-assoziierte Demenz. Cowdry A → HSV-Enzephalitis; spongiform → CJD; basale verkäsende Granulome → tuberkulöse Meningitis.'
  },
  {
    id: 'k16-84', sec: '16.5', p: 55, type: 'single',
    q: 'Welche Symptomkombination passt zur Riesenzellarteriitis?',
    opts: [
      'Schläfenkopfschmerz, Kauclaudicatio, Sehstörung, BSG ↑',
      'Vernichtungskopfschmerz und Meningismus',
      'Rigor, Ruhetremor, Akinese',
      'Retrobulbärneuritis bei einer jungen Frau'
    ],
    a: 0,
    ex: 'RZA: > 50 J (Frauen), Schläfenkopfschmerz, verdickte A. temporalis, Kauclaudicatio, Sehstörung/Amaurose, Polymyalgie, BSG ↑. Vernichtungskopfschmerz → SAB; Rigor/Tremor/Akinese → Parkinson; Retrobulbärneuritis → MS.'
  },
  {
    id: 'k16-85', sec: '16.5', p: 55, type: 'single',
    q: 'Welche Beschreibung passt zur HSV-Enzephalitis?',
    opts: [
      'Hämorrhagisch-nekrotisierend, temporal, Cowdry-A-Einschlüsse',
      'Ringherde in den Basalganglien',
      'JC-Virus-Befall der Oligodendrozyten',
      'Gelblich-grünliche Haube über der Konvexität'
    ],
    a: 0,
    ex: 'HSV-Enzephalitis: hämorrhagisch-nekrotisierend, temporal, Cowdry-A-Einschlüsse. Ringherde → Toxoplasmose; JC-Virus → PML; eitrige Haube → bakterielle Meningitis.'
  },

  /* ---------- 16.6 Peripherer Nerv & Muskel ---------- */
  {
    id: 'k16-86', sec: '16.6', p: 56, type: 'single', alt: '2023',
    q: 'Welches Schädigungsmuster ist typisch für das Guillain-Barré-Syndrom?',
    opts: ['Segmentale Demyelinisierung', 'Waller-Degeneration', 'Gruppierte (felderförmige) Atrophie', 'Perifaszikuläre Atrophie'],
    a: 0,
    ex: 'Guillain-Barré = akute inflammatorische demyelinisierende Polyradikuloneuritis nach Infekt (Campylobacter). Waller-Degeneration → axonale Schädigung; gruppierte Atrophie → neurogen; perifaszikuläre Atrophie → Dermatomyositis.'
  },
  {
    id: 'k16-87', sec: '16.6', p: 56, type: 'match',
    q: 'Ordne die Nervenschädigung ihrem Kennzeichen zu.',
    pairs: [
      ['Axonale Schädigung', 'Waller-Degeneration, NLG nahezu normal, Amplitude ↓'],
      ['Demyelinisierende Schädigung', 'Segmentale Demyelinisierung, NLG ↓↓'],
      ['„Zwiebelschalen“', 'Rezidivierende Schädigung mit Remyelinisierung']
    ],
    ex: 'Axonal: toxisch, metabolisch/diabetisch, Vaskulitis. Demyelinisierend: Guillain-Barré, CIDP, CMT1; Remyelinisierung mit kurzen Internodien.'
  },
  {
    id: 'k16-88', sec: '16.6', p: 56, type: 'match',
    q: 'Ordne die Myopathie ihrem Kennzeichen zu.',
    pairs: [
      ['Polymyositis', 'Endomysiale CD8-T-Zellen invadieren nicht nekrotische Fasern'],
      ['Dermatomyositis', 'Perifaszikuläre Atrophie, Kapillarschaden'],
      ['Einschlusskörpermyositis', 'Ältere Männer, rimmed vacuoles'],
      ['Mitochondriale Myopathie', 'Ragged-red-Fibers']
    ],
    ex: 'Polymyositis: proximale Schwäche. Dermatomyositis: perivaskulär B-/CD4-Zellen, Haut, paraneoplastisch.'
  },
  {
    id: 'k16-89', sec: '16.6', p: 56, type: 'single',
    q: 'Welcher Befund spricht für eine neurogene Muskelschädigung?',
    opts: [
      'Gruppierte (felderförmige) Atrophie mit angulär-atrophen Fasern',
      'Zentrale Kerne und endomysiale Fibrose',
      'Perifaszikuläre Atrophie',
      'Rimmed vacuoles'
    ],
    a: 0,
    ex: 'Neurogen (ALS, SMA, Neuropathien): angulär-atrophe Fasern, gruppierte Atrophie, Fasertypengruppierung nach Reinnervation, Target-Fasern. Zentrale Kerne/Fibrose → myopathisches Muster.'
  },
  {
    id: 'k16-90', sec: '16.6', p: 56, type: 'kprim',
    q: 'Muskeldystrophie Duchenne – welche Aussagen treffen zu?',
    st: [
      ['Sie wird X-chromosomal vererbt.', true],
      ['Dystrophin fehlt.', true],
      ['Die CK ist typischerweise normal.', false],
      ['Bei der Becker-Dystrophie fehlt Dystrophin ebenfalls vollständig.', false]
    ],
    ex: 'Duchenne: X-chromosomal, Dystrophin fehlt; Jungen, Gowers-Zeichen, Wadenpseudohypertrophie, CK ↑↑. Becker: Dystrophin vermindert.'
  },

  /* ---------- Richtig/Falsch-Aussagen ---------- */
  { id: 'k16-t01', sec: '16.1', p: 52, type: 'tf', a: false, q: 'ZNS-Tumoren werden nach dem TNM-System klassifiziert.', ex: 'ZNS-Tumoren werden nicht nach TNM klassifiziert; die Typisierung erfolgt histologisch und molekular („integrierte Diagnose“).' },
  { id: 'k16-t02', sec: '16.1', p: 52, type: 'tf', a: true, q: 'Anders als bei Karzinomen ist ein WHO-Grad-1-Tumor des ZNS benigne.', ex: 'Grad 1 = langsam, gutartig, durch Resektion potenziell heilbar; bei anderen Tumoren ist G1 trotzdem maligne.' },
  { id: 'k16-t03', sec: '16.1', p: 52, type: 'tf', a: true, q: 'Das Meningeom ist der häufigste primäre Hirntumor.', ex: 'Häufigster primärer Hirntumor: Meningeom (Frauen, meist WHO 1).' },
  { id: 'k16-t04', sec: '16.1', p: 52, type: 'tf', a: false, q: 'Der häufigste Hirntumor des Kindesalters ist das Medulloblastom.', ex: 'Häufigster kindlicher Hirntumor ist das pilozytische Astrozytom; das Medulloblastom ist der häufigste maligne.' },
  { id: 'k16-t05', sec: '16.1', p: 52, type: 'tf', a: false, q: 'Hirntumoren im Kindesalter liegen überwiegend supratentoriell.', ex: 'Hirntumoren bei Kindern liegen überwiegend infratentoriell.' },
  { id: 'k16-t06', sec: '16.1', p: 52, type: 'tf', a: false, q: 'Die mediane Überlebenszeit beim Glioblastom beträgt etwa 5 Jahre.', ex: 'Glioblastom: mediane Überlebenszeit ~15 Monate.' },
  { id: 'k16-t07', sec: '16.1', p: 52, type: 'tf', a: true, q: 'Die 1p/19q-Kodeletion ist kennzeichnend für das Oligodendrogliom.', ex: 'Oligodendrogliom: definitionsgemäß IDH-mutiert + 1p/19q-kodeletiert.' },
  { id: 'k16-t08', sec: '16.1', p: 52, type: 'tf', a: false, q: 'Die MGMT-Promotormethylierung ist ein diagnostischer Marker.', ex: 'MGMT-Promotormethylierung: prädiktiv für Temozolomid, prognostisch günstig – kein diagnostischer Marker.' },
  { id: 'k16-t09', sec: '16.1', p: 52, type: 'tf', a: true, q: 'H3 K27M ist typisch für das diffuse Mittelliniengliom.', ex: 'H3 K27M → diffuses Mittelliniengliom.' },
  { id: 'k16-t10', sec: '16.1', p: 52, type: 'tf', a: false, q: 'NF2-Veränderungen sind typisch für das pilozytische Astrozytom.', ex: 'NF2 → Meningeom, Schwannom. Pilozytisches Astrozytom: BRAF-Fusion/V600E; am N. opticus mit NF1 assoziiert.' },
  { id: 'k16-t11', sec: '16.2', p: 52, type: 'tf', a: true, q: 'Das pilozytische Astrozytom ist typischerweise zystisch mit wandständigem Knoten.', ex: 'Pilozytisches Astrozytom: zystisch mit wandständigem Knoten; biphasisch, Rosenthal-Fasern.' },
  { id: 'k16-t12', sec: '16.2', p: 52, type: 'tf', a: false, q: 'Das pilozytische Astrozytom zeigt meist eine sekundäre Malignisierung.', ex: 'Nur sehr selten sekundäre Malignisierung (Altfrage 2018, 2021).' },
  { id: 'k16-t13', sec: '16.2', p: 52, type: 'tf', a: false, q: 'Das diffuse Astrozytom ist bei günstiger Lage kurativ resezierbar.', ex: 'Diffus infiltrierend – keine kurative Resektion möglich, auch nicht bei günstiger Lage.' },
  { id: 'k16-t14', sec: '16.2', p: 52, type: 'tf', a: true, q: 'Der perinukleäre Halo („Spiegeleier“) beim Oligodendrogliom ist ein Artefakt.', ex: '„Spiegeleier“: perinukleärer Halo = Artefakt; dazu „Maschendraht“-Kapillaren.' },
  { id: 'k16-t15', sec: '16.2', p: 52, type: 'tf', a: true, q: 'Oligodendrogliome haben eine bessere Prognose als Astrozytome.', ex: 'Oligodendrogliom: bessere Prognose als Astrozytome, chemosensibel (Altfrage 2019).' },
  { id: 'k16-t16', sec: '16.2', p: 52, type: 'tf', a: false, q: 'Das Glioblastom (IDH-Wildtyp) tritt bevorzugt bei Kindern auf.', ex: 'Glioblastom: Ältere (50–70 J), Großhirn.' },
  { id: 'k16-t17', sec: '16.2', p: 52, type: 'tf', a: true, q: 'Nekrosen mit Pseudopalisaden und mikrovaskuläre Proliferate sind beim Glioblastom jeweils diagnostisch.', ex: 'Beide Befunde sind jeweils diagnostisch für das Glioblastom.' },
  { id: 'k16-t18', sec: '16.2', p: 53, type: 'tf', a: false, q: 'Glioblastome metastasieren häufig in Lunge und Knochen.', ex: 'Glioblastom: extrakraniell praktisch keine Metastasen (Altfrage 2019).' },
  { id: 'k16-t19', sec: '16.2', p: 52, type: 'tf', a: true, q: 'Das Ependymom ist der häufigste intramedulläre Tumor des Erwachsenen.', ex: 'Ependymom: beim Erwachsenen spinal intramedullär, im Rückenmark meist gutartig.' },
  { id: 'k16-t20', sec: '16.2', p: 53, type: 'tf', a: false, q: 'Das Medulloblastom liegt typischerweise frontal oder parietal.', ex: 'Medulloblastom: Kleinhirn (Vermis), engt den 4. Ventrikel ein (Altfrage 2025).' },
  { id: 'k16-t21', sec: '16.2', p: 52, type: 'tf', a: true, q: 'Beim Medulloblastom hat die WNT-Subgruppe die beste Prognose.', ex: 'WNT (beste Prognose), SHH, Gruppe 3 (MYC, schlechteste), Gruppe 4.' },
  { id: 'k16-t22', sec: '16.2', p: 53, type: 'tf', a: false, q: 'Das Medulloblastom ist überwiegend ein WHO-Grad-1-Tumor mit günstiger Prognose.', ex: 'Medulloblastom = WHO-Grad 4, embryonaler Tumor (Altfrage 2025).' },
  { id: 'k16-t23', sec: '16.2', p: 52, type: 'tf', a: true, q: 'Meningeome sind häufig Progesteronrezeptor-positiv.', ex: 'Meningeom: Frauen (Progesteronrezeptor+), NF2, Z. n. Bestrahlung.' },
  { id: 'k16-t24', sec: '16.2', p: 52, type: 'tf', a: false, q: 'Meningeome wachsen typischerweise intrazerebral und infiltrierend.', ex: 'Meningeom: extrazerebral, durabasal, scharf begrenzt, verdrängend.' },
  { id: 'k16-t25', sec: '16.2', p: 53, type: 'tf', a: true, q: 'Das Akustikusneurinom geht vom N. vestibularis aus.', ex: 'Schwannom im Kleinhirnbrückenwinkel: N. vestibularis → Akustikusneurinom; einseitige Hörminderung, Tinnitus, Schwindel.' },
  { id: 'k16-t26', sec: '16.2', p: 53, type: 'tf', a: false, q: 'Das Schwannom ist GFAP- und EMA-positiv.', ex: 'Schwannom: S100+, GFAP−, EMA− (Altfrage 2018).' },
  { id: 'k16-t27', sec: '16.2', p: 53, type: 'tf', a: true, q: 'Plexiforme Neurofibrome können in einen MPNST übergehen.', ex: 'Neurofibrom (WHO 1): NF1; plexiform → MPNST.' },
  { id: 'k16-t28', sec: '16.2', p: 53, type: 'tf', a: true, q: 'Das Hämangioblastom kann über EPO-Bildung eine Polyglobulie verursachen.', ex: 'Hämangioblastom: EPO → Polyglobulie.' },
  { id: 'k16-t29', sec: '16.2', p: 53, type: 'tf', a: false, q: 'Das primäre ZNS-Lymphom ist meist ein Hodgkin-Lymphom.', ex: 'Primäres ZNS-Lymphom = DLBCL (Immunsuppression, EBV), periventrikulär.' },
  { id: 'k16-t30', sec: '16.2', p: 53, type: 'tf', a: true, q: 'Hirnmetastasen des malignen Melanoms neigen zur Einblutung.', ex: 'Malignes Melanom (5–20 % der Hirnmetastasen) neigt zu Einblutung.' },
  { id: 'k16-t31', sec: '16.2', p: 53, type: 'tf', a: false, q: 'Das Plexuskarzinom ist ein häufiger Hirntumor des Erwachsenen.', ex: 'Das Plexuskarzinom ist ein seltener Tumor des Kindesalters.' },
  { id: 'k16-t32', sec: '16.2', p: 53, type: 'tf', a: false, q: 'Hirnmetastasen sind typischerweise unscharf begrenzt und zeigen kein Ödem.', ex: 'Hirnmetastasen: Mark-Rinden-Grenze, scharf begrenzt, perifokales Ödem.' },
  { id: 'k16-t33', sec: '16.3', p: 53, type: 'tf', a: true, q: 'Die Alzheimer-Demenz ist mit ca. 60 % die häufigste Demenzform.', ex: 'Alzheimer ~60 %, vaskuläre Demenz ~15–20 %.' },
  { id: 'k16-t34', sec: '16.3', p: 54, type: 'tf', a: false, q: 'Diffuse Amyloidplaques sind für die Alzheimer-Diagnose beweisend.', ex: 'Diffuse Plaques sind unspezifisch (auch bei gesunden Alten); diagnostisch sind neuritische Plaques.' },
  { id: 'k16-t35', sec: '16.3', p: 54, type: 'tf', a: true, q: 'Die Braak-Stadien der Tangles reichen von transentorhinal über limbisch bis neokortikal.', ex: 'Braak-Stadien I–VI: transentorhinal → limbisch → neokortikal.' },
  { id: 'k16-t36', sec: '16.3', p: 54, type: 'tf', a: false, q: 'Die CERAD-Kriterien beruhen auf der Zahl der Lewy-Körper.', ex: 'CERAD: Dichte der neuritischen Plaques in Relation zum Alter (Altfrage 2021).' },
  { id: 'k16-t37', sec: '16.3', p: 54, type: 'tf', a: true, q: 'Trisomie 21 ist ein genetischer Risikofaktor für den M. Alzheimer.', ex: 'Genetisch: APP, PSEN1/2, Trisomie 21, ApoE4.' },
  { id: 'k16-t38', sec: '16.3', p: 54, type: 'tf', a: false, q: 'Lewy-Körperchen bestehen aus hyperphosphoryliertem Tau.', ex: 'Lewy-Körperchen bestehen aus α-Synuklein; hyperphosphoryliertes Tau bildet neurofibrilläre Tangles.' },
  { id: 'k16-t39', sec: '16.3', p: 54, type: 'tf', a: false, q: 'Lewy-Körperchen liegen im Zellkern der Neurone.', ex: 'Lewy-Körperchen sind intrazytoplasmatische Einschlüsse in Neuronen (Altfrage 2018).' },
  { id: 'k16-t40', sec: '16.3', p: 54, type: 'tf', a: true, q: 'Bei der Creutzfeldt-Jakob-Krankheit faltet sich PrPᶜ in eine proteaseresistente β-Faltblatt-Form (PrPˢᶜ) um.', ex: 'Prionerkrankungen: Fehlfaltung von PrPᶜ → PrPˢᶜ (β-Faltblatt, proteaseresistent, „infektiös“).' },
  { id: 'k16-t41', sec: '16.3', p: 54, type: 'tf', a: false, q: 'Die meisten Fälle der Creutzfeldt-Jakob-Krankheit sind genetisch bedingt.', ex: 'CJD: sporadisch ~85–90 %, genetisch ~10 %.' },
  { id: 'k16-t42', sec: '16.3', p: 54, type: 'tf', a: true, q: 'Die variante CJD (vCJD) betrifft junge Patienten und zeigt floride Plaques.', ex: 'vCJD: BSE, junge Patienten, floride Plaques.' },
  { id: 'k16-t43', sec: '16.3', p: 54, type: 'tf', a: false, q: 'Bei der ALS sind typischerweise die Hinterstränge degeneriert.', ex: 'Bei der ALS bleibt die Sensibilität (Hinterstränge, hintere Zentralwindung) verschont (Altfrage 2020).' },
  { id: 'k16-t44', sec: '16.3', p: 54, type: 'tf', a: true, q: 'Die Chorea Huntington ist eine Polyglutamin-Erkrankung (Huntingtin).', ex: 'Polyglutamin/Huntingtin → Chorea Huntington.' },
  { id: 'k16-t45', sec: '16.4', p: 54, type: 'tf', a: true, q: 'Etwa 80–85 % aller Schlaganfälle sind ischämisch.', ex: 'Hirninfarkt ~80–85 % aller Schlaganfälle, Blutungen ~15 %.' },
  { id: 'k16-t46', sec: '16.4', p: 54, type: 'tf', a: false, q: 'Der Territorialinfarkt betrifft am häufigsten die A. cerebri anterior.', ex: 'Territorialinfarkt: am häufigsten A. cerebri media.' },
  { id: 'k16-t47', sec: '16.4', p: 54, type: 'tf', a: true, q: 'Lakunäre Infarkte entstehen durch Mikroangiopathie, z. B. in Basalganglien, Thalamus und Pons.', ex: 'Lakunärer Infarkt: Mikroangiopathie; Basalganglien, Thalamus, Pons.' },
  { id: 'k16-t48', sec: '16.4', p: 55, type: 'tf', a: false, q: 'Lewy-Körperchen sind ein typischer postischämischer Befund.', ex: 'Postischämisch sind Lewy-Körperchen nicht zu erwarten (Altfrage 2024).' },
  { id: 'k16-t49', sec: '16.4', p: 55, type: 'tf', a: false, q: 'Das Epiduralhämatom entsteht meist durch Ruptur der Brückenvenen.', ex: 'Epidural: arteriell (A. meningea media). Brückenvenen → Subduralhämatom.' },
  { id: 'k16-t50', sec: '16.4', p: 55, type: 'tf', a: true, q: 'Das chronische Subduralhämatom tritt oft bei älteren Menschen nach Bagatelltrauma auf.', ex: 'Chronisches SDH: ältere Menschen, Bagatelltrauma, Alkohol, Antikoagulation.' },
  { id: 'k16-t51', sec: '16.4', p: 55, type: 'tf', a: true, q: 'Die ADPKD ist mit einer Subarachnoidalblutung assoziiert.', ex: 'SAB: Ruptur eines Hirnbasisaneurysmas; 40–60 J, ADPKD.' },
  { id: 'k16-t52', sec: '16.4', p: 55, type: 'tf', a: false, q: 'Häufigste Ursache einer nicht-traumatischen intrazerebralen Blutung ist die arterielle Hypotonie.', ex: 'Häufigste Ursache ist die Hypertonie (Altfrage 2020, 2024).' },
  { id: 'k16-t53', sec: '16.4', p: 55, type: 'tf', a: true, q: 'Ein Ventrikeleinbruch einer intrazerebralen Blutung kann zum Hämatozephalus internus führen.', ex: 'ICB mit Ventrikeleinbruch → Hämatozephalus internus (Altfrage 2024).' },
  { id: 'k16-t54', sec: '16.4', p: 55, type: 'tf', a: true, q: 'Duret-Blutungen im Hirnstamm entstehen bei Einklemmung.', ex: 'Duret-Blutungen: Hirnstamm bei Einklemmung.' },
  { id: 'k16-t55', sec: '16.4', p: 55, type: 'tf', a: false, q: 'Die Purpura cerebri ist eine Massenblutung in den Stammganglien.', ex: 'Purpura cerebri = petechiale Marklagerblutungen (Fettembolie, Gerinnungsstörung, Intoxikation, Luftembolie, Entzündung).' },
  { id: 'k16-t56', sec: '16.5', p: 55, type: 'tf', a: false, q: 'Die virale Meningitis zeigt einen trüben Liquor mit Granulozyten.', ex: 'Virale (lymphozytäre) Meningitis: klar, Lymphozyten. Trüb mit Granulozyten = bakteriell.' },
  { id: 'k16-t57', sec: '16.5', p: 55, type: 'tf', a: true, q: 'Die HSV-Enzephalitis betrifft typischerweise den Temporallappen.', ex: 'HSV-Enzephalitis: hämorrhagisch-nekrotisierend, temporal, Cowdry-A-Einschlüsse.' },
  { id: 'k16-t58', sec: '16.5', p: 55, type: 'tf', a: true, q: 'Die PML wird durch das JC-Virus verursacht und betrifft die Oligodendrozyten.', ex: 'PML: JC-Virus, Oligodendrozyten.' },
  { id: 'k16-t59', sec: '16.5', p: 55, type: 'tf', a: true, q: 'MS-Herde liegen typischerweise periventrikulär („Dawson\'s fingers“).', ex: 'MS-Herde: periventrikulär („Dawson\'s fingers“), Balken, N. opticus, Hirnstamm, Kleinhirn, Rückenmark.' },
  { id: 'k16-t60', sec: '16.5', p: 55, type: 'tf', a: true, q: 'Die zerebrale Toxoplasmose zeigt Ringherde in den Basalganglien.', ex: 'Toxoplasmose: Ringherde in den Basalganglien (opportunistisch bei HIV).' },
  { id: 'k16-t61', sec: '16.5', p: 55, type: 'tf', a: true, q: 'Cryptococcus lässt sich im Tuschepräparat nachweisen.', ex: 'Pilze: Cryptococcus – Tuschepräparat.' },
  { id: 'k16-t62', sec: '16.5', p: 55, type: 'tf', a: false, q: 'Die tuberkulöse Meningitis bildet eine eitrige Haube über der Konvexität.', ex: 'Tuberkulöse Meningitis: basal, sulzig-gelatinös. Die eitrige „Haube“ über der Konvexität passt zur bakteriellen Meningitis.' },
  { id: 'k16-t63', sec: '16.6', p: 56, type: 'tf', a: true, q: 'Bei axonaler Nervenschädigung ist die Nervenleitgeschwindigkeit nahezu normal, die Amplitude vermindert.', ex: 'Axonal: NLG nahezu normal, Amplitude ↓. Demyelinisierend: NLG ↓↓.' },
  { id: 'k16-t64', sec: '16.6', p: 56, type: 'tf', a: false, q: 'Das Guillain-Barré-Syndrom ist eine axonale Neuropathie.', ex: 'Guillain-Barré: segmentale Demyelinisierung (Altfrage 2023).' },
  { id: 'k16-t65', sec: '16.6', p: 56, type: 'tf', a: true, q: 'Eine Fasertypengruppierung spricht für eine Reinnervation nach Denervierung.', ex: 'Neurogene Muskelschädigung: Fasertypengruppierung nach Reinnervation.' },
  { id: 'k16-t66', sec: '16.6', p: 56, type: 'tf', a: false, q: 'Die perifaszikuläre Atrophie ist typisch für die Polymyositis.', ex: 'Perifaszikuläre Atrophie → Dermatomyositis. Polymyositis: endomysiale CD8-T-Zellen.' },
  { id: 'k16-t67', sec: '16.6', p: 56, type: 'tf', a: true, q: 'Bei der Becker-Muskeldystrophie ist Dystrophin vermindert.', ex: 'Duchenne: Dystrophin fehlt. Becker: Dystrophin vermindert.' }
]);
