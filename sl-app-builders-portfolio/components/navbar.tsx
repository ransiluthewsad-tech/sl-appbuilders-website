'use client'

import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="size-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-extrabold tracking-tight text-primary">
            SL AppBuilders
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            render={<a href="#contact" />}
            nativeButton={false}
            className="bg-accent text-accent-foreground [a]:hover:bg-accent/90"
            size="lg"
          >
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-lg text-primary md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button
                render={<a href="#contact" onClick={() => setOpen(false)} />}
                className="w-full bg-accent text-accent-foreground [a]:hover:bg-accent/90"
                size="lg"
              >
                Get a Free Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
