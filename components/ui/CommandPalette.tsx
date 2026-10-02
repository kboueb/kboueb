"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    ArrowUpRight,
    Sun,
    Moon,
    Languages,
    Mail,
    Check,
    Github,
    Linkedin,
    CornerDownLeft,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useTransitionNav, useHomeNav } from "@/components/ui/Transition";

type CommandPaletteProps = {
    open: boolean;
    onClose: () => void;
};

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
    const { t, language, setLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const { navigate } = useTransitionNav();
    const homeNav = useHomeNav();
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(0);
    const [copied, setCopied] = useState(false);
    const [prevOpen, setPrevOpen] = useState(open);

    // Reset palette state whenever it (re)opens — render-phase adjustment, no effect needed
    if (open !== prevOpen) {
        setPrevOpen(open);
        setSelected(0);
        setQuery("");
    }

    const items = useMemo(
        () => [
            { group: t.palette.navigation, label: t.nav.work, icon: ArrowUpRight, run: () => navigate("/work") },
            { group: t.palette.navigation, label: t.nav.about, icon: ArrowUpRight, run: () => navigate("/about") },
            { group: t.palette.navigation, label: t.nav.stack, icon: ArrowUpRight, run: () => homeNav("#skills") },
            { group: t.palette.navigation, label: t.nav.contact, icon: ArrowUpRight, run: () => navigate("/contact") },
            {
                group: t.palette.actions,
                label: t.palette.theme,
                icon: theme === "dark" ? Sun : Moon,
                run: () => toggleTheme(),
            },
            {
                group: t.palette.actions,
                label: t.palette.language,
                icon: Languages,
                run: () => setLanguage(language === "en" ? "fr" : "en"),
            },
            {
                group: t.palette.actions,
                label: copied ? t.palette.copied : t.palette.copy,
                icon: copied ? Check : Mail,
                run: async () => {
                    try {
                        await navigator.clipboard.writeText("kanibouebassihou@gmail.com");
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    } catch {
                        window.location.href = "mailto:kanibouebassihou@gmail.com";
                    }
                },
                keepOpen: true,
            },
            {
                group: t.palette.actions,
                label: t.palette.github,
                icon: Github,
                run: () => window.open("https://github.com/kboueb", "_blank"),
            },
            {
                group: t.palette.actions,
                label: t.palette.linkedin,
                icon: Linkedin,
                run: () => window.open("https://www.linkedin.com/in/kani-bouebassihou-543b87180/", "_blank"),
            },
        ],
        [t, theme, language, toggleTheme, setLanguage, copied, navigate, homeNav]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter((i) => i.label.toLowerCase().includes(q));
    }, [items, query]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelected((s) => (s + 1) % Math.max(filtered.length, 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelected((s) => (s - 1 + filtered.length) % Math.max(filtered.length, 1));
            } else if (e.key === "Enter") {
                e.preventDefault();
                const item = filtered[selected];
                if (item) {
                    item.run();
                    if (!item.keepOpen) onClose();
                }
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, filtered, selected, onClose]);

    let lastGroup = "";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh] bg-ink/60 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-paper dark:bg-smoke shadow-2xl"
                    >
                        <div className="flex items-center gap-3 border-b border-black/10 dark:border-white/10 px-4">
                            <Search className="w-4 h-4 text-fog shrink-0" />
                            <input
                                autoFocus
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setSelected(0);
                                }}
                                placeholder={t.palette.placeholder}
                                className="w-full bg-transparent py-4 font-mono text-sm text-ink dark:text-paper placeholder:text-fog focus:outline-none"
                            />
                            <kbd className="shrink-0 rounded-md border border-black/10 dark:border-white/10 px-2 py-1 font-mono text-[10px] text-fog">
                                ESC
                            </kbd>
                        </div>

                        <div className="max-h-[42vh] overflow-y-auto p-2">
                            {filtered.length === 0 && (
                                <p className="px-3 py-6 text-center font-mono text-sm text-fog">—</p>
                            )}
                            {filtered.map((item, i) => {
                                const header =
                                    item.group !== lastGroup ? (
                                        <p
                                            key={`g-${item.group}-${i}`}
                                            className="px-3 pt-3 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog"
                                        >
                                            {item.group}
                                        </p>
                                    ) : null;
                                lastGroup = item.group;
                                const Icon = item.icon;
                                return (
                                    <div key={`${item.group}-${item.label}`}>
                                        {header}
                                        <button
                                            onMouseEnter={() => setSelected(i)}
                                            onClick={() => {
                                                item.run();
                                                if (!item.keepOpen) onClose();
                                            }}
                                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                                                selected === i
                                                    ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                                                    : "text-ink/70 dark:text-paper/70"
                                            }`}
                                        >
                                            <Icon className="w-4 h-4 shrink-0" />
                                            <span className="flex-1 font-medium">{item.label}</span>
                                            {selected === i && <CornerDownLeft className="w-3.5 h-3.5 opacity-60" />}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex items-center gap-4 border-t border-black/10 dark:border-white/10 px-4 py-2.5 font-mono text-[10px] text-fog">
                            <span>↑↓ navigate</span>
                            <span>↵ select</span>
                            <span>esc close</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}