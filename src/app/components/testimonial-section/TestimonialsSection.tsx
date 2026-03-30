"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { TESTIMONIALS } from "./testimonials";
import { MarqueeTrack } from "./MarqueeTrack";

/* Split into two rows for the dual-direction marquee */
const ROW_ONE = TESTIMONIALS.slice(0, 4);
const ROW_TWO = TESTIMONIALS.slice(4, 8);

/* Stat counter with animated count-up */
function StatItem({
    value,
    label,
    delay,
}: {
    value: string;
    label: string;
    delay: number;
}) {
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
        >
            <span
                className="text-3xl sm:text-4xl font-bold tabular-nums"
                style={{ color: "var(--primary)" }}
            >
                {value}
            </span>
            <span
                className="text-xs font-semibold uppercase tracking-widest text-center"
                style={{ color: "var(--muted-foreground)" }}
            >
                {label}
            </span>
        </motion.div>
    );
}

export function TestimonialsSection() {
    const headingRef = React.useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
        <section
            aria-labelledby="testimonials-heading"
            className="w-full py-14 md:py-20 overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            {/* ── Subtle background decoration ── */}
            <div className="relative">
                {/* Soft radial glow behind heading */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-64 -translate-y-1/2"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--primary) 7%, transparent), transparent)",
                    }}
                    aria-hidden="true"
                />

                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* ── Section heading ── */}
                    <motion.div
                        ref={headingRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="mb-12 text-center"
                    >
                        {/* Eyebrow pill */}
                        <p
                            className="mb-2 inline-block rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest"
                            style={{
                                background:
                                    "color-mix(in oklab, var(--primary) 10%, var(--background))",
                                color: "var(--primary)",
                            }}
                        >
                            Voices of Our Community
                        </p>

                        {/* Heading */}
                        <h2
                            id="testimonials-heading"
                            className="text-3xl font-bold tracking-tight sm:text-4xl"
                            style={{ color: "var(--foreground)" }}
                        >
                            What People Say About Us
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
                            Hear from the parents, students, and alumni whose lives have been
                            shaped by our commitment to values-driven, quality education.
                        </p>
                    </motion.div>

                    {/* ── Stats row ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={headingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                        className="mb-12 mx-auto max-w-2xl"
                    >
                        <div
                            className="grid grid-cols-3 divide-x divide-border rounded-[var(--radius-2xl)] border border-border py-6"
                            style={{
                                background: "color-mix(in oklab, var(--primary) 4%, var(--card))",
                            }}
                        >
                            <StatItem value="500+" label="Happy Families" delay={0.2} />
                            <StatItem value="98%" label="Satisfaction Rate" delay={0.3} />
                            <StatItem value="4+" label="Years of Trust" delay={0.4} />
                        </div>
                    </motion.div>
                </div>

                {/* ── Marquee rows — full width, outside container ── */}
                <div className="space-y-4">
                    {/* Row 1 — left to right */}
                    <MarqueeTrack testimonials={ROW_ONE} direction="left" speed={36} />

                    {/* Row 2 — right to left */}
                    <MarqueeTrack testimonials={ROW_TWO} direction="right" speed={42} />
                </div>

                {/* ── Bottom note ── */}
                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10 text-center">
                    <p
                        className="text-xs"
                        style={{ color: "var(--muted-foreground)" }}
                    >
                        Testimonials from parents, students, and alumni of Bliss International Academy
                    </p>
                </div>
            </div>
        </section>
    );
}