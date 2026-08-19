"use client";

import { motion } from "framer-motion";

const technologies = [
    "React",
    "Next.js",
    // "Vue.js",
    "Laravel",
    // "Node.js",
    "TypeScript",
    "Tailwind CSS",
    // "Sass",
    "WordPress",
    "Drupal",
    "Docker",
    "GitHub",
    // "Flutter",
    // "Azure",
];

export function TechStack() {
    return (
        <section className="py-10 bg-neutral-50 dark:bg-black overflow-hidden border-y border-black/5 dark:border-white/5">
            <div className="flex relative">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                >
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="text-2xl md:text-4xl font-bold text-neutral-300 hover:text-gray-900 dark:text-neutral-800 dark:hover:text-white transition-colors cursor-default uppercase tracking-widest"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
