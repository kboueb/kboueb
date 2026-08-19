"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-neutral-950 text-white" id="about">
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
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
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
                            <div className="relative pl-6 border-l border-indigo-500/30">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500" />
                                <h4 className="text-xl font-bold">{t.about.exp1.role}</h4>
                                <p className="text-indigo-400 text-sm mb-2">Insign.Africa • Nov 2023 - Present</p>
                                <div className="text-gray-400 text-sm">
                                    {t.about.exp1.desc}
                                </div>
                            </div>

                            <div className="relative pl-6 border-l border-indigo-500/30">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-600" />
                                <h4 className="text-xl font-bold">{t.about.exp2.role}</h4>
                                <p className="text-indigo-400 text-sm mb-2">Insign.Africa • Nov 2021 - Oct 2023</p>
                                <p className="text-gray-400 text-sm">
                                    {t.about.exp2.desc}
                                </p>
                            </div>

                            <div className="relative pl-6 border-l border-indigo-500/30">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-600" />
                                <h4 className="text-xl font-bold">{t.about.exp3.role}</h4>
                                <p className="text-indigo-400 text-sm mb-2">CAD-COMMUNICATION • Jun 2021 - Sep 2021</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
