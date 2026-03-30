"use client";

import { useState } from "react";
import { principalMessages } from "./principalData";
import PrincipalCard from "./PrincipalCard";
import { cn } from "@/lib/utils";
import { Language } from "@/app/types/about/types";

interface PrincipalsSectionProps {
    language: Language;
}

export default function PrincipalsSection({ language }: PrincipalsSectionProps) {
    const [activeCampus, setActiveCampus] = useState<"satkhira" | "debhata">("satkhira");

    const data = principalMessages[language];
    const currentMsg = data[activeCampus];
    const isArabic = language === "ar";

    const tabs = [
        {
            id: "satkhira" as const,
            label:
                language === "en"
                    ? "Satkhira Campus"
                    : language === "bn"
                        ? "সাতক্ষীরা ক্যাম্পাস"
                        : "حرم ساتخيرا",
        },
        {
            id: "debhata" as const,
            label:
                language === "en"
                    ? "Debhata Campus"
                    : language === "bn"
                        ? "দেবহাটা ক্যাম্পাস"
                        : "حرم ديبهاتا",
        },
    ];

    return (
        <section
            className="py-8 bg-[var(--background)]"
            aria-label="Principal Messages"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Tab Buttons */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-[var(--card)] border border-[var(--border)] rounded-full p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveCampus(tab.id)}
                                className={cn(
                                    "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200",
                                    activeCampus === tab.id
                                        ? "bg-[var(--primary)] text-white shadow"
                                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Principal Card — alternate image side per campus */}
                <PrincipalCard
                    key={`${activeCampus}-${language}`}
                    {...currentMsg}
                    language={language}
                    reverse={activeCampus === "debhata"}
                />
            </div>
        </section>
    );
}