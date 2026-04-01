import type { Metadata } from "next";
import FeeStructurePageClient from "./FeeStructurePageClient";

export const metadata: Metadata = {
    title: "Fee Structure | Bliss International Academy",
    description:
        "View detailed fee structures for both Satkhira and Debhata campuses at Bliss International Academy. Transparent pricing for tuition, admission, and residential facilities.",
    keywords: [
        "Bliss International Academy",
        "fee structure",
        "tuition fees",
        "admission fee",
        "Satkhira campus",
        "Debhata campus",
        "residential fees",
        "school fees Bangladesh",
    ],
    openGraph: {
        title: "Fee Structure | Bliss International Academy",
        description:
            "Explore our transparent fee structure across all classes and both campuses with support in English, Bengali, and Arabic.",
        type: "website",
        locale: "en_US",
        alternateLocale: ["bn_BD", "ar_SA"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fee Structure | Bliss International Academy",
        description:
            "Comprehensive fee information for tuition, admission, and residential facilities.",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/fee-structure",
    },
};

export default function FeeStructurePage() {
    return <FeeStructurePageClient />;
}
