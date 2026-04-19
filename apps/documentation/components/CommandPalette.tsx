'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'
import { Book, Component as ComponentIcon, FileText, Search } from 'lucide-react'
import manifest from '@/config/routes.json'

const routes = manifest.routes

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    if (isOpen) document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [isOpen, onClose])

  const handleSelect = useCallback(
    (href: string) => {
      onClose()
      router.push(href)
    },
    [onClose, router],
  )

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div className="fixed left-1/2 top-[15%] w-full max-w-xl -translate-x-1/2 px-4">
        <Command
          className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          loop
        >
          <div className="flex items-center gap-2 border-b border-border px-3">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search documentation…"
              className="flex h-11 w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            {routes.map((section) => (
              <Command.Group key={section.key} heading={section.title}>
                {section.routes.map((route) => {
                  const href = route.path?.replace('.mdx', '') || '#'
                  const Icon = getIcon(section.key)

                  return (
                    <Command.Item
                      key={route.key}
                      value={`${section.title} ${route.title}`}
                      onSelect={() => handleSelect(href)}
                      className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground data-[selected=true]:bg-muted"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span>{route.title}</span>
                    </Command.Item>
                  )
                })}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  )
}

function getIcon(sectionKey: string) {
  switch (sectionKey) {
    case 'guide':
      return Book
    case 'components':
      return ComponentIcon
    default:
      return FileText
  }
}
