import type { Metadata } from "next";
import CurriculumPage from "./CurriculumPage";

export const metadata: Metadata = {
  title: "Curriculum | BLISS International Academy",
  description: "Comprehensive curriculum framework for classes Play to Class X, including learning objectives, subjects, and educational approach at BLISS International Academy.",
  openGraph: {
    title: "Curriculum | BLISS International Academy",
    description: "Explore our comprehensive, student-centric curriculum designed for holistic development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum | BLISS International Academy",
    description: "Comprehensive curriculum framework for all classes.",
  },
  alternates: {
    canonical: "https://blissinternationalacademy.com/curriculum",
  },
};

export default function Page() {
  return <CurriculumPage />;
}
