import { HomeLayout } from 'fumadocs-ui/layouts/home'

import { baseOptions } from '@/app/layout.config'
import { MarketingNavScroll } from '@/components/marketing/MarketingNavScroll'

interface HomeLayoutWrapperProps {
  children: React.ReactNode
}

export default function Layout({ children }: HomeLayoutWrapperProps) {
  return (
    <HomeLayout {...baseOptions}>
      <MarketingNavScroll />
      {children}
    </HomeLayout>
  )
}
