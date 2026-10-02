"use client";

import { motion } from "framer-motion";

const technologies = [
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "WordPress",
    "Drupal",
    "Docker",
    "GitHub",
    "PHP",
    "MySQL",
];

export function TechStack() {
    return (
        <section className="relative py-14 overflow-hidden border-y border-black/10 dark:border-white/10 bg-bone/60 dark:bg-ink">
            <div className="flex relative">
                <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-paper to-transparent dark:from-ink dark:to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-paper to-transparent dark:from-ink dark:to-transparent pointer-events-none" />

                <motion.div className="flex gap-12 whitespace-nowrap animate-marquee">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-2xl md:text-4xl font-display font-bold uppercase tracking-widest"
                        >
                            <span className="text-neutral-400 dark:text-neutral-600 transition-colors duration-300 hover:text-signal cursor-default">
                                {tech}
                            </span>
                            <span className="text-signal/60 text-xl align-middle">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}