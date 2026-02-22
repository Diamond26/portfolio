import type { Metadata } from "next";
import "./globals.css";
import { PERSONAL_INFO } from "@/lib/data";
import Providers from "./providers";

/* ─── SEO Metadata ──────────────────────────────────────────────────────── */
export const metadata: Metadata = {
    metadataBase: new URL("https://your-domain.com"),
    title: {
        default: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}`,
        template: `%s | ${PERSONAL_INFO.name}`,
    },
    description:
        "Sviluppatore software specializzato in sistemi web sicuri, ottimizzazione delle prestazioni e game development. Progetti, stack tecnologico e contatti.",
    keywords: [
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
    openGraph: {
        type: "website",
        locale: "it_IT",
        url: "https://your-domain.com",
        title: `${PERSONAL_INFO.name} — Software Developer`,
        description: "Sistemi sicuri. Codice pulito. Soluzioni reali.",
        siteName: `${PERSONAL_INFO.name} Portfolio`,
    },
    twitter: {
        card: "summary_large_image",
        title: `${PERSONAL_INFO.name} — Software Developer`,
        description: "Sistemi sicuri. Codice pulito. Soluzioni reali.",
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
    email: PERSONAL_INFO.email,
    url: "https://your-domain.com",
    sameAs: [PERSONAL_INFO.github],
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
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-background text-text-primary antialiased">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
