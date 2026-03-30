"use client";

import * as React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FooterLinkGroup } from "./footer-data";

/* 
  Footer is always rendered on a light surface (#f0f5fa).
  We use hardcoded light-mode-friendly values so dark mode 
  doesn't invert everything.
*/

export function FooterLinkColumn({ group }: { group: FooterLinkGroup }) {
    return (
        <div className="flex flex-col gap-4">
            {/* Title */}
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#1a3a55] dark:text-card-foreground">
                {group.title}
            </h3>

            {/* Accent rule */}
            <div className="h-0.5 w-8 rounded-full bg-[#f5a623]" aria-hidden="true" />

            {/* Links */}
            <ul className="flex flex-col gap-2.5" role="list">
                {group.links.map((link) => (
                    <li key={link.label}>
                        {link.external ? (
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1.5 text-sm text-[#4a6880] transition-colors duration-200 hover:text-[#2b5c88] dark:text-card-foreground dark:hover:text-[#2b5c88]"
                            >
                                {link.label}
                                <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" aria-hidden="true" />
                            </a>
                        ) : (
                            <Link
                                href={link.href}
                                className="text-sm text-[#4a6880] transition-colors duration-200 hover:text-[#2b5c88] dark:text-card-foreground dark:hover:text-[#2b5c88]"
                            >
                                {link.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}