import type { Metadata } from "next";
import SyllabusPage from "./SyllabusPage";

export const metadata: Metadata = {
  title: "Syllabus | BLISS International Academy",
  description: "Detailed subject-wise syllabi for all classes including evaluation patterns and assessment schedules.",
  openGraph: {
    title: "Syllabus | BLISS International Academy",
    description: "Comprehensive syllabi for all subjects and classes.",
    type: "website",
  },
};

export default function Page() {
  return <SyllabusPage />;
}
