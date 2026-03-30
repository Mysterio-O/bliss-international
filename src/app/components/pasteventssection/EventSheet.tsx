import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { IEvent } from "./events";
import { Calendar } from "lucide-react";

export function EventSheet({
    event,
    open,
    onOpenChange,
}: {
    event: IEvent | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const { isMobile } = useIsMobile();
    const side = isMobile ? "bottom" : "top";

    if (!event) return null;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side={side}
                className={[
                    "overflow-y-auto p-0",
                    isMobile
                        ? "max-h-[90vh] rounded-t-[var(--radius-3xl)]"
                        : "max-h-[82vh] rounded-b-[var(--radius-3xl)]",
                    "bg-card text-card-foreground border-border",
                ].join(" ")}
            >
                {/* ── Hero image strip ── */}
                <div className="relative h-52 sm:h-64 w-full overflow-hidden shrink-0">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Dark gradient for text legibility */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, color-mix(in oklab, var(--card) 85%, transparent) 0%, transparent 60%)",
                        }}
                    />

                    {/* Date badge */}
                    <div
                        className="absolute top-5 left-6 flex flex-col items-center justify-center rounded-[var(--radius-xl)] px-3 py-2 min-w-[54px] shadow-lg"
                        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                    >
                        <span className="text-xl font-bold leading-none" style={{ color: "var(--primary)" }}>
                            {event.dateDay}
                        </span>
                        <span className="text-[0.6rem] font-semibold uppercase tracking-widest mt-0.5" style={{ color: "var(--accent)" }}>
                            {event.dateMonth}
                        </span>
                    </div>
                </div>

                {/* ── Content ── */}
                <div className="px-6 py-6 sm:px-8 sm:py-7">
                    <SheetHeader className="text-left space-y-0 mb-5">
                        {/* Eyebrow */}
                        <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--primary)" }}>
                            {event.eyebrow}
                        </p>

                        {/* Title */}
                        <SheetTitle className="text-2xl sm:text-3xl font-bold leading-tight" style={{ color: "var(--card-foreground)" }}>
                            {event.title}
                        </SheetTitle>

                        {/* Date */}
                        <div className="flex items-center gap-1.5 mt-2">
                            <Calendar className="h-3.5 w-3.5" style={{ color: "var(--muted-foreground)" }} />
                            <span className="text-xs font-medium" style={{ color: "var(--muted-foreground)" }}>
                                {event.date}
                            </span>
                        </div>

                        {/* Tagline */}
                        <SheetDescription asChild className="mt-3">
                            <p className="text-base font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                                {event.tagline}
                            </p>
                        </SheetDescription>
                    </SheetHeader>

                    {/* Divider */}
                    <div className="mb-5 h-px" style={{ background: "var(--border)" }} />

                    {/* Description paragraphs */}
                    <div className="space-y-3.5">
                        {event.description.map((para, i) => (
                            <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* CTA row */}
                    <div className="mt-7 flex gap-3">
                        <button
                            onClick={() => onOpenChange(false)}
                            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            style={{
                                borderColor: "var(--border)",
                                color: "var(--foreground)",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}