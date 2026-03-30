"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { PrincipalMessage } from "@/app/types/principles/types";
import { Language } from "@/app/types/about/types";

interface PrincipalCardProps extends PrincipalMessage {
    language: Language;
    reverse?: boolean;
}

export default function PrincipalCard({
    label,
    campus,
    greeting,
    message,
    name,
    designation,
    imageSrc,
    language,
    reverse = false,
}: PrincipalCardProps) {
    const isArabic = language === "ar";
    const isBengali = language === "bn";

    return (
        <div className="bg-[var(--background)]">
            {/* Section Label */}
            <div
                className={cn(
                    "flex items-center gap-3 mb-6",
                    isArabic ? "justify-end flex-row-reverse" : "justify-center lg:justify-normal"
                )}
            >
                <div className="h-px w-10 bg-[var(--secondary)]" />
                <span className="text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase">
                    {label}
                </span>
                <div className="h-px w-10 bg-[var(--secondary)]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Message Content */}
                <div
                    className={cn(
                        "lg:col-span-7 space-y-6",
                        isArabic || reverse ? "lg:order-2" : "lg:order-1"
                    )}
                >
                    {/* Campus Badge */}
                    <div
                        className={cn(
                            "inline-flex items-center gap-2",
                            isArabic ? "flex-row-reverse" : ""
                        )}
                    >
                        <span className="inline-flex items-center gap-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-[var(--primary)]/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] inline-block" />
                            {campus}
                        </span>
                    </div>

                    {/* Greeting (if any) */}
                    {greeting && (
                        <p
                            className={cn(
                                "text-[var(--primary)] font-bold text-lg",
                                isArabic ? "text-right" : ""
                            )}
                            dir={isArabic ? "rtl" : "ltr"}
                        >
                            {greeting}
                        </p>
                    )}

                    {/* Message Body */}
                    <div
                        className={cn(
                            "text-[var(--muted-foreground)] text-base md:text-[1.05rem] whitespace-pre-line",
                            isArabic ? "text-right" : "",
                            isBengali ? "leading-[1.9]" : "leading-[1.8]"
                        )}
                        dir={isArabic ? "rtl" : "ltr"}
                    >
                        {message}
                    </div>

                    {/* Signature */}
                    <div
                        className={cn(
                            "pt-6 border-t border-[var(--border)]",
                            isArabic ? "text-right" : ""
                        )}
                    >
                        <p className="font-bold text-xl text-[var(--foreground)]">{name}</p>
                        <p className="text-[var(--muted-foreground)] whitespace-pre-line text-sm mt-1">
                            {designation}
                        </p>
                    </div>
                </div>

                {/* Image Column */}
                <div
                    className={cn(
                        "lg:col-span-5",
                        isArabic || reverse ? "lg:order-1" : "lg:order-2"
                    )}
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-square bg-[var(--card)]">
                        <Image
                            src={imageSrc}
                            alt={name}
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        {/* Gradient overlay — bottom fade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        {/* Campus label on image */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                                {campus}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}