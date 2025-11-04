'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import emitter from '@/libs/emitter'
import { Button } from '@flexi-ui/button'
import Link from 'next/link'

const hideOnPaths = ['examples']

export const Topbar = () => {
  const pathname = usePathname()
  const shouldBeVisible = !hideOnPaths.some((path) => pathname.includes(path))

  useEffect(() => {
    if (!shouldBeVisible) return

    // listen to scroll event, dispatch an event when scroll is at the top < 48 px
    const handleScroll = () => {
      if (window.scrollY < 48) {
        emitter.emit('proBannerVisibilityChange', 'visible')
      } else {
        emitter.emit('proBannerVisibilityChange', 'hidden')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [shouldBeVisible])

  if (!shouldBeVisible) return null

  return (
    <div className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-background border-b-1 border-divider px-6 py-2 sm:px-3.5 sm:before:flex-1">
      <div className="flex w-full items-center justify-between md:justify-center gap-x-3">
        <div className="text-small flex items-end sm:text-[0.93rem] text-foreground hover:opacity-80 transition-opacity">
          <span className="inline-flex md:ml-1 text-tiny text-foreground-400">
            Generate, edit and deploy beautiful apps
          </span>
        </div>

        <Button
          as={Link}
          href="/docs/guide/introduction"
          size="sm"
          radius="full"
          variant="light"
          color="default"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}
