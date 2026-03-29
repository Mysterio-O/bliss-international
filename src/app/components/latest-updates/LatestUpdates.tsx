import LatestUpdateHeading from './LatestUpdateHeading';
import LatestUpdatesAccordion from './LatestUpdatesAccordion';

export default function LatestUpdates() {

    return (
        <section
            aria-labelledby="our latest updates-heading"
            className="w-full py-14 md:py-20 overflow-hidden"
            style={{ background: "var(--background)" }}
        >
            <div className="relative">
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-64 -translate-y-1/2"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--primary) 7%, transparent), transparent)",
                    }}
                    aria-hidden="true"
                />

                <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* ── Section heading ── */}
                    <LatestUpdateHeading />

                    {/* ── Accordion with updates ── */}
                    <div className="mx-auto max-w-3xl">
                        <LatestUpdatesAccordion />
                    </div>

                </div>

            </div>
        </section>
    )
}
