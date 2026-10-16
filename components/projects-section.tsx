import projectsData from "@/data/projects.json"
import { ProjectCard } from "@/components/project-card"
import { profile } from "@/lib/profile"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Research Projects</h2>
          <a
            href={profile.dissertation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-lg font-medium text-primary underline-offset-4 hover:underline"
          >
            Read my dissertation
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

