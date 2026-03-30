import { NavNode } from "@/lib/nav-contraint";
import Link from "next/link";

export function ChevronRight() {
  return (
    <svg viewBox="0 0 20 20" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m7 4 6 6-6 6" />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m4 7 6 6 6-6" />
    </svg>
  );
}

export function NestedMenu({ items }: { items: NavNode[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);

        return (
          <li key={item.label} className="group/sub relative">
            <Link
              href={item.href}
              className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm text-foreground/90 transition-[background-color,color,box-shadow] duration-200 hover:bg-white/55 hover:text-foreground hover:shadow-[0_0_0_1px_rgba(43,92,136,0.14),0_6px_14px_rgba(43,92,136,0.12)] dark:hover:bg-white/10 dark:hover:shadow-[0_0_0_1px_rgba(122,171,214,0.22),0_8px_16px_rgba(0,0,0,0.28)]"
            >
              <span>{item.label}</span>
              {hasChildren ? <ChevronRight /> : null}
            </Link>

            {hasChildren ? (
              <div className="invisible absolute top-0 left-full z-50 ml-2 min-w-56 translate-y-1 opacity-0 transition-all duration-150 group-hover/sub:visible group-hover/sub:translate-y-0 group-hover/sub:opacity-100">
                <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-[linear-gradient(165deg,#3f6891_0%,#f1f6fb_55%,#b8d56e_100%)] p-2 shadow-[0_0_0_1px_rgba(94,143,188,0.18),0_20px_48px_rgba(0,0,0,0.16)] backdrop-blur-sm dark:border-primary/30 dark:bg-[linear-gradient(165deg,#30567b_0%,#0f2031_55%,#4a6a2f_100%)] dark:shadow-[0_0_0_1px_rgba(122,171,214,0.18),0_20px_48px_rgba(0,0,0,0.36)]">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_54%,rgba(255,255,255,0.02)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_54%,rgba(255,255,255,0.0)_100%)]" />
                  <div className="relative">
                    <NestedMenu items={item.children!} />
                  </div>
                </div>
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}