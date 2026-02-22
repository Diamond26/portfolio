/**
 * i18n — Tutte le stringhe tradotte IT/EN.
 * Aggiungere qui ogni testo del sito per entrambe le lingue.
 */

export type Lang = "it" | "en";

export const translations = {
    // ─── ITALIANO (lingua base) ──────────────────────────────────────────────
    it: {
        nav: {
            about: "Chi sono",
            projects: "Progetti",
            stack: "Stack",
            contact: "Contatti",
        },
        hero: {
            badge: "Disponibile per nuove opportunità",
            cta: "Vedi Progetti",
            scroll: "SCORRI",
        },
        about: {
            sectionLabel: "01. Chi sono",
            heading: "Chi sono",
            bio: [
                "Sono uno sviluppatore software in continua crescita, con un forte interesse per la costruzione di sistemi veloci, sicuri e manutenibili. Non mi interessa solo far funzionare qualcosa: voglio capire perché funziona e come può essere migliorato.",
                "Mi occupo di applicazioni web, backend API e sviluppo di progetti in Unity. Ogni progetto per me è un’occasione per approfondire concetti come gestione dello stato, strutturazione del codice, organizzazione del database e sicurezza delle applicazioni.",
                "Sto ancora imparando e affinando le mie competenze, ma affronto ogni problema con metodo: analizzo la causa, cerco la soluzione più semplice e chiara possibile e lavoro per scrivere codice ordinato e comprensibile nel tempo.",
                "Sono particolarmente interessato alla sicurezza dei sistemi e all’ottimizzazione delle prestazioni, ambiti che sto studiando e approfondendo con l’obiettivo di crescere come sviluppatore completo e consapevole.",
            ],
            highlights: [
                {
                    icon: "🔒",
                    title: "Sicurezza e Hardening",
                    desc: "Pratiche OWASP, validazione input, CSP, header sicuri.",
                },
                {
                    icon: "⚡",
                    title: "Ottimizzazione Performance",
                    desc: "Profilazione query, strategie di caching, riduzione bundle.",
                },
                {
                    icon: "🧩",
                    title: "Architettura Pulita",
                    desc: "Codice modulare e testabile. Principi SOLID. Nessuna complessità inutile.",
                },
                {
                    icon: "🎮",
                    title: "Game Development",
                    desc: "Progettazione sistemi Unity (C#) — AI, fisica, game loop, save system.",
                },
            ],
        },
        projects: {
            sectionLabel: "02. Progetti",
            heading: "Lavori",
            subheading:
                "Progetti sviluppati anche a scopo didattico e non, documentati evidenziando l'approccio tecnico adottato e le tecnologie utilizzate.",
            problemLabel: "PROBLEMA",
            solutionLabel: "SOLUZIONE",
            viewOnGithub: "Vedi su GitHub",
            items: [
                {
                    id: "project-1",
                    title: "Web App — Sistema di Gestione Ticket",
                    description:
                        "Applicazione web full-stack per la gestione di ticket aziendali. Supporta autenticazione con ruoli, assegnazione ticket, log attività e controllo accessi granulare.",
                    problem:
                        "I team aziendali gestivano le segnalazioni via email e fogli Excel, senza tracciabilità, priorità o storico degli interventi — con conseguente perdita di informazioni e ritardi.",
                    solution:
                        "Sviluppata un'architettura backend Node.js + MySQL con autenticazione basata su sessioni, RBAC (Role-Based Access Control), validazione input lato server (OWASP basics) e un database relazionale normalizzato per garantire integrità e manutenibilità.",
                    tags: ["JavaScript", "Node.js", "MySQL", "OWASP", "Session Auth", "RBAC"],
                    githubUrl: "https://github.com/Diamond26/WebAppTicketingSystem",
                    imageAlt: "Dashboard sistema di gestione ticket",
                    previewImages: [
                        "/loginpage.png",
                        "/admindashboard.png",
                        "/ticketprova.png",
                        "/chatrealtimeticketdetails.png",
                    ],
                },
                {
                    id: "project-2",
                    title: "Videogioco Psicologico — In Sviluppo (Unity)",
                    description:
                        "Gioco narrativo psicologico sviluppato in Unity (C#). Ambiente minimal e opprimente, con scelte che modificano variabili globali invisibili e determinano finali alternativi.",
                    problem:
                        "La maggior parte dei giochi narrativi tratta le scelte come flag binari visibili, riducendo la tensione psicologica. L'obiettivo era costruire un sistema dove le conseguenze emergono in modo inaspettato e coerente.",
                    solution:
                        "Architettura basata su una macchina a stati con variabili globali nascoste al giocatore. Ogni decisione aggiorna silenziosamente il contesto di gioco — influenzando dialoghi, ambienti e finali senza feedback esplicito.",
                    tags: ["Unity", "C#", "Game Dev", "State Machine", "Narrative Design", "In Sviluppo"],
                    githubUrl: "https://github.com/Diamond26",
                    imageAlt: "Videogioco psicologico in Unity",
                    previewImage: "/game-preview.png",
                    showGithub: false,
                },
                {
                    id: "project-3",
                    title: "Portfolio Personale (Questo Sito)",
                    description:
                        "Sito portfolio one-page sviluppato con Next.js App Router, TypeScript e Tailwind CSS. Struttura modulare a componenti, sistema multilingua IT/EN client-side, SEO base e header di sicurezza configurati. Deploy su Vercel.",
                    problem:
                        "Necessità di un portfolio tecnico che fosse allo stesso tempo veloce, manutenibile e facilmente aggiornabile — senza dipendenze esterne per l'internazionalizzazione e senza framework CMS.",
                    solution:
                        "Architettura basata su componenti React riutilizzabili con un unico file di configurazione dei contenuti (lib/data.ts) e un sistema i18n leggero implementato tramite React Context. Security headers gestiti direttamente in next.config.ts. Build statica ottimizzata per Lighthouse ≥ 95.",
                    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n", "Vercel", "SEO"],
                    githubUrl: "https://github.com/Diamond26/portfolio",
                    imageAlt: "Portfolio personale — questo sito",
                    previewImages: [
                        "/portfolio screen1.png",
                        "/portfolio screen2.png",
                    ],
                },
            ],
        },
        stack: {
            sectionLabel: "03. Stack",
            heading: "Stack Tecnologico",
            subheading: "Strumenti e tecnologie con cui ho lavorato.",
            categories: {
                language: "Linguaggi",
                runtime: "Runtime e Framework",
                database: "Database",
                tool: "Strumenti",
                security: "Sicurezza",
            },
        },
        contact: {
            sectionLabel: "04. Contatti",
            heading: "Contatti",
            subheading: "",
            emailLabel: "Email",
            githubLabel: "GitHub",
        },
        footer: {
            builtWith: "Realizzato con",
        },
    },

    // ─── ENGLISH ─────────────────────────────────────────────────────────────
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            stack: "Stack",
            contact: "Contact",
        },
        hero: {
            badge: "Available for new opportunities",
            cta: "View Projects",
            scroll: "SCROLL",
        },
        about: {
            sectionLabel: "01. About",
            heading: "Who I am",
            bio: [
                "I'm a software developer focused on building systems that are fast, secure, and maintainable — not just functional. I care about what happens under the hood.",
                "My work spans backend APIs, web front-ends, and game systems in Unity. Whether I'm profiling a slow database query, hardening an authentication flow, or designing a C# state machine, I approach each problem with the same discipline: understand the root cause, design the simplest correct solution, and ship clean code.",
                "I'm particularly interested in system security and performance engineering — areas where technical depth translates directly into real-world impact.",
            ],
            highlights: [
                {
                    icon: "🔒",
                    title: "Security Hardening",
                    desc: "OWASP-aligned practices, input validation, CSP, secure headers.",
                },
                {
                    icon: "⚡",
                    title: "Performance Optimisation",
                    desc: "Query profiling, caching strategies, bundle size reduction.",
                },
                {
                    icon: "🧩",
                    title: "Clean Architecture",
                    desc: "Modular, testable code. SOLID principles. No unnecessary complexity.",
                },
                {
                    icon: "🎮",
                    title: "Game Development",
                    desc: "Unity (C#) systems design — AI, physics, game loops, save systems.",
                },
            ],
        },
        projects: {
            sectionLabel: "02. Projects",
            heading: "Work",
            subheading:
                "Projects developed for learning purposes and beyond, documented highlighting the technical approach and technologies used.",
            problemLabel: "PROBLEM",
            solutionLabel: "SOLUTION",
            viewOnGithub: "View on GitHub",
            items: [
                {
                    id: "project-1",
                    title: "Web App — Ticket Management System",
                    description:
                        "Full-stack web application for corporate ticket management. Supports role-based authentication, ticket assignment, activity logging, and granular access control.",
                    problem:
                        "Teams managed reports via email and Excel sheets, with no traceability, priorities, or intervention history — leading to lost information and delays.",
                    solution:
                        "Built a Node.js + MySQL backend architecture with session-based authentication, RBAC (Role-Based Access Control), server-side input validation (OWASP basics), and a normalised relational database for integrity and maintainability.",
                    tags: ["JavaScript", "Node.js", "MySQL", "OWASP", "Session Auth", "RBAC"],
                    githubUrl: "https://github.com/Diamond26/WebAppTicketingSystem",
                    imageAlt: "Ticket management system dashboard",
                    previewImages: [
                        "/loginpage.png",
                        "/admindashboard.png",
                        "/ticketprova.png",
                        "/chatrealtimeticketdetails.png",
                    ],
                },
                {
                    id: "project-2",
                    title: "Psychological Video Game — In Development (Unity)",
                    description:
                        "Psychological narrative game developed in Unity (C#). Minimal and oppressive environment, with choices that modify invisible global variables and determine alternative endings.",
                    problem:
                        "Most narrative games treat choices as visible binary flags, reducing psychological tension. The goal was to build a system where consequences emerge unexpectedly and coherently.",
                    solution:
                        "Architecture based on a state machine with global variables hidden from the player. Every decision silently updates the game context — influencing dialogues, environments, and endings without explicit feedback.",
                    tags: ["Unity", "C#", "Game Dev", "State Machine", "Narrative Design", "In Development"],
                    githubUrl: "https://github.com/Diamond26",
                    imageAlt: "Psychological game in Unity",
                    previewImage: "/game-preview.png",
                    showGithub: false,
                },
                {
                    id: "project-3",
                    title: "Personal Portfolio (This Site)",
                    description:
                        "One-page portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Modular component architecture, client-side IT/EN i18n system, basic SEO, and configured security headers. Deployed on Vercel.",
                    problem:
                        "Required a technical portfolio that was fast, maintainable, and easy to update — without external i18n dependencies or a CMS framework.",
                    solution:
                        "Architecture built on reusable React components with a single content configuration file (lib/data.ts) and a lightweight i18n system implemented via React Context. Security headers managed directly in next.config.ts. Static build optimised for Lighthouse ≥ 95.",
                    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n", "Vercel", "SEO"],
                    githubUrl: "https://github.com/Diamond26/portfolio",
                    imageAlt: "Personal portfolio — this website",
                    previewImages: [
                        "/portfolio screen1.png",
                        "/portfolio screen2.png",
                    ],
                },
            ],
        },
        stack: {
            sectionLabel: "03. Stack",
            heading: "Tech Stack",
            subheading: "Tools and technologies I have worked with.",
            categories: {
                language: "Languages",
                runtime: "Runtimes & Frameworks",
                database: "Databases",
                tool: "Tools",
                security: "Security",
            },
        },
        contact: {
            sectionLabel: "04. Contact",
            heading: "Contact",
            subheading: "",
            emailLabel: "Email",
            githubLabel: "GitHub",
        },
        footer: {
            builtWith: "Built with",
        },
    },
} as const;

export type Translations = (typeof translations)[Lang];
