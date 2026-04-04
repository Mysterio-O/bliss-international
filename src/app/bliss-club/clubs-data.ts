// ─── CLUBS DATA (SHARED) ────────────────────────────────────────────────────

export interface ClubMember {
  name: string;
  position: string;
  class: string;
}

export interface Activity {
  title: string;
  description: string;
  frequency: string;
  outcomes?: string[];
}

export interface Achievement {
  title: string;
  year: string;
  level: 'School' | 'District' | 'State' | 'National';
}

export interface ClubData {
  name: string;
  motto: string;
  objective: string;
  description: string;
  coordinator: string;
  studentCoordinators: ClubMember[];
  activities: Activity[];
  achievements: Achievement[];
  membershipRequirements: string[];
  meetingSchedule: string;
  clubRoom: string;
}

// ─── LANGUAGE CLUB DATA ────────────────────────────────────────────────────

export const languageClubData: ClubData = {
  name: 'Language Club',
  motto: 'Words Connect Worlds',
  objective: 'To promote fluency in English and Bengali, explore other languages, and develop communication skills.',
  description: 'Our Language Club is dedicated to fostering a love for languages and enhancing communication abilities. Members engage in debates, recitations, poetry reading, and language exchange programs.',
  coordinator: 'Mrs. Priya Sarkar',
  studentCoordinators: [
    { name: 'Arjun Sharma', position: 'President', class: 'Class X' },
    { name: 'Ananya Das', position: 'Vice President', class: 'Class X' },
    { name: 'Rohan Gupta', position: 'Secretary', class: 'Class IX' },
  ],
  activities: [
    {
      title: 'Weekly Debate',
      description: 'Structured debates on current affairs, social issues, and literary topics',
      frequency: 'Every Wednesday',
      outcomes: ['Improved public speaking', 'Critical thinking', 'Leadership skills'],
    },
    {
      title: 'Poetry Recitation',
      description: 'Reading and interpreting Bengali and English poems',
      frequency: 'Bi-weekly',
    },
    {
      title: 'Vocabulary Workshop',
      description: 'Learn new words, idioms, and phrases through games and activities',
      frequency: 'Every Friday',
    },
    {
      title: 'Language Exchange Program',
      description: 'Learning French, Spanish, and other foreign languages basics',
      frequency: 'Monthly',
    },
    {
      title: 'Annual Debate Championship',
      description: 'Inter-school debate competition showcasing oratory skills',
      frequency: 'Annual (November)',
    },
  ],
  achievements: [
    { title: 'Best Debater Award', year: '2025', level: 'School' },
    { title: 'Inter-School Debate Championship', year: '2024', level: 'District' },
    { title: 'Poetry Recitation Competition', year: '2025', level: 'School' },
    { title: 'State Level Debate', year: '2024', level: 'State' },
  ],
  membershipRequirements: [
    'Active participation in at least 2 activities per month',
    'Attendance of 80% meetings',
    'Willingness to represent school in competitions',
  ],
  meetingSchedule: 'Wednesday 4:00 PM - 5:00 PM',
  clubRoom: 'Language Lab, Building B',
};

// ─── SCIENCE CLUB DATA ────────────────────────────────────────────────────

