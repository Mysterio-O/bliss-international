import { ChevronRight, Download, FileText, Home } from "lucide-react";
import Link from "next/link";
import { eventConfig, EventType, months, overviewStats } from "./calendar-data";


export default function AcademicCalendarPage() {
    const totalDays = overviewStats.reduce((s, i) => s + i.days, 0);

    return (
        <>
            {/* ── JSON-LD Structured Data ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: "BLISS International Academy",
                        url: "https://blissinternationalacademy.com",
                        event: months.flatMap((m) =>
                            m.events.map((e) => ({
                                "@type": "Event",
                                name: e.title,
                                startDate: `2026-${String(months.indexOf(m) + 1).padStart(2, "0")}-01`,
                                description: e.type,
                                location: {
                                    "@type": "Place",
                                    name: e.campus
                                        ? `${e.campus} Campus — BLISS International Academy`
                                        : "BLISS International Academy",
                                },
                            }))
                        ),
                    }),
                }}
            />

            <main>
                {/* ── Hero Banner ── */}
                <section
                    className="relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 60%, #1e4a1e 100%)" }}
                    aria-label="Academic Calendar Hero"
                >
                    {/* Dot-grid texture */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                        }}
                    />
                    {/* Glow orbs */}
                    <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--secondary)" }} />
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-10 blur-2xl" style={{ background: "var(--accent)" }} />

                    <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
                            <Link href="/" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                                <Home className="h-3 w-3" />
                                <span>Home</span>
                            </Link>
                            <ChevronRight className="h-3 w-3 text-white/30" aria-hidden="true" />
                            <span className="text-white/75">Academic Calendar</span>
                        </nav>

                        {/* Eyebrow */}
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--secondary)" }}>
                            BLISS International Academy — 2026
                        </p>

                        {/* Heading */}
                        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Academic Calendar
                        </h1>
                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                            A complete overview of the 2026 academic year — major events, examinations, holidays,
                            and cultural observances across both Debhata and Satkhira campuses.
                        </p>

                        {/* Quick stat chips */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {overviewStats.map((s) => (
                                <div
                                    key={s.label}
                                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-sm"
                                >
                                    <span className={`h-1.5 w-1.5 rounded-full ${s.barClass}`} aria-hidden="true" />
                                    <span className="text-xs font-bold text-white">{s.days}</span>
                                    <span className="text-xs text-white/55">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Sub-nav tabs (matching site pattern) ── */}
                <div className="sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur-md">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="flex gap-6 overflow-x-auto text-sm">
                            {["Academic Overview", "Major Events", "Related Docs"].map((tab, i) => (
                                <a
                                    key={tab}
                                    href={`#${["overview", "events", "documents"][i]}`}
                                    className={`shrink-0 border-b-2 py-3.5 font-medium transition-colors ${i === 0
                                            ? "border-primary text-primary"
                                            : "border-transparent text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {tab}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-16">

                    {/* ── Section 1: Academic Overview ── */}
                    <section id="overview" aria-labelledby="overview-heading">
                        {/* Section label */}
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-6 rounded" style={{ background: "var(--primary)" }} aria-hidden="true" />
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Academic Overview
                            </p>
                        </div>
                        <h2 id="overview-heading" className="mb-8 text-2xl font-bold text-foreground sm:text-3xl">
                            Year at a Glance
                        </h2>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {overviewStats.map((stat) => {
                                const pct = Math.round((stat.days / totalDays) * 100);
                                return (
                                    <div
                                        key={stat.label}
                                        className={`rounded-2xl border p-5 ${stat.colorClass}`}
                                    >
                                        <p className="text-4xl font-bold tabular-nums leading-none">
                                            {stat.days}
                                            <span className="ml-1 text-base font-medium opacity-60">days</span>
                                        </p>
                                        <p className="mt-2 text-xs font-medium leading-snug opacity-75">
                                            {stat.label}
                                        </p>
                                        {/* Progress bar */}
                                        <div className="mt-4 space-y-1">
                                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-current/10">
                                                <div
                                                    className={`h-full rounded-full ${stat.barClass} opacity-60`}
                                                    style={{ width: `${pct}%` }}
                                                    role="progressbar"
                                                    aria-valuenow={pct}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    aria-label={`${stat.days} days — ${pct}% of year`}
                                                />
                                            </div>
                                            <p className="text-[10px] font-medium opacity-50">{pct}% of full year</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <hr className="border-border" />

                    {/* ── Section 2: Monthly Events ── */}
                    <section id="events" aria-labelledby="events-heading">
                        {/* Section label */}
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-6 rounded" style={{ background: "var(--primary)" }} aria-hidden="true" />
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Major Events & Observances
                            </p>
                        </div>
                        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <h2 id="events-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
                                Month-wise Schedule
                            </h2>

                            {/* Legend */}
                            <div className="flex flex-wrap gap-2" aria-label="Event type legend">
                                {(Object.entries(eventConfig) as [EventType, typeof eventConfig[EventType]][]).map(
                                    ([type, cfg]) => (
                                        <span
                                            key={type}
                                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${cfg.chip}`}
                                        >
                                            <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} aria-hidden="true" />
                                            {cfg.label}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>

                        {/* 12-month grid */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {months.map((month) => (
                                <article
                                    key={month.name}
                                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                                    aria-label={`${month.name} events`}
                                >
                                    {/* Month header */}
                                    <div className="flex items-center justify-between border-b border-border px-4 py-3" style={{ background: "var(--primary)", }}>
                                        <h3 className="font-semibold text-sm text-primary-foreground">{month.name}</h3>
                                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white/80">
                                            {month.events.length} event{month.events.length !== 1 ? "s" : ""}
                                        </span>
                                    </div>

                                    {/* Events */}
                                    <ul className="divide-y divide-border/50">
                                        {month.events.map((event, i) => {
                                            const cfg = eventConfig[event.type];
                                            return (
                                                <li key={i} className="flex items-start gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                                                    {/* Date */}
                                                    <time className="mt-0.5 shrink-0 rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground min-w-[68px] leading-tight">
                                                        {event.date}
                                                    </time>

                                                    <div className="flex-1 min-w-0 space-y-1.5">
                                                        <p className="text-sm leading-snug text-foreground">
                                                            {event.title}
                                                            {event.campus && (
                                                                <span className="ml-1 text-[10px] text-muted-foreground">
                                                                    ({event.campus})
                                                                </span>
                                                            )}
                                                        </p>
                                                        <span
                                                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${cfg.chip}`}
                                                        >
                                                            <span className={`h-1 w-1 rounded-full ${cfg.dot}`} aria-hidden="true" />
                                                            {cfg.label}
                                                        </span>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>

                    <hr className="border-border" />

                    {/* ── Section 3: Related Documents ── */}
                    <section id="documents" aria-labelledby="documents-heading">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-6 rounded" style={{ background: "var(--primary)" }} aria-hidden="true" />
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Downloads
                            </p>
                        </div>
                        <h2 id="documents-heading" className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                            Related Documents
                        </h2>

                        <div className="max-w-lg">
                            <a
                                href="/documents/1770780903_BIA Satkhira Campus Academic Calendar 2026.pdf"
                                download
                                className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
                                aria-label="Download BIA Satkhira Campus Academic Calendar 2026 PDF"
                            >
                                <span
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                                    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                                    aria-hidden="true"
                                >
                                    <FileText className="h-5 w-5" />
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="truncate font-semibold text-sm text-foreground">
                                        BIA Satkhira Campus Academic Calendar 2026
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">PDF Document</p>
                                </div>
                                <Download
                                    className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </section>

                    {/* ── CTA Banner (matching site pattern) ── */}
                    <section
                        className="rounded-2xl px-8 py-12 text-center"
                        style={{
                            background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)",
                        }}
                        aria-label="Join BLISS International Academy"
                    >
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--secondary)" }}>
                            Ready to Join?
                        </p>
                        <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                            Be Part of the BLISS Family
                        </h2>
                        <p className="mx-auto mb-8 max-w-md text-sm text-white/60 leading-relaxed">
                            Enrol your child and give them access to world-class education rooted in strong values
                            and a nurturing environment.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/admissions"
                                className="rounded-full px-6 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
                                style={{ background: "var(--secondary)", color: "var(--secondary-foreground)" }}
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="/contact"
                                className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </section>

                </div>
            </main>
        </>
    );
}