"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { BannerSlideData } from "./banner-slides";

type MotionPattern = "left" | "right" | "up" | "down" | "fade-in" | "fade-out";

type BannerSlideProps = {
  slide: BannerSlideData;
  isActive: boolean;
  pattern: MotionPattern;
  cycle: number;
};

const mediaInitialVariants = {
  left: { x: -46, y: 0, opacity: 0.88, scale: 1.03 },
  right: { x: 46, y: 0, opacity: 0.88, scale: 1.03 },
  up: { x: 0, y: -34, opacity: 0.9, scale: 1.03 },
  down: { x: 0, y: 34, opacity: 0.9, scale: 1.03 },
  "fade-in": { x: 0, y: 0, opacity: 0, scale: 1.02 },
  "fade-out": { x: 0, y: 0, opacity: 1, scale: 1.01 },
};

const contentInitialVariants = {
  left: { x: -30, y: 0, opacity: 0 },
  right: { x: 30, y: 0, opacity: 0 },
  up: { x: 0, y: -24, opacity: 0 },
  down: { x: 0, y: 24, opacity: 0 },
  "fade-in": { x: 0, y: 0, opacity: 0 },
  "fade-out": { x: 0, y: 0, opacity: 0.25 },
};

export function BannerSlide({ slide, isActive, pattern, cycle }: BannerSlideProps) {
  const mediaInitial = mediaInitialVariants[pattern];
  const contentInitial = contentInitialVariants[pattern];
  const mediaAnimate =
    pattern === "fade-out"
      ? { x: 0, y: 0, opacity: [1, 0.34, 1], scale: [1.01, 1.03, 1] }
      : { x: 0, y: 0, opacity: 1, scale: 1 };

  return (
    <article className="relative isolate h-92 overflow-hidden sm:h-112 lg:h-136">
      <motion.div
        key={`media-${slide.id}-${cycle}-${pattern}`}
        initial={isActive ? mediaInitial : { x: 0, y: 0, opacity: 1, scale: 1 }}
        animate={mediaAnimate}
        transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={slide.imageSrc}
          alt={slide.alt}
          fill
          priority={slide.id === "banner-1"}
          sizes="(max-width: 1536px) 100vw, 1536px"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,18,30,0.76)_0%,rgba(8,18,30,0.42)_42%,rgba(8,18,30,0.22)_72%,rgba(8,18,30,0.56)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(94,143,188,0.38),transparent_36%),radial-gradient(circle_at_76%_78%,rgba(183,216,92,0.28),transparent_34%)]" />
      </motion.div>

      <motion.div
        key={`${slide.id}-${cycle}-${pattern}`}
        initial={isActive ? contentInitial : { x: 0, y: 0, opacity: 1 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7"
      >
        <div className="max-w-3xl text-slate-50 [text-shadow:0_2px_10px_rgba(8,18,30,0.55)] md:rounded-2xl md:border md:border-white/30 md:bg-[rgba(8,18,30,0.42)] md:p-5 md:backdrop-blur-[2px] md:text-shadow-none mb-2">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200/95 sm:text-xs">{slide.eyebrow}</p>
          <h2 className="text-xl font-semibold leading-tight sm:text-3xl">{slide.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200/95 sm:text-base">{slide.description}</p>
        </div>
      </motion.div>
    </article>
  );
}
