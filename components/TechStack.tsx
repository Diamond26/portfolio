"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TECH_STACK } from "@/lib/data";

// ── brand colours ────────────────────────────────────────────
const COLORS: Record<string, { bg: string; fg: string }> = {
    TypeScript: { bg: "#3178c6",  fg: "#fff" },
    JavaScript: { bg: "#f7df1e",  fg: "#000" },
    "C#":       { bg: "#9b4f96",  fg: "#fff" },
    HTML:       { bg: "#e34f26",  fg: "#fff" },
    CSS:        { bg: "#1572b6",  fg: "#fff" },
    "Node.js":  { bg: "#1a1a1a",  fg: "#68a063" },
    "Next.js":  { bg: "#000",     fg: "#fff" },
    React:      { bg: "#20232a",  fg: "#61dafb" },
    Express:    { bg: "#1a1a1a",  fg: "#fff" },
    Electron:   { bg: "#1b1c26",  fg: "#47848f" },
    MySQL:      { bg: "#00758f",  fg: "#fff" },
    SQLite:     { bg: "#003b57",  fg: "#60d0e4" },
    Supabase:   { bg: "#1c1c1c",  fg: "#3ecf8e" },
    Tailwind:   { bg: "#0f172a",  fg: "#38bdf8" },
    Unity:      { bg: "#fff",     fg: "#000" },
    Git:        { bg: "#f05032",  fg: "#fff" },
    GitHub:     { bg: "#161b22",  fg: "#fff" },
    "VS Code":  { bg: "#0078d4",  fg: "#fff" },
    Vercel:     { bg: "#000",     fg: "#fff" },
    OWASP:      { bg: "#4e5ba6",  fg: "#fff" },
};

