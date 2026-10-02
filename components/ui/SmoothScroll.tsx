"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let lenis: Lenis | null = null;

export function scrollToSection(selector: string) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (lenis) {
        lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 1.4 });
    } else {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

export function scrollToTop() {
    if (lenis) {
        lenis.scrollTo(0, { duration: 1.4 });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

export function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        let raf = 0;
        const loop = (time: number) => {
            lenis?.raf(time);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis?.destroy();
            lenis = null;
        };
    }, []);
    return null;
}