"use client";

import { cn } from "@/lib/utils";
import type { Language, LanguageProps } from "../../../types/about/types";
import {
  Languages,
  BookOpen,
  GraduationCap,
  School,
  Users,
  Activity,
} from "lucide-react";


type AccentColor = "primary" | "secondary";

interface Reason {
  num: string;
  title: string;
  desc: string;
  accent: AccentColor;
  icon: React.ElementType;
}

interface WhyChooseContent {
  sectionLabel: string;
  heading: string;
  subheading: string;
  reasons: Reason[];
}

const content: Record<Language, WhyChooseContent> = {
  en: {
    sectionLabel: "Why Choose Us",
    heading: "A School That Truly Cares",
    subheading: "We go beyond academics to build well-rounded human beings.",
    reasons: [
      {
        num: "01",
        title: "Bilingual & Trilingual Environment",
        desc: "Students are taught in English while also developing fluency in Bangla and Arabic, preparing them for a multilingual world.",
        accent: "primary",
        icon: Languages,
      },
      {
        num: "02",
        title: "Islamic Character Formation",
        desc: "From daily prayers to Quran recitation, we cultivate spiritual grounding alongside academic excellence.",
        accent: "secondary",
        icon: BookOpen,
      },
      {
        num: "03",
        title: "NCTB-Aligned Curriculum",
        desc: "Our English version curriculum follows the national framework while enriching it with international teaching methodologies.",
        accent: "primary",
        icon: GraduationCap,
      },
      {
        num: "04",
        title: "Two Modern Campuses",
        desc: "Saleha Campus and Debhata Campus both feature safe, well-equipped classrooms and a stimulating learning environment.",
        accent: "secondary",
        icon: School,
      },
      {
        num: "05",
        title: "Experienced & Passionate Teachers",
        desc: "Every teacher brings expertise from renowned institutions and a deep commitment to each student's growth.",
        accent: "primary",
        icon: Users,
      },
      {
        num: "06",
        title: "Holistic Development",
        desc: "Sports days, cultural programs, co-curricular activities and more ensure students grow in every dimension.",
        accent: "secondary",
        icon: Activity,
      },
    ],
  },
  bn: {
    sectionLabel: "কেন আমাদের বেছে নেবেন",
    heading: "একটি স্কুল যে সত্যিই যত্ন নেয়",
    subheading: "আমরা একাডেমিক্সের বাইরে গিয়ে সামগ্রিক মানুষ গড়ি।",
    reasons: [
      {
        num: "০১",
        title: "দ্বিভাষিক ও ত্রিভাষিক পরিবেশ",
        desc: "শিক্ষার্থীদের ইংরেজিতে শেখানো হয়, পাশাপাশি বাংলা ও আরবিতে দক্ষতা তৈরি করা হয়।",
        accent: "primary",
        icon: Languages,
      },
      {
        num: "০২",
        title: "ইসলামী চরিত্র গঠন",
        desc: "দৈনিক নামাজ থেকে কোরআন তিলাওয়াত পর্যন্ত, আমরা একাডেমিক শ্রেষ্ঠত্বের পাশাপাশি আধ্যাত্মিক ভিত্তি গড়ি।",
        accent: "secondary",
        icon: BookOpen,
      },
      {
        num: "০৩",
        title: "NCTB-অনুগত পাঠ্যক্রম",
        desc: "আমাদের ইংলিশ ভার্সন পাঠ্যক্রম জাতীয় কাঠামো অনুসরণ করে এবং আন্তর্জাতিক শিক্ষণ পদ্ধতিতে সমৃদ্ধ।",
        accent: "primary",
        icon: GraduationCap,
      },
      {
        num: "০৪",
        title: "দুটি আধুনিক ক্যাম্পাস",
        desc: "সালেহা ক্যাম্পাস ও দেবহাটা ক্যাম্পাস উভয়েই নিরাপদ, সুসজ্জিত শ্রেণিকক্ষ ও উদ্দীপনামূলক পরিবেশ সহ।",
        accent: "secondary",
        icon: School,
      },
      {
        num: "০৫",
        title: "অভিজ্ঞ ও উৎসাহী শিক্ষকমণ্ডলী",
        desc: "প্রতিটি শিক্ষক বিখ্যাত প্রতিষ্ঠান থেকে দক্ষতা এবং প্রতিটি শিক্ষার্থীর বিকাশে গভীর প্রতিশ্রুতি নিয়ে আসেন।",
        accent: "primary",
        icon: Users,
      },
      {
        num: "০৬",
        title: "সামগ্রিক বিকাশ",
        desc: "ক্রীড়া দিবস, সাংস্কৃতিক কার্যক্রম, সহ-পাঠ্যক্রমিক কার্যকলাপ শিক্ষার্থীদের সর্বদিক থেকে বিকশিত করে।",
        accent: "secondary",
        icon: Activity,
      },
    ],
  },
  ar: {
    sectionLabel: "لماذا تختارنا",
    heading: "مدرسة تهتم بك حقاً",
    subheading: "نتجاوز الأكاديميات لبناء إنسان متكامل.",
    reasons: [
      {
        num: "٠١",
        title: "بيئة ثنائية وثلاثية اللغة",
        desc: "يتعلم الطلاب باللغة الإنجليزية مع تطوير الطلاقة في البنغالية والعربية.",
        accent: "primary",
        icon: Languages,
      },
      {
        num: "٠٢",
        title: "تشكيل الشخصية الإسلامية",
        desc: "من الصلوات اليومية إلى تلاوة القرآن، نبني الأسس الروحية جنبًا إلى جنب مع التميز الأكاديمي.",
        accent: "secondary",
        icon: BookOpen,
      },
      {
        num: "٠٣",
        title: "مناهج متوافقة مع NCTB",
        desc: "يتبع منهجنا الإطار الوطني ويُثريه بالمنهجيات التعليمية الدولية.",
        accent: "primary",
        icon: GraduationCap,
      },
      {
        num: "٠٤",
        title: "حرمان جامعيان حديثان",
        desc: "يتميز كل من حرم سالها وحرم ديبهاتا بفصول دراسية آمنة ومجهزة جيدًا.",
        accent: "secondary",
        icon: School,
      },
      {
        num: "٠٥",
        title: "معلمون متمرسون ومتحمسون",
        desc: "يجلب كل معلم خبرات من مؤسسات مرموقة والتزامًا عميقًا بنمو كل طالب.",
        accent: "primary",
        icon: Users,
      },
      {
        num: "٠٦",
        title: "التطوير الشامل",
        desc: "أيام الرياضة والبرامج الثقافية والأنشطة المصاحبة تضمن نمو الطلاب في كل الأبعاد.",
        accent: "secondary",
        icon: Activity,
      },
    ],
  },
};

