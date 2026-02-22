"use client";

/**
 * LanguageContext — gestisce lo stato della lingua corrente (IT/EN).
 * Avvolge l'intera app; i componenti figlio usano useLanguage() per accedere
 * alla lingua e aggiornarla senza alcun ricaricamento della pagina.
 */

import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "@/lib/i18n";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "it",
    setLang: () => { },
    t: translations.it,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("it");

    return (
        <LanguageContext.Provider
            value={{ lang, setLang, t: translations[lang] }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

/** Hook da usare in ogni componente per leggere la lingua e le traduzioni. */
export function useLanguage() {
    return useContext(LanguageContext);
}
