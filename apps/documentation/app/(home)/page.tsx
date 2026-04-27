import type { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { Features } from '@/components/marketing/Features'
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
      <Features />
      <InstallBanner />
    </main>
  )
}
