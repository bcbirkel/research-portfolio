import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const researchInterests = [
  "Seismic wave amplification",
  "Ground motion simulation",
  "Waveform tomography",
  "Sedimentary basins",
  "Seismic hazard",
  "High-performance computing",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p className="text-pretty">
                {"Hi! I'm Brianna Birkel, a seismologist who recently completed my Ph.D. in Earth Sciences at the University of Southern California under the direction of John Vidale."}
              </p>
              <p className="text-pretty">
                My research focuses on seismic wave amplification in the Los Angeles Basin, using observational data,
                numerical modeling, and geophysical analysis to understand how complex subsurface structures affect
                ground motion and seismic hazard. My dissertation extends these methods from Southern California to the
                Nepal Himalaya.
              </p>
              <p className="text-pretty">
                My work combines geophysics, seismology, and computational methods, and often involves collaboration
                with researchers from geology to civil engineering. I&apos;m also passionate about teaching and enjoy
                finding ways to make complex concepts clear and engaging for students.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-3">
                Research Interests
              </h3>
              <ul className="flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <li key={interest}>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {interest}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-border shadow-2xl">
              <Image
                src="/images/about-fieldwork.png"
                alt="Broadband seismometer installed on a hillside overlooking the Los Angeles basin"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