export default function WhyChooseSection({ language }: LanguageProps) {
  const c = content[language];
  const isAr = language === "ar";

  return (
    <section className="py-16 md:py-24 bg-[var(--background)]" aria-label="Why Choose BIA">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/20">
            {c.sectionLabel}
          </span>
          <h2
            className={cn(
              "text-2xl md:text-4xl font-extrabold text-[var(--foreground)] mt-2 mb-3",
              isAr ? "leading-relaxed" : ""
            )}
          >
            {c.heading}
          </h2>
          <p
            className="text-[var(--muted-foreground)] max-w-xl mx-auto text-sm md:text-base"
            dir={isAr ? "rtl" : "ltr"}
          >
            {c.subheading}
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.reasons.map((reason, i) => (
            <div
              key={i}
              className={cn(
                "group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 overflow-hidden",
                "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              )}
            >
              {/* Big number watermark */}
              <div
                className={cn(
                  "absolute -top-0 -right-0 text-8xl font-black opacity-[0.06] select-none pointer-events-none transition-opacity group-hover:opacity-[0.1]",
                  reason.accent === "primary" ? "text-[var(--primary)]" : "text-[var(--secondary)]"
                )}
                aria-hidden="true"
              >
                {reason.num}
              </div>

              {/* Top-right icon */}
              <div
                className={cn(
                  "absolute top-4 left-4 p-2 rounded-lg",
                  reason.accent === "primary"
                    ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                    : "bg-[var(--secondary)]/10 text-[var(--secondary)]"
                )}
              >
                <reason.icon className="w-5 h-5" />
              </div>

              <h3
                className={cn(
                  "font-bold text-[var(--foreground)] text-base md:text-lg mb-2 mt-8",
                  isAr ? "text-right leading-relaxed" : ""
                )}
                dir={isAr ? "rtl" : "ltr"}
              >
                {reason.title}
              </h3>
              <p
                className={cn(
                  "text-[var(--muted-foreground)] text-sm leading-relaxed",
                  isAr ? "text-right leading-[1.9]" : "leading-[1.75]"
                )}
                dir={isAr ? "rtl" : "ltr"}
              >
                {reason.desc}
              </p>

              {/* Bottom color bar */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500",
                  reason.accent === "primary" ? "bg-[var(--primary)]" : "bg-[var(--secondary)]"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}