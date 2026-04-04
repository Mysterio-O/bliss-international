import type { Metadata } from "next";
import FormsDownloadsPage from "./FormsDownloadsPage";

export const metadata: Metadata = {
  title: "Forms & Downloads | BLISS International Academy",
  description: "Download admission forms, academic documents, policies, and syllabus materials from BLISS International Academy.",
  openGraph: {
    title: "Forms & Downloads | BLISS International Academy",
    description: "Campus-wise forms and downloadable resources for students and parents.",
    type: "website",
  },
};

export default function Page() {
  return <FormsDownloadsPage />;
}
