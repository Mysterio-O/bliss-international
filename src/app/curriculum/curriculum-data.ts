// ─── CURRICULUM DATA ────────────────────────────────────────────────────────────

export type ClassLevel = 'Play' | 'Nursery' | 'KG' | 'Class I' | 'Class II' | 'Class III' | 'Class IV' | 'Class V' | 'Class VI' | 'Class VII' | 'Class VIII' | 'Class IX' | 'Class X';

export interface Subject {
  name: string;
  code: string;
  description: string;
  hoursPerWeek: number;
}

export interface Curriculum {
  classLevel: ClassLevel;
  description: string;
  subjects: Subject[];
  totalHours: number;
  ageGroup: string;
  keySkills: string[];
  objectives: string[];
}

export const curriculumData: Curriculum[] = [
  {
    classLevel: 'Play',
    ageGroup: '2-3 years',
    description: 'Foundation stage focusing on sensory development, basic motor skills, and social interaction.',
    totalHours: 0,
    subjects: [
      { name: 'Sensory Exploration', code: 'SE-001', description: 'Colors, shapes, textures, and sounds', hoursPerWeek: 5 },
      { name: 'Gross Motor Skills', code: 'GM-001', description: 'Running, jumping, climbing activities', hoursPerWeek: 4 },
      { name: 'Creative Play', code: 'CP-001', description: 'Drawing, painting, music basics', hoursPerWeek: 3 },
      { name: 'Social Skills', code: 'SS-001', description: 'Sharing, turn-taking, basic communication', hoursPerWeek: 3 },
    ],
    keySkills: ['Sensory awareness', 'Coordination', 'Social interaction', 'Basic communication'],
    objectives: [
      'Develop sensory perception and awareness',
      'Build confidence and independence',
      'Foster social relationships',
      'Encourage creative expression'
    ],
  },
  {
    classLevel: 'Nursery',
    ageGroup: '3-4 years',
    description: 'Early learning through play-based activities emphasizing language, numeracy, and life skills.',
    totalHours: 0,
    subjects: [
      { name: 'English', code: 'ENG-002', description: 'Alphabet recognition, phonics, vocabulary building', hoursPerWeek: 5 },
      { name: 'Bengali', code: 'BEN-002', description: 'Bangla alphabet, basic words, counting', hoursPerWeek: 4 },
      { name: 'Mathematics', code: 'MATH-002', description: 'Counting, number recognition, basic patterns', hoursPerWeek: 4 },
      { name: 'General Knowledge', code: 'GK-002', description: 'Animals, seasons, daily routines', hoursPerWeek: 3 },
      { name: 'Art & Craft', code: 'AC-002', description: 'Drawing, coloring, simple crafts', hoursPerWeek: 3 },
    ],
    keySkills: ['Letter recognition', 'Number awareness', 'Listening skills', 'Fine motor control'],
    objectives: [
      'Introduce language and numeracy concepts',
      'Develop listening and speaking skills',
      'Foster creativity and self-expression',
      'Build foundational academic skills'
    ],
  },
  {
    classLevel: 'KG',
    ageGroup: '4-5 years',
    description: 'Kindergarten curriculum emphasizing literacy, numeracy, and social-emotional development.',
    totalHours: 0,
    subjects: [
      { name: 'English', code: 'ENG-003', description: 'Reading simple sentences, phonics, writing letters', hoursPerWeek: 6 },
      { name: 'Bengali', code: 'BEN-003', description: 'Reading, writing basics, comprehension', hoursPerWeek: 5 },
      { name: 'Mathematics', code: 'MATH-003', description: 'Addition, subtraction within 10, time concepts', hoursPerWeek: 5 },
      { name: 'Environmental Studies', code: 'ENV-003', description: 'Nature, seasons, living things', hoursPerWeek: 3 },
      { name: 'Art & Music', code: 'AM-003', description: 'Drawing, painting, basic musical concepts', hoursPerWeek: 3 },
      { name: 'Physical Education', code: 'PE-003', description: 'Yoga, basic exercises, games', hoursPerWeek: 2 },
    ],
    keySkills: ['Reading fluency', 'Basic math concepts', 'Writing skills', 'Scientific curiosity'],
    objectives: [
      'Develop reading and writing skills',
      'Build mathematical understanding',
      'Explore nature and environment',
      'Enhance physical and creative abilities'
    ],
  },
  {
    classLevel: 'Class I',
    ageGroup: '5-6 years',
    description: 'Early primary education with structured academics, life skills, and foundational knowledge.',
    totalHours: 24,
    subjects: [
      { name: 'English', code: 'ENG-100', description: 'Reading, writing, grammar, comprehension', hoursPerWeek: 6 },
      { name: 'Bengali', code: 'BEN-100', description: 'Reading fluency, writing, rhymes, stories', hoursPerWeek: 5 },
      { name: 'Mathematics', code: 'MATH-100', description: 'Numbers, operations, geometry basics, measurement', hoursPerWeek: 6 },
      { name: 'Environmental Studies', code: 'ENV-100', description: 'Living and non-living things, human body', hoursPerWeek: 3 },
      { name: 'Art & Craft', code: 'AC-100', description: 'Drawing, painting, paper crafts', hoursPerWeek: 2 },
      { name: 'Music', code: 'MUS-100', description: 'Basic music theory, singing', hoursPerWeek: 1 },
      { name: 'Physical Education', code: 'PE-100', description: 'Sports, exercises, playground safety', hoursPerWeek: 1 },
    ],
    keySkills: ['Reading comprehension', 'Problem-solving', 'Creative thinking', 'Team work'],
    objectives: [
      'Build strong language foundation',
      'Develop mathematical reasoning',
      'Encourage scientific inquiry',
      'Promote holistic development'
    ],
  },
  {
    classLevel: 'Class V',
    ageGroup: '9-10 years',
    description: 'Upper primary education with emphasis on analytical skills, subject specialization, and digital literacy.',
    totalHours: 30,
    subjects: [
      { name: 'English', code: 'ENG-500', description: 'Literature, composition, grammar, comprehension', hoursPerWeek: 6 },
      { name: 'Bengali', code: 'BEN-500', description: 'Literature, poetry, essay writing', hoursPerWeek: 5 },
      { name: 'Mathematics', code: 'MATH-500', description: 'Algebra basics, geometry, data handling', hoursPerWeek: 6 },
      { name: 'Science', code: 'SCI-500', description: 'Biology, physics, chemistry concepts', hoursPerWeek: 5 },
      { name: 'Social Studies', code: 'SS-500', description: 'Geography, history, civics', hoursPerWeek: 4 },
      { name: 'Computer Studies', code: 'CS-500', description: 'Basic programming, MS Office, Internet safety', hoursPerWeek: 2 },
      { name: 'Art', code: 'ART-500', description: 'Drawing, painting, sculpture', hoursPerWeek: 1 },
      { name: 'Physical Education', code: 'PE-500', description: 'Sports, athletics, health education', hoursPerWeek: 1 },
    ],
    keySkills: ['Critical thinking', 'Research skills', 'Digital literacy', 'Leadership'],
    objectives: [
      'Develop advanced language skills',
      'Build strong mathematical foundation',
      'Promote scientific thinking',
      'Introduce technology literacy',
      'Foster global awareness'
    ],
  },
  {
    classLevel: 'Class X',
    ageGroup: '15-16 years',
    description: 'Secondary education culminating in board examinations, preparing for higher education.',
    totalHours: 35,
    subjects: [
      { name: 'English (First Language)', code: 'ENG-1000', description: 'Literature, composition, academic writing', hoursPerWeek: 5 },
      { name: 'Bengali (First Language)', code: 'BEN-1000', description: 'Literature, comprehension, essay writing', hoursPerWeek: 5 },
      { name: 'Mathematics', code: 'MATH-1000', description: 'Algebra, geometry, trigonometry, statistics', hoursPerWeek: 6 },
      { name: 'Science (Physics)', code: 'PHY-1000', description: 'Mechanics, heat, light, electricity, magnetism', hoursPerWeek: 4 },
      { name: 'Science (Chemistry)', code: 'CHM-1000', description: 'Atomic structure, reactions, periodic table', hoursPerWeek: 4 },
      { name: 'Science (Biology)', code: 'BIO-1000', description: 'Cell biology, genetics, ecology, human body', hoursPerWeek: 4 },
      { name: 'Social Studies (History)', code: 'HIS-1000', description: 'World history, Indian history, modern world', hoursPerWeek: 3 },
      { name: 'Social Studies (Geography)', code: 'GEO-1000', description: 'Physical geography, economic geography, GIS', hoursPerWeek: 2 },
      { name: 'Social Studies (Civics)', code: 'CIV-1000', description: 'Constitutional law, governance, citizen rights', hoursPerWeek: 2 },
      { name: 'Computer Science', code: 'CS-1000', description: 'Python programming, algorithms, databases', hoursPerWeek: 3 },
      { name: 'Physical Education', code: 'PE-1000', description: 'Sports training, fitness, sports science', hoursPerWeek: 2 },
    ],
    keySkills: ['Advanced problem-solving', 'Research methodology', 'Critical analysis', 'Coding', 'Communication'],
    objectives: [
      'Prepare for board examinations',
      'Build subject expertise',
      'Develop research and analytical skills',
      'Foster career guidance awareness',
      'Promote social responsibility'
    ],
  },
];

export const overviewStats = [
  {
    label: 'Total Classes',
    value: '13',
    color: 'bg-primary',
  },
  {
    label: 'Subject Areas',
    value: '25+',
    color: 'bg-secondary',
  },
  {
    label: 'Academic Hours/Week',
    value: '30+',
    color: 'bg-accent',
  },
  {
    label: 'Co-curricular Activities',
    value: 'Included',
    color: 'bg-blue-500',
  },
];

export const curriculumApproach = {
  title: 'Our Curriculum Approach',
  description: 'BLISS International Academy follows a comprehensive, student-centric curriculum designed to nurture critical thinking, creativity, and character development.',
  highlights: [
    {
      title: 'Holistic Learning',
      description: 'Integration of academics, arts, sports, and life skills for well-rounded development',
      icon: '🎓',
    },
    {
      title: 'Activity-Based Learning',
      description: 'Interactive sessions, experiential learning, and project-based education',
      icon: '🔬',
    },
    {
      title: 'Technology Integration',
      description: 'Smart classrooms, digital resources, and coding skills from early classes',
      icon: '💻',
    },
    {
      title: 'Personalized Learning',
      description: 'Individual attention, adaptive learning paths, and progress tracking',
      icon: '👤',
    },
    {
      title: 'Values-Based Education',
      description: 'Character building, ethics, and social responsibility embedded in curriculum',
      icon: '🌍',
    },
    {
      title: 'Continuous Assessment',
      description: 'Formative and summative evaluations, regular feedback, and counseling',
      icon: '📊',
    },
  ],
};
