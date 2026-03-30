"use client";

import { Language, LanguageProps } from "@/app/types/about/types";
import { cn } from "@/lib/utils";

interface CardItem {
    title: string;
    text: string;
}

interface ValueItem {
    icon: string;
    label: string;
    sub: string;
}

interface MissionVisionContent {
    sectionLabel: string;
    mission: CardItem;
    vision: CardItem;
    values: {
        title: string;
        items: ValueItem[];
    };
}

const content: Record<Language, MissionVisionContent> = {
    en: {
        sectionLabel: "Our Purpose",
        mission: {
            title: "Our Mission",
            text: "To provide holistic, values-centered education that equips students with academic excellence, Islamic character, and global competence — preparing every learner for a purposeful and productive life.",
        },
        vision: {
            title: "Our Vision",
            text: "To be the leading institution in Bangladesh that seamlessly integrates world-class English-version education with Islamic principles, producing confident, ethical, and globally-aware graduates.",
        },
        values: {
            title: "Core Values",
            items: [
                { icon: "✦", label: "Integrity", sub: "Honesty in every action" },
                { icon: "✦", label: "Excellence", sub: "Striving beyond limits" },
                { icon: "✦", label: "Compassion", sub: "Care for every learner" },
                { icon: "✦", label: "Discipline", sub: "Structure breeds success" },
                { icon: "✦", label: "Faith", sub: "Rooted in Islamic values" },
                { icon: "✦", label: "Innovation", sub: "Modern approaches to learning" },
            ],
        },
    },
    bn: {
        sectionLabel: "আমাদের লক্ষ্য",
        mission: {
            title: "আমাদের মিশন",
            text: "একাডেমিক শ্রেষ্ঠত্ব, ইসলামী চরিত্র এবং বৈশ্বিক দক্ষতা সহ সামগ্রিক, মূল্যবোধকেন্দ্রিক শিক্ষা প্রদান করা — প্রতিটি শিক্ষার্থীকে একটি উদ্দেশ্যমূলক ও উৎপাদনশীল জীবনের জন্য প্রস্তুত করা।",
        },
        vision: {
            title: "আমাদের ভিশন",
            text: "বাংলাদেশের শীর্ষস্থানীয় প্রতিষ্ঠান হওয়া, যেখানে বিশ্বমানের ইংলিশ ভার্সন শিক্ষা এবং ইসলামী নীতিমালার নিরবচ্ছিন্ন সমন্বয়ের মাধ্যমে আত্মবিশ্বাসী, নৈতিক এবং বৈশ্বিকভাবে সচেতন স্নাতক তৈরি করা।",
        },
        values: {
            title: "মূল মূল্যবোধ",
            items: [
                { icon: "✦", label: "সততা", sub: "প্রতিটি কাজে সত্যনিষ্ঠা" },
                { icon: "✦", label: "শ্রেষ্ঠত্ব", sub: "সীমা ছাড়িয়ে প্রচেষ্টা" },
                { icon: "✦", label: "সহানুভূতি", sub: "প্রতিটি শিক্ষার্থীর প্রতি যত্ন" },
                { icon: "✦", label: "শৃঙ্খলা", sub: "কাঠামো সাফল্যের জন্ম দেয়" },
                { icon: "✦", label: "ঈমান", sub: "ইসলামী মূল্যবোধে প্রোথিত" },
                { icon: "✦", label: "উদ্ভাবন", sub: "শিক্ষায় আধুনিক পদ্ধতি" },
            ],
        },
    },
    ar: {
        sectionLabel: "هدفنا",
        mission: {
            title: "مهمتنا",
            text: "تقديم تعليم شامل ومتمحور حول القيم يُزوّد الطلاب بالتميز الأكاديمي والشخصية الإسلامية والكفاءة العالمية — إعداد كل متعلم لحياة هادفة ومنتجة.",
        },
        vision: {
            title: "رؤيتنا",
            text: "أن نكون المؤسسة الرائدة في بنغلاديش التي تدمج بسلاسة التعليم الإنجليزي عالمي المستوى مع المبادئ الإسلامية، وتُخرّج خريجين واثقين وأخلاقيين ومدركين للشأن العالمي.",
        },
        values: {
            title: "قيمنا الجوهرية",
            items: [
                { icon: "✦", label: "النزاهة", sub: "الصدق في كل عمل" },
                { icon: "✦", label: "التميز", sub: "السعي لتخطي الحدود" },
                { icon: "✦", label: "الرحمة", sub: "الاهتمام بكل متعلم" },
                { icon: "✦", label: "الانضباط", sub: "النظام يولّد النجاح" },
                { icon: "✦", label: "الإيمان", sub: "متجذّر في القيم الإسلامية" },
                { icon: "✦", label: "الابتكار", sub: "مناهج حديثة للتعلم" },
            ],
        },
    },
};

