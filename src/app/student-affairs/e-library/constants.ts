export type Book = {
    id: string;
    title: string;
    author: string;
    category: string;
    description: string;
    publisher?: string;
    year?: string;
    available: boolean;
    coverImage?: string;
};

export type CampusLibrary = {
    id: string;
    name: string;
    books: Book[];
};

export const campusLibraries: CampusLibrary[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        books: [
            {
                id: "book-1",
                title: "Advanced Mathematics for Class 10",
                author: "Dr. Mahbubur Rahman",
                category: "Mathematics",
                description: "Comprehensive mathematics textbook covering algebra, geometry, trigonometry, and calculus for Class 10 students.",
                publisher: "Academic Publishers Bangladesh",
                year: "2024",
                available: true,
            },
            {
                id: "book-2",
                title: "Physics Fundamentals",
                author: "Prof. Sharmin Ahmed",
                category: "Science",
                description: "Essential physics concepts with practical experiments and real-world applications.",
                publisher: "Science Education Press",
                year: "2023",
                available: true,
            },
            {
                id: "book-3",
                title: "English Literature Anthology",
                author: "Various Authors",
                category: "Literature",
                description: "Collection of classic and contemporary English literature including poetry, short stories, and essays.",
                publisher: "Literary Circle",
                year: "2024",
                available: false,
            },
            {
                id: "book-4",
                title: "Bangladesh History & Culture",
                author: "Dr. Kamal Hossain",
                category: "History",
                description: "Comprehensive study of Bangladesh's rich history, liberation war, and cultural heritage.",
                publisher: "National Books",
                year: "2023",
                available: true,
            },
            {
                id: "book-5",
                title: "Islamic Studies - Quran & Hadith",
                author: "Sheikh Abdullah Rahman",
                category: "Islamic Studies",
                description: "In-depth study of Quranic verses and authentic Hadiths with contemporary interpretations.",
                publisher: "Islamic Foundation",
                year: "2024",
                available: true,
            },
            {
                id: "book-6",
                title: "Chemistry: Theory & Practice",
                author: "Dr. Farhana Begum",
                category: "Science",
                description: "Interactive chemistry guide with laboratory experiments and safety protocols.",
                publisher: "Science Publishers Ltd",
                year: "2023",
                available: true,
            },
            {
                id: "book-7",
                title: "Bangla Sahitya Sangraha",
                author: "Rabindranath Tagore",
                category: "Literature",
                description: "Selected works of Bengali literature including poems, stories, and essays.",
                publisher: "Bangla Academy",
                year: "2022",
                available: true,
            },
            {
                id: "book-8",
                title: "Computer Science Basics",
                author: "Eng. Mahmudul Hasan",
                category: "Technology",
                description: "Introduction to programming, algorithms, and computer fundamentals.",
                publisher: "Tech Education",
                year: "2024",
                available: false,
            },
        ],
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        books: [
            {
                id: "book-1",
                title: "Biology - Life Sciences",
                author: "Dr. Nazma Khatun",
                category: "Science",
                description: "Comprehensive biology textbook covering cell biology, genetics, ecology, and human physiology.",
                publisher: "Bio Science Publishers",
                year: "2024",
                available: true,
            },
            {
                id: "book-2",
                title: "Arabic Language Course",
                author: "Prof. Ahmed Al-Mansoor",
                category: "Language",
                description: "Complete Arabic language learning course from beginner to advanced level.",
                publisher: "Language Institute Press",
                year: "2023",
                available: true,
            },
            {
                id: "book-3",
                title: "World Geography",
                author: "Dr. Rafiqul Islam",
                category: "Geography",
                description: "Study of world continents, climate patterns, natural resources, and cultural diversity.",
                publisher: "Geographic Society",
                year: "2023",
                available: true,
            },
            {
                id: "book-4",
                title: "Economics Principles",
                author: "Prof. Jahanara Begum",
                category: "Economics",
                description: "Introduction to micro and macroeconomics with Bangladesh perspectives.",
                publisher: "Economic Research",
                year: "2024",
                available: false,
            },
            {
                id: "book-5",
                title: "English Grammar & Composition",
                author: "Muhammad Habibullah",
                category: "Language",
                description: "Complete English grammar guide with exercises and composition techniques.",
                publisher: "Language Academy",
                year: "2024",
                available: true,
            },
            {
                id: "book-6",
                title: "Islamic Fiqh & Jurisprudence",
                author: "Mufti Abdul Karim",
                category: "Islamic Studies",
                description: "Comprehensive guide to Islamic law and jurisprudence for students.",
                publisher: "Darul Ulum Publishers",
                year: "2023",
                available: true,
            },
            {
                id: "book-7",
                title: "Environmental Science",
                author: "Dr. Sultana Rahman",
                category: "Science",
                description: "Study of ecosystems, conservation, pollution control, and sustainable development.",
                publisher: "Green Earth Publications",
                year: "2024",
                available: true,
            },
            {
                id: "book-8",
                title: "Social Studies & Civics",
                author: "Prof. Aminul Haque",
                category: "Social Studies",
                description: "Understanding society, government systems, and civic responsibilities.",
                publisher: "Civic Education Press",
                year: "2023",
                available: true,
            },
        ],
    },
];

export const categories = [
    "All",
    "Mathematics",
    "Science",
    "Literature",
    "History",
    "Islamic Studies",
    "Language",
    "Technology",
    "Geography",
    "Economics",
    "Social Studies",
];
