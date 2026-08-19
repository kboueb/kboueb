"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Server,
    Layout,
    Bot,
    KanbanSquare,
    Boxes
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SkillsSection() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            id: "frontend",
            title: t.skills.categories.frontend,
            icon: Layout,
            skills: ["React.js", "WordPress", "Next.js", "Tailwind CSS"],
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            id: "backend",
            title: t.skills.categories.backend,
            icon: Server,
            skills: ["Laravel", "WordPress", "Drupal"],
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        },
        {
            id: "database",
            title: t.skills.categories.database,
            icon: Database,
            skills: ["SQL", "PostgreSQL", "MySQL"],
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/20"
        },
        {
            id: "devops",
            title: t.skills.categories.devops,
            icon: Boxes,
            skills: ["Docker", "Microservices", "GitHub Actions"],
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        },
        {
            id: "management",
            title: t.skills.categories.management,
            icon: KanbanSquare,
            skills: ["Scrum", "Kanban"],
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            id: "chatbot",
            title: t.skills.categories.chatbot,
            icon: Bot,
            skills: ["Flask", "Google Apps Scripts", "n8n"],
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
    ];

    return (
        <section className="py-20 bg-neutral-950 text-white" id="skills">
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
                                    <div className={`p-3 rounded-xl bg-black/40 ${category.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-colors"
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
