"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Search, LayoutGrid, List } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS, SECTOR_OF, SECTOR_KEYS } from "@/lib/projects";
import { useTransitionNav } from "@/components/ui/Transition";

export function ProjectsSection() {
    const { t } = useLanguage();
    const { navigate } = useTransitionNav();
    const [hovered, setHovered] = useState<number | null>(null);
    const [view, setView] = useState<"index" | "grid">("index");
    const [sector, setSector] = useState<string>("all");
    const [query, setQuery] = useState("");

    const projects = PROJECTS.map((m) => ({ ...m, summary: t.projects.items[m.itemKey] }));

    const q = query.trim().toLowerCase();
    const filtered = projects.filter(
        (p) =>
            (sector === "all" || SECTOR_OF[p.category] === sector) &&
            (q === "" || `${p.title} ${p.category} ${p.summary}`.toLowerCase().includes(q))
    );

    // Floating cursor preview (lerped)
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const spx = useSpring(px, { stiffness: 160, damping: 22 });
    const spy = useSpring(py, { stiffness: 160, damping: 22 });
    const pvx = useTransform(spx, (v) => v - 160);
    const pvy = useTransform(spy, (v) => v - 120);

    const onListMove = (e: MouseEvent) => {
        px.set(e.clientX);
        py.set(e.clientY);
    };

    const clearFilters = () => {
        setSector("all");
        setQuery("");
        setHovered(null);
    };

    const goDetail = (e: MouseEvent<HTMLAnchorElement>, slug: string) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        navigate(`/work/${slug}`);
    };

    return (
        <section className="relative py-24 md:py-36 overflow-hidden bg-paper dark:bg-ink text-ink dark:text-paper" id="projects">
            <div className="absolute top-20 left-1/3 w-[320px] h-[320px] bg-signal/10 rounded-full blur-[130px]" />

            <div className="container mx-auto px-6 md:px-10 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
                >
                    <div>
                        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-signal mb-4">
                            <span className="inline-block w-8 h-px bg-signal" /> 03 — {t.projects.title}
                        </p>
                        <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none">
                            {t.projects.heading.split(" ")[0]}
                            <span className="text-signal font-accent italic font-normal"> {t.projects.heading.split(" ").slice(1).join(" ")}</span>
                        </h2>
                    </div>
                    <p className="md:max-w-xs text-sm text-fog flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal" />
                        {t.projects.hint}
                    </p>
                </motion.div>

                {/* Controls: view toggle · live count · search · sectors */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10 flex flex-col gap-4"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                        <div className="flex items-center gap-4">
                            {/* Index ⇄ Grid toggle */}
                            <div className="flex rounded-full border border-black/15 dark:border-white/15 p-1">
                                {(
                                    [
                                        { key: "index", label: t.projects.viewIndex, icon: List },
                                        { key: "grid", label: t.projects.viewGrid, icon: LayoutGrid },
                                    ] as const
                                ).map((opt) => (
                                    <button
                                        key={opt.key}
                                        onClick={() => {
                                            setView(opt.key);
                                            setHovered(null);
                                        }}
                                        className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                                            view === opt.key
                                                ? "text-paper dark:text-ink"
                                                : "text-ink/50 hover:text-ink dark:text-paper/50 dark:hover:text-paper"
                                        }`}
                                    >
                                        {view === opt.key && (
                                            <motion.span
                                                layoutId="view-toggle"
                                                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                                className="absolute inset-0 rounded-full bg-ink dark:bg-paper"
                                            />
                                        )}
                                        <opt.icon className="relative z-10 w-3.5 h-3.5" />
                                        <span className="relative z-10">{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                            {/* Live count */}
                            <p className="font-mono text-xs text-fog tabular-nums">
                                <span className="text-signal">{String(filtered.length).padStart(2, "0")}</span>
                                {" / "}
                                {String(projects.length).padStart(2, "0")} {t.projects.count}
                            </p>
                        </div>

                        {/* Search */}
                        <label className="flex items-center gap-2.5 rounded-full border border-black/15 dark:border-white/15 bg-white/60 dark:bg-smoke px-4 py-2.5 focus-within:border-signal/60 transition-colors sm:w-64">
                            <Search className="w-4 h-4 text-fog shrink-0" />
                            <input
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setHovered(null);
                                }}
                                placeholder={t.projects.search}
                                className="w-full bg-transparent font-mono text-xs text-ink dark:text-paper placeholder:text-fog focus:outline-none"
                            />
                        </label>
                    </div>

                    {/* Sector pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        <button
                            onClick={() => {
                                setSector("all");
                                setHovered(null);
                            }}
                            className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-all ${
                                sector === "all"
                                    ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                                    : "border border-black/15 dark:border-white/15 text-ink/60 dark:text-paper/60 hover:border-signal hover:text-signal"
                            }`}
                        >
                            {t.projects.all}
                        </button>
                        {SECTOR_KEYS.map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setSector(key);
                                    setHovered(null);
                                }}
                                className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-all ${
                                    sector === key
                                        ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                                        : "border border-black/15 dark:border-white/15 text-ink/60 dark:text-paper/60 hover:border-signal hover:text-signal"
                                }`}
                            >
                                {t.projects.sectors[key]}
                            </button>
                        ))}
                        {(sector !== "all" || query.trim() !== "") && (
                            <button
                                onClick={clearFilters}
                                className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-signal hover:underline underline-offset-4"
                            >
                                {t.projects.clear}
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Index view */}
                {view === "index" && (
                    <div onMouseMove={onListMove} onMouseLeave={() => setHovered(null)}>
                        {filtered.map((project, index) => {
                            const Icon = project.icon;
                            const isActive = index === hovered;
                            return (
                                <motion.a
                                    key={project.slug}
                                    href={`/work/${project.slug}`}
                                    onClick={(e) => goDetail(e, project.slug)}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: Math.min(index, 8) * 0.04, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                    onMouseEnter={() => setHovered(index)}
                                    onFocus={() => setHovered(index)}
                                    data-cursor="view"
                                    className="group relative flex items-center gap-5 md:gap-8 py-5 md:py-6 border-b border-black/10 dark:border-white/10 cursor-pointer"
                                >
                                    {/* Hover wash */}
                                    <div
                                        className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-signal/[0.07] to-transparent transition-opacity duration-500 ${
                                            isActive ? "opacity-100" : "opacity-0"
                                        }`}
                                    />

                                    <span
                                        className={`shrink-0 font-mono text-sm tabular-nums transition-colors duration-300 ${
                                            isActive ? "text-signal" : "text-neutral-400 dark:text-neutral-600"
                                        }`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className={`font-display font-semibold text-2xl md:text-4xl leading-tight transition-all duration-300 md:group-hover:translate-x-2 ${
                                                isActive ? "text-signal" : ""
                                            }`}
                                        >
                                            {project.title}
                                        </h3>
                                        <div className="mt-1.5 flex items-center gap-3">
                                            <p className="text-xs font-mono uppercase tracking-wider text-fog">
                                                {project.category}
                                            </p>
                                            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                                            <p className="hidden sm:block text-xs text-neutral-400 dark:text-neutral-500 truncate">
                                                {project.summary}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center text-ink dark:text-paper transition-all duration-300 group-hover:bg-signal group-hover:text-white group-hover:border-signal group-hover:rotate-45">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </span>

                                    <div className="hidden md:block w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 items-center justify-center place-items-center text-signal">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                )}

                {/* Grid view */}
                {view === "grid" && (
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                        {filtered.map((project, index) => {
                            const shot = `https://image.thum.io/get/maxage/365/width/800/noanimate/${project.href}`;
                            return (
                                <motion.a
                                    key={project.slug}
                                    href={`/work/${project.slug}`}
                                    onClick={(e) => goDetail(e, project.slug)}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: Math.min(index, 8) * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                    data-cursor="view"
                                    className="group overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-smoke hover:border-signal/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-signal/10 transition-all duration-500"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-smoke">
                                        <div className="absolute inset-0 bg-gradient-to-br from-signal/25 via-signal/10 to-transparent" />
                                        <img
                                            src={shot}
                                            alt={`Screenshot of ${project.title}`}
                                            loading="lazy"
                                            onError={(e) => (e.currentTarget.style.display = "none")}
                                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <span className="absolute top-3 right-4 font-accent italic text-3xl text-white/50 select-none">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                                            {project.category}
                                        </p>
                                        <div className="mt-1.5 flex items-center justify-between gap-3">
                                            <h3 className="font-display font-semibold text-xl leading-tight">
                                                {project.title}
                                            </h3>
                                            <span className="shrink-0 w-9 h-9 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-signal group-hover:text-white group-hover:border-signal group-hover:rotate-45">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                )}

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="rounded-3xl border border-dashed border-black/15 dark:border-white/15 p-14 text-center">
                        <p className="font-display font-semibold text-2xl">{t.projects.empty}</p>
                        <button
                            onClick={clearFilters}
                            className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-signal hover:underline underline-offset-4"
                        >
                            {t.projects.clear}
                        </button>
                    </div>
                )}

                {/* Floating cursor preview (desktop index view) */}
                <div className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block" aria-hidden>
                    <motion.div style={{ x: pvx, y: pvy }} className="relative w-[320px] aspect-[16/10]">
                        <AnimatePresence>
                            {view === "index" && hovered !== null && filtered[hovered] && (
                                <motion.div
                                    key={filtered[hovered].slug}
                                    initial={{ opacity: 0, scale: 0.92 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-smoke shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-signal/25 via-signal/10 to-transparent" />
                                    <img
                                        src={`https://image.thum.io/get/maxage/365/width/800/noanimate/${filtered[hovered].href}`}
                                        alt=""
                                        onError={(e) => (e.currentTarget.style.display = "none")}
                                        className="absolute inset-0 h-full w-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-0 inset-x-0 p-4">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                                            {filtered[hovered].category}
                                        </p>
                                        <p className="font-display font-bold text-xl text-white leading-none mt-1">
                                            {filtered[hovered].title}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}