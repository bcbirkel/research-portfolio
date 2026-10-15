import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export function HeroSection() {
  return (
    <section id="hero" className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{profile.affiliation}</p>
            <h1 className="font-sans text-6xl font-bold tracking-tighter text-balance sm:text-8xl lg:text-9xl">{profile.name}<span className="text-primary">.</span></h1>
          </div>
          <div className="grid overflow-hidden rounded-3xl border border-border md:grid-cols-[1.15fr_1fr]">
            <div className="bg-secondary p-8 text-secondary-foreground sm:p-12">
              <div className="flex h-full flex-col justify-between gap-10">
                <h2 className="text-4xl leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">Making sense<br />of complex data.</h2>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild><a href="#projects">Explore my work <span aria-hidden="true">{"↗\uFE0E"}</span></a></Button>
                  <Button size="lg" variant="outline" asChild><a href="#resume">View resume</a></Button>
                </div>
              </div>
            </div>
            <div className="hero-panel p-8 sm:p-12">
              <div className="flex h-full flex-col justify-between gap-10">
                <p className="text-sm uppercase tracking-widest">A research-driven perspective</p>
                <p className="text-xl leading-relaxed text-pretty sm:text-2xl">I analyze data, test models, and communicate results—with a foundation in computational geophysics.</p>
                <a href="#about" className="w-fit text-sm underline underline-offset-8">More about me <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
