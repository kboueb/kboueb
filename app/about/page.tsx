import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About — Kani Bouebassihou",
  description:
    "About Kani Bouebassihou, Technical Lead & full-stack developer based in Dakar: experience, principles and the teams that trusted him.",
};

export default function AboutPage() {
  return (
    <div className="bg-paper pt-14 dark:bg-ink">
      <AboutSection />
    </div>
  );
}