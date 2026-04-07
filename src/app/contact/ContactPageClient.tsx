"use client";

import { useState } from "react";
import { campusContacts, subjects } from "./constants";

export default function ContactPageClient() {
    const [activeCampusId, setActiveCampusId] = useState(campusContacts[0].id);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const activeCampus = campusContacts.find((c) => c.id === activeCampusId)!;
    const otherCampusId = campusContacts.find((c) => c.id !== activeCampusId)?.id;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: "", phone: "", email: "", subject: "", message: "" });

            // Reset submitted state after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        Contact Us - {activeCampus.name}
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        We'd love to hear from you! Please reach out to us for any queries
                        regarding admissions, academics, or general information.
                    </p>
                </div>

                {/* Campus Tabs */}
                <div className="mb-12 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {campusContacts.map((campus) => (
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

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
                            <h2 className="text-2xl font-semibold text-foreground mb-6">
                                {activeCampus.name}
                            </h2>

                            <div className="space-y-5">
                                {/* Address */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <LocationIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-1">
                                            Address:
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {activeCampus.address}
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <PhoneIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-1">
                                            Phone:
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {activeCampus.phone}
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <MailIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-1">
                                            Email:
                                        </h3>
                                        <div className="space-y-1">
                                            {activeCampus.email.map((email, idx) => (
                                                <p key={idx} className="text-sm text-muted-foreground">
                                                    {email}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <ClockIcon />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-1">
                                            Office Hours:
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {activeCampus.officeHours}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Link to Other Campus */}
                        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border p-6">
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                Quick Links
                            </h3>
                            <button
                                onClick={() => setActiveCampusId(otherCampusId!)}
                                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground font-medium hover:bg-muted/50 transition-colors flex items-center justify-between group"
                            >
                                <span>{activeCampus.otherCampusName}</span>
                                <ArrowRightIcon />
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-foreground mb-6">
                            Send us a Message
                        </h2>

                        {submitted && (
                            <div className="mb-6 p-4 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center gap-3">
                                <CheckCircleIcon />
                                <p className="text-sm text-secondary-foreground font-medium">
                                    Thank you! Your message has been sent successfully.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Name <span className="text-destructive">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Your full name"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Phone <span className="text-destructive">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Your phone number"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Your email address (optional)"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Subject <span className="text-destructive">*</span>
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <option value="">Select a subject</option>
                                    {subjects.map((subject) => (
                                        <option key={subject} value={subject}>
                                            {subject}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Message <span className="text-destructive">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <LoadingSpinner />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <SendIcon />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
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

function LocationIcon() {
    return (
        <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg className="size-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg
            className="size-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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

function CheckCircleIcon() {
    return (
        <svg className="size-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
            />
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
