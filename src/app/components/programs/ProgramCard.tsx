"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Program } from "./programs";

type ProgramCardProps = {
    program: Program;
    index: number;
    onSelect: (program: Program) => void;
};

export function ProgramCard({ program, index, onSelect }: ProgramCardProps) {
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);
    const Icon = program.icon;

    /* Staggered entrance via IntersectionObserver */
    React.useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={ref}
            aria-label={`${program.title} — ${program.eyebrow}`}
            style={{
                transitionDelay: `${index * 110}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(20px)",
                transition: "opacity 0.45s ease, transform 0.45s ease",
            }}
            className="group flex flex-col rounded-[var(--radius-2xl)] border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
        >
            {/* ── Card header strip ── */}
            <div
                className="px-6 pt-6 pb-5"
                style={{
                    /* Subtle primary tint — works in both light & dark */
                    background: "color-mix(in oklab, var(--primary) 8%, var(--card))",
                }}
            >
                {/* Eyebrow */}
                <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-primary">
                    {program.eyebrow}
                </p>

                {/* Icon + Title */}
                <div className="flex items-start gap-3">
                    <span
                        className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-lg)] p-2.5 text-primary transition-colors group-hover:text-accent"
                        style={{
                            background: "color-mix(in oklab, var(--primary) 14%, transparent)",
                        }}
                        aria-hidden="true"
                    >
                        <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="text-[1.18rem] font-bold leading-snug text-card-foreground">
                        {program.title}
                    </h3>
                </div>
            </div>

            {/* ── Card body ── */}
            <div className="flex flex-1 flex-col gap-4 px-6 py-5">
                {/* Bold tagline — high contrast */}
                <p className="text-sm font-semibold leading-snug text-foreground">
                    {program.tagline}
                </p>

                {/* Preview description */}
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                </p>

                {/* Bullet preview — first 2 only */}
                <ul className="space-y-1.5" role="list">
                    {program.bullets.slice(0, 2).map((bullet, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                            <span
                                className="mt-[4px] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ background: "var(--secondary)" }}
                                aria-hidden="true"
                            />
                            {bullet}
                        </li>
                    ))}
                </ul>

                {/* Spacer pushes CTA to bottom */}
                <div className="flex-1" />

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* CTA button */}
                <button
                    onClick={() => onSelect(program)}
                    aria-haspopup="dialog"
                    aria-label={`Learn more about ${program.title}`}
                    className="group/btn inline-flex w-full items-center justify-between rounded-[var(--radius-md)] px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    style={{
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                        background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "var(--primary)";
                        el.style.color = "var(--primary-foreground)";
                        el.style.borderColor = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "transparent";
                        el.style.color = "var(--foreground)";
                        el.style.borderColor = "var(--border)";
                    }}
                >
                    Learn More
                    <ArrowRight
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </article>
    );
}