"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function PersonalProjectsSection() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-bone/50 dark:bg-ink text-ink dark:text-paper border-t border-black/10 dark:border-white/10" id="personal-projects">
            <div className="container mx-auto px-6 md:px-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto py-14 px-8 rounded-[2rem] bg-white/70 dark:bg-smoke border border-black/15 dark:border-white/15 border-dashed"
                >
                    <div className="w-16 h-16 bg-black/5 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-black/10 dark:border-white/10">
                        <Sparkles className="w-8 h-8 text-signal" />
                    </div>
                    <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                        {t.personalProjects.title} <span className="text-signal font-accent italic font-normal">{t.personalProjects.subtitle}</span>
                    </h2>
                    <p className="text-ink/70 dark:text-paper/70 mb-6">
                        {t.personalProjects.desc}
                    </p>
                    <span className="inline-block px-4 py-2 rounded-full bg-signal/10 border border-signal/30 text-signal text-sm font-semibold">
                        {t.personalProjects.soon}
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
