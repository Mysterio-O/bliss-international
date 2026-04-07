export type Activity = {
    id: string;
    title: string;
    date: string;
    description: string;
    category: string;
    image?: string;
    participants?: number;
};

export type CampusActivities = {
    id: string;
    name: string;
    activities: Activity[];
};

export const campusActivities: CampusActivities[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        activities: [
            {
                id: "act-1",
                title: "Annual Sports Day 2025",
                date: "December 15, 2025",
                description:
                    "A day filled with athletic competitions, team sports, and individual events showcasing student talents in various sports disciplines.",
                category: "Sports",
                participants: 250,
            },
            {
                id: "act-2",
                title: "Science Fair 2025",
                date: "November 20, 2025",
                description:
                    "Students presented innovative science projects covering topics in physics, chemistry, biology, and environmental science.",
                category: "Academic",
                participants: 180,
            },
            {
                id: "act-3",
                title: "Cultural Program - Victory Day Celebration",
                date: "December 16, 2025",
                description:
                    "Cultural performances including patriotic songs, dances, and drama commemorating Bangladesh's Independence.",
                category: "Cultural",
                participants: 300,
            },
            {
                id: "act-4",
                title: "Debating Competition",
                date: "October 25, 2025",
                description:
                    "Inter-class debate competition focusing on contemporary social and environmental issues.",
                category: "Co-curricular",
                participants: 60,
            },
            {
                id: "act-5",
                title: "Art Exhibition",
                date: "September 18, 2025",
                description:
                    "Student artwork display featuring paintings, calligraphy, and creative handicrafts.",
                category: "Cultural",
                participants: 120,
            },
            {
                id: "act-6",
                title: "Community Service - Tree Plantation Drive",
                date: "August 10, 2025",
                description:
                    "Students participated in a tree plantation campaign around the campus and local community area.",
                category: "Social",
                participants: 200,
            },
        ],
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        activities: [
            {
                id: "act-1",
                title: "Annual Sports Day 2025",
                date: "December 20, 2025",
                description:
                    "Comprehensive sports event featuring cricket, football, athletics, and traditional games.",
                category: "Sports",
                participants: 220,
            },
            {
                id: "act-2",
                title: "Mathematics Olympiad",
                date: "November 12, 2025",
                description:
                    "Campus-level mathematics competition preparing students for national-level olympiads.",
                category: "Academic",
                participants: 85,
            },
            {
                id: "act-3",
                title: "Eid Milad-un-Nabi Celebration",
                date: "October 5, 2025",
                description:
                    "Islamic cultural program with Naat recitation, Quran recitation competition, and religious discussions.",
                category: "Religious",
                participants: 280,
            },
            {
                id: "act-4",
                title: "English Language Week",
                date: "September 22, 2025",
                description:
                    "Week-long activities including spelling bee, speech competition, and creative writing workshops.",
                category: "Academic",
                participants: 150,
            },
            {
                id: "act-5",
                title: "Parent-Teacher Meeting",
                date: "August 28, 2025",
                description:
                    "Interactive session between parents and teachers to discuss student progress and development.",
                category: "Academic",
                participants: 350,
            },
            {
                id: "act-6",
                title: "Health & Hygiene Awareness Campaign",
                date: "July 15, 2025",
                description:
                    "Educational sessions on personal hygiene, nutrition, and preventive healthcare for students.",
                category: "Social",
                participants: 190,
            },
        ],
    },
];
