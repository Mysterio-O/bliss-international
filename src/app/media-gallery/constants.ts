export type MediaItem = {
    id: string;
    title: string;
    category: string;
    date: string;
    description: string;
    thumbnail?: string;
    type: "image" | "video";
};

export type CampusMedia = {
    id: string;
    name: string;
    media: MediaItem[];
};

export const campusMedia: CampusMedia[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        media: [
            {
                id: "media-1",
                title: "Annual Sports Day 2025",
                category: "Events",
                date: "December 15, 2025",
                description: "Highlights from our annual sports day featuring various athletic competitions and team sports.",
                type: "image",
            },
            {
                id: "media-2",
                title: "Science Fair Exhibition",
                category: "Academic",
                date: "November 20, 2025",
                description: "Students presenting their innovative science projects and experiments.",
                type: "image",
            },
            {
                id: "media-3",
                title: "Victory Day Celebration",
                category: "Cultural",
                date: "December 16, 2025",
                description: "Cultural performances and patriotic programs commemorating Bangladesh's independence.",
                type: "video",
            },
            {
                id: "media-4",
                title: "Campus Facilities Tour",
                category: "Campus",
                date: "October 1, 2025",
                description: "Virtual tour of our modern campus facilities including classrooms, library, and labs.",
                type: "video",
            },
            {
                id: "media-5",
                title: "Art Exhibition 2025",
                category: "Cultural",
                date: "September 18, 2025",
                description: "Student artwork display featuring paintings, calligraphy, and handicrafts.",
                type: "image",
            },
            {
                id: "media-6",
                title: "Tree Plantation Drive",
                category: "Social",
                date: "August 10, 2025",
                description: "Students participating in environmental awareness and tree plantation campaign.",
                type: "image",
            },
            {
                id: "media-7",
                title: "Classroom Learning Activities",
                category: "Academic",
                date: "July 22, 2025",
                description: "Interactive learning sessions and student engagement in various subjects.",
                type: "image",
            },
            {
                id: "media-8",
                title: "Eid Celebration",
                category: "Religious",
                date: "June 17, 2025",
                description: "Eid-ul-Fitr celebrations with students and faculty.",
                type: "image",
            },
        ],
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        media: [
            {
                id: "media-1",
                title: "Annual Sports Day 2025",
                category: "Events",
                date: "December 20, 2025",
                description: "Exciting moments from cricket, football, and athletics competitions.",
                type: "image",
            },
            {
                id: "media-2",
                title: "Mathematics Olympiad",
                category: "Academic",
                date: "November 12, 2025",
                description: "Students competing in campus-level mathematics olympiad.",
                type: "image",
            },
            {
                id: "media-3",
                title: "Campus Infrastructure",
                category: "Campus",
                date: "October 15, 2025",
                description: "Modern classrooms, computer lab, and recreational facilities.",
                type: "image",
            },
            {
                id: "media-4",
                title: "Eid Milad-un-Nabi Program",
                category: "Religious",
                date: "October 5, 2025",
                description: "Islamic cultural program with Naat and Quran recitation.",
                type: "video",
            },
            {
                id: "media-5",
                title: "English Language Week",
                category: "Academic",
                date: "September 22, 2025",
                description: "Spelling bee, speech competition, and creative writing activities.",
                type: "image",
            },
            {
                id: "media-6",
                title: "Parent-Teacher Meeting",
                category: "Events",
                date: "August 28, 2025",
                description: "Interactive session between parents and teachers discussing student progress.",
                type: "image",
            },
            {
                id: "media-7",
                title: "Health Awareness Campaign",
                category: "Social",
                date: "July 15, 2025",
                description: "Educational sessions on hygiene, nutrition, and preventive healthcare.",
                type: "image",
            },
            {
                id: "media-8",
                title: "Student Assembly",
                category: "Events",
                date: "June 10, 2025",
                description: "Morning assembly with national anthem and motivational speeches.",
                type: "video",
            },
        ],
    },
];

export const mediaCategories = [
    "All",
    "Events",
    "Academic",
    "Cultural",
    "Campus",
    "Social",
    "Religious",
];
