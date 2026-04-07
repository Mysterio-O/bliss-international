import type { Metadata } from "next";
import VerificationPageClient from "./VerificationPageClient";

export const metadata: Metadata = {
    title: "Student Verification | Bliss International Academy",
    description:
        "Verify student enrollment and academic records at Bliss International Academy. Official verification service for current students and alumni.",
    keywords: [
        "Bliss International Academy",
        "student verification",
        "enrollment verification",
        "academic records",
        "student certificate",
    ],
    openGraph: {
        title: "Student Verification | Bliss International Academy",
        description:
            "Official student verification service for BIA students and alumni.",
        type: "website",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/student-affairs/verification",
    },
};

export default function VerificationPage() {
    return <VerificationPageClient />;
}
