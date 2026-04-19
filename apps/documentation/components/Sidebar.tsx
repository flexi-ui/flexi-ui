'use client'

import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { clsx } from '@flexi-ui/shared-utils'

interface Route {
  key: string
  title: string
  path?: string
  updated?: boolean
  newPost?: boolean
}

interface Section {
  key: string
  title: string
  defaultOpen?: boolean
  routes: Route[]
}

interface SidebarProps {
  routes: Section[]
}

export const Sidebar = ({ routes }: SidebarProps) => {
  const pathname = usePathname()
  const containerRef = useRef<HTMLElement>(null)

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    routes.forEach((section) => {
      initial[section.key] = section.defaultOpen ?? true
    })
    return initial
  })

  useEffect(() => {
    const saved = sessionStorage.getItem('docsSidebarScroll')
    if (saved && containerRef.current) {
      containerRef.current.scrollTop = Number(saved)
    }
  }, [])

  const handleScroll = () => {
    if (containerRef.current) {
      sessionStorage.setItem('docsSidebarScroll', String(containerRef.current.scrollTop))
    }
  }

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const isActive = (path: string) => {
    if (!path || path === '#') return false
    const cleanPath = path.replace('.mdx', '')
    return pathname === cleanPath
  }

  return (
    <nav ref={containerRef} onScroll={handleScroll} className="space-y-6 text-sm">
      {routes.map((section) => {
        const isOpen = openSections[section.key]

        return (
          <div key={section.key}>
            <button
              onClick={() => toggleSection(section.key)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>{section.title}</span>
              <ChevronRight
                className={clsx(
                  'h-3.5 w-3.5 transition-transform',
                  isOpen && 'rotate-90',
                )}
              />
            </button>

            {isOpen && (
              <ul className="mt-2 space-y-0.5 border-l border-border">
                {section.routes.map((route) => {
                  const href = route.path?.replace('.mdx', '') || '#'
                  const active = isActive(href)

                  return (
                    <li key={route.key}>
                      <NextLink
                        href={href}
                        className={clsx(
                          '-ml-px flex items-center gap-2 border-l py-1.5 pl-4 text-sm transition-colors',
                          active
                            ? 'border-accent font-medium text-foreground'
                            : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground',
                        )}
                      >
                        <span>{route.title}</span>
                        {route.updated && (
                          <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase text-muted-foreground">
                            Updated
                          </span>
                        )}
                        {route.newPost && (
                          <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] font-medium uppercase text-accent">
                            New
                          </span>
                        )}
                      </NextLink>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )
      })}
    </nav>
  )
}
