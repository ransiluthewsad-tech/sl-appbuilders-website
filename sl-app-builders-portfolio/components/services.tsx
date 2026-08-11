import { Layout, Boxes, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Simple Websites',
    tag: 'HTML / CSS',
    description:
      'Clean, fast-loading landing pages and business sites hand-crafted with HTML & CSS. Perfect for small businesses that need a professional online presence.',
    features: ['Responsive design', 'SEO friendly', 'Quick turnaround'],
  },
  {
    icon: Boxes,
    title: 'Dynamic Web Apps',
    tag: 'React / WordPress',
    description:
      'Interactive, database-driven web applications built with React or WordPress. From dashboards to booking systems and content-managed websites.',
    features: ['Custom features', 'CMS integration', 'Scalable & secure'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    tag: 'iOS / Android',
    description:
      'Native-quality mobile apps for iOS and Android. Smooth performance, modern UI, and seamless integration with your existing systems.',
    features: ['Cross-platform', 'App store ready', 'Push notifications'],
  },
]

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What I Do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
            Services built to grow your business
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Whatever stage you&apos;re at, there&apos;s a service to match your goals
            and your budget.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="font-heading text-xl font-bold text-primary">
                  {service.title}
                </h3>
              </div>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {service.tag}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