export const scienceClubData: ClubData = {
  name: 'Science Club',
  motto: 'Discover, Experiment, Innovate',
  objective: 'To nurture scientific curiosity, conduct experiments, and develop problem-solving skills through STEM activities.',
  description: 'The Science Club provides a platform for students to explore scientific concepts beyond classroom learning. Members conduct experiments, participate in science fairs, and engage in hands-on STEM projects.',
  coordinator: 'Dr. Rajesh Kumar',
  studentCoordinators: [
    { name: 'Aditi Patel', position: 'President', class: 'Class X' },
    { name: 'Vikram Singh', position: 'Vice President', class: 'Class X' },
    { name: 'Meera Verma', position: 'Treasurer', class: 'Class IX' },
  ],
  activities: [
    {
      title: 'Experiment Lab Sessions',
      description: 'Conducting physics, chemistry, and biology experiments',
      frequency: 'Every Monday & Thursday',
      outcomes: ['Practical knowledge', 'Scientific method', 'Data analysis'],
    },
    {
      title: 'Robotics Workshop',
      description: 'Building and programming robots using Arduino and sensors',
      frequency: 'Bi-weekly',
    },
    {
      title: 'Science Fair',
      description: 'Annual exhibition showcasing student projects and innovations',
      frequency: 'Annual (September)',
    },
    {
      title: 'Guest Scientist Seminars',
      description: 'Talks from practicing scientists and researchers',
      frequency: 'Monthly',
    },
    {
      title: 'Coding & Programming',
      description: 'Python, C++, and problem-solving through programming',
      frequency: 'Every Saturday',
    },
  ],
  achievements: [
    { title: 'State Science Fair First Prize', year: '2025', level: 'State' },
    { title: 'Robotics Competition Winner', year: '2024', level: 'District' },
    { title: 'School Science Project Exhibition', year: '2025', level: 'School' },
    { title: 'National Science Olympiad', year: '2024', level: 'National' },
  ],
  membershipRequirements: [
    'Interest in science and experimentation',
    'Attendance of 75% meetings',
    'Participation in at least one project per semester',
  ],
  meetingSchedule: 'Monday 4:30 PM - 5:30 PM',
  clubRoom: 'Science Lab, Building A',
};

// ─── DEBATING CLUB DATA ────────────────────────────────────────────────────

export const debatingClubData: ClubData = {
  name: 'Debating Club',
  motto: 'Think. Speak. Convince.',
  objective: 'To develop argumentation, critical thinking, and public speaking skills through competitive and friendly debates.',
  description: 'The Debating Club trains students in the art of argumentation and logical reasoning. Members participate in various debate formats and compete at inter-school and state level competitions.',
  coordinator: 'Prof. Deepak Mishra',
  studentCoordinators: [
    { name: 'Shreya Chatterjee', position: 'President', class: 'Class X' },
    { name: 'Aarav Patel', position: 'Vice President', class: 'Class X' },
    { name: 'Diya Nair', position: 'Joint Secretary', class: 'Class IX' },
  ],
  activities: [
    {
      title: 'Formal Debate Sessions',
      description: 'Training in Parliamentary, British Parliamentary, and Asian Debate formats',
      frequency: 'Every Tuesday & Friday',
      outcomes: ['Argumentation skills', 'Confidence', 'Research ability'],
    },
    {
      title: 'Inter-House Debates',
      description: 'Competitive debates between different houses of the school',
      frequency: 'Quarterly',
    },
    {
      title: 'Mock Parliament',
      description: 'Simulating parliamentary proceedings and legislative processes',
      frequency: 'Monthly',
    },
    {
      title: 'Debate Coaching',
      description: 'One-on-one mentoring and feedback sessions',
      frequency: 'As per schedule',
    },
    {
      title: 'Inter-School Debate Tournament',
      description: 'Hosting and participating in debate championships',
      frequency: 'Annual (January)',
    },
  ],
  achievements: [
    { title: 'Best Debater Award (State)', year: '2025', level: 'State' },
    { title: 'Inter-School Debate Champions', year: '2024', level: 'District' },
    { title: 'Parliamentary Debate Winners', year: '2025', level: 'School' },
    { title: 'National Debate Championship', year: '2024', level: 'National' },
  ],
  membershipRequirements: [
    'Enthusiasm for public speaking and argumentation',
    'Regular attendance (80%)',
    'Participation in internal competitions',
  ],
  meetingSchedule: 'Tuesday & Friday 4:00 PM - 5:30 PM',
  clubRoom: 'Auditorium Annexe, Building C',
};

// ─── ART CLUB DATA ────────────────────────────────────────────────────

