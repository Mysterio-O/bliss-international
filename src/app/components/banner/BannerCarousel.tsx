"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, A11y, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerControls } from "./BannerControls";
import { BannerSlide } from "./BannerSlide";
import { bannerSlides } from "./banner-slides";

type MotionPattern = "left" | "right" | "up" | "down" | "fade-in" | "fade-out";

const patterns: MotionPattern[] = ["left", "right", "up", "down", "fade-in", "fade-out"];

function pickRandomPattern(previous: MotionPattern): MotionPattern {
  const choices = patterns.filter((pattern) => pattern !== previous);
  return choices[Math.floor(Math.random() * choices.length)] ?? "fade-in";
}

export function BannerCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [motionPattern, setMotionPattern] = useState<MotionPattern>("right");
  const [motionCycle, setMotionCycle] = useState(0);

  return (
    <section className="relative overflow-hidden lg:rounded-[1.7rem] rounded-b-[1.7rem] lg:rounded-b-0 border border-border/70 bg-card shadow-[0_16px_50px_rgba(11,28,46,0.16)]">
      <Swiper
        modules={[Autoplay, A11y, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={750}
        loop
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        a11y={{ enabled: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setMotionPattern((prev) => pickRandomPattern(prev));
          setMotionCycle((cycle) => cycle + 1);
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet banner-pagination-bullet",
          bulletActiveClass: "banner-pagination-bullet-active",
        }}
        className="banner-swiper"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <BannerSlide
              slide={slide}
              isActive={index === activeIndex}
              pattern={motionPattern}
              cycle={motionCycle}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <BannerControls
        onPrevious={() => {
          swiperRef.current?.slidePrev();
        }}
        onNext={() => {
          swiperRef.current?.slideNext();
        }}
      />

      <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/18 dark:ring-white/8" />
    </section>
  );
}
