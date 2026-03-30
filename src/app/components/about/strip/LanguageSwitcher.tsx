"use client";

import { Language } from "@/app/types/about/types";
import { cn } from "@/lib/utils";

interface LanguageOption {
    code: Language;
    label: string;
    script: string;
}

interface LanguageSwitcherProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const languages: LanguageOption[] = [
    { code: "en", label: "English", script: "EN" },
    { code: "bn", label: "বাংলা", script: "বাং" },
    { code: "ar", label: "العربية", script: "ع" },
];

export default function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
    return (
        <div className="flex items-center gap-1 bg-[var(--muted)] rounded-full p-1 border border-[var(--border)]">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                        "relative px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
                        language === lang.code
                            ? "bg-[var(--primary)] text-white shadow-md scale-[1.04]"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--border)]"
                    )}
                    aria-pressed={language === lang.code}
                    aria-label={`Switch to ${lang.label}`}
                >
                    <span className="hidden md:inline">{lang.label}</span>
                    <span className="md:hidden">{lang.script}</span>
                </button>
            ))}
        </div>
    );
}