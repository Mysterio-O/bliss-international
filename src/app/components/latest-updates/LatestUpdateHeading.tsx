'use client'
import React from 'react'
import { motion, useInView } from 'motion/react';

export default function LatestUpdateHeading() {


    const headingRef = React.useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

    return (
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
                Stay updated every time
            </p>

            {/* Heading */}
            <h2
                id="our latest updates-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--foreground)" }}
            >
                Our Latest Updates
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
                Stay informed about the latest news, events, and updates from our school community.
            </p>
        </motion.div>
    )
}
