import type { Metadata } from "next";
import ClubPage from "../ClubPage";
import { languageClubData } from "../clubs-data";

export const metadata: Metadata = {
  title: "Language Club | BLISS International Academy",
  description: "Join the Language Club at BLISS International Academy. Develop communication skills, debating, and language proficiency through fun activities.",
  openGraph: {
    title: "Language Club | BLISS International Academy",
    description: "Explore our Language Club programs and activities.",
    type: "website",
  },
};

export default function Page() {
  return <ClubPage clubData={languageClubData} />;
}
