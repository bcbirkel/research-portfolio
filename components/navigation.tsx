"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { MenuIcon, XIcon } from "./simple-icons"
import { Button } from "@/components/ui/button"
import { useSound } from "@/hooks/use-sound"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { playSound } = useSound()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#projects" },
    { label: "CV", href: "#resume" },
    { label: "Teaching", href: "#teaching" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playSound("pop", 0.3)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#hero"
              className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              Brianna Birkel
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-bold"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="sm" className="ml-4">
                <a href="#links" onClick={handleNavClick}>
                  Get in touch
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playSound("pop", 0.3)
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e)
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
                onClick={(e) => {
                  handleNavClick(e)
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
