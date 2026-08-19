"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/10">
            <button
                onClick={() => setLanguage("en")}
                className={`relative px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${language === "en" ? "text-black" : "text-white/60 hover:text-white"
                    }`}
            >
                {language === "en" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", duration: 0.5 }}
                    />
                )}
                <span className="relative z-10">EN</span>
            </button>
            <button
                onClick={() => setLanguage("fr")}
                className={`relative px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${language === "fr" ? "text-black" : "text-white/60 hover:text-white"
                    }`}
            >
                {language === "fr" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", duration: 0.5 }}
                    />
                )}
                <span className="relative z-10">FR</span>
            </button>
        </div>
    );
}
