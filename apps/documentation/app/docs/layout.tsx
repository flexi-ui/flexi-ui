import manifest from '@/config/routes.json'
import { Sidebar } from '@/components/Sidebar'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <main className="relative container mx-auto max-w-8xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 grow">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-2 mt-8">
            <div className="sticky top-20">
              <Sidebar routes={manifest.routes} />
            </div>
          </div>

          {/* Main content - will be populated by page.tsx */}
          {children}
        </div>
      </main>

      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0 pointer-events-none"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
      </div>
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -top-[40%] -right-[30%] z-0 rotate-12 pointer-events-none"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 blur-3xl" />
      </div>
    </>
  )
}
