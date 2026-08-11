import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Basic Web',
    price: '$10',
    period: 'one-time',
    description: 'A simple, professional website to get you online fast.',
    features: [
      'Up to 3 pages',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
      '1 revision round',
    ],
    featured: false,
  },
  {
    name: 'Pro Web',
    price: '$15',
    period: 'one-time',
    description: 'A dynamic, content-managed site with custom features.',
    features: [
      'Up to 8 pages',
      'CMS (WordPress / React)',
      'Custom animations',
      'Advanced SEO',
      '3 revision rounds',
      '1 month support',
    ],
    featured: true,
  },
  {
    name: 'Custom App',
    price: "Let's talk",
    period: 'custom quote',
    description: 'Full mobile or web application tailored to your needs.',
    features: [
      'iOS & Android apps',
      'Custom backend & APIs',
      'User authentication',
      'Ongoing maintenance',
      'Priority support',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            No hidden fees. Pick a plan or reach out for a tailored quote.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.featured
                  ? 'border-accent bg-card shadow-xl shadow-accent/10 lg:-translate-y-3'
                  : 'border-border bg-card'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-primary">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-extrabold text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                render={<a href="#contact" />}
                size="lg"
                variant={plan.featured ? 'default' : 'outline'}
                className={`mt-8 h-11 w-full ${
                  plan.featured
                    ? 'bg-accent text-accent-foreground [a]:hover:bg-accent/90'
                    : ''
                }`}
              >
                {plan.name === 'Custom App' ? 'Request a Quote' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
