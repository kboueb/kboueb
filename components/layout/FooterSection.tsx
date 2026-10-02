"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { scrollToTop } from "@/components/ui/SmoothScroll";
import { useTransitionNav, useHomeNav } from "@/components/ui/Transition";
import { usePathname } from "next/navigation";

export function FooterSection() {
    const { t } = useLanguage();
    const pathname = usePathname();
    const { navigate } = useTransitionNav();
    const homeNav = useHomeNav();
    const [time, setTime] = useState("");
    const year = new Date().getFullYear();

    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Africa/Dakar",
        });
        const update = () => setTime(fmt.format(new Date()));
        update();
        const id = setInterval(update, 30000);
        return () => clearInterval(id);
    }, []);

    const goRoute = (href: string) => {
        if (pathname === href) {
            scrollToTop();
            return;
        }
        navigate(href);
    };

    const shortcuts = [
        { name: t.nav.work, action: () => goRoute("/work") },
        { name: t.nav.about, action: () => goRoute("/about") },
        { name: t.nav.stack, action: () => homeNav("#skills") },
        { name: t.nav.contact, action: () => goRoute("/contact") },
    ];

    return (
        <footer className="relative border-t border-black/10 dark:border-white/10 bg-paper dark:bg-ink text-ink dark:text-paper overflow-hidden">
            <div className="container mx-auto px-6 md:px-10 pt-16 pb-8 relative">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
                    <div>
                        <p className="font-display font-bold text-3xl tracking-tight">
                            kboueb<span className="text-signal">°</span>
                        </p>
                        <p className="mt-2 text-sm text-fog">{t.footer.built}</p>
                        <p className="mt-1 font-mono text-xs text-fog tabular-nums">
                            Dakar — {time} GMT
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-x-10 gap-y-6">
                        <div className="flex flex-col gap-3">
                            {shortcuts.map((s) => (
                                <button
                                    key={s.name}
                                    onClick={s.action}
                                    className="text-left font-mono text-xs uppercase tracking-[0.18em] text-ink/60 dark:text-paper/60 hover:text-signal transition-colors"
                                >
                                    {s.name}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-start gap-3">
                            <a
                                href="mailto:kanibouebassihou@gmail.com"
                                aria-label="Email"
                                className="w-11 h-11 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:bg-signal hover:text-white hover:border-signal transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/kboueb"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-11 h-11 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:bg-signal hover:text-white hover:border-signal transition-all duration-300"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kani-bouebassihou-543b87180/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-11 h-11 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:bg-signal hover:text-white hover:border-signal transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Watermark */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden
                    className="pointer-events-none select-none text-center font-display font-bold leading-none tracking-tight text-stroke text-[clamp(4rem,14vw,12rem)] mt-12 -mb-2 md:-mb-4"
                >
                    KBOUEB°
                </motion.div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-6">
                    <p className="font-mono text-xs text-fog">
                        © {year} Kani Bouebassihou. {t.footer.rights}.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink/60 dark:text-paper/60 hover:text-signal transition-colors"
                    >
                        {t.footer.backTop}
                        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}