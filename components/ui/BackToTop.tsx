"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { scrollToTop } from "@/components/ui/SmoothScroll";

export function BackToTop() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsVisible(latest > 500);
    });

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5,
                pointerEvents: isVisible ? "auto" : "none",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label={t.footer.backTop}
            className="group fixed bottom-6 right-6 z-40 p-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink shadow-lg relative overflow-hidden"
        >
            <span className="absolute inset-0 bg-signal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowUp className="relative w-5 h-5 group-hover:-translate-y-0.5 group-hover:text-white transition-all" />
        </motion.button>
    );
}