import {
    Building2,
    Car,
    Cog,
    Droplet,
    FileSpreadsheet,
    Globe,
    GraduationCap,
    Heart,
    Home,
    Leaf,
    TestTube,
    Utensils,
    Briefcase,
    Anchor,
    TrendingUp,
    Route,
    Languages,
    Factory,
    type LucideIcon,
} from "lucide-react";
import { translations } from "@/lib/translations";

export type Sector = "industry" | "institutions" | "health" | "business" | "marketing";

export type ProjectItemKey = keyof typeof translations.en.projects.items;

export type ProjectMeta = {
    slug: string;
    title: string;
    category: string;
    href: string;
    icon: LucideIcon;
    gradient: string;
    itemKey: ProjectItemKey;
};

export const PROJECTS: ProjectMeta[] = [
    {
        slug: "neemba",
        title: "Neemba",
        category: "Heavy Equipment",
        href: "https://neemba.com/",
        icon: Cog,
        gradient: "from-yellow-600/20 to-yellow-400/20",
        itemKey: "neemba",
    },
    {
        slug: "neemba-cat",
        title: "Neemba Cat",
        category: "Industrial Machinery",
        href: "https://www.neemba-cat.com/",
        icon: Cog,
        gradient: "from-yellow-500/20 to-orange-500/20",
        itemKey: "neembaCat",
    },
    {
        slug: "neemba-sem",
        title: "Neemba SEM",
        category: "Digital Marketing",
        href: "https://neemba.com/sem",
        icon: Cog,
        gradient: "from-yellow-500/20 to-yellow-300/20",
        itemKey: "neembaSem",
    },
    {
        slug: "kirene-groupe",
        title: "Kirène Groupe",
        category: "Industry",
        href: "https://www.kirene-groupe.com/",
        icon: Droplet,
        gradient: "from-sky-500/20 to-cyan-500/20",
        itemKey: "kirene",
    },
    {
        slug: "orca-trend",
        title: "Orca Trend",
        category: "Consulting",
        href: "https://orcatrend.com/",
        icon: TrendingUp,
        gradient: "from-teal-500/20 to-blue-500/20",
        itemKey: "orcatrend",
    },
    {
        slug: "biomerieux",
        title: "Biomérieux",
        category: "Health & Biotech",
        href: "https://www.biomerieux.com/fr/fr.html",
        icon: TestTube,
        gradient: "from-red-500/20 to-orange-500/20",
        itemKey: "biomerieux",
    },
    {
        slug: "sup-de-co",
        title: "Sup de Co",
        category: "Education",
        href: "https://supdeco.sn/",
        icon: GraduationCap,
        gradient: "from-green-500/20 to-emerald-500/20",
        itemKey: "supdeco",
    },
    {
        slug: "pacific-et-general",
        title: "Pacific et General",
        category: "Corporate",
        href: "https://www.pacificetgeneral.com/",
        icon: Building2,
        gradient: "from-slate-500/20 to-gray-500/20",
        itemKey: "pacific",
    },
    {
        slug: "occasions-autorent",
        title: "Occasions Autorent",
        category: "Automotive",
        href: "https://occasions.autorent.sn/",
        icon: Car,
        gradient: "from-yellow-500/20 to-amber-500/20",
        itemKey: "autorent",
    },
    {
        slug: "solthis",
        title: "Solthis",
        category: "NGO / Health",
        href: "https://solthis.org/fr/",
        icon: Heart,
        gradient: "from-teal-500/20 to-cyan-500/20",
        itemKey: "solthis",
    },
    {
        slug: "mandarine",
        title: "Mandarine",
        category: "Services",
        href: "https://www.mandarine-sn.com/",
        icon: Utensils,
        gradient: "from-orange-500/20 to-red-500/20",
        itemKey: "mandarine",
    },
    {
        slug: "french-african-foundation",
        title: "French-African Foundation",
        category: "Foundation",
        href: "https://french-african.org/",
        icon: Globe,
        gradient: "from-blue-600/20 to-blue-400/20",
        itemKey: "frenchAfrican",
    },
    {
        slug: "francophonie-instances",
        title: "Francophonie Instances",
        category: "Institutions",
        href: "https://instances.francophonie.org/",
        icon: Globe,
        gradient: "from-blue-500/20 to-purple-500/20",
        itemKey: "francophonieInstances",
    },
    {
        slug: "parlons-francais",
        title: "Parlons Français",
        category: "Education",
        href: "https://parlonsfrancais.francophonie.org/",
        icon: Languages,
        gradient: "from-cyan-500/20 to-blue-500/20",
        itemKey: "parlonsFrancais",
    },
    {
        slug: "sereno",
        title: "Sereno",
        category: "Real Estate",
        href: "https://sereno.sn/",
        icon: Home,
        gradient: "from-purple-500/20 to-indigo-500/20",
        itemKey: "sereno",
    },
    {
        slug: "cabex",
        title: "Cabex",
        category: "Audit & Consulting",
        href: "https://cabex.sn/",
        icon: FileSpreadsheet,
        gradient: "from-emerald-500/20 to-green-500/20",
        itemKey: "cabex",
    },
    {
        slug: "varamada",
        title: "Varamada",
        category: "Agro-Industry",
        href: "https://varamada.mg/",
        icon: Leaf,
        gradient: "from-green-600/20 to-lime-500/20",
        itemKey: "varamada",
    },
    {
        slug: "port-sec",
        title: "Port Sec",
        category: "Logistics",
        href: "https://port-sec.com/",
        icon: Anchor,
        gradient: "from-blue-800/20 to-blue-600/20",
        itemKey: "portSec",
    },
    {
        slug: "a2mp",
        title: "A2MP",
        category: "Management",
        href: "https://a2mp.com/fr/accueil/",
        icon: Briefcase,
        gradient: "from-violet-500/20 to-purple-500/20",
        itemKey: "a2mp",
    },
    {
        slug: "roadvision-infra",
        title: "Roadvision Infra",
        category: "Infrastructure",
        href: "https://roadvision-infra.com/",
        icon: Route,
        gradient: "from-orange-600/20 to-amber-500/20",
        itemKey: "roadvision",
    },
    {
        slug: "sogabel",
        title: "Sogabel",
        category: "Industry",
        href: "https://www.sogabel.com/",
        icon: Factory,
        gradient: "from-red-600/20 to-orange-500/20",
        itemKey: "sogabel",
    },
];

export const SECTOR_OF: Record<string, Sector> = {
    "Heavy Equipment": "industry",
    "Industrial Machinery": "industry",
    Industry: "industry",
    "Agro-Industry": "industry",
    Infrastructure: "industry",
    Institutions: "institutions",
    Foundation: "institutions",
    Education: "institutions",
    "NGO / Health": "health",
    "Health & Biotech": "health",
    Corporate: "business",
    Services: "business",
    Consulting: "business",
    "Audit & Consulting": "business",
    Management: "business",
    "Real Estate": "business",
    Automotive: "business",
    Logistics: "business",
    "Digital Marketing": "marketing",
};

export const SECTOR_KEYS = ["industry", "institutions", "health", "business", "marketing"] as const;

export function getProject(slug: string) {
    const index = PROJECTS.findIndex((p) => p.slug === slug);
    if (index < 0) return null;
    return {
        meta: PROJECTS[index],
        index,
        prev: PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length],
        next: PROJECTS[(index + 1) % PROJECTS.length],
    };
}
