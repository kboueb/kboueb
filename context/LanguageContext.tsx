"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    // Actually user request: "Le portfolio doit etre bilingue donc prévoir une version fr". 
    // Maybe default to browser detection or EN? Let's default to 'en' for international appeal but can be switched. 
    // Wait, user said "previor une version fr". Let's default to EN but make FR easy. 
    // Re-reading user request: "Le portfolio doit etre bilingue donc prévoir une version fr" -> implies it wasn't there. 
    // I will default to 'en' but toggle works.

    // Let's stick to 'en' default for now, can change if user prefers.

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
