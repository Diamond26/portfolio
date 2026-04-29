"use client";

import { useEffect } from "react";

export default function RevealObserver() {
    useEffect(() => {
        const io = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-in");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
        );

        const observe = () =>
            document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach(el => io.observe(el));

        observe();

        /* Intercetta nuovi elementi .reveal aggiunti dopo l'idratazione dei client components */
        const mo = new MutationObserver(observe);
        mo.observe(document.body, { childList: true, subtree: true });

        return () => { io.disconnect(); mo.disconnect(); };
    }, []); // ← una sola volta al mount

    return null;
}
