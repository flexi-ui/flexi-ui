'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'
import { Search, FileText, Component, Book } from 'lucide-react'
import { routes } from '@/config/routes.json'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export const CommandPalette = ({ isOpen, onClose }: CommandPaletteProps) => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onClose])

  const handleSelect = useCallback(
    (callback: () => void) => {
      onClose()
      callback()
    },
    [onClose],
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="fixed left-1/2 top-[20%] w-full max-w-2xl -translate-x-1/2">
        <Command
          className="rounded-lg border border-divider bg-content1 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center border-b border-divider px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search documentation..."
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-foreground-400 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-foreground-400">
              No results found.
            </Command.Empty>

            {routes.map((section) => (
              <Command.Group
                key={section.key}
                heading={section.title}
                className="mb-2 px-2 py-1.5 text-xs font-semibold text-foreground-500"
              >
                {section.routes.map((route) => {
                  const href = route.path?.replace('.mdx', '') || '#'
                  const Icon = getIconForSection(section.key)

                  return (
                    <Command.Item
                      key={route.key}
                      value={`${section.title} ${route.title} ${route.keywords || ''}`}
                      onSelect={() =>
                        handleSelect(() => {
                          router.push(href)
                        })
                      }
                      className="flex cursor-pointer items-center rounded-md px-3 py-2 text-sm hover:bg-default-100 data-[selected=true]:bg-default-100"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span>{route.title}</span>
                      {route.updated && (
                        <span className="ml-auto text-xs text-primary">Updated</span>
                      )}
                      {route.newPost && <span className="ml-auto text-xs text-success">New</span>}
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

function getIconForSection(sectionKey: string) {
  switch (sectionKey) {
    case 'guide':
      return Book
    case 'frameworks':
      return FileText
    case 'components':
      return Component
    case 'customization':
      return FileText
    default:
      return FileText
  }
}
