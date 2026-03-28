import Header from "@/app/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="bg-[radial-gradient(circle_at_20%_20%,var(--primary),transparent_40%),radial-gradient(circle_at_80%_20%,var(--secondary),transparent_45%),radial-gradient(circle_at_40%_80%,var(--accent),transparent_48%)] p-6 sm:p-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/80">
              Mobile-first visitor experience
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
              Excellence in knowledge and ethics, now in one digital campus.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/85 sm:text-base">
              Theme A and role-aware visual tokens are active. Use the theme control to test light, dark,
              and system modes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Apply Now</Button>
              <Button variant="outline" className="border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                Portal Entry
              </Button>
            </div>
          </div>
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
