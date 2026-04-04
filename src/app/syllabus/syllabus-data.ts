// ─── SYLLABUS DATA ────────────────────────────────────────────────────────────

export interface Topic {
  name: string;
  duration: string;
  chapters?: string[];
  learningOutcomes?: string[];
}

export interface SyllabusUnit {
  unit: string;
  topics: Topic[];
}

export interface SubjectSyllabus {
  subject: string;
  subjectCode: string;
  classLevel: string;
  totalMarks: number;
  examDuration: string;
  syllabusCoverage: string;
  units: SyllabusUnit[];
  evaluationPattern: {
    category: string;
    marks: number;
    description: string;
  }[];
}

export const syllabusList: SubjectSyllabus[] = [
  {
    subject: 'English',
    subjectCode: 'ENG-1000',
    classLevel: 'Class X',
    totalMarks: 100,
    examDuration: '3 hours',
    syllabusCoverage: '100%',
    units: [
      {
        unit: 'Reading Comprehension & Vocabulary',
        topics: [
          { name: 'Comprehension Passages', duration: '2 weeks', learningOutcomes: ['Understand complex texts', 'Answer inferential questions'] },
          { name: 'Vocabulary & Idioms', duration: '2 weeks', learningOutcomes: ['Learn words in context', 'Use idioms appropriately'] },
          { name: 'Grammar & Sentence Formation', duration: '3 weeks', learningOutcomes: ['Master tenses', 'Correct grammatical errors'] },
        ],
      },
      {
        unit: 'Literature',
        topics: [
          { name: 'Shakespeare: Macbeth', duration: '3 weeks', chapters: ['Act I & II', 'Act III & IV', 'Act V - Climax'] },
          { name: 'Prose', duration: '2 weeks', chapters: ['Selected Stories', 'Extracts for comprehension'] },
          { name: 'Poetry', duration: '2 weeks', chapters: ['Metaphor, Simile', 'Rhyme & Rhythm'] },
        ],
      },
      {
        unit: 'Writing Skills',
        topics: [
          { name: 'Essay Writing', duration: '2 weeks', learningOutcomes: ['Write structured essays', 'Develop arguments'] },
          { name: 'Letter Writing', duration: '1 week', learningOutcomes: ['Formal & informal letters', 'Application writing'] },
          { name: 'Story Writing', duration: '1 week', learningOutcomes: ['Create engaging narratives', 'Character development'] },
        ],
      },
    ],
    evaluationPattern: [
      { category: 'Reading & Comprehension', marks: 20, description: 'Unseen passages and questions' },
      { category: 'Literature', marks: 30, description: 'Shakespeare, Prose, Poetry' },
      { category: 'Grammar & Vocabulary', marks: 15, description: 'Application-based questions' },
      { category: 'Writing Skills', marks: 35, description: 'Essay, Letter, Story' },
    ],
  },
  {
    subject: 'Mathematics',
    subjectCode: 'MATH-1000',
    classLevel: 'Class X',
    totalMarks: 100,
    examDuration: '3 hours',
    syllabusCoverage: '100%',
    units: [
      {
        unit: 'Algebra',
        topics: [
          { name: 'Linear Equations', duration: '3 weeks', learningOutcomes: ['Solve linear equations', 'Systems of equations'] },
          { name: 'Quadratic Equations', duration: '3 weeks', learningOutcomes: ['Solve quadratic equations', 'Nature of roots'] },
          { name: 'Sequence & Series', duration: '2 weeks', learningOutcomes: ['AP and GP', 'Sum formulas'] },
        ],
      },
      {
        unit: 'Geometry',
        topics: [
          { name: 'Circle Theorems', duration: '3 weeks', learningOutcomes: ['Properties of circles', 'Tangents & chords'] },
          { name: 'Triangles', duration: '2 weeks', learningOutcomes: ['Similarity & congruence', 'Pythagorean theorem'] },
          { name: 'Coordinate Geometry', duration: '2 weeks', learningOutcomes: ['Distance formula', 'Straight lines'] },
        ],
      },
      {
        unit: 'Trigonometry',
        topics: [
          { name: 'Trigonometric Ratios', duration: '2 weeks', learningOutcomes: ['sin, cos, tan values', 'Trigonometric identities'] },
          { name: 'Heights & Distances', duration: '2 weeks', learningOutcomes: ['Angle of elevation & depression', 'Real-world applications'] },
        ],
      },
      {
        unit: 'Statistics & Probability',
        topics: [
          { name: 'Data Representation', duration: '2 weeks', learningOutcomes: ['Graphs & charts', 'Mean, median, mode'] },
          { name: 'Probability', duration: '2 weeks', learningOutcomes: ['Basic probability', 'Compound events'] },
        ],
      },
    ],
    evaluationPattern: [
      { category: 'Algebra', marks: 25, description: 'Equations, series, factorization' },
      { category: 'Geometry', marks: 25, description: 'Theorems, constructions, coordinates' },
      { category: 'Trigonometry', marks: 20, description: 'Ratios, identities, applications' },
      { category: 'Statistics & Probability', marks: 15, description: 'Data analysis, probability' },
      { category: 'Internal Assessment', marks: 15, description: 'Projects & assignments' },
    ],
  },
  {
    subject: 'Science (Physics)',
    subjectCode: 'PHY-1000',
    classLevel: 'Class X',
    totalMarks: 100,
    examDuration: '3 hours',
    syllabusCoverage: '100%',
    units: [
      {
        unit: 'Mechanics',
        topics: [
          { name: 'Motion & Forces', duration: '3 weeks', learningOutcomes: ['Newtons Laws', 'Momentum & impulse'] },
          { name: 'Work, Energy & Power', duration: '2 weeks', learningOutcomes: ['Work done', 'Energy conservation'] },
          { name: 'Rotational Motion', duration: '2 weeks', learningOutcomes: ['Angular velocity', 'Torque & angular momentum'] },
        ],
      },
      {
        unit: 'Heat & Thermodynamics',
        topics: [
          { name: 'Temperature & Heat', duration: '2 weeks', learningOutcomes: ['Heat transfer', 'Specific heat capacity'] },
          { name: 'Thermodynamics', duration: '2 weeks', learningOutcomes: ['First law', 'Entropy'] },
        ],
      },
      {
        unit: 'Waves & Optics',
        topics: [
          { name: 'Wave Motion', duration: '2 weeks', learningOutcomes: ['Simple harmonic motion', 'Wave equations'] },
          { name: 'Light & Optics', duration: '3 weeks', learningOutcomes: ['Reflection & refraction', 'Lenses & mirrors'] },
        ],
      },
      {
        unit: 'Electricity & Magnetism',
        topics: [
          { name: 'Electrostatics', duration: '2 weeks', learningOutcomes: ['Electric field', 'Potential'] },
          { name: 'Current Electricity', duration: '2 weeks', learningOutcomes: ['Ohms law', 'Circuit analysis'] },
          { name: 'Magnetism', duration: '2 weeks', learningOutcomes: ['Magnetic field', 'Electromagnetic induction'] },
        ],
      },
    ],
    evaluationPattern: [
      { category: 'Mechanics', marks: 25, description: 'Motion, forces, energy' },
      { category: 'Heat & Thermodynamics', marks: 15, description: 'Temperature, thermodynamic laws' },
      { category: 'Waves & Optics', marks: 25, description: 'Wave motion, light phenomena' },
      { category: 'Electricity & Magnetism', marks: 25, description: 'Electric & magnetic fields' },
      { category: 'Practicals', marks: 10, description: 'Laboratory experiments' },
    ],
  },
  {
    subject: 'Science (Chemistry)',
    subjectCode: 'CHM-1000',
    classLevel: 'Class X',
    totalMarks: 100,
    examDuration: '3 hours',
    syllabusCoverage: '100%',
    units: [
      {
        unit: 'Atomic Structure & Bonding',
        topics: [
          { name: 'Atomic Theory', duration: '2 weeks', learningOutcomes: ['Atoms & molecules', 'Daltons law'] },
          { name: 'Electronic Configuration', duration: '2 weeks', learningOutcomes: ['Quantum numbers', 'Orbitals'] },
          { name: 'Chemical Bonding', duration: '3 weeks', learningOutcomes: ['Ionic & covalent bonds', 'Molecular geometry'] },
        ],
      },
      {
        unit: 'States of Matter',
        topics: [
          { name: 'Gases', duration: '2 weeks', learningOutcomes: ['Gas laws', 'Kinetic theory'] },
          { name: 'Liquids & Solids', duration: '2 weeks', learningOutcomes: ['Intermolecular forces', 'Crystal structures'] },
        ],
      },
      {
        unit: 'Chemical Reactions',
        topics: [
          { name: 'Balancing Equations', duration: '1 week', learningOutcomes: ['Stoichiometry', 'Limiting reagent'] },
          { name: 'Redox Reactions', duration: '2 weeks', learningOutcomes: ['Oxidation states', 'Balancing redox equations'] },
          { name: 'Thermochemistry', duration: '2 weeks', learningOutcomes: ['Enthalpy', 'Hess law'] },
        ],
      },
      {
        unit: 'Periodic Table & Properties',
        topics: [
          { name: 'Periodic Classification', duration: '2 weeks', learningOutcomes: ['Periodic trends', 'Group properties'] },
          { name: 's, p, d Block Elements', duration: '3 weeks', learningOutcomes: ['Element properties', 'Compound formation'] },
        ],
      },
    ],
    evaluationPattern: [
      { category: 'Atomic Structure', marks: 20, description: 'Atoms, electrons, bonding' },
      { category: 'States of Matter', marks: 15, description: 'Gases, liquids, solids' },
      { category: 'Chemical Reactions', marks: 25, description: 'Balancing, redox, thermochemistry' },
      { category: 'Periodic Table', marks: 20, description: 'Element properties, trends' },
      { category: 'Practicals', marks: 20, description: 'Laboratory experiments' },
    ],
  },
  {
    subject: 'Science (Biology)',
    subjectCode: 'BIO-1000',
    classLevel: 'Class X',
    totalMarks: 100,
    examDuration: '3 hours',
    syllabusCoverage: '100%',
    units: [
      {
        unit: 'Cell Biology',
        topics: [
          { name: 'Cell Structure', duration: '2 weeks', learningOutcomes: ['Prokaryotic & eukaryotic cells', 'Organelles'] },
          { name: 'Cell Division', duration: '2 weeks', learningOutcomes: ['Mitosis & meiosis', 'Cell cycle'] },
        ],
      },
      {
        unit: 'Genetics',
        topics: [
          { name: 'Mendelian Inheritance', duration: '2 weeks', learningOutcomes: ['Laws of inheritance', 'Punnett squares'] },
          { name: 'Molecular Genetics', duration: '2 weeks', learningOutcomes: ['DNA structure', 'Gene expression'] },
        ],
      },
      {
        unit: 'Ecology',
        topics: [
          { name: 'Organisms & Environment', duration: '2 weeks', learningOutcomes: ['Population ecology', 'Community ecology'] },
          { name: 'Ecosystems', duration: '2 weeks', learningOutcomes: ['Energy flow', 'Nutrient cycles'] },
        ],
      },
      {
        unit: 'Human Physiology',
        topics: [
          { name: 'Nutrition & Digestion', duration: '2 weeks', learningOutcomes: ['Digestive system', 'Nutrient absorption'] },
          { name: 'Circulation & Respiration', duration: '2 weeks', learningOutcomes: ['Heart & blood vessels', 'Lung function'] },
          { name: 'Nervous System', duration: '2 weeks', learningOutcomes: ['Neurons', 'Brain & reflexes'] },
        ],
      },
    ],
    evaluationPattern: [
      { category: 'Cell Biology', marks: 20, description: 'Cell structure and division' },
      { category: 'Genetics', marks: 20, description: 'Inheritance patterns' },
      { category: 'Ecology', marks: 15, description: 'Organisms and ecosystems' },
      { category: 'Human Physiology', marks: 25, description: 'Body systems' },
      { category: 'Practicals', marks: 20, description: 'Laboratory experiments' },
    ],
  },
];

export const assessmentSchedule = [
  { event: 'Unit Tests', marks: '20 each', timing: 'Monthly' },
  { event: 'Half Yearly Exam', marks: '50-100', timing: 'November' },
  { event: 'Terminal/Annual Exam', marks: '50-100', timing: 'March-April' },
  { event: 'Practical Assessments', marks: '10-20', timing: 'Throughout year' },
  { event: 'Project Work', marks: '10-20', timing: 'Quarterly' },
];
