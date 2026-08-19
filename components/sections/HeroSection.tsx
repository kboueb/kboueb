"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
    const { t } = useLanguage();
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        // Reset index if out of bounds (when switching languages if lengths differ, though here identical)
        // But importantly, we need to trigger the effect when `t` changes
    }, [t]);

    const texts = t.hero.roles;

    useEffect(() => {
        const currentFullText = texts[textIndex % texts.length];
        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
                if (displayText === "") {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
                if (displayText === currentFullText) {
                    setTimeout(() => setIsDeleting(true), 2000);
                    return;
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? 50 : 150
        );

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, textIndex, texts]);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 mb-4">
                        {t.hero.greeting} <span className="text-indigo-400">Kani Bouebassihou</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-3xl text-gray-400 font-mono h-[40px] flex items-center gap-2"
                >
                    <span>&gt;</span>
                    <span>{displayText}</span>
                    <span className="w-[2px] h-[24px] bg-indigo-500 animate-blink" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex gap-4 mt-8 flex-col sm:flex-row"
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 group"
                    >
                        {t.hero.ctaProject}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                        {t.hero.ctaContact}
                        <Mail className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
        </section>
    );
}
