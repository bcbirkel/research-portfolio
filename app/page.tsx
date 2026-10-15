import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SoftwareSection } from "@/components/software-section"
import { TimelineSection } from "@/components/timeline-section"
import { TeachingSection } from "@/components/teaching-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="research-paper min-h-screen relative">
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SoftwareSection />
        <TimelineSection />
        <TeachingSection />
        <ContactSection />
      </div>
    </main>
  )
}

