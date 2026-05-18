import type { PersonalInfo, TechItem } from "./types";

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
