import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { TimelineSection } from "@/components/timeline-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { BackgroundAnimations } from "@/components/background-animations"
import { ThreeScene } from "@/components/three-scene"
import { PixarCharacter } from "@/components/pixar-character"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ThreeScene />
      <BackgroundAnimations />
      <PixarCharacter />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <GallerySection />
        <ContactSection />
      </div>
    </main>
  )
}
