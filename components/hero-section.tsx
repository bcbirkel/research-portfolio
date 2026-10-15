"use client"

import { useEffect, useState } from "react"
import { ChevronDownIcon } from "./simple-icons"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto relative z-10 py-28">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12 lg:gap-16">
          <div className="w-full max-w-sm shrink-0 md:w-2/5 md:max-w-none">
            <img
              src="/images/brianna-portrait.jpeg"
              alt="Brianna outdoors beside a wooded pond"
              width={1852}
              height={1344}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-lg"
            />
          </div>
        <div
          className={`min-w-0 flex-1 text-center md:text-left transition-all duration-1000 motion-reduce:transition-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            {profile.name}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Computational geophysics Ph.D. bringing a research-driven approach to analyzing complex data, testing and validating models, and clearly communicating scientific results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button size="lg" asChild>
              <a href="#projects">Explore my work</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <a href="#resume">View CV</a>
            </Button>
          </div>
        </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll to about section"
      >
        <ChevronDownIcon className="w-8 h-8 text-muted-foreground" />
      </a>
    </section>
  )
}
