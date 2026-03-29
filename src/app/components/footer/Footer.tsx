"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMPORTANT_LINKS, USEFUL_LINKS, CAMPUSES, FOOTER_META } from "./footer-data";
import { FooterLinkColumn } from "./FooterLinkColumn";
import { FooterCampusCard } from "./FooterCampusCard";

function FooterLogo() {
    return (
        <>
            <Link href="/" aria-label="Bliss International Academy — Home" className="hidden dark:block">
                <Image
                    src="/logo-dark.webp"
                    alt="Bliss International Academy"
                    width={160}
                    height={56}
                    className="h-14 w-auto object-contain"
                    priority
                />
            </Link>
            <Link href="/" aria-label="Bliss International Academy — Home">
                <Image
                    src="/logo.webp"
                    alt="Bliss International Academy"
                    width={160}
                    height={56}
                    className="h-14 w-auto object-contain dark:hidden"
                    priority
                />
            </Link>
        </>
    );
}

export function Footer() {
    return (
        <footer aria-label="Site footer" className="w-full mb-20 md:mb-16 lg:mb-0">

            {/* ── Top accent stripe ── */}
            <div
                className="h-[3px] w-full"
                style={{
                    background: "linear-gradient(to right, #2b5c88, #f5a623 40%, #a3cb3f 70%, #2b5c88)",
                }}
                aria-hidden="true"
            />

            {/* ── Main body — always light ── */}
            <div className="bg-background">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1.5fr]">

                        {/* ── Col 1: Brand ── */}
                        <div className="flex flex-col gap-5">
                            <FooterLogo />

                            <p className="text-sm leading-relaxed text-[#4a6880] dark:text-card-foreground max-w-xs">
                                {FOOTER_META.tagline}
                            </p>

                            {/* Cambridge registration badge */}
                            <div className="inline-flex items-center gap-2 self-start rounded-[var(--radius-lg)] border border-[#d7e1ea] bg-white px-3 py-2 shadow-sm">
                                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#f5a623]">
                                    Cambridge
                                </span>
                                <span className="h-3.5 w-px bg-[#d7e1ea]" aria-hidden="true" />
                                <span className="text-[0.62rem] font-semibold text-[#4a6880]">
                                    Reg No:&nbsp;{FOOTER_META.cambridgeRegNo}
                                </span>
                            </div>

                            {/* Decorative dots pattern */}
                            <div
                                className="mt-1 grid w-20 gap-1.5"
                                style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
                                aria-hidden="true"
                            >
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-1 w-1 rounded-full"
                                        style={{
                                            background: i % 3 === 0 ? "#f5a623" : "#d7e1ea",
                                            opacity: 0.6 + (i % 3) * 0.15,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ── Col 2: Important Links ── */}
                        <FooterLinkColumn group={IMPORTANT_LINKS} />

                        {/* ── Col 3: Useful Links ── */}
                        <FooterLinkColumn group={USEFUL_LINKS} />

                        {/* ── Col 4: Campuses ── */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#1a3a55] dark:text-card-foreground">
                                Our Campuses
                            </h3>
                            <div className="h-0.5 w-8 rounded-full bg-[#f5a623]" aria-hidden="true" />
                            <div className="flex flex-col gap-3">
                                {CAMPUSES.map((campus) => (
                                    <FooterCampusCard key={campus.name} campus={campus} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Mid divider ── */}
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="h-px w-full bg-[#d7e1ea]" aria-hidden="true" />
                </div>

                {/* ── Secondary info bar ── */}
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs text-[#7a93a8]">
                            Bliss International Academy · Satkhira, Bangladesh
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/privacy" className="text-xs text-[#7a93a8] hover:text-[#2b5c88] transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <span className="h-3 w-px bg-[#d7e1ea]" aria-hidden="true" />
                            <Link href="/terms" className="text-xs text-[#7a93a8] hover:text-[#2b5c88] transition-colors duration-200">
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}