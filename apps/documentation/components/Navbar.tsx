'use client'

import { useState, useEffect } from 'react'
import type { FC } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'
import { clsx } from '@flexi-ui/shared-utils'
import { Logo } from '@/components/Logo'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { CommandPalette } from '@/components/CommandPalette'
import { siteConfig } from '@/config/site'

const navItems = [
  { label: 'Docs', href: '/docs/guide/introduction' },
  { label: 'Components', href: '/docs/components/button' },
]

export const Navbar: FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-6 px-6">
          <div className="flex items-center gap-8">
            <NextLink href="/" aria-label="FlexiUI" className="flex items-center">
              <Logo />
            </NextLink>
            <ul className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => {
                const active = pathname?.startsWith(item.href.split('/').slice(0, 3).join('/'))
                return (
                  <li key={item.href}>
                    <NextLink
                      href={item.href}
                      className={clsx(
                        'text-sm transition-colors',
                        active
                          ? 'font-medium text-foreground'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="hidden h-9 w-60 items-center justify-between rounded-md border border-border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted sm:flex"
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4" icon="gravity-ui:magnifier" />
                Search docs…
              </span>
              <kbd className="inline-flex h-5 items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium">
                <span>⌘</span>K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:hidden"
            >
              <Icon className="h-4 w-4" icon="gravity-ui:magnifier" />
            </button>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="h-4 w-4" icon="gravity-ui:logo-github" />
            </a>

            <ThemeSwitcher />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
            >
              <Icon
                className="h-4 w-4"
                icon={isMobileMenuOpen ? 'gravity-ui:xmark' : 'gravity-ui:bars'}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="border-t border-border bg-background md:hidden">
            <ul className="flex flex-col px-6 py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NextLink
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
