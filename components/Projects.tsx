"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AUTO_MS   = 4500;
const TAGS_MAX  = 4;

/* ─── Position helper ─── */
function getPos(i: number, active: number, total: number): "center" | "left" | "right" | "hidden" {
    const diff = ((i - active) % total + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
}

/* ─── Lock placeholder ─── */
function LockThumb() {
    return (
        <div className="pcf__ph">
            <div className="pcf__ph-inner">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" aria-hidden="true">
                    <rect x="4" y="11" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="12" cy="16.5" r="1.5" fill="currentColor" />
                </svg>
                <span className="pcf__ph-title">Codice privato</span>
                <span className="pcf__ph-sub">Sorgente non disponibile pubblicamente</span>
            </div>
        </div>
    );
}

/* ─── Image thumb (first image only, no carousel needed here) ─── */
function ImgThumb({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="pcf__imgwrap">
            <Image src={src} alt={alt} fill sizes="(max-width:900px) 100vw, 50vw"
                style={{ objectFit: "cover" }} quality={90} priority />
        </div>
    );
}

/* ─── Main ─── */
export default function Projects() {
    const { t } = useLanguage();
    const items     = t.projects.items;
    const total     = items.length;
    const [active, setActive]   = useState(0);
    const [paused, setPaused]   = useState(false);
    const [dragging, setDragging] = useState(false);
    const dragX = useRef(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback((i: number) => {
        setActive(((i % total) + total) % total);
    }, [total]);

    /* auto-rotate */
    useEffect(() => {
        if (paused) { if (timerRef.current) clearInterval(timerRef.current); return; }
        timerRef.current = setInterval(() => setActive(a => (a + 1) % total), AUTO_MS);
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [paused, total]);

    /* swipe */
    const onTouchStart = (e: React.TouchEvent) => { dragX.current = e.touches[0].clientX; };
    const onTouchEnd   = (e: React.TouchEvent) => {
        const dx = e.changedTouches[0].clientX - dragX.current;
        if (Math.abs(dx) > 48) goTo(active + (dx < 0 ? 1 : -1));
    };
    const onMouseDown  = (e: React.MouseEvent) => { setDragging(true); dragX.current = e.clientX; };
    const onMouseUp    = (e: React.MouseEvent) => {
        if (!dragging) return;
        setDragging(false);
        const dx = e.clientX - dragX.current;
        if (Math.abs(dx) > 48) goTo(active + (dx < 0 ? 1 : -1));
    };

    return (
        <section id="projects" className="section" aria-labelledby="projects-heading">
            {/* header */}
            <div className="section__head reveal">
                <span className="section__label">{t.projects.sectionLabel}</span>
                <h2 id="projects-heading" className="section__title">
                    {t.projects.titleA}
                </h2>
            </div>

            {/* coverflow stage */}
            <div
                className="pcf"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => { setPaused(false); setDragging(false); }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            >
                <div className="pcf__stage" aria-live="polite">
                    {items.map((p, i) => {
                        const pos   = getPos(i, active, total);
                        const imgs  = p.previewImages ?? [];
                        const vTags = p.tags.slice(0, TAGS_MAX);
                        const extra = p.tags.length - TAGS_MAX;
                        const isCenter = pos === "center";

                        return (
                            <article
                                key={p.id}
                                className={`pcf__card pcf__card--${pos}`}
                                aria-hidden={!isCenter}
                                onClick={() => { if (!isCenter && !dragging) goTo(i); }}
                                aria-label={`Progetto: ${p.title}`}
                            >
                                {/* thumb */}
                                <div className="pcf__thumb">
                                    {/* status badge */}
                                    <span className={`pcard__badge pcard__badge--${p.status}`}>
                                        <span className="pcard__badge-dot" aria-hidden="true" />
                                        {p.statusLabel}
                                    </span>

                                    {imgs.length > 0
                                        ? <ImgThumb src={imgs[0]} alt={p.imageAlt} />
                                        : <LockThumb />
                                    }

                                    {/* subtle overlay gradient on thumb bottom */}
                                    <div className="pcf__thumb-fade" aria-hidden="true" />
                                </div>

                                {/* body — only fully readable on center card */}
                                <div className="pcf__body">
                                    <div className="mono pcf__kicker">{p.kicker} · {p.year}</div>
                                    <h3 className="pcf__title">{p.title}</h3>
                                    <p className="pcf__desc">{p.description}</p>

                                    {/* tags */}
                                    <div className="pcard__tags pcf__tags">
                                        {vTags.map(tag => (
                                            <span key={tag} className="pcard__tag">{tag}</span>
                                        ))}
                                        {extra > 0 && (
                                            <span className="pcard__tag pcard__tag--extra">+{extra}</span>
                                        )}
                                    </div>

                                    {/* action buttons */}
                                    <div className="pcard__foot">
                                        {p.liveUrl ? (
                                            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                                                className="pcard__btn pcard__btn--primary"
                                                onClick={e => e.stopPropagation()}>
                                                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                                                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                                                    <path d="M5.5 8h5M8 5.5 10.5 8 8 10.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {t.projects.liveDemoLabel}
                                            </a>
                                        ) : (
                                            <span className="pcard__btn pcard__btn--disabled">
                                                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                                                    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                                                    <path d="M5.5 8h5M8 5.5 10.5 8 8 10.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {t.projects.liveDemoLabel}
                                            </span>
                                        )}

                                        {p.showGithub !== false && p.githubUrl ? (
                                            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                                                className="pcard__btn pcard__btn--ghost"
                                                onClick={e => e.stopPropagation()}>
                                                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                                                    <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2.01 5.72 4.79 6.65.35.06.48-.15.48-.34v-1.19c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.02-.78-1.02-.64-.43.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.64.76 2.04.58.06-.45.24-.76.44-.93-1.55-.18-3.19-.78-3.19-3.46 0-.76.27-1.39.72-1.88-.07-.17-.31-.89.07-1.85 0 0 .58-.19 1.92.72A6.7 6.7 0 0 1 8 4.82c.59 0 1.19.08 1.74.23 1.34-.91 1.92-.72 1.92-.72.38.96.14 1.68.07 1.85.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.46.25.22.47.65.47 1.31v1.95c0 .19.13.41.48.34C12.99 13.72 15 11.09 15 8c0-3.87-3.13-7-7-7z" fill="currentColor" />
                                                </svg>
                                                {t.projects.sourceLabel}
                                            </a>
                                        ) : (
                                            <span className="pcard__btn pcard__btn--disabled">
                                                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                                                    <path d="M3 3h10M3 8h10M3 13h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                                </svg>
                                                {t.projects.sourceLabel}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* nav — arrows + dots */}
                <div className="pcf__nav">
                    <button className="pcf__arrow" onClick={() => goTo(active - 1)} aria-label="Progetto precedente">
                        <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                            <path d="M12 4 6 10l6 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <div className="pcf__dots" role="tablist" aria-label="Navigazione progetti">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                className={`cdot${i === active ? " is-active" : ""}`}
                                onClick={() => goTo(i)}
                                role="tab"
                                aria-selected={i === active}
                                aria-label={`Progetto ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button className="pcf__arrow" onClick={() => goTo(active + 1)} aria-label="Progetto successivo">
                        <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                            <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* progress bar */}
                <div className="pcf__progress" aria-hidden="true">
                    <div
                        className="pcf__progress-fill"
                        style={{ width: `${((active + 1) / total) * 100}%` }}
                    />
                </div>
            </div>
        </section>
    );
}
