"use client";

import * as React from "react";
import { ProgramCard } from "./ProgramCard";
import { ProgramSheet } from "./ProgramSheet";
import { Program, PROGRAMS } from "./programs";

export function ProgramsSection() {
    const [selectedProgram, setSelectedProgram] = React.useState<Program | null>(null);
    const [sheetOpen, setSheetOpen] = React.useState(false);

    function handleSelect(program: Program) {
        setSelectedProgram(program);
        setSheetOpen(true);
    }

    function handleSheetOpenChange(open: boolean) {
        setSheetOpen(open);
        if (!open) {
            // Delay clear so sheet exit animation finishes before content disappears
            setTimeout(() => setSelectedProgram(null), 300);
        }
    }

    return (
        <section
            aria-labelledby="programs-heading"
            className="w-full py-14 md:py-20"
            style={{ background: "var(--background)" }}
        >
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* ── Section heading ── */}
                <div className="mb-10 text-center">
                    {/* Eyebrow */}
                    <p
                        className="mb-2 inline-block rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest"
                        style={{
                            background: "color-mix(in oklab, var(--primary) 10%, var(--background))",
                            color: "var(--primary)",
                        }}
                    >
                        What We Offer
                    </p>

                    {/* Heading */}
                    <h2
                        id="programs-heading"
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                        style={{ color: "var(--foreground)" }}
                    >
                        Our Academic Programs
                    </h2>

                    {/* Underline accent bar */}
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
                        Holistic education that nurtures intellect, character, and faith —
                        preparing every student for a purposeful future.
                    </p>
                </div>

                {/* ── Card grid ──
            1 col on mobile → 3 cols on md+ (matches rest of site) */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    {PROGRAMS.map((program, index) => (
                        <ProgramCard
                            key={program.id}
                            program={program}
                            index={index}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>
            </div>

            {/* ── Detail sheet ── */}
            <ProgramSheet
                program={selectedProgram}
                open={sheetOpen}
                onOpenChange={handleSheetOpenChange}
            />
        </section>
    );
}