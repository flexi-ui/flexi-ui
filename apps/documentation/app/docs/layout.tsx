import manifest from '@/config/routes.json'
import { Sidebar } from '@/components/Sidebar'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      {/* Modern gradient background for docs pages */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Primary gradient orb - bottom left */}
        <div
          aria-hidden="true"
          className="absolute -bottom-[30%] -left-[15%] w-[600px] h-[600px] rounded-full bg-primary-500/20 dark:bg-primary-500/15 blur-3xl transition-opacity duration-500"
        />
        
        {/* Secondary gradient orb - top right */}
        <div
          aria-hidden="true"
          className="absolute -top-[25%] -right-[20%] w-[700px] h-[700px] rounded-full bg-secondary-500/15 dark:bg-secondary-500/10 blur-3xl transition-opacity duration-500"
        />
        
        {/* Primary gradient orb - center right */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-400/10 dark:bg-primary-400/20 blur-3xl transition-opacity duration-500"
        />
        
        {/* Secondary gradient orb - bottom right */}
        <div
          aria-hidden="true"
          className="absolute -bottom-[20%] -right-[5%] w-[400px] h-[400px] rounded-full bg-secondary-400/8 dark:bg-secondary-400/12 blur-3xl transition-opacity duration-500"
        />
        
        {/* Subtle gradient mesh overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] transition-opacity duration-500"
          style={{
            backgroundImage: `
              radial-gradient(at 20% 30%, rgb(118 26 232 / 0.08) 0px, transparent 50%),
              radial-gradient(at 80% 70%, rgb(6 182 212 / 0.08) 0px, transparent 50%),
              radial-gradient(at 50% 50%, rgb(118 26 232 / 0.06) 0px, transparent 50%)
            `,
          }}
        />
        
        {/* Subtle grid pattern for depth */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02] transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(118 26 232 / 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(118 26 232 / 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

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
    </>
  )
}
