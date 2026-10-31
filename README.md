# Bliss International Academy (BIA) — Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-SSR-3ecf8e?logo=supabase)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

A modern, mobile-first institutional web platform and digital ecosystem built for **Bliss International Academy (BIA)** — a premier English-version educational institution in Bangladesh committed to blending high-standard modern academic excellence with moral integrity and Islamic values.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
  - [Public Web Portal & Campuses](#public-web-portal--campuses)
  - [Multilingual Support](#multilingual-support)
  - [Academic & Admissions Suite](#academic--admissions-suite)
  - [Bliss Clubs (Co-Curriculars)](#bliss-clubs-co-curriculars)
  - [Student Affairs & Verification](#student-affairs--verification)
  - [Navigation & Mobile-First UX](#navigation--mobile-first-ux)
- [Tech Stack & Dependencies](#tech-stack--dependencies)
- [Design System & Theme Architecture](#design-system--theme-architecture)
  - [Theme A Base Brand Palette](#theme-a-base-brand-palette)
  - [Role Accent Tokens](#role-accent-tokens)
  - [Token Governance](#token-governance)
- [Project Directory & File Structure](#project-directory--file-structure)
- [Route Map & Information Architecture](#route-map--information-architecture)
- [Supabase & Backend Architecture](#supabase--backend-architecture)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
  - [Linting](#linting)
- [Roadmap](#roadmap)
- [License & Institutional Attribution](#license--institutional-attribution)

---

## Overview

**Bliss International Academy (BIA)** operates across two major campuses in the Satkhira region:
1. **Satkhira Campus (Saleha Campus)**
2. **Debhata Campus**

This web application serves as the primary digital gateway for prospective students, enrolled learners, parents, faculty members, and administrators. It features a responsive marketing website, comprehensive academic and administrative information, interactive student club portals, digital student record verification, and a foundational architecture for future role-based dashboard portals (Admin, Teacher, Student, Parent).

---

## Key Features

### Public Web Portal & Campuses
- **Interactive Homepage (`/`)**:
  - **Dynamic Banner Carousel**: Powered by Swiper with auto-advancing slides, fade transitions, and customizable indicators.
  - **Academic Programs Showcase**: Slide-out sheets (`ProgramSheet`) detailing Playgroup through Secondary levels.
  - **Past Events Gallery**: Interactive modal/side-sheet preview of milestone institutional events.
  - **Testimonial Marquee**: Dual-speed animated marquee displaying student and parent feedback.
  - **Notice Board / Latest Updates**: Accordion-based feed for time-sensitive school notices.
- **Dual-Campus Architecture**: Tailored campus data views across faculty directories, principal messages, fee tables, examination results, and accounts office payment procedures for both **Satkhira** and **Debhata** campuses.

### Multilingual Support
- **Triple-Language Architecture**: Fully localized content toggling between:
  - **English (`en`)**
  - **Bengali (`bn`)**
  - **Arabic (`ar`)**
- Integrated into institutional overview pages, mission/vision statements, leadership messages (Founder, Chairman, Managing Director), and Principal addresses.

### Academic & Admissions Suite
- **Step-by-Step Admissions Guide (`/admission-procedure`)**: Detailed admission instructions from inquiry to enrollment.
- **Age Criteria Matrix (`/age-criteria`)**: Minimum and maximum age requirements mapped to respective grade levels.
- **Fees Structure (`/fee-structure`)**: Itemized breakdown of one-time admission fees, tuition fees, and residential options for both campuses with interactive multi-language switching.
- **Payment Procedure (`/payment-procedure`)**: Bank account details, mobile banking guidelines (bKash/Nagad), and Accounts Office directory for offline and online fee deposits.
- **Academic Calendar (`/academic-calendar`)**: 365-day categorized calendar with interactive stats (191 academic days, 96 weekend holidays, 57 national/religious holidays, and 21 exam days).
- **Curriculum & Teaching Medium (`/curriculum`, `/teaching-medium`)**: Deep-dive into BIA's English-version pedagogical approach, moral curriculum, and bilingual fluency standards.
- **Syllabus & Downloads (`/syllabus`, `/forms-downloads`)**: Class term syllabi downloads, official admission forms, leave requests, and academic PDF resources.

### Bliss Clubs (Co-Curriculars)
Seven dedicated club portals fostering holistic student development:
1. **Language Club (`/bliss-club/language-club`)**: Spoken English and Arabic communication, debate workshops, and reading circles.
2. **Debating Club (`/bliss-club/debating-club`)**: Parliamentary debates, critical reasoning, and public speaking championships.
3. **Science Club (`/bliss-club/science-club`)**: STEM workshops, science fairs, and national olympiad preparation.
4. **Art Club (`/bliss-club/art-club`)**: Visual arts, sketching, calligraphy, and cultural exhibition showcases.
5. **Cultural Club (`/bliss-club/cultural-club`)**: Islamic cultural programs, nasheed performances, and historical day celebrations.
6. **Sports Club (`/bliss-club/sports-club`)**: Physical fitness, football, cricket, athletics, and inter-campus tournaments.
7. **ICT Club (`/bliss-club/ict-club`)**: Computer literacy, coding basics, robotics, and cyber safety workshops.

### Student Affairs & Verification
- **Student Activities (`/student-affairs/activities`)**: Co-curricular milestone showcases and event highlights.
- **E-Library (`/student-affairs/e-library`)**: Digital repository and reading lists for students and educators.
- **BIA Publications (`/student-affairs/publications`)**: School magazines, student write-ups, and annual newsletters.
- **Online Student Verification (`/student-affairs/verification`)**: Interactive portal simulator allowing employers, institutions, and parents to verify student credentials, session validity, and enrollment status.
- **Academic Results (`/results`)**: Campus-based exam results portal with term filters and score sheets.

### Navigation & Mobile-First UX
- **Desktop Floating Header (`Header.tsx`)**: High-performance, glassmorphic frosted navbar with grouped multi-level dropdowns and theme toggler.
- **Mobile Bottom Navigation (`MobileBottomNav.tsx`)**: Native app-style bottom navigation bar with nested full-screen sliding drawers, quick links, and action sheets.
- **Scroll Progress Indicator (`ScrollToTopProgress.tsx`)**: Circular SVG scroll indicator with click-to-scroll-to-top interaction.
- **Branded Status Pages**: Custom animated 404 (`not-found.tsx`) and Error Boundary (`error.tsx`) pages with geometric background layers and recovery buttons.

---

## Tech Stack & Dependencies

| Category | Technology / Library | Version | Description |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `16.2.1` | App Router, Server Components, SSR, Font optimization |
| **UI Library** | [React](https://react.dev/) / [React DOM](https://react.dev/) | `19.2.4` | Modern React runtime |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.0` | Strict type checking across the entire codebase |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `^4.0` | Engine v4 with `@tailwindcss/postcss` and `@theme inline` |
| **CSS Animations** | [tw-animate-css](https://www.npmjs.com/package/tw-animate-css) | `^1.4.0` | Declarative CSS animations |
| **Primitives** | [Radix UI](https://www.radix-ui.com/) | `^1.4.3` | Accessible primitives (Accordion, Dialog, Sheet, Slot) |
| **Design Standards** | [shadcn](https://ui.shadcn.com/) | `^4.1.1` | Styled design tokens (`radix-maia` style) |
| **Icons** | [Lucide React](https://lucide.dev/) & [HugeIcons](https://hugeicons.com/) | `^1.7.0` / `^1.1.6` | Comprehensive iconography system |
| **Theme Engine** | [next-themes](https://github.com/pacocoursey/next-themes) | `^0.4.6` | Dark, light, and system color mode provider |
| **Slider / Carousel**| [Swiper](https://swiperjs.com/) | `^12.1.3` | Touch slider with autoplay, pagination, and fade transitions |
| **Motion** | [Motion](https://motion.dev/) | `^12.38.0` | Smooth physics-based UI transitions and animations |
| **Backend / Auth** | [Supabase SSR](https://supabase.com/docs/guides/auth/server-side/nextjs) | `^0.9.0` | Server-side and browser cookie auth client |
| **Database SDK** | [@supabase/supabase-js](https://supabase.com/docs/reference/javascript) | `^2.100.1` | Supabase JavaScript client |
| **Utility** | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | `^2.1.1` / `^3.5.0` | Dynamic className composition (`cn`) |

---

## Design System & Theme Architecture

The application implements **Theme A** as its global foundation, enforcing strict semantic CSS token maps in `src/app/globals.css`.

### Theme A Base Brand Palette

| Token | Light Mode (`:root`) | Dark Mode (`.dark`) | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `#F7FAFC` | `#08121E` | Main page body background |
| `--foreground` | `#0B1C2E` | `#EAF2FB` | Primary body typography |
| `--card` / `--popover` | `#FFFFFF` | `#102235` | Elevated card & modal surfaces |
| `--primary` | `#2B5C88` | `#5E8FBC` | Brand core identity & primary action buttons |
| `--secondary` | `#A3CB3F` | `#B7D85C` | Brand secondary fresh lime accent |
| `--accent` | `#F5A623` | `#FFBC52` | Highlights, badges & calls-to-action |
| `--muted` | `#E8EEF4` | `#13273B` | Subtle backgrounds and inactive elements |
| `--muted-foreground` | `#536171` | `#A6B9CF` | Secondary descriptive labels |
| `--border` | `#D7E1EA` | `#2B4258` | Component and grid divider lines |
| `--destructive` | `#BE3B32` | `#E36E66` | Errors, warnings, and alerts |

### Role Accent Tokens

For future authenticated dashboard ecosystems, role-based accents are isolated to contextual identity areas:

| Role | Token Name | Color Value | Contextual Purpose |
| :--- | :--- | :--- | :--- |
| **Admin** | `--role-admin` | `#2B5C88` | Operational badges, system oversight metrics |
| **Teacher** | `--role-teacher` | `#2E8A72` | Classroom management, attendance highlights |
| **Student** | `--role-student` | `#8FBE3F` | Study schedules, club badges, grade indicators |
| **Parent** | `--role-parent` | `#D9921E` | Fee status alerts, student performance notifications |

### Token Governance
- Components must consume semantic utility classes (e.g., `bg-card`, `text-primary`, `border-border`).
- Direct hardcoded hex values inside `.tsx` components are prohibited.
- Role accents are strictly applied to avatar rings, badges/chips, chart series, and active navigation markers — never to entire screen backgrounds.

---

## Project Directory & File Structure

Below is the complete architectural layout of the project:

```
bliss-international/
├── public/                                      # Static public assets
│   ├── banner-images/                           # Hero banner carousel images (1.webp - 9.webp)
│   ├── md/                                      # Managing Director portrait
│   ├── payment/                                 # Campus payment QR / bank instructions
│   │   ├── payment-debhata.jpeg
│   │   └── payment-satkhira.jpg
│   ├── pdfs/                                    # Downloadable documents & notice PDFs
│   ├── principles/                              # Campus Principal portraits
│   │   ├── principle-debhata.jpg
│   │   └── principle-satkhira.jpg
│   ├── logo.png / logo.webp                     # BIA primary logo (light mode)
│   ├── logo-dark.png / logo-dark.webp           # BIA primary logo (dark mode)
│   └── *.svg                                    # Next.js & UI vector icons
│
├── src/                                         # Main source code
│   ├── app/                                     # Next.js App Router root
│   │   ├── about/                               # About BIA section
│   │   │   ├── faculties/                       # Teachers and faculty page
│   │   │   │   └── page.tsx
│   │   │   ├── principles/                      # Principal messages with EN/BN/AR switcher
│   │   │   │   ├── page.tsx
│   │   │   │   └── PrincipalsPageClient.tsx
│   │   │   ├── AboutPage.tsx                    # Interactive About BIA client view
│   │   │   └── page.tsx                         # /about route entry
│   │   ├── academic-calendar/                   # Academic calendar with holiday & exam data
│   │   │   ├── AcademicCalendarPage.tsx
│   │   │   ├── calendar-data.ts
│   │   │   └── page.tsx
│   │   ├── admission-procedure/                 # Admission steps & requirements
│   │   │   ├── AdmissionProcedurePageClient.tsx
│   │   │   └── page.tsx
│   │   ├── age-criteria/                        # Class entry age tables
│   │   │   ├── AgeCriteriaPageClient.tsx
│   │   │   └── page.tsx
│   │   ├── bliss-club/                          # Co-curricular student clubs
│   │   │   ├── art-club/page.tsx                # Art Club
│   │   │   ├── cultural-club/page.tsx           # Cultural Club
│   │   │   ├── debating-club/page.tsx           # Debating Club
│   │   │   ├── ict-club/page.tsx                # ICT Club
│   │   │   ├── language-club/page.tsx           # Language Club
│   │   │   ├── science-club/page.tsx            # Science Club
│   │   │   ├── sports-club/page.tsx             # Sports Club
│   │   │   ├── ClubPage.tsx                     # Generic club page template
│   │   │   └── clubs-data.ts                    # Club metadata, activities & achievements
│   │   ├── career/                              # Career opportunities & job listings
│   │   │   ├── CareerPageClient.tsx
│   │   │   ├── constants.ts
│   │   │   └── page.tsx
│   │   ├── components/                          # Route-specific UI components
│   │   │   ├── about/                           # Components for About BIA & faculties
│   │   │   │   ├── faculties/                   # Campus tabs, faculty cards & avatars
│   │   │   │   │   ├── CampusTabs.tsx
│   │   │   │   │   ├── constants.ts
│   │   │   │   │   ├── FacultiesHero.tsx
│   │   │   │   │   ├── FacultyAvatar.tsx
│   │   │   │   │   ├── FacultyCard.tsx
│   │   │   │   │   └── FacultyGroup.tsx
│   │   │   │   ├── principles/                  # Multi-language principal components
│   │   │   │   │   ├── LanguageSwitcher.tsx
│   │   │   │   │   ├── PrincipalCard.tsx
│   │   │   │   │   ├── principalData.ts
│   │   │   │   │   └── PrincipalsSection.tsx
│   │   │   │   ├── strip/                       # Section strips (Intro, Mission, Stats, Leadership)
│   │   │   │   │   ├── IntroductionSection.tsx
│   │   │   │   │   ├── LanguageSwitcher.tsx
│   │   │   │   │   ├── LeadershipMessages.tsx
│   │   │   │   │   ├── MessageCard.tsx
│   │   │   │   │   ├── MissionVisionSection.tsx
│   │   │   │   │   ├── StatsSection.tsx
│   │   │   │   │   └── WhyChooseSection.tsx
│   │   │   │   └── AboutHero.tsx
│   │   │   ├── admission/                       # Admission feature modules
│   │   │   │   ├── age-criteria/                # Age tables & guidelines
│   │   │   │   │   ├── AgeCriteriaCard.tsx
│   │   │   │   │   ├── ageCriteriaData.ts
│   │   │   │   │   └── AgeCriteriaSection.tsx
│   │   │   │   ├── fee-structure/               # Campus fee tables & items
│   │   │   │   │   ├── FeeStructureCard.tsx
│   │   │   │   │   ├── feeStructureData.ts
│   │   │   │   │   └── FeeStructureSection.tsx
│   │   │   │   └── payment-procedure/           # Payment procedure instructions
│   │   │   │       ├── paymentProcedureData.ts
│   │   │   │       └── PaymentProcedureSection.tsx
│   │   │   ├── banner/                          # Homepage hero Swiper carousel
│   │   │   │   ├── banner-slides.ts
│   │   │   │   ├── BannerCarousel.tsx
│   │   │   │   ├── BannerControls.tsx
│   │   │   │   └── BannerSlide.tsx
│   │   │   ├── footer/                          # Multi-campus footer system
│   │   │   │   ├── footer-data.ts
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterCampusCard.tsx
│   │   │   │   └── FooterLinkColumn.tsx
│   │   │   ├── headers/                         # Navigation bars
│   │   │   │   ├── Header.tsx                   # Glassmorphic desktop header
│   │   │   │   ├── helpers.tsx                  # Header menu icons & nested dropdowns
│   │   │   │   └── MobileBottomNav.tsx          # Mobile bottom nav with nested sliding panels
│   │   │   ├── latest-updates/                  # Notice board & announcements
│   │   │   │   ├── latest-updates.ts
│   │   │   │   ├── LatestUpdateHeading.tsx
│   │   │   │   ├── LatestUpdates.tsx
│   │   │   │   └── LatestUpdatesAccordion.tsx
│   │   │   ├── pasteventssection/               # Past events cards with details sheet
│   │   │   │   ├── EventCard.tsx
│   │   │   │   ├── events.ts
│   │   │   │   ├── EventSheet.tsx
│   │   │   │   └── Pasteventssection.tsx
│   │   │   ├── programs/                        # Academic programs with sheet drawers
│   │   │   │   ├── ProgramCard.tsx
│   │   │   │   ├── programs.ts
│   │   │   │   ├── ProgramSection.tsx
│   │   │   │   └── ProgramSheet.tsx
│   │   │   └── testimonial-section/             # Testimonials marquee
│   │   │       ├── MarqueeTrack.tsx
│   │   │       ├── TestimonialCard.tsx
│   │   │       ├── testimonials.ts
│   │   │       └── TestimonialsSection.tsx
│   │   ├── contact/                             # Contact page & campus coordinates
│   │   │   ├── constants.ts
│   │   │   ├── ContactPageClient.tsx
│   │   │   └── page.tsx
│   │   ├── curriculum/                          # Academic curriculum details
│   │   │   ├── curriculum-data.ts
│   │   │   ├── CurriculumPage.tsx
│   │   │   └── page.tsx
│   │   ├── fee-structure/                       # Detailed campus fee schedule
│   │   │   ├── FeeStructurePageClient.tsx
│   │   │   └── page.tsx
│   │   ├── forms-downloads/                     # Downloadable PDF forms & syllabus
│   │   │   ├── forms-downloads-data.ts
│   │   │   ├── FormsDownloadsPage.tsx
│   │   │   └── page.tsx
│   │   ├── media-gallery/                       # Photos and videos with category filter
│   │   │   ├── constants.ts
│   │   │   ├── MediaGalleryPageClient.tsx
│   │   │   └── page.tsx
│   │   ├── payment-procedure/                   # Payment accounts office & bank data
│   │   │   ├── PaymentProcedurePageClient.tsx
│   │   │   └── page.tsx
│   │   ├── results/                             # Academic results by campus
│   │   │   ├── constants.ts
│   │   │   ├── ResultsPageClient.tsx
│   │   │   └── page.tsx
│   │   ├── student-affairs/                     # Student affairs portal
│   │   │   ├── activities/                      # Co-curricular activity highlights
│   │   │   │   ├── ActivitiesPageClient.tsx
│   │   │   │   ├── constants.ts
│   │   │   │   └── page.tsx
│   │   │   ├── e-library/                       # Digital library resources
│   │   │   │   ├── constants.ts
│   │   │   │   ├── ELibraryPageClient.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── publications/                    # Student magazines & newsletters
│   │   │   │   ├── constants.ts
│   │   │   │   ├── page.tsx
│   │   │   │   └── PublicationsPageClient.tsx
│   │   │   └── verification/                    # Student credential verification
│   │   │       ├── page.tsx
│   │   │       └── VerificationPageClient.tsx
│   │   ├── supabase/                            # Supabase client configurations
│   │   │   ├── admin.ts                         # Service role client for privileged tasks
│   │   │   ├── browser.ts                       # Browser client singleton (with lock bypass)
│   │   │   ├── middleware.ts                    # Edge session refresh handler
│   │   │   ├── route-client.ts                  # Route handler SSR client
│   │   │   ├── server.ts                        # Server component SSR client
│   │   │   └── types.ts                         # Database types schema
│   │   ├── syllabus/                            # Academic syllabus page
│   │   │   ├── syllabus-data.ts
│   │   │   ├── SyllabusPage.tsx
│   │   │   └── page.tsx
│   │   ├── teaching-medium/                     # English-version pedagogical approach
│   │   │   ├── teaching-medium-data.ts
│   │   │   ├── TeachingMediumPage.tsx
│   │   │   └── page.tsx
│   │   ├── types/                               # TypeScript definition interfaces
│   │   │   ├── about/types.ts                   # About data and multilingual types
│   │   │   └── principles/types.ts              # Principal card and message types
│   │   ├── error.tsx                            # Branded global error boundary
│   │   ├── favicon.ico                          # App favicon
│   │   ├── globals.css                          # Tailwind v4 theme tokens & styles
│   │   ├── layout.tsx                           # Root HTML layout & font declarations
│   │   ├── not-found.tsx                        # Branded 404 page with quick navigation
│   │   └── page.tsx                             # Homepage entry
│   │
│   ├── components/                              # Reusable cross-application components
│   │   ├── ui/                                  # shadcn / Radix UI component primitives
│   │   │   ├── accordion.tsx                    # Accessible animated accordion
│   │   │   ├── button.tsx                       # Styled button with CVA variants
│   │   │   └── sheet.tsx                        # Slide-out drawer sheet component
│   │   ├── ScrollToTopProgress.tsx              # Circular scroll progress indicator
│   │   ├── theme-control.tsx                    # Theme switcher dropdown/toggle
│   │   └── theme-provider.tsx                   # next-themes wrapper provider
│   │
│   ├── hooks/                                   # Custom React hooks
│   │   └── use-is-mobile.ts                     # Responsive breakpoint hook (<768px)
│   │
│   └── lib/                                     # Utility functions and navigation definitions
│       ├── nav-contraint.ts                     # Hierarchical navigation menu data
│       └── utils.ts                             # `cn` helper (clsx + tailwind-merge)
│
├── .env.example                                 # Example environment variables template
├── .gitignore                                   # Git ignore rules
├── AGENTS.md                                    # AI agent development rules
├── CLAUDE.md                                    # Claude coding instructions
├── components.json                              # shadcn CLI configuration file
├── eslint.config.mjs                            # ESLint 9 configuration
├── fee-structure.md                             # Fee & campus accounts reference data
├── next.config.ts                               # Next.js configuration
├── package.json                                 # Project metadata and dependencies
├── package-lock.json                            # Deterministic package dependency tree
├── postcss.config.mjs                           # PostCSS configuration with Tailwind
├── PRODUCT_UI_ARCHITECTURE_PLAN.md              # Long-term UI architecture and tokens plan
├── README.md                                    # Project documentation
├── skills-lock.json                             # Agent skills configuration lock
└── tsconfig.json                                # TypeScript configuration
```

---

## Route Map & Information Architecture

| Route | Page Name | Primary Content & Features | Campus Filter |
| :--- | :--- | :--- | :---: |
| `/` | **Home** | Hero carousel, academic programs, past events, testimonials, updates | All |
| `/about` | **About BIA** | History, vision/mission, stats, leadership messages (EN, BN, AR) | Both |
| `/about/principles` | **Principal Messages** | Welcome letters from Satkhira & Debhata principals (EN, BN, AR) | Satkhira & Debhata |
| `/about/faculties` | **Faculty Members** | Teaching staff directory with designations and departments | Satkhira & Debhata |
| `/admission-procedure` | **Admission Steps** | Enrollment process, required documentation, admissions desk | Both |
| `/age-criteria` | **Age Criteria** | Minimum/maximum age matrix by grade level | Both |
| `/fee-structure` | **Fees Structure** | Admission fees, tuition, and residential fee schedules | Satkhira & Debhata |
| `/payment-procedure` | **Payment Guidelines**| Accounts office, bank routing, and mobile financial services | Satkhira & Debhata |
| `/academic-calendar` | **Academic Calendar** | 365-day annual schedule, exam cycles, vacations, and events | Both |
| `/curriculum` | **Curriculum** | Integrated national & international English-version syllabus | Both |
| `/teaching-medium` | **Teaching Medium** | English version pedagogy, moral foundation, Arabic language | Both |
| `/syllabus` | **Syllabus** | Term-based subject breakdown and study guidelines | Both |
| `/forms-downloads` | **Forms & Downloads** | Academic notices, PDF admission forms, and leave slips | Both |
| `/bliss-club/*` | **Bliss Clubs** | 7 specialized club portals (Language, ICT, Debate, Science, etc.)| Both |
| `/results` | **Academic Results** | Examination result viewer and student grade summaries | Satkhira & Debhata |
| `/student-affairs/activities` | **Student Activities** | Extra-curricular milestones, exhibitions, and tournaments | Both |
| `/student-affairs/e-library` | **E-Library** | Curated digital reading books, research papers, study guides | Both |
| `/student-affairs/publications`| **Publications** | School magazines, newsletters, and student literary work | Both |
| `/student-affairs/verification`| **Verification** | Online student enrollment and credential verification engine | Satkhira & Debhata |
| `/media-gallery` | **Media Gallery** | Filterable photo and video gallery of campus events | Satkhira & Debhata |
| `/contact` | **Contact Us** | Addresses, contact phones, email, and Google Maps embeddings | Satkhira & Debhata |
| `/career` | **Careers** | Current teaching & administrative job openings with application form | Both |

---

## Supabase & Backend Architecture

The application is architected with `@supabase/ssr` to support both public browsing and authenticated sessions across client and server runtimes:

1. **Browser Client (`src/app/supabase/browser.ts`)**:
   - Implemented as a client-side singleton using `getBrowserSupabase()`.
   - Bypasses navigator Web Locks API (`lock: (...) => fn()`) to prevent `LockManager timed out` conflicts across multiple concurrent tabs.
2. **Server Client (`src/app/supabase/server.ts`)**:
   - Used inside Next.js Server Components and Server Actions.
   - Accesses asynchronous cookies using `cookies()` from `next/headers`.
3. **Route Handler Client (`src/app/supabase/route-client.ts`)**:
   - Designed for API routes (`app/api/*/route.ts`) to read and write auth cookies.
4. **Middleware Session Refresh (`src/app/supabase/middleware.ts`)**:
   - Handles automatic token refreshes across incoming requests, syncing session cookies directly in HTTP responses.
5. **Admin Service Client (`src/app/supabase/admin.ts`)**:
   - Privileged operations utilizing `SUPABASE_SERVICE_ROLE_KEY` with disabled session persistence.

---

## Environment Variables

To configure backend connectivity and Supabase services, create a `.env.local` file in the root directory:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your-supabase-anon-or-publishable-key

# Privileged Server-Only Key (Never expose to client-side code)
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Site URL for metadata and OpenGraph
NEXT_PUBLIC_SITE_URL=https://bliss-international.vercel.app
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher recommended (compatible with Node `v18+`)
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/your-username/bliss-international.git
cd bliss-international
npm install
```

### Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application supports fast refresh on edits.

### Production Build

Create an optimized production build:

```bash
npm run build
```

To run the built production server locally:

```bash
npm run start
```

### Linting

Run ESLint to check for syntax and type issues:

```bash
npm run lint
```

---

## Roadmap

As outlined in [PRODUCT_UI_ARCHITECTURE_PLAN.md](file:///d:/bliss-international/PRODUCT_UI_ARCHITECTURE_PLAN.md), upcoming milestones include:

- [ ] **Role-Based Portals**:
  - **Admin Portal**: Operations, student admissions approval, institutional statistics.
  - **Teacher Portal**: Class attendance tracking, grading submission, curriculum planning.
  - **Student Portal**: Daily class schedule, homework assignments, report cards.
  - **Parent Portal**: Fee clearance status, student attendance alerts, teacher messaging.
- [ ] **Online Payment Integration**: Direct bKash, Nagad, and SSLCommerz gateway checkout for automated fee payments.
- [ ] **Live Notice Push Notifications**: Web push alerts for sudden school announcements and examination results.

---

## License & Institutional Attribution

© 2026 **Bliss International Academy (BIA)**. All rights reserved.  
Unauthorized distribution, modification, or commercial usage of source assets, logos, and materials without prior written consent from the Bliss International Academy Board of Directors is strictly prohibited.
