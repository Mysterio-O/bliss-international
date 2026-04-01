"use client";

import { feeStructureData } from "./feeStructureData";
import FeeStructureCard from "./FeeStructureCard";
import { Language } from "@/app/types/about/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface FeeStructureSectionProps {
    language: Language;
}

export default function FeeStructureSection({ language }: FeeStructureSectionProps) {
    const [activeCampus, setActiveCampus] = useState<"satkhira" | "debhata">("satkhira");
    const isArabic = language === "ar";
    const data = feeStructureData[activeCampus][language];

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
            className="py-4 bg-background"
            aria-label="Fee Structure"
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
                        <div className="h-px w-10 md:w-12 bg-secondary" />
                        <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
                            Fees
                        </span>
                        <div className="h-px w-10 md:w-12 bg-secondary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                        Fee Structure
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        {language === "en"
                            ? "Select a campus to view fee details"
                            : language === "bn"
                                ? "ফি বিস্তারিত দেখতে একটি ক্যাম্পাস নির্বাচন করুন"
                                : "حدد حرماً لعرض تفاصيل الرسوم"}
                    </p>
                </div>

                {/* Campus Toggle Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-card border border-border rounded-full p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveCampus(tab.id)}
                                className={cn(
                                    "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200",
                                    activeCampus === tab.id
                                        ? "bg-primary text-white shadow"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Campus Fee Heading */}
                <div className={cn(
                    "mb-8 md:mb-12",
                    isArabic ? "text-right" : ""
                )}>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {data.heading}
                    </h3>
                    <p className="text-muted-foreground">
                        {data.subheading}
                    </p>
                </div>

                {/* Fee Categories */}
                <div className="space-y-10">
                    {data.categories.map((category, categoryIndex) => (
                        <div key={`${activeCampus}-${categoryIndex}`}>
                            {/* Category Title */}
                            <h4 className={cn(
                                "text-lg md:text-xl font-bold text-foreground mb-4 pb-3 border-b border-border",
                                isArabic ? "text-right" : ""
                            )}>
                                {category.categoryName}
                            </h4>

                            {/* Category Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {category.items.map((item, itemIndex) => (
                                    <FeeStructureCard
                                        key={`${activeCampus}-${categoryIndex}-${itemIndex}`}
                                        item={item}
                                        language={language}
                                        categoryIndex={categoryIndex}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Disclaimer/Note */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className={cn(
                        "text-sm text-muted-foreground italic",
                        isArabic ? "text-right" : ""
                    )}>
                        {language === "en"
                            ? "Note: All fees are in Bangladeshi Taka (Tk). Please contact the campus office for any clarifications or special arrangements."
                            : language === "bn"
                                ? "দ্রষ্টব্য: সমস্ত ফি বাংলাদেশী টাকায় (টাকা)। যেকোনো স্পষ্টীকরণ বা বিশেষ ব্যবস্থার জন্য অনুগ্রহ করে ক্যাম্পাস অফিসের সাথে যোগাযোগ করুন।"
                                : "ملاحظة: جميع الرسوم بالتاكا البنغلاديشية (Tk). يرجى التواصل مع مكتب الحرم الجامعي للتوضيحات أو الترتيبات الخاصة."}
                    </p>
                </div>
            </div>
        </section>
    );
}
