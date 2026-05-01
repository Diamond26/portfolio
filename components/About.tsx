"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const HIGHLIGHT_ICONS = [
    <svg key="s" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 4 6v6c0 5 4 9 8 10 4-1 8-5 8-10V6Z"/><path d="M9 12l2 2 4-4"/></svg>,
    <svg key="p" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 3 14h7l-1 8 10-12h-7Z"/></svg>,
    <svg key="a" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1.2"/><rect x="13" y="13" width="8" height="8" rx="1.2"/><path d="M11 7h6M7 11v6"/></svg>,
    <svg key="g" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="11" rx="3"/><path d="M8 11v3M6.5 12.5h3M15 12h.01M17.5 14h.01"/></svg>,
];

function StatCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) return;
            io.disconnect();
            const dur = 1100, t0 = performance.now();
            const step = (now: number) => {
                const p = Math.min(1, (now - t0) / dur);
                el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3)))) + suffix;
                if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }, { threshold: 0.4 });
        io.observe(el);
        return () => io.disconnect();
    }, [target, suffix]);
    return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
    const { t } = useLanguage();

    const onHighlightMove = (e: React.MouseEvent<HTMLElement>) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    return (
        <section id="about" className="section" aria-labelledby="about-heading">
            <div className="section__head reveal">
                <span className="section__label">{t.about.sectionLabel}</span>
                <h2 id="about-heading" className="section__title">
                    <span>{t.about.titleA} </span>
                    <em className="serif">{t.about.titleB}</em>,<br />
                    <span>{t.about.titleC}</span>
                </h2>
            </div>

            <div className="about__grid">
                <div className="about__bio glass reveal">
                    <div className="about__bio-kicker">
                        <span className="mono">{t.about.coreLabel}</span>
                        <span className="about__bio-line" />
                    </div>
                    {t.about.bio.map((para, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                </div>

                <div className="about__highlights">
                    {t.about.highlights.map(({ title, desc }, i) => (
                        <article
                            key={title}
                            className="highlight glass reveal"
                            data-delay={String(i + 1)}
                            onMouseMove={onHighlightMove}
                        >
                            <div className="highlight__icon">{HIGHLIGHT_ICONS[i]}</div>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="stats" aria-label="Statistiche">
                <div className="stats__item reveal">
                    <div className="stats__num"><StatCounter target={4} /></div>
                    <div className="stats__lbl">{t.about.stat1}</div>
                </div>
                <div className="stats__item reveal" data-delay="1">
                    <div className="stats__num"><StatCounter target={3} suffix="+" /></div>
                    <div className="stats__lbl">{t.about.stat2}</div>
                </div>
                <div className="stats__item reveal" data-delay="2">
                    <div className="stats__num"><StatCounter target={2} suffix=" aree" /></div>
                    <div className="stats__lbl">{t.about.stat3}</div>
                </div>
                <div className="stats__item reveal" data-delay="3">
                    <div className="stats__num">∞</div>
                    <div className="stats__lbl">{t.about.stat4}</div>
                </div>
            </div>
        </section>
    );
}
