import { Sidebar } from '@/components/Sidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full max-w-8xl mx-auto px-6">
      {/* Sidebar */}
      <aside className="sticky top-16 hidden lg:block w-64 shrink-0 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-6 border-r border-divider">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 py-8 lg:pl-12">
        <article className="prose prose-slate dark:prose-invert max-w-3xl">{children}</article>
      </main>

      {/* Table of Contents (optional) */}
      <aside className="sticky top-16 hidden xl:block w-64 shrink-0 h-[calc(100vh-4rem)] overflow-y-auto py-8 pl-6">
        <div className="text-sm">
          <h3 className="font-semibold mb-4">On this page</h3>
          {/* TOC will be added dynamically */}
        </div>
      </aside>
    </div>
  )
}
