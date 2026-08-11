import { ArrowUpRight, ImageIcon } from 'lucide-react'

const projects = [
  {
    name: 'Project 1',
    category: 'E-commerce Website',
    description:
      'A responsive online store with product catalog, cart, and secure checkout for a local retail brand.',
  },
  {
    name: 'Project 2',
    category: 'React Web App',
    description:
      'A real-time booking dashboard for a service business, with admin controls and analytics.',
  },
  {
    name: 'Project 3',
    category: 'Mobile App',
    description:
      'A cross-platform fitness tracking app with workout plans and progress charts.',
  },
  {
    name: 'Project 4',
    category: 'WordPress Site',
    description:
      'A content-managed blog and portfolio site with custom theme and SEO optimization.',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Recent Work
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
              A look at selected projects
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Live case studies coming soon.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary to-primary/80">
                <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
                  <ImageIcon className="size-8" aria-hidden="true" />
                  <span className="text-xs font-medium">Image coming soon</span>
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-primary">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-accent" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
