"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
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
        { ...t.about.exp1 },
        { ...t.about.exp2 },
        { ...t.about.exp3 },
        { ...t.about.exp4 },
    ];

    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-950 text-gray-900 dark:text-white" id="about">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-start"
                >
                    {/* Left Column: Bio & Education */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                {t.about.title} <span className="text-indigo-400">Me</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                                {t.about.bio}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                <GraduationCap className="text-indigo-400" /> {t.about.education}
                            </h3>
                            <div className="border-l-2 border-indigo-500/20 pl-4 space-y-4">
                                <div>
                                    <h4 className="font-bold">Master 1 Génie Logiciel</h4>
                                    <p className="text-gray-500 text-sm">ESTM • 2021-2022</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Licence en Téléinformatique</h4>
                                    <p className="text-gray-500 text-sm">ESTM • 2017-2020</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Experience */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
                            <Briefcase className="text-indigo-400" /> {t.about.experience}
                        </h3>

                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l border-indigo-500/30">
                                    <div
                                        className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${
                                            index === 0 ? "bg-indigo-500" : "bg-gray-400 dark:bg-gray-600"
                                        }`}
                                    />
                                    <h4 className="text-xl font-bold">{exp.role}</h4>
                                    <p className="text-indigo-400 text-sm mb-1">
                                        {exp.company} • {exp.period}
                                    </p>
                                    <p className="text-gray-500 text-xs mb-2">{exp.location}</p>
                                    {exp.desc && (
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.desc}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
