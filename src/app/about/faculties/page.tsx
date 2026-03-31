import { CampusTabs } from "@/app/components/about/faculties/CampusTabs";
import { campuses } from "@/app/components/about/faculties/constants";
import { FacultiesHero } from "@/app/components/about/faculties/FacultiesHero";
import type { Metadata } from "next";


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blissinternationalacademy.edu.bd";

export const metadata: Metadata = {
    title: "Our Faculties | Bliss International Academy",
    description:
        "Meet the dedicated and experienced faculty members of Bliss International Academy across our Satkhira and Debhata campuses — nurturing intellect, character, and faith.",
    keywords: [
        "Bliss International Academy faculty",
        "BIA teachers",
        "Satkhira campus faculty",
        "Debhata campus faculty",
        "English medium school teachers Bangladesh",
        "BIA Satkhira",
        "BIA Debhata",
    ],
    alternates: {
        canonical: `${SITE_URL}/about/faculties`,
    },
    openGraph: {
        title: "Our Faculties | Bliss International Academy",
        description:
            "Meet the dedicated and experienced faculty members of Bliss International Academy across our Satkhira and Debhata campuses.",
        url: `${SITE_URL}/about/faculties`,
        siteName: "Bliss International Academy",
        locale: "en_BD",
        type: "website",
        images: [
            {
                url: `${SITE_URL}/og-faculties.jpg`,
                width: 1200,
                height: 630,
                alt: "Bliss International Academy Faculty Members",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Faculties | Bliss International Academy",
        description:
            "Meet the dedicated and experienced faculty members of Bliss International Academy across our Satkhira and Debhata campuses.",
        images: [`${SITE_URL}/og-faculties.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
};

function buildJsonLd() {
    const members = campuses.flatMap((campus) =>
        campus.faculties.map((f) => ({
            "@type": "Person",
            name: f.name,
            jobTitle: f.role,
            worksFor: {
                "@type": "EducationalOrganization",
                name: `Bliss International Academy — ${campus.name}`,
            },
            ...(f.email ? { email: `mailto:${f.email}` } : {}),
            ...(f.mobile && f.mobile !== "0"
                ? { telephone: `+88${f.mobile}` }
                : {}),
        }))
    );

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: SITE_URL,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "About BIA",
                        item: `${SITE_URL}/about`,
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: "Our Faculties",
                        item: `${SITE_URL}/about/faculties`,
                    },
                ],
            },
            {
                "@type": "EducationalOrganization",
                "@id": `${SITE_URL}/#organization`,
                name: "Bliss International Academy",
                url: SITE_URL,
                employee: members,
            },
        ],
    };
}

export default function FacultiesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
            />
            <main className="min-h-screen">
                <FacultiesHero />
                <section className="mx-auto max-w-screen-2xl px-4 pb-20">
                    <CampusTabs />
                </section>
            </main>
        </>
    );
}