"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

function ImageSlider({ images, alt, active }: { images: string[]; alt: string; active: boolean }) {
    const [cur, setCur] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goTo = useCallback((i: number) => {
        setCur(((i % images.length) + images.length) % images.length);
    }, [images.length]);

    const startTimer = useCallback(() => {
        if (images.length <= 1) return;
        timerRef.current = setInterval(() => {
            setCur(c => (c + 1) % images.length);
        }, 3000);
    }, [images.length]);

    const stopTimer = () => {
        if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    };

    /* Avvia il timer solo quando il progetto è visibile */
    useEffect(() => {
        if (active) startTimer(); else stopTimer();
        return stopTimer;
    }, [active, startTimer]);

    /* Reset immagine quando lo slide diventa attivo */
    useEffect(() => { if (active) setCur(0); }, [active]);

    const restart = (i: number) => {
        stopTimer();
        goTo(i);
        startTimer();
    };

    return (
        <div className="img-slider">
            {/* Immagine corrente */}
            {images.map((src, i) => (
                <div
                    key={src}
                    className={`img-slider__frame${i === cur ? " is-active" : ""}`}
                    aria-hidden={i !== cur}
                >
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width:1000px) 100vw, 55vw"
                        style={{ objectFit: "cover" }}
                        quality={95}
                        priority={i === 0}
                    />
                </div>
            ))}

            {/* Frecce (solo se > 1 immagine) */}
            {images.length > 1 && (
                <>
                    <button
                        className="img-slider__arrow img-slider__arrow--prev"
                        onClick={() => restart(cur - 1)}
                        aria-label="Immagine precedente"
                    >
                        <svg viewBox="0 0 16 16" width="14" height="14">
                            <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                        className="img-slider__arrow img-slider__arrow--next"
                        onClick={() => restart(cur + 1)}
                        aria-label="Immagine successiva"
                    >
                        <svg viewBox="0 0 16 16" width="14" height="14">
                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="img-slider__dots" role="tablist">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`img-slider__dot${i === cur ? " is-active" : ""}`}
                                onClick={() => restart(i)}
                                role="tab"
                                aria-selected={i === cur}
                                aria-label={`Immagine ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default function Projects() {
    const { t } = useLanguage();
    const [idx, setIdx]   = useState(0);
    const trackRef        = useRef<HTMLDivElement>(null);
    const wrapperRef      = useRef<HTMLDivElement>(null);
    const touchX          = useRef(0);
    const items           = t.projects.items;

    const goTo = useCallback((i: number) => {
        const next = ((i % items.length) + items.length) % items.length;
        setIdx(next);
        if (trackRef.current && wrapperRef.current) {
            const w = wrapperRef.current.offsetWidth;
            trackRef.current.style.transition = "transform .6s cubic-bezier(.22,.8,.22,1)";
            trackRef.current.style.transform  = `translateX(-${next * w}px)`;
        }
    }, [items.length]);

    useEffect(() => {
        if (trackRef.current && wrapperRef.current) {
            const w = wrapperRef.current.offsetWidth;
            trackRef.current.style.transition = "none";
            trackRef.current.style.transform  = `translateX(-${idx * w}px)`;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const statusClass = (s: string) =>
        s === "live" ? "pslide__status--live" : s === "wip" ? "pslide__status--wip" : "pslide__status--this";

    return (
        <section id="projects" className="section" aria-labelledby="projects-heading">
            <div className="section__head section__head--row reveal">
                <div>
                    <span className="section__label">{t.projects.sectionLabel}</span>
                    <h2 id="projects-heading" className="section__title">
                        <span>{t.projects.titleA}</span>
                        <em className="serif">{t.projects.titleB}</em>
                        <span>{t.projects.titleC}</span>
                    </h2>
                </div>
                <div className="projects__nav">
                    <button className="pnav" onClick={() => goTo(idx - 1)} aria-label="Progetto precedente">
                        <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                            <path d="M12 4 6 10l6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <span className="pnav__counter">
                        {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                    </span>
                    <button className="pnav" onClick={() => goTo(idx + 1)} aria-label="Progetto successivo">
                        <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                            <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="carousel" ref={wrapperRef}>
                <div
                    className="carousel__track"
                    ref={trackRef}
                    onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
                    onTouchEnd={e => {
                        const dx = e.changedTouches[0].clientX - touchX.current;
                        if (Math.abs(dx) > 50) goTo(idx + (dx < 0 ? 1 : -1));
                    }}
                >
                    {items.map((p, i) => (
                        <article
                            key={p.id}
                            className="pslide"
                            aria-hidden={i !== idx}
                            style={{ minWidth: "100%" }}
                        >
                            <div className="pslide__media">
                                <div className={`pslide__status ${statusClass(p.status)}`}>
                                    <span className="pslide__status-dot" aria-hidden="true" />
                                    <span>{p.statusLabel}</span>
                                </div>
                                <ImageSlider images={p.previewImages ?? []} alt={p.imageAlt} active={i === idx} />
                            </div>

                            <div className="pslide__body">
                                <div className="pslide__num">{String(i + 1).padStart(2, "0")}</div>
                                <div className="mono">{p.kicker} · {p.year}</div>
                                <h3 className="pslide__title">{p.title}</h3>
                                <p className="pslide__desc">{p.description}</p>
                                <div className="pslide__blocks">
                                    <div className="pblock">
                                        <div className="pblock__label">{t.projects.problemLabel}</div>
                                        <div className="pblock__text">{p.problem}</div>
                                    </div>
                                    <div className="pblock">
                                        <div className="pblock__label">{t.projects.solutionLabel}</div>
                                        <div className="pblock__text">{p.solution}</div>
                                    </div>
                                </div>
                                <div className="pslide__tags">
                                    {p.tags.map(tag => <span key={tag} className="ptag">{tag}</span>)}
                                </div>
                                <div className="pslide__foot">
                                    {p.showGithub !== false && p.githubUrl ? (
                                        <a className="pslide__link" href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <span>{t.projects.viewOnGithub}</span>
                                            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    ) : (
                                        <span className="pslide__mono">— {p.statusLabel}</span>
                                    )}
                                    <span className="pslide__mono">
                                        {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="carousel__dots" role="tablist" aria-label="Navigazione progetti">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            className={`cdot${i === idx ? " is-active" : ""}`}
                            onClick={() => goTo(i)}
                            role="tab"
                            aria-selected={i === idx}
                            aria-label={`Progetto ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
