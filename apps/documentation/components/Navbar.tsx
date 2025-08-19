'use client'

import type { FC } from 'react'
import NextLink from 'next/link'
import { Logo } from '@/components/Logo'

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="flex z-40 w-full items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-white/[.90] dark:bg-black/[.65] h-16">
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-8xl">
        <ul
          className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 basis-1/5 sm:basis-full"
          data-justify="start"
        >
          <li className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border gap-x-3 max-w-fit">
            <NextLink
              href="/"
              aria-label="Home"
              className="flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50"
            >
              <Logo />
            </NextLink>
            <div style={{ opacity: 1 }}>
              <div className="relative items-center justify-between box-border whitespace-nowrap px-1 text-small rounded-full text-default-foreground max-w-[44px] hidden h-6 w-[44px] py-1 min-w-fit sm:flex gap-0.5 bg-default-400/20 dark:bg-default-500/20">
                <span className="flex-1 px-2 font-medium text-default-500 text-xs">v1.0.0</span>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </nav>
  )
}
