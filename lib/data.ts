import type { PersonalInfo, TechItem, ServiceItem, TimelineItem } from "./types";

export const PERSONAL_INFO: PersonalInfo = {
    name: "Davide Secci",
    role: "Software Developer",
    tagline: "Soluzioni web su misura — dall'idea al deploy, per aziende e progetti indipendenti.",
    email: "davide.secci26@gmail.com",
    github: "https://github.com/Diamond26",
    linkedin: "",
    location: "Italia",
};

export const TECH_STACK: TechItem[] = [
    // ── Linguaggi
    { name: "TypeScript", category: "Linguaggio",  icon: "ts",       glyph: "TS" },
    { name: "JavaScript", category: "Linguaggio",  icon: "js",       glyph: "JS" },
    { name: "C#",         category: "Linguaggio",  icon: "csharp",   glyph: "C#" },
    { name: "HTML",       category: "Linguaggio",  icon: "html",     glyph: "</>" },
    { name: "CSS",        category: "Linguaggio",  icon: "css",      glyph: "{}" },
    // ── Runtime & Framework
    { name: "Node.js",    category: "Runtime",     icon: "node",     glyph: "⬢"  },
    { name: "Next.js",    category: "Framework",   icon: "next",     glyph: "N"  },
    { name: "React",      category: "Framework",   icon: "react",    glyph: "⚛"  },
    { name: "Express",    category: "Framework",   icon: "express",  glyph: "ex" },
    { name: "Electron",   category: "Desktop",     icon: "electron", glyph: "e-" },
    // ── Database
    { name: "MySQL",      category: "Database",    icon: "mysql",    glyph: "DB" },
    { name: "SQLite",     category: "Database",    icon: "sqlite",   glyph: "🗃"  },
    { name: "Supabase",   category: "BaaS",        icon: "supabase", glyph: "SB" },
    // ── Styling
    { name: "Tailwind",   category: "CSS",         icon: "tailwind", glyph: "~"  },
    // ── Game
    { name: "Unity",      category: "Engine",      icon: "unity",    glyph: "U"  },
    // ── Tools & DevOps
    { name: "Git",        category: "Tool",        icon: "git",      glyph: "⎇"  },
    { name: "GitHub",     category: "Tool",        icon: "github",   glyph: "🐙" },
    { name: "VS Code",    category: "Editor",      icon: "vscode",   glyph: "📘" },
    { name: "Vercel",     category: "Deploy",      icon: "vercel",   glyph: "▲"  },
    // ── Sicurezza
    { name: "OWASP",      category: "Sicurezza",   icon: "security", glyph: "⛨"  },
];

export const SERVICES: ServiceItem[] = [
    {
        n: "01",
        title: "Web App & API",
        desc: "Applicazioni web su misura per aziende e professionisti: dashboard, gestionali, portali, marketplace. Architettura modulare, scalabile e pronta alla produzione.",
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
        desc: "Audit, hardening e ottimizzazione per siti e applicazioni esistenti. Per chi vuole sapere se il proprio prodotto è davvero solido prima di scalare.",
        bullets: ["OWASP basics", "CSP · HSTS · headers", "Profilazione query MySQL", "Riduzione bundle / TTFB"],
    },
];

export const SERVICES_EN: ServiceItem[] = [
    {
        n: "01",
        title: "Web Apps & APIs",
        desc: "Custom web applications for businesses and professionals: dashboards, management tools, portals, marketplaces. Modular, scalable, production-ready architecture.",
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
        desc: "Audit, hardening and optimisation for existing sites and applications. For anyone who wants to know if their product is truly solid before scaling.",
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
