"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";

/**
 * Projects — mostra i progetti dal file i18n nella lingua attiva.
 */
export default function Projects() {
    const { t } = useLanguage();

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="section-padding mx-auto max-w-6xl"
        >
            <div className="mb-12">
                <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-indigo-400">
                    {t.projects.sectionLabel}
                </p>
                <h2 id="projects-heading" className="text-3xl font-bold text-zinc-100 sm:text-4xl">
                    {t.projects.heading}
                </h2>
                <p className="mt-3 max-w-xl text-zinc-400">{t.projects.subheading}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {t.projects.items.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
