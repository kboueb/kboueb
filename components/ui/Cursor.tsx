"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Variant = "default" | "hover" | "view";

export function Cursor() {
    const { t } = useLanguage();
    const [enabled, setEnabled] = useState(false);
    const [variant, setVariant] = useState<Variant>("default");
    const capable = useRef<boolean | null>(null);

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 400, damping: 35 });
    const sy = useSpring(y, { stiffness: 400, damping: 35 });

    useEffect(() => {
        const onMove = (e: globalThis.MouseEvent) => {
            if (capable.current === null) {
                capable.current =
                    window.matchMedia("(pointer: fine)").matches &&
                    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                if (!capable.current) {
                    window.removeEventListener("mousemove", onMove);
                    return;
                }
            }
            setEnabled(true);
            x.set(e.clientX);
            y.set(e.clientY);
            const el = e.target as HTMLElement | null;
            if (el?.closest?.('[data-cursor="view"]')) {
                setVariant("view");
            } else if (el?.closest?.("a, button, input, select, textarea, [role='button']")) {
                setVariant("hover");
            } else {
                setVariant("default");
            }
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [x, y]);

    if (!enabled) return null;

    return (
        <>
            {/* Dot */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[90]"
                style={{ x, y }}
            >
                <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal" />
            </motion.div>
            {/* Trailing ring / view pill */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[89]"
                style={{ x: sx, y: sy }}
            >
                {variant === "view" ? (
                    <div className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-signal px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white shadow-xl">
                        {t.cursor.view}
                    </div>
                ) : (
                    <div
                        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-signal transition-all duration-200 ${
                            variant === "hover" ? "h-10 w-10 opacity-80" : "h-6 w-6 opacity-50"
                        }`}
                    />
                )}
            </motion.div>
        </>
    );
}