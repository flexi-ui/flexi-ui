'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import emitter from '@/libs/emitter'
import { Button } from '@flexi-ui/button'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'

const hideOnPaths = ['examples', 'themes']

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
    <div className="relative z-50 isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-primary-50/50 via-secondary-50/30 to-primary-50/50 dark:from-primary-950/20 dark:via-secondary-950/10 dark:to-primary-950/20 border-b border-divider/50 backdrop-blur-sm">
      <div className="flex w-full items-center justify-between md:justify-center gap-x-4 px-4 sm:px-6 py-2.5">
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <Sparkles className="h-4 w-4 text-primary hidden sm:inline" />
          <span className="text-foreground-600 dark:text-foreground-400 font-medium">
            <span className="hidden sm:inline">Generate, edit and deploy </span>
            <span className="sm:hidden">Build </span>
            beautiful apps
          </span>
        </div>

        <Button
          as={Link}
          href="/docs/guide/introduction"
          size="sm"
          radius="full"
          variant="solid"
          color="primary"
          endContent={<ArrowRight className="h-3.5 w-3.5" />}
          className="font-semibold shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="hidden sm:inline">Get Started</span>
          <span className="sm:hidden">Start</span>
        </Button>
      </div>
    </div>
  )
}