export const artClubData: ClubData = {
  name: 'Art Club',
  motto: 'Express. Create. Inspire.',
  objective: 'To foster artistic expression, develop creative skills, and appreciate various art forms.',
  description: 'The Art Club provides a creative space for students to explore painting, sculpture, digital art, and other forms of visual expression. Members participate in art exhibitions and community art projects.',
  coordinator: 'Ms. Anjali Verma',
  studentCoordinators: [
    { name: 'Nikhil Joshi', position: 'President', class: 'Class X' },
    { name: 'Priya Singh', position: 'Vice President', class: 'Class X' },
    { name: 'Arun Rao', position: 'Treasurer', class: 'Class IX' },
  ],
  activities: [
    {
      title: 'Painting & Drawing',
      description: 'Oil, acrylic, watercolor painting and pencil sketching techniques',
      frequency: 'Every Monday & Wednesday',
      outcomes: ['Artistic skills', 'Fine motor control', 'Creative expression'],
    },
    {
      title: 'Sculpture & Clay Work',
      description: 'Working with clay, stone, and other sculptural materials',
      frequency: 'Every Thursday',
    },
    {
      title: 'Digital Art & Animation',
      description: 'Learning digital design, photo editing, and animation software',
      frequency: 'Every Saturday',
    },
    {
      title: 'Art Exhibition',
      description: 'Showcasing student artworks in school and community galleries',
      frequency: 'Bi-annual',
    },
    {
      title: 'Mural & Wall Art',
      description: 'Creating large-scale murals on school walls and public spaces',
      frequency: 'Quarterly projects',
    },
  ],
  achievements: [
    { title: 'National Art Exhibition', year: '2025', level: 'National' },
    { title: 'School Art Festival Gold Award', year: '2025', level: 'School' },
    { title: 'District Art Competition', year: '2024', level: 'District' },
    { title: 'Mural Project Recognition', year: '2024', level: 'State' },
  ],
  membershipRequirements: [
    'Passion for artistic expression',
    'Attendance of 70% meetings',
    'Participation in at least one exhibition per year',
  ],
  meetingSchedule: 'Monday & Wednesday 3:30 PM - 5:00 PM',
  clubRoom: 'Art Studio, Building B',
};

// ─── CULTURAL CLUB DATA ────────────────────────────────────────────────────

export const culturalClubData: ClubData = {
  name: 'Cultural Club',
  motto: 'Celebrate. Preserve. Share.',
  objective: 'To promote Indian culture, traditions, and cultural awareness through performances and events.',
  description: 'The Cultural Club celebrates the rich heritage of Indian culture through dance, music, theater, and cultural events. Members organize and perform at school functions and cultural programs.',
  coordinator: 'Mrs. Savitri Das',
  studentCoordinators: [
    { name: 'Isha Reddy', position: 'President', class: 'Class X' },
    { name: 'Sanjay Kumar', position: 'Vice President', class: 'Class X' },
    { name: 'Pooja Sharma', position: 'Event Coordinator', class: 'Class IX' },
  ],
  activities: [
    {
      title: 'Classical Dance Training',
      description: 'Learning Kathak, Bharatanatyam, and folk dance forms',
      frequency: 'Every Tuesday & Thursday',
      outcomes: ['Cultural appreciation', 'Physical fitness', 'Stage presence'],
    },
    {
      title: 'Folk Music & Singing',
      description: 'Traditional folk music and classical singing techniques',
      frequency: 'Every Friday',
    },
    {
      title: 'Theater & Drama',
      description: 'Dramatization of stories, plays, and cultural narratives',
      frequency: 'Bi-weekly rehearsals',
    },
    {
      title: 'Cultural Events',
      description: 'Organizing Puja, Diwali, Pohela Boishakh, and other cultural celebrations',
      frequency: 'As per festival calendar',
    },
    {
      title: 'Annual Cultural Fest',
      description: 'Grand showcase of cultural performances and traditions',
      frequency: 'Annual (March)',
    },
  ],
  achievements: [
    { title: 'State Cultural Festival', year: '2025', level: 'State' },
    { title: 'Inter-School Dance Competition', year: '2024', level: 'District' },
    { title: 'Best Performance Award', year: '2025', level: 'School' },
    { title: 'Cultural Heritage Recognition', year: '2024', level: 'State' },
  ],
  membershipRequirements: [
    'Interest in cultural activities',
    'Attendance of 75% sessions',
    'Participation in at least one performance per year',
  ],
  meetingSchedule: 'Tuesday & Thursday 4:00 PM - 5:30 PM',
  clubRoom: 'Cultural Hall, Building C',
};

// ─── SPORTS CLUB DATA ────────────────────────────────────────────────────

