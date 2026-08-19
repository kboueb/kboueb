"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-950 text-gray-900 dark:text-white" id="contact">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/60 dark:bg-neutral-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-black/10 dark:border-white/10"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Infos */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                {t.contact.title} <span className="text-indigo-400">{t.contact.subtitle}</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                {t.contact.desc}
                            </p>

                            <div className="space-y-6">
                                <a
                                    href="mailto:kanibouebassihou@gmail.com"
                                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    kanibouebassihou@gmail.com
                                </a>

                                <a
                                    href="https://wa.me/221783029971"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                        <Phone className="w-5 h-5 group-hover:text-green-500 transition-colors" />
                                    </div>
                                    +221 78 302 99 71 (WhatsApp)
                                </a>

                                <div className="flex gap-4 pt-4">
                                    <a
                                        href="https://www.linkedin.com/in/kani-bouebassihou-543b87180/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://github.com/kboueb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder={t.contact.form.name}
                                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-gray-400 dark:bg-black/50 dark:border-white/10"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={t.contact.form.email}
                                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-gray-400 dark:bg-black/50 dark:border-white/10"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder={t.contact.form.message}
                                    rows={4}
                                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-gray-400 resize-none dark:bg-black/50 dark:border-white/10"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                {t.contact.form.send}
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
