import type { Metadata } from "next";
import PaymentProcedurePageClient from "@/app/payment-procedure/PaymentProcedurePageClient";

const pageUrl = "https://bliss-international.vercel.app/payment-procedure";

export const metadata: Metadata = {
  title: "Payment Procedure | Bliss International Academy",
  description:
    "Get payment process details for Satkhira and Debhata campuses, including accounts office contacts, office hours, and online payment demo flow.",
  keywords: [
    "Bliss International Academy payment",
    "payment procedure school",
    "Satkhira campus accounts office",
    "Debhata campus payment",
    "school fee payment",
    "online payment demo",
  ],
  openGraph: {
    title: "Payment Procedure | Bliss International Academy",
    description:
      "Campus-wise payment contacts and a modern online payment demo interface in English, Bengali, and Arabic.",
    url: pageUrl,
    siteName: "Bliss International Academy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/payment/payment-satkhira.jpg",
        width: 1200,
        height: 630,
        alt: "Payment Procedure at Bliss International Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Procedure | Bliss International Academy",
    description:
      "Campus-wise payment contacts and office hours with an online payment demo section.",
    images: ["/payment/payment-satkhira.jpg"],
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function PaymentProcedurePage() {
  return <PaymentProcedurePageClient />;
}
