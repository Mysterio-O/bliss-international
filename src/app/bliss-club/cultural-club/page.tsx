import type { Metadata } from "next";
import ClubPage from "../ClubPage";
import { culturalClubData } from "../clubs-data";

export const metadata: Metadata = {
  title: "Cultural Club | BLISS International Academy",
  description: "Join the Cultural Club. Celebrate Indian culture and traditions through dance, music, theater, and cultural events.",
};

export default function Page() {
  return <ClubPage clubData={culturalClubData} />;
}
