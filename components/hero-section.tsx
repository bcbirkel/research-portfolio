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
      <div className="container mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm sm:text-base font-medium uppercase tracking-widest text-muted-foreground mb-6">
            {profile.affiliation}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
            {profile.name}
            <br />
            <span className="text-primary">Seismologist</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
            Modeling how complex geology shapes earthquake ground motion, from the Los Angeles Basin to the Nepal
            Himalaya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">Explore my research</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <a href="#resume">View resume</a>
            </Button>
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
