import type { Metadata } from "next";
import AgeCriteriaPageClient from "./AgeCriteriaPageClient";

export const metadata: Metadata = {
    title: "Age Criteria & Curriculum | Bliss International Academy",
    description:
        "Explore age-based learning curricula at Bliss International Academy. Structured programs from Pre-Play to Hifz level combining Islamic values with modern education.",
    keywords: [
        "Bliss International Academy",
        "age criteria",
        "curriculum",
        "Pre-Play",
        "Nursery",
        "Kindergarten",
        "Hifz program",
        "Islamic education",
        "school curriculum Bangladesh",
    ],
    openGraph: {
        title: "Age Criteria & Curriculum | Bliss International Academy",
        description:
            "Discover our structured learning pathways from Pre-Play to advanced Hifz programs, designed for every child's developmental stage.",
        type: "website",
        locale: "en_US",
        alternateLocale: ["bn_BD", "ar_SA"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Age Criteria & Curriculum | Bliss International Academy",
        description:
            "Comprehensive age-based curriculum with three language support: English, Bengali, and Arabic.",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/age-criteria",
    },
};

export default function AgeCriteriaPage() {
    return <AgeCriteriaPageClient />;
}
