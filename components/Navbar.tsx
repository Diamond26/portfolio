"use client";

import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Navbar — navigazione fissa con anchor link e toggle IT/EN.
 */
export default function Navbar() {
    const { lang, setLang, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: t.nav.about, href: "#about" },
        { label: t.nav.projects, href: "#projects" },
        { label: t.nav.stack, href: "#stack" },
        { label: t.nav.contact, href: "#contact" },
    ];

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-300",
                scrolled
                    ? "border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md"
                    : "bg-transparent",
            ].join(" ")}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
                {/* Logo / Iniziali */}
                <a
                    href="#hero"
                    className="font-mono text-sm font-medium tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
                    aria-label="Torna su"
                >
                    {PERSONAL_INFO.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    <span className="text-zinc-500">.</span>
                </a>

                {/* Desktop: link + toggle lingua */}
                <div className="hidden items-center gap-8 md:flex">
                    <ul className="flex gap-8" role="list">
                        {navLinks.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-zinc-100"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === "it" ? "en" : "it")}
                        aria-label="Cambia lingua / Switch language"
                        className="flex items-center gap-1 rounded-md border border-zinc-700 px-2.5 py-1 font-mono text-xs transition-colors duration-200 hover:border-zinc-500"
                    >
                        <span className={lang === "it" ? "text-indigo-400 font-semibold" : "text-zinc-500"}>
                            IT
                        </span>
                        <span className="text-zinc-700">|</span>
                        <span className={lang === "en" ? "text-indigo-400 font-semibold" : "text-zinc-500"}>
                            EN
                        </span>
                    </button>
                </div>

                {/* Mobile: hamburger */}
                <button
                    className="flex flex-col gap-1.5 p-2 md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label={open ? "Chiudi menu" : "Apri menu"}
                    aria-expanded={open}
                >
                    <span className={`block h-px w-6 bg-zinc-300 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block h-px w-6 bg-zinc-300 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                    <span className={`block h-px w-6 bg-zinc-300 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-80 border-b border-zinc-800" : "max-h-0"}`}>
                <ul className="flex flex-col gap-1 bg-zinc-950 px-6 py-4" role="list">
                    {navLinks.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                    {/* Language toggle mobile */}
                    <li className="pt-2 border-t border-zinc-800 mt-2">
                        <button
                            onClick={() => { setLang(lang === "it" ? "en" : "it"); setOpen(false); }}
                            className="font-mono text-xs text-zinc-400"
                        >
                            <span className={lang === "it" ? "text-indigo-400 font-semibold" : ""}>IT</span>
                            {" | "}
                            <span className={lang === "en" ? "text-indigo-400 font-semibold" : ""}>EN</span>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
