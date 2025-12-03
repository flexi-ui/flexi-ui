import { Hero } from '@/components/marketing/Hero'
import { Features } from '@/components/marketing/Features'
import { CustomThemes } from '@/components/marketing/CustomThemes'
import { DarkMode } from '@/components/marketing/DarkMode'
import { InstallBanner } from '@/components/marketing/InstallBanner'
import { Community } from '@/components/marketing/Community'

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden relative">
      {/* Unified gradient background for entire page */}
      {/* <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full bg-primary-500/30 dark:bg-primary-500/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -top-[10%] -right-[15%] w-[700px] h-[700px] rounded-full bg-secondary-500/25 dark:bg-secondary-500/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary-400/20 dark:bg-primary-400/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-secondary-400/15 dark:bg-secondary-400/8 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              radial-gradient(at 0% 0%, rgb(118 26 232 / 0.1) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgb(6 182 212 / 0.1) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgb(118 26 232 / 0.08) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgb(6 182 212 / 0.08) 0px, transparent 50%)
            `,
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(118 26 232 / 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(118 26 232 / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />
      </div> */}

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
