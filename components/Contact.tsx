"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL_INFO } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });
        if (res.ok) { setStatus("success"); setName(""); setEmail(""); setMessage(""); }
        else setStatus("error");
    };

    return (
        <section id="contact" className="section contact" aria-labelledby="contact-heading">
            <div className="contact__card glass reveal">

                <div className="contact__cols">

                    {/* ── LEFT: form ── */}
                    <div className="contact__left">
                        <h2 id="contact-heading" className="cform__title">
                            {t.contact.titleA}<br />
                            <em className="serif">{t.contact.titleB}</em>
                        </h2>
                        <p className="cform__sub">{t.contact.lede}</p>

                        <form className="cform" onSubmit={handleSubmit} noValidate>

                            <div className="cform__field">
                                <label className="cform__label" htmlFor="cf-name">
                                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                                        <circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round"/>
                                    </svg>
                                    {t.contact.formName}
                                </label>
                                <input id="cf-name" className="cform__input" type="text"
                                    placeholder="Davide Rossi"
                                    value={name} onChange={e => setName(e.target.value)}
                                    required autoComplete="name" />
                            </div>

                            <div className="cform__field">
                                <label className="cform__label" htmlFor="cf-email">
                                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                                        <rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 5l7 5 7-5" strokeLinecap="round"/>
                                    </svg>
                                    {t.contact.formEmail}
                                </label>
                                <input id="cf-email" className="cform__input" type="email"
                                    placeholder="davide@esempio.it"
                                    value={email} onChange={e => setEmail(e.target.value)}
                                    required autoComplete="email" />
                            </div>

                            <div className="cform__field">
                                <label className="cform__label" htmlFor="cf-message">
                                    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                                        <rect x="1" y="1" width="14" height="11" rx="1.5"/><path d="M4 14l3-3h2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {t.contact.formMessage}
                                </label>
                                <textarea id="cf-message" className="cform__input cform__textarea"
                                    placeholder="Raccontami del tuo progetto..."
                                    value={message} onChange={e => setMessage(e.target.value)}
                                    required rows={5} />
                            </div>

                            {status === "success" && <p className="cform__feedback cform__feedback--ok">{t.contact.formSuccess}</p>}
                            {status === "error"   && <p className="cform__feedback cform__feedback--err">{t.contact.formError}</p>}

                            <button type="submit" className="cform__submit" disabled={status === "sending"}>
                                {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
                                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                                    <rect x="2" y="4" width="16" height="12" rx="2"/>
                                    <path d="M2 6l8 6 8-6" strokeLinecap="round"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                    {/* ── RIGHT: direct contact + socials ── */}
                    <div className="contact__right">
                        <p className="contact__right-title">
                            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                                <path d="M3 10L17 3l-7 14-2-7-5-2Z" strokeLinejoin="round"/>
                            </svg>
                            {t.contact.emailLabel === "EMAIL" ? "Direct Contact" : "Contatti diretti"}
                        </p>

                        <div className="contact__infos">
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="cinfo">
                                <span className="cinfo__icon">
                                    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                                        <rect x="2" y="4" width="16" height="12" rx="2"/>
                                        <path d="M2 6l8 6 8-6" strokeLinecap="round"/>
                                    </svg>
                                </span>
                                <span className="cinfo__body">
                                    <span className="cinfo__label">{t.contact.emailLabel}</span>
                                    <span className="cinfo__value">{PERSONAL_INFO.email}</span>
                                </span>
                            </a>

                            <div className="cinfo">
                                <span className="cinfo__icon">
                                    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                                        <path d="M10 18s-6-4-6-9a6 6 0 1 1 12 0c0 5-6 9-6 9Z"/>
                                        <circle cx="10" cy="9" r="2"/>
                                    </svg>
                                </span>
                                <span className="cinfo__body">
                                    <span className="cinfo__label">{t.contact.locationLabel}</span>
                                    <span className="cinfo__value">{t.contact.locationValue}</span>
                                </span>
                            </div>
                        </div>

                        <p className="contact__right-title" style={{ marginTop: 28 }}>
                            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                                <circle cx="10" cy="10" r="8"/>
                                <path d="M10 6v4l3 3" strokeLinecap="round"/>
                            </svg>
                            Social
                        </p>

                        <div className="contact__socials">
                            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="csoc" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.56 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
                                </svg>
                            </a>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="csoc" aria-label="Email">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                                    <path d="M2 7l10 7 10-7"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
