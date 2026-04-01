"use client";

import { ageCriteriaData } from "./ageCriteriaData";
import AgeCriteriaCard from "./AgeCriteriaCard";
import { Language } from "@/app/types/about/types";
import { cn } from "@/lib/utils";

interface AgeCriteriaSectionProps {
    language: Language;
}

export default function AgeCriteriaSection({ language }: AgeCriteriaSectionProps) {
    const isArabic = language === "ar";
    const data = ageCriteriaData[language];

    return (
        <section
            className="py-4 bg-[var(--background)]"
            aria-label="Age Criteria and Curriculum"
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Section Header */}
                <div
                    className={cn(
                        "mb-12 md:mb-16",
                        isArabic ? "text-right" : "text-center"
                    )}
                >
                    <div
                        className={cn(
                            "flex items-center gap-3 mb-4",
                            isArabic ? "justify-end flex-row-reverse" : "justify-center"
                        )}
                    >
                        <div className="h-px w-10 md:w-12 bg-[var(--secondary)]" />
                        <span className="text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase">
                            Curriculum
                        </span>
                        <div className="h-px w-10 md:w-12 bg-[var(--secondary)]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-3 md:mb-4">
                        {data.heading}
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-base md:text-lg max-w-2xl mx-auto">
                        {data.subheading}
                    </p>
                </div>

                {/* Criteria Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {data.criteria.map((item, index) => (
                        <AgeCriteriaCard
                            key={`${language}-${index}`}
                            item={item}
                            language={language}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