// ── inline SVG icons (Simple Icons paths, 24 × 24 viewBox) ───
const ICON: Record<string, React.ReactNode> = {
    TypeScript: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
    ),
    JavaScript: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
    ),
    "C#": (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 0 1 6.156 3.553l-3.076 1.78a3.567 3.567 0 0 0-3.08-1.78A3.56 3.56 0 0 0 8.444 12 3.56 3.56 0 0 0 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.078 1.78A7.135 7.135 0 0 1 12 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"/>
        </svg>
    ),
    "Node.js": (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.078C12.643 23.916 12.324 24 11.998 24zm2.692-6.884c-3.975 0-4.801-1.824-4.801-3.354 0-.142.114-.253.256-.253h1.136c.127 0 .233.092.252.218.172 1.158.684 1.742 3.157 1.742 1.943 0 2.769-.44 2.769-1.472 0-.595-.235-.037-3.043-.596-2.361-.467-3.822-1.497-3.822-3.254 0-2.143 1.806-3.42 4.834-3.42 3.402 0 5.088 1.181 5.301 3.719a.258.258 0 0 1-.064.198.255.255 0 0 1-.191.083h-1.145a.25.25 0 0 1-.245-.212c-.332-1.469-1.136-1.94-3.656-1.94-2.693 0-3.004.937-3.004 1.639 0 .851.37.55 3.004 1.081 2.607.526 3.861 1.269 3.861 3.14-.008 2.322-1.936 3.68-5.299 3.68z"/>
        </svg>
    ),
    "Next.js": (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            {/* Stylised N: two verticals + diagonal slash */}
            <path fill="currentColor" d="M4 19V5h2.6l6.8 8.9V5H16v14h-2.6L6.6 10.1V19H4z"/>
        </svg>
    ),
    React: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <circle cx="12" cy="12" r="1.9" fill="currentColor"/>
            <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="3.8" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)"/>
        </svg>
    ),
    MySQL: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M5 6v12c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V6" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            <ellipse cx="12" cy="12" rx="7" ry="2.5" fill="none" stroke="currentColor" strokeWidth="0.9" opacity="0.55"/>
        </svg>
    ),
    Unity: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            {/* Unity cube-like logo: top face + left + right */}
            <path fill="currentColor" d="M12 2L2 7.5 7 16l5-8.7 5 8.7 5-8.5L12 2z"/>
            <path fill="currentColor" opacity="0.55" d="M7 16l5 6 5-6-5-2.9L7 16z"/>
        </svg>
    ),
    Tailwind: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
        </svg>
    ),
    Git: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.395-2.005L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.606-.404-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
    ),
    OWASP: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            {/* Shield with exclamation */}
            <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
                  d="M12 2L3 6.5V12c0 5.2 3.8 9.9 9 11 5.2-1.1 9-5.8 9-11V6.5L12 2z"/>
            <rect fill="currentColor" x="11" y="8" width="2" height="5" rx="1"/>
            <circle fill="currentColor" cx="12" cy="15.5" r="1.1"/>
        </svg>
    ),
    Vercel: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
    ),
    HTML: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
    ),
    CSS: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
    ),
    Express: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.402 4.701 3.4-4.701a1.6 1.6 0 0 1 1.9-.666l-1.57 2.129-1.51 2.104 5.32 6.93zm-13.234-3.607l.85-1.169 1.37-1.899-5.137-6.795a1.55 1.55 0 0 0-1.9-.666l5.027 6.868-2.158 2.961-.052.7z"/>
        </svg>
    ),
    Electron: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M12 0C8.686 0 5.842 1.783 5.842 3.978c0 .682.274 1.686 1.028 2.6C4.568 7.767 3 9.938 3 12.37c0 2.759 1.98 5.145 4.954 6.37-.176.55-.274 1.127-.274 1.706C7.68 22.217 9.686 24 12 24s4.32-1.783 4.32-3.554c0-.579-.098-1.156-.274-1.706C19.02 17.515 21 15.13 21 12.37c0-2.433-1.568-4.604-3.87-5.792.754-.914 1.028-1.918 1.028-2.6C18.158 1.783 15.314 0 12 0zm0 1.388c2.547 0 4.617 1.166 4.617 2.59 0 1.423-2.07 2.59-4.617 2.59S7.383 5.401 7.383 3.978c0-1.424 2.07-2.59 4.617-2.59zm6.07 6.16c1.94 1.01 3.164 2.73 3.164 4.822 0 2.091-1.224 3.812-3.164 4.821a8.86 8.86 0 0 0-1.04-2.152c.548-.79.862-1.72.862-2.669 0-.95-.314-1.879-.862-2.669a8.86 8.86 0 0 0 1.04-2.152zM5.93 7.548a8.86 8.86 0 0 0 1.04 2.152C6.422 10.49 6.108 11.42 6.108 12.37c0 .949.314 1.879.862 2.669a8.86 8.86 0 0 0-1.04 2.152C3.99 16.182 2.766 14.461 2.766 12.37c0-2.092 1.224-3.812 3.164-4.822zM12 8.55a3.82 3.82 0 1 1 0 7.64 3.82 3.82 0 0 1 0-7.64zm0 1.388a2.432 2.432 0 1 0 0 4.864 2.432 2.432 0 0 0 0-4.864zm0 9.675c1.588 0 2.932.937 2.932 2.166 0 1.228-1.344 2.166-2.932 2.166s-2.932-.938-2.932-2.166c0-1.229 1.344-2.166 2.932-2.166z"/>
        </svg>
    ),
    SQLite: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M21.678.964C20.875.256 19.92-.068 18.892.013c-1.54.12-2.411.988-2.9 1.75a6.337 6.337 0 0 0-.886 2.6 6.528 6.528 0 0 0 .33 2.931c.297.888.742 1.726.933 2.647.192.925.107 2.044-.753 2.847-.62.583-1.565.817-2.381.612-.826-.207-1.44-.843-1.755-1.6-.314-.756-.355-1.592-.21-2.392.146-.8.47-1.57.623-2.37.154-.8.125-1.686-.376-2.382a2.394 2.394 0 0 0-1.09-.839c-.44-.166-.91-.21-1.357-.15a3.58 3.58 0 0 0-2.12 1.053A6.645 6.645 0 0 0 5.55 7.004a14.5 14.5 0 0 0-.647 3.098 17.73 17.73 0 0 0-.035 2.955c.112 1.787.45 3.557 1.037 5.236.587 1.68 1.42 3.262 2.545 4.604.567.67 1.2 1.285 1.928 1.766.727.48 1.554.812 2.403.915.443.053.89.041 1.33-.02.44-.063.872-.188 1.282-.37.822-.363 1.549-.951 2.136-1.655.587-.703 1.042-1.522 1.369-2.388.654-1.727.78-3.655.43-5.485-.087-.453-.205-.898-.354-1.328.19-.24.382-.493.574-.764a12.13 12.13 0 0 0 1.225-2.458c.292-.847.472-1.735.51-2.632.037-.896-.074-1.808-.416-2.648a5.15 5.15 0 0 0-1.789-2.272z"/>
        </svg>
    ),
    Supabase: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.295 12.65.705 13.5 1.474 13.5H9.1V1.036z"/>
            <path fill="currentColor" d="M12.1 22.964c.015.986 1.26 1.41 1.874.637l9.262-11.652c.469-.6.059-1.45-.71-1.45H14.9v12.465z"/>
        </svg>
    ),
    GitHub: (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
    ),
    "VS Code": (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
        </svg>
    ),
};

// ── wireframe geometry (pre-computed on unit sphere) ─────────
const SEGS = 72;

type V3 = { x: number; y: number; z: number };

