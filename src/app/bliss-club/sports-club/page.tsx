import type { Metadata } from "next";
import ClubPage from "../ClubPage";
import { sportsClubData } from "../clubs-data";

export const metadata: Metadata = {
  title: "Sports Club | BLISS International Academy",
  description: "Join the Sports Club. Promote physical fitness, sportsmanship, and athletic excellence through cricket, football, athletics, and more.",
};

export default function Page() {
  return <ClubPage clubData={sportsClubData} />;
}
