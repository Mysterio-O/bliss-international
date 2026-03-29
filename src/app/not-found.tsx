"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft, BookOpen, Search } from "lucide-react";

/* ── Quick links to help the user navigate ── */
const QUICK_LINKS = [
    { label: "Home", href: "/", icon: Home },
    { label: "Admission", href: "/admission", icon: BookOpen },
    { label: "Contact Us", href: "/contact", icon: Search },
];

/* ── Floating geometric shapes — decorative background ── */
function GeometricBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Large primary circle — top right */}
            <div
                className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-[0.07]"
                style={{ background: "var(--primary)" }}
            />
            {/* Medium accent circle — bottom left */}
            <div
                className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-[0.08]"
                style={{ background: "var(--accent)" }}
            />
            {/* Small secondary circle — mid left */}
            <div
                className="absolute top-1/3 -left-12 h-40 w-40 rounded-full opacity-[0.06]"
                style={{ background: "var(--secondary)" }}
            />

            {/* Grid dot pattern */}
            <svg
                className="absolute inset-0 h-full w-full opacity-[0.035]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="var(--primary)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid)" />
            </svg>

            {/* Diagonal accent lines */}
            <svg
                className="absolute top-0 right-0 h-64 w-64 opacity-[0.05]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {[0, 20, 40, 60, 80, 100, 120].map((offset) => (
                    <line
                        key={offset}
                        x1={offset}
                        y1="0"
                        x2={200}
                        y2={200 - offset}
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                    />
                ))}
            </svg>
        </div>
    );
}

/* ── Animated 404 illustration ── */
function Illustration() {
    return (
        <div className="relative flex items-center justify-center select-none">
            {/* Giant 404 text — the backdrop */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
            >
                <span
                    className="block text-[9rem] sm:text-[13rem] lg:text-[16rem] font-black leading-none tracking-tighter select-none"
                    style={{
                        color: "transparent",
                        WebkitTextStroke: "2px",
                        WebkitTextStrokeColor: "color-mix(in oklab, var(--primary) 15%, transparent)",
                        letterSpacing: "-0.04em",
                    }}
                >
                    404
                </span>

                {/* Floating book icon — center of 0 */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className="flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-[var(--radius-2xl)] shadow-xl"
                        style={{
                            background: "var(--primary)",
                            boxShadow: "0 20px 60px color-mix(in oklab, var(--primary) 35%, transparent)",
                        }}
                    >
                        {/* Open book SVG */}
                        <svg
                            viewBox="0 0 64 64"
                            className="h-12 w-12 sm:h-16 sm:w-16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M32 14 C24 10 12 12 8 16 L8 52 C12 48 24 46 32 50 C40 46 52 48 56 52 L56 16 C52 12 40 10 32 14Z"
                                fill="color-mix(in oklab, var(--primary-foreground) 15%, transparent)"
                                stroke="var(--primary-foreground)"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <line
                                x1="32" y1="14" x2="32" y2="50"
                                stroke="var(--primary-foreground)"
                                strokeWidth="2"
                            />
                            <path d="M14 22 C18 21 24 21 28 23" stroke="var(--primary-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                            <path d="M14 29 C18 28 24 28 28 30" stroke="var(--primary-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                            <path d="M14 36 C18 35 24 35 28 37" stroke="var(--primary-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                            <path d="M36 23 C40 21 46 21 50 22" stroke="var(--primary-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                            <path d="M36 30 C40 28 46 28 50 29" stroke="var(--primary-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                            <path d="M36 37 C40 35 46 35 50 36" stroke="var(--primary-foreground)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                        </svg>
                    </div>
                </motion.div>

                {/* Accent dot — top right of 404 */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 right-8 sm:right-16 h-5 w-5 rounded-full"
                    style={{ background: "var(--accent)" }}
                />
                {/* Secondary dot — bottom left */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute bottom-4 left-8 sm:left-16 h-3.5 w-3.5 rounded-full"
                    style={{ background: "var(--secondary)" }}
                />
            </motion.div>
        </div>
    );
}

/* ── Main 404 page ── */
export default function NotFound() {
    return (
        <main
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6"
            style={{ background: "var(--background)" }}
        >
            <GeometricBackground />

            <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">

                {/* Eyebrow pill */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span
                        className="inline-block rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest mb-6"
                        style={{
                            background: "color-mix(in oklab, var(--primary) 10%, var(--background))",
                            color: "var(--primary)",
                        }}
                    >
                        Page Not Found
                    </span>
                </motion.div>

                {/* Illustration */}
                <Illustration />

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
                    className="mt-6 text-2xl sm:text-3xl font-bold leading-snug"
                    style={{ color: "var(--foreground)" }}
                >
                    Oops! This page took a wrong turn.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                    className="mt-3 text-sm sm:text-base leading-relaxed max-w-md"
                    style={{ color: "var(--muted-foreground)" }}
                >
                    The page you&nbsp;re looking for doesn&nbsp;t exist or may have been moved.
                    Let&nbsp;s get you back on the right path.
                </motion.p>

                {/* Accent divider */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="mt-6 h-0.5 w-16 rounded-full origin-left"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                />

                {/* Primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                    className="mt-8 flex flex-col sm:flex-row items-center gap-3"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-[var(--radius-md)] px-6 py-3 text-sm font-semibold shadow-md transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        style={{
                            background: "var(--primary)",
                            color: "var(--primary-foreground)",
                            boxShadow: "0 4px 20px color-mix(in oklab, var(--primary) 30%, transparent)",
                        }}
                    >
                        <Home className="h-4 w-4" aria-hidden="true" />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        style={{
                            borderColor: "var(--border)",
                            color: "var(--foreground)",
                            background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "var(--muted)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "transparent";
                        }}
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        Go Back
                    </button>
                </motion.div>

                {/* Quick links */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.72, ease: "easeOut" }}
                    className="mt-12"
                >
                    <p
                        className="mb-4 text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--muted-foreground)" }}
                    >
                        Or explore these pages
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {QUICK_LINKS.map(({ label, href, icon: Icon }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.35, delay: 0.78 + i * 0.08 }}
                            >
                                <Link
                                    href={href}
                                    className="inline-flex items-center gap-2 rounded-[var(--radius-xl)] border px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    style={{
                                        borderColor: "var(--border)",
                                        background: "var(--card)",
                                        color: "var(--foreground)",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.borderColor = "var(--primary)";
                                        el.style.color = "var(--primary)";
                                        el.style.background = "color-mix(in oklab, var(--primary) 6%, var(--card))";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.borderColor = "var(--border)";
                                        el.style.color = "var(--foreground)";
                                        el.style.background = "var(--card)";
                                    }}
                                >
                                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom school name */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-14 text-xs"
                    style={{ color: "color-mix(in oklab, var(--muted-foreground) 60%, transparent)" }}
                >
                    Bliss International Academy · Satkhira, Bangladesh
                </motion.p>
            </div>
        </main>
    );
}