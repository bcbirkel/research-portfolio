import { ArrowUpRightIcon } from "./simple-icons"

const capabilities = [
  { title: "Prepare and check data", description: "Waveform preprocessing, metadata preparation, and quality-control workflows." },
  { title: "Measure model performance", description: "Ground-motion metrics and residuals, with geologic context for interpretation." },
  { title: "Explore spatial patterns", description: "Spatial statistics, clustering, maps, and dashboard-ready outputs." },
]

export function SoftwareSection() {
  return (
    <section id="software" aria-labelledby="software-heading" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl">
          <h2 id="software-heading" className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Research Software</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Tools I develop to make scientific analysis reusable and easier to inspect.</p>
        </header>
        <article className="rounded-2xl border border-border bg-card p-6 text-card-foreground sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-medium text-primary">Open-source Python package</p>
              <h3 className="mb-4 font-mono text-3xl font-bold tracking-tight">spatial-vtk</h3>
              <p className="text-lg leading-relaxed">I developed spatial-vtk to support spatial validation of ground-motion simulations. It brings data checks, model–observation comparisons, and spatial analysis into a reusable Python toolkit with a command-line interface.</p>
            </div>
            <span className="self-start rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">Python · Scientific computing</span>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => <li key={item.title}><h4 className="mb-2 font-semibold">{item.title}</h4><p className="leading-relaxed text-muted-foreground">{item.description}</p></li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
            <a href="https://github.com/bcbirkel/spatial-vtk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4">View source on GitHub <ArrowUpRightIcon className="size-4" /></a>
            <a href="https://bcbirkel.github.io/spatial-vtk/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-primary underline underline-offset-4">Read the documentation <ArrowUpRightIcon className="size-4" /></a>
          </div>
        </article>
      </div>
    </section>
  )
}
