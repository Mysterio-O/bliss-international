"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Testimonial, TAG_COLORS } from "./testimonials";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    fill={i < rating ? "var(--accent)" : "none"}
                    stroke={i < rating ? "var(--accent)" : "var(--border)"}
                    strokeWidth="1.5"
                    aria-hidden="true"
                >
                    <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8z" />
                </svg>
            ))}
        </div>
    );
}

function Avatar({ initials }: { initials: string }) {
    return (
        <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold"
            style={{
                background: "color-mix(in oklab, var(--primary) 15%, var(--card))",
                color: "var(--primary)",
                border: "2px solid color-mix(in oklab, var(--primary) 25%, transparent)",
            }}
            aria-hidden="true"
        >
            {initials}
        </div>
    );
}

/* Large opening quote mark — decorative */
function QuoteMark() {
    return (
        <svg
            viewBox="0 0 40 32"
            className="h-8 w-8 shrink-0"
            fill="color-mix(in oklab, var(--primary) 18%, transparent)"
            aria-hidden="true"
        >
            <path d="M0 32V19.2C0 8.533 5.867 2.4 17.6 0l2.133 3.733C13.6 5.333 10.4 8.533 9.6 13.6H16V32H0zm22.4 0V19.2C22.4 8.533 28.267 2.4 40 0l2.133 3.733C36 5.333 32.8 8.533 32 13.6H38.4V32H22.4z" />
        </svg>
    );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    const tagColor = TAG_COLORS[testimonial.tag];

    return (
        <div
            className="flex h-full flex-col rounded-[var(--radius-2xl)] border border-border bg-card p-5 shadow-sm"
            style={{ minHeight: "220px" }}
        >
            {/* Top row: quote mark + tag */}
            <div className="flex items-start justify-between mb-3">
                <QuoteMark />
                <span
                    className="rounded-full px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em]"
                    style={{ background: tagColor.bg, color: tagColor.text }}
                >
                    {testimonial.tag}
                </span>
            </div>

            {/* Quote text */}
            <p
                className="flex-1 text-sm leading-relaxed mb-4"
                style={{ color: "var(--muted-foreground)" }}
            >
                {testimonial.quote}
            </p>

            {/* Divider */}
            <div className="h-px mb-4" style={{ background: "var(--border)" }} />

            {/* Footer: avatar + name + stars */}
            <div className="flex items-center gap-3">
                <Avatar initials={testimonial.avatar} />
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate" style={{ color: "var(--card-foreground)" }}>
                        {testimonial.name}
                    </p>
                    <p className="text-xs truncate mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                        {testimonial.role}
                    </p>
                </div>
                <StarRating rating={testimonial.rating} />
            </div>
        </div>
    );
}