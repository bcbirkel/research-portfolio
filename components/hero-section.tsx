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
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-primary mb-6 text-balance leading-snug">
            Making sense of complex data.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 text-pretty leading-relaxed">
            I bring a research-driven approach to analyzing data, testing models, and communicating results—with a foundation in computational geophysics.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-10 text-balance leading-relaxed">
            Exploring opportunities in data analysis, AI evaluation, and geophysics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">Explore my work</a>
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
