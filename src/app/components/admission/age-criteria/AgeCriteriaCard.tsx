"use client";

import { cn } from "@/lib/utils";
import { AgeCriteriaItem } from "./ageCriteriaData";
import { Language } from "@/app/types/about/types";

interface AgeCriteriaCardProps {
    item: AgeCriteriaItem;
    language: Language;
    index?: number;
}

export default function AgeCriteriaCard({
    item,
    language,
    index = 0,
}: AgeCriteriaCardProps) {
    const isArabic = language === "ar";
    const isBengali = language === "bn";
    const colorClasses = [
        "border-[var(--primary)]",
        "border-[var(--secondary)]",
        "border-amber-500",
        "border-emerald-500",
        "border-sky-500",
        "border-violet-500",
    ];

    const bgClasses = [
        "from-[var(--primary)]/5",
        "from-[var(--secondary)]/5",
        "from-amber-500/5",
        "from-emerald-500/5",
        "from-sky-500/5",
        "from-violet-500/5",
    ];

    const textColorClasses = [
        "text-[var(--primary)]",
        "text-[var(--secondary)]",
        "text-amber-600",
        "text-emerald-600",
        "text-sky-600",
        "text-violet-600",
    ];

    const colorIndex = index % 6;

    return (
        <div
            className={cn(
                "bg-gradient-to-br",
                bgClasses[colorIndex],
                "border-l-4",
                colorClasses[colorIndex],
                "border border-[var(--border)] rounded-lg p-6 md:p-7 transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
            )}
            dir={isArabic ? "rtl" : "ltr"}
        >
            {/* Header */}
            <div
                className={cn(
                    "flex items-start justify-between gap-4 mb-4",
                    isArabic ? "flex-row-reverse" : ""
                )}
            >
                <div className="flex-1">
                    <h3 className={cn(
                        "text-lg md:text-xl font-bold text-[var(--foreground)] mb-1",
                        textColorClasses[colorIndex]
                    )}>
                        {item.title}
                    </h3>
                    <p className={cn(
                        "text-xs md:text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider",
                        isArabic ? "text-right" : ""
                    )}>
                        {item.ageRange}
                    </p>
                </div>

                {/* Accent Badge */}
                <div
                    className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white",
                        colorClasses[colorIndex].replace("border", "bg")
                    )}
                >
                    {index + 1}
                </div>
            </div>

            {/* Description */}
            <p
                className={cn(
                    "text-[var(--muted-foreground)] text-sm md:text-base leading-relaxed",
                    isBengali ? "leading-[1.8]" : "leading-[1.7]",
                    isArabic ? "text-right" : ""
                )}
            >
                {item.description}
            </p>
        </div>
    );
}
