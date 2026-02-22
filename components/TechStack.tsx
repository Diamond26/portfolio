"use client";

import { TECH_STACK } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

/* Icone SVG inline per ogni tecnologia */
const ICONS: Record<string, React.ReactNode> = {
    js: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#F7DF1E" />
            <path d="M18.774 22.277c.396.647.912 1.121 1.825 1.121.766 0 1.257-.384 1.257-.912 0-.633-.503-.857-1.35-1.225l-.463-.199c-1.339-.57-2.228-1.284-2.228-2.793 0-1.389 1.059-2.447 2.714-2.447 1.179 0 2.025.41 2.634 1.483l-1.44.924c-.317-.57-.661-.793-1.194-.793-.543 0-.887.344-.887.793 0 .555.344.78 1.14 1.124l.463.199c1.578.676 2.466 1.366 2.466 2.915 0 1.671-1.313 2.579-3.075 2.579-1.724 0-2.836-.82-3.379-1.904l1.517-.865zm-7.427.186c.29.516.554.952 1.191.952.609 0 .993-.239.993-1.166v-6.317h1.873v6.337c0 1.922-1.127 2.795-2.77 2.795-1.485 0-2.345-.769-2.785-1.694l1.498-.907z" fill="#323330" />
        </svg>
    ),
    ts: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#3178C6" />
            <path d="M17.68 22.234v2.051c.333.171.727.302 1.183.393.456.091.937.136 1.443.136.494 0 .964-.053 1.411-.159.447-.106.84-.279 1.178-.519.338-.24.606-.549.805-.927.199-.378.298-.83.298-1.356 0-.38-.055-.714-.165-1.003a2.44 2.44 0 00-.488-.776 3.665 3.665 0 00-.782-.594 8.72 8.72 0 00-1.05-.487 8.75 8.75 0 01-.704-.298 2.525 2.525 0 01-.488-.297.994.994 0 01-.282-.345.936.936 0 01-.089-.407c0-.14.03-.268.089-.383a.808.808 0 01.254-.289c.108-.079.239-.14.39-.182a1.93 1.93 0 01.506-.062c.127 0 .263.009.407.028.144.018.289.048.434.09.145.041.284.093.418.156.134.063.254.138.36.224v-1.918a4.94 4.94 0 00-1.065-.26A8.55 8.55 0 0020.156 16c-.481 0-.937.057-1.367.17a3.33 3.33 0 00-1.113.519 2.49 2.49 0 00-.752.878 2.634 2.634 0 00-.276 1.232c0 .649.186 1.19.557 1.626.372.436.93.793 1.674 1.071.28.107.535.21.766.311.231.1.43.207.594.322.165.115.293.242.384.381a.87.87 0 01.136.49.87.87 0 01-.093.404.832.832 0 01-.268.309 1.3 1.3 0 01-.43.196 2.294 2.294 0 01-.578.068c-.453 0-.893-.083-1.32-.25a4.127 4.127 0 01-1.19-.737zm-4.02-4.507H16v-1.714H10v1.714h2.69V26h1.97v-8.273z" fill="#fff" />
        </svg>
    ),
    node: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#1a1a1a" />
            <path d="M16 4.5l10.39 6v12L16 28.5 5.61 22.5v-12L16 4.5z" fill="none" stroke="#68A063" strokeWidth="1.5" />
            <path d="M14.5 12h1.5c1.5 0 2.5.8 2.5 2.2 0 1.4-1 2.3-2.5 2.3H14.5V12zm1.2 3.4h.4c.7 0 1.2-.4 1.2-1.1 0-.7-.5-1.1-1.2-1.1h-.4v2.2zm3.7-3.4h3.1v1.1h-1.9v1h1.8v1.1h-1.8v1.1h1.9V20h-3.1v-8z" fill="#68A063" />
        </svg>
    ),
    next: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#000" />
            <path d="M16 6a10 10 0 100 20A10 10 0 0016 6zm3.8 14.5l-5.3-6.5v6.5H13V11h1.5l5.3 6.5V11H21v9.5h-1.2z" fill="white" />
        </svg>
    ),
    mysql: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#1a1a1a" />
            <ellipse cx="16" cy="10" rx="9" ry="3.5" fill="#00758F" />
            <path d="M7 10v4c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-4c0 1.9-4 3.5-9 3.5S7 11.9 7 10z" fill="#00758F" />
            <path d="M7 14v4c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-4c0 1.9-4 3.5-9 3.5S7 15.9 7 14z" fill="#00758F" opacity=".8" />
            <path d="M7 18v4c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-4c0 1.9-4 3.5-9 3.5S7 19.9 7 18z" fill="#00758F" opacity=".6" />
        </svg>
    ),
    unity: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#1a1a1a" />
            <path d="M16 5l9 5v10l-9 5-9-5V10l9-5zm0 2.3L9 11v8.7l7 3.9 7-3.9V11l-7-3.7z" fill="#9b9b9b" />
            <path d="M16 12.5l4 2.3v4.6l-4 2.3-4-2.3v-4.6l4-2.3z" fill="#9b9b9b" opacity=".5" />
        </svg>
    ),
    git: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#F05033" />
            <path d="M28.2 14.8l-11-11a1.98 1.98 0 00-2.8 0l-2.1 2.1 2.6 2.6c.6-.3 1.4-.2 1.9.3.5.5.6 1.3.3 1.9l2.5 2.5c.6-.3 1.4-.2 1.9.3a1.98 1.98 0 010 2.8 1.98 1.98 0 01-2.8 0 2 2 0 01-.4-2.2L16 11.9v7c.2.1.5.3.7.5a1.98 1.98 0 010 2.8 1.98 1.98 0 01-2.8 0 1.98 1.98 0 010-2.8c.3-.3.6-.4 1-.5v-7c-.4-.1-.7-.3-1-.5a2 2 0 01-.4-2.2L11 8.6 3.8 15.8a1.98 1.98 0 000 2.8l11 11a1.98 1.98 0 002.8 0l10.6-10.6a2 2 0 000-2.8z" fill="white" />
        </svg>
    ),
    security: (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <rect width="32" height="32" rx="4" fill="#1a1a1a" />
            <path d="M16 4l9 4v8c0 5-3.6 9.6-9 11C10.6 25.6 7 21 7 16V8l9-4z" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 15.5l2.5 2.5 5-5" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    ),
};

