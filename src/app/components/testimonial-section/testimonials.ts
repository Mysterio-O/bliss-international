export interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string; // initials fallback
    quote: string;
    rating: number;
    tag: "Parent" | "Student" | "Teacher" | "Alumni";
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "t1",
        name: "Fatima Begum",
        role: "Parent of Grade 4 Student",
        avatar: "FB",
        quote:
            "Bliss International Academy has transformed my child's love for learning. The teachers nurture both academic excellence and Islamic values — it's exactly the environment I prayed for.",
        rating: 5,
        tag: "Parent",
    },
    {
        id: "t2",
        name: "Md. Rahimuddin",
        role: "Parent of Grade 7 Student",
        avatar: "MR",
        quote:
            "The school's dedication to combining quality education with moral character building is remarkable. My son has grown not just academically, but as a confident, respectful young man.",
        rating: 5,
        tag: "Parent",
    },
    {
        id: "t3",
        name: "Ayesha Siddiqua",
        role: "Class 10 Student",
        avatar: "AS",
        quote:
            "The teachers here genuinely care about every student. The way they explain concepts, encourage questions, and maintain a positive atmosphere makes every day of learning enjoyable.",
        rating: 5,
        tag: "Student",
    },
    {
        id: "t4",
        name: "Nasrin Akter",
        role: "Parent of Preschool Graduate",
        avatar: "NA",
        quote:
            "Watching my little one graduate from preschool at BIA was one of the proudest moments of my life. The care and patience the teachers showed was beyond anything I expected.",
        rating: 5,
        tag: "Parent",
    },
    {
        id: "t5",
        name: "Ibrahim Khalil",
        role: "Alumni, Class of 2023",
        avatar: "IK",
        quote:
            "BIA gave me the foundation I needed — not just for exams, but for life. The values I learned here guide every decision I make. Forever grateful to every teacher who shaped me.",
        rating: 5,
        tag: "Alumni",
    },
    {
        id: "t6",
        name: "Sumaiya Rahman",
        role: "Parent of Two Students",
        avatar: "SR",
        quote:
            "Both my children attend BIA and the difference in their discipline, confidence, and character is visible to everyone. This school is a true blessing for our community.",
        rating: 5,
        tag: "Parent",
    },
    {
        id: "t7",
        name: "Tariqul Islam",
        role: "Class 8 Student",
        avatar: "TI",
        quote:
            "I love how our school organizes events like the Cultural Program. It helps us express ourselves while staying true to our values. I feel proud to be a BIA student.",
        rating: 5,
        tag: "Student",
    },
    {
        id: "t8",
        name: "Khaleda Khanam",
        role: "Parent of Grade 6 Student",
        avatar: "KK",
        quote:
            "The school's communication with parents is excellent. They keep us informed and involved in our child's growth. The holistic approach here is truly unique.",
        rating: 5,
        tag: "Parent",
    },
];

export const TAG_COLORS: Record<Testimonial["tag"], { bg: string; text: string }> = {
    Parent: {
        bg: "color-mix(in oklab, var(--primary) 12%, transparent)",
        text: "var(--primary)",
    },
    Student: {
        bg: "color-mix(in oklab, var(--secondary) 18%, transparent)",
        text: "color-mix(in oklab, var(--secondary) 80%, var(--foreground))",
    },
    Teacher: {
        bg: "color-mix(in oklab, var(--accent) 15%, transparent)",
        text: "color-mix(in oklab, var(--accent) 80%, var(--foreground))",
    },
    Alumni: {
        bg: "color-mix(in oklab, var(--ring) 15%, transparent)",
        text: "var(--ring)",
    },
};