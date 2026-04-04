import type { Metadata } from "next";
import AcademicCalendarPage from "./AcademicCalendarPage";

// ─── SEO ────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: "Academic Calendar 2026 | BLISS International Academy",
    description:
        "Explore the BLISS International Academy academic calendar for 2026. View all major events, examinations, holidays, and important dates for Debhata and Satkhira campuses.",
    keywords: [
        "BLISS International Academy",
        "academic calendar 2026",
        "BIA school schedule",
        "Satkhira school calendar",
        "Debhata campus events",
        "school exam dates Bangladesh",
    ],
    openGraph: {
        title: "Academic Calendar 2026 | BLISS International Academy",
        description:
            "All major events, exams, holidays, and important dates for BLISS International Academy — Debhata & Satkhira campuses.",
        type: "website",
        locale: "en_BD",
    },
    alternates: {
        canonical: "/academic-calendar",
    },
};

export default function CalendarPage() {
    return <AcademicCalendarPage />
}