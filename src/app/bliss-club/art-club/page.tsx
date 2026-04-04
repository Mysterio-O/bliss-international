import type { Metadata } from "next";
import ClubPage from "../ClubPage";
import { artClubData } from "../clubs-data";

export const metadata: Metadata = {
  title: "Art Club | BLISS International Academy",
  description: "Join the Art Club. Foster artistic expression, develop creative skills, and appreciate various art forms including painting, sculpture, and digital art.",
};

export default function Page() {
  return <ClubPage clubData={artClubData} />;
}