/**
 * TechStack — griglia tecnologie raggruppate per categoria.
 */
export default function TechStack() {
    const { t } = useLanguage();

    // Raggruppa per categoria
    const grouped = TECH_STACK.reduce<Record<string, typeof TECH_STACK>>(
        (acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        },
        {}
    );

    return (
        <section
            id="stack"
            aria-labelledby="stack-heading"
            className="section-padding mx-auto max-w-6xl"
        >
            <div className="mb-12">
                <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-indigo-400">
                    {t.stack.sectionLabel}
                </p>
                <h2 id="stack-heading" className="text-3xl font-bold text-zinc-100 sm:text-4xl">
                    {t.stack.heading}
                </h2>
                <p className="mt-3 max-w-xl text-zinc-400">{t.stack.subheading}</p>
            </div>

            <div className="space-y-8">
                {Object.entries(grouped).map(([category, items]) => (
                    <div key={category}>
                        <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">
                            {t.stack.categories[category as keyof typeof t.stack.categories] ?? category}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {items.map(({ name, icon }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition-all duration-200 hover:border-indigo-500/40 hover:bg-zinc-800/60 min-w-[88px]"
                                >
                                    {ICONS[icon] ?? <div className="h-8 w-8 rounded bg-zinc-800" />}
                                    <span className="text-xs font-medium text-zinc-400">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
