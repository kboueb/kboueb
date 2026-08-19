"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-black/5 dark:bg-black/50 backdrop-blur-md p-1 rounded-full border border-black/10 dark:border-white/10">
            <button
                onClick={() => setLanguage("en")}
                className={`relative px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${language === "en" ? "text-black" : "text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white"
                    }`}
            >
                {language === "en" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white dark:bg-white rounded-full shadow"
                        transition={{ type: "spring", duration: 0.5 }}
                    />
                )}
                <span className="relative z-10">EN</span>
            </button>
            <button
                onClick={() => setLanguage("fr")}
                className={`relative px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${language === "fr" ? "text-black" : "text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white"
                    }`}
            >
                {language === "fr" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white rounded-full shadow"
                        transition={{ type: "spring", duration: 0.5 }}
                    />
                )}
                <span className="relative z-10">FR</span>
            </button>
        </div>
    );
}
