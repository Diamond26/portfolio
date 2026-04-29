"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TIMELINE, TIMELINE_EN } from "@/lib/data";

export default function Timeline() {
    const { lang, t } = useLanguage();
    const items = lang === "it" ? TIMELINE : TIMELINE_EN;

    return (
        <section id="timeline" className="section" aria-labelledby="timeline-heading">
            <div className="section__head reveal">
                <span className="section__label">{t.timeline.sectionLabel}</span>
                <h2 id="timeline-heading" className="section__title">
                    <span>{t.timeline.titleA} </span>
                    <em className="serif">{t.timeline.titleB}</em>,<br />
                    <span>{t.timeline.titleC}</span>
                </h2>
            </div>

            <div className="timeline__wrap">
                {items.map((item, i) => (
                    <div
                        key={item.year}
                        className={`tl-item reveal${item.live ? " tl-item--live" : ""}`}
                        data-delay={String((i % 4) + 1)}
                    >
                        <div className="tl-item__year">
                            {item.year}{item.live && ` · ${t.timeline.nowSuffix}`}
                        </div>
                        <div className="tl-item__title">{item.title}</div>
                        <div className="tl-item__desc">{item.desc}</div>
                        <div className="tl-item__meta">
                            {item.chips.map(chip => (
                                <span key={chip} className="tl-item__chip">{chip}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
