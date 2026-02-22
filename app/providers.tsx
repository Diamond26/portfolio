"use client";

/**
 * Providers — wrapper client-side per tutti i context globali.
 * Importato in app/layout.tsx per avvolgere i children del body.
 */

import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return <LanguageProvider>{children}</LanguageProvider>;
}
