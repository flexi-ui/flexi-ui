import { Hero } from '@/components/marketing/Hero'
import { Features } from '@/components/marketing/Features'
import { CustomThemes } from '@/components/marketing/CustomThemes'
import { DarkMode } from '@/components/marketing/DarkMode'
import { InstallBanner } from '@/components/marketing/InstallBanner'
import { Community } from '@/components/marketing/Community'

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <Features />
      <CustomThemes />
      <DarkMode />
      <InstallBanner />
      <Community />
    </main>
  )
}
