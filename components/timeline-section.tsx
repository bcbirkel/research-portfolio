import timelineData from "@/data/timeline.json"
import { TimelineItem } from "@/components/timeline-item"
import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "./simple-icons"
import { profile } from "@/lib/profile"

export function TimelineSection() {
  return (
    <section id="resume" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mb-6">
            Education, research, and teaching experience
          </p>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <a href={profile.cv} target="_blank" rel="noopener noreferrer">
              Full CV
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
