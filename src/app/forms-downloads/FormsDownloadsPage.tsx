'use client';

import { ChevronRight, Home, Download, FileText, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { formsAndDownloads, downloadInstructions, helpfulInfo } from "./forms-downloads-data";

export default function FormsDownloadsPage() {
  const [activeCampus, setActiveCampus] = useState<'Satkhira' | 'Debhata'>('Satkhira');

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf':
        return '📄';
      case 'doc':
        return '📝';
      case 'xlsx':
        return '📊';
      default:
        return '📄';
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "BLISS International Academy",
            description: "Campus-wise forms and downloadable resources",
          }),
        }}
      />

      <main>
        {/* ── Hero Banner ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #2b3e52 0%, #4a5a7a 60%, #3a4a62 100%)" }}
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
              <span className="text-white/75">Forms & Downloads</span>
            </nav>

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--secondary)" }}>
              Resources & Documents
            </p>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Forms & Downloads
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              Download admission forms, policies, syllabi, and other important documents for your campus.
            </p>
          </div>
        </section>

        {/* ── Campus Selection & Downloads ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          {/* Campus Buttons */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--primary)" }}>
              Select Campus
            </h2>
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {(['Satkhira', 'Debhata'] as const).map((campus) => (
                <button
                  key={campus}
                  onClick={() => setActiveCampus(campus)}
                  className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                    activeCampus === campus
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {campus} Campus
                </button>
              ))}
            </div>
          </div>

          {/* Downloads by Campus */}
          <div className="space-y-8">
            {formsAndDownloads[activeCampus].map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "var(--primary)" }}>
                  <span className="text-2xl">{category.icon}</span>
                  {category.category}
                </h3>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl">{getFileIcon(item.fileType)}</span>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {item.fileType.toUpperCase()} • {item.fileSize}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                        {item.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          Updated: {new Date(item.dateUpdated).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => {
                            // In production, this would trigger actual download
                            alert(`Downloading: ${item.title}`);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded bg-primary text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                        >
                          <Download className="h-3 w-3" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Download Instructions ── */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>
              How to Download
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {downloadInstructions.map((instruction, idx) => (
                <div key={idx} className="rounded-lg bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-2">
                    {instruction.step}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {instruction.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Helpful Information ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>
            Helpful Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {helpfulInfo.map((info, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-6"
              >
                <h3 className="font-bold text-sm mb-2 flex items-center gap-2" style={{ color: "var(--primary)" }}>
                  <HelpCircle className="h-5 w-5" />
                  {info.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-lg p-8 sm:p-12" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
            <div className="flex flex-col items-center text-center">
              <FileText className="h-12 w-12 text-white mb-3" />
              <h2 className="text-2xl font-bold text-white mb-3">Can't Find What You Need?</h2>
              <p className="text-sm text-white/80 mb-6 max-w-md">
                Contact our admission office for specific documents or assistance.
              </p>
              <a
                href="mailto:admission@blissacademy.edu"
                className="inline-flex items-center px-6 py-2 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
