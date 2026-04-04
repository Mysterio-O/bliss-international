'use client';

import { ChevronRight, Home, Users, Award, Calendar, MapPin, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ClubData } from "./clubs-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ClubPageProps {
  clubData: ClubData;
}

export default function ClubPage({ clubData }: ClubPageProps) {
  const [activeTab, setActiveTab] = useState<'activities' | 'achievements'>('activities');

  const allClubs = [
    { name: 'Language Club', href: '/bliss-club/language-club' },
    { name: 'Debating Club', href: '/bliss-club/debating-club' },
    { name: 'Science Club', href: '/bliss-club/science-club' },
    { name: 'Art Club', href: '/bliss-club/art-club' },
    { name: 'Cultural Club', href: '/bliss-club/cultural-club' },
    { name: 'Sports Club', href: '/bliss-club/sports-club' },
    { name: 'ICT Club', href: '/bliss-club/ict-club' },
  ];

  const getGradientColor = (clubName: string) => {
    const gradients: { [key: string]: string } = {
      'Language Club': 'linear-gradient(135deg, #1a3a52 0%, #2d5a7a 60%, #1e4a62 100%)',
      'Debating Club': 'linear-gradient(135deg, #2b3e52 0%, #4a5a7a 60%, #3a4a62 100%)',
      'Science Club': 'linear-gradient(135deg, #1a4d2e 0%, #2d7a45 60%, #1e5c38 100%)',
      'Art Club': 'linear-gradient(135deg, #3a2e52 0%, #5a4d7a 60%, #4a3e62 100%)',
      'Cultural Club': 'linear-gradient(135deg, #4a2e2e 0%, #7a4d4d 60%, #5c3e3e 100%)',
      'Sports Club': 'linear-gradient(135deg, #2e4a1a 0%, #4d7a2d 60%, #3e5c1e 100%)',
      'ICT Club': 'linear-gradient(135deg, #1a2e52 0%, #2d4d7a 60%, #1e3e62 100%)',
    };
    return gradients[clubName] || 'linear-gradient(135deg, #1a3a52 0%, #2d5a7a 60%)';
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Club",
            name: clubData.name,
            description: clubData.description,
            motto: clubData.motto,
          }),
        }}
      />

      <main>
        {/* ── Hero Banner ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: getGradientColor(clubData.name) }}
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
              <Link href="/bliss-club" className="flex items-center gap-1 hover:text-white/80">
                <span>BLISS Clubs</span>
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/75">{clubData.name}</span>
            </nav>

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--secondary)" }}>
              BLISS Clubs
            </p>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {clubData.name}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 italic">
              "{clubData.motto}"
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2">
                <p className="text-xs text-white/60">Coordinator</p>
                <p className="text-sm font-semibold text-white">{clubData.coordinator}</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2">
                <p className="text-xs text-white/60">Meeting Schedule</p>
                <p className="text-sm font-semibold text-white">{clubData.meetingSchedule}</p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2">
                <p className="text-xs text-white/60">Location</p>
                <p className="text-sm font-semibold text-white">{clubData.clubRoom}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Club Overview ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8">
              <Target className="h-8 w-8 mb-3" style={{ color: "var(--primary)" }} />
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Objective</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {clubData.objective}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8">
              <BookOpen className="h-8 w-8 mb-3" style={{ color: "var(--secondary)" }} />
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Description</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {clubData.description}
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8">
              <Users className="h-8 w-8 mb-3" style={{ color: "var(--accent)" }} />
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Membership</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Open to all interested students of Class V onwards
              </p>
            </div>
          </div>

          {/* Student Coordinators */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--primary)" }}>
              Student Leadership
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {clubData.studentCoordinators.map((member, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold" style={{ color: "var(--secondary)" }}>
                    {member.position}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {member.class}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Activities & Achievements ── */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('activities')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    activeTab === 'activities'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  Activities
                </button>
                <button
                  onClick={() => setActiveTab('achievements')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    activeTab === 'achievements'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  Achievements
                </button>
              </div>

              {activeTab === 'activities' && (
                <div className="space-y-4">
                  {clubData.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {activity.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "var(--secondary)", color: "white" }}>
                          <Calendar className="h-3 w-3 mr-1" />
                          {activity.frequency}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {activity.description}
                      </p>
                      {activity.outcomes && (
                        <div className="flex flex-wrap gap-2">
                          {activity.outcomes.map((outcome, oIdx) => (
                            <span
                              key={oIdx}
                              className="inline-flex items-center px-2 py-1 rounded text-xs text-gray-700 dark:text-gray-300"
                              style={{ backgroundColor: "rgba(163, 203, 63, 0.1)" }}
                            >
                              {outcome}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {clubData.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <Award className="h-6 w-6 flex-shrink-0" style={{ color: "var(--accent)" }} />
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                          {achievement.year}
                        </p>
                        <span className="text-xs font-bold px-2 py-1 rounded" style={{ backgroundColor: "var(--primary)", color: "white" }}>
                          {achievement.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Membership Requirements ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>
            Membership Requirements
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {clubData.membershipRequirements.map((req, idx) => (
              <div
                key={idx}
                className="rounded-lg border-l-4 border-secondary bg-blue-50 dark:bg-blue-900/20 p-6"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  {idx + 1}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {req}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Other Clubs Navigation ── */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--primary)" }}>
              Explore Other Clubs
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {allClubs
                .filter((club) => club.name !== clubData.name)
                .map((club) => (
                  <Link
                    key={club.name}
                    href={club.href}
                    className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 hover:shadow-md hover:border-secondary transition-all group"
                  >
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-secondary transition-colors">
                      {club.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Explore →
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-lg p-8 sm:p-12" style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Ready to Join?</h2>
              <p className="text-sm text-white/80 mb-6 max-w-md">
                Come visit us during club hours or contact the coordinator for more information.
              </p>
              <a
                href="mailto:clubs@blissacademy.edu"
                className="inline-flex items-center px-6 py-2 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Contact Club
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
