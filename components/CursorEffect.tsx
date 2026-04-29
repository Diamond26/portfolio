"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
    const dotRef  = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches) return;

        const dot  = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let x = window.innerWidth / 2,  y = window.innerHeight / 2;
        let rx = x, ry = y;
        let lastX = x, lastY = y, lastRx = rx, lastRy = ry;
        let raf: number;
        let running = false;

        const onMove = (e: MouseEvent) => {
            x = e.clientX;
            y = e.clientY;
            if (!running) {
                running = true;
                raf = requestAnimationFrame(loop);
            }
        };

        function loop() {
            /* Lerp più basso = anello più morbido e fluido */
            rx += (x - rx) * 0.12;
            ry += (y - ry) * 0.12;

            if (Math.abs(x - lastX) > 0.1 || Math.abs(y - lastY) > 0.1) {
                dot!.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
                lastX = x; lastY = y;
            }
            if (Math.abs(rx - lastRx) > 0.1 || Math.abs(ry - lastRy) > 0.1) {
                ring!.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
                lastRx = rx; lastRy = ry;
            }

            if (Math.abs(x - rx) > 0.3 || Math.abs(y - ry) > 0.3) {
                raf = requestAnimationFrame(loop);
            } else {
                running = false;
            }
        }

        const hoverSel = "a, button, [data-cursor]";
        const onOver = (e: MouseEvent) => {
            if ((e.target as Element).closest?.(hoverSel)) {
                dot!.classList.add("is-hover");
                ring!.classList.add("is-hover");
            }
        };
        const onOut = (e: MouseEvent) => {
            if ((e.target as Element).closest?.(hoverSel)) {
                dot!.classList.remove("is-hover");
                ring!.classList.remove("is-hover");
            }
        };
        const onLeave = () => { dot!.style.opacity = "0"; ring!.style.opacity = "0"; };
        const onEnter = () => { dot!.style.opacity = "1"; ring!.style.opacity = "1"; };

        document.addEventListener("mousemove",  onMove);
        document.addEventListener("mouseover",  onOver);
        document.addEventListener("mouseout",   onOut);
        document.addEventListener("mouseleave", onLeave);
        document.addEventListener("mouseenter", onEnter);

        return () => {
            cancelAnimationFrame(raf);
            document.removeEventListener("mousemove",  onMove);
            document.removeEventListener("mouseover",  onOver);
            document.removeEventListener("mouseout",   onOut);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("mouseenter", onEnter);
        };
    }, []);

    return (
        <>
            <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
    );
}
