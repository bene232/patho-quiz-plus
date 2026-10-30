/* Kapitelstruktur der „Klinische Pathologie – Kurzfassung“ (57 Seiten).
   stars: ★★★ = Dauerbrenner (≥ 7 von 16 Altklausuren), ★★ = regelmäßig (4–6), ★ = vereinzelt, 0 = ohne Markierung.
   art/color: Kapitelbild (img/<art>.svg) und Kapitelfarbe in der Oberfläche.
   Fragen werden von den Kapiteldateien über PQ.registerChapter() eingetragen. */
window.PQ = window.PQ || {};

PQ.VERSION = '1.16 · Kapitel 1–17';

PQ.chapters = [
  {
    id: 1, title: 'Tumorklassifikation, Molekularpathologie & Methoden', short: 'Tumor & Methoden', page: 4, stars: 3, art: 'microscope', color: '#3b82f6',
    sections: [
      { id: '1.1', title: 'Tumorklassifikation: Typing, Grading, Staging', stars: 0 },
      { id: '1.2', title: 'TNM-System und R-Klassifikation', stars: 0 },
      { id: '1.3', title: 'Biomarker, prädiktive Faktoren, EGFR/KRAS', stars: 3 },
      { id: '1.4', title: 'Färbungen & Immunhistochemie', stars: 0 },
      { id: '1.5', title: 'Metastasierungsmuster', stars: 0 }
    ]
  },
  {
    id: 2, title: 'Immunpathologie, Granulome, Infektionen', short: 'Immunpathologie', page: 7, stars: 2, art: 'shield', color: '#0ea5e9',
    sections: [
      { id: '2.1', title: 'Hypersensitivitätsreaktionen (Coombs & Gell)', stars: 1 },
      { id: '2.2', title: 'Granulome', stars: 3 },
      { id: '2.3', title: 'Transplantation & Abstoßung', stars: 2 },
      { id: '2.4', title: 'Immunsuppression & opportunistische Erreger', stars: 2 },
      { id: '2.5', title: 'Amyloidose', stars: 2 },
      { id: '2.6', title: 'Autoimmunerkrankungen (Kurzüberblick)', stars: 1 }
    ]
  },
  {
    id: 3, title: 'Hämatopathologie: Knochenmark, Leukämien, Lymphome', short: 'Hämatopathologie', page: 10, stars: 3, art: 'cells', color: '#d946ef',
    sections: [
      { id: '3.1', title: 'Knochenmark', stars: 0 },
      { id: '3.2', title: 'Myeloische Neoplasien', stars: 3 },
      { id: '3.3', title: 'Lymphome', stars: 2 }
    ]
  },
  {
    id: 4, title: 'Herz', short: 'Herz', page: 12, stars: 3, art: 'heart', color: '#f43f5e',
    sections: [
      { id: '4.1', title: 'Arteriosklerose & KHK', stars: 2 },
      { id: '4.2', title: 'Myokardinfarkt', stars: 2 },
      { id: '4.3', title: 'Herzhypertrophie & Cor pulmonale', stars: 0 },
      { id: '4.4', title: 'Kardiomyopathien', stars: 2 },
      { id: '4.5', title: 'Myokarditis', stars: 2 },
      { id: '4.6', title: 'Endokarditis', stars: 3 },
      { id: '4.7', title: 'Erworbene Klappenfehler', stars: 0 },
      { id: '4.8', title: 'Angeborene Herzfehler', stars: 3 },
      { id: '4.9', title: 'Perikarditis & Herztumoren', stars: 0 }
    ]
  },
  {
    id: 5, title: 'Gefäße: Vaskulitis, Aneurysma, Thrombose, Gefäßtumoren', short: 'Gefäße', page: 16, stars: 3, art: 'vessel', color: '#6366f1',
    sections: [
      { id: '5.1', title: 'Vaskulitiden (Chapel Hill 2012)', stars: 3 },
      { id: '5.2', title: 'Aneurysma & Dissektion', stars: 2 },
      { id: '5.3', title: 'Thrombose, Thrombophlebitis, Embolie', stars: 2 },
      { id: '5.4', title: 'pAVK', stars: 0 },
      { id: '5.5', title: 'Vaskuläre Tumoren & Malformationen', stars: 2 }
    ]
  },
  {
    id: 6, title: 'Lunge & Pleura', short: 'Lunge', page: 19, stars: 3, art: 'lungs', color: '#06b6d4',
    sections: [
      { id: '6.1', title: 'Pneumonien', stars: 3 },
      { id: '6.2', title: 'Tuberkulose', stars: 3 },
      { id: '6.3', title: 'Sarkoidose', stars: 0 },
      { id: '6.4', title: 'Diffuser Alveolarschaden (DAD) / ARDS', stars: 2 },
      { id: '6.5', title: 'Interstitielle Lungenerkrankungen & Fibrose', stars: 2 },
      { id: '6.6', title: 'Asbest & Mesotheliom', stars: 2 },
      { id: '6.7', title: 'Emphysem, COPD, Kreislauf', stars: 1 },
      { id: '6.8', title: 'Lungenkarzinom', stars: 3 }
    ]
  },
  {
    id: 7, title: 'Ösophagus, Magen, Dünndarm', short: 'Ösophagus & Magen', page: 23, stars: 3, art: 'stomach', color: '#f59e0b',
    sections: [
      { id: '7.1', title: 'Ösophagus', stars: 2 },
      { id: '7.2', title: 'Gastritis', stars: 3 },
      { id: '7.3', title: 'Erosion & Ulkus', stars: 3 },
      { id: '7.4', title: 'Magenkarzinom', stars: 2 },
      { id: '7.5', title: 'GIST & NET', stars: 1 },
      { id: '7.6', title: 'Dünndarm: Malassimilation, Zöliakie & Co.', stars: 2 }
    ]
  },
  {
    id: 8, title: 'Kolon & Rektum', short: 'Kolon & Rektum', page: 26, stars: 3, art: 'colon', color: '#a16207',
    sections: [
      { id: '8.1', title: 'Chronisch-entzündliche Darmerkrankungen', stars: 3 },
      { id: '8.2', title: 'Weitere Kolitiden', stars: 2 },
      { id: '8.3', title: 'Kolorektale Polypen', stars: 3 },
      { id: '8.4', title: 'Kolorektales Karzinom', stars: 3 },
      { id: '8.5', title: 'Hereditäre Syndrome', stars: 2 }
    ]
  },
  {
    id: 9, title: 'Leber, Gallenwege, Pankreas', short: 'Leber & Pankreas', page: 29, stars: 3, art: 'liver', color: '#b45309',
    sections: [
      { id: '9.1', title: 'Leberrundherd & Lebertumoren', stars: 3 },
      { id: '9.2', title: 'Leberzirrhose & portale Hypertonie', stars: 1 },
      { id: '9.3', title: 'PSC & PBC', stars: 2 },
      { id: '9.4', title: 'Gallenblase & Gallenwege', stars: 2 },
      { id: '9.5', title: 'Pankreas', stars: 2 }
    ]
  },
  {
    id: 10, title: 'Niere & Nebenniere', short: 'Niere', page: 32, stars: 3, art: 'kidney', color: '#e11d48',
    sections: [
      { id: '10.1', title: 'Glomerulopathien', stars: 3 },
      { id: '10.2', title: 'Interstitielle Nephritis & Pyelonephritis', stars: 3 },
      { id: '10.3', title: 'Zystische Nierenerkrankungen & Fehlbildungen', stars: 2 },
      { id: '10.4', title: 'Vaskuläre Nierenschäden, chronische NI, Steine', stars: 2 },
      { id: '10.5', title: 'Nierentumoren', stars: 3 }
    ]
  },
  {
    id: 11, title: 'Harnblase, Prostata, Hoden', short: 'Uro', page: 36, stars: 3, art: 'drop', color: '#0284c7',
    sections: [
      { id: '11.1', title: 'Harnblase: Entzündung', stars: 1 },
      { id: '11.2', title: 'Urotheltumoren', stars: 3 },
      { id: '11.3', title: 'Prostata: BPH & Prostatitis', stars: 2 },
      { id: '11.4', title: 'Prostatakarzinom', stars: 3 },
      { id: '11.5', title: 'Hodentumoren', stars: 3 }
    ]
  },
  {
    id: 12, title: 'Schilddrüse & Nebenschilddrüse', short: 'Schilddrüse', page: 39, stars: 3, art: 'thyroid', color: '#14b8a6',
    sections: [
      { id: '12.1', title: 'Struma, Funktion, Thyreoiditis', stars: 2 },
      { id: '12.2', title: 'Schilddrüsenkarzinome', stars: 3 },
      { id: '12.3', title: 'Nebenschilddrüse & Hyperparathyreoidismus', stars: 2 }
    ]
  },
  {
    id: 13, title: 'Mamma', short: 'Mamma', page: 42, stars: 3, art: 'ribbon', color: '#ec4899',
    sections: [
      { id: '13.1', title: 'Diagnostik & DD Rundherd', stars: 0 },
      { id: '13.2', title: 'Präkanzerosen & In-situ-Läsionen', stars: 2 },
      { id: '13.3', title: 'Mammakarzinom', stars: 3 }
    ]
  },
  {
    id: 14, title: 'Zervix, Uterus, Ovar', short: 'Gyn', page: 44, stars: 3, art: 'uterus', color: '#db2777',
    sections: [
      { id: '14.1', title: 'Zervixkarzinom & Präneoplasien', stars: 3 },
      { id: '14.2', title: 'Endometrium', stars: 3 },
      { id: '14.3', title: 'Weitere Uterustumoren & Endometriose', stars: 2 },
      { id: '14.4', title: 'Ovar', stars: 3 }
    ]
  },
  {
    id: 15, title: 'Knochen, Gelenke, Weichgewebe', short: 'Knochen & Weichgewebe', page: 47, stars: 3, art: 'bone', color: '#78716c',
    sections: [
      { id: '15.1', title: 'Arthrose', stars: 2 },
      { id: '15.2', title: 'Gelenkendoprothesenpathologie', stars: 1 },
      { id: '15.3', title: 'Arthritiden', stars: 3 },
      { id: '15.4', title: 'Osteomyelitis', stars: 3 },
      { id: '15.5', title: 'Osteopathien, Fraktur, Knochenzysten', stars: 2 },
      { id: '15.6', title: 'Knochentumoren', stars: 3 },
      { id: '15.7', title: 'Weichgewebe & Sehnen', stars: 2 }
    ]
  },
  {
    id: 16, title: 'Neuropathologie', short: 'Neuro', page: 52, stars: 3, art: 'brain', color: '#8b5cf6',
    sections: [
      { id: '16.1', title: 'ZNS-Tumoren: Grundlagen', stars: 3 },
      { id: '16.2', title: 'ZNS-Tumoren: Entitäten', stars: 3 },
      { id: '16.3', title: 'Neurodegeneration & Demenzen', stars: 3 },
      { id: '16.4', title: 'Zerebrovaskuläre Erkrankungen & Blutungen', stars: 3 },
      { id: '16.5', title: 'Entzündliche ZNS-Erkrankungen', stars: 2 },
      { id: '16.6', title: 'Peripherer Nerv & Muskel', stars: 1 }
    ]
  },
  {
    id: 17, title: 'Kopf-Hals: Speicheldrüsen, Mundhöhle, Kiefer', short: 'Kopf-Hals', page: 57, stars: 1, art: 'tooth', color: '#10b981',
    sections: [
      { id: '17.1', title: 'Speicheldrüsen', stars: 1 },
      { id: '17.2', title: 'Mundhöhle & DD Halsschwellung', stars: 1 },
      { id: '17.3', title: 'Kiefer', stars: 1 }
    ]
  }
];

PQ.questions = [];
PQ.byId = {};
PQ.sections = {};

PQ.chapters.forEach(ch => (ch.sections || []).forEach(s => { PQ.sections[s.id] = Object.assign({ chapter: ch.id }, s); }));

/* Frageformate:
   single: { opts: [...], a: Index der richtigen Option }
   kprim:  { st: [[Aussage, true|false] × 4] }
   match:  { pairs: [[Begriff, Zuordnung], ...] }  (rechte Seite wird gemischt)
   tf:     { q: Aussage, a: true|false }
   Gemeinsam: id, sec, p (Seite), q, ex (Erklärung), optional alt (Altklausur-Jahre), dis (umstritten). */
PQ.registerChapter = function (chapterId, items) {
  const ch = PQ.chapters.find(c => c.id === chapterId);
  ch.available = true;
  items.forEach(item => {
    const sec = PQ.sections[item.sec];
    const q = Object.assign({ chapter: chapterId, stars: sec ? sec.stars : 0 }, item);
    PQ.questions.push(q);
    PQ.byId[q.id] = q;
  });
};
