"use client";

import { useState } from "react";
import { campusPublications } from "./constants";

export default function PublicationsPageClient() {
    const [activeCampusId, setActiveCampusId] = useState(campusPublications[0].id);
    const activeCampus = campusPublications.find((c) => c.id === activeCampusId)!;

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        BIA Publications
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Explore magazines, journals, and newsletters from our campuses
                    </p>
                </div>

                {/* Campus Tabs */}
                <div className="mb-10 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {campusPublications.map((campus) => (
                            <button
                                key={campus.id}
                                onClick={() => setActiveCampusId(campus.id)}
                                className={`relative rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                                    activeCampusId === campus.id
                                        ? "bg-primary text-primary-foreground shadow-[0_2px_12px_rgba(43,92,136,0.35)] dark:shadow-[0_2px_12px_rgba(94,143,188,0.4)]"
                                        : "text-foreground/70 hover:bg-white/50 hover:text-foreground dark:hover:bg-white/8"
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <LocationPinIcon />
                                    {campus.name}
                                </span>
                                {activeCampusId === campus.id && (
                                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Publications Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {activeCampus.publications.map((publication) => (
                        <div
                            key={publication.id}
                            className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.01]"
                        >
                            <div className="p-6 space-y-4">
                                {/* Publication Header */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground mb-1">
                                            {publication.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {publication.issue}
                                        </p>
                                    </div>
                                    <BookIcon />
                                </div>

                                {/* Publication Date */}
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarIcon />
                                    <span>{publication.publishDate}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                    {publication.description}
                                </p>

                                {/* Editors */}
                                {publication.editors && publication.editors.length > 0 && (
                                    <div className="pt-3 border-t border-border">
                                        <p className="text-xs text-muted-foreground mb-2">
                                            Edited by:
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {publication.editors.map((editor, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 rounded-md text-xs bg-muted text-muted-foreground"
                                                >
                                                    {editor}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Action Button */}
                                <button className="w-full mt-4 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                    <DownloadIcon />
                                    View Publication
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Note */}
                <div className="mt-10 p-4 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground text-center">
                        <span className="font-medium text-foreground">Note:</span> Digital copies of
                        all publications are available for download. For physical copies, please
                        contact the respective campus office.
                    </p>
                </div>
            </div>
        </div>
    );
}

function LocationPinIcon() {
    return (
        <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M8 1.5A4.5 4.5 0 003.5 6c0 2.414 2.066 4.838 3.71 6.393a1.1 1.1 0 001.58 0C10.434 10.838 12.5 8.414 12.5 6A4.5 4.5 0 008 1.5zM1.5 6a6.5 6.5 0 1113 0c0 3.098-2.4 5.849-4.071 7.432a3.1 3.1 0 01-4.458 0C4.3 11.849 1.5 9.098 1.5 6zm6.5-.5a1 1 0 100 2 1 1 0 000-2zM5.5 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    );
}

function BookIcon() {
    return (
        <svg
            className="size-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
        </svg>
    );
}

function DownloadIcon() {
    return (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
        </svg>
    );
}
