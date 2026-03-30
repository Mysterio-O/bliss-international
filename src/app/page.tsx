import { BannerCarousel } from "@/app/components/banner/BannerCarousel";
import { ProgramsSection } from "./components/programs/ProgramSection";
import { PastEventsSection } from "./components/pasteventssection/Pasteventssection";
import { TestimonialsSection } from "./components/testimonial-section/TestimonialsSection";
import LatestUpdates from "./components/latest-updates/LatestUpdates";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-32 sm:px-6 sm:pb-10 lg:px-8">
        <section className="-mx-4 sm:-mx-6 lg:-mx-8">
          <BannerCarousel />
        </section>
        <section className="-mx-4 sm:-mx-6 lg:-mx-8">
          <ProgramsSection />
        </section>
        <section className="-mx-4 sm:-mx-6 lg:-mx-8">
          <PastEventsSection />
        </section>
        <section className="-mx-4 sm:-mx-6 lg:-mx-8">
          <TestimonialsSection />
        </section>
        <section className="-mx-4 sm:-mx-6 lg:-mx-8">
          <LatestUpdates />
        </section>
      </main>
    </div>
  );
}
