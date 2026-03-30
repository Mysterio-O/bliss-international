"use client";

import * as React from "react";
import { EVENTS, IEvent } from "./events";
import { EventCard } from "./EventCard";
import { EventSheet } from "./EventSheet";

export function PastEventsSection() {
    const [selectedEvent, setSelectedEvent] = React.useState<IEvent | null>(null);
    const [sheetOpen, setSheetOpen] = React.useState(false);

    function handleSelect(event: IEvent) {
        setSelectedEvent(event);
        setSheetOpen(true);
    }

    function handleSheetOpenChange(open: boolean) {
        setSheetOpen(open);
        if (!open) {
            setTimeout(() => setSelectedEvent(null), 300);
        }
    }

    return (
        <section
            aria-labelledby="past-events-heading"
            className="w-full"
            style={{ background: "var(--background)" }}
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* ── Section heading ── */}
                <div className="mb-10 text-center">
                    {/* Eyebrow pill */}
                    <p
                        className="mb-2 inline-block rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest"
                        style={{
                            background: "color-mix(in oklab, var(--primary) 10%, var(--background))",
                            color: "var(--primary)",
                        }}
                    >
                        Community Moments
                    </p>

                    {/* Heading */}
                    <h2
                        id="past-events-heading"
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                        style={{ color: "var(--foreground)" }}
                    >
                        Past Events
                    </h2>

                    {/* Accent underline */}
                    <div
                        className="mx-auto mt-3 h-1 w-14 rounded-full"
                        style={{ background: "var(--accent)" }}
                        aria-hidden="true"
                    />

                    {/* Sub-description */}
                    <p
                        className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                    >
                        Reliving the memorable milestones, celebrations, and cultural events
                        that reflect our commitment to holistic, values-driven education.
                    </p>
                </div>

                {/* ── Card grid ── */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    {EVENTS.map((event, index) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            index={index}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>
            </div>

            {/* ── Detail sheet ── */}
            <EventSheet
                event={selectedEvent}
                open={sheetOpen}
                onOpenChange={handleSheetOpenChange}
            />
        </section>
    );
}