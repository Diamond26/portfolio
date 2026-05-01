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

        if (res.ok) {
            setStatus("success");
            setName(""); setEmail(""); setMessage("");
        } else {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="section contact" aria-labelledby="contact-heading">
            <div className="contact__card glass reveal">
                <span className="section__label">{t.contact.sectionLabel}</span>

                <h2 id="contact-heading" className="contact__title">
                    <span>{t.contact.titleA}</span><br />
                    <em className="serif">{t.contact.titleB}</em>
                </h2>

                <p className="contact__lede">{t.contact.lede}</p>

                {/* Form */}
                <form className="cform" onSubmit={handleSubmit} noValidate>
                    <div className="cform__row">
                        <div className="cform__field">
                            <label className="cform__label" htmlFor="cf-name">{t.contact.formName}</label>
                            <input
                                id="cf-name"
                                className="cform__input"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                                autoComplete="name"
                            />
                        </div>
                        <div className="cform__field">
                            <label className="cform__label" htmlFor="cf-email">{t.contact.formEmail}</label>
                            <input
                                id="cf-email"
                                className="cform__input"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                        </div>
                    </div>
                    <div className="cform__field">
                        <label className="cform__label" htmlFor="cf-message">{t.contact.formMessage}</label>
                        <textarea
                            id="cf-message"
                            className="cform__input cform__textarea"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                            rows={5}
                        />
                    </div>

                    {status === "success" && (
                        <p className="cform__feedback cform__feedback--ok">{t.contact.formSuccess}</p>
                    )}
                    {status === "error" && (
                        <p className="cform__feedback cform__feedback--err">{t.contact.formError}</p>
                    )}

                    <button
                        type="submit"
                        className="cform__submit btn btn--primary"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
                    </button>
                </form>

                <div className="contact__links">
                    <a className="clink" href={`mailto:${PERSONAL_INFO.email}`}>
                        <span className="clink__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>
                            </svg>
                        </span>
                        <span className="clink__body">
                            <span className="clink__label">{t.contact.emailLabel}</span>
                            <span className="clink__value">{PERSONAL_INFO.email}</span>
                        </span>
                        <span className="clink__arrow" aria-hidden="true">↗</span>
                    </a>

                    <a className="clink" href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                        <span className="clink__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.56 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
                            </svg>
                        </span>
                        <span className="clink__body">
                            <span className="clink__label">{t.contact.githubLabel}</span>
                            <span className="clink__value">{PERSONAL_INFO.github.replace("https://", "")}</span>
                        </span>
                        <span className="clink__arrow" aria-hidden="true">↗</span>
                    </a>

                    <div className="clink">
                        <span className="clink__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11Z"/>
                                <circle cx="12" cy="11" r="2.5"/>
                            </svg>
                        </span>
                        <span className="clink__body">
                            <span className="clink__label">{t.contact.locationLabel}</span>
                            <span className="clink__value">{t.contact.locationValue}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
