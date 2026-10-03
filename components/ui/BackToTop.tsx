"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { scrollToTop } from "@/components/ui/SmoothScroll";

export function BackToTop() {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsVisible(latest > 500);
    });

    return (
        <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40">
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.5,
                    pointerEvents: isVisible ? "auto" : "none",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                aria-label={t.footer.backTop}
                className="group flex flex-col items-center gap-3 rounded-full bg-ink px-3 py-4 text-paper dark:bg-paper dark:text-ink shadow-xl relative overflow-hidden"
            >
                <span className="absolute inset-0 bg-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ArrowUp className="relative w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:text-white" />
                <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 group-hover:text-white transition-colors">
                    {language === "fr" ? "Haut" : "Top"}
                </span>
            </motion.button>
        </div>
    );
}