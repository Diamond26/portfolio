"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import Dock, { type DockItemData } from "./Dock";

const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* Icone Lucide-style — tratti puliti 24x24 */
const icons = {
    about: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
    ),
    projects: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
    ),
    stack: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 2 7l10 5 10-5-10-5Z" />
            <path d="m2 12 10 5 10-5" />
            <path d="m2 17 10 5 10-5" />
        </svg>
    ),
    services: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
    ),
    timeline: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 5h2" />
            <path d="M3 12h2" />
            <path d="M3 19h2" />
            <path d="M7 5h14" />
            <path d="M7 12h14" />
            <path d="M7 19h14" />
        </svg>
    ),
    contact: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
    sun: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    ),
    moon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    ),
};

export default function Navbar() {
    const { lang, setLang, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const accent = "rgba(124,122,255,.15)";
    const iconStyle = { color: "var(--accent-2)" };

    const items: DockItemData[] = [
        {
            icon: <span style={iconStyle}>{icons.about}</span>,
            label: t.nav.about,
            onClick: () => scrollTo("about"),
            className: `hover:bg-[${accent}]`,
        },
        {
            icon: <span style={iconStyle}>{icons.projects}</span>,
            label: t.nav.projects,
            onClick: () => scrollTo("projects"),
        },
        {
            icon: <span style={iconStyle}>{icons.stack}</span>,
            label: t.nav.stack,
            onClick: () => scrollTo("stack"),
        },
        {
            icon: <span style={iconStyle}>{icons.services}</span>,
            label: t.nav.services,
            onClick: () => scrollTo("services"),
        },
        {
            icon: <span style={iconStyle}>{icons.timeline}</span>,
            label: t.nav.timeline,
            onClick: () => scrollTo("timeline"),
        },
        {
            icon: <span style={iconStyle}>{icons.contact}</span>,
            label: t.nav.contact,
            onClick: () => scrollTo("contact"),
        },
        /* Separatore */
        {
            icon: <div style={{ width: 1, height: 26, background: "rgba(255,255,255,.14)", borderRadius: 1 }} />,
            label: "",
            onClick: () => {},
            className: "!rounded-none !bg-transparent !border-0 !shadow-none !w-[1px]",
        },
        {
            icon: (
                <span style={{ fontFamily: "var(--f-mono)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--accent-2)" }}>
                    {lang.toUpperCase()}
                </span>
            ),
            label: lang === "it" ? "Switch to English" : "Passa a Italiano",
            onClick: () => setLang(lang === "it" ? "en" : "it"),
        },
        {
            icon: <span style={{ color: "var(--accent-2)" }}>{theme === "dark" ? icons.sun : icons.moon}</span>,
            label: theme === "dark" ? "Light mode" : "Dark mode",
            onClick: toggleTheme,
        },
    ];

    return (
        <div style={{
            position: "fixed",
            bottom: 16,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 50,
            pointerEvents: "none",
        }}>
            <div style={{ pointerEvents: "auto" }}>
                <Dock items={items} baseItemSize={44} magnification={64} panelHeight={58} />
            </div>
        </div>
    );
}
