'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { clsx } from '@flexi-ui/shared-utils'

interface Heading {
  id: string
  text: string
  level: 2 | 3
}

export function TableOfContents() {
  const pathname = usePathname()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    setHeadings([])
    setActiveId(null)

    const article = document.querySelector('article')
    if (!article) return

    const scan = () => {
      const found = Array.from(article.querySelectorAll<HTMLHeadingElement>('h2, h3'))
        .filter((h) => h.id)
        .map((h) => ({
          id: h.id,
          text: h.textContent?.trim() ?? '',
          level: (h.tagName === 'H2' ? 2 : 3) as 2 | 3,
        }))
      setHeadings(found)
    }

    scan()
    const observer = new MutationObserver(scan)
    observer.observe(article, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-80px 0px -70% 0px' },
    )

    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="space-y-4 text-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-0.5 border-l border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              className={clsx(
                '-ml-px flex border-l py-1.5 text-sm transition-colors',
                h.level === 2 ? 'pl-4' : 'pl-7',
                activeId === h.id
                  ? 'border-accent font-medium text-foreground'
                  : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground',
              )}
              href={`#${h.id}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        ↑ Back to top
      </button>
    </nav>
  )
}
