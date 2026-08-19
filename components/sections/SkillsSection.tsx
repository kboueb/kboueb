"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Server,
    Layout,
    Globe,
    Wrench,
    ClipboardCheck
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SkillsSection() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            id: "languages",
            title: t.skills.categories.languages,
            icon: Code2,
            skills: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "Python"],
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        },
        {
            id: "frameworks",
            title: t.skills.categories.frameworks,
            icon: Server,
            skills: ["Laravel", "React.js", "Django"],
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            id: "cms",
            title: t.skills.categories.cms,
            icon: Layout,
            skills: ["WordPress", "Drupal"],
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            id: "databases",
            title: t.skills.categories.databases,
            icon: Database,
            skills: ["MySQL", "PostgreSQL", "MongoDB"],
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/20"
        },
        {
            id: "api",
            title: t.skills.categories.api,
            icon: Globe,
            skills: ["API REST", "JSON", "Paiement", "Emailing", "Analytics"],
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        },
        {
            id: "tools",
            title: t.skills.categories.tools,
            icon: Wrench,
            skills: ["Git", "GitHub", "Bitbucket", "Docker", "Linux/Ubuntu", "Monitoring"],
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            id: "methods",
            title: t.skills.categories.methods,
            icon: ClipboardCheck,
            skills: ["Agile", "Coordination d'équipe", "Reporting", "Documentation"],
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20"
        },
    ];

    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-950 text-gray-900 dark:text-white" id="skills">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center"
                >
                    {t.skills.title} <span className="text-indigo-400">{t.skills.subtitle}</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-6 rounded-3xl border ${category.border} ${category.bg} backdrop-blur-sm hover:bg-opacity-20 transition-all`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-white/70 dark:bg-black/40 ${category.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 rounded-lg bg-white/70 border border-black/10 text-sm text-gray-600 hover:text-gray-900 hover:border-gray-900/30 transition-colors dark:bg-black/40 dark:border-white/5 dark:text-gray-300 dark:hover:text-white dark:hover:border-white/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
