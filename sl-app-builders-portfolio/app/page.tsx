import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
