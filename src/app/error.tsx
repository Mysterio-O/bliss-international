"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Home, RefreshCw, ArrowLeft, AlertTriangle } from "lucide-react";

/* ── Geometric background — mirrors 404 style ── */
function GeometricBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Large destructive-tinted circle — top left */}
            <div
                className="absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-[0.06]"
                style={{ background: "var(--destructive)" }}
            />
            {/* Primary circle — bottom right */}
            <div
                className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full opacity-[0.06]"
                style={{ background: "var(--primary)" }}
            />
            {/* Accent circle — mid right */}
            <div
                className="absolute top-1/2 -right-16 h-48 w-48 rounded-full opacity-[0.05]"
                style={{ background: "var(--accent)" }}
            />

            {/* Dot grid */}
            <svg
                className="absolute inset-0 h-full w-full opacity-[0.03]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="dot-grid-error" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="1.5" fill="var(--destructive)" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-grid-error)" />
            </svg>

            {/* Diagonal lines — bottom left */}
            <svg
                className="absolute bottom-0 left-0 h-64 w-64 opacity-[0.04]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {[0, 20, 40, 60, 80, 100, 120].map((offset) => (
                    <line
                        key={offset}
                        x1="0"
                        y1={offset}
                        x2={200 - offset}
                        y2={200}
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                    />
                ))}
            </svg>
        </div>
    );
}

/* ── Animated error illustration ── */
function ErrorIllustration() {
    return (
        <div className="relative flex items-center justify-center select-none">
            {/* Giant "500" outline backdrop */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
            >
                <span
                    className="block text-[9rem] sm:text-[13rem] lg:text-[16rem] font-black leading-none tracking-tighter select-none"
                    style={{
                        color: "transparent",
                        WebkitTextStroke: "2px",
                        WebkitTextStrokeColor: "color-mix(in oklab, var(--destructive) 18%, transparent)",
                        letterSpacing: "-0.04em",
                    }}
                >
                    500
                </span>

                {/* Warning icon — floats in center */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {/* Outer glow ring */}
                    <motion.div
                        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.15, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute h-28 w-28 sm:h-36 sm:w-36 rounded-full"
                        style={{
                            background: "var(--destructive)",
                        }}
                    />

                    <div
                        className="relative flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-[var(--radius-2xl)] shadow-xl"
                        style={{
                            background: "var(--destructive)",
                            boxShadow: "0 20px 60px color-mix(in oklab, var(--destructive) 35%, transparent)",
                        }}
                    >
                        {/* Warning triangle SVG */}
                        <svg
                            viewBox="0 0 64 64"
                            className="h-12 w-12 sm:h-16 sm:w-16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                d="M32 10 L56 52 H8 Z"
                                stroke="rgba(255,255,255,0.9)"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                                fill="rgba(255,255,255,0.12)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                            />
                            <motion.line
                                x1="32" y1="26" x2="32" y2="40"
                                stroke="rgba(255,255,255,0.95)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.3, delay: 1.1 }}
                            />
                            <motion.circle
                                cx="32" cy="46" r="2"
                                fill="rgba(255,255,255,0.95)"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: 1.3 }}
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* Floating accent dot — top right */}
                <motion.div
                    animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 right-10 sm:right-20 h-4 w-4 rounded-full"
                    style={{ background: "var(--accent)" }}
                />
                {/* Floating primary dot — bottom left */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-6 left-10 sm:left-20 h-3 w-3 rounded-full"
                    style={{ background: "var(--primary)" }}
                />
            </motion.div>
        </div>
    );
}

/* ── Error detail box ── */
function ErrorDetail({ error }: { error?: Error }) {
    const [expanded, setExpanded] = React.useState(false);

    if (!error?.message) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.85 }}
            className="mt-6 w-full max-w-md"
        >
            <button
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none"
                style={{ color: "var(--muted-foreground)" }}
                onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "var(--muted-foreground)")
                }
            >
                <AlertTriangle className="h-3.5 w-3.5" />
                {expanded ? "Hide" : "Show"} error details
                <svg
                    viewBox="0 0 16 16"
                    className={`h-3 w-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {expanded && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 overflow-hidden rounded-[var(--radius-lg)] border px-4 py-3 text-left"
                    style={{
                        background: "color-mix(in oklab, var(--destructive) 5%, var(--card))",
                        borderColor: "color-mix(in oklab, var(--destructive) 20%, var(--border))",
                    }}
                >
                    <p className="font-mono text-[0.7rem] leading-relaxed break-all"
                        style={{ color: "var(--destructive)" }}>
                        {error.message}
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
}

/* ── Main error page ── */
export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
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
                    transition={{ duration: 0.45, delay: 0.1 }}
                >
                    <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest mb-6"
                        style={{
                            background: "color-mix(in oklab, var(--destructive) 10%, var(--background))",
                            color: "var(--destructive)",
                        }}
                    >
                        <span
                            className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
                            style={{ background: "var(--destructive)" }}
                        />
                        Server Error
                    </span>
                </motion.div>

                {/* Illustration */}
                <ErrorIllustration />

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
                    className="mt-6 text-2xl sm:text-3xl font-bold leading-snug"
                    style={{ color: "var(--foreground)" }}
                >
                    Something went wrong on our end.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.48, ease: "easeOut" }}
                    className="mt-3 text-sm sm:text-base leading-relaxed max-w-md"
                    style={{ color: "var(--muted-foreground)" }}
                >
                    An unexpected error occurred while loading this page. This has been
                    noted. Please try again or return home.
                </motion.p>

                {/* Accent divider */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.56 }}
                    className="mt-6 h-0.5 w-16 rounded-full origin-left"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                />

                {/* Error detail (collapsible) */}
                <ErrorDetail error={error} />

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                    className="mt-8 flex flex-col sm:flex-row items-center gap-3"
                >
                    {/* Try again — primary action */}
                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 rounded-[var(--radius-md)] px-6 py-3 text-sm font-semibold shadow-md transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        style={{
                            background: "var(--destructive)",
                            color: "#ffffff",
                            boxShadow: "0 4px 20px color-mix(in oklab, var(--destructive) 30%, transparent)",
                        }}
                    >
                        <RefreshCw className="h-4 w-4" aria-hidden="true" />
                        Try Again
                    </button>

                    {/* Go back */}
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        style={{
                            borderColor: "var(--border)",
                            color: "var(--foreground)",
                            background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "var(--muted)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }}
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        Go Back
                    </button>

                    {/* Home */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        style={{
                            borderColor: "var(--border)",
                            color: "var(--foreground)",
                            background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.background = "var(--muted)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.background = "transparent";
                        }}
                    >
                        <Home className="h-4 w-4" aria-hidden="true" />
                        Home
                    </Link>
                </motion.div>

                {/* Digest / reference ID */}
                {error?.digest && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        className="mt-6 font-mono text-[0.65rem]"
                        style={{ color: "color-mix(in oklab, var(--muted-foreground) 55%, transparent)" }}
                    >
                        Error ID: {error.digest}
                    </motion.p>
                )}

                {/* Footer label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="mt-12 text-xs"
                    style={{ color: "color-mix(in oklab, var(--muted-foreground) 55%, transparent)" }}
                >
                    Bliss International Academy · Satkhira, Bangladesh
                </motion.p>
            </div>
        </main>
    );
}