import type { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { Features } from '@/components/marketing/Features'
import { CustomThemes } from '@/components/marketing/CustomThemes'
import { DarkMode } from '@/components/marketing/DarkMode'
import { InstallBanner } from '@/components/marketing/InstallBanner'
import { Community } from '@/components/marketing/Community'
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
    <main className="flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="fixed -top-[25%] -right-[25%] w-[700px] h-[700px] bg-secondary-500/20 dark:bg-secondary-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: '5s',
            animationTimingFunction: 'ease-in-out',
            animationDelay: '1s',
          }}
        />

        <div
          className="fixed -bottom-[25%] -left-[25%] w-[600px] h-[600px] bg-primary-400/15 dark:bg-primary-400/8 rounded-full blur-3xl animate-pulse"
          style={{
            animationDuration: '4.5s',
            animationTimingFunction: 'ease-in-out',
            animationDelay: '0.5s',
          }}
        />
      </div>

      <div className="relative z-10">
        <Hero />
        <Features />
        <CustomThemes />
        <DarkMode />
        <InstallBanner />
        <Community />
      </div>
    </main>
  )
}
