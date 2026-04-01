import type { Metadata } from "next";
import AdmissionProcedurePageClient from "@/app/admission-procedure/AdmissionProcedurePageClient";

const pageUrl = "https://bliss-international.vercel.app/admission-procedure";

export const metadata: Metadata = {
  title: "Admission Procedure | Bliss International Academy",
  description:
    "Read the complete admission process of Bliss International Academy, including application, mock test system, final test, interview, result publication, and orientation.",
  keywords: [
    "Bliss International Academy admission",
    "admission procedure Bangladesh school",
    "school admission process Satkhira",
    "Bliss International Academy application",
    "mock test for school admission",
    "KG and primary admission Bangladesh",
    "student admission interview process",
    "school admission requirements",
    "admission fees and confirmation",
  ],
  category: "education",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Admission Procedure | Bliss International Academy",
    description:
      "Step-by-step admission flow: announcement, application, mock test, final test, interview, results, confirmation, and orientation.",
    url: pageUrl,
    siteName: "Bliss International Academy",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/banner-images/7.webp",
        width: 1200,
        height: 630,
        alt: "Admission Procedure at Bliss International Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admission Procedure | Bliss International Academy",
    description:
      "Official admission process with mock test system, interview, result publication, and confirmation requirements.",
    images: ["/banner-images/7.webp"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function AdmissionProcedurePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Admission Procedure | Bliss International Academy",
      description:
        "Complete admission workflow for Bliss International Academy including eligibility checks, tests, interviews, and orientation.",
      url: pageUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "Bliss International Academy",
        url: "https://bliss-international.vercel.app",
      },
      about: {
        "@type": "EducationalOrganization",
        name: "Bliss International Academy",
      },
      inLanguage: ["en", "bn", "ar"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://bliss-international.vercel.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Admission Procedure",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What documents are required for admission form submission?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Required documents include 2 recent passport-size photographs, copy of Birth Certificate or Passport, previous school records (if applicable), and parent or guardian NID/Passport copy.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a mock test before the final admission test?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A mock test is held 3-5 days before the official admission test to familiarize students with the test format and reduce anxiety.",
          },
        },
        {
          "@type": "Question",
          name: "When is admission confirmed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Admission is confirmed only after payment of admission fees and first tuition installment, plus successful document verification within the given deadline.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AdmissionProcedurePageClient />
    </>
  );
}
