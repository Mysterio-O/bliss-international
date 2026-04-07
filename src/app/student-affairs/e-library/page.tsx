import type { Metadata } from "next";
import ELibraryPageClient from "./ELibraryPageClient";

export const metadata: Metadata = {
    title: "BIA E-Library | Bliss International Academy",
    description:
        "Access the digital library of Bliss International Academy. Browse books, educational resources, and reference materials for students.",
    keywords: [
        "Bliss International Academy",
        "e-library",
        "digital library",
        "online books",
        "educational resources",
        "student library",
    ],
    openGraph: {
        title: "BIA E-Library | Bliss International Academy",
        description:
            "Browse our comprehensive digital library collection.",
        type: "website",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/student-affairs/e-library",
    },
};

export default function ELibraryPage() {
    return <ELibraryPageClient />;
}
