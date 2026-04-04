'use client';

import { ChevronRight, Home, BookOpen, Target, Award } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { curriculumData, curriculumApproach, overviewStats } from "./curriculum-data";

export default function CurriculumPage() {
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "BLISS International Academy",
            url: "https://blissinternationalacademy.com",
            description: "Comprehensive curriculum for holistic student development",
          }),
        }}
      />

      <main>
        {/* ── Hero Banner ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a3a52 0%, #2d5a7a 60%, #1e4a62 100%)" }}
          aria-label="Curriculum Hero"
        >
          {/* Dot-grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Glow orbs */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--secondary)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-10 blur-2xl" style={{ background: "var(--accent)" }} />

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link href="/" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                <Home className="h-3 w-3" />
                <span>Home</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-white/30" aria-hidden="true" />
              <Link href="/academics" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                <span>Academics</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-white/30" aria-hidden="true" />
              <span className="text-white/75">Curriculum</span>
            </nav>

            {/* Eyebrow */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--secondary)" }}>
              Educational Excellence
            </p>

            {/* Heading */}
            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Our Curriculum Framework
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              A comprehensive, student-centric curriculum designed to nurture critical thinking, creativity, and character development across all classes.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {overviewStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/15 bg-white/8 px-3 py-3 backdrop-blur-sm"
                >
                  <p className="text-xs text-white/60">{stat.label}</p>
                  <p className="text-lg font-bold text-white mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Curriculum Approach ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--primary)" }}>
              {curriculumApproach.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {curriculumApproach.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curriculumApproach.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{highlight.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Class-wise Curriculum ── */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-12" style={{ color: "var(--primary)" }}>
              Class-Wise Curriculum
            </h2>

            <div className="space-y-4">
              {curriculumData.map((curriculum) => (
                <div
                  key={curriculum.classLevel}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Expandable Header */}
                  <button
                    onClick={() =>
                      setExpandedClass(
                        expandedClass === curriculum.classLevel ? null : curriculum.classLevel
                      )
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-4 text-left flex-1">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: "var(--primary)" }}
                      >
                        {curriculum.classLevel.split(" ").pop()}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {curriculum.classLevel}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Age: {curriculum.ageGroup}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-400 transition-transform ${
                        expandedClass === curriculum.classLevel ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Expandable Content */}
                  {expandedClass === curriculum.classLevel && (
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                        {curriculum.description}
                      </p>

                      {/* Objectives */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-3" style={{ color: "var(--primary)" }}>
                          <Target className="h-4 w-4" />
                          Learning Objectives
                        </h4>
                        <ul className="space-y-2">
                          {curriculum.objectives.map((obj, idx) => (
                            <li key={idx} className="text-xs text-gray-600 dark:text-gray-300 flex gap-2">
                              <span className="text-secondary font-bold">•</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Subjects */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-3" style={{ color: "var(--primary)" }}>
                          <BookOpen className="h-4 w-4" />
                          Subjects ({curriculum.subjects.length})
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {curriculum.subjects.map((subject) => (
                            <div
                              key={subject.code}
                              className="rounded border border-gray-200 dark:border-gray-600 p-3 bg-white dark:bg-gray-800"
                            >
                              <p className="font-semibold text-xs text-gray-900 dark:text-white">
                                {subject.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {subject.description}
                              </p>
                              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                <span className="font-medium">{subject.hoursPerWeek} hrs/week</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Skills */}
                      <div>
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-3" style={{ color: "var(--primary)" }}>
                          <Award className="h-4 w-4" />
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {curriculum.keySkills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                              style={{
                                backgroundColor: "var(--secondary)",
                                color: "white",
                                opacity: 0.9,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-lg p-8 sm:p-12" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Want to Learn More?</h2>
              <p className="text-sm text-white/80 mb-6 max-w-md">
                Explore our other academic programs and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/teaching-medium"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  Teaching Medium
                </Link>
                <Link
                  href="/syllabus"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white text-white font-semibold text-sm hover:bg-white/20 transition-colors"
                >
                  Syllabus Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
