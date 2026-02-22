"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Contact — email e GitHub con icone.
 * LinkedIn è stato rimosso intenzionalmente.
 */
export default function Contact() {
    const { t } = useLanguage();

    const links = [
        {
            label: t.contact.emailLabel,
            value: PERSONAL_INFO.email,
            href: `mailto:${PERSONAL_INFO.email}`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            ),
        },
        {
            label: t.contact.githubLabel,
            value: PERSONAL_INFO.github.replace("https://", ""),
            href: PERSONAL_INFO.github,
            external: true,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
        },
    ];

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="section-padding mx-auto max-w-6xl"
        >
            <div className="mb-12">
                <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-indigo-400">
                    {t.contact.sectionLabel}
                </p>
                <h2 id="contact-heading" className="text-3xl font-bold text-zinc-100 sm:text-4xl">
                    {t.contact.heading}
                </h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {links.map(({ label, value, href, external, icon }) => (
                    <a
                        key={label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-5 transition-all duration-200 hover:border-indigo-500/40 hover:bg-zinc-800/60 sm:flex-1"
                    >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                            {icon}
                        </span>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">{label}</p>
                            <p className="mt-0.5 truncate text-sm font-medium text-zinc-200">{value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