const WIRE_LINES: V3[][] = (() => {
    const lines: V3[][] = [];
    // 5 latitude parallels
    for (const deg of [-60, -30, 0, 30, 60]) {
        const φ = deg * Math.PI / 180;
        const r = Math.cos(φ), yv = Math.sin(φ);
        lines.push(Array.from({ length: SEGS + 1 }, (_, i) => {
            const t = (i / SEGS) * 2 * Math.PI;
            return { x: r * Math.cos(t), y: yv, z: r * Math.sin(t) };
        }));
    }
    // 6 longitude great circles (12 half-meridians = 6 full circles)
    for (let j = 0; j < 6; j++) {
        const λ = (j / 6) * Math.PI;
        lines.push(Array.from({ length: SEGS + 1 }, (_, i) => {
            const φ = (i / SEGS) * 2 * Math.PI - Math.PI;
            const r = Math.cos(φ);
            return { x: r * Math.cos(λ), y: Math.sin(φ), z: r * Math.sin(λ) };
        }));
    }
    return lines;
})();

// ── Fibonacci sphere positions ───────────────────────────────
function fibSphere(n: number): V3[] {
    const PHI = Math.PI * (3 - Math.sqrt(5));
    return Array.from({ length: n }, (_, i) => {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const θ = PHI * i;
        return { x: Math.cos(θ) * r, y, z: Math.sin(θ) * r };
    });
}

// ── rotation helper ──────────────────────────────────────────
function rotY(p: V3, cy: number, sy: number): V3 {
    return { x: p.x * cy + p.z * sy, y: p.y, z: -p.x * sy + p.z * cy };
}
function rotX(p: V3, cx: number, sx: number): V3 {
    return { x: p.x, y: p.y * cx - p.z * sx, z: p.y * sx + p.z * cx };
}
function rot(p: V3, cy: number, sy: number, cx: number, sx: number): V3 {
    return rotX(rotY(p, cy, sy), cx, sx);
}

