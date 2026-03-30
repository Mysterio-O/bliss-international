"use client";

import { useState } from "react";
import { Language } from "../types/about/types";
import AboutHero from "../components/about/AboutHero";
import LanguageSwitcher from "../components/about/strip/LanguageSwitcher";
import IntroductionSection from "../components/about/strip/IntroductionSection";
import StatsSection from "../components/about/strip/StatsSection";
import MissionVisionSection from "../components/about/strip/MissionVisionSection";
import WhyChooseSection from "../components/about/strip/WhyChooseSection";
import ChairmanMessageSection from "../components/about/strip/ChairmanMessageSection";
import LeadershipMessages from "../components/about/strip/LeadershipMessages";


const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Bliss International Academy",
  alternateName: "BIA",
  description:
    "An exceptional English version educational institute in Bangladesh offering holistic education combining modern academics with Islamic values.",
  url: "https://blissinternationalacademy.com",
  logo: "/logo.png",
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Saleha Campus",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Debhata Campus",
    },
  ],
  sameAs: [] as string[],
};

interface NavLabel {
  intro: string;
  missionVision: string;
  whyBia: string;
}

const navLabels: Record<Language, NavLabel> = {
  en: { intro: "Introduction", missionVision: "Mission & Vision", whyBia: "Why BIA" },
  bn: { intro: "পরিচিতি", missionVision: "মিশন ও ভিশন", whyBia: "কেন BIA" },
  ar: { intro: "التعريف", missionVision: "المهمة والرؤية", whyBia: "لماذا BIA" },
};

interface CtaText {
  heading: string;
  sub: string;
  apply: string;
  contact: string;
}

const ctaText: Record<Language, CtaText> = {
  en: {
    heading: "Ready to Join the Bliss Family?",
    sub: "Enroll your child in an environment where knowledge, faith, and character grow together.",
    apply: "Apply Now",
    contact: "Contact Us",
  },
  bn: {
    heading: "ব্লিস পরিবারে যোগ দিতে প্রস্তুত?",
    sub: "আপনার সন্তানকে এমন একটি পরিবেশে ভর্তি করুন যেখানে জ্ঞান, ঈমান এবং চরিত্র একসাথে বিকশিত হয়।",
    apply: "এখনই আবেদন করুন",
    contact: "যোগাযোগ করুন",
  },
  ar: {
    heading: "هل أنت مستعد للانضمام إلى عائلة بليس؟",
    sub: "سجّل طفلك في بيئة تنمو فيها المعرفة والإيمان والشخصية معًا.",
    apply: "قدّم الآن",
    contact: "تواصل معنا",
  },
};

export default function AboutPage() {
  const [language, setLanguage] = useState<Language>("en");

  const nav = navLabels[language];
  const cta = ctaText[language];

  return (
    <main>
      {/* SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <AboutHero language={language} />

      {/* Sticky language switcher + section nav */}
      <div className="sticky top-0 lg:top-[64px] z-30 backdrop-blur-md border-b border-[var(--border)] shadow-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-3 flex items-center justify-between gap-4">
          <nav
            aria-label="Page sections"
            className="hidden sm:flex items-center gap-5 text-sm text-[var(--muted-foreground)]"
          >
            <a href="#introduction" className="hover:text-[var(--primary)] transition-colors">
              {nav.intro}
            </a>
            <span className="text-[var(--border)]">·</span>
            <a href="#mission-vision" className="hover:text-[var(--primary)] transition-colors">
              {nav.missionVision}
            </a>
            <span className="text-[var(--border)]">·</span>
            <a href="#why-bia" className="hover:text-[var(--primary)] transition-colors">
              {nav.whyBia}
            </a>
          </nav>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>

      {/* Sections */}
      <div id="introduction">
        <IntroductionSection language={language} />
      </div>

      <div id="chairmen-message">
        {/* <ChairmanMessageSection language={language} /> */}
        <LeadershipMessages language={language} />
      </div>

      <StatsSection language={language} />

      <div id="mission-vision">
        <MissionVisionSection language={language} />
      </div>

      <div id="why-bia">
        <WhyChooseSection language={language} />
      </div>

      {/* CTA Banner */}
      <section className="py-16 bg-[var(--secondary)]/10 border-y border-[var(--secondary)]/20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-4">
            {cta.heading}
          </h2>
          <p className="text-[var(--muted-foreground)] mb-8 max-w-xl mx-auto">{cta.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admission"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {cta.apply}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-200"
            >
              {cta.contact}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}