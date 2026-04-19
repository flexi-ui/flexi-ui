import manifest from '@/config/routes.json'
import { Sidebar } from '@/components/Sidebar'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-10 px-6 py-10 lg:py-14">
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar pr-2">
          <Sidebar routes={manifest.routes} />
        </div>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
