"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Language } from "@/app/types/about/types";
import {
  CampusId,
  paymentOfficerProfiles,
  paymentProcedureCopy,
} from "./paymentProcedureData";

interface PaymentProcedureSectionProps {
  language: Language;
}

export default function PaymentProcedureSection({ language }: PaymentProcedureSectionProps) {
  const [activeCampus, setActiveCampus] = useState<CampusId>("satkhira");
  const [submitted, setSubmitted] = useState(false);
  const isArabic = language === "ar";

  const copy = paymentProcedureCopy[language];
  const profile = paymentOfficerProfiles[activeCampus][language];

  const paymentMethods = useMemo(
    () => [copy.demo.methods.bkash, copy.demo.methods.nagad, copy.demo.methods.bank],
    [copy.demo.methods.bank, copy.demo.methods.bkash, copy.demo.methods.nagad]
  );

  const handleDemoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2200);
  };

  return (
    <section className="py-4 bg-background" dir={isArabic ? "rtl" : "ltr"} aria-label="Payment Procedure">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className={cn("mb-10 md:mb-12", isArabic ? "text-right" : "text-center")}>
          <div
            className={cn(
              "flex items-center gap-3 mb-4",
              isArabic ? "justify-end flex-row-reverse" : "justify-center"
            )}
          >
            <div className="h-px w-10 md:w-12 bg-secondary" />
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">{copy.sectionLabel}</span>
            <div className="h-px w-10 md:w-12 bg-secondary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">{copy.sectionTitle}</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">{copy.sectionSubtitle}</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-full p-1">
            {(Object.keys(copy.campusTabs) as CampusId[]).map((campusId) => (
              <button
                key={campusId}
                onClick={() => setActiveCampus(campusId)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200",
                  activeCampus === campusId
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={activeCampus === campusId}
              >
                {copy.campusTabs[campusId]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <article className="lg:col-span-7 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-3">{copy.officerCardTitle}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{profile.campusTitle}</h3>

            <p className="text-muted-foreground mb-4">
              {profile.contactIntro} <span className="font-semibold text-foreground">{profile.officeName}</span>
            </p>

            <div className="space-y-1 mb-5">
              <p className="text-xl font-bold text-primary">{profile.officerName}</p>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
            </div>

            <ul className="space-y-2 mb-6">
              {profile.qualifications.map((qualification, index) => (
                <li key={`${profile.officerName}-${index}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{profile.contactNoLabel}</p>
                <p className="font-semibold text-foreground">{profile.contactNo}</p>
              </div>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{profile.emailLabel}</p>
                <p className="font-semibold text-foreground break-all">{profile.email}</p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-background/70 p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{profile.officeHoursLabel}</p>
              <p className="font-semibold text-foreground">{profile.officeHours}</p>
            </div>
          </article>

          <aside className="lg:col-span-5 rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
            <div className="relative h-64 sm:h-80 lg:h-full min-h-80">
              <Image src={profile.imageSrc} alt={profile.imageAlt} fill className="object-cover" priority={activeCampus === "satkhira"} />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/45 backdrop-blur-sm border border-white/20 p-3">
                <p className="text-white text-sm font-semibold">{profile.campusTitle}</p>
                <p className="text-white/85 text-xs">{profile.officeHoursLabel}: {profile.officeHours}</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 md:mt-12 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <div className={cn("mb-6", isArabic ? "text-right" : "") }>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{copy.demo.title}</h3>
            <p className="text-muted-foreground">{copy.demo.subtitle}</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleDemoSubmit}>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">{copy.demo.payerName}</span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary"
                placeholder={copy.demo.payerName}
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">{copy.demo.studentId}</span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary"
                placeholder="BIA-2026-001"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">{copy.demo.classLabel}</span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary"
                placeholder="Class 3"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">{copy.demo.amount}</span>
              <input
                type="number"
                min="1"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary"
                placeholder="2500"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">{copy.demo.paymentMethod}</span>
              <select
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary"
                defaultValue=""
              >
                <option value="" disabled>
                  {copy.demo.paymentMethod}
                </option>
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">{copy.demo.transactionId}</span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground outline-none transition focus:border-primary"
                placeholder="TXN-987654"
              />
            </label>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex justify-center items-center rounded-xl bg-primary text-primary-foreground px-5 py-2.5 font-semibold transition hover:opacity-90"
              >
                {copy.demo.submit}
              </button>
              <p className="text-xs text-muted-foreground">{copy.demo.note}</p>
            </div>

            {submitted ? (
              <div className="md:col-span-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
                {copy.demo.success}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