export const sportsClubData: ClubData = {
  name: 'Sports Club',
  motto: 'Play Hard. Aim High. Win Together.',
  objective: 'To promote physical fitness, sportsmanship, and athletic excellence through various sports and games.',
  description: 'The Sports Club organizes training and competitions in cricket, football, basketball, athletics, badminton, and table tennis. Members compete at intra-school, district, and state levels.',
  coordinator: 'Mr. Vikram Reddy',
  studentCoordinators: [
    { name: 'Rohit Sharma', position: 'President', class: 'Class X' },
    { name: 'Neha Kumari', position: 'Vice President', class: 'Class X' },
    { name: 'Arjun Das', position: 'Sports Manager', class: 'Class IX' },
  ],
  activities: [
    {
      title: 'Cricket Training',
      description: 'Batting, bowling, and fielding coaching; matches and tournaments',
      frequency: 'Every Monday, Wednesday & Saturday',
      outcomes: ['Physical fitness', 'Team coordination', 'Strategic thinking'],
    },
    {
      title: 'Football Academy',
      description: 'Football coaching with focus on technique, tactics, and teamwork',
      frequency: 'Every Tuesday & Thursday',
    },
    {
      title: 'Track & Field',
      description: 'Athletics training in running, jumping, throwing events',
      frequency: 'Every Friday & Saturday',
    },
    {
      title: 'Badminton & Table Tennis',
      description: 'Racquet sports coaching and tournaments',
      frequency: 'Every Wednesday',
    },
    {
      title: 'Annual Sports Day',
      description: 'Inter-house sports competition showcasing athletic talent',
      frequency: 'Annual (October)',
    },
  ],
  achievements: [
    { title: 'State Cricket Champions', year: '2025', level: 'State' },
    { title: 'District Football Trophy', year: '2024', level: 'District' },
    { title: 'School Athletics Record Holders', year: '2025', level: 'School' },
    { title: 'National Youth Sports', year: '2024', level: 'National' },
  ],
  membershipRequirements: [
    'Physical fitness and commitment to training',
    'Attendance of 80% training sessions',
    'Sportsmanship and positive attitude',
  ],
  meetingSchedule: 'Mon, Wed, Thu, Sat - 5:00 PM onwards',
  clubRoom: 'Sports Complex & Ground',
};

// ─── ICT CLUB DATA ────────────────────────────────────────────────────

export const ictClubData: ClubData = {
  name: 'ICT Club',
  motto: 'Code. Create. Connect.',
  objective: 'To develop coding skills, digital literacy, and technological innovation among students.',
  description: 'The ICT Club focuses on programming, web development, cybersecurity, and emerging technologies. Members work on real-world projects and participate in coding competitions.',
  coordinator: 'Mr. Sanjay Verma',
  studentCoordinators: [
    { name: 'Rishabh Gupta', position: 'President', class: 'Class X' },
    { name: 'Aparna Rao', position: 'Vice President', class: 'Class X' },
    { name: 'Dev Patel', position: 'Technical Lead', class: 'Class IX' },
  ],
  activities: [
    {
      title: 'Programming in Python',
      description: 'Learning Python fundamentals, data structures, and algorithms',
      frequency: 'Every Monday & Friday',
      outcomes: ['Coding skills', 'Problem-solving', 'Computational thinking'],
    },
    {
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript, and frontend frameworks like React',
      frequency: 'Every Tuesday & Thursday',
    },
    {
      title: 'App Development',
      description: 'Mobile app development using Flutter or Android Studio',
      frequency: 'Weekly workshops',
    },
    {
      title: 'Cybersecurity Workshop',
      description: 'Learning about network security, encryption, and safe practices',
      frequency: 'Bi-weekly',
    },
    {
      title: 'Coding Competition',
      description: 'Participating in online coding contests and hackathons',
      frequency: 'Monthly (HackerRank, CodeChef)',
    },
  ],
  achievements: [
    { title: 'National Coding Championship', year: '2025', level: 'National' },
    { title: 'Web Development Excellence Award', year: '2024', level: 'State' },
    { title: 'School Hackathon Winners', year: '2025', level: 'School' },
    { title: 'App Development Recognition', year: '2024', level: 'District' },
  ],
  membershipRequirements: [
    'Interest in technology and programming',
    'Attendance of 75% sessions',
    'Completion of at least one project per semester',
  ],
  meetingSchedule: 'Monday, Tuesday, Thursday, Friday 4:00 PM - 5:30 PM',
  clubRoom: 'Computer Lab 2, Building A',
};
