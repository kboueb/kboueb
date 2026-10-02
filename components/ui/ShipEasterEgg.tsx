"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Type "ship" anywhere (outside inputs) → deploy toast
export function ShipEasterEgg() {
    const { t } = useLanguage();
    const [show, setShow] = useState(false);

    useEffect(() => {
        let buf = "";
        let timer: number | undefined;
        const onKey = (e: KeyboardEvent) => {
            const tag = (e.target as HTMLElement | null)?.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
            if (e.metaKey || e.ctrlKey || e.altKey) return;
            if (e.key.length !== 1) return;
            buf = (buf + e.key.toLowerCase()).slice(-4);
            if (buf === "ship") {
                buf = "";
                setShow(true);
                window.clearTimeout(timer);
                timer = window.setTimeout(() => setShow(false), 2600);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    style={{ x: "-50%" }}
                    className="fixed bottom-6 left-1/2 z-[80] flex items-center gap-2.5 rounded-full bg-ink py-3 pl-4 pr-5 text-paper shadow-2xl dark:bg-paper dark:text-ink"
                    role="status"
                >
                    <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
                    <span className="font-mono text-xs">{t.easter.text}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}