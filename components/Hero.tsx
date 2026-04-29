"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = titleRef.current;
        if (!el) return;
        let raf: number;
        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                el.style.transform = `translateY(${window.scrollY * 0.04}px)`;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
    }, []);

    const tickerItems = ["TypeScript", "Next.js", "Node.js", "MySQL", "Unity · C#", "OWASP", "RBAC", "Performance"];
    const doubled = [...tickerItems, ...tickerItems];

    return (
        <section className="hero" id="top" aria-label="Introduzione">
            {/* Badge */}
            <div className="hero__meta">
                <span className="status-dot" aria-hidden="true" />
                <span>{t.hero.badge}</span>
                <span className="hero__meta-sep">·</span>
                <span>{t.hero.location}</span>
            </div>

            {/* Titolo serif/sans mix */}
            <h1 className="hero__title" ref={titleRef}>
                <span className="hero__title-line">
                    <em className="serif">{t.hero.word1}</em>&nbsp;<span>{t.hero.word2}</span>
                </span>
                <span className="hero__title-line">
                    <span>{t.hero.word3}</span>,&nbsp;<span>{t.hero.word4}</span>
                </span>
                <span className="hero__title-line">
                    <span>{t.hero.word5}</span>&nbsp;<em className="serif hero__title-accent">{t.hero.word6}</em>
                </span>
            </h1>

            {/* Bio + CTA */}
            <div className="hero__side">
                <div className="hero__sig">
                    <div className="hero__sig-mono">01 / INTRO</div>
                    <p>{t.hero.bio}</p>
                </div>
                <div className="hero__ctas">
                    <a href="#projects" className="btn btn--primary">
                        <span>{t.hero.cta1}</span>
                        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn btn--ghost">
                        <span>{t.hero.cta2}</span>
                    </a>
                </div>
            </div>

            {/* Live card */}
            <div className="hero__card glass">
                <div className="hero__card-row">
                    <span className="hero__card-label">NOW</span>
                    <span className="hero__card-dot" aria-hidden="true" />
                </div>
                <div className="hero__card-title"><em>{t.hero.nowTitle}</em></div>
                <div className="hero__card-meta">
                    <span>Unity · C#</span>
                    <span className="hero__card-sep">—</span>
                    <span>{t.hero.nowStatus}</span>
                </div>
                <div className="hero__card-bar"><span style={{ width: "38%" }} /></div>
            </div>

            {/* Ticker */}
            <div className="hero__ticker" aria-hidden="true">
                <div className="ticker">
                    <div className="ticker__track">
                        {doubled.map((item, i) => (
                            <span key={i}>{item}{i < doubled.length - 1 && <span className="dot" />}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll */}
            <div className="hero__scroll" aria-hidden="true">
                <div className="hero__scroll-line" />
                <span>{t.hero.scroll}</span>
            </div>
        </section>
    );
}
