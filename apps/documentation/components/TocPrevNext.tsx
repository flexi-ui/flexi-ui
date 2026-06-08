'use client'

import { useItems } from 'fumadocs-core/toc'

export function TocPrevNext() {
  const items = useItems()
  if (items.length < 2) return null

  const activeIdx = items.findIndex((i) => i.active)
  const prev = activeIdx > 0 ? items[activeIdx - 1] : null
  const next = activeIdx >= 0 && activeIdx < items.length - 1 ? items[activeIdx + 1] : null

  if (!prev && !next) return null

  return (
    <nav
      aria-label="Section navigation"
      className="mt-4 flex items-stretch gap-2 border-t border-separator pt-4 text-xs"
    >
      {prev ? (
        <a
          className="group flex flex-1 flex-col gap-0.5 rounded-md border border-border px-3 py-2 text-foreground transition-colors hover:border-foreground/40 hover:bg-muted/50"
          href={`#${prev.id}`}
        >
          <span className="text-muted-foreground" aria-hidden="true">
            ← Previous
          </span>
          <span className="truncate font-medium">{prev.original.title}</span>
        </a>
      ) : (
        <span className="flex-1" aria-hidden="true" />
      )}
      {next ? (
        <a
          className="group flex flex-1 flex-col gap-0.5 rounded-md border border-border px-3 py-2 text-right text-foreground transition-colors hover:border-foreground/40 hover:bg-muted/50"
          href={`#${next.id}`}
        >
          <span className="text-muted-foreground" aria-hidden="true">
            Next →
          </span>
          <span className="truncate font-medium">{next.original.title}</span>
        </a>
      ) : (
        <span className="flex-1" aria-hidden="true" />
      )}
    </nav>
  )
}
