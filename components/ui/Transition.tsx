"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { createContext, useContext, useRef, useState, type ReactNode } from "react";
import { scrollToSection } from "@/components/ui/SmoothScroll";

type TransitionContextType = {
    navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
    navigate: () => {},
});

export function useTransitionNav() {
    return useContext(TransitionContext);
}

/** Navigate to a home section from any route (pushes home first if needed). */
export function useHomeNav() {
    const router = useRouter();
    const pathname = usePathname();
    return (section: string) => {
        if (pathname === "/") {
            scrollToSection(section);
        } else {
            router.push("/");
            window.setTimeout(() => scrollToSection(section), 800);
        }
    };
}

type Phase = "idle" | "covering" | "revealing";

export function TransitionProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [phase, setPhase] = useState<Phase>("idle");
    const [prevPath, setPrevPath] = useState(pathname);
    const pending = useRef<string | null>(null);

    // Target route reached behind the overlay → sweep it away (no effect needed)
    if (pathname !== prevPath) {
        setPrevPath(pathname);
        if (phase === "covering") setPhase("revealing");
    }

    const navigate = (href: string) => {
        if (href === pathname) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            router.push(href);
            return;
        }
        pending.current = href;
        setPhase("covering");
    };

    return (
        <TransitionContext.Provider value={{ navigate }}>
            {children}
            <motion.div
                aria-hidden
                initial={false}
                animate={phase}
                variants={{
                    idle: { y: "100%" },
                    covering: { y: "0%" },
                    revealing: { y: "-100%" },
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={(def) => {
                    if (def === "covering" && pending.current) {
                        const href = pending.current;
                        pending.current = null;
                        router.push(href);
                    } else if (def === "revealing") {
                        setPhase("idle");
                    }
                }}
                className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-signal"
            >
                <span className="font-display font-bold text-2xl tracking-tight text-white">
                    kboueb°
                </span>
            </motion.div>
        </TransitionContext.Provider>
    );
}