import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { WorkDetail } from "@/components/sections/WorkDetail";

export function generateStaticParams() {
    return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);
    return {
        title: project ? `${project.title} — Kani Bouebassihou` : "Work — Kani Bouebassihou",
    };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    if (!PROJECTS.some((p) => p.slug === slug)) notFound();
    return <WorkDetail slug={slug} />;
}