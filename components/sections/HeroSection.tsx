"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll, type Variants } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Magnetic } from "@/components/ui/Magnetic";
import { scrollToSection } from "@/components/ui/SmoothScroll";

const lineVar: Variants = {
    hidden: { y: "110%" },
    show: (i: number) => ({
        y: "0%",
        transition: { delay: 0.15 + i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    }),
};

const fadeVar: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    }),
};

const cardVar: Variants = {
    hidden: { opacity: 0, y: 48, scale: 0.94 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.5 + i * 0.12, type: "spring", stiffness: 90, damping: 16 },
    }),
};

const cardShell =
    "rounded-2xl border border-black/10 dark:border-white/10 bg-white/85 dark:bg-smoke/90 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md";

export function HeroSection() {
    const { t } = useLanguage();
    const ref = useRef<HTMLElement>(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 60, damping: 20 });
    const sy = useSpring(my, { stiffness: 60, damping: 20 });

    const onMouse = (e: MouseEvent) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };

    // Parallax depths per layer
    const l1x = useTransform(sx, (v) => v * 16);
    const l1y = useTransform(sy, (v) => v * 16);
    const l2x = useTransform(sx, (v) => v * 30);
    const l2y = useTransform(sy, (v) => v * 30);
    const l3x = useTransform(sx, (v) => v * 44);
    const l3y = useTransform(sy, (v) => v * 44);
    const l4x = useTransform(sx, (v) => v * 24);
    const l4y = useTransform(sy, (v) => v * 24);
    const l5x = useTransform(sx, (v) => v * 38);
    const l5y = useTransform(sy, (v) => v * 38);

    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const stats = [
        { value: "5+", label: t.hero.statExp },
        { value: "21", label: t.hero.statShip },
        { value: "3", label: t.hero.statCountries },
    ];

    return (
        <section
            id="hero"
            ref={ref}
            onMouseMove={onMouse}
            className="relative min-h-screen w-full overflow-hidden bg-paper dark:bg-ink text-ink dark:text-paper bg-grain flex items-center"
        >
            {/* Backdrop */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[10%] right-[8%] w-[440px] h-[440px] bg-signal/15 rounded-full blur-[140px] animate-glow" />
                <div className="absolute bottom-[5%] left-[-5%] w-[380px] h-[380px] bg-signal/[0.07] rounded-full blur-[130px]" />
            </div>
            <div className="absolute inset-0 z-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_45%,transparent_100%)]" />

            <motion.div
                style={{ opacity: contentOpacity }}
                className="container mx-auto px-6 md:px-10 relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center pt-32 pb-24"
            >
                {/* Left: headline system */}
                <div>
                    <motion.div variants={fadeVar} custom={0} initial="hidden" animate="show">
                        <span className="inline-flex items-center gap-2.5 rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 dark:text-paper/70">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                            </span>
                            {t.hero.kicker}
                        </span>
                    </motion.div>

                    <h1 className="mt-7 font-display font-bold tracking-tight leading-[0.95] text-[clamp(3rem,8.5vw,6.75rem)]">
                        {t.hero.h1.map((line, i) => (
                            <span key={line} className="block overflow-hidden pb-1 -mb-1">
                                <motion.span
                                    className={`block ${i === 2 ? "font-accent italic font-normal text-signal tracking-normal" : ""}`}
                                    variants={lineVar}
                                    custom={i}
                                    initial="hidden"
                                    animate="show"
                                >
                                    {line}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p
                        variants={fadeVar}
                        custom={1}
                        initial="hidden"
                        animate="show"
                        className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70 dark:text-paper/70"
                    >
                        {t.hero.sub}
                    </motion.p>

                    <motion.div
                        variants={fadeVar}
                        custom={2}
                        initial="hidden"
                        animate="show"
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <Magnetic>
                            <button
                                onClick={() => scrollToSection("#projects")}
                                className="group flex items-center gap-2.5 rounded-full bg-signal px-8 py-4 font-semibold text-white shadow-xl shadow-signal/25 transition-shadow hover:shadow-signal/40"
                            >
                                {t.hero.ctaProject}
                                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                            </button>
                        </Magnetic>
                        <button
                            onClick={() => scrollToSection("#contact")}
                            className="group flex items-center gap-2 rounded-full border border-ink/20 dark:border-paper/25 px-8 py-4 font-semibold transition-colors hover:border-signal hover:text-signal"
                        >
                            {t.hero.ctaContact}
                            <ArrowUpRight className="w-4 h-4 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </motion.div>

                    <motion.div
                        variants={fadeVar}
                        custom={3}
                        initial="hidden"
                        animate="show"
                        className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-black/10 dark:border-white/10 pt-6"
                    >
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div className="font-display font-bold text-3xl md:text-4xl">{s.value}</div>
                                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fog">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right: shipped-stack cluster (desktop) */}
                <div className="relative hidden lg:block h-[560px]" aria-hidden>
                    {/* Browser card */}
                    <motion.div variants={cardVar} custom={0} initial="hidden" animate="show" style={{ x: l1x, y: l1y }} className="absolute left-0 top-10 w-[400px] -rotate-3">
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6 }} className={`${cardShell} p-4`}>
                            <div className="flex items-center gap-1.5 pb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                                <span className="ml-2 flex-1 rounded-md bg-black/5 dark:bg-white/10 px-3 py-1 font-mono text-[10px] text-fog">
                                    kirene-groupe.com
                                </span>
                            </div>
                            <div className="h-28 rounded-xl bg-gradient-to-br from-signal/70 via-signal/30 to-transparent" />
                            <div className="space-y-2 pt-3">
                                <div className="h-2.5 w-3/4 rounded bg-ink/10 dark:bg-white/15" />
                                <div className="h-2.5 w-1/2 rounded bg-signal/60" />
                                <div className="h-2.5 w-2/3 rounded bg-ink/10 dark:bg-white/15" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Terminal card */}
                    <motion.div variants={cardVar} custom={1} initial="hidden" animate="show" style={{ x: l2x, y: l2y }} className="absolute right-0 bottom-14 w-[300px] rotate-2">
                        <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5, delay: 0.6 }} className={`${cardShell} bg-ink/[0.92] dark:bg-black/80 border-black dark:border-white/10 p-4 font-mono text-xs`}>
                            <p className="text-fog">$ npm run deploy</p>
                            <p className="mt-2 text-mint">✓ Live in 1.2s</p>
                            <p className="mt-2 text-fog">
                                $ <span className="inline-block w-2 h-4 translate-y-0.5 bg-signal animate-blink" />
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Lighthouse card */}
                    <motion.div variants={cardVar} custom={2} initial="hidden" animate="show" style={{ x: l3x, y: l3y }} className="absolute right-6 top-0 w-[180px] rotate-6">
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4.5, delay: 1.1 }} className={`${cardShell} p-4 text-center`}>
                            <div className="font-display font-bold text-5xl text-signal">100</div>
                            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fog">
                                Perf · A11y · SEO
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Stack card */}
                    <motion.div variants={cardVar} custom={3} initial="hidden" animate="show" style={{ x: l4x, y: l4y }} className="absolute left-8 bottom-6 w-[250px] -rotate-2">
                        <motion.div animate={{ y: [0, -9, 0] }} transition={{ repeat: Infinity, duration: 5.5, delay: 0.3 }} className={`${cardShell} p-4`}>
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog mb-3">stack</p>
                            <div className="flex flex-wrap gap-2">
                                {["Laravel", "React", "Next.js", "WordPress"].map((s) => (
                                    <span key={s} className="rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/5 px-2.5 py-1 font-mono text-[11px]">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Client card */}
                    <motion.div variants={cardVar} custom={4} initial="hidden" animate="show" style={{ x: l5x, y: l5y }} className="absolute left-[32%] top-[46%] w-[230px] rotate-1">
                        <motion.div animate={{ y: [0, -11, 0] }} transition={{ repeat: Infinity, duration: 6.5, delay: 0.9 }} className={`${cardShell} p-4`}>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-mint" />
                                <p className="font-display font-bold">OIF</p>
                            </div>
                            <p className="mt-1 font-mono text-[11px] text-fog">Francophonie — 3 portals</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mobile card strip */}
            <div className="lg:hidden absolute bottom-20 inset-x-0 z-10">
                <div className="flex gap-3 overflow-x-auto px-6 pb-2" style={{ scrollbarWidth: "none" }}>
                    <div className={`${cardShell} shrink-0 w-52 p-3`}>
                        <p className="font-mono text-[10px] text-fog">kirene-groupe.com</p>
                        <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-signal/70 to-transparent" />
                    </div>
                    <div className={`${cardShell} shrink-0 w-52 p-3 font-mono text-[11px]`}>
                        <p className="text-fog">$ npm run deploy</p>
                        <p className="mt-1 text-mint">✓ Live in 1.2s</p>
                    </div>
                    <div className={`${cardShell} shrink-0 w-40 p-3 text-center`}>
                        <div className="font-display font-bold text-3xl text-signal">100</div>
                        <p className="font-mono text-[9px] uppercase text-fog">Perf · A11y · SEO</p>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-fog"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-6 h-10 rounded-full border border-current flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 rounded-full bg-signal"
                    />
                </div>
            </motion.div>
        </section>
    );
}