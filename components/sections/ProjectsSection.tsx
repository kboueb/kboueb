"use client";

import { motion } from "framer-motion";
import {
    Building2,
    Car,
    Cog,
    Droplet,
    FileSpreadsheet,
    Globe,
    GraduationCap,
    Headset,
    Heart,
    Home,
    Leaf,
    TestTube,
    Utensils,
    Briefcase,
    BookOpen,
    Anchor,
    TrendingUp,
    Route,
    Languages,
    Factory,
    ArrowRight,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectsSection() {
    const { t, language } = useLanguage();
    const carouselRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: "Neemba",
            category: "Heavy Equipment",
            summary: t.projects.items.neemba,
            icon: Cog,
            href: "https://neemba.com/",
            gradient: "from-yellow-600/20 to-yellow-400/20",
        },
        {
            title: "Neemba Cat",
            category: "Industrial Machinery",
            summary: t.projects.items.neembaCat,
            icon: Cog,
            href: "https://www.neemba-cat.com/",
            gradient: "from-yellow-500/20 to-orange-500/20",
        },
        {
            title: "Neemba SEM",
            category: "Digital Marketing",
            summary: t.projects.items.neembaSem,
            icon: Cog,
            href: "https://neemba.com/sem",
            gradient: "from-yellow-500/20 to-yellow-300/20",
        },
        {
            title: "Kirène Groupe",
            category: "Industry",
            summary: t.projects.items.kirene,
            icon: Droplet,
            href: "https://www.kirene-groupe.com/",
            gradient: "from-sky-500/20 to-cyan-500/20",
        },
        {
            title: "Orca Trend",
            category: "Consulting",
            summary: t.projects.items.orcatrend,
            icon: TrendingUp,
            href: "https://orcatrend.com/",
            gradient: "from-teal-500/20 to-blue-500/20",
        },
        {
            title: "Biomérieux",
            category: "Health & Biotech",
            summary: t.projects.items.biomerieux,
            icon: TestTube,
            href: "https://www.biomerieux.com/fr/fr.html",
            gradient: "from-red-500/20 to-orange-500/20",
        },
        {
            title: "Sup de Co",
            category: "Education",
            summary: t.projects.items.supdeco,
            icon: GraduationCap,
            href: "https://supdeco.sn/",
            gradient: "from-green-500/20 to-emerald-500/20",
        },
        {
            title: "Pacific et General",
            category: "Corporate",
            summary: t.projects.items.pacific,
            icon: Building2,
            href: "https://www.pacificetgeneral.com/",
            gradient: "from-slate-500/20 to-gray-500/20",
        },
        {
            title: "Occasions Autorent",
            category: "Automotive",
            summary: t.projects.items.autorent,
            icon: Car,
            href: "https://occasions.autorent.sn/",
            gradient: "from-yellow-500/20 to-amber-500/20",
        },
        {
            title: "Solthis",
            category: "NGO / Health",
            summary: t.projects.items.solthis,
            icon: Heart,
            href: "https://solthis.org/fr/",
            gradient: "from-teal-500/20 to-cyan-500/20",
        },
        {
            title: "Mandarine",
            category: "Services",
            summary: t.projects.items.mandarine,
            icon: Utensils,
            href: "https://www.mandarine-sn.com/",
            gradient: "from-orange-500/20 to-red-500/20",
        },
        {
            title: "French-African Foundation",
            category: "Foundation",
            summary: t.projects.items.frenchAfrican,
            icon: Globe,
            href: "https://french-african.org/",
            gradient: "from-blue-600/20 to-blue-400/20",
        },
        {
            title: "Francophonie Instances",
            category: "Institutions",
            summary: t.projects.items.francophonieInstances,
            icon: Globe,
            href: "https://instances.francophonie.org/",
            gradient: "from-blue-500/20 to-purple-500/20",
        },
        {
            title: "Parlons Français",
            category: "Education",
            summary: t.projects.items.parlonsFrancais,
            icon: Languages,
            href: "https://parlonsfrancais.francophonie.org/",
            gradient: "from-cyan-500/20 to-blue-500/20",
        },
        {
            title: "Neemba SEM",
            category: "Digital Marketing",
            summary: t.projects.items.neembaSem,
            icon: Cog,
            href: "https://neemba.com/sem",
            gradient: "from-yellow-500/20 to-yellow-300/20",
        },
        {
            title: "Sereno",
            category: "Real Estate",
            summary: t.projects.items.sereno,
            icon: Home,
            href: "https://sereno.sn/",
            gradient: "from-purple-500/20 to-indigo-500/20",
        },
        {
            title: "Cabex",
            category: "Audit & Consulting",
            summary: t.projects.items.cabex,
            icon: FileSpreadsheet,
            href: "https://cabex.sn/",
            gradient: "from-emerald-500/20 to-green-500/20",
        },
        {
            title: "Varamada",
            category: "Agro-Industry",
            summary: t.projects.items.varamada,
            icon: Leaf,
            href: "https://varamada.mg/",
            gradient: "from-green-600/20 to-lime-500/20",
        },
        {
            title: "Port Sec",
            category: "Logistics",
            summary: t.projects.items.portSec,
            icon: Anchor,
            href: "https://port-sec.com/",
            gradient: "from-blue-800/20 to-blue-600/20",
        },
        {
            title: "A2MP",
            category: "Management",
            summary: t.projects.items.a2mp,
            icon: Briefcase,
            href: "https://a2mp.com/fr/accueil/",
            gradient: "from-violet-500/20 to-purple-500/20",
        },
        {
            title: "Roadvision Infra",
            category: "Infrastructure",
            summary: t.projects.items.roadvision,
            icon: Route,
            href: "https://roadvision-infra.com/",
            gradient: "from-orange-600/20 to-amber-500/20",
        },
        {
            title: "Sogabel",
            category: "Industry",
            summary: t.projects.items.sogabel,
            icon: Factory,
            href: "https://www.sogabel.com/",
            gradient: "from-red-600/20 to-orange-500/20",
        },
    ];

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 bg-neutral-50 dark:bg-black text-gray-900 dark:text-white" id="projects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        {t.projects.title} <span className="text-indigo-400">{t.projects.subtitle}</span>
                    </h2>
                    <p className="text-gray-500 flex items-center justify-center gap-2">
                        {t.projects.scrollHelper}
                        <ArrowRight className="w-4 h-4 animate-bounce-x" />
                    </p>
                </motion.div>

                <div className="relative group/carousel">
                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollLeft}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/10 hover:bg-gray-900 text-gray-900 hover:text-white dark:bg-white/10 dark:hover:bg-white dark:text-white dark:hover:text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900/10 hover:bg-gray-900 text-gray-900 hover:text-white dark:bg-white/10 dark:hover:bg-white dark:text-white dark:hover:text-black rounded-full flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover/carousel:opacity-100"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide px-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            const screenshot = `https://image.thum.io/get/maxage/365/width/800/noanimate/${project.href}`;
                            return (
                                <motion.a
                                    key={index}
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="snap-center flex-shrink-0 w-[85vw] md:w-[600px] h-[350px] relative group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 hover:border-white/30 transition-all"
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                                    />

                                    {/* Website Screenshot */}
                                    <img
                                        src={screenshot}
                                        alt={`Screenshot of ${project.title}`}
                                        loading="lazy"
                                        onError={(e) => (e.currentTarget.style.display = "none")}
                                        className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-90 scale-105 group-hover:scale-100 transition-all duration-700"
                                    />

                                    {/* Readability Fade */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

                                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                        <div className="flex justify-between items-start">
                                            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
                                                <Icon className="w-8 h-8 text-indigo-400 group-hover:text-white transition-colors" />
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                                                {t.projects.visit} <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-indigo-400 text-sm font-mono mb-2 uppercase tracking-wider">
                                                {project.category}
                                            </p>
                                            <h3 className="text-3xl font-bold mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                                            <p className="text-gray-400 group-hover:text-gray-200 transition-colors line-clamp-2">
                                                {project.summary}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute -inset-full top-0 block h-[500%] w-1/2 -rotate-45 bg-gradient-to-r from-transparent to-white/5 opacity-40 blur-2xl group-hover:animate-shine" />
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
