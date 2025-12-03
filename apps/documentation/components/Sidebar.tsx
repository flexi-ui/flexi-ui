'use client'

import { useState, useEffect, useRef } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

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
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    routes.forEach((section) => {
      initial[section.key] = section.defaultOpen || false
    })
    return initial
  })

  // Restore scroll position on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPosition = sessionStorage.getItem('docsSidebarScrollPosition')
      if (savedPosition && scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = Number(savedPosition)
      }
    }
  }, [])

  // Save scroll position on scroll
  const handleScroll = () => {
    if (typeof window !== 'undefined' && scrollContainerRef.current) {
      sessionStorage.setItem(
        'docsSidebarScrollPosition',
        scrollContainerRef.current.scrollTop.toString(),
      )
    }
  }

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const isActive = (path: string) => {
    if (!path || path === '#') return false
    const cleanPath = path.replace('.mdx', '')
    return pathname === cleanPath || pathname?.startsWith(cleanPath)
  }

  return (
    <div
      ref={scrollContainerRef}
      className="h-full max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-default-300 scrollbar-track-transparent hover:scrollbar-thumb-default-400 dark:scrollbar-thumb-default-600 dark:hover:scrollbar-thumb-default-500"
      onScroll={handleScroll}
    >
      <nav className="space-y-4">
        {routes.map((section) => {
          const isExpanded = openSections[section.key]

          return (
            <div key={section.key} className="flex flex-col">
              <button
                onClick={() => toggleSection(section.key)}
                className="flex items-center gap-3 w-full text-left mb-3 group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
                aria-expanded={isExpanded}
              >
                <span className="font-medium sm:text-sm text-foreground">{section.title}</span>
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200 text-foreground-400 ${
                    isExpanded ? '-rotate-90' : ''
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="flex flex-col gap-3 mb-4">
                  {section.routes.map((route) => {
                    const href = route.path?.replace('.mdx', '') || '#'
                    const active = isActive(href)

                    return (
                      <NextLink
                        key={route.key}
                        href={href}
                        className={`
                          flex items-center w-full font-normal
                          before:mr-4 before:content-[''] before:block before:bg-default-300 before:w-1 before:h-1 before:rounded-full
                          outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md
                          transition-colors
                          ${
                            active
                              ? 'text-primary font-medium dark:text-foreground'
                              : 'text-foreground dark:text-foreground-500 hover:text-foreground dark:hover:text-foreground'
                          }
                        `}
                      >
                        <span className="flex items-center gap-2 sm:text-sm">
                          <span>{route.title}</span>
                          {route.updated && (
                            <span className="inline-flex items-center px-2 py-0.5 text-tiny font-medium rounded-full bg-default-100 dark:bg-default-100/50 text-default-500 dark:text-default-400">
                              Updated
                            </span>
                          )}
                          {route.newPost && (
                            <span className="inline-flex items-center px-2 py-0.5 text-tiny font-medium rounded-full bg-primary/10 text-primary">
                              New
                            </span>
                          )}
                        </span>
                      </NextLink>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
