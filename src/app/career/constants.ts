export type JobPosting = {
    id: string;
    title: string;
    department: string;
    type: "Full-time" | "Part-time" | "Contract";
    experience: string;
    education: string;
    positions: number;
    deadline: string;
    postedDate: string;
    responsibilities: string[];
    requirements: string[];
    salary?: string;
    benefits?: string[];
};

export type CampusCareers = {
    id: string;
    name: string;
    jobs: JobPosting[];
};

export const campusCareers: CampusCareers[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        jobs: [
            {
                id: "job-1",
                title: "Senior English Teacher",
                department: "Academic",
                type: "Full-time",
                experience: "3-5 years in teaching English at secondary level",
                education: "B.A. (Hons) & M.A. in English from a recognized university",
                positions: 2,
                deadline: "April 30, 2026",
                postedDate: "March 28, 2026",
                responsibilities: [
                    "Prepare and deliver engaging English lessons for Classes 6-10",
                    "Develop curriculum and lesson plans aligned with NCTB standards",
                    "Assess student performance and provide constructive feedback",
                    "Participate in faculty meetings and professional development programs",
                    "Organize language-related extracurricular activities",
                ],
                requirements: [
                    "Strong command of English language (written and spoken)",
                    "Experience with Cambridge or NCTB English Version curriculum",
                    "Excellent classroom management skills",
                    "Proficiency in modern teaching methodologies",
                    "Good communication and interpersonal skills",
                ],
                salary: "Competitive salary based on qualifications and experience",
                benefits: [
                    "Annual increment",
                    "Festival bonuses",
                    "Professional development opportunities",
                    "Health benefits",
                ],
            },
            {
                id: "job-2",
                title: "Mathematics Teacher",
                department: "Academic",
                type: "Full-time",
                experience: "2-4 years teaching experience preferred",
                education: "B.Sc. & M.Sc. in Mathematics or related field",
                positions: 1,
                deadline: "May 5, 2026",
                postedDate: "April 1, 2026",
                responsibilities: [
                    "Teach mathematics to students of Classes 6-10",
                    "Design and implement effective lesson plans",
                    "Conduct regular assessments and provide progress reports",
                    "Guide students in mathematics competitions and olympiads",
                    "Use technology and innovative methods in teaching",
                ],
                requirements: [
                    "Strong foundation in mathematics",
                    "Ability to explain complex concepts in simple terms",
                    "Experience with problem-solving and analytical teaching",
                    "Patience and dedication to student success",
                    "Computer literacy (MS Office, educational software)",
                ],
                salary: "As per institution policy",
            },
            {
                id: "job-3",
                title: "ICT Coordinator",
                department: "Technology",
                type: "Full-time",
                experience: "3+ years in educational technology",
                education: "B.Sc. in Computer Science/IT or related field",
                positions: 1,
                deadline: "April 25, 2026",
                postedDate: "March 25, 2026",
                responsibilities: [
                    "Manage and maintain computer labs and digital infrastructure",
                    "Teach ICT courses to students",
                    "Train teachers on educational technology tools",
                    "Oversee campus network and cybersecurity",
                    "Support digital learning initiatives",
                ],
                requirements: [
                    "Expertise in computer hardware and software",
                    "Knowledge of networking and system administration",
                    "Experience with educational management systems",
                    "Problem-solving and troubleshooting skills",
                    "Ability to train non-technical staff",
                ],
                benefits: [
                    "Professional development support",
                    "Access to latest technology tools",
                    "Collaborative work environment",
                ],
            },
            {
                id: "job-4",
                title: "Arabic Language Instructor",
                department: "Islamic Studies",
                type: "Part-time",
                experience: "2+ years teaching Arabic language",
                education: "Degree in Arabic Language from recognized institution",
                positions: 1,
                deadline: "May 10, 2026",
                postedDate: "April 5, 2026",
                responsibilities: [
                    "Teach Arabic language and grammar to students",
                    "Develop Arabic language curriculum materials",
                    "Conduct Arabic language proficiency assessments",
                    "Organize Arabic speaking and writing competitions",
                ],
                requirements: [
                    "Fluency in Arabic (native or near-native)",
                    "Experience in teaching Arabic as a second language",
                    "Understanding of Islamic studies pedagogy",
                    "Cultural sensitivity and patience",
                ],
            },
            {
                id: "job-5",
                title: "Librarian",
                department: "Administration",
                type: "Full-time",
                experience: "1-3 years in library management",
                education: "Bachelor's degree in Library Science or related field",
                positions: 1,
                deadline: "April 20, 2026",
                postedDate: "March 20, 2026",
                responsibilities: [
                    "Manage library operations and maintain catalog system",
                    "Assist students and teachers in finding resources",
                    "Organize book borrowing and return processes",
                    "Maintain digital library and e-resources",
                    "Conduct library orientation sessions",
                ],
                requirements: [
                    "Knowledge of library management systems",
                    "Organizational and cataloging skills",
                    "Computer literacy",
                    "Customer service orientation",
                    "Attention to detail",
                ],
            },
        ],
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        jobs: [
            {
                id: "job-1",
                title: "Science Teacher (Physics & Chemistry)",
                department: "Academic",
                type: "Full-time",
                experience: "2-5 years teaching science at secondary level",
                education: "B.Sc. & M.Sc. in Physics/Chemistry or related field",
                positions: 1,
                deadline: "May 1, 2026",
                postedDate: "March 30, 2026",
                responsibilities: [
                    "Teach Physics and Chemistry to Classes 6-10",
                    "Conduct laboratory experiments and demonstrations",
                    "Prepare students for science fairs and competitions",
                    "Develop and implement practical-based learning activities",
                    "Maintain laboratory equipment and safety protocols",
                ],
                requirements: [
                    "Strong background in physical sciences",
                    "Experience with laboratory teaching",
                    "Knowledge of safety procedures",
                    "Innovative teaching approaches",
                    "Ability to inspire scientific curiosity",
                ],
                salary: "Competitive package with benefits",
                benefits: [
                    "Annual bonuses",
                    "Professional training",
                    "Career growth opportunities",
                ],
            },
            {
                id: "job-2",
                title: "Physical Education Teacher",
                department: "Sports & Wellness",
                type: "Full-time",
                experience: "2+ years in sports coaching/physical education",
                education: "Degree in Physical Education or Sports Science",
                positions: 1,
                deadline: "April 28, 2026",
                postedDate: "April 2, 2026",
                responsibilities: [
                    "Plan and conduct physical education classes",
                    "Organize sports events and competitions",
                    "Train students in various sports disciplines",
                    "Monitor student fitness and health",
                    "Coach school sports teams",
                ],
                requirements: [
                    "Knowledge of multiple sports and games",
                    "First aid and CPR certification (preferred)",
                    "Strong motivational and leadership skills",
                    "Physical fitness and stamina",
                    "Team building capabilities",
                ],
            },
            {
                id: "job-3",
                title: "Assistant Teacher - Bangla",
                department: "Academic",
                type: "Full-time",
                experience: "1-3 years (fresh graduates may apply)",
                education: "B.A. (Hons) & M.A. in Bangla from recognized university",
                positions: 2,
                deadline: "May 8, 2026",
                postedDate: "April 6, 2026",
                responsibilities: [
                    "Teach Bangla language and literature",
                    "Develop students' reading and writing skills",
                    "Prepare lesson plans and teaching materials",
                    "Assess student progress through tests and assignments",
                    "Promote Bengali culture and heritage",
                ],
                requirements: [
                    "Excellent command of Bengali language",
                    "Passion for teaching and literature",
                    "Creative teaching methods",
                    "Patience and dedication",
                    "Good communication skills",
                ],
                salary: "As per government pay scale",
            },
            {
                id: "job-4",
                title: "Administrative Officer",
                department: "Administration",
                type: "Full-time",
                experience: "2-4 years in educational administration",
                education: "Bachelor's degree in any discipline, MBA preferred",
                positions: 1,
                deadline: "April 22, 2026",
                postedDate: "March 22, 2026",
                responsibilities: [
                    "Manage day-to-day administrative operations",
                    "Coordinate with teachers, students, and parents",
                    "Handle student admissions and documentation",
                    "Maintain records and prepare reports",
                    "Support principal in institutional management",
                ],
                requirements: [
                    "Strong organizational and multitasking abilities",
                    "Proficiency in MS Office and management software",
                    "Excellent communication skills in English and Bangla",
                    "Problem-solving and decision-making skills",
                    "Professional demeanor",
                ],
                benefits: [
                    "Stable work environment",
                    "Performance bonuses",
                    "Leave benefits",
                ],
            },
            {
                id: "job-5",
                title: "Quran & Tajweed Instructor",
                department: "Islamic Studies",
                type: "Full-time",
                experience: "Hafiz-e-Quran with 2+ years teaching experience",
                education: "Dawra-e-Hadith or equivalent Islamic education",
                positions: 1,
                deadline: "May 12, 2026",
                postedDate: "April 7, 2026",
                responsibilities: [
                    "Teach Quran recitation with proper Tajweed",
                    "Guide students in Hifz program",
                    "Conduct Islamic studies classes",
                    "Organize Quran recitation competitions",
                    "Provide spiritual and moral guidance",
                ],
                requirements: [
                    "Hafiz-e-Quran with Ijazah (certification)",
                    "Expertise in Tajweed and Qira'at",
                    "Understanding of child psychology",
                    "Patience and compassion",
                    "Ability to create engaging learning environment",
                ],
            },
        ],
    },
];

export const departments = [
    "All Departments",
    "Academic",
    "Islamic Studies",
    "Technology",
    "Sports & Wellness",
    "Administration",
];

export const jobTypes = ["All Types", "Full-time", "Part-time", "Contract"];
