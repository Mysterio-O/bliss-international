"use client";

import { Language, LanguageProps } from "@/app/types/about/types";
import { cn } from "@/lib/utils";

interface IntroContent {
    label: string;
    text: string;
    dir: "ltr" | "rtl";
}

interface Highlight {
    icon: string;
    title: string;
    desc: string;
}

const content: Record<Language, IntroContent> = {
    en: {
        label: "Brief Introduction",
        text: "Bliss International Academy is an exceptional English version educational institute. It creates an optimal learning environment with international dimension. It offers a friendly and safe environment where learners are bound to purposefully learn and collaborate with the Islamic manners. Here, you will enjoy your long desired combination of moral and modern education under the direct supervision of some dedicated & promising teachers from a number of eminent English medium and English version school at an affordable cost.",
        dir: "ltr",
    },
    bn: {
        label: "সংক্ষিপ্ত পরিচিতি",
        text: "ব্লিস ইন্টারন্যাশনাল একাডেমি একটি ব্যতিক্রমধর্মী ইংলিশ ভার্সন শিক্ষা প্রতিষ্ঠান, যেখানে রয়েছে আন্তর্জাতিক মানের সেবাপূর্ণ পরিবেশ। এখানে শিক্ষার্থীদের নিরাপদ ও বন্ধুত্বপূর্ণ পরিবেশে ইংরেজি, আরবি ও বাংলা ভাষায় শিক্ষার্থীদের পাঠদানের পাশাপাশি ইসলামী নীতির অনুশীলনের শিক্ষা প্রদান করা হয়। বিভিন্ন প্রসিদ্ধ ইংলিশ মিডিয়াম ও ইংলিশ ভার্সন স্কুলের কিছু নিবেদিতপ্রাণ ও প্রতিশ্রুতিশীল শিক্ষকের তত্ত্বাবধানে ব্লিস ইন্টারন্যাশনাল একাডেমি তুলনামূলক কম খরচে দিচ্ছে আপনাদের দীর্ঘদিনের কাঙ্ক্ষিত নৈতিক ও আধুনিক শিক্ষার সমন্বিত পরিবেশ।",
        dir: "ltr",
    },
    ar: {
        label: "التعريف في لمحة",
        text: "بليس إنترناشيونال أكاديمي هي مؤسسة تعليمية استثنائية بالمنهج الإنجليزي. توفر بيئة تعليمية مثالية ذات بعد دولي، بالإضافة إلى بيئة آمنة وودية حيث يلتزم الطلاب بالتعلم الهادف والتعاون وفقًا للآداب الإسلامية. هنا ستستمتعون بمزيجكم المنشود منذ زمن طويل من التعليم الأخلاقي والحديث تحت إشراف مباشر من بعض المعلمين المخلصين والواعدين من عدد من المدارس البارزة ذات المنهج الإنجليزي والنسخة الإنجليزية وبأقل تكلفة.",
        dir: "rtl",
    },
};

const highlights: Record<Language, Highlight[]> = {
    en: [
        { icon: "🌍", title: "International Dimension", desc: "World-class curriculum aligned with global standards" },
        { icon: "🕌", title: "Islamic Values", desc: "Moral education woven into every aspect of learning" },
        { icon: "📚", title: "Expert Faculty", desc: "Dedicated teachers from top English medium schools" },
        { icon: "💰", title: "Affordable Excellence", desc: "Premium education at accessible costs for all families" },
    ],
    bn: [
        { icon: "🌍", title: "আন্তর্জাতিক মান", desc: "বৈশ্বিক মানের সাথে সংগতিপূর্ণ বিশ্বমানের পাঠ্যক্রম" },
        { icon: "🕌", title: "ইসলামী মূল্যবোধ", desc: "শিক্ষার প্রতিটি দিকে নৈতিক শিক্ষার সমন্বয়" },
        { icon: "📚", title: "বিশেষজ্ঞ শিক্ষকমণ্ডলী", desc: "সেরা ইংলিশ মিডিয়াম স্কুলের নিবেদিতপ্রাণ শিক্ষক" },
        { icon: "💰", title: "সাশ্রয়ী শিক্ষা", desc: "সকল পরিবারের নাগালের মধ্যে মানসম্মত শিক্ষা" },
    ],
    ar: [
        { icon: "🌍", title: "البُعد الدولي", desc: "مناهج دراسية عالمية متوافقة مع المعايير الدولية" },
        { icon: "🕌", title: "القيم الإسلامية", desc: "التعليم الأخلاقي متجذّر في كل جانب من جوانب التعلم" },
        { icon: "📚", title: "كادر تعليمي متميز", desc: "معلمون مخلصون من أفضل المدارس ذات المنهج الإنجليزي" },
        { icon: "💰", title: "تميّز بأسعار مناسبة", desc: "تعليم راقٍ بتكاليف في متناول جميع الأسر" },
    ],
};

