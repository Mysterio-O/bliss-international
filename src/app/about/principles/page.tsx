

import type { Metadata } from "next";
import PrincipalsPageClient from "./PrincipalsPageClient";

// ── Static SEO metadata ──────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Message from Principals | Bliss International Academy",
    description:
        "Read heartfelt messages from the Principals of Bliss International Academy — Satkhira Campus and Debhata Campus. Discover our commitment to excellence, values, and holistic education.",
    keywords: [
        "Bliss International Academy",
        "Principal message",
        "Satkhira campus",
        "Debhata campus",
        "international school Bangladesh",
        "school principal welcome",
    ],
    openGraph: {
        title: "Message from Principals | Bliss International Academy",
        description:
            "Messages from the Principals of Bliss International Academy — Satkhira & Debhata campuses.",
        type: "website",
        locale: "en_US",
        alternateLocale: ["bn_BD", "ar_SA"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Message from Principals | Bliss International Academy",
        description:
            "Messages from the Principals of Bliss International Academy — Satkhira & Debhata campuses.",
    },
};

// ── Page Component (Server Component — metadata export works here) ────────────
export default function PrincipalsPage() {
    return (
        <main>
            {/* Page hero / header */}
            <section className="py-12 md:py-16 bg-[var(--background)]">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center space-y-4">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-10 bg-[var(--secondary)]" />
                        <span className="text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase">
                            Leadership
                        </span>
                        <div className="h-px w-10 bg-[var(--secondary)]" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight">
                        Message from Our Principals
                    </h1>

                    {/* Sub-heading */}
                    <p className="text-[var(--muted-foreground)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Hear directly from the leaders who shape the vision, values, and future of our two
                        campuses — Satkhira and Debhata.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                <div className="h-px bg-[var(--border)]" />
            </div>

            {/* Client interactive section (language switcher + campus tabs + cards) */}
            <PrincipalsPageClient />
        </main>
    );
}