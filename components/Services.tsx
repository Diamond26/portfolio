"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SERVICES, SERVICES_EN } from "@/lib/data";

export default function Services() {
    const { lang, t } = useLanguage();
    const items = lang === "it" ? SERVICES : SERVICES_EN;

    return (
        <section id="services" className="section" aria-labelledby="services-heading">
            <div className="section__head reveal">
                <span className="section__label">{t.services.sectionLabel}</span>
                <h2 id="services-heading" className="section__title">
                    <span>{t.services.titleA} </span>
                    <em className="serif">{t.services.titleB}</em>
                </h2>
            </div>

            <div className="services__grid">
                {items.map((s, i) => (
                    <article key={s.n} className="service reveal" data-delay={String(i + 1)}>
                        <div className="service__num">{s.n}</div>
                        <div className="service__arrow" aria-hidden="true">
                            <svg viewBox="0 0 16 16" width="14" height="14">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <ul className="service__list">
                            {s.bullets.map(b => <li key={b}>{b}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
