"use client"

import { useState } from "react"
import { MenuIcon, XIcon } from "./simple-icons"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#projects" },
    { label: "Software", href: "#software" },
    { label: "CV", href: "#resume" },
    { label: "Teaching", href: "#teaching" },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 font-serif bg-background text-foreground border-b border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              Brianna Birkel, Ph.D.
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-bold"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="sm">
                <a href="#links">
                  Get in touch
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 font-serif bg-background/95 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
                className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="lg" className="mt-4">
              <a
                href="#links"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
              >
                Get in touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

