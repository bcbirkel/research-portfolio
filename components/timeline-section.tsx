import { profile } from "@/lib/profile"

const resumeUrl = profile.cv

export function TimelineSection() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h2 id="resume-heading" className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Curriculum Vitae</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">Open CV (PDF)</a>
            <a href={resumeUrl} download="Brianna-Birkel-CV.pdf" className="rounded-lg border border-border bg-card px-5 py-3 font-medium text-card-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">Download CV</a>
          </div>
        </header>
        <object data={`${resumeUrl}#view=FitH`} type="application/pdf" aria-label="Brianna Birkel's CV" className="h-[75vh] min-h-[480px] w-full rounded-xl border border-border bg-card text-card-foreground md:h-[900px]">
          <p className="p-8 text-center leading-relaxed">Your browser cannot display this PDF inline. <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Open the CV in a new tab</a>.</p>
        </object>
      </div>
    </section>
  )
}

