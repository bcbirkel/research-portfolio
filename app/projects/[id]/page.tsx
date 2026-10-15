import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import projectData from "@/data/projects.json"
import { profile } from "@/lib/profile"

type Props = { params: Promise<{ id: string }> }
type ResearchFigure = { src: string; alt: string; caption: string; width?: number; height?: number; video?: string }
type EvidenceTable = { caption: string; headers: string[]; rows: string[][] }
type ResearchSection = { title: string; text: string; figures?: ResearchFigure[]; layout?: string; table?: EvidenceTable }
type ResearchProject = {
  id: string; title: string; subtitle: string; description: string; tags: string[];
  question: string; studyDesign: string; findingsTitle: string;
  findings: { title: string; text: string }[];
  image: string; imageAlt: string; imageCaption: string;
  contextFigures: ResearchFigure[]; methodFigures: ResearchFigure[];
  story?: ResearchSection[]; methods: ResearchSection[];
  significance: string; sourceNote: string; codeLinks: { label: string; href: string }[];
}
const projects: ResearchProject[] = projectData
const headingClass = "mb-4 text-2xl font-semibold tracking-tight"
const subheadingClass = "mb-2 text-xl font-semibold"
const bodyClass = "text-lg leading-relaxed"

function Figure({ src, alt, caption, width, height, video }: ResearchFigure) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground">
      {video ? (
        <video controls muted playsInline preload="none" poster={src} width={width} height={height} aria-label={alt} className="h-auto w-full bg-white">
          <source src={video} type="video/mp4" />
          Your browser does not support this video. Use the animation link below to open it.
        </video>
      ) : (
        <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size figure: ${alt}`} className="block focus-visible:outline-2 focus-visible:outline-ring">
          <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" style={{ maxWidth: width }} className="mx-auto h-auto w-full bg-white" />
        </a>
      )}
      <figcaption className="px-5 py-4 text-base leading-relaxed text-muted-foreground sm:px-6">
        {caption}
        {video && <a href={video} target="_blank" rel="noopener noreferrer" className="mt-2 block text-primary underline underline-offset-4">Open animation</a>}
      </figcaption>
    </figure>
  )
}

function Figures({ figures, layout }: { figures: ResearchFigure[]; layout?: string }) {
  return <div className={`mt-6 grid gap-6 ${layout === "pair" ? "md:grid-cols-2" : ""}`}>{figures.map((figure) => <Figure key={figure.src} {...figure} />)}</div>
}

function Paragraphs({ text }: { text: string }) {
  return <div className={`max-w-3xl space-y-4 ${bodyClass}`}>{text.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
}

function Table({ caption, headers, rows }: EvidenceTable) {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card p-4 sm:p-6">
      <table className="w-full text-left text-base">
        <caption className="mb-4 text-left leading-relaxed">{caption}</caption>
        <thead><tr className="border-b border-border">{headers.map((header) => <th key={header} scope="col" className="px-3 py-3 first:pl-0">{header}</th>)}</tr></thead>
        <tbody>{rows.map((row) => <tr key={row[0]} className="border-b border-border last:border-0">{row.map((value, index) => index === 0 ? <th key={index} scope="row" className="py-3 pr-3 font-medium">{value}</th> : <td key={index} className="px-3 py-3 tabular-nums">{value}</td>)}</tr>)}</tbody>
      </table>
    </div>
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
          <nav aria-label="On this project page" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-4 text-base text-primary">
            <a href="#question" className="underline underline-offset-4">Overview</a>
            <a href="#findings" className="underline underline-offset-4">{project.findingsTitle}</a>
            {Boolean(project.story?.length) && <a href="#evidence-0" className="underline underline-offset-4">Figures and evidence</a>}
            <a href="#methods" className="underline underline-offset-4">Detailed methods</a>
          </nav>
        </header>

        <div className="space-y-10 sm:space-y-14">
          <section aria-labelledby="question" className="scroll-mt-8">
            <h2 id="question" className={headingClass}>Research question</h2>
            <Paragraphs text={project.question} />
          </section>
          <section aria-labelledby="study">
            <h2 id="study" className={headingClass}>Study design</h2>
            <Paragraphs text={project.studyDesign} />
            {project.contextFigures.length > 0 && <Figures figures={project.contextFigures} />}
          </section>
          <section aria-labelledby="findings" className="scroll-mt-8">
            <h2 id="findings" className={headingClass}>{project.findingsTitle}</h2>
            <ul className="grid gap-4">
              {project.findings.map((finding, index) => (
                <li key={finding.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 text-card-foreground sm:p-6">
                  <span aria-hidden="true" className="mt-1 text-base font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3 className={subheadingClass}>{finding.title}</h3><p className={`${bodyClass} text-muted-foreground`}>{finding.text}</p></div>
                </li>
              ))}
            </ul>
          </section>

          {project.story?.length ? project.story.map((section, index) => (
            <section key={section.title} aria-labelledby={`evidence-${index}`} className="scroll-mt-8">
              <h2 id={`evidence-${index}`} className={headingClass}>{section.title}</h2>
              <Paragraphs text={section.text} />
              {section.figures && <Figures figures={section.figures} layout={section.layout} />}
              {section.table && <Table {...section.table} />}
            </section>
          )) : <Figure src={project.image} alt={project.imageAlt} caption={project.imageCaption} />}

          <section aria-labelledby="methods" className="scroll-mt-8">
            <h2 id="methods" className={headingClass}>Detailed methods</h2>
            {project.methodFigures.length > 0 && <Figures figures={project.methodFigures} />}
            <div className="mt-6 space-y-4">
              {project.methods.map((method) => (
                <details key={method.title} className="rounded-xl border border-border bg-card text-card-foreground">
                  <summary className="cursor-pointer px-5 py-5 text-primary focus-visible:outline-2 focus-visible:outline-ring sm:px-6"><h3 className="inline text-xl font-semibold">{method.title}</h3></summary>
                  <div className="border-t border-border px-5 py-6 sm:px-6">
                    <Paragraphs text={method.text} />
                    {method.figures && <Figures figures={method.figures} layout={method.layout} />}
                    {method.table && <Table {...method.table} />}
                  </div>
                </details>
              ))}
            </div>
          </section>
          <section aria-labelledby="significance">
            <h2 id="significance" className={headingClass}>Why it matters</h2>
            <Paragraphs text={project.significance} />
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
