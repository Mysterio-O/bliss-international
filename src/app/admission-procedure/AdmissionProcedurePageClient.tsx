"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/app/components/about/strip/LanguageSwitcher";
import type { Language } from "@/app/types/about/types";

type AdmissionStep = {
  id: string;
  title: string;
  summary: string;
  details: string[];
};

type MockSubject = {
  level: string;
  subjects: string;
};

type AdmissionCopy = {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  intro: string;
  viewSteps: string;
  mockSubjectsButton: string;
  stepsSectionTitle: string;
  stepLabel: string;
  mockSystemTitle: string;
  mockSystemIntro: string;
  helpTitle: string;
  helpText: string;
  contactOffice: string;
  backHome: string;
  admissionSteps: AdmissionStep[];
  mockSubjects: MockSubject[];
};

const admissionContent: Record<Language, AdmissionCopy> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Admission Procedure",
    title: "Admission Procedure",
    intro:
      "At Bliss International Academy, we ensure a transparent, fair, and structured admission process that evaluates both academic readiness and overall aptitude of applicants.",
    viewSteps: "View Steps",
    mockSubjectsButton: "Mock Test Subjects",
    stepsSectionTitle: "Admission Process Steps",
    stepLabel: "Step",
    mockSystemTitle: "Mock Test System",
    mockSystemIntro:
      "Purpose: Familiarize students with the admission test structure and reduce anxiety. Duration: 3 to 5 days before the final admission test.",
    helpTitle: "Need Help With Admission?",
    helpText:
      "For documents, schedule, and seat availability, contact the admission office. Successful candidates must complete fee payment and document verification within the given timeline.",
    contactOffice: "Contact Admission Office",
    backHome: "Back to Home",
    admissionSteps: [
      {
        id: "01",
        title: "Admission Announcement",
        summary: "Admission circular is published through official channels.",
        details: [
          "Published on the official website, social media platforms, and notice boards.",
          "Includes available seats, class levels, requirements, important dates, and fees.",
        ],
      },
      {
        id: "02",
        title: "Application Form Submission",
        summary: "Parents or guardians collect/download and submit the completed form.",
        details: [
          "Recent passport-size photographs (2 copies)",
          "Copy of Birth Certificate or Passport for age verification",
          "Previous school records (if applicable)",
          "Parents' NID or Passport copy",
        ],
      },
      {
        id: "03",
        title: "Registration Fee",
        summary: "A non-refundable registration fee is paid at submission.",
        details: ["Registration fee is mandatory and non-refundable."],
      },
      {
        id: "04",
        title: "Admission Test and Mock Test System",
        summary: "Students take a mock test before the final admission test.",
        details: [
          "Mock tests are conducted 3 to 5 days before the official test.",
          "Purpose: familiarization with test structure and reduced test anxiety.",
          "Final admission test is evaluated by the Admission Committee.",
          "Shortlisted candidates are called for interview.",
        ],
      },
      {
        id: "05",
        title: "Interview and Counseling",
        summary: "Interviews are held for students and counseling for guardians.",
        details: [
          "Student interview assesses communication, confidence, and awareness.",
          "Parent or guardian counseling aligns academic goals and policies.",
        ],
      },
      {
        id: "06",
        title: "Result Publication",
        summary: "Results are shared through multiple communication channels.",
        details: [
          "Published on notice board and website.",
          "Shared via SMS or email.",
          "Successful candidates receive an admission offer letter.",
        ],
      },
      {
        id: "07",
        title: "Admission Confirmation",
        summary: "Confirmation requires payment and document verification within deadline.",
        details: [
          "Payment of admission fees and first tuition installment.",
          "Submission of required documents.",
          "Admission is finalized after payment and document verification.",
        ],
      },
      {
        id: "08",
        title: "Orientation Program",
        summary: "New students and parents join orientation before classes begin.",
        details: [
          "Introduces school rules, academic calendar, and curriculum.",
          "Covers extracurricular activities and campus facilities.",
        ],
      },
    ],
    mockSubjects: [
      {
        level: "Pre-Play and Play",
        subjects: "Basic alphabets, numbers, shapes, colors, and oral interaction",
      },
      {
        level: "Nursery and KG",
        subjects:
          "English (letters, phonics, words), Math (numbers, counting, shapes), Drawing, Oral Communication",
      },
      {
        level: "Class I to V",
        subjects: "English (reading, writing, grammar), Mathematics, Science, General Knowledge",
      },
      {
        level: "Upper Classes",
        subjects: "English, Mathematics, Science, ICT, and Aptitude test",
      },
    ],
  },
  bn: {
    breadcrumbHome: "হোম",
    breadcrumbCurrent: "ভর্তি প্রক্রিয়া",
    title: "ভর্তি প্রক্রিয়া",
    intro:
      "ব্লিস ইন্টারন্যাশনাল একাডেমিতে আমরা স্বচ্ছ, ন্যায্য এবং কাঠামোবদ্ধ ভর্তি প্রক্রিয়া অনুসরণ করি, যা শিক্ষার্থীর একাডেমিক প্রস্তুতি ও সামগ্রিক যোগ্যতা মূল্যায়ন করে।",
    viewSteps: "ধাপগুলো দেখুন",
    mockSubjectsButton: "মক টেস্ট বিষয়সমূহ",
    stepsSectionTitle: "ভর্তি প্রক্রিয়ার ধাপসমূহ",
    stepLabel: "ধাপ",
    mockSystemTitle: "মক টেস্ট সিস্টেম",
    mockSystemIntro:
      "উদ্দেশ্য: শিক্ষার্থীদের ভর্তি পরীক্ষার কাঠামোর সাথে পরিচিত করা এবং উদ্বেগ কমানো। সময়কাল: চূড়ান্ত ভর্তি পরীক্ষার ৩ থেকে ৫ দিন আগে।",
    helpTitle: "ভর্তির জন্য সহায়তা প্রয়োজন?",
    helpText:
      "ডকুমেন্ট, সময়সূচি এবং আসনসংখ্যা সম্পর্কে জানতে ভর্তি অফিসে যোগাযোগ করুন। নির্বাচিত শিক্ষার্থীদের নির্ধারিত সময়ে ফি পরিশোধ ও কাগজপত্র যাচাই সম্পন্ন করতে হবে।",
    contactOffice: "ভর্তি অফিসে যোগাযোগ করুন",
    backHome: "হোমে ফিরে যান",
    admissionSteps: [
      {
        id: "01",
        title: "ভর্তি বিজ্ঞপ্তি",
        summary: "ভর্তি সার্কুলার অফিসিয়াল মাধ্যমগুলোতে প্রকাশ করা হয়।",
        details: [
          "অফিসিয়াল ওয়েবসাইট, সামাজিক যোগাযোগমাধ্যম এবং নোটিশ বোর্ডে প্রকাশ করা হয়।",
          "এতে আসনসংখ্যা, শ্রেণি, প্রয়োজনীয়তা, গুরুত্বপূর্ণ তারিখ এবং ফি উল্লেখ থাকে।",
        ],
      },
      {
        id: "02",
        title: "আবেদন ফরম জমা",
        summary: "অভিভাবকরা ফরম সংগ্রহ/ডাউনলোড করে পূরণ করে জমা দেন।",
        details: [
          "সাম্প্রতিক পাসপোর্ট সাইজ ছবি (২ কপি)",
          "জন্মসনদ/পাসপোর্ট কপি (বয়স যাচাইয়ের জন্য)",
          "পূর্ববর্তী স্কুলের রেকর্ড (প্রযোজ্য ক্ষেত্রে)",
          "অভিভাবকের এনআইডি/পাসপোর্ট কপি",
        ],
      },
      {
        id: "03",
        title: "রেজিস্ট্রেশন ফি",
        summary: "ফরম জমার সময় ফেরতযোগ্য নয় এমন রেজিস্ট্রেশন ফি দিতে হয়।",
        details: ["রেজিস্ট্রেশন ফি বাধ্যতামূলক এবং ফেরতযোগ্য নয়।"],
      },
      {
        id: "04",
        title: "ভর্তি পরীক্ষা ও মক টেস্ট সিস্টেম",
        summary: "চূড়ান্ত পরীক্ষার আগে শিক্ষার্থীরা মক টেস্ট দেয়।",
        details: [
          "অফিসিয়াল পরীক্ষার ৩ থেকে ৫ দিন আগে মক টেস্ট অনুষ্ঠিত হয়।",
          "উদ্দেশ্য: প্রশ্নপত্রের ধরন সম্পর্কে ধারণা দেওয়া এবং পরীক্ষাভীতি কমানো।",
          "চূড়ান্ত ভর্তি পরীক্ষা ভর্তি কমিটি মূল্যায়ন করে।",
          "সংক্ষিপ্ত তালিকাভুক্ত শিক্ষার্থীদের সাক্ষাৎকারে ডাকা হয়।",
        ],
      },
      {
        id: "05",
        title: "সাক্ষাৎকার ও কাউন্সেলিং",
        summary: "শিক্ষার্থী এবং অভিভাবকদের জন্য পৃথক মূল্যায়ন ও পরামর্শ অনুষ্ঠিত হয়।",
        details: [
          "শিক্ষার্থীর যোগাযোগ দক্ষতা, আত্মবিশ্বাস এবং সাধারণ জ্ঞান মূল্যায়ন করা হয়।",
          "অভিভাবকদের সাথে শিক্ষাগত লক্ষ্য ও স্কুল নীতিমালা নিয়ে আলোচনা করা হয়।",
        ],
      },
      {
        id: "06",
        title: "ফলাফল প্রকাশ",
        summary: "ফলাফল বিভিন্ন মাধ্যমে প্রকাশ করা হয়।",
        details: [
          "নোটিশ বোর্ড ও ওয়েবসাইটে প্রকাশ করা হয়।",
          "এসএমএস/ইমেইলের মাধ্যমে জানানো হয়।",
          "সফল প্রার্থীরা ভর্তি অফার লেটার পায়।",
        ],
      },
      {
        id: "07",
        title: "ভর্তি নিশ্চিতকরণ",
        summary: "নির্ধারিত সময়ে ফি পরিশোধ ও কাগজপত্র যাচাইয়ের মাধ্যমে ভর্তি নিশ্চিত হয়।",
        details: [
          "ভর্তি ফি এবং প্রথম কিস্তির টিউশন ফি পরিশোধ করতে হবে।",
          "প্রয়োজনীয় কাগজপত্র জমা দিতে হবে।",
          "ফি পরিশোধ ও যাচাই সম্পন্ন হলে ভর্তি চূড়ান্ত হবে।",
        ],
      },
      {
        id: "08",
        title: "ওরিয়েন্টেশন প্রোগ্রাম",
        summary: "নতুন শিক্ষার্থী ও অভিভাবকদের জন্য ওরিয়েন্টেশন সেশন আয়োজন করা হয়।",
        details: [
          "স্কুলের নিয়ম, একাডেমিক ক্যালেন্ডার এবং কারিকুলাম পরিচিত করানো হয়।",
          "সহশিক্ষা কার্যক্রম ও সুবিধাসমূহ সম্পর্কে ধারণা দেওয়া হয়।",
        ],
      },
    ],
    mockSubjects: [
      {
        level: "প্রি-প্লে ও প্লে",
        subjects: "বেসিক বর্ণমালা, সংখ্যা, আকার, রং এবং মৌখিক ইন্টারঅ্যাকশন",
      },
      {
        level: "নার্সারি ও কেজি",
        subjects: "ইংরেজি (অক্ষর, ফোনিকস, শব্দ), গণিত (সংখ্যা, গণনা, আকার), ড্রইং, মৌখিক যোগাযোগ",
      },
      {
        level: "ক্লাস ১ থেকে ৫",
        subjects: "ইংরেজি (পড়া, লেখা, ব্যাকরণ), গণিত, বিজ্ঞান, সাধারণ জ্ঞান",
      },
      {
        level: "উচ্চ শ্রেণি",
        subjects: "ইংরেজি, গণিত, বিজ্ঞান, আইসিটি এবং অ্যাপটিটিউড টেস্ট",
      },
    ],
  },
  ar: {
    breadcrumbHome: "الرئيسية",
    breadcrumbCurrent: "إجراءات القبول",
    title: "إجراءات القبول",
    intro:
      "في أكاديمية بليس الدولية، نعتمد عملية قبول شفافة وعادلة ومنظمة لتقييم الجاهزية الأكاديمية والقدرات العامة للمتقدمين.",
    viewSteps: "عرض الخطوات",
    mockSubjectsButton: "مواد الاختبار التجريبي",
    stepsSectionTitle: "خطوات عملية القبول",
    stepLabel: "الخطوة",
    mockSystemTitle: "نظام الاختبار التجريبي",
    mockSystemIntro:
      "الهدف: تعريف الطلاب ببنية اختبار القبول وتقليل التوتر. المدة: قبل الاختبار النهائي بـ 3 إلى 5 أيام.",
    helpTitle: "هل تحتاج إلى مساعدة في القبول؟",
    helpText:
      "للاستفسار عن المستندات والجدول الزمني وتوفر المقاعد، تواصل مع مكتب القبول. يجب على المقبولين إتمام سداد الرسوم والتحقق من المستندات ضمن المدة المحددة.",
    contactOffice: "تواصل مع مكتب القبول",
    backHome: "العودة إلى الرئيسية",
    admissionSteps: [
      {
        id: "01",
        title: "إعلان القبول",
        summary: "يتم نشر تعميم القبول عبر القنوات الرسمية.",
        details: [
          "يُنشر في الموقع الرسمي ومنصات التواصل الاجتماعي ولوحات الإعلانات.",
          "يتضمن المقاعد المتاحة والمراحل الدراسية والمتطلبات والمواعيد المهمة والرسوم.",
        ],
      },
      {
        id: "02",
        title: "تقديم استمارة الطلب",
        summary: "يقوم أولياء الأمور بالحصول على الاستمارة أو تنزيلها ثم تسليمها بعد تعبئتها.",
        details: [
          "صورتان شخصيتان حديثتان بحجم جواز السفر",
          "نسخة من شهادة الميلاد أو جواز السفر للتحقق من العمر",
          "السجلات المدرسية السابقة (إن وجدت)",
          "نسخة من هوية ولي الأمر أو جواز السفر",
        ],
      },
      {
        id: "03",
        title: "رسوم التسجيل",
        summary: "يتم دفع رسوم تسجيل غير قابلة للاسترداد عند تقديم الاستمارة.",
        details: ["رسوم التسجيل إلزامية وغير قابلة للاسترداد."],
      },
      {
        id: "04",
        title: "اختبار القبول ونظام الاختبار التجريبي",
        summary: "يؤدي الطالب اختبارًا تجريبيًا قبل اختبار القبول النهائي.",
        details: [
          "يُعقد الاختبار التجريبي قبل الاختبار الرسمي بـ 3 إلى 5 أيام.",
          "الهدف: التعرف على نمط الاختبار وتقليل القلق.",
          "تقوم لجنة القبول بتقييم الاختبار النهائي.",
          "يتم استدعاء المرشحين المختارين للمقابلة.",
        ],
      },
      {
        id: "05",
        title: "المقابلة والإرشاد",
        summary: "تُجرى مقابلات للطلاب وجلسات إرشاد لأولياء الأمور.",
        details: [
          "تقييم مهارات التواصل والثقة والوعي العام لدى الطالب.",
          "مناقشة الأهداف التعليمية وسياسات المدرسة مع أولياء الأمور.",
        ],
      },
      {
        id: "06",
        title: "إعلان النتائج",
        summary: "تُنشر النتائج عبر قنوات متعددة.",
        details: [
          "تُنشر في لوحة الإعلانات والموقع الإلكتروني.",
          "تُرسل عبر الرسائل النصية أو البريد الإلكتروني.",
          "يحصل المقبولون على خطاب عرض القبول.",
        ],
      },
      {
        id: "07",
        title: "تأكيد القبول",
        summary: "يتم تأكيد القبول بعد سداد الرسوم والتحقق من المستندات ضمن الموعد المحدد.",
        details: [
          "سداد رسوم القبول والقسط الأول من الرسوم الدراسية.",
          "تقديم المستندات المطلوبة.",
          "يصبح القبول نهائيًا بعد إتمام السداد والتحقق.",
        ],
      },
      {
        id: "08",
        title: "برنامج التهيئة",
        summary: "تتم دعوة الطلاب الجدد وأولياء الأمور إلى جلسة تعريفية.",
        details: [
          "يتم التعريف بقوانين المدرسة والتقويم الأكاديمي والمنهج الدراسي.",
          "يتم استعراض الأنشطة اللامنهجية والمرافق المتاحة.",
        ],
      },
    ],
    mockSubjects: [
      {
        level: "ما قبل اللعب واللعب",
        subjects: "الحروف الأساسية، الأرقام، الأشكال، الألوان، والتفاعل الشفهي",
      },
      {
        level: "الروضة والتمهيدي",
        subjects: "الإنجليزية (حروف، صوتيات، كلمات)، الرياضيات (أرقام، عد، أشكال)، الرسم، التواصل الشفهي",
      },
      {
        level: "الصف الأول إلى الخامس",
        subjects: "الإنجليزية (قراءة، كتابة، قواعد)، الرياضيات، العلوم، المعرفة العامة",
      },
      {
        level: "الصفوف العليا",
        subjects: "الإنجليزية، الرياضيات، العلوم، تقنية المعلومات، واختبار القدرات",
      },
    ],
  },
};

