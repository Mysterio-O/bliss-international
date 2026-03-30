"use client";

import { Language, LanguageProps } from "@/app/types/about/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MessageProps {
    label: string;
    title: string;
    message: string;
    name: string;
    designation: string;
    imageSrc?: string;           // Optional - if no image, professional avatar is used
    language: Language;
}

export default function MessageCard({
    label,
    title,
    message,
    name,
    designation,
    imageSrc,
    language
}: MessageProps) {
    const isArabic = language === "ar";

    return (
        <div className="bg-[var(--background)]">
            {/* Section Label */}
            <div className="flex items-center justify-center lg:justify-normal gap-3 mb-6">
                <div className="h-px w-10 bg-[var(--secondary)]" />
                <span className="text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase">
                    {label}
                </span>
                <div className="h-px w-10 bg-[var(--secondary)]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                {/* Message Content */}
                <div className={cn(
                    "lg:col-span-7 space-y-8",
                    isArabic ? "lg:order-2" : "lg:order-1"
                )}>
                    <h2
                        className={cn(
                            "text-3xl md:text-4xl font-extrabold text-[var(--foreground)] leading-snug",
                            isArabic ? "text-right" : ""
                        )}
                        dir={isArabic ? "rtl" : "ltr"}
                    >
                        {title}
                    </h2>

                    <div
                        className={cn(
                            "text-[var(--muted-foreground)] text-base md:text-lg leading-relaxed whitespace-pre-line",
                            isArabic ? "text-right" : "",
                            language === "bn" ? "leading-[1.85]" : "leading-[1.75]"
                        )}
                        dir={isArabic ? "rtl" : "ltr"}
                    >
                        {message}
                    </div>

                    {/* Signature */}
                    <div className={cn(
                        "pt-6 border-t border-[var(--border)]",
                        isArabic ? "text-right" : ""
                    )}>
                        <p className="font-bold text-xl text-[var(--foreground)]">{name}</p>
                        <p className="text-[var(--muted-foreground)] whitespace-pre-line text-sm mt-1">
                            {designation}
                        </p>
                    </div>
                </div>

                {/* Image / Avatar Column */}
                <div className={cn(
                    "lg:col-span-5",
                    isArabic ? "lg:order-1" : "lg:order-2"
                )}>
                    <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-square bg-[var(--card)]">
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt={name}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            // Professional Avatar when no image
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10">
                                <div className="w-40 h-40 rounded-full bg-[var(--card)] border-8 border-white shadow-inner flex items-center justify-center text-7xl">
                                    👨‍🎓
                                </div>
                            </div>
                        )}
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}