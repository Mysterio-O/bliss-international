"use client";

import { useState } from "react";
import { campusResults } from "./constants";

export default function ResultsPageClient() {
    const [activeCampusId, setActiveCampusId] = useState(campusResults[0].id);
    const activeCampus = campusResults.find((c) => c.id === activeCampusId)!;

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        Exam Results
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        View student performance across all classes
                    </p>
                </div>

                {/* Campus Tabs */}
                <div className="mb-10 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {campusResults.map((campus) => (
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

                {/* Results Display */}
                <div className="space-y-8">
                    {activeCampus.results.map((result, idx) => (
                        <div
                            key={idx}
                            className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden"
                        >
                            {/* Result Header */}
                            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 text-primary-foreground">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <h2 className="text-xl font-semibold">
                                        {result.class} - {result.term}
                                    </h2>
                                    <span className="text-sm bg-white/20 px-3 py-1 rounded-lg w-fit">
                                        Published: {result.publishDate}
                                    </span>
                                </div>
                            </div>

                            {/* Results Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-muted/50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                                Roll
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                                Student Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                                GPA
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                                Grade
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {result.students.map((student, studentIdx) => (
                                            <tr
                                                key={studentIdx}
                                                className="hover:bg-muted/30 transition-colors"
                                            >
                                                <td className="px-6 py-4 text-sm font-medium text-foreground">
                                                    {student.roll}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-foreground">
                                                    {student.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-semibold text-foreground">
                                                    {student.gpa}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span
                                                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                                            student.grade === "A+"
                                                                ? "bg-secondary/20 text-secondary-foreground border border-secondary/40"
                                                                : student.grade === "A"
                                                                ? "bg-primary/20 text-primary border border-primary/40"
                                                                : "bg-accent/20 text-accent-foreground border border-accent/40"
                                                        }`}
                                                    >
                                                        {student.grade}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
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
