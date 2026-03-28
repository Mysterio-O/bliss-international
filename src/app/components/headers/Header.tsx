import Image from "next/image";
import Link from "next/link";
import { ThemeControl } from "@/components/theme-control";
import { navItems } from "@/lib/nav-contraint";
import { ChevronDown, NestedMenu } from "./helpers";


export default function Header() {
  const navGroups = [
    navItems.slice(0, 5),
    navItems.slice(5),
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 isolate hidden border-b border-white/40 bg-[rgba(247,250,252,0.42)] shadow-[0_10px_32px_rgba(8,18,30,0.14)] [backdrop-filter:blur(24px)_saturate(205%)_contrast(114%)_brightness(1.08)] [-webkit-backdrop-filter:blur(24px)_saturate(205%)_contrast(114%)_brightness(1.08)] dark:border-white/15 dark:bg-[rgba(8,18,30,0.5)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.36)] lg:block">
        <div className="mx-auto w-full max-w-screen-2xl px-4">
          <nav className="py-2 lg:flex items-center justify-around" aria-label="Desktop navigation">
          <Link href="/" className="inline-flex items-center rounded-xl p-1" aria-label="Bliss International Academy Home">
            <Image
              src="/logo.webp"
              alt="Bliss International Academy"
              width={190}
              height={60}
              priority
              className="h-10 w-auto object-contain dark:hidden lg:h-11"
            />
            <Image
              src="/logo-dark.webp"
              alt="Bliss International Academy"
              width={190}
              height={60}
              priority
              className="hidden h-10 w-auto object-contain dark:block lg:h-11"
            />
          </Link>
          <div className="flex items-start gap-2">
            {navGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="rounded-2xl border border-white/35 bg-[rgba(247,250,252,0.64)] px-2 py-1.5 shadow-[0_0_0_1px_rgba(94,143,188,0.14),0_10px_24px_rgba(43,92,136,0.12),inset_0_1px_0_rgba(255,255,255,0.45)] [backdrop-filter:blur(18px)_saturate(180%)_contrast(110%)] [-webkit-backdrop-filter:blur(18px)_saturate(180%)_contrast(110%)] dark:border-white/15 dark:bg-[rgba(8,18,30,0.66)] dark:shadow-[0_0_0_1px_rgba(122,171,214,0.18),0_10px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                <ul className="flex items-center gap-1">
                  {group.map((item) => (
                    <li key={item.label} className="group/item relative">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium text-foreground/85 transition-[background-color,color,box-shadow] duration-200 hover:bg-white/70 hover:text-foreground hover:shadow-[0_0_0_1px_rgba(43,92,136,0.14),0_6px_16px_rgba(43,92,136,0.12)] dark:hover:bg-white/10 dark:hover:shadow-[0_0_0_1px_rgba(122,171,214,0.22),0_8px_18px_rgba(0,0,0,0.32)]"
                      >
                        <span>{item.label}</span>
                        {item.children?.length ? <ChevronDown /> : null}
                      </Link>

                      {item.children?.length ? (
                        <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-150 group-hover/item:visible group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:opacity-100">
                          <div className="relative min-w-72 overflow-visible rounded-2xl border border-primary/25 bg-[linear-gradient(165deg,#3f6891_0%,#f1f6fb_55%,#b8d56e_100%)] p-2 shadow-[0_0_0_1px_rgba(94,143,188,0.18),0_20px_48px_rgba(0,0,0,0.16)] backdrop-blur-sm dark:border-primary/30 dark:bg-[linear-gradient(165deg,#30567b_0%,#0f2031_55%,#4a6a2f_100%)] dark:shadow-[0_0_0_1px_rgba(122,171,214,0.18),0_20px_48px_rgba(0,0,0,0.36)]">
                            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_54%,rgba(255,255,255,0.02)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_54%,rgba(255,255,255,0.0)_100%)]" />
                            <div className="relative mb-2 rounded-xl bg-muted/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                              {item.label}
                            </div>
                            <div className="relative">
                              <NestedMenu items={item.children} />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="ml-1 rounded-2xl border border-white/35 bg-[rgba(247,250,252,0.64)] p-1.5 shadow-[0_0_0_1px_rgba(94,143,188,0.14),0_10px_24px_rgba(43,92,136,0.12),inset_0_1px_0_rgba(255,255,255,0.45)] [backdrop-filter:blur(18px)_saturate(180%)_contrast(110%)] [-webkit-backdrop-filter:blur(18px)_saturate(180%)_contrast(110%)] dark:border-white/15 dark:bg-[rgba(8,18,30,0.66)] dark:shadow-[0_0_0_1px_rgba(122,171,214,0.18),0_10px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.2)]">
              <ThemeControl />
            </div>
          </div>
        </nav>
      </div>
      </header>

      <div aria-hidden="true" className="hidden h-18 lg:block" />
    </>
  );
}
