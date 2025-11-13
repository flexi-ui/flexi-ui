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

const navItems = [
  { label: 'Docs', href: '/docs/guide/introduction' },
  { label: 'Components', href: '/docs/components/avatar' },
  { label: 'Roadmap', href: '#' },
]

export const Navbar: FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="flex z-40 w-full items-center justify-center sticky top-0 inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70 border-b border-divider">
        <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-16 max-w-8xl">
          {/* Left: Logo and Desktop Nav */}
          <div className="flex items-center gap-8">
            <NextLink
              href="/"
              aria-label="Home"
              className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50"
            >
              <Logo />
            </NextLink>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NextLink
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname?.startsWith(item.href) && item.href !== '#'
                        ? 'text-primary'
                        : 'text-foreground-600'
                    }`}
                  >
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button
              size="sm"
              variant="flat"
              onPress={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 text-foreground-600"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm">Search</span>
              <kbd className="hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-default-200 bg-default-100 px-1.5 font-mono text-[10px] font-medium text-foreground-600">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            {/* Mobile Search Icon */}
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={() => setIsSearchOpen(true)}
              className="sm:hidden"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* GitHub Link */}
            <Button
              as={NextLink}
              href={siteConfig.links.github}
              isIconOnly
              size="sm"
              variant="light"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </Button>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Mobile Menu Toggle */}
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b border-divider shadow-lg">
            <ul className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NextLink
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-default-100 ${
                      pathname?.startsWith(item.href) && item.href !== '#'
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground-600'
                    }`}
                  >
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Command Palette */}
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
