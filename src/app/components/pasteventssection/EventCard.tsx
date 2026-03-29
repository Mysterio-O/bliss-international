import { ArrowRight, Calendar } from "lucide-react";
import React from "react";
import { IEvent } from "./events";

export function EventCard({
    event,
    index,
    onSelect,
}: {
    event: IEvent;
    index: number;
    onSelect: (event: IEvent) => void;
}) {
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

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
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={ref}
            aria-label={event.title}
            style={{
                transitionDelay: `${index * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(24px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
            className="group flex flex-col rounded-[var(--radius-2xl)] border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
            {/* ── Image container ── */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, color-mix(in oklab, var(--card) 70%, transparent) 0%, transparent 55%)",
                    }}
                />

                {/* Date badge — top right */}
                <div
                    className="absolute top-4 right-4 flex flex-col items-center justify-center rounded-[var(--radius-xl)] px-3 py-2 min-w-[52px] shadow-md"
                    style={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                    }}
                >
                    <span
                        className="text-xl font-bold leading-none"
                        style={{ color: "var(--primary)" }}
                    >
                        {event.dateDay}
                    </span>
                    <span
                        className="text-[0.6rem] font-semibold uppercase tracking-widest mt-0.5"
                        style={{ color: "var(--accent)" }}
                    >
                        {event.dateMonth}
                    </span>
                </div>

                {/* Eyebrow pill — bottom left over image */}
                <div className="absolute bottom-3 left-4">
                    <span
                        className="inline-block rounded-full px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em]"
                        style={{
                            background: "color-mix(in oklab, var(--primary) 90%, transparent)",
                            color: "var(--primary-foreground)",
                        }}
                    >
                        {event.eyebrow}
                    </span>
                </div>
            </div>

            {/* ── Card body ── */}
            <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                {/* Date line */}
                <div className="flex items-center gap-1.5">
                    <Calendar
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: "var(--muted-foreground)" }}
                    />
                    <span
                        className="text-xs font-medium"
                        style={{ color: "var(--muted-foreground)" }}
                    >
                        {event.date}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className="text-[1.15rem] font-bold leading-snug"
                    style={{ color: "var(--card-foreground)" }}
                >
                    {event.title}
                </h3>

                {/* Tagline */}
                <p
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "var(--foreground)" }}
                >
                    {event.tagline}
                </p>

                {/* Description preview */}
                <p
                    className="line-clamp-2 text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                >
                    {event.description[0]}
                </p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Divider */}
                <div className="h-px" style={{ background: "var(--border)" }} />

                {/* CTA */}
                <button
                    onClick={() => onSelect(event)}
                    aria-haspopup="dialog"
                    aria-label={`Read more about ${event.title}`}
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
                    Read More
                    <ArrowRight
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        aria-hidden="true"
                    />
                </button>
            </div>
        </article>
    );
}