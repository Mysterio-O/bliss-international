"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { LanguageProps } from "@/app/types/about/types";

interface HeroStat {
    value: string;
    label: string;
}

export default function AboutHero({ language }: LanguageProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (overlayRef.current) {
                const scrollY = window.scrollY;
                overlayRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const breadcrumb: Record<string, string> = {
        en: "About BIA",
        bn: "আমাদের সম্পর্কে",
        ar: "من نحن",
    };

    const tagline: Record<string, string> = {
        en: "Nurturing Intellect, Character & Faith",
        bn: "মেধা, চরিত্র ও ঈমানের পরিচর্যা",
        ar: "تنمية العقل والشخصية والإيمان",
    };

    const subtitle: Record<string, string> = {
        en: "Bliss International Academy",
        bn: "ব্লিস ইন্টারন্যাশনাল একাডেমি",
        ar: "بليس إنترناشيونال أكاديمي",
    };

    const heroStats: HeroStat[] = [
        {
            value: "2021",
            label: language === "en" ? "Est." : language === "bn" ? "প্রতিষ্ঠিত" : "تأسست",
        },
        {
            value: "500+",
            label: language === "en" ? "Families" : language === "bn" ? "পরিবার" : "عائلة",
        },
        {
            value: "2",
            label: language === "en" ? "Campuses" : language === "bn" ? "ক্যাম্পাস" : "حرم جامعي",
        },
    ];

    return (
        <section className="relative h-[520px] md:h-[600px] overflow-hidden">
            {/* Background Image with Parallax */}
            <div ref={overlayRef} className="absolute inset-0 will-change-transform">
                <img
                    src="/banner-images/7.webp"
                    alt="Bliss International Academy Campus"
                    className="w-full h-full object-cover object-center scale-110"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08121eee] via-[#0b1c2ecc] to-[#0b1c2e66]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08121e] via-transparent to-transparent" />

            {/* Decorative diagonal stripe */}
            <div
                className="absolute top-0 right-0 w-1/3 h-full opacity-10"
                style={{
                    background:
                        "repeating-linear-gradient(-45deg, var(--primary) 0, var(--primary) 1px, transparent 0, transparent 50%)",
                    backgroundSize: "12px 12px",
                }}
            />

            {/* Accent line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--secondary)] to-transparent opacity-60" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-6 animate-fade-in">
                        <span className="text-[var(--muted-foreground)] text-sm font-medium tracking-widest uppercase">
                            Home
                        </span>
                        <span className="text-[var(--secondary)] text-sm">›</span>
                        <span
                            className={cn(
                                "text-[var(--secondary)] text-sm font-semibold tracking-widest uppercase",
                                language === "ar" ? "font-arabic" : ""
                            )}
                        >
                            {breadcrumb[language]}
                        </span>
                    </div>

                    {/* Main heading */}
                    <div className="space-y-3 max-w-2xl">
                        <p
                            className={cn(
                                "text-[var(--secondary)] text-xs md:text-sm font-bold tracking-[0.25em] uppercase",
                                language === "ar" ? "text-right font-arabic" : ""
                            )}
                        >
                            {subtitle[language]}
                        </p>
                        <h1
                            className={cn(
                                "text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg",
                                language === "ar" ? "text-right font-arabic leading-relaxed" : "",
                                language === "bn" ? "leading-relaxed" : ""
                            )}
                        >
                            {tagline[language]}
                        </h1>
                    </div>

                    {/* Bottom decorative stat strip */}
                    <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
                        {heroStats.map((stat, i) => (
                            <div key={i} className="text-white">
                                <p className="text-2xl md:text-3xl font-extrabold text-[var(--secondary)]">
                                    {stat.value}
                                </p>
                                <p className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-0.5">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}