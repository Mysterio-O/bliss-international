"use client";

import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Testimonial } from "./testimonials";

interface MarqueeTrackProps {
    testimonials: Testimonial[];
    direction?: "left" | "right";
    speed?: number; // seconds for one full loop
    pauseOnHover?: boolean;
}

export function MarqueeTrack({
    testimonials,
    direction = "left",
    speed = 38,
    pauseOnHover = true,
}: MarqueeTrackProps) {
    // Duplicate items so the loop is seamless
    const items = [...testimonials, ...testimonials];

    return (
        <div
            className="relative overflow-hidden"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
            <div
                className="flex gap-4 w-max"
                style={{
                    animation: `marquee-${direction} ${speed}s linear infinite`,
                    ...(pauseOnHover ? {} : {}),
                }}
                onMouseEnter={(e) => {
                    if (pauseOnHover) {
                        (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
                    }
                }}
                onMouseLeave={(e) => {
                    if (pauseOnHover) {
                        (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
                    }
                }}
            >
                {items.map((testimonial, i) => (
                    <div
                        key={`${testimonial.id}-${i}`}
                        className="w-[320px] sm:w-[360px] shrink-0"
                    >
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
            </div>
        </div>
    );
}