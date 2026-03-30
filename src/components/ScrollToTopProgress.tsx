"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrolled = (scrollTop / docHeight) * 100;
            setProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const radius = 26;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - (progress / 100) * circumference;

    if (progress < 5) return null;

    return (
        <div
            onClick={scrollToTop}
            className="fixed bottom-20 lg:bottom-10 right-6 z-50 cursor-pointer group"
        >
            <div className="relative w-16 h-16 bg-transparent backdrop-blur-md rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-200">
                {/* Background circle */}
                <svg className="w-full h-full -rotate-90">
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        stroke="rgba(183, 216, 92, 0.3)"
                        strokeWidth="4"
                        fill="transparent"
                    />

                    {/* Progress circle */}
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        stroke="#b7d85c"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-200 ease-out"
                    />
                </svg>

                {/* Percentage */}
                <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[var(--foreground)]">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <span>
                        {Math.round(progress)}%
                    </span>
                    <span>
                        <ArrowUp className="w-3 h-3" />
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
}