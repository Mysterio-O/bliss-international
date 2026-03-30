"use client";

import { cn } from "@/lib/utils";
import type { Language, LanguageProps } from "../../../types/about/types";

interface StatItem {
    value: string;
    label: string;
    icon: string;
}

interface StatsContent {
    sectionLabel: string;
    heading: string;
    stats: StatItem[];
}

const content: Record<Language, StatsContent> = {
    en: {
        sectionLabel: "By The Numbers",
        heading: "Impact We Are Proud Of",
        stats: [
            { value: "500+", label: "Happy Families", icon: "👨‍👩‍👧‍👦" },
            { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
            { value: "4+", label: "Years of Trust", icon: "🏅" },
            { value: "2", label: "Modern Campuses", icon: "🏫" },
            { value: "3", label: "Languages Taught", icon: "🌐" },
            { value: "100%", label: "Qualified Teachers", icon: "🎓" },
        ],
    },
    bn: {
        sectionLabel: "সংখ্যায় আমরা",
        heading: "আমাদের গর্বের অর্জন",
        stats: [
            { value: "৫০০+", label: "সুখী পরিবার", icon: "👨‍👩‍👧‍👦" },
            { value: "৯৮%", label: "সন্তুষ্টির হার", icon: "⭐" },
            { value: "৪+", label: "বছরের বিশ্বাস", icon: "🏅" },
            { value: "২", label: "আধুনিক ক্যাম্পাস", icon: "🏫" },
            { value: "৩", label: "শিক্ষার ভাষা", icon: "🌐" },
            { value: "১০০%", label: "যোগ্য শিক্ষক", icon: "🎓" },
        ],
    },
    ar: {
        sectionLabel: "بالأرقام",
        heading: "إنجازات نفخر بها",
        stats: [
            { value: "+٥٠٠", label: "عائلة سعيدة", icon: "👨‍👩‍👧‍👦" },
            { value: "٩٨٪", label: "معدل الرضا", icon: "⭐" },
            { value: "+٤", label: "سنوات من الثقة", icon: "🏅" },
            { value: "٢", label: "حرم جامعي حديث", icon: "🏫" },
            { value: "٣", label: "لغات التدريس", icon: "🌐" },
            { value: "١٠٠٪", label: "معلمون مؤهلون", icon: "🎓" },
        ],
    },
};

export default function StatsSection({ language }: LanguageProps) {
    const c = content[language];
    const isAr = language === "ar";

    return (
        <section
            className="py-16 md:py-20 relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, var(--primary) 0%, #1a3d5c 50%, #0f2840 100%)",
            }}
            aria-label="Academy Statistics"
        >
            {/* Decorative bg patterns */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-5 bg-[var(--secondary)] blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 bg-[var(--accent)] blur-3xl" />

            <div className="relative container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
                        {c.sectionLabel}
                    </span>
                    <h2
                        className={cn(
                            "text-2xl md:text-4xl font-extrabold text-white mt-2",
                            isAr ? "leading-relaxed" : ""
                        )}
                    >
                        {c.heading}
                    </h2>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {c.stats.map((stat, i) => (
                        <div
                            key={i}
                            className={cn(
                                "flex flex-col items-center text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15",
                                "hover:bg-white/20 hover:scale-105 transition-all duration-300",
                                isAr ? "text-right items-end" : ""
                            )}
                        >
                            <span className="text-2xl mb-2">{stat.icon}</span>
                            <span
                                className={cn(
                                    "text-3xl md:text-4xl font-black leading-none mb-1",
                                    i % 2 === 0 ? "text-[var(--secondary)]" : "text-white"
                                )}
                            >
                                {stat.value}
                            </span>
                            <span
                                className="text-white/60 text-xs font-medium uppercase tracking-wider"
                                dir={isAr ? "rtl" : "ltr"}
                            >
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}