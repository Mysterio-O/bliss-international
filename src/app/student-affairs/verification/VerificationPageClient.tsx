"use client";

import { useState } from "react";

export default function VerificationPageClient() {
    const [studentId, setStudentId] = useState("");
    const [verificationResult, setVerificationResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate verification process
        setTimeout(() => {
            if (studentId) {
                // Demo verification data
                setVerificationResult({
                    verified: true,
                    studentId: studentId,
                    name: "Student Name",
                    class: "Class 10",
                    campus: "Satkhira Campus",
                    session: "2024-2025",
                    status: "Active",
                });
            }
            setIsLoading(false);
        }, 1500);
    };

    const handleReset = () => {
        setStudentId("");
        setVerificationResult(null);
    };

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        Student Verification
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Verify student enrollment and academic records
                    </p>
                </div>

                {/* Verification Form */}
                <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
                    {!verificationResult ? (
                        <form onSubmit={handleVerify} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="studentId"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Student ID / Roll Number
                                </label>
                                <input
                                    type="text"
                                    id="studentId"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    placeholder="Enter student ID or roll number"
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <LoadingSpinner />
                                        Verifying...
                                    </>
                                ) : (
                                    <>
                                        <SearchIcon />
                                        Verify Student
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-muted-foreground text-center mt-4">
                                This verification service is available for current students and
                                alumni of Bliss International Academy.
                            </p>
                        </form>
                    ) : (
                        <div className="space-y-6">
                            {/* Success Icon */}
                            <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                                    <CheckIcon />
                                </div>
                            </div>

                            {/* Verification Result */}
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-foreground mb-2">
                                    Student Verified
                                </h3>
                                <p className="text-muted-foreground">
                                    The following student information has been verified
                                </p>
                            </div>

                            {/* Student Details */}
                            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                                <DetailRow label="Student ID" value={verificationResult.studentId} />
                                <DetailRow label="Name" value={verificationResult.name} />
                                <DetailRow label="Class" value={verificationResult.class} />
                                <DetailRow label="Campus" value={verificationResult.campus} />
                                <DetailRow label="Session" value={verificationResult.session} />
                                <DetailRow
                                    label="Status"
                                    value={
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground border border-secondary/40">
                                            {verificationResult.status}
                                        </span>
                                    }
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={handleReset}
                                    className="flex-1 px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                                >
                                    Verify Another
                                </button>
                                <button className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                                    Download Certificate
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Information Box */}
                <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Important Information</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                                Verification certificates are issued for employment, higher education,
                                and official purposes.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                                For any discrepancies, please contact your respective campus office.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                                Alumni can request official transcripts through this verification
                                system.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-border last:border-0">
            <span className="text-sm text-muted-foreground">{label}</span>
            <span className="text-sm font-medium text-foreground">{value}</span>
        </div>
    );
}

function SearchIcon() {
    return (
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg className="size-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    );
}

function LoadingSpinner() {
    return (
        <svg className="size-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );
}
