import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PersonalProjectsSection } from "@/components/sections/PersonalProjectsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStack } from "@/components/sections/TechStack";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-paper dark:bg-ink">
      <HeroSection />
      <TechStack />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PersonalProjectsSection />
      <ContactSection />
    </main>
  );
}