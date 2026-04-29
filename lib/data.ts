import type { PersonalInfo, TechItem, ServiceItem, TimelineItem } from "./types";

export const PERSONAL_INFO: PersonalInfo = {
    name: "Davide Secci",
    role: "Software Developer",
    tagline: "Building secure, high-performance systems from the ground up.",
    email: "davide.secci26@gmail.com",
    github: "https://github.com/Diamond26",
    linkedin: "",
    location: "Italia",
};

export const TECH_STACK: TechItem[] = [
    { name: "TypeScript", category: "Linguaggio", icon: "ts",       glyph: "TS" },
    { name: "JavaScript", category: "Linguaggio", icon: "js",       glyph: "JS" },
    { name: "C#",         category: "Linguaggio", icon: "csharp",   glyph: "C#" },
    { name: "Node.js",    category: "Runtime",    icon: "node",     glyph: "⬢"  },
    { name: "Next.js",    category: "Framework",  icon: "next",     glyph: "N"  },
    { name: "React",      category: "Framework",  icon: "react",    glyph: "⚛"  },
    { name: "MySQL",      category: "Database",   icon: "mysql",    glyph: "DB" },
    { name: "Unity",      category: "Engine",     icon: "unity",    glyph: "U"  },
    { name: "Tailwind",   category: "CSS",        icon: "tailwind", glyph: "~"  },
    { name: "Git",        category: "Tool",       icon: "git",      glyph: "⎇"  },
    { name: "OWASP",      category: "Sicurezza",  icon: "security", glyph: "⛨"  },
    { name: "Vercel",     category: "Deploy",     icon: "vercel",   glyph: "▲"  },
];

export const SERVICES: ServiceItem[] = [
    {
        n: "01",
        title: "Web App & API",
        desc: "Applicazioni full-stack moderne: dashboard, gestionali, marketplace. Architettura modulare, scalabile e sicura.",
        bullets: ["Next.js · Node.js · MySQL", "Auth & RBAC", "REST API · validazione", "Deploy su Vercel"],
    },
    {
        n: "02",
        title: "Game Development",
        desc: "Prototipi e sistemi in Unity (C#): state machines, save system, AI di base, design narrativo orientato alle conseguenze.",
        bullets: ["Unity · C#", "Gameplay systems", "Save / Load · Persistence", "Narrative branching"],
    },
    {
        n: "03",
        title: "Security & Performance",
        desc: "Audit di base, hardening, header HTTP sicuri, profilazione query e bundle. Per chi vuole sapere se un sito è davvero solido.",
        bullets: ["OWASP basics", "CSP · HSTS · headers", "Profilazione query MySQL", "Riduzione bundle / TTFB"],
    },
];

export const SERVICES_EN: ServiceItem[] = [
    {
        n: "01",
        title: "Web Apps & APIs",
        desc: "Modern full-stack applications: dashboards, admin tools, marketplaces. Modular, scalable and secure architecture.",
        bullets: ["Next.js · Node.js · MySQL", "Auth & RBAC", "REST APIs · validation", "Deploy on Vercel"],
    },
    {
        n: "02",
        title: "Game Development",
        desc: "Unity (C#) prototypes and systems: state machines, save systems, basic AI, choice-driven narrative design.",
        bullets: ["Unity · C#", "Gameplay systems", "Save / Load · Persistence", "Narrative branching"],
    },
    {
        n: "03",
        title: "Security & Performance",
        desc: "Basic audits, hardening, secure HTTP headers, query and bundle profiling. For people who want to know if their site is solid.",
        bullets: ["OWASP basics", "CSP · HSTS · headers", "MySQL query profiling", "Bundle / TTFB reduction"],
    },
];

export const TIMELINE: TimelineItem[] = [
    {
        year: "2026",
        live: true,
        title: "Portfolio v2 + Game Dev attivo",
        desc: "Refresh totale di questo portfolio con focus su animazioni e identità visiva. In parallelo, sviluppo del videogioco psicologico.",
        chips: ["Next.js 15", "Unity", "Motion"],
    },
    {
        year: "2025",
        title: "Approfondimento sicurezza & performance",
        desc: "Studio sistematico di OWASP, hardening dei progetti personali, profilazione database, ottimizzazione bundle.",
        chips: ["OWASP", "MySQL tuning", "Lighthouse 95+"],
    },
    {
        year: "2024",
        title: "Sistema di Gestione Ticket",
        desc: "Prima web app full-stack production-ready: Node.js + MySQL, RBAC, log attività, dashboard amministrativa.",
        chips: ["Node.js", "MySQL", "RBAC"],
    },
    {
        year: "2022 — 2024",
        title: "Fondamenta — full-stack & game dev",
        desc: "Studio dei fondamenti: JavaScript, TypeScript, React, Node, SQL, Unity. Numerosi piccoli progetti per consolidare le basi.",
        chips: ["JavaScript", "React", "C#", "SQL"],
    },
];

export const TIMELINE_EN: TimelineItem[] = [
    {
        year: "2026",
        live: true,
        title: "Portfolio v2 + active game dev",
        desc: "Full refresh of this portfolio with focus on animations and visual identity. In parallel, work on the psychological game.",
        chips: ["Next.js 15", "Unity", "Motion"],
    },
    {
        year: "2025",
        title: "Deep dive into security & performance",
        desc: "Systematic study of OWASP, hardening of personal projects, database profiling, bundle optimisation.",
        chips: ["OWASP", "MySQL tuning", "Lighthouse 95+"],
    },
    {
        year: "2024",
        title: "Ticket Management System",
        desc: "First production-ready full-stack web app: Node.js + MySQL, RBAC, activity logs, admin dashboard.",
        chips: ["Node.js", "MySQL", "RBAC"],
    },
    {
        year: "2022 — 2024",
        title: "Foundations — full-stack & game dev",
        desc: "Building the fundamentals: JavaScript, TypeScript, React, Node, SQL, Unity. Many small projects to lock in the basics.",
        chips: ["JavaScript", "React", "C#", "SQL"],
    },
];
