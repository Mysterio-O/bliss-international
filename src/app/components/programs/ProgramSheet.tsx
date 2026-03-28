"use client";

import * as React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Program } from "./programs";

type ProgramSheetProps = {
    program: Program | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function ProgramSheet({ program, open, onOpenChange }: ProgramSheetProps) {
    const { isMobile } = useIsMobile();
    const side = isMobile ? "bottom" : "top";

    if (!program) return null;

    const Icon = program.icon;

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                side={side}
                className={[
                    // sizing & scroll
                    "overflow-y-auto",
                    isMobile ? "max-h-[88vh] rounded-t-[var(--radius-3xl)]" : "max-h-[80vh] rounded-b-[var(--radius-3xl)]",
                    // surface — matches card token from global.css
                    "bg-card text-card-foreground",
                    // border
                    "border-border",
                    // padding
                    "px-5 py-6 sm:px-8 sm:py-8",
                ].join(" ")}
            >
                <SheetHeader className="text-left space-y-0">
                    {/* Eyebrow — uses --primary */}
                    <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
                        {program.eyebrow}
                    </p>

                    {/* Icon + Title row */}
                    <div className="flex items-center gap-3 mb-3">
                        {/* Icon chip — primary/10 bg in both modes via opacity */}
                        <span
                            className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-xl)] p-2.5 text-primary"
                            style={{ background: "color-mix(in oklab, var(--primary) 12%, transparent)" }}
                            aria-hidden="true"
                        >
                            <Icon className="h-6 w-6" />
                        </span>

                        <SheetTitle className="text-2xl font-bold leading-tight text-card-foreground">
                            {program.title}
                        </SheetTitle>
                    </div>

                    {/* Tagline — slightly muted, still foreground */}
                    <SheetDescription
                        asChild
                        className="text-base font-semibold leading-snug text-foreground"
                    >
                        <p>{program.tagline}</p>
                    </SheetDescription>
                </SheetHeader>

                {/* Divider */}
                <div className="my-5 h-px bg-border" />

                {/* Body */}
                <div className="space-y-5">
                    {/* Full description */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {program.description}
                    </p>

                    {/* Bullet highlights */}
                    {program.bullets.length > 0 && (
                        <div>
                            <h4 className="mb-3 text-sm font-semibold text-card-foreground">
                                Key Highlights
                            </h4>
                            <ul className="space-y-2.5" role="list">
                                {program.bullets.map((bullet, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-sm text-muted-foreground"
                                    >
                                        {/* Bullet dot — accent color */}
                                        <span
                                            className="mt-[5px] h-2 w-2 shrink-0 rounded-full"
                                            style={{ background: "var(--accent)" }}
                                            aria-hidden="true"
                                        />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="pt-1 flex gap-3">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            style={{
                                background: "var(--primary)",
                                color: "var(--primary-foreground)",
                            }}
                        >
                            Contact Us
                        </a>
                        <button
                            onClick={() => onOpenChange(false)}
                            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}