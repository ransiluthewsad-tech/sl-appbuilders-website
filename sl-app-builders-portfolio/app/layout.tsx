import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SL AppBuilders — Freelance Web & Mobile App Development in Sri Lanka',
  description:
    'Affordable, high-quality freelance web design and mobile app development based in Sri Lanka. Simple websites, dynamic web apps, and custom mobile apps. Get a free quote today.',
  generator: 'v0.app',
  keywords: [
    'web design Sri Lanka',
    'mobile app development Sri Lanka',
    'freelance developer',
    'React developer',
    'WordPress',
    'affordable web design',
  ],
  openGraph: {
    title: 'SL AppBuilders — Web & Mobile App Development',
    description:
      'Affordable, high-quality freelance web design and mobile app development based in Sri Lanka.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e2f56',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
