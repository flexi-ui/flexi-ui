'use client'

import { useState } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'

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
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    // Auto-open sections that contain the current route
    const initial: Record<string, boolean> = {}
    routes.forEach((section) => {
      initial[section.key] = section.defaultOpen || false
    })
    return initial
  })

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const isActive = (path: string) => {
    if (!path || path === '#') return false
    const cleanPath = path.replace('.mdx', '')
    return pathname === cleanPath || pathname?.startsWith(cleanPath)
  }

  return (
    <nav className="space-y-6">
      {routes.map((section) => (
        <div key={section.key}>
          <button
            onClick={() => toggleSection(section.key)}
            className="flex items-center justify-between w-full text-left font-semibold text-sm mb-2 hover:text-primary transition-colors"
          >
            <span>{section.title}</span>
            {openSections[section.key] ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>

          {openSections[section.key] && (
            <ul className="space-y-1 ml-2">
              {section.routes.map((route) => {
                const href = route.path?.replace('.mdx', '') || '#'
                const active = isActive(href)

                return (
                  <li key={route.key}>
                    <NextLink
                      href={href}
                      className={`block py-1.5 px-3 rounded-lg text-sm transition-colors ${
                        active
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-foreground-600 hover:text-foreground hover:bg-default-100'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{route.title}</span>
                        {route.updated && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-primary/20 text-primary">
                            Updated
                          </span>
                        )}
                        {route.newPost && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-success/20 text-success">
                            New
                          </span>
                        )}
                      </span>
                    </NextLink>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )
}
