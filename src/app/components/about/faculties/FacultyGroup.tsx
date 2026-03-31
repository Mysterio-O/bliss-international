import { Faculty, ROLE_ORDER } from "./constants";
import { FacultyCard } from "./FacultyCard";

type FacultyGroupProps = {
    faculties: Faculty[];
};

const FEATURED_ROLES = ["Principal", "Academic Coordinator", "Preschool In-charge", "Arabic & Hifz Coordinator"];

export function FacultyGroup({ faculties }: FacultyGroupProps) {
    // Sort faculties by role priority
    const sorted = [...faculties].sort((a, b) => {
        const ai = ROLE_ORDER.indexOf(a.role);
        const bi = ROLE_ORDER.indexOf(b.role);
        return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

    // Group by role
    const groups = sorted.reduce<Record<string, Faculty[]>>((acc, f) => {
        if (!acc[f.role]) acc[f.role] = [];
        acc[f.role].push(f);
        return acc;
    }, {});

    const orderedRoles = ROLE_ORDER.filter((r) => groups[r]);
    // Add any roles not in ROLE_ORDER
    Object.keys(groups).forEach((r) => {
        if (!orderedRoles.includes(r)) orderedRoles.push(r);
    });

    return (
        <div className="space-y-10">
            {orderedRoles.map((role) => {
                const members = groups[role];
                const isFeatured = FEATURED_ROLES.includes(role);
                return (
                    <section key={role}>
                        <div className="mb-5 flex items-center gap-3">
                            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent dark:from-border/50" />
                            <span className="rounded-xl border border-primary/20 bg-primary/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary dark:bg-primary/12">
                                {role}
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent dark:from-border/50" />
                        </div>

                        <div
                            className={`grid gap-4 ${isFeatured
                                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                }`}
                        >
                            {members.map((faculty) => (
                                <FacultyCard
                                    key={faculty.name}
                                    faculty={faculty}
                                    featured={isFeatured}
                                />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}