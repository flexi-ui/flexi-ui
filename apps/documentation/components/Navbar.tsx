'use client'

import { useState } from 'react'
import type { FC } from 'react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Github, Menu, X } from 'lucide-react'
import { Button } from '@flexi-ui/button'
import { Logo } from '@/components/Logo'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { CommandPalette } from '@/components/CommandPalette'
import { siteConfig } from '@/config/site'
import { cn } from '@flexi-ui/theme'

const navItems = [
  { label: 'Docs', href: '/docs/guide/introduction' },
  { label: 'Components', href: '/docs/components/button' },
  { label: 'Theme', href: '/themes' },
]

export const Navbar: FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="flex z-40 w-full items-center justify-center sticky py-2 top-0 inset-x-0 backdrop-blur-sm">
        <header className="z-40 flex px-4 sm:px-6 gap-4 w-full flex-row relative flex-nowrap items-center-safe justify-between h-16 max-w-7xl">
          {/* Left: Logo and Desktop Nav */}
          <div className="flex items-center gap-8">
            <NextLink
              href="/"
              aria-label="Home"
              className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity hover:opacity-80"
            >
              <Logo />
            </NextLink>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 items-center mr-3">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/themes' && pathname?.startsWith(item.href))
                return (
                  <li key={item.href}>
                    <NextLink
                      href={item.href}
                      className={cn(
                        'text-sm font-medium transition-colors',
                        isActive ? 'text-foreground' : 'text-foreground hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                )
              })}
            </ul>
            {/* Search */}
            <Button
              radius="full"
              variant="bordered"
              color="default"
              aria-label="Search"
              className="min-w-xs max-w-sm w-full justify-between hidden sm:flex"
              onPress={() => setIsSearchOpen(true)}
            >
              <span className="flex items-center gap-2">
                <Search />
                <span className="text-sm hidden lg:inline">Search</span>
              </span>
              <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded bg-background border border-default-200 px-1.5 font-mono text-[10px] font-medium text-foreground-500">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            {/* Mobile Search Icon */}
            <Button
              isIconOnly
              radius="full"
              variant="light"
              color="default"
              aria-label="Search"
              className="sm:hidden"
              onPress={() => setIsSearchOpen(true)}
            >
              <Search className="size-5" />
            </Button>

            {/* GitHub Link */}
            <Button
              as={NextLink}
              isIconOnly
              radius="full"
              variant="light"
              color="default"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
              href={siteConfig.links.github}
            >
              <Github className="size-5" />
            </Button>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Mobile Menu Toggle */}
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="md:hidden"
              aria-label="Toggle menu"
              onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-xl border-b border-divider">
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/themes' && pathname?.startsWith(item.href))
                return (
                  <li key={item.href}>
                    <NextLink
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                        'hover:bg-default-100 dark:hover:bg-default-50',
                        isActive ? 'text-foreground' : 'text-foreground',
                      )}
                    >
                      {item.label}
                    </NextLink>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </nav>

      {/* Command Palette */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
