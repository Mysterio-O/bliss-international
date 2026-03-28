import { BookOpen, Landmark, BookMarked } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Program = {
    id: string;
    icon: LucideIcon;
    eyebrow: string;
    title: string;
    tagline: string;
    description: string;
    bullets: string[];
};

export const PROGRAMS: Program[] = [
    {
        id: "national-curriculum",
        icon: BookOpen,
        eyebrow: "English Version",
        title: "National Curriculum",
        tagline:
            "High-quality NCTB-aligned education delivered entirely in English.",
        description:
            "Bliss International Academy offers the National Curriculum (English Version), aligned with the standards of the National Curriculum and Textbook Board (NCTB) of Bangladesh. This program delivers high-quality education entirely in English, helping students master academic content while developing strong English proficiency. Our curriculum covers a wide range of core and elective subjects—such as Bangla, English, Math, Science, ICT, Social Science, and Religion—taught through modern, interactive methods.",
        bullets: [
            "Critical thinking, creativity, communication, and problem-solving.",
            "Experienced educators focused on academic and character development.",
            "Co-curricular activities: clubs, sports, and competitions.",
            "Prepares students for PSC, JSC, SSC, and HSC under the General Education Board.",
            "Balanced environment blending national values with global relevance.",
        ],
    },
    {
        id: "islamic-education",
        icon: Landmark,
        eyebrow: "Faith & Knowledge",
        title: "Islamic Education",
        tagline:
            "Integrating Islamic values with modern education for well-rounded individuals.",
        description:
            "Our Islamic Education program provides students with a comprehensive understanding of Islamic values, principles, and teachings. We integrate Islamic studies with modern education to develop well-rounded individuals who are grounded in their faith while being prepared for contemporary challenges.",
        bullets: [
            "Quranic studies, Islamic history, and Arabic language.",
            "Islamic ethics and the rich heritage of Islamic civilization.",
            "Contributions of Islam to science, mathematics, philosophy, and the arts.",
            "Tolerance, respect for diversity, and community service.",
            "Strong moral character, spiritual awareness, and academic excellence.",
        ],
    },
    {
        id: "hifzul-quran",
        icon: BookMarked,
        eyebrow: "Sacred Memorization",
        title: "Hifzul Quran",
        tagline:
            "A dedicated journey to memorize the Holy Quran with Tajweed and understanding.",
        description:
            "The Hifzul Quran program is a specialized course designed for students who wish to memorize the Holy Quran. This sacred journey requires dedication, discipline, and spiritual commitment. Our qualified Hafiz teachers provide personalized guidance to help students memorize the Quran with proper Tajweed (correct pronunciation and recitation rules).",
        bullets: [
            "Regular assessments and progress tracking.",
            "Meanings and interpretations of memorized verses.",
            "Spiritual development activities alongside memorization.",
            "Application of Quranic teachings in daily life.",
            "Prepares future leaders who carry the light of the Quran.",
        ],
    },
];