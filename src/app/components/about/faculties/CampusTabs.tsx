"use client";

import { useState } from "react";
import { campuses } from "./constants";
import { FacultyGroup } from "./FacultyGroup";

export function CampusTabs() {
    const [activeId, setActiveId] = useState(campuses[0].id);
    const active = campuses.find((c) => c.id === activeId)!;

    return (
        <div>
            {/* Tab Bar */}
            <div className="mb-10 flex justify-center">
                <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                    {campuses.map((campus) => (
                        <button
                            key={campus.id}
                            onClick={() => setActiveId(campus.id)}
                            className={`relative rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 ${activeId === campus.id
                                    ? "bg-primary text-primary-foreground shadow-[0_2px_12px_rgba(43,92,136,0.35)] dark:shadow-[0_2px_12px_rgba(94,143,188,0.4)]"
                                    : "text-foreground/70 hover:bg-white/50 hover:text-foreground dark:hover:bg-white/8"
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <LocationPinIcon />
                                {campus.name}
                            </span>
                            {activeId === campus.id && (
                                <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Bar */}
            <div className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="rounded-lg bg-muted/60 px-3 py-1 text-xs font-medium dark:bg-muted/40">
                    {active.faculties.length} Faculty Members
                </span>
                <span className="text-border">·</span>
                <span className="text-xs">{active.name}</span>
            </div>

            {/* Faculty List */}
            <FacultyGroup faculties={active.faculties} />
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