export default function IntroductionSection({ language }: LanguageProps) {
    const c = content[language];
    const h = highlights[language];

    const ctaLabel: Record<Language, string> = {
        en: "Apply for Admission",
        bn: "ভর্তির জন্য আবেদন করুন",
        ar: "التقدم للقبول",
    };

    return (
        <section className="py-16 md:py-24 bg-[var(--background)]" aria-label="About Introduction">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-10 bg-[var(--secondary)]" />
                    <span className="text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase">
                        {c.label}
                    </span>
                    <div className="h-px w-10 bg-[var(--secondary)]" />
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Text column */}
                    <div className={cn("space-y-6", language === "ar" ? "lg:order-2" : "")}>
                        <h2
                            className={cn(
                                "text-2xl md:text-3xl xl:text-4xl font-extrabold text-[var(--foreground)] leading-snug",
                                language === "ar" ? "text-right" : "",
                                language === "bn" ? "leading-relaxed" : ""
                            )}
                            dir={c.dir}
                        >
                            {language === "en" && (
                                <>
                                    Where <span className="text-[var(--primary)]">Modern Excellence</span> Meets{" "}
                                    <span className="text-[var(--secondary)]">Timeless Values</span>
                                </>
                            )}
                            {language === "bn" && (
                                <>
                                    যেখানে <span className="text-[var(--primary)]">আধুনিক শিক্ষা</span> মেলে{" "}
                                    <span className="text-[var(--secondary)]">চিরন্তন মূল্যবোধের</span> সাথে
                                </>
                            )}
                            {language === "ar" && (
                                <>
                                    حيث يلتقي <span className="text-[var(--primary)]">التميّز الحديث</span> بـ
                                    <span className="text-[var(--secondary)]">القيم الخالدة</span>
                                </>
                            )}
                        </h2>

                        <p
                            className={cn(
                                "text-[var(--muted-foreground)] text-base md:text-lg leading-relaxed",
                                language === "ar" ? "text-right" : "",
                                language === "bn" ? "leading-[1.9]" : "leading-[1.8]"
                            )}
                            dir={c.dir}
                        >
                            {c.text}
                        </p>

                        {/* CTA */}
                        <div className={cn("pt-2", language === "ar" ? "text-right" : "")}>
                            <a
                                href="/admission"
                                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow hover:shadow-lg hover:-translate-y-0.5"
                            >
                                {ctaLabel[language]}
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
                        </div>
                    </div>

                    {/* Highlights column */}
                    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", language === "ar" ? "lg:order-1" : "")}>
                        {h.map((item, i) => (
                            <div
                                key={i}
                                className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--primary)]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Accent dot */}
                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                <h3
                                    className={cn(
                                        "font-bold text-[var(--foreground)] text-base mb-1.5",
                                        language === "ar" ? "text-right" : ""
                                    )}
                                    dir={c.dir}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={cn(
                                        "text-[var(--muted-foreground)] text-sm leading-relaxed",
                                        language === "ar" ? "text-right" : ""
                                    )}
                                    dir={c.dir}
                                >
                                    {item.desc}
                                </p>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-b-2xl group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}