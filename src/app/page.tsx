import { SiteNav } from "@/components/site-nav";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ThoughtsSection } from "@/components/sections/thoughts-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <ScrollIndicator />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ThoughtsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
