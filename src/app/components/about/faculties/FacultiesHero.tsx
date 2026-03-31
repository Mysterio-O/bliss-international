export function FacultiesHero() {
    return (
        <section className="relative overflow-hidden py-16 md:py-20">
            {/* Background decorations matching site theme */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -top-24 -right-24 size-96 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" />
                <div className="absolute -bottom-16 -left-16 size-72 rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/8" />
                <div className="absolute left-1/2 top-0 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className="mx-auto max-w-screen-2xl px-4 text-center">
                {/* Breadcrumb badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/6 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary dark:bg-primary/12">
                    <span className="size-1.5 rounded-full bg-secondary" />
                    Our Faculties
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    Meet Our{" "}
                    <span className="relative">
                        <span className="relative z-10 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:to-secondary">
                            Dedicated
                        </span>
                        {/* Underline accent */}
                        <span
                            aria-hidden="true"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary/60 via-secondary/80 to-primary/30"
                        />
                    </span>{" "}
                    Faculty
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                    Experienced educators committed to nurturing intellect, character, and faith across both our campuses.
                </p>
            </div>
        </section>
    );
}