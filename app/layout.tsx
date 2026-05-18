import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/lib/data";
import Providers from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Single source of truth for the production URL.
 * Update this once you have a real domain and every SEO reference updates with it.
 *
 * IMPORTANT: replace the placeholder below with your real deployed URL before
 * pushing to production (e.g. "https://davidesecci.dev" or your Vercel URL).
 */
const SITE_URL = "https://davidesecci.com";

/* ─── Viewport (separate export required by Next.js 14+) ───────────────── */
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0a0a0f",
    colorScheme: "dark",
};

/* ─── SEO Metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`,
        template: `%s | ${PERSONAL_INFO.name}`,
    },
    description:
        "Sviluppatore software specializzato in sistemi web sicuri, ottimizzazione delle prestazioni e game development. Progetti, stack tecnologico e contatti.",
    keywords: [
        "Davide Secci",
        "Sviluppatore Software",
        "Web Developer",
        "Game Developer",
        "Node.js",
        "TypeScript",
        "Next.js",
        "MySQL",
        "Unity",
        "Cybersecurity",
        "OWASP",
        "Portfolio",
        "Italia",
    ],
    authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
    creator: PERSONAL_INFO.name,
    /* Canonical — Next.js resolves "/" against metadataBase automatically */
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "it_IT",
        url: SITE_URL,
        title: `${PERSONAL_INFO.name} — Software Developer`,
        description: "Sistemi sicuri. Codice pulito. Soluzioni reali.",
        siteName: `${PERSONAL_INFO.name} Portfolio`,
        images: [
            {
                url: "/logo.jpg",
                width: 1080,
                height: 1080,
                alt: `${PERSONAL_INFO.name} — Software Developer Portfolio`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${PERSONAL_INFO.name} — Software Developer`,
        description: "Sistemi sicuri. Codice pulito. Soluzioni reali.",
        images: ["/logo.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

/* ─── JSON-LD Structured Data ───────────────────────────────────────────── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    description:
        "Sviluppatore software specializzato in sistemi web sicuri, ottimizzazione delle prestazioni e game development.",
    url: SITE_URL,
    email: PERSONAL_INFO.email,
    image: `${SITE_URL}/fototessera.png`,
    knowsAbout: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "MySQL",
        "Unity",
        "OWASP",
        "Web Security",
        "Full Stack Development",
        "Game Development",
    ],
    hasOccupation: {
        "@type": "Occupation",
        name: "Software Developer",
        occupationLocation: {
            "@type": "Country",
            name: "Italia",
        },
    },
    sameAs: [
        PERSONAL_INFO.github,
        /* Add LinkedIn URL here once available */
    ].filter(Boolean),
};

/* ─── Root Layout ───────────────────────────────────────────────────────── */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it" className="dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Geist:wght@400;500;600&display=optional"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-background text-text-primary antialiased">
                <Providers>{children}</Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
