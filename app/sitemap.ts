import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap — Next.js generates /sitemap.xml automatically.
 * Update the URL and add entries when you add new routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://your-domain.com", // ← Edit with your domain
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
