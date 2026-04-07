import type { Metadata } from "next";
import CareerPageClient from "./CareerPageClient";

export const metadata: Metadata = {
    title: "Careers | Bliss International Academy",
    description:
        "Join the Bliss International Academy team. Explore teaching and administrative job opportunities at our Satkhira and Debhata campuses.",
    keywords: [
        "Bliss International Academy",
        "careers",
        "teaching jobs",
        "teacher recruitment",
        "job opportunities",
        "Satkhira jobs",
        "Debhata jobs",
        "education careers",
        "school jobs Bangladesh",
    ],
    openGraph: {
        title: "Careers | Bliss International Academy",
        description:
            "Explore current job openings and join our team of dedicated educators.",
        type: "website",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/career",
    },
};

export default function CareerPage() {
    return <CareerPageClient />;
}
