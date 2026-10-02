import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

const BASE = "https://kboueb.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...["/work", "/about", "/contact"].map((path) => ({
            url: `${BASE}${path}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        })),
        ...PROJECTS.map((p) => ({
            url: `${BASE}/work/${p.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}