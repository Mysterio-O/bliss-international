"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type BannerControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export function BannerControls({ onPrevious, onNext }: BannerControlsProps) {
  return (
    <div className="pointer-events-auto absolute right-4 bottom-4 z-20 flex items-center gap-2 sm:right-6 sm:bottom-6">
      <button
        type="button"
        onClick={onPrevious}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/80 text-foreground shadow-[0_8px_18px_rgba(11,28,46,0.2)] backdrop-blur-md transition-colors hover:bg-white dark:border-white/20 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:bg-slate-900"
        aria-label="Previous banner"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/80 text-foreground shadow-[0_8px_18px_rgba(11,28,46,0.2)] backdrop-blur-md transition-colors hover:bg-white dark:border-white/20 dark:bg-slate-900/75 dark:text-slate-100 dark:hover:bg-slate-900"
        aria-label="Next banner"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