const cards: Array<{ key: "mission" | "vision"; letter: string }> = [
    { key: "mission", letter: "M" },
    { key: "vision", letter: "V" },
];

export default function MissionVisionSection({ language }: LanguageProps) {
    const c = content[language];
    const isAr = language === "ar";

    return (
        <section className="py-16 md:py-24 bg-[var(--muted)]/40" aria-label="Mission and Vision">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Section header */}
                <div className="mb-14 text-center">
                    <span className="inline-block text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20">
                        {c.sectionLabel}
                    </span>
                    <h2
                        className={cn(
                            "text-2xl md:text-4xl font-extrabold text-[var(--foreground)] mt-2",
                            isAr ? "leading-relaxed" : ""
                        )}
                    >
                        {language === "en" && (
                            <>
                                Mission, Vision <span className="text-[var(--primary)]">&amp;</span> Values
                            </>
                        )}
                        {language === "bn" && (
                            <>
                                মিশন, ভিশন <span className="text-[var(--primary)]">&amp;</span> মূল্যবোধ
                            </>
                        )}
                        {language === "ar" && (
                            <>
                                المهمة والرؤية <span className="text-[var(--primary)]">والقيم</span>
                            </>
                        )}
                    </h2>
                </div>

                {/* Mission & Vision cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {cards.map(({ key, letter }, i) => {
                        const item = c[key];
                        const isPrimary = i === 0;

                        return (
                            <div
                                key={key}
                                className={cn(
                                    "relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 overflow-hidden",
                                    isPrimary ? "border-l-4 border-l-[var(--primary)]" : "border-l-4 border-l-[var(--secondary)]",
                                    isAr ? "border-l-0 border-r-4" : ""
                                )}
                                style={
                                    isAr
                                        ? { borderRightColor: isPrimary ? "var(--primary)" : "var(--secondary)" }
                                        : undefined
                                }
                            >
                                {/* Background watermark */}
                                <div
                                    className={cn(
                                        "absolute top-4 right-4 text-8xl font-black opacity-[0.04] select-none pointer-events-none",
                                        isPrimary ? "text-[var(--primary)]" : "text-[var(--secondary)]"
                                    )}
                                    aria-hidden="true"
                                >
                                    {letter}
                                </div>

                                <div className={cn("flex items-start gap-4", isAr ? "flex-row-reverse text-right" : "")}>
                                    <div
                                        className={cn(
                                            "flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg font-bold",
                                            isPrimary
                                                ? "bg-[var(--primary)]"
                                                : "bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                                        )}
                                    >
                                        {letter}
                                    </div>
                                    <div>
                                        <h3
                                            className={cn(
                                                "font-extrabold text-[var(--foreground)] text-lg mb-3",
                                                isAr ? "leading-relaxed" : ""
                                            )}
                                            dir={isAr ? "rtl" : "ltr"}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className={cn(
                                                "text-[var(--muted-foreground)] leading-relaxed text-sm md:text-base",
                                                isAr ? "leading-[1.9]" : "leading-[1.8]"
                                            )}
                                            dir={isAr ? "rtl" : "ltr"}
                                        >
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Values */}
                <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
                    <h3
                        className={cn(
                            "text-center font-extrabold text-[var(--foreground)] text-xl mb-8",
                            isAr ? "leading-relaxed" : ""
                        )}
                    >
                        {c.values.title}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {c.values.items.map((val, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "flex flex-col items-center text-center p-4 rounded-xl bg-[var(--muted)]/60 hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/30 border border-transparent transition-all duration-200 group",
                                    isAr ? "text-right items-end" : ""
                                )}
                                dir={isAr ? "rtl" : "ltr"}
                            >
                                <span className="text-[var(--secondary)] text-sm mb-2 group-hover:scale-125 transition-transform">
                                    {val.icon}
                                </span>
                                <span className="font-bold text-[var(--foreground)] text-sm mb-1">{val.label}</span>
                                <span className="text-[var(--muted-foreground)] text-xs leading-snug">{val.sub}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}