import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/app/layout.config'

interface HomeLayoutWrapperProps {
  children: React.ReactNode
}

export default function Layout({ children }: HomeLayoutWrapperProps) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>
}
