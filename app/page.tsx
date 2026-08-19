import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PersonalProjectsSection } from "@/components/sections/PersonalProjectsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStack } from "@/components/sections/TechStack";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Navbar } from "@/components/layout/Navbar";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <LanguageSwitcher />
      <main className="flex min-h-screen flex-col bg-black">
        <HeroSection />
        <TechStack />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PersonalProjectsSection />
        <ContactSection />
      </main>
      <BackToTop />
    </LanguageProvider>
  );
}
