import Header from "@/app/components/headers/Header";
import { BannerCarousel } from "@/app/components/banner/BannerCarousel";
import { ProgramsSection } from "./components/programs/ProgramSection";
import { PastEventsSection } from "./components/pasteventssection/Pasteventssection";
import { TestimonialsSection } from "./components/testimonial-section/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

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

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Admin Overview</p>
            <p className="mt-2 text-2xl font-semibold text-role-admin">42</p>
            <p className="mt-1 text-xs text-muted-foreground">Pending approvals</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Teacher Tasks</p>
            <p className="mt-2 text-2xl font-semibold text-role-teacher">18</p>
            <p className="mt-1 text-xs text-muted-foreground">Assignments to review</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Student Alerts</p>
            <p className="mt-2 text-2xl font-semibold text-role-student">7</p>
            <p className="mt-1 text-xs text-muted-foreground">New notices today</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Parent Updates</p>
            <p className="mt-2 text-2xl font-semibold text-role-parent">12</p>
            <p className="mt-1 text-xs text-muted-foreground">Unread communications</p>
          </article>
        </section>

        <section className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Theme and Token Architecture Enabled</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <p>Semantic color tokens now drive surfaces, text, borders, and interactive states.</p>
            <p>Role colors are constrained to identity accents, not full-page structural color.</p>
            <p>Light and dark maps are configured under root and dark token scopes.</p>
            <p>Next Themes controls class-based switching with persisted user preference.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
