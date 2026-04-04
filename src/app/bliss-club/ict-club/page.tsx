import type { Metadata } from "next";
import ClubPage from "../ClubPage";
import { ictClubData } from "../clubs-data";

export const metadata: Metadata = {
  title: "ICT Club | BLISS International Academy",
  description: "Join the ICT Club. Develop coding skills, digital literacy, and technological innovation through programming and web development.",
};

export default function Page() {
  return <ClubPage clubData={ictClubData} />;
}
