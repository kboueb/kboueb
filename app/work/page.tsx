import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Work — Kani Bouebassihou",
  description:
    "Selected work by Kani Bouebassihou: 21 websites and apps shipped for institutions, NGOs and companies across West Africa.",
};

export default function WorkPage() {
  return (
    <div className="bg-paper pt-14 dark:bg-ink">
      <ProjectsSection />
    </div>
  );
}