"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Server,
    Layout,
    Globe,
    Wrench,
    ClipboardCheck,
    ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SkillsSection() {
    const { t } = useLanguage();
    const proofs = t.skills.proofs as Record<string, string>;

    const categories = [
        {
            id: "languages",
            title: t.skills.categories.languages,
            icon: Code2,
            skills: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "Python"],
            span: "lg:col-span-1",
        },
        {
            id: "frameworks",
            title: t.skills.categories.frameworks,
            icon: Server,
            skills: ["Laravel", "React.js", "Django"],
            span: "lg:col-span-1",
        },
        {
            id: "cms",
            title: t.skills.categories.cms,
            icon: Layout,
            skills: ["WordPress", "Drupal"],
            span: "lg:col-span-1",
        },
        {
            id: "databases",
            title: t.skills.categories.databases,
            icon: Database,
            skills: ["MySQL", "PostgreSQL", "MongoDB"],
            span: "lg:col-span-1",
        },
        {
            id: "api",
            title: t.skills.categories.api,
            icon: Globe,
            skills: ["API REST", "JSON", "Paiement", "Emailing", "Analytics"],
            span: "lg:col-span-2",
        },
        {
            id: "tools",
            title: t.skills.categories.tools,
            icon: Wrench,
            skills: ["Git", "GitHub", "Bitbucket", "Docker", "Linux/Ubuntu", "Monitoring"],
            span: "lg:col-span-2",
        },
        {
            id: "methods",
            title: t.skills.categories.methods,
            icon: ClipboardCheck,
            skills: ["Agile", "Coordination d'équipe", "Reporting", "Documentation"],
            span: "lg:col-span-1",
        },
    ];

    return (
        <section id="skills" className="relative py-24 md:py-36 overflow-hidden bg-bone/50 dark:bg-ink text-ink dark:text-paper">
            <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-signal/10 rounded-full blur-[140px]" />

            <div className="container mx-auto px-6 md:px-10 relative">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-signal mb-4">
                            <span className="inline-block w-8 h-px bg-signal" /> 02 — {t.skills.subtitle}
                        </p>
                        <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none">
                            {t.skills.heading.split(" ")[0]}
                            <span className="text-signal font-accent italic font-normal"> {t.skills.heading.split(" ").slice(1).join(" ")}</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:max-w-xs text-sm text-fog leading-relaxed"
                    >
                        {t.skills.title} {t.skills.subtitle} — {t.skills.hook}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(150px,auto)]">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        const roman = ["I", "II", "III", "IV", "V", "VI", "VII"][index];
                        return (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative ${cat.span} p-6 rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-smoke hover:border-signal/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-signal/10 transition-all duration-500`}
                            >
                                {/* Hover wash */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-signal/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-signal/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-11 h-11 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center justify-center text-signal group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-display font-semibold text-lg leading-tight">{cat.title}</h3>
                                    </div>
                                    <span className="font-accent italic text-2xl text-neutral-300 dark:text-neutral-700 group-hover:text-signal/70 transition-colors">
                                        {roman}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 rounded-lg bg-paper dark:bg-ink border border-black/10 dark:border-white/10 text-[13px] text-ink/70 dark:text-paper/70 hover:text-white hover:bg-signal hover:border-signal transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <p className="mt-4 font-mono text-[11px] leading-relaxed text-fog">
                                    <span className="text-signal">▸</span> {proofs[cat.id]}
                                </p>

                                <ArrowUpRight className="absolute bottom-5 right-5 w-4 h-4 text-signal opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}