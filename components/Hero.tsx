"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Hero — sezione introduttiva a schermo intero.
 */
export default function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            aria-label="Introduzione"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
        >
            {/* Blob decorativi CSS */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/8 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
                {/* Badge disponibilità */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    {t.hero.badge}
                </div>

                {/* Nome */}
                <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
                    {PERSONAL_INFO.name.split(" ")[0]}{" "}
                    <span className="gradient-text">
                        {PERSONAL_INFO.name.split(" ").slice(1).join(" ")}
                    </span>
                </h1>

                {/* Ruolo */}
                <p className="mb-6 font-mono text-base font-medium tracking-wide text-indigo-400 sm:text-lg">
                    {PERSONAL_INFO.role}
                </p>

                {/* CTA */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25"
                    >
                        {t.hero.cta}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-20 flex justify-center" aria-hidden="true">
                    <a href="#about" className="flex flex-col items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-400">
                        <span className="text-xs tracking-widest">{t.hero.scroll}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
