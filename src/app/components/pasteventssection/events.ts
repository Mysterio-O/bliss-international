/* ─── Types ─────────────────────────────────────────────── */
export interface IEvent {
    id: string;
    eyebrow: string;
    title: string;
    date: string;
    dateDay: string;
    dateMonth: string;
    image: string;
    tagline: string;
    description: string[];
}

/* ─── Data ───────────────────────────────────────────────── */
export const EVENTS: IEvent[] = [
    {
        id: "preschool-graduation",
        eyebrow: "Milestone Celebration",
        title: "Preschool Graduation",
        date: "January 13, 2026",
        dateDay: "13",
        dateMonth: "JAN",
        image: "/banner-images/7.webp",
        tagline: "Celebrating our little learners' very first milestone.",
        description: [
            "Alhamdulillah! We proudly celebrated the graduation of our little learners on 3rd January 2026 at Bliss International Academy, Satkhira and Debhata Campus.",
            "It was a joyful day filled with smiles, clapping, and proud moments as certificates were presented to our little graduates, marking the successful completion of their preschool journey.",
            "From first lessons to lifelong memories, these children have taken their very first step toward a bright future.",
            "Thank to our dedicated teachers and supportive parents for nurturing these young minds with love and care.",
            "Special thanks to Mr. Abu Hasan, Chairman of BIA; Dr. Abdur Rahim, Academic Chief of BIA; and Mr. Kabir Hossain, Vice Chairman of BIA, for your gracious presence at this joyful program and for inspiring our young graduates.",
            "Congratulations to our Little Graduates! We wish you endless success as you move on to the next chapter of learning.",
        ],
    },
    {
        id: "class-party-2025",
        eyebrow: "Student Event",
        title: "Class Party 2025",
        date: "November 29, 2025",
        dateDay: "29",
        dateMonth: "NOV",
        image: "/banner-images/9.webp",
        tagline: "Unity, joy, and Islamic values — all in one celebration.",
        description: [
            "Bliss International Academy organized the Class Party 2025 in a joyful yet modest environment, following Islamic rules and values.",
            "Students enjoyed halal activities, friendly interactions, and motivational sessions that encouraged unity, good manners, and gratitude.",
            "The event aimed to strengthen bonds among students while maintaining a respectful and disciplined atmosphere.",
        ],
    },
    {
        id: "cultural-program-2025",
        eyebrow: "Cultural Showcase",
        title: "Cultural Program 2025",
        date: "November 09, 2025",
        dateDay: "09",
        dateMonth: "NOV",
        image: "/banner-images/4.webp",
        tagline: "Nurturing talent through the lens of Islamic values.",
        description: [
            "Bliss International Academy proudly organized the Cultural Program 2025 under the guidance of Islamic principles and values.",
            "The event aimed to nurture students' talents through performances that reflect moral teachings, respect, unity, and creativity within the boundaries of Islamic etiquette.",
            "Students showcased their skills in Quran recitation, Islamic songs (Nasheed), speeches, poetry, and other educational activities promoting good character and cultural harmony.",
            "The program inspired both students and guests to appreciate the beauty of culture guided by Islamic manners and modesty.",
            "Through this event, Bliss International Academy continues its mission to combine quality education with Islamic values, helping learners grow academically, spiritually, and socially.",
        ],
    },
];
