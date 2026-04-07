import type { Metadata } from "next";
import ActivitiesPageClient from "./ActivitiesPageClient";

export const metadata: Metadata = {
    title: "Student Activities | Bliss International Academy",
    description:
        "Discover the vibrant student activities and events at Bliss International Academy across both Satkhira and Debhata campuses.",
    keywords: [
        "Bliss International Academy",
        "student activities",
        "campus events",
        "sports day",
        "cultural programs",
        "academic competitions",
    ],
    openGraph: {
        title: "Student Activities | Bliss International Academy",
        description:
            "Explore our diverse range of student activities and campus events.",
        type: "website",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/student-affairs/activities",
    },
};

export default function ActivitiesPage() {
    return <ActivitiesPageClient />;
}
