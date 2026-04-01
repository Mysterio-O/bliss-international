"use client";

import LanguageSwitcher from "@/app/components/about/principles/LanguageSwitcher";
import FeeStructureSection from "@/app/components/admission/fee-structure/FeeStructureSection";
import { Language } from "@/app/types/about/types";
import { useState } from "react";

export default function FeeStructurePageClient() {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <>
            {/* Language Switcher */}
            <div className="py-6 container mx-auto px-4 md:px-8 max-w-6xl">
                <LanguageSwitcher language={language} onChange={setLanguage} />
            </div>

            {/* Fee Structure Section */}
            <FeeStructureSection language={language} />
        </>
    );
}
