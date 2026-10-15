import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import projects from "@/data/projects.json"
import { profile } from "@/lib/profile"

type Props = { params: Promise<{ id: string }> }

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
    <main className="research-paper min-h-screen px-6 py-16 text-foreground">
      <article className="mx-auto max-w-3xl">
        <Link href="/#projects" className="text-primary underline underline-offset-4">Back to research</Link>
        <header className="my-12">
          <p className="mb-4 text-sm font-medium text-primary">{project.subtitle}</p>
          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-5xl">{project.title}</h1>
          <p className="text-xl leading-relaxed text-muted-foreground">{project.description}</p>
        </header>
        <figure className="mb-10 overflow-hidden rounded-xl border border-border bg-card text-card-foreground">
          <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size figure for ${project.title}`}>
            <img src={project.image} alt={project.imageAlt} className="h-auto w-full" />
          </a>
          <figcaption className="px-6 py-4 text-sm leading-relaxed text-muted-foreground">{project.imageCaption}</figcaption>
        </figure>
        <section aria-labelledby="overview" className="rounded-xl border border-border bg-card p-8 text-card-foreground">
          <h2 id="overview" className="mb-4 text-2xl font-semibold">The question</h2>
          <p className="leading-relaxed">{project.question}</p>
          <h2 className="mb-3 mt-8 text-xl font-semibold">My contribution</h2>
          <p className="leading-relaxed">{project.contribution}</p>
          <h2 className="mb-3 mt-8 text-xl font-semibold">Why it matters</h2>
          <p className="leading-relaxed">{project.significance}</p>
          <h2 className="mb-4 mt-8 text-xl font-semibold">Methods & focus</h2>
          <ul className="flex flex-wrap gap-3">{project.tags.map((tag) => <li key={tag} className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">{tag}</li>)}</ul>
        </section>
        <section className="mt-10">
          
          
          <div className="flex flex-wrap gap-6">
            <a href={profile.dissertation} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Read the dissertation</a>
            {project.codeLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{link.label}</a>)}
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">View CV (PDF)</a>
          </div>
        </section>
      </article>
    </main>
  )
}

