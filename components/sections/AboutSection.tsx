"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
    const { t } = useLanguage();

    type Experience = {
        role: string;
        company: string;
        location: string;
        period: string;
        desc?: string;
    };

    const experiences: Experience[] = [
        t.about.exp1,
        t.about.exp2,
        t.about.exp3,
        t.about.exp4,
    ];

    const stats = [
        { value: "5+", label: t.hero.statExp },
        { value: "21", label: t.hero.statShip },
        { value: "3", label: t.hero.statCountries },
    ];

    const education = [
        { degree: "Master 1 Génie Logiciel", school: "ESTM", year: "2021" },
        { degree: "Licence Téléinformatique", school: "ESTM", year: "2020" },
    ];

    const clients = [
        "Neemba",
        "Kirène Groupe",
        "OIF · Francophonie",
        "Solthis",
        "Biomérieux",
        "Sup de Co",
        "Mandarine",
        "Sereno",
        "Varamada",
        "Cabex",
    ];

    return (
        <section id="about" className="relative py-24 md:py-36 overflow-hidden bg-paper dark:bg-ink text-ink dark:text-paper">
            <div className="absolute top-1/4 -left-24 w-[360px] h-[360px] bg-signal/10 rounded-full blur-[130px]" />

            <div className="container mx-auto px-6 md:px-10 relative">
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-signal mb-10"
                >
                    <span className="inline-block w-8 h-px bg-signal" /> 01 — {t.nav.about}
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: statement + bio + stats */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight"
                        >
                            {t.about.statement.split(" perform").map((part, i, arr) =>
                                i < arr.length - 1 ? (
                                    <span key={i}>
                                        {part}
                                        <span className="text-signal font-accent italic font-normal"> perform</span>
                                    </span>
                                ) : (
                                    <span key={i}>{part}</span>
                                )
                            )}
                            <span className="text-signal">.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="mt-8 text-lg leading-relaxed text-ink/70 dark:text-paper/70"
                        >
                            {t.about.bio}
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="grid grid-cols-3 gap-4 mt-12"
                        >
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-smoke p-5 text-center"
                                >
                                    <div className="font-display font-bold text-3xl md:text-4xl text-signal">
                                        {s.value}
                                    </div>
                                    <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-fog mt-1">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            className="mt-10"
                        >
                            <div className="flex items-center gap-2 font-mono text-sm text-fog mb-4">
                                <GraduationCap className="w-4 h-4 text-signal" /> {t.about.education}
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {education.map((edu) => (
                                    <span
                                        key={edu.degree}
                                        className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-smoke text-sm"
                                    >
                                        <span className="text-signal font-semibold">{edu.degree}</span>
                                        <span className="text-fog"> — {edu.school}, {edu.year}</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Experience rows */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-mono text-xs uppercase tracking-[0.3em] text-fog mb-2"
                        >
                            {t.about.experience}
                        </motion.h3>

                        <div>
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative border-b border-black/10 dark:border-white/10 py-7 first:pt-2 cursor-default"
                                >
                                    {/* Hover fill */}
                                    <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-signal/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="flex items-start gap-6">
                                        <span className="mt-1 font-mono text-sm text-signal tabular-nums">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div className="flex-1">
                                            <h4 className="font-display font-semibold text-xl md:text-2xl leading-snug group-hover:text-signal transition-colors duration-300">
                                                {exp.role}
                                            </h4>
                                            <p className="mt-1.5 text-sm text-ink/70 dark:text-paper/70">
                                                <span className="text-signal font-medium">{exp.company}</span>
                                                <span className="text-fog"> — {exp.location}</span>
                                            </p>
                                            {exp.desc && (
                                                <p className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 text-sm text-fog">
                                                    {exp.desc}
                                                </p>
                                            )}
                                        </div>
                                        <span className="shrink-0 font-mono text-xs text-fog pt-1 tabular-nums">
                                            {exp.period}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Principles */}
                <div className="mt-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-signal"
                    >
                        <span className="inline-block w-8 h-px bg-signal" /> {t.about.principlesTitle}
                    </motion.p>
                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                        {t.about.principles.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="group rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-smoke p-7 hover:border-signal/50 hover:-translate-y-1 transition-all duration-500"
                            >
                                <span className="font-mono text-sm text-signal tabular-nums">
                                    0{i + 1}
                                </span>
                                <h3 className="mt-3 font-display font-semibold text-xl leading-snug">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-fog">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trusted-by marquee */}
            <div className="mt-20 border-y border-black/10 dark:border-white/10 py-8 overflow-hidden">
                <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
                    {t.about.trusted}
                </p>
                <div className="mt-5 flex relative">
                    <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-paper to-transparent dark:from-ink dark:to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-paper to-transparent dark:from-ink dark:to-transparent pointer-events-none" />
                    <div className="flex gap-10 whitespace-nowrap animate-marquee">
                        {[...clients, ...clients].map((c, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-10 font-display font-bold text-2xl md:text-3xl tracking-tight text-neutral-400 dark:text-neutral-600 hover:text-signal transition-colors cursor-default"
                            >
                                {c}
                                <span className="text-signal/50 text-lg">✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}