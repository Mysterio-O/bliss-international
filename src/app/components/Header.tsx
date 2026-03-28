import React from "react";
import { ThemeControl } from "@/components/theme-control";

const rolePills = [
  { label: "Admin", swatchClass: "bg-role-admin" },
  { label: "Teacher", swatchClass: "bg-role-teacher" },
  { label: "Student", swatchClass: "bg-role-student" },
  { label: "Parent", swatchClass: "bg-role-parent" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Bliss International
            </p>
            <h1 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              Academy Digital Platform
            </h1>
          </div>
          <ThemeControl />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {rolePills.map((role) => (
            <span
              key={role.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-card-foreground"
            >
              <span className={`size-2.5 rounded-full ${role.swatchClass}`} aria-hidden="true" />
              {role.label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
