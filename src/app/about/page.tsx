import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About BIA | Bliss International Academy",
  description:
    "Learn about Bliss International Academy — an exceptional English version school in Bangladesh combining modern academics with Islamic values, expert teachers, and two modern campuses.",
  keywords: [
    "Bliss International Academy",
    "BIA",
    "English version school Bangladesh",
    "Islamic education Bangladesh",
    "NCTB English version",
    "Saleha Campus",
    "Debhata Campus",
    "about BIA",
    "school admission Bangladesh",
  ],
  openGraph: {
    title: "About Bliss International Academy",
    description:
      "Where modern excellence meets timeless values. BIA offers holistic, values-centered education for every learner.",
    url: "https://bliss-international.vercel.app/about",
    siteName: "Bliss International Academy",
    images: [
      {
        url: "/banner-images/7.webp",
        width: 1200,
        height: 630,
        alt: "Bliss International Academy Campus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bliss International Academy",
    description: "Holistic English-version education with Islamic values. Join the BIA family today.",
    images: ["/banner-images/7.webp"],
  },
  alternates: {
    canonical: "https://bliss-international.vercel.app/about",
  },
};

export default function About() {
  return <AboutPage />;
}