import type { ReactNode } from "react"
import { GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "./simple-icons"
import { profile } from "@/lib/profile"

function OrcidMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full bg-current font-bold ${className}`}
    >
      <span className="text-[0.6rem] text-card">iD</span>
    </span>
  )
}

const links: { label: string; description: string; href: string; icon: ReactNode }[] = [
  {
    label: "GitHub",
    description: "Code, models, and analysis tools",
    href: profile.links.github,
    icon: <GithubIcon className="w-6 h-6" />,
  },
  {
    label: "LinkedIn",
    description: "Professional background and updates",
    href: profile.links.linkedin,
    icon: <LinkedinIcon className="w-6 h-6" />,
  },
  {
    label: "ORCID",
    description: "Persistent researcher identifier",
    href: profile.links.orcid,
    icon: <OrcidMark className="w-6 h-6" />,
  },
  {
    label: "Google Scholar",
    description: "Publications and citations",
    href: profile.links.scholar,
    icon: <GraduationCap className="w-6 h-6" aria-hidden="true" />,
  },
]

export function ContactSection() {
  return (
    <section id="links" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {"Let's connect about opportunities in data analysis, AI evaluation, geophysics, or research collaborations."}
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 mb-16">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Card className="h-full flex flex-row items-center gap-4 p-6 border-border transition-colors duration-300 group-hover:border-primary">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                    {link.icon}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold text-foreground">{link.label}</span>
                    <span className="block text-sm text-muted-foreground">{link.description}</span>
                  </span>
                  <ArrowUpRightIcon className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </Card>
              </a>
            </li>
          ))}
        </ul>

        <footer className="pt-12 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </section>
  )
}
