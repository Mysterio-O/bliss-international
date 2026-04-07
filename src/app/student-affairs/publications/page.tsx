import type { Metadata } from "next";
import PublicationsPageClient from "./PublicationsPageClient";

export const metadata: Metadata = {
    title: "BIA Publications | Bliss International Academy",
    description:
        "Access student magazines, journals, and newsletters from Bliss International Academy. Read creative works and academic publications from both campuses.",
    keywords: [
        "Bliss International Academy",
        "BIA publications",
        "student magazine",
        "school journal",
        "academic publications",
        "student newsletter",
    ],
    openGraph: {
        title: "BIA Publications | Bliss International Academy",
        description:
            "Explore our collection of student publications, magazines, and journals.",
        type: "website",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/student-affairs/publications",
    },
};

export default function PublicationsPage() {
    return <PublicationsPageClient />;
}