// ─────────────────────────────────────────────────────────────
export default function TechStack() {
    const { t } = useLanguage();
    const wrapRef      = useRef<HTMLDivElement>(null);
    const svgRef       = useRef<SVGSVGElement>(null);
    const pathRefs     = useRef<(SVGPathElement | null)[]>([]);
    const rafRef       = useRef<number>(0);
    const rotRef       = useRef({ x: 0.3, y: 0 });
    const velRef       = useRef({ x: 0, y: 0.42 });
    const dragRef      = useRef({ on: false, lx: 0, ly: 0 });

    useEffect(() => {
        const wrap = wrapRef.current;
        const svg  = svgRef.current;
        if (!wrap || !svg) return;

        const nodes = Array.from(wrap.querySelectorAll<HTMLElement>("[data-node]"));
        const pts   = fibSphere(nodes.length);
        let   last  = performance.now();

        const frame = (now: number) => {
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;

            if (!dragRef.current.on) {
                rotRef.current.y += velRef.current.y * dt;
                rotRef.current.x += (0.3 - rotRef.current.x) * dt * 0.8;
            }

            const cy = Math.cos(rotRef.current.y), sy = Math.sin(rotRef.current.y);
            const cx = Math.cos(rotRef.current.x), sx = Math.sin(rotRef.current.x);
            const W  = wrap.offsetWidth, H = wrap.offsetHeight;
            const R  = Math.min(W, H) * 0.38;
            const cx2 = W / 2, cy2 = H / 2;

            // ── wireframe ──
            WIRE_LINES.forEach((line, li) => {
                const path = pathRefs.current[li];
                if (!path) return;

                let d = "";
                let pen = false;
                for (const raw of line) {
                    const p = rot(raw, cy, sy, cx, sx);
                    const px = (p.x * R).toFixed(1);
                    const py = (p.y * R).toFixed(1);
                    // fade back-facing segments
                    if (p.z < -0.05) { pen = false; continue; }
                    d += pen ? `L${px},${py}` : `M${px},${py}`;
                    pen = true;
                }
                path.setAttribute("d", d);
                // front ring brighter, equator highlighted
                const isEquator = li === 2;
                path.setAttribute("stroke-opacity", isEquator ? "0.35" : "0.18");
                path.setAttribute("stroke", isEquator ? "#a78bfa" : "rgba(255,255,255,0.6)");
            });

            // ── icons ──
            nodes.forEach((el, i) => {
                const p = rot(pts[i], cy, sy, cx, sx);
                const depth = (p.z + 1.5) / 2.5;
                const sc    = Math.max(0.35, depth);
                el.style.transform = `translate(calc(-50% + ${(p.x * R).toFixed(1)}px), calc(-50% + ${(p.y * R).toFixed(1)}px)) scale(${sc.toFixed(3)})`;
                el.style.opacity   = Math.max(0.1, depth * 0.95).toFixed(3);
                el.style.zIndex    = String(Math.round(p.z * 100 + 100));
            });

            rafRef.current = requestAnimationFrame(frame);
        };

        rafRef.current = requestAnimationFrame(frame);

        const onDown = (e: MouseEvent) => {
            dragRef.current = { on: true, lx: e.clientX, ly: e.clientY };
            velRef.current  = { x: 0, y: 0 };
        };
        const onMove = (e: MouseEvent) => {
            if (!dragRef.current.on) return;
            const dx = e.clientX - dragRef.current.lx;
            const dy = e.clientY - dragRef.current.ly;
            rotRef.current.y += dx * 0.006;
            rotRef.current.x -= dy * 0.006;
            velRef.current    = { x: -dy * 0.12, y: dx * 0.12 };
            dragRef.current   = { on: true, lx: e.clientX, ly: e.clientY };
        };
        const onUp = () => { dragRef.current.on = false; };

        const onTouchStart = (e: TouchEvent) => {
            const t = e.touches[0];
            dragRef.current = { on: true, lx: t.clientX, ly: t.clientY };
            velRef.current  = { x: 0, y: 0 };
        };
        const onTouchMove = (e: TouchEvent) => {
            if (!dragRef.current.on) return;
            const touch = e.touches[0];
            const dx = touch.clientX - dragRef.current.lx;
            const dy = touch.clientY - dragRef.current.ly;
            rotRef.current.y += dx * 0.006;
            rotRef.current.x -= dy * 0.006;
            velRef.current    = { x: -dy * 0.12, y: dx * 0.12 };
            dragRef.current   = { on: true, lx: touch.clientX, ly: touch.clientY };
        };
        const onTouchEnd = () => { dragRef.current.on = false; };

        wrap.addEventListener("mousedown",   onDown);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup",   onUp);
        wrap.addEventListener("touchstart",  onTouchStart, { passive: true });
        wrap.addEventListener("touchmove",   onTouchMove,  { passive: true });
        wrap.addEventListener("touchend",    onTouchEnd);

        return () => {
            cancelAnimationFrame(rafRef.current);
            wrap.removeEventListener("mousedown",   onDown);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup",   onUp);
            wrap.removeEventListener("touchstart",  onTouchStart);
            wrap.removeEventListener("touchmove",   onTouchMove);
            wrap.removeEventListener("touchend",    onTouchEnd);
        };
    }, []);

    return (
        <section id="stack" className="section" aria-labelledby="stack-heading">
            <div className="section__head reveal">
                <span className="section__label">{t.stack.sectionLabel}</span>
                <h2 id="stack-heading" className="section__title">
                    <span>{t.stack.titleA} </span>
                    <em className="serif">{t.stack.titleB}</em>
                </h2>
            </div>

            <div
                ref={wrapRef}
                className="relative mx-auto select-none cursor-grab active:cursor-grabbing"
                style={{ width: "100%", maxWidth: 580, height: 520 }}
                aria-label="Tech stack interactive globe — drag to rotate"
                role="img"
            >
                {/* radial glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)",
                    }}
                />

                {/* SVG wireframe — positioned in the centre of the wrapper */}
                <svg
                    ref={svgRef}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{ width: "100%", height: "100%", overflow: "visible" }}
                    viewBox={`0 0 580 520`}
                >
                    <g transform="translate(290,260)">
                        {WIRE_LINES.map((_, i) => (
                            <path
                                key={i}
                                ref={el => { pathRefs.current[i] = el; }}
                                fill="none"
                                strokeWidth={i === 2 ? "0.8" : "0.6"}
                            />
                        ))}
                    </g>
                </svg>

                {/* Tech icon nodes */}
                {TECH_STACK.map((item) => {
                    const c    = COLORS[item.name] ?? { bg: "#222", fg: "#fff" };
                    const icon = ICON[item.name];
                    return (
                        <div
                            key={item.name}
                            data-node
                            className="absolute top-1/2 left-1/2 pointer-events-none"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <div className="flex flex-col items-center gap-1.5">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl ring-1 ring-white/10"
                                    style={{ background: c.bg, color: c.fg }}
                                >
                                    {icon ?? <span className="text-sm font-bold">{item.glyph}</span>}
                                </div>
                                <span className="text-[10px] font-medium tracking-wide whitespace-nowrap"
                                      style={{ color: "rgba(255,255,255,0.5)" }}>
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="text-center text-[10px] tracking-[0.2em] uppercase mt-1"
               style={{ color: "rgba(255,255,255,0.18)" }}>
                drag to rotate
            </p>
        </section>
    );
}
