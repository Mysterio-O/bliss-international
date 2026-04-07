"use client";

import { useState } from "react";
import { campusCareers, departments, jobTypes } from "./constants";

export default function CareerPageClient() {
    const [activeCampusId, setActiveCampusId] = useState(campusCareers[0].id);
    const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
    const [selectedType, setSelectedType] = useState("All Types");
    const [expandedJob, setExpandedJob] = useState<string | null>(null);

    const activeCampus = campusCareers.find((c) => c.id === activeCampusId)!;

    const filteredJobs = activeCampus.jobs.filter((job) => {
        const matchesDepartment =
            selectedDepartment === "All Departments" || job.department === selectedDepartment;
        const matchesType = selectedType === "All Types" || job.type === selectedType;
        return matchesDepartment && matchesType;
    });

    const toggleJobDetails = (jobId: string) => {
        setExpandedJob(expandedJob === jobId ? null : jobId);
    };

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        Career Opportunities
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        Join our team of dedicated educators and professionals. Explore current
                        job openings at Bliss International Academy.
                    </p>
                </div>

                {/* Campus Tabs */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {campusCareers.map((campus) => (
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
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filters */}
                <div className="mb-8 flex flex-wrap gap-4 justify-center">
                    {/* Department Filter */}
                    <div>
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            {departments.map((dept) => (
                                <option key={dept} value={dept}>
                                    {dept}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Job Type Filter */}
                    <div>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            {jobTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 text-center text-sm text-muted-foreground">
                    {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} available
                </div>

                {/* Job Listings */}
                {filteredJobs.length > 0 ? (
                    <div className="space-y-6">
                        {filteredJobs.map((job) => {
                            const isExpanded = expandedJob === job.id;

                            return (
                                <div
                                    key={job.id}
                                    className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    {/* Job Header */}
                                    <div
                                        className="p-6 cursor-pointer"
                                        onClick={() => toggleJobDetails(job.id)}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-start gap-3 mb-2">
                                                    <BriefcaseIcon />
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-foreground">
                                                            {job.title}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mt-1">
                                                            {job.department} Department
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Job Meta Info */}
                                                <div className="flex flex-wrap gap-3 mt-4">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/40">
                                                        <ClockIcon />
                                                        {job.type}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground border border-secondary/40">
                                                        <UsersIcon />
                                                        {job.positions} Position{job.positions > 1 ? "s" : ""}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground border border-accent/40">
                                                        <CalendarIcon />
                                                        Deadline: {job.deadline}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Expand/Collapse Icon */}
                                            <button className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                                                <ChevronIcon isExpanded={isExpanded} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Job Details (Expandable) */}
                                    {isExpanded && (
                                        <div className="border-t border-border bg-muted/30 p-6 space-y-6">
                                            {/* Education & Experience */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                                        <GraduationCapIcon />
                                                        Education Required
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        {job.education}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                                        <ExperienceIcon />
                                                        Experience
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        {job.experience}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Responsibilities */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-3">
                                                    Key Responsibilities:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {job.responsibilities.map((resp, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                                        >
                                                            <span className="text-primary mt-1 flex-shrink-0">
                                                                •
                                                            </span>
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Requirements */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-foreground mb-3">
                                                    Requirements:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {job.requirements.map((req, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2 text-sm text-muted-foreground"
                                                        >
                                                            <span className="text-secondary mt-1 flex-shrink-0">
                                                                ✓
                                                            </span>
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Salary & Benefits */}
                                            {(job.salary || job.benefits) && (
                                                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border">
                                                    {job.salary && (
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-foreground mb-2">
                                                                Salary:
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                {job.salary}
                                                            </p>
                                                        </div>
                                                    )}
                                                    {job.benefits && (
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-foreground mb-2">
                                                                Benefits:
                                                            </h4>
                                                            <ul className="space-y-1">
                                                                {job.benefits.map((benefit, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className="text-sm text-muted-foreground"
                                                                    >
                                                                        • {benefit}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {/* Apply Button */}
                                            <div className="pt-4">
                                                <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                                    <SendIcon />
                                                    Apply for this Position
                                                </button>
                                                <p className="text-xs text-muted-foreground mt-3">
                                                    Posted on {job.postedDate}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">
                            No positions available matching your criteria.
                        </p>
                    </div>
                )}

                {/* Application Info */}
                <div className="mt-12 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                        How to Apply
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <p className="flex items-start gap-2">
                            <span className="text-primary mt-1">1.</span>
                            <span>
                                Send your CV and cover letter to{" "}
                                <a
                                    href="mailto:career@bliss.edu.bd"
                                    className="text-primary font-medium hover:underline"
                                >
                                    career@bliss.edu.bd
                                </a>
                            </span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="text-primary mt-1">2.</span>
                            <span>
                                Mention the job title and campus name in the email subject line
                            </span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="text-primary mt-1">3.</span>
                            <span>
                                Include relevant certificates and documents as attachments
                            </span>
                        </p>
                        <p className="flex items-start gap-2">
                            <span className="text-primary mt-1">4.</span>
                            <span>
                                Only shortlisted candidates will be contacted for interviews
                            </span>
                        </p>
                    </div>
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

function BriefcaseIcon() {
    return (
        <svg className="size-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    );
}

function ClockIcon() {
    return <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>;
}

function UsersIcon() {
    return <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>;
}

function CalendarIcon() {
    return <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>;
}

function ChevronIcon({ isExpanded }: { isExpanded: boolean }) {
    return (
        <svg
            className={`size-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );
}

function GraduationCapIcon() {
    return (
        <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
    );
}

function ExperienceIcon() {
    return (
        <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
        </svg>
    );
}
