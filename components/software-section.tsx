import Link from "next/link"
import { ArrowUpRightIcon, GithubIcon } from "./simple-icons"

const capabilities = [
  { title: "Prepare data", description: "Preprocess waveforms, organize metadata, and check data quality." },
  { title: "Compare models", description: "Measure ground-motion residuals and waveform agreement." },
  { title: "Explore spatial patterns", description: "Connect model performance with geology through maps, statistics, and clustering." },
]

const workflowImage = "/images/spatial-vtk-workflow.png"
const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"

export function SoftwareSection() {
  return (
    <section id="software" aria-labelledby="software-heading" className="scroll-mt-24 bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="software-heading" className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Research Software</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Tools I develop to make scientific analysis reusable and easier to inspect.</p>
        </header>

        <article aria-labelledby="spatial-vtk-heading" className="research-card overflow-hidden rounded-2xl border border-border shadow-sm">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Open-source Python package</p>
                <h3 id="spatial-vtk-heading" className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">spatial-vtk</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I developed spatial-vtk to evaluate how well ground-motion simulations reproduce observations.
                  It brings data preparation, model comparisons, and spatial analysis into a reusable Python toolkit with a command-line interface.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3 lg:flex-col">
                <a href="https://bcbirkel.github.io/spatial-vtk/" target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 ${focusClass}`}>
                  Documentation <ArrowUpRightIcon className="size-4" />
                </a>
                <a href="https://github.com/bcbirkel/spatial-vtk" target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-primary/40 bg-background/60 px-5 py-3 font-medium text-primary transition-colors hover:bg-primary/10 ${focusClass}`}>
                  <GithubIcon className="size-5" /> GitHub <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <figure className="border-y border-border bg-background/60">
            <a href={workflowImage} target="_blank" rel="noopener noreferrer" aria-label="Open the spatial-vtk workflow diagram at full size" className={`m-4 block overflow-hidden rounded-lg bg-white p-2 sm:m-6 sm:p-4 lg:mx-10 lg:mt-8 ${focusClass}`}>
              <img src={workflowImage} alt="Observed waveforms, synthetic waveforms, and metadata flow through input preparation, quality control, metric calculations, and spatial validation to produce figures, reports, and dashboard outputs." width={3647} height={1399} loading="lazy" decoding="async" className="h-auto w-full" />
            </a>
            <figcaption className="flex flex-col gap-2 px-6 pb-6 text-base leading-relaxed text-muted-foreground sm:px-8 lg:flex-row lg:items-baseline lg:justify-between lg:px-10">
              <span>From observed and simulated waveforms to spatial patterns in model performance.</span>
              <a href={workflowImage} target="_blank" rel="noopener noreferrer" className={`inline-flex shrink-0 items-center gap-2 self-start text-primary underline underline-offset-4 ${focusClass}`}>View full workflow <ArrowUpRightIcon className="size-4" /></a>
            </figcaption>
          </figure>

          <ol aria-label="Analysis workflow" className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {capabilities.map((item, index) => (
              <li key={item.title} className="px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
                <span aria-hidden="true" className="mb-3 block text-sm font-semibold tracking-widest text-primary">{String(index + 1).padStart(2, "0")}</span>
                <h4 className="mb-2 text-xl font-semibold">{item.title}</h4>
                <p className="text-base leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>

          <div className="border-t border-border px-6 py-5 sm:px-8 lg:px-10">
            <Link href="/projects/chapter-1" className={`inline-flex items-center gap-3 font-medium text-primary underline underline-offset-4 ${focusClass}`}>
              Used in my ground-motion validation research <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
