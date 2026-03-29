"use client";

import * as React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { CampusInfo } from "./footer-data";

export function FooterCampusCard({ campus }: { campus: CampusInfo }) {
    return (
        <div className="rounded-[var(--radius-xl)] bg-white border border-[#d7e1ea] dark:bg-popover dark:border-[#3a4a5a] p-4 flex flex-col gap-3 shadow-sm">
            {/* Campus name */}
            <h4 className="text-sm font-bold text-[#1a3a55] dark:text-card-foreground">
                {campus.name}
            </h4>

            {/* Address */}
            <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#f5a623]" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-[#4a6880] dark:text-card-foreground">
                    {campus.address}
                </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#f5a623]" aria-hidden="true" />
                <a
                    href={`tel:${campus.phone}`}
                    className="text-xs text-[#4a6880] transition-colors duration-200 hover:text-[#2b5c88] dark:text-card-foreground dark:hover:text-[#2b5c88]"
                >
                    {campus.phone}
                </a>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-2">
                <Mail className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#f5a623]" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                    {campus.emails.map((email) => (
                        <a
                            key={email}
                            href={`mailto:${email}`}
                            className="text-xs text-[#4a6880] transition-colors duration-200 hover:text-[#2b5c88] dark:text-card-foreground dark:hover:text-[#2b5c88]"
                        >
                            {email}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}