import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap — Next.js generates /sitemap.xml automatically.
 *
 * IMPORTANT: update SITE_URL in app/layout.tsx; this file reads it via the
 * same constant so both stay in sync once you set the real domain.
 *
 * For a single-page portfolio, one entry is correct. Add entries here if
 * you ever add sub-pages (e.g. /blog, /case-studies).
 */

// Kept in sync manually with layout.tsx until a shared config module is added.
const SITE_URL = "https://davidesecci.com";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
