import { ArrowRight, Star, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-primary">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            Based in Sri Lanka · Serving clients worldwide
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-primary text-balance sm:text-5xl lg:text-6xl">
            Let&apos;s Build Your Dream Website or Mobile App!
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Affordable prices, world-class quality. I design and develop fast,
            modern websites and mobile apps that help your business stand out and
            grow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="h-12 gap-2 bg-accent px-6 text-base text-accent-foreground [a]:hover:bg-accent/90"
            >
              Get a Free Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              render={<a href="#portfolio" />}
              variant="outline"
              size="lg"
              className="h-12 px-6 text-base"
            >
              View My Work
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span>Trusted by 40+ happy clients</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/15 to-primary/10 blur-2xl" />
          <div className="rounded-2xl border border-border bg-card p-2 shadow-xl shadow-primary/5">
            <div className="rounded-xl bg-primary p-5">
              <div className="flex items-center gap-1.5">
                <span className="size-3 rounded-full bg-accent" />
                <span className="size-3 rounded-full bg-primary-foreground/40" />
                <span className="size-3 rounded-full bg-primary-foreground/40" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-3 w-2/3 rounded bg-primary-foreground/25" />
                <div className="h-3 w-1/2 rounded bg-primary-foreground/15" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {['Web', 'Apps', 'UI/UX'].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg bg-primary-foreground/10 p-3 text-center text-xs font-semibold text-primary-foreground"
                    >
                      {label}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg bg-accent px-4 py-3">
                  <span className="text-sm font-semibold text-accent-foreground">
                    Project Delivered
                  </span>
                  <span className="text-xs font-medium text-accent-foreground/90">
                    On time
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
