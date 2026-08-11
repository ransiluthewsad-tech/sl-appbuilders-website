'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MessageCircle, Send, CheckCircle2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Replace with your real WhatsApp number in international format (no + or spaces)
const WHATSAPP_NUMBER = '94741356189'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  function handleWhatsApp() {
    const message = `Hi SL AppBuilders! I'm ${name || 'interested in your services'}.${
      details ? ` Project details: ${details}` : ''
    }`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-primary text-balance sm:text-4xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground text-pretty">
              Tell me a bit about what you need and I&apos;ll get back to you with a
              free, no-obligation quote. Prefer to chat instantly? Message me on
              WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:ransiluthewsad@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                ransiluthewsad@gmail.com.com
              </a>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                +94 741356189
              </div>
            </div>

            <Button
              type="button"
              onClick={handleWhatsApp}
              size="lg"
              className="mt-8 h-12 w-full gap-2 bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90 sm:w-auto"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Contact via WhatsApp
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="size-12 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-xl font-bold text-primary">
                  Thanks, {name || 'there'}!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your message has been received. I&apos;ll reply to your email
                  shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSent(false)
                    setName('')
                    setEmail('')
                    setDetails('')
                  }}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell me about your website or app idea, timeline, and budget..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-11 w-full gap-2"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Submit
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
