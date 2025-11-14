'use client'

import NextLink from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@flexi-ui/button'
import manifest from '@/config/routes.json'
import type { Route } from '@/libs/docs/utils'

interface DocsPagerProps {
  currentRoute: Route
}

export const DocsPager = ({ currentRoute }: DocsPagerProps) => {
  // Flatten all routes
  const allRoutes = manifest.routes.flatMap((section) =>
    section.routes.map((route) => ({
      ...route,
      path: route.path?.replace('.mdx', ''),
    })),
  )

  const currentIndex = allRoutes.findIndex(
    (route) => route.path === currentRoute.path?.replace('.mdx', ''),
  )

  const prevRoute = currentIndex > 0 ? allRoutes[currentIndex - 1] : null
  const nextRoute = currentIndex < allRoutes.length - 1 ? allRoutes[currentIndex + 1] : null

  if (!prevRoute && !nextRoute) return null

  return (
    <div className="flex items-center justify-between gap-4 py-8 border-t border-divider mt-12">
      {prevRoute ? (
        <Button
          as={NextLink}
          href={prevRoute.path || '#'}
          variant="flat"
          startContent={<ChevronLeft className="h-4 w-4" />}
          className="flex-1"
        >
          <div className="flex flex-col items-start">
            <span className="text-xs text-foreground-500">Previous</span>
            <span className="font-semibold">{prevRoute.title}</span>
          </div>
        </Button>
      ) : (
        <div className="flex-1" />
      )}

      {nextRoute ? (
        <Button
          as={NextLink}
          href={nextRoute.path || '#'}
          variant="flat"
          endContent={<ChevronRight className="h-4 w-4" />}
          className="flex-1"
        >
          <div className="flex flex-col items-end">
            <span className="text-xs text-foreground-500">Next</span>
            <span className="font-semibold">{nextRoute.title}</span>
          </div>
        </Button>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  )
}
