'use client';

import { ChevronRight, Home, Check, BookOpen, Users, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { teachingMediumData, mediumComparison, teachingMethodology, supportSystems } from "./teaching-medium-data";

export default function TeachingMediumPage() {
  const [selectedMedium, setSelectedMedium] = useState<'English' | 'Bengali'>('English');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "BLISS International Academy",
            description: "English and Bengali medium education with modern pedagogy",
          }),
        }}
      />

      <main>
        {/* ── Hero Banner ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a4d2e 0%, #2d7a45 60%, #1e5c38 100%)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: "var(--secondary)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full opacity-10 blur-2xl" style={{ background: "var(--accent)" }} />

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link href="/" className="flex items-center gap-1 hover:text-white/80">
                <Home className="h-3 w-3" />
                <span>Home</span>
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/75">Teaching Medium</span>
            </nav>

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--secondary)" }}>
              Academic Excellence
            </p>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Teaching Medium & Methodology
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              Choose between English and Bengali medium education, both designed to meet international standards while preserving cultural values.
            </p>
          </div>
        </section>

        {/* ── Medium Overview ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--primary)" }}>
              Select Medium
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {(['English', 'Bengali'] as const).map((medium) => (
                <button
                  key={medium}
                  onClick={() => setSelectedMedium(medium)}
                  className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                    selectedMedium === medium
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {medium} Medium
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {teachingMediumData.map((medium) => {
              if (medium.medium !== selectedMedium) return null;
              return (
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8">
                  <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--primary)" }}>
                    {medium.medium} Medium
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {medium.description}
                  </p>

                  {/* Subjects */}
                  <div className="mt-8">
                    <h3 className="font-bold text-sm mb-4 flex items-center gap-2" style={{ color: "var(--primary)" }}>
                      <BookOpen className="h-4 w-4" />
                      Subjects Offered
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {medium.subjects.map((subject) => (
                        <div key={subject} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <Check className="h-4 w-4" style={{ color: "var(--secondary)" }} />
                          <span>{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Approach */}
                  <div className="mt-8">
                    <h3 className="font-bold text-sm mb-4 flex items-center gap-2" style={{ color: "var(--primary)" }}>
                      <Lightbulb className="h-4 w-4" />
                      Our Approach
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                      {medium.approach}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mt-8">
                    <h3 className="font-bold text-sm mb-4 flex items-center gap-2" style={{ color: "var(--primary)" }}>
                      <Check className="h-4 w-4" style={{ color: "var(--secondary)" }} />
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {medium.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex gap-3">
                          <span className="text-secondary font-bold flex-shrink-0 mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 inline-block px-4 py-2 rounded-full text-xs font-semibold" style={{ backgroundColor: "var(--secondary)", color: "white" }}>
                    {medium.classesOffered}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>
              Medium Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-sm font-bold" style={{ color: "var(--primary)" }}>
                      Aspect
                    </th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-sm font-bold" style={{ color: "var(--primary)" }}>
                      English Medium
                    </th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-sm font-bold" style={{ color: "var(--primary)" }}>
                      Bengali Medium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mediumComparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                        {row.aspect}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                        {row.english}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                        {row.bengali}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Teaching Methodology ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--primary)" }}>
              {teachingMethodology.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
              We employ innovative pedagogical approaches to ensure effective learning outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teachingMethodology.methods.map((method) => (
              <div
                key={method.name}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="font-bold mb-2 text-gray-900 dark:text-white text-sm">
                  {method.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Support Systems ── */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>
              Student Support Systems
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {supportSystems.map((system) => (
                <div
                  key={system.title}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6"
                >
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <Users className="h-5 w-5" style={{ color: "var(--primary)" }} />
                    {system.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {system.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
