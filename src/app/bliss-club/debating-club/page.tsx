import type { Metadata } from "next";
import ClubPage from "../ClubPage";
import { debatingClubData } from "../clubs-data";

export const metadata: Metadata = {
  title: "Debating Club | BLISS International Academy",
  description: "Join the Debating Club. Develop argumentation, public speaking, and critical thinking skills through competitive and friendly debates.",
};

export default function Page() {
  return <ClubPage clubData={debatingClubData} />;
}