export default function AdmissionProcedurePageClient() {
  const [language, setLanguage] = useState<Language>("en");
  const content = admissionContent[language];

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"} className="relative overflow-hidden bg-background pb-28 pt-2 text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(94,143,188,0.22),rgba(94,143,188,0)_62%)] dark:bg-[radial-gradient(circle_at_top,rgba(122,171,214,0.18),rgba(122,171,214,0)_62%)]"
      />

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/80 p-6 shadow-[0_20px_50px_rgba(7,18,31,0.12)] backdrop-blur-sm sm:p-8 lg:p-10 dark:bg-card/70 dark:shadow-[0_22px_56px_rgba(0,0,0,0.34)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(245,166,35,0.13),rgba(245,166,35,0))] dark:bg-[linear-gradient(180deg,rgba(255,188,82,0.14),rgba(255,188,82,0))]"
          />

          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-primary">
                {content.breadcrumbHome}
              </Link>
              <span className="text-border">/</span>
              <span className="text-primary">{content.breadcrumbCurrent}</span>
            </div>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          <h1 className="relative mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">{content.title}</h1>
          <p className="relative mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{content.intro}</p>

          <div className="relative mt-6 flex flex-wrap gap-3">
            <Link
              href="#admission-steps"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {content.viewSteps}
            </Link>
            <Link
              href="#mock-test-subjects"
              className="inline-flex items-center justify-center rounded-xl border border-primary/30 bg-background/70 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              {content.mockSubjectsButton}
            </Link>
          </div>
        </div>
      </section>

      <section id="admission-steps" className="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-lg font-extrabold tracking-tight text-foreground sm:text-xl">{content.stepsSectionTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.admissionSteps.map((step) => (
            <article
              key={step.id}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-5 shadow-[0_12px_28px_rgba(10,21,34,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_32px_rgba(43,92,136,0.18)] dark:bg-card/85"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-bold tracking-widest text-primary">
                {content.stepLabel} {step.id}
              </div>
              <h3 className="relative mt-3 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-6 text-muted-foreground">{step.summary}</p>
              <ul className="relative mt-3 space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-foreground/90">
                    <span className="mt-[0.38rem] inline-flex h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="mock-test-subjects" className="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card/90 shadow-[0_12px_34px_rgba(10,21,34,0.09)] dark:bg-card/80">
          <div className="border-b border-border/70 bg-muted/40 px-5 py-4 sm:px-6">
            <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">{content.mockSystemTitle}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{content.mockSystemIntro}</p>
          </div>

          <div className="grid gap-3 p-5 sm:p-6">
            {content.mockSubjects.map((item) => (
              <div
                key={item.level}
                className="rounded-2xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-primary/25"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-primary">{item.level}</h3>
                <p className="mt-2 text-sm leading-6 text-foreground/90">{item.subjects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-secondary/35 bg-[linear-gradient(145deg,rgba(163,203,63,0.18),rgba(43,92,136,0.12))] p-6 text-foreground shadow-[0_16px_38px_rgba(43,92,136,0.16)] sm:p-8 dark:bg-[linear-gradient(145deg,rgba(183,216,92,0.14),rgba(94,143,188,0.16))]">
          <h2 className="text-2xl font-black tracking-tight">{content.helpTitle}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-foreground/85 sm:text-base">{content.helpText}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {content.contactOffice}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-primary/35 bg-background/65 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              {content.backHome}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
