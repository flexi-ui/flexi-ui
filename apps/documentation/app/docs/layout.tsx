import { DocsLayout } from 'fumadocs-ui/layouts/notebook'
import { baseOptions } from '@/app/layout.config'
import { source } from '@/lib/source'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: DocsLayoutProps) {
  return (
    <DocsLayout {...baseOptions} tree={source.pageTree}>
      {children}
    </DocsLayout>
  )
}
