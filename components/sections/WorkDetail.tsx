"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getProject, PROJECTS } from "@/lib/projects";
import { useTransitionNav, useHomeNav } from "@/components/ui/Transition";

export function WorkDetail({ slug }: { slug: string }) {
    const { t } = useLanguage();
    const { navigate } = useTransitionNav();
    const homeNav = useHomeNav();

    const found = getProject(slug);
    if (!found) return null;
    const { meta, index, prev, next } = found;
    const Icon = meta.icon;
    const summary = t.projects.items[meta.itemKey];
    const shot = `https://image.thum.io/get/maxage/365/width/1200/noanimate/${meta.href}`;
    const host = meta.href.replace(/^https?:\/\//, "").replace(/\/$/, "");

    const goDetail = (e: MouseEvent<HTMLAnchorElement>, target: string) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        navigate(target);
    };

    return (
        <article id="main-content" className="mx-auto max-w-6xl px-6 md:px-10 pt-32 pb-24 text-ink dark:text-paper">
            {/* Back */}
            <motion.button
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => homeNav("#projects")}
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink/60 dark:text-paper/60 hover:text-signal transition-colors"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t.projects.detail.back}
            </motion.button>

            {/* Header */}
            <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-signal">
                        <span className="inline-block w-8 h-px bg-signal" />
                        {meta.category} — {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </p>
                    <h1 className="mt-4 font-display font-bold tracking-tight leading-[0.95] text-[clamp(2.75rem,7vw,5.5rem)]">
                        {meta.title}
                    </h1>
                </motion.div>
                <motion.a
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    href={meta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-signal/25 transition-shadow hover:shadow-signal/40"
                >
                    {t.projects.detail.liveLabel}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-6 max-w-3xl text-xl leading-relaxed text-ink/70 dark:text-paper/70"
            >
                {summary}
            </motion.p>

            {/* Meta */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-10 grid sm:grid-cols-3 gap-4"
            >
                {[
                    { label: t.projects.detail.roleLabel, value: t.projects.detail.role },
                    { label: t.projects.detail.focusLabel, value: meta.category },
                    { label: t.projects.detail.liveLabel, value: host },
                ].map((m) => (
                    <div
                        key={m.label}
                        className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-smoke p-5"
                    >
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">{m.label}</p>
                        <p className="mt-2 font-display font-semibold text-lg leading-snug">{m.value}</p>
                    </div>
                ))}
            </motion.div>

            {/* Hero visual */}
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 bg-smoke shadow-2xl"
            >
                <div className="flex items-center gap-1.5 bg-black/40 px-5 py-3.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-3 font-mono text-xs text-white/50">{host}</span>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-signal/20 via-signal/5 to-transparent" />
                    <img
                        src={shot}
                        alt={`Screenshot of ${meta.title}`}
                        onError={(e) => (e.currentTarget.style.display = "none")}
                        className="relative w-full aspect-[16/10] object-cover object-top"
                    />
                </div>
            </motion.div>

            {/* Approach */}
            <div className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-signal">
                        <span className="inline-block w-8 h-px bg-signal" />
                        {t.projects.detail.approach}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <span className="w-12 h-12 rounded-2xl bg-signal/10 border border-signal/25 flex items-center justify-center text-signal">
                            <Icon className="w-5 h-5" />
                        </span>
                        <p className="font-display font-semibold text-2xl">{meta.title}</p>
                    </div>
                </motion.div>
                <div>
                    {t.projects.detail.points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.55 }}
                            className="flex gap-5 border-b border-black/10 dark:border-white/10 py-5 first:pt-0"
                        >
                            <span className="font-mono text-sm text-signal tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="text-ink/80 dark:text-paper/80 leading-relaxed">{point}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA band */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-20 rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-smoke p-10 md:p-14 text-center relative overflow-hidden"
            >
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[240px] bg-signal/15 rounded-full blur-[100px]" />
                <p className="relative font-display font-bold text-3xl md:text-5xl tracking-tight">
                    {t.projects.detail.similar}
                    <span className="text-signal">?</span>
                </p>
                <button
                    onClick={() => homeNav("#contact")}
                    className="group relative mt-8 inline-flex items-center gap-2.5 rounded-full bg-signal px-8 py-4 font-semibold text-white shadow-xl shadow-signal/25 hover:shadow-signal/40 transition-shadow"
                >
                    {t.hero.ctaContact}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
            </motion.div>

            {/* Prev / Next */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                    { p: prev, label: t.projects.detail.prev, icon: ArrowLeft, align: "left" as const },
                    { p: next, label: t.projects.detail.next, icon: ArrowRight, align: "right" as const },
                ].map(({ p, label, icon: ArrowIcon, align }) => (
                    <a
                        key={p.slug}
                        href={`/work/${p.slug}`}
                        onClick={(e) => goDetail(e, `/work/${p.slug}`)}
                        className={`group rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-smoke p-6 hover:border-signal/50 transition-colors ${
                            align === "right" ? "text-right" : ""
                        }`}
                    >
                        <span
                            className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fog group-hover:text-signal transition-colors ${
                                align === "right" ? "justify-end" : ""
                            }`}
                        >
                            {align === "left" && <ArrowIcon className="w-3.5 h-3.5" />}
                            {label}
                            {align === "right" && <ArrowIcon className="w-3.5 h-3.5" />}
                        </span>
                        <span className="mt-2 block font-display font-bold text-2xl">{p.title}</span>
                        <span className="mt-1 block font-mono text-xs text-fog">{p.category}</span>
                    </a>
                ))}
            </div>
        </article>
    );
}