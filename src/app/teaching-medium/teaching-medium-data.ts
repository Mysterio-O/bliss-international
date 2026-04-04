// ─── TEACHING MEDIUM DATA ────────────────────────────────────────────────────────

export interface MediumDetail {
  medium: 'English' | 'Bengali';
  description: string;
  subjects: string[];
  approach: string;
  benefits: string[];
  classesOffered: string;
}

export const teachingMediumData: MediumDetail[] = [
  {
    medium: 'English',
    description: 'Our English Medium program aims to develop proficiency in English language and subjects taught primarily in English, preparing students for higher education in international standards.',
    subjects: [
      'English Language & Literature',
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Social Studies',
      'Computer Science',
      'Art & Physical Education',
    ],
    approach: `
      • Interactive classroom sessions with emphasis on comprehension and communication
      • Bilingual support in early classes (Play to Class II) to ease transition
      • STEM-focused curriculum with practical experiments and real-world applications
      • English literature study with critical analysis and creative writing
      • Regular speaking practice through presentations, group discussions, and debates
      • Assessment aligned with international standards
    `,
    benefits: [
      'Global perspective and international competitiveness',
      'Enhanced English communication skills',
      'Better preparation for competitive exams (JEE, NEET, CAT)',
      'Access to international educational resources',
      'Improved employability in global job market',
      'Cultural and cognitive development',
    ],
    classesOffered: 'Play to Class X',
  },
  {
    medium: 'Bengali',
    description: 'Our Bengali Medium program preserves cultural and linguistic heritage while maintaining academic excellence, combining traditional knowledge with modern pedagogical approaches.',
    subjects: [
      'Bengali Language & Literature',
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Social Studies',
      'Computer Science (English terminology)',
      'Art & Physical Education',
    ],
    approach: `
      • Emphasis on Bengali language enrichment and literature appreciation
      • Contextual learning connecting academics to local culture and history
      • Mathematics and science taught with clear Bengali explanations
      • Regular compositions, essays, and creative writing in Bengali
      • Study of Bengali authors, poets, and cultural heritage
      • Balance between traditional knowledge and modern scientific approach
    `,
    benefits: [
      'Strong cultural and linguistic foundation',
      'Better conceptual understanding through mother tongue',
      'Easier transition from home to school',
      'Deep appreciation of Bengali literature and history',
      'Strong communication skills in mother language',
      'Preservation of cultural identity',
    ],
    classesOffered: 'Play to Class X',
  },
];

export const mediumComparison = [
  {
    aspect: 'Language of Instruction',
    english: 'English with Bengali support in lower classes',
    bengali: 'Bengali with English terminology in sciences',
  },
  {
    aspect: 'Subject Textbooks',
    english: 'International and national English-medium textbooks',
    bengali: 'WBSE/CBSE approved Bengali-medium textbooks',
  },
  {
    aspect: 'Literature Study',
    english: 'English literature (Shakespeare, modern authors, poetry)',
    bengali: 'Bengali literature (Rabindranath, modern writers, classics)',
  },
  {
    aspect: 'Examinations',
    english: 'Board exams in English with global recognition',
    bengali: 'Board exams in Bengali aligned with national standards',
  },
  {
    aspect: 'Career Path',
    english: 'Better for international higher education',
    bengali: 'Strong for national universities and administration',
  },
];

export const teachingMethodology = {
  title: 'Our Teaching Methodology',
  methods: [
    {
      name: 'Interactive Learning',
      description: 'Student-centered approach with active participation, discussions, and collaborative projects',
      icon: '💬',
    },
    {
      name: 'Experiential Learning',
      description: 'Learning through doing - field trips, experiments, simulations, and hands-on activities',
      icon: '🔬',
    },
    {
      name: 'Technology Integration',
      description: 'Smart boards, digital resources, coding labs, and online learning platforms',
      icon: '💻',
    },
    {
      name: 'Differentiated Instruction',
      description: 'Tailored teaching to cater to different learning styles and paces',
      icon: '🎯',
    },
    {
      name: 'Peer Learning',
      description: 'Collaborative learning through group discussions, peer teaching, and team projects',
      icon: '👥',
    },
    {
      name: 'Formative Assessment',
      description: 'Continuous evaluation through quizzes, projects, and classroom observations',
      icon: '📋',
    },
  ],
};

export const supportSystems = [
  {
    title: 'Language Support',
    description: 'Additional classes for ESL (English as Second Language) and language enrichment programs',
  },
  {
    title: 'Remedial Sessions',
    description: 'Extra coaching for students requiring additional support in core subjects',
  },
  {
    title: 'Advanced Learning',
    description: 'Enrichment programs and advanced courses for gifted students',
  },
  {
    title: 'Counseling',
    description: 'Academic and career counseling to guide students through their educational journey',
  },
];
