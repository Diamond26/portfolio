"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/lib/data";

type TK = "kw" | "str" | "fn" | "plain" | "cmt" | "tag" | "prop";
type Line = { n: string; tokens: { t: TK; v: string }[] };

const CODE: Line[] = [
    { n: "01", tokens: [{ t: "cmt",   v: "// Welcome to my workspace" }] },
    { n: "02", tokens: [{ t: "kw",    v: "import" }, { t: "plain", v: " { " }, { t: "fn", v: "Developer" }, { t: "plain", v: " } " }, { t: "kw", v: "from" }, { t: "str", v: " './universe'" }, { t: "plain", v: ";" }] },
    { n: "03", tokens: [] },
    { n: "04", tokens: [{ t: "kw",    v: "const" }, { t: "plain", v: " " }, { t: "fn", v: "Portfolio" }, { t: "plain", v: " = () => {" }] },
    { n: "05", tokens: [{ t: "plain", v: "  " }, { t: "kw",    v: "return" }, { t: "plain", v: " (" }] },
    { n: "06", tokens: [{ t: "plain", v: "    <" }, { t: "tag",   v: "Developer" }] },
    { n: "07", tokens: [{ t: "plain", v: "      " }, { t: "prop",  v: "name" }, { t: "plain", v: "=" }, { t: "str", v: '"Davide Secci"' }] },
    { n: "08", tokens: [{ t: "plain", v: "      " }, { t: "prop",  v: "role" }, { t: "plain", v: "=" }, { t: "str", v: '"Full Stack Developer"' }] },
    { n: "09", tokens: [{ t: "plain", v: "      " }, { t: "prop",  v: "passion" }, { t: "plain", v: "=" }, { t: "str", v: '"Build secure. Ship fast."' }] },
    { n: "10", tokens: [{ t: "plain", v: "    />" }] },
    { n: "11", tokens: [{ t: "plain", v: "  );" }] },
    { n: "12", tokens: [{ t: "plain", v: "};" }] },
];

const TC: Record<TK, string> = {
    kw:    "var(--accent-2)",
    str:   "#4ade80",
    fn:    "var(--accent)",
    plain: "var(--text)",
    cmt:   "var(--text-mute)",
    tag:   "#e5a0ff",
    prop:  "#7dd3fc",
};

export default function Hero() {
    const { t } = useLanguage();

    const tickerItems = ["TypeScript", "Next.js", "Node.js", "MySQL", "Unity · C#", "OWASP", "RBAC", "Performance"];
    const doubled = [...tickerItems, ...tickerItems];

    return (
        <section className="hero" id="top" aria-label="Introduzione">

            <div className="hero__inner">
                {/* ── LEFT ─────────────────────────────────────── */}
                <div className="hero__left">

                    {/* Avatar + Badge inline */}
                    <div className="hero__top">
                        <div className="hero__avatar">
                            <Image
                                src="/fototessera.png"
                                alt="Davide Secci"
                                width={180}
                                height={180}
                                className="hero__avatar-img"
                                priority
                            />
                        </div>
                        <div className="hero__top-meta">
                            <div className="hero__badge">
                                <span className="status-dot" aria-hidden="true" />
                                <span>{t.hero.badge}</span>
                                <span className="hero__badge-sep" aria-hidden="true">·</span>
                                <span>{t.hero.location}</span>
                            </div>
                            <p className="hero__top-name">Davide Secci</p>
                            <p className="hero__top-role">{t.nav.role}</p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="hero__heading">
                        <span className="hero__h-line">
                            {t.hero.word1}&nbsp;<em className="serif hero__h-accent">{t.hero.word2}</em>
                        </span>
                        <span className="hero__h-line hero__h-strong">
                            {t.hero.word3}, {t.hero.word4}
                        </span>
                        <span className="hero__h-line hero__h-sub">
                            {t.hero.word5}&nbsp;{t.hero.word6}
                        </span>
                    </h1>

                    {/* Bio */}
                    <p className="hero__bio">{t.hero.bio}</p>

                    {/* Social icons */}
                    <div className="hero__socials">
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
                           className="hero__soc-btn" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <a href={`mailto:${PERSONAL_INFO.email}`}
                           className="hero__soc-btn" aria-label="Email">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="M2 7l10 7 10-7"/>
                            </svg>
                        </a>
                    </div>

                    {/* CTAs */}
                    <div className="hero__ctas">
                        <a href="#projects" className="btn btn--primary">
                            <span>{t.hero.cta1}</span>
                            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn--ghost">
                            <span>{t.hero.cta2}</span>
                        </a>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--cv" aria-label="Apri CV">
                            <span>CV</span>
                            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 2v8M4 7l4 4 4-4M2 13h12"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* ── RIGHT — code editor ───────────────────────── */}
                <div className="hero__editor glass" aria-hidden="true">
                    <div className="hero__ed-bar">
                        <div className="hero__ed-dots">
                            <span style={{ background: "#ff5f57" }} />
                            <span style={{ background: "#febc2e" }} />
                            <span style={{ background: "#28c840" }} />
                        </div>
                        <span className="hero__ed-file">
                            <svg viewBox="0 0 12 14" width="10" height="12" fill="none" aria-hidden="true">
                                <path d="M2 1h5l3 3v9H2V1z" stroke="var(--accent)" strokeWidth="1.2" strokeLinejoin="round"/>
                                <path d="M7 1v3h3" stroke="var(--accent)" strokeWidth="1.2" strokeLinejoin="round"/>
                            </svg>
                            Portfolio.ts
                        </span>
                    </div>
                    <div className="hero__ed-body">
                        {CODE.map((line) => (
                            <div key={line.n} className="hero__ed-line">
                                <span className="hero__ed-num">{line.n}</span>
                                <span className="hero__ed-code">
                                    {line.tokens.map((tok, i) => (
                                        <span key={i} style={{ color: TC[tok.t] }}>{tok.v}</span>
                                    ))}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Ticker ───────────────────────────────────── */}
            <div className="hero__ticker" aria-hidden="true">
                <div className="ticker">
                    <div className="ticker__track">
                        {doubled.map((item, i) => (
                            <span key={i}>{item}{i < doubled.length - 1 && <span className="dot" />}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Scroll hint ───────────────────────────────── */}
            <div className="hero__scroll" aria-hidden="true">
                <div className="hero__scroll-line" />
                <span>{t.hero.scroll}</span>
            </div>

        </section>
    );
}
