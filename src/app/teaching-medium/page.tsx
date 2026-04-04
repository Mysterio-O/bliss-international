import type { Metadata } from "next";
import TeachingMediumPage from "./TeachingMediumPage";

export const metadata: Metadata = {
  title: "Teaching Medium | BLISS International Academy",
  description: "Learn about our English and Bengali medium programs, pedagogical approaches, and educational methodology at BLISS International Academy.",
  openGraph: {
    title: "Teaching Medium | BLISS International Academy",
    description: "Choose between English and Bengali medium education with comprehensive curriculum.",
    type: "website",
  },
};

export default function Page() {
  return <TeachingMediumPage />;
}
