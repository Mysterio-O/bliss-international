import { Faculty } from "./constants";
import { FacultyAvatar } from "./FacultyAvatar";

type FacultyCardProps = {
    faculty: Faculty;
    featured?: boolean;
};

export function FacultyCard({ faculty, featured = false }: FacultyCardProps) {
    return (
        <div
            className={`group relative flex flex-col gap-4 rounded-2xl border p-5 transition-all duration-300
        hover:shadow-[0_8px_32px_rgba(43,92,136,0.14),0_0_0_1px_rgba(43,92,136,0.12)]
        dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.36),0_0_0_1px_rgba(122,171,214,0.18)]
        ${featured
                    ? "border-primary/30 bg-gradient-to-br from-white via-[#f1f6fb] to-[#e8f3e0] dark:border-primary/25 dark:bg-gradient-to-br dark:from-[#102235] dark:via-[#0f2031] dark:to-[#13271d] col-span-full sm:col-span-2 lg:col-span-1"
                    : "border-border/60 bg-white/80 dark:border-border/40 dark:bg-[#0d1e2e]/80"
                }
        backdrop-blur-sm`}
        >
            {/* Top accent line for featured */}
            {featured && (
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-primary via-secondary to-primary/50" />
            )}

            <div className="flex items-start gap-4">
                <FacultyAvatar
                    name={faculty.name}
                    image={faculty.image}
                    size={featured ? "lg" : "md"}
                />

                <div className="min-w-0 flex-1 pt-1">
                    <h3 className={`font-semibold leading-snug text-foreground ${featured ? "text-lg" : "text-base"}`}>
                        {faculty.name}
                    </h3>
                    <span className="mt-1 inline-block rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary dark:bg-primary/20 dark:text-primary">
                        {faculty.role}
                    </span>
                </div>
            </div>

            {/* Qualification */}
            <div className="space-y-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    Qualification
                </p>
                <ul className="space-y-1">
                    {faculty.qualification.map((q, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-foreground/75 dark:text-foreground/70">
                            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-secondary" />
                            <span>{q}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            {(faculty.email || faculty.mobile) && (
                <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/40 pt-3 dark:border-border/20">
                    {faculty.mobile && faculty.mobile !== "0" && (
                        <a
                            href={`tel:+88${faculty.mobile}`}
                            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                        >
                            <PhoneIcon />
                            {faculty.mobile}
                        </a>
                    )}
                    {faculty.email && (
                        <a
                            href={`mailto:${faculty.email}`}
                            className="inline-flex items-center gap-1.5 truncate text-xs text-muted-foreground transition-colors hover:text-primary"
                        >
                            <MailIcon />
                            <span className="truncate">{faculty.email}</span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 20 20" className="size-3.5 shrink-0" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg viewBox="0 0 20 20" className="size-3.5 shrink-0" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
    );
}