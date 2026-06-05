import type { Metadata } from 'next'

import { Hero } from '@/components/marketing/Hero'
import { LivePreview } from '@/components/marketing/LivePreview'
import { Features } from '@/components/marketing/Features'
import { ComponentIndex } from '@/components/marketing/ComponentIndex'
import { FAQ } from '@/components/marketing/FAQ'
import { InstallBanner } from '@/components/marketing/InstallBanner'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    ...siteConfig.openGraph,
    url: siteConfig.siteUrl,
  },
  twitter: siteConfig.twitter,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
}

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <LivePreview />
      <Features />
      <ComponentIndex />
      <FAQ />
      <InstallBanner />
    </main>
  )
}
