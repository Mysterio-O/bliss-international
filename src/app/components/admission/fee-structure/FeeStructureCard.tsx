"use client";

import { cn } from "@/lib/utils";
import { FeeItem } from "./feeStructureData";
import { Language } from "@/app/types/about/types";

interface FeeStructureCardProps {
    item: FeeItem;
    language: Language;
    categoryIndex: number;
}

export default function FeeStructureCard({
    item,
    language,
    categoryIndex,
}: FeeStructureCardProps) {
    const isArabic = language === "ar";

    // Color palette for categories
    const categoryColors = [
        { border: "border-[var(--primary)]", bg: "from-[var(--primary)]/5", text: "text-[var(--primary)]" },
        { border: "border-[var(--secondary)]", bg: "from-[var(--secondary)]/5", text: "text-[var(--secondary)]" },
        { border: "border-amber-500", bg: "from-amber-500/5", text: "text-amber-600" },
    ];

    const color = categoryColors[categoryIndex % categoryColors.length];

    return (
        <div
            className={cn(
                "bg-linear-to-br",
                color.bg,
                "to-transparent border-l-4",
                color.border,
                "border border-border rounded-lg p-5 md:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            )}
            dir={isArabic ? "rtl" : "ltr"}
        >
            {/* Description */}
            <p className={cn(
                "text-muted-foreground text-sm md:text-base font-medium mb-3",
                isArabic ? "text-right" : ""
            )}>
                {item.description}
            </p>

            {/* Amount */}
            <div
                className={cn(
                    "flex items-center",
                    isArabic ? "justify-end" : "justify-start"
                )}
            >
                <p className={cn(
                    "text-xl md:text-2xl font-bold",
                    color.text
                )}>
                    {item.amount}
                </p>
            </div>
        </div>
    );
}
