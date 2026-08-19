"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
    const { t } = useLanguage();
    const [isHidden, setIsHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const links = [
        { name: t.nav.home, href: "#hero" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (href === "#hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    isMobileMenuOpen
                        ? "bg-white/95 backdrop-blur-lg border-b border-black/5"
                        : isScrolled
                        ? "bg-white/70 backdrop-blur-lg border-b border-black/10 py-4 dark:bg-black/50 dark:border-white/5"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleScroll(e, "#hero")}
                        className="text-2xl font-bold tracking-tighter"
                    >
                        <span className={isMobileMenuOpen ? "text-gray-900" : "text-gray-900 dark:text-white"}>k</span>
                        <span className="text-indigo-400">boueb</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile: Switcher + Toggle */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <LanguageSwitcher />
                        <button
                            className={isMobileMenuOpen ? "text-gray-900" : "text-gray-900 dark:text-white"}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-30 bg-white/95 backdrop-blur-lg pt-24 px-6 md:hidden"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-2xl font-bold text-gray-700 hover:text-indigo-500 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
}
