"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRightIcon } from "./simple-icons"
import { useSound } from "@/hooks/use-sound"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  imageCaption: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { playSound } = useSound()

  return (
    <Card className="research-card group relative h-full overflow-hidden pt-0 transition-shadow hover:shadow-lg" onMouseEnter={() => playSound("hover", 0.2)}>
      <figure className="border-b border-border">
        <div className="relative aspect-[16/10] bg-card text-card-foreground">
          <Image src={project.image} alt={project.imageAlt} fill unoptimized sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-3" />
        </div>
      </figure>
      <CardHeader>
        <p className="text-sm font-medium text-primary">{project.subtitle}</p>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight text-balance">
            <Link href={`/projects/${project.id}`} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-ring">{project.title}</Link>
          </h3>
          <ArrowUpRightIcon className="size-6 shrink-0 text-primary" />
        </div>
      </CardHeader>
      <CardContent><p className="leading-relaxed text-pretty">{project.description}</p></CardContent>
      <CardFooter className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => <Badge key={tag} variant="secondary" className="text-sm">{tag}</Badge>)}
      </CardFooter>
    </Card>
  )
}
