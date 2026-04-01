"use client";

import { useState } from "react";
import LanguageSwitcher from "@/app/components/about/strip/LanguageSwitcher";
import PaymentProcedureSection from "@/app/components/admission/payment-procedure/PaymentProcedureSection";
import { Language } from "@/app/types/about/types";

export default function PaymentProcedurePageClient() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <>
      <div className="py-6 container mx-auto px-4 md:px-8 max-w-6xl">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      <PaymentProcedureSection language={language} />
    </>
  );
}
