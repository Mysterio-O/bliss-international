"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Grid2x2, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { navItems as desktopNavItems, type NavNode } from "@/lib/nav-contraint";
import { cn } from "@/lib/utils";

type RootMobileItem = {
  node: NavNode;
  label: string;
  href: string;
  icon: ReactNode;
};

type PanelState =
  | { type: "closed" }
  | { type: "more" }
  | { type: "subnav"; item: RootMobileItem; fromMore: boolean };

function getNavIcon(label: string) {
  const normalized = label.toLowerCase();

  if (normalized.includes("about")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 10.5v5M12 8h.01" />
      </svg>
    );
  }

  if (normalized.includes("admission")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="4" width="14" height="16" rx="2.5" />
        <path d="M8.5 9h7M8.5 13h7" />
      </svg>
    );
  }

  if (normalized.includes("academic")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3.5 7.5 12 4l8.5 3.5L12 11 3.5 7.5Z" />
        <path d="M7 10v4.8C7 16.7 9.2 18 12 18s5-1.3 5-3.2V10" />
      </svg>
    );
  }

  if (normalized.includes("results")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 18V8" />
        <path d="M10 18V11" />
        <path d="M15 18V6" />
        <path d="M20 18V13" />
      </svg>
    );
  }

  if (normalized.includes("login")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M10 7V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2" />
        <path d="M3 12h11" />
        <path d="m9 8 4 4-4 4" />
      </svg>
    );
  }

  if (normalized.includes("contact")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4z" />
        <path d="m4.5 7 7.5 6L19.5 7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 9h8M8 12h8M8 15h5" />
    </svg>
  );
}

function toMobileHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { isMobile } = useIsMobile();
  const { resolvedTheme, setTheme } = useTheme();
  const [hash, setHash] = useState("");
  const [panel, setPanel] = useState<PanelState>({ type: "closed" });

  const topLevelItems: RootMobileItem[] = useMemo(
    () =>
      desktopNavItems.map((item) => ({
        node: item,
        label: item.label,
        href: item.href,
        icon: getNavIcon(item.label),
      })),
    []
  );

  const primaryItems = topLevelItems.slice(0, 4);
  const moreItems = topLevelItems.slice(4);

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash || "");
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isDarkTheme = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const isItemActive = (href: string) => {
    if (href.startsWith("#")) {
      return hash === href;
    }

    return pathname === href;
  };

  const isBranchActive = (item: NavNode): boolean => {
    if (isItemActive(item.href)) {
      return true;
    }

    return Boolean(item.children?.some((child) => isBranchActive(child)));
  };

  const openPrimarySubnav = (item: RootMobileItem) => {
    setPanel({ type: "subnav", item, fromMore: false });
  };

  const openMoreSubnav = (item: RootMobileItem) => {
    setPanel({ type: "subnav", item, fromMore: true });
  };

  const closePanel = () => {
    setPanel({ type: "closed" });
  };

  const popupPanelClass =
    "absolute right-2 bottom-full left-2 z-50 mb-2 overflow-hidden rounded-2xl border border-primary/20 bg-[#eef4fb] p-2 shadow-[0_24px_56px_rgba(0,0,0,0.28)] dark:border-white/15 dark:bg-[#0b1a2b]";

  const renderSubtree = (nodes: NavNode[], depth = 0): ReactNode => {
    return nodes.map((node) => {
      const active = isBranchActive(node);

      return (
        <div key={`${node.label}-${node.href}`} className={cn("space-y-1", depth > 0 && "pl-3")}>
          <Link
            href={toMobileHref(node.href)}
            onClick={closePanel}
            className={cn(
              "flex items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors",
              active ? "bg-card text-foreground" : "text-foreground/85 hover:bg-card/70"
            )}
          >
            <span className="truncate">{node.label}</span>
            {node.children?.length ? (
              <svg viewBox="0 0 20 20" className="size-3 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="m7 4 6 6-6 6" />
              </svg>
            ) : null}
          </Link>
          {node.children?.length ? <div className="space-y-1">{renderSubtree(node.children, depth + 1)}</div> : null}
        </div>
      );
    });
  };

  if (!isMobile) {
    return null;
  }

  return (
    <nav
      className="pointer-events-none fixed inset-x-0 bottom-[max(0.65rem,env(safe-area-inset-bottom))] z-50 flex justify-center px-4"
      aria-label="Primary mobile navigation"
    >
      <div className="pointer-events-auto relative z-50 w-full max-w-md overflow-visible rounded-[1.6rem] border border-border/70 bg-background/60 p-1 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl supports-backdrop-filter:bg-background/50">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.02))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />

        {panel.type === "more" ? (
          <div className={popupPanelClass}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-12 left-1/2 size-44 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.54)_0%,rgba(255,255,255,0.2)_38%,rgba(255,255,255,0)_74%)] blur-xl dark:bg-[radial-gradient(circle,rgba(122,171,214,0.28)_0%,rgba(122,171,214,0.08)_38%,rgba(122,171,214,0)_74%)]" />
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.1)_52%,rgba(255,255,255,0.03)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_52%,rgba(255,255,255,0)_100%)]" />
            </div>
            <div className="mb-2 flex items-center justify-between px-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">More Sections</p>
              <button
                type="button"
                onClick={closePanel}
                className="rounded-md px-2 py-1 text-[11px] font-medium text-muted-foreground hover:bg-card/60 hover:text-foreground"
              >
                Close
              </button>
            </div>
            <div className="relative grid grid-cols-2 gap-1">
              {moreItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => openMoreSubnav(item)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition-colors",
                    isBranchActive(item.node) ? "bg-card text-foreground" : "text-foreground/85 hover:bg-card/70"
                  )}
                >
                  <span className="text-primary">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-2 border-t border-border/60 pt-2">
              <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Theme</p>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex w-full items-center justify-between rounded-xl border border-border/70 bg-card/70 px-3 py-2 text-left text-xs font-medium text-foreground transition-colors hover:bg-card"
                aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
              >
                <span className="inline-flex items-center gap-2">
                  {isDarkTheme ? (
                    <Sparkles className="size-4" />
                  ) : (
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M21 12.9A9 9 0 1 1 11.1 3a7 7 0 1 0 9.9 9.9Z" />
                    </svg>
                  )}
                  <span>{isDarkTheme ? "Light Mode" : "Dark Mode"}</span>
                </span>
                <span className="text-muted-foreground">Toggle</span>
              </button>
            </div>
          </div>
        ) : null}

        {panel.type === "subnav" ? (
          <div className={popupPanelClass}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-12 left-1/2 size-44 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.54)_0%,rgba(255,255,255,0.2)_38%,rgba(255,255,255,0)_74%)] blur-xl dark:bg-[radial-gradient(circle,rgba(122,171,214,0.28)_0%,rgba(122,171,214,0.08)_38%,rgba(122,171,214,0)_74%)]" />
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.1)_52%,rgba(255,255,255,0.03)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_52%,rgba(255,255,255,0)_100%)]" />
            </div>
            <div className="mb-2 flex items-center justify-between gap-2 px-1">
              <div className="inline-flex items-center gap-2">
                <span className="text-primary">{panel.item.icon}</span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{panel.item.label}</p>
              </div>
              <div className="flex items-center gap-1">
                {panel.fromMore ? (
                  <button
                    type="button"
                    onClick={() => setPanel({ type: "more" })}
                    className="rounded-md px-2 py-1 text-[11px] font-medium text-muted-foreground hover:bg-card/60 hover:text-foreground"
                  >
                    Back
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={closePanel}
                  className="rounded-md px-2 py-1 text-[11px] font-medium text-muted-foreground hover:bg-card/60 hover:text-foreground"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="relative space-y-1">
              <Link
                href={toMobileHref(panel.item.href)}
                onClick={closePanel}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                  isItemActive(panel.item.href) ? "bg-card text-foreground" : "text-foreground/85 hover:bg-card/70"
                )}
              >
                {panel.item.label} Overview
              </Link>
              {panel.item.node.children?.length ? <div className="space-y-1">{renderSubtree(panel.item.node.children)}</div> : null}
            </div>
          </div>
        ) : null}

        <div className="relative grid grid-cols-5 gap-1">
          {primaryItems.map((item, index) => {
            const isActive =
              panel.type === "subnav" && panel.item.label === item.label ? true : isBranchActive(item.node);
            const roleAccent =
              index === 0
                ? "text-role-admin"
                : index === 1
                  ? "text-role-teacher"
                  : index === 2
                    ? "text-role-student"
                    : index === 3
                      ? "text-role-parent"
                      : "text-accent";

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => openPrimarySubnav(item)}
                className={cn(
                  "group flex min-h-11 flex-col items-center justify-center gap-1 rounded-[1.15rem] px-1 py-1.5 transition-all duration-200",
                  isActive
                    ? "bg-card/90 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
                    : "text-muted-foreground hover:bg-card/60"
                )}
              >
                <span className={cn("transition-colors", isActive ? roleAccent : "text-muted-foreground")}>{item.icon}</span>
                <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
                <span
                  className={cn(
                    "h-0.5 w-4 rounded-full transition-all",
                    isActive ? "bg-primary opacity-100" : "bg-transparent opacity-0"
                  )}
                  aria-hidden="true"
                />
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setPanel((current) => (current.type === "more" ? { type: "closed" } : { type: "more" }))}
            className={cn(
              "group flex min-h-11 flex-col items-center justify-center gap-1 rounded-[1.15rem] px-1 py-1.5 transition-all duration-200",
              panel.type === "more"
                ? "bg-card/90 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
                : "text-muted-foreground hover:bg-card/60"
            )}
            aria-expanded={panel.type === "more"}
            aria-label="Open more menu sections"
          >
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/30">
              <Grid2x2 className="size-3.5" />
            </span>
            <span className="text-[10px] font-medium tracking-wide">More</span>
            <span
              className={cn(
                "h-0.5 w-4 rounded-full transition-all",
                panel.type === "more" ? "bg-primary opacity-100" : "bg-transparent opacity-0"
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
