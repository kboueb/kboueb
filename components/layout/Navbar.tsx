"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Command } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { useHomeNav } from "@/components/ui/Transition";

export function Navbar() {
    const { t } = useLanguage();
    const [isHidden, setIsHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const { scrollY } = useScroll();
    const homeNav = useHomeNav();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
        setIsScrolled(latest > 48);
    });

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setPaletteOpen((v) => !v);
            }
            if (e.key === "Escape") {
                setPaletteOpen(false);
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const links = [
        { name: t.nav.work, href: "#projects" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.stack, href: "#skills" },
        { name: t.nav.contact, href: "#contact" },
    ];

    const go = (href: string) => {
        setIsMobileMenuOpen(false);
        homeNav(href);
    };

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={isHidden && !isMobileMenuOpen ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled || isMobileMenuOpen
                        ? "bg-paper/80 dark:bg-ink/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10 py-3"
                        : "bg-transparent py-5"
                }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Wordmark */}
                    <button
                        onClick={() => go("#hero")}
                        className="font-display font-bold text-xl tracking-tight text-ink dark:text-paper"
                    >
                        kboueb<span className="text-signal">°</span>
                    </button>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => go(link.href)}
                                className="group relative overflow-hidden font-mono text-xs uppercase tracking-[0.18em] text-ink/60 dark:text-paper/60 hover:text-ink dark:hover:text-paper transition-colors"
                            >
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                    {link.name}
                                </span>
                                <span className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-signal">
                                    {link.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Desktop controls */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => setPaletteOpen(true)}
                            className="flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 px-3.5 py-1.5 font-mono text-xs text-fog hover:text-ink dark:hover:text-paper hover:border-ink/40 dark:hover:border-paper/40 transition-colors"
                        >
                            <Command className="w-3.5 h-3.5" />
                            ⌘K
                        </button>
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            onClick={() => setPaletteOpen(true)}
                            aria-label="Command palette"
                            className="w-9 h-9 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-fog"
                        >
                            <Command className="w-4 h-4" />
                        </button>
                        <ThemeToggle />
                        <button
                            aria-label="Menu"
                            className="text-ink dark:text-paper"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile overlay menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-30 bg-paper/95 dark:bg-ink/95 backdrop-blur-xl pt-28 px-8 md:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {links.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={() => go(link.href)}
                                    className="text-left font-display font-bold text-5xl tracking-tight text-ink dark:text-paper active:text-signal"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-10 flex items-center gap-4"
                        >
                            <LanguageSwitcher />
                            <span className="font-mono text-xs text-fog">Dakar — GMT</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
        </>
    );
}