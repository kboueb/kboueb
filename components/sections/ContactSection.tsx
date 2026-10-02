"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Send, ArrowUpRight, ChevronDown, Clock } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
    const { t } = useLanguage();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [projectType, setProjectType] = useState("corporate");
    const [budget, setBudget] = useState("m");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const endpoint = "https://formspree.io/f/meajpdaw";

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    project_type: projectType,
                    budget,
                    _subject: `Contact portfolio - ${name}`,
                    _replyto: email,
                }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const inputClass =
        "w-full bg-paper dark:bg-ink border border-black/10 dark:border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-signal/60 focus:ring-2 focus:ring-signal/25 focus:shadow-lg focus:shadow-signal/10 transition-all duration-300 placeholder:text-fog";

    return (
        <section className="relative py-24 md:py-36 bg-paper dark:bg-ink text-ink dark:text-paper overflow-hidden" id="contact">
            {/* Ambient orbs */}
            <div className="absolute top-20 -left-20 w-[300px] h-[300px] bg-signal/10 rounded-full blur-[120px] animate-float" />
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-signal/[0.07] rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 md:px-10 max-w-5xl relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] uppercase text-signal mb-4">
                        <span className="inline-block w-8 h-px bg-signal" /> 04 — {t.nav.contact}
                    </p>
                    <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none">
                        {t.contact.title}{" "}
                        <span className="text-signal font-accent italic font-normal">{t.contact.subtitle}</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white/70 dark:bg-smoke backdrop-blur-xl rounded-[2rem] p-8 md:p-14 border border-black/10 dark:border-white/10 shadow-2xl shadow-signal/5 relative overflow-hidden"
                >
                    {/* Top gradient line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent" />

                    <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
                        {/* Infos */}
                        <div>
                            <p className="text-ink/70 dark:text-paper/70 mb-3 leading-relaxed">
                                {t.contact.desc}
                            </p>
                            <p className="mb-10 flex items-center gap-2 font-mono text-xs text-fog">
                                <Clock className="w-3.5 h-3.5 text-signal" />
                                {t.contact.form.promise}
                            </p>

                            <a
                                href="mailto:kanibouebassihou@gmail.com"
                                className="group block font-display text-2xl md:text-3xl font-semibold leading-snug hover:text-signal transition-colors duration-300 mb-8 break-all"
                            >
                                kanibouebassihou
                                <span className="text-signal">@</span>gmail.com
                            </a>

                            <div className="space-y-5">
                                <motion.a
                                    whileHover={{ x: 4 }}
                                    href="https://wa.me/221783029971"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors group"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center justify-center text-signal group-hover:bg-signal group-hover:text-white transition-all duration-300 group-hover:-rotate-6">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-mono">+221 78 302 99 71 (WhatsApp)</span>
                                </motion.a>

                                <div className="flex gap-3 pt-4">
                                    <motion.a
                                        whileHover={{ y: -4 }}
                                        href="https://www.linkedin.com/in/kani-bouebassihou-543b87180/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-12 h-12 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ y: -4 }}
                                        href="https://github.com/kboueb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center hover:bg-signal hover:border-signal hover:text-white transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="project-type" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-fog">
                                        {t.contact.form.typeLabel}
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="project-type"
                                            value={projectType}
                                            onChange={(e) => setProjectType(e.target.value)}
                                            className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                                        >
                                            {Object.entries(t.contact.form.types).map(([value, label]) => (
                                                <option key={value} value={value}>
                                                    {label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="budget" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-fog">
                                        {t.contact.form.budgetLabel}
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="budget"
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                            className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                                        >
                                            {Object.entries(t.contact.form.budgets).map(([value, label]) => (
                                                <option key={value} value={value}>
                                                    {label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fog" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t.contact.form.name}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={t.contact.form.email}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder={t.contact.form.message}
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className={`${inputClass} resize-none`}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="group relative w-full bg-signal disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-signal/30 hover:-translate-y-0.5"
                            >
                                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-black/20" />
                                <span className="relative flex items-center gap-2">
                                    {status === "sending" ? t.contact.form.sending : t.contact.form.send}
                                    {status === "sending" ? (
                                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            <ArrowUpRight className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-4 transition-all" />
                                        </>
                                    )}
                                </span>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ opacity: status === "success" || status === "error" ? 1 : 0, y: status === "success" || status === "error" ? 0 : -5 }}
                                className="text-center"
                            >
                                {status === "success" && (
                                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">✓ {t.contact.form.success}</p>
                                )}
                                {status === "error" && (
                                    <p className="text-sm text-red-500 font-medium">✗ {t.contact.form.error}</p>
                                )}
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}