'use client';

import { ChevronRight, Home, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { syllabusList, assessmentSchedule } from "./syllabus-data";

export default function SyllabusPage() {
  const [selectedSubject, setSelectedSubject] = useState(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "BLISS International Academy",
            description: "Detailed syllabi for all subjects and classes",
          }),
        }}
      />

      <main>
        {/* ── Hero Banner ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #3a2e52 0%, #5a4d7a 60%, #4a3e62 100%)" }}
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

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/50">
              <Link href="/" className="flex items-center gap-1 hover:text-white/80">
                <Home className="h-3 w-3" />
                <span>Home</span>
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/75">Syllabus</span>
            </nav>

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--secondary)" }}>
              Academic Standards
            </p>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Subject-wise Syllabi
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              Detailed syllabi for all subjects with units, topics, learning outcomes, and evaluation patterns.
            </p>
          </div>
        </section>

        {/* ── Syllabus Details ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--primary)" }}>
              Select Subject
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {syllabusList.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSubject(idx)}
                  className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all ${
                    selectedSubject === idx
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.subject}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {(() => {
              const syllabus = syllabusList[selectedSubject];
              return (
                <>
                  {/* Subject Header */}
                  <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8">
                  <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                    {syllabus.subject}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Code: <span className="font-semibold">{syllabus.subjectCode}</span> | Class: <span className="font-semibold">{syllabus.classLevel}</span>
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Total Marks</p>
                      <p className="text-lg font-bold" style={{ color: "var(--primary)" }}>
                        {syllabus.totalMarks}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Exam Duration</p>
                      <p className="text-lg font-bold" style={{ color: "var(--secondary)" }}>
                        {syllabus.examDuration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Coverage</p>
                      <p className="text-lg font-bold" style={{ color: "var(--accent)" }}>
                        {syllabus.syllabusCoverage}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Units</p>
                      <p className="text-lg font-bold">{syllabus.units.length}</p>
                    </div>
                  </div>
                </div>

                {/* Units & Topics */}
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: "var(--primary)" }}>
                    Units & Topics
                  </h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {syllabus.units.map((unit, uIdx) => (
                      <AccordionItem key={uIdx} value={`unit-${uIdx}`} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                        <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/30">
                          <span className="font-semibold text-sm text-gray-900 dark:text-white">
                            {unit.unit}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-4 bg-gray-50 dark:bg-gray-700/20">
                          <div className="space-y-3">
                            {unit.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="border-l-2 border-secondary pl-4">
                                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                                  {topic.name}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                  Duration: <span className="font-medium">{topic.duration}</span>
                                </p>
                                {topic.chapters && (
                                  <div className="mb-2">
                                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                      Chapters/Topics:
                                    </p>
                                    <ul className="space-y-1">
                                      {topic.chapters.map((ch, cIdx) => (
                                        <li key={cIdx} className="text-xs text-gray-600 dark:text-gray-400 flex gap-2">
                                          <CheckCircle className="h-3 w-3 text-secondary flex-shrink-0 mt-0.5" />
                                          {ch}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {topic.learningOutcomes && (
                                  <div>
                                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                      Learning Outcomes:
                                    </p>
                                    <ul className="space-y-1">
                                      {topic.learningOutcomes.map((lo, loIdx) => (
                                        <li key={loIdx} className="text-xs text-gray-600 dark:text-gray-400 flex gap-2">
                                          <CheckCircle className="h-3 w-3 text-secondary flex-shrink-0 mt-0.5" />
                                          {lo}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Evaluation Pattern */}
                <div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: "var(--primary)" }}>
                    Evaluation Pattern
                  </h3>
                  <div className="space-y-2">
                    {syllabus.evaluationPattern.map((pattern, pIdx) => (
                      <div key={pIdx} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                            {pattern.category}
                          </h4>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "var(--secondary)", color: "white" }}>
                            {pattern.marks} marks
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {pattern.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* ── Assessment Schedule ── */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>
              Assessment Schedule
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {assessmentSchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {item.event}
                    </h3>
                    <BookOpen className="h-5 w-5" style={{ color: "var(--primary)" }} />
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-semibold">Marks:</span> {item.marks}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Timing:</span> {item.timing}
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
