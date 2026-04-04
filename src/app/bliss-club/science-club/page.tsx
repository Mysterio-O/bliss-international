import type { Metadata } from "next";
import ClubPage from "../ClubPage";
import { scienceClubData } from "../clubs-data";

export const metadata: Metadata = {
  title: "Science Club | BLISS International Academy",
  description: "Join the Science Club. Nurture scientific curiosity, conduct experiments, and develop problem-solving skills through STEM activities.",
};

export default function Page() {
  return <ClubPage clubData={scienceClubData} />;
}
