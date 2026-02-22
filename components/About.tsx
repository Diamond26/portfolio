"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * About — biografia tecnica + card evidenza.
 */
export default function About() {
    const { t } = useLanguage();

    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="section-padding mx-auto max-w-6xl"
        >
            <div className="mb-12">
                <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-indigo-400">
                    {t.about.sectionLabel}
                </p>
                <h2 id="about-heading" className="text-3xl font-bold text-zinc-100 sm:text-4xl">
                    {t.about.heading}
                </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Bio */}
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    {t.about.bio.map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </div>

                {/* Highlight cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {t.about.highlights.map(({ icon, title, desc }) => (
                        <div key={title} className="card group">
                            <div className="mb-3 text-2xl">{icon}</div>
                            <h3 className="mb-1.5 text-sm font-semibold text-zinc-100">{title}</h3>
                            <p className="text-xs leading-relaxed text-zinc-500">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
