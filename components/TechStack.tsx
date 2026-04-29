"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
    const { t } = useLanguage();

    return (
        <section id="stack" className="section" aria-labelledby="stack-heading">
            <div className="section__head reveal">
                <span className="section__label">{t.stack.sectionLabel}</span>
                <h2 id="stack-heading" className="section__title">
                    <span>{t.stack.titleA} </span>
                    <em className="serif">{t.stack.titleB}</em>
                </h2>
            </div>

            <div className="stack__grid">
                {TECH_STACK.map((item, i) => (
                    <div key={item.name} className="tech reveal" data-delay={String((i % 4) + 1)}>
                        <div className="tech__icon" aria-hidden="true">{item.glyph}</div>
                        <div className="tech__body">
                            <div className="tech__name">{item.name}</div>
                            <div className="tech__cat">{item.category}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
