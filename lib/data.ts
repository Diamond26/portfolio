/**
 * Central content file — edit this file to personalise the portfolio.
 * All sections pull data from here; no need to touch component files.
 */

import type { PersonalInfo, Project, TechItem } from "./types";

// ---------------------------------------------------------------------------
// Personal Info
// ---------------------------------------------------------------------------
export const PERSONAL_INFO: PersonalInfo = {
    name: "Davide Secci",
    role: "Software Developer | Web & Game Dev",
    tagline: "Building secure, high-performance systems from the ground up.",
    email: "davide.secci26@gmail.com",
    github: "https://github.com/Diamond26",
    linkedin: "",   // LinkedIn removed
    location: "Italy",
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const PROJECTS: Project[] = [
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
        githubUrl: "https://github.com/Diamond26",
        imageAlt: "Dashboard del sistema di gestione ticket",
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
        imageAlt: "Schermata del videogioco psicologico in Unity",
    },
];

// ---------------------------------------------------------------------------
// Tech Stack
// ---------------------------------------------------------------------------
export const TECH_STACK: TechItem[] = [
    {
        name: "JavaScript",
        category: "language",
        icon: "js",
    },
    {
        name: "TypeScript",
        category: "language",
        icon: "ts",
    },
    {
        name: "Node.js",
        category: "runtime",
        icon: "node",
    },
    {
        name: "Next.js",
        category: "runtime",
        icon: "next",
    },
    {
        name: "MySQL",
        category: "database",
        icon: "mysql",
    },
    {
        name: "Unity / C#",
        category: "tool",
        icon: "unity",
    },
    {
        name: "Git",
        category: "tool",
        icon: "git",
    },
    {
        name: "OWASP / Security",
        category: "security",
        icon: "security",
    },
];
