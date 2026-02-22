"use client";

import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Footer — barra copyright minimale.
 */
export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-800 px-6 py-8 text-center md:px-12">
            <p className="text-sm text-zinc-600">
                © {year}{" "}
                <span className="text-zinc-400">{PERSONAL_INFO.name}</span>
                {" — "}
                <span className="font-mono text-xs">
                    {t.footer.builtWith} Next.js · TypeScript · Tailwind CSS
                </span>
            </p>
        </footer>
    );
}
