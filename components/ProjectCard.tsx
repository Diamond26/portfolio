"use client";

import { useLanguage } from "@/context/LanguageContext";

interface ProjectItem {
    id: string;
    title: string;
    description: string;
    problem: string;
    solution: string;
    tags: readonly string[];
    githubUrl: string;
    imageAlt: string;
}

interface ProjectCardProps {
    project: ProjectItem;
    index: number;
}

/**
 * ProjectCard — card riutilizzabile per un singolo progetto.
 * Riceve il progetto già tradotto dalla sezione Projects.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
    const { t } = useLanguage();

    return (
        <article className="card flex flex-col overflow-hidden group" aria-label={`Progetto: ${project.title}`}>
            {/* Placeholder terminale */}
            <div className="mb-6 flex h-44 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/60 overflow-hidden">
                <div className="w-full px-4 font-mono text-xs text-zinc-600">
                    <div className="mb-1 flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <p className="mt-3 text-indigo-400">$ preview {project.id}</p>
                    <p className="mt-1 text-zinc-600">{project.imageAlt}</p>
                    <p className="mt-2 text-zinc-700">
                        <span className="text-green-500/70">✓</span> #{index + 1}
                    </p>
                </div>
            </div>

            {/* Titolo */}
            <h3 className="mb-3 text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-200">
                {project.title}
            </h3>

            {/* Descrizione */}
            <p className="mb-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>


            {/* Tag tecnologie */}
            <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-xs text-indigo-400">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Link GitHub */}
            <div className="mt-auto">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-indigo-400"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    {t.projects.viewOnGithub}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                </a>
            </div>
        </article>
    );
}
