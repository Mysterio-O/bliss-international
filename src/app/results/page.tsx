import type { Metadata } from "next";
import ResultsPageClient from "./ResultsPageClient";

export const metadata: Metadata = {
    title: "Exam Results | Bliss International Academy",
    description:
        "View exam results for students across both Satkhira and Debhata campuses at Bliss International Academy.",
    keywords: [
        "Bliss International Academy",
        "exam results",
        "student results",
        "academic performance",
        "Satkhira campus results",
        "Debhata campus results",
    ],
    openGraph: {
        title: "Exam Results | Bliss International Academy",
        description:
            "Access exam results for all classes across both campuses.",
        type: "website",
        locale: "en_US",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/results",
    },
};

export default function ResultsPage() {
    return <ResultsPageClient />;
}
