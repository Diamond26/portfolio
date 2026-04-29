"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div>
                <span className="footer__mono">© {year} {PERSONAL_INFO.name.toUpperCase()}</span>
                <span className="footer__sep"> · </span>
                <span>{t.footer.rights}</span>
            </div>
            <div>
                <span className="footer__mono">{t.footer.builtWith}</span>
                <span> Next.js · TypeScript · Tailwind</span>
            </div>
        </footer>
    );
}
