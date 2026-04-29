"use client";

import { useRef, useEffect, useCallback, type ReactNode } from "react";

interface Spark {
    x: number;
    y: number;
    angle: number;
    startTime: number;
}

interface ClickSparkProps {
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
    extraScale?: number;
    children?: ReactNode;
}

export default function ClickSpark({
    sparkColor  = "#7C7AFF",
    sparkSize   = 9,
    sparkRadius = 22,
    sparkCount  = 8,
    duration    = 480,
    easing      = "ease-out",
    extraScale  = 1.2,
    children,
}: ClickSparkProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sparksRef = useRef<Spark[]>([]);

    /* Canvas fixed al viewport */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const resize = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize, { passive: true });
        return () => window.removeEventListener("resize", resize);
    }, []);

    const ease = useCallback((t: number) => {
        switch (easing) {
            case "linear":      return t;
            case "ease-in":     return t * t;
            case "ease-in-out": return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            default:            return t * (2 - t);
        }
    }, [easing]);

    /* Loop animazione */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let raf: number;

        const draw = (ts: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            sparksRef.current = sparksRef.current.filter(spark => {
                const elapsed = ts - spark.startTime;
                if (elapsed >= duration) return false;
                const eased = ease(elapsed / duration);
                const dist  = eased * sparkRadius * extraScale;
                const len   = sparkSize * (1 - eased);
                const x1 = spark.x + dist         * Math.cos(spark.angle);
                const y1 = spark.y + dist         * Math.sin(spark.angle);
                const x2 = spark.x + (dist + len) * Math.cos(spark.angle);
                const y2 = spark.y + (dist + len) * Math.sin(spark.angle);
                ctx.globalAlpha = 1 - eased;
                ctx.strokeStyle = sparkColor;
                ctx.lineWidth   = 1.8;
                ctx.lineCap     = "round";
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.globalAlpha = 1;
                return true;
            });
            raf = requestAnimationFrame(draw);
        };

        raf = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(raf);
    }, [sparkColor, sparkSize, sparkRadius, duration, ease, extraScale]);

    const handleClick = useCallback((e: MouseEvent) => {
        const now = performance.now();
        for (let i = 0; i < sparkCount; i++) {
            sparksRef.current.push({
                x: e.clientX,
                y: e.clientY,
                angle: (2 * Math.PI * i) / sparkCount,
                startTime: now,
            });
        }
    }, [sparkCount]);

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [handleClick]);

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9998 }}
                aria-hidden="true"
            />
            {children}
        </>
    );
}
