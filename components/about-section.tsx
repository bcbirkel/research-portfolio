import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const researchInterests = [
  "Data analysis",
  "Numerical modeling",
  "Model–data comparison",
  "Computational geophysics",
  "Scientific communication",
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
                {"I'm Brianna Birkel, a researcher with a Ph.D. in Earth Sciences from the University of Southern California. I use observational data and computational models to investigate complex problems, assess evidence, and communicate what the results mean."}
              </p>
              <p className="text-pretty">
                My research focuses on seismic wave amplification in the Los Angeles Basin, using observational data,
                numerical modeling, and geophysical analysis to understand how complex subsurface structures affect
                ground motion and seismic hazard. I also developed generalized differential ambient noise tomography (GDANT), a new seismic
                imaging method, and used it to study shallow subsurface structure in the Nepal Himalaya.
              </p>
              <p className="text-pretty">
                I enjoy working across disciplines and making technical ideas accessible through research and teaching. I&apos;m interested in research scientist roles inside or outside geophysics where I can build useful models, evaluate them against observations, and collaborate on problems with practical impact.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-3">
                Methods & strengths
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
                src="/images/earth-sciences-graduation.jpg"
                alt="Brianna Birkel in doctoral graduation regalia outside the USC Earth Sciences building"
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                className="translate-y-[1%] scale-[1.03] object-cover object-[55%_center]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

