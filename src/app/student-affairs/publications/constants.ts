export type Publication = {
    id: string;
    title: string;
    issue: string;
    publishDate: string;
    description: string;
    coverImage?: string;
    downloadUrl?: string;
    editors?: string[];
};

export type CampusPublications = {
    id: string;
    name: string;
    publications: Publication[];
};

export const campusPublications: CampusPublications[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        publications: [
            {
                id: "pub-1",
                title: "BIA Chronicle",
                issue: "Volume 5, Issue 1",
                publishDate: "January 2026",
                description:
                    "Our quarterly magazine featuring student articles, creative writing, artwork, and highlights from campus events. This issue focuses on academic excellence and student achievements.",
                editors: ["Mohammed Nur Alam Sipon", "Tahmina Akter"],
            },
            {
                id: "pub-2",
                title: "Science & Innovation Digest",
                issue: "Annual Edition 2025",
                publishDate: "December 2025",
                description:
                    "A compilation of student research projects, science fair presentations, and innovative ideas from our budding scientists and engineers.",
                editors: ["Aesha Akter", "Aman Ullah Shaker"],
            },
            {
                id: "pub-3",
                title: "Literary Expressions",
                issue: "Volume 3, Issue 2",
                publishDate: "October 2025",
                description:
                    "Collection of poems, short stories, essays, and creative compositions by students in English, Bengali, and Arabic languages.",
                editors: ["Tahmina Karim Tonu", "Md. Mohiduddin Iqbal"],
            },
            {
                id: "pub-4",
                title: "Annual Report 2024-2025",
                issue: "Academic Year Review",
                publishDate: "September 2025",
                description:
                    "Comprehensive annual report showcasing academic achievements, extracurricular activities, and institutional developments throughout the year.",
            },
            {
                id: "pub-5",
                title: "Sports & Wellness Newsletter",
                issue: "Quarterly Edition Q3",
                publishDate: "July 2025",
                description:
                    "Updates on sports activities, health tips, fitness programs, and achievements of our student athletes.",
            },
        ],
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        publications: [
            {
                id: "pub-1",
                title: "BIA Voice",
                issue: "Volume 4, Issue 2",
                publishDate: "January 2026",
                description:
                    "Student-led magazine covering campus news, opinion pieces, interviews with faculty, and student perspectives on current affairs.",
                editors: ["Toha Ahammad", "Mahfuzur Rahman"],
            },
            {
                id: "pub-2",
                title: "Creative Minds",
                issue: "Art & Culture Special",
                publishDate: "November 2025",
                description:
                    "Showcasing student artwork, calligraphy, photography, and creative projects from various cultural and artistic activities.",
                editors: ["Fariya Sultana", "Imtieaz Parvin"],
            },
            {
                id: "pub-3",
                title: "Islamic Studies Journal",
                issue: "Volume 2, Issue 1",
                publishDate: "September 2025",
                description:
                    "Articles on Islamic history, values, Quranic studies, and the integration of Islamic teachings in modern education.",
                editors: ["Md. Hafizul Islam", "Sadia Afroz"],
            },
            {
                id: "pub-4",
                title: "Parent Connect Newsletter",
                issue: "Monthly Edition - August",
                publishDate: "August 2025",
                description:
                    "Monthly communication with parents featuring campus updates, upcoming events, parenting tips, and student success stories.",
            },
            {
                id: "pub-5",
                title: "STEM Explorer",
                issue: "Tech & Innovation Issue",
                publishDate: "June 2025",
                description:
                    "Featuring student projects in science, technology, engineering, and mathematics, along with coding workshops and tech competitions.",
                editors: ["Md Nazmul Hossain", "Farzana Yeasmin"],
            },
        ],
    },
];
