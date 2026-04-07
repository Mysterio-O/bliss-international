"use client";

import { useState } from "react";
import { campusActivities } from "./constants";

export default function ActivitiesPageClient() {
    const [activeCampusId, setActiveCampusId] = useState(campusActivities[0].id);
    const activeCampus = campusActivities.find((c) => c.id === activeCampusId)!;

    const categories = Array.from(
        new Set(activeCampus.activities.map((a) => a.category))
    );

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        Student Activities
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Explore our vibrant campus life and student events
                    </p>
                </div>

                {/* Campus Tabs */}
                <div className="mb-10 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {campusActivities.map((campus) => (
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

                {/* Category Pills */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <span
                            key={category}
                            className="px-4 py-1.5 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground border border-secondary/40"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Activities Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {activeCampus.activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            {/* Activity Header */}
                            <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-4">
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-primary-foreground mb-2">
                                    {activity.category}
                                </span>
                                <h3 className="text-lg font-semibold text-primary-foreground">
                                    {activity.title}
                                </h3>
                            </div>

                            {/* Activity Body */}
                            <div className="p-5 space-y-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CalendarIcon />
                                    <span>{activity.date}</span>
                                </div>

                                <p className="text-sm text-foreground/80 leading-relaxed">
                                    {activity.description}
                                </p>

                                {activity.participants && (
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                                        <UsersIcon />
                                        <span>{activity.participants} participants</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
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
        <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
    );
}
