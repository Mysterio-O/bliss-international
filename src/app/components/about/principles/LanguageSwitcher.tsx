"use client";

import { Language } from "@/app/types/about/types";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
    language: Language;
    onChange: (lang: Language) => void;
}

const languages: { code: Language; label: string; nativeLabel: string }[] = [
    { code: "en", label: "English", nativeLabel: "EN" },
    { code: "bn", label: "বাংলা", nativeLabel: "বাং" },
    { code: "ar", label: "العربية", nativeLabel: "ع" },
];

export default function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
    return (
        <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center bg-[var(--card)] border border-[var(--border)] rounded-full p-1 shadow-sm">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => onChange(lang.code)}
                        title={lang.label}
                        aria-label={`Switch to ${lang.label}`}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 min-w-[3rem]",
                            language === lang.code
                                ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow"
                                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                        )}
                    >
                        {lang.nativeLabel}
                    </button>
                ))}
            </div>
        </div>
    );
}