"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function PersonalProjectsSection() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-neutral-950 text-white border-t border-white/5" id="personal-projects">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto py-12 px-6 rounded-3xl bg-neutral-900/50 border border-white/10 border-dashed"
                >
                    <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                        {t.personalProjects.title} <span className="text-yellow-400">{t.personalProjects.subtitle}</span>
                    </h2>
                    <p className="text-gray-400 mb-6">
                        {t.personalProjects.desc}
                    </p>
                    <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-semibold">
                        {t.personalProjects.soon}
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
