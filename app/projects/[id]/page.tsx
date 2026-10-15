import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import projects from "@/data/projects.json"
import { profile } from "@/lib/profile"

type Props = { params: Promise<{ id: string }> }
const headingClass = "mb-4 text-2xl font-semibold tracking-tight"
const subheadingClass = "mb-2 text-xl font-semibold"
const bodyClass = "text-lg leading-relaxed"

type ResearchFigureProps = { src: string; alt: string; caption: string; width?: number; height?: number }

function ResearchFigure({ src, alt, caption, width, height }: ResearchFigureProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size figure: ${alt}`} className="block focus-visible:outline-2 focus-visible:outline-ring">
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className="h-auto w-full bg-white" />
      </a>
      <figcaption className="px-5 py-4 text-base leading-relaxed text-muted-foreground sm:px-6">{caption}</figcaption>
    </figure>
  )
}

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((entry) => entry.id === id)
  return { title: project ? `${project.title} | Brianna Birkel` : "Project not found", description: project?.description }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((entry) => entry.id === id)
  if (!project) notFound()
  return (
    <main className="research-paper min-h-screen px-4 py-12 text-foreground sm:px-6 sm:py-16">
      <article className="mx-auto max-w-5xl">
        <Link href="/#projects" className="text-primary underline underline-offset-4">Back to research</Link>
        <header className="my-10 sm:my-12">
          <p className="mb-4 text-sm font-medium text-primary">{project.subtitle}</p>
          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl">{project.title}</h1>
          <p className={`max-w-3xl text-muted-foreground ${bodyClass}`}>{project.description}</p>
          <ul aria-label="Research methods" className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">{tag}</li>)}
          </ul>
        </header>

        <div className="space-y-10 sm:space-y-12">
          <section aria-labelledby="question">
            <h2 id="question" className={headingClass}>Research question</h2>
            <p className={`max-w-3xl ${bodyClass}`}>{project.question}</p>
          </section>
          <section aria-labelledby="study">
            <h2 id="study" className={headingClass}>Study design</h2>
            <p className={`max-w-3xl ${bodyClass}`}>{project.studyDesign}</p>
            {project.contextFigures.map((figure) => <div key={figure.src} className="mt-6"><ResearchFigure {...figure} /></div>)}
          </section>
          <section aria-labelledby="findings">
            <h2 id="findings" className={headingClass}>{project.findingsTitle}</h2>
            <ul className="grid gap-4">
              {project.findings.map((finding, index) => (
                <li key={finding.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 text-card-foreground sm:p-6">
                  <span aria-hidden="true" className="mt-0.5 text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={subheadingClass}>{finding.title}</h3>
                    <p className={`${bodyClass} text-muted-foreground`}>{finding.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            {project.benchmarks.length > 0 && (
              <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card p-4 sm:p-6">
                <table className="w-full text-left text-base">
                  <caption className="mb-4 text-left leading-relaxed">
                    <span className="block font-semibold">Selected synthetic recovery tests</span>
                    Model NRMSE with independent Gaussian measurement noise; lower is better.
                  </caption>
                  <thead><tr className="border-b border-border"><th scope="col" className="py-3 pr-4">Model</th><th scope="col" className="px-3 py-3">Direct ANT</th><th scope="col" className="px-3 py-3">DDANT</th><th scope="col" className="px-3 py-3">GDANT</th></tr></thead>
                  <tbody>{project.benchmarks.map((row) => <tr key={row.model} className="border-b border-border last:border-0"><th scope="row" className="py-3 pr-4 font-medium">{row.model}</th><td className="px-3 py-3 tabular-nums">{row.direct}</td><td className="px-3 py-3 tabular-nums">{row.ddant}</td><td className="px-3 py-3 font-semibold tabular-nums">{row.gdant}</td></tr>)}</tbody>
                </table>
              </div>
            )}
          </section>

          <ResearchFigure src={project.image} alt={project.imageAlt} caption={project.imageCaption} />

          <section aria-labelledby="methods">
            <h2 id="methods" className={headingClass}>Methods</h2>
            <details className="group rounded-xl border border-border bg-card text-card-foreground">
              <summary className={`cursor-pointer px-5 py-5 font-medium text-primary focus-visible:outline-2 focus-visible:outline-ring sm:px-6 ${bodyClass}`}>Explore the detailed workflow</summary>
              <div className="space-y-6 border-t border-border px-5 py-6 sm:px-6">
                {project.methodFigures.map((figure) => <ResearchFigure key={figure.src} {...figure} />)}
                {project.methods.map((method) => <section key={method.title}><h3 className={subheadingClass}>{method.title}</h3><p className={`${bodyClass} text-muted-foreground`}>{method.text}</p></section>)}
              </div>
            </details>
          </section>
          <section aria-labelledby="significance">
            <h2 id="significance" className={headingClass}>Why it matters</h2>
            <p className={`max-w-3xl ${bodyClass}`}>{project.significance}</p>
          </section>
          <footer className="border-t border-border pt-8">
            <p className="mb-5 text-base leading-relaxed text-muted-foreground">{project.sourceNote}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {project.id !== "himalayan-microseismicity" && <a href={profile.dissertation} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Read the dissertation</a>}
              {project.codeLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{link.label}</a>)}
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">View CV (PDF)</a>
            </div>
          </footer>
        </div>
      </article>
    </main>
  )
}
