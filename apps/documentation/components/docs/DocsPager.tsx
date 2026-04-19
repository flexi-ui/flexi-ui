'use client'

import NextLink from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import manifest from '@/config/routes.json'
import type { Route } from '@/libs/docs/utils'

interface DocsPagerProps {
  currentRoute: Route
}

export const DocsPager = ({ currentRoute }: DocsPagerProps) => {
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
    <div className="mt-12 flex items-center justify-between gap-4 border-t border-border py-8">
      {prevRoute ? (
        <NextLink
          href={prevRoute.path || '#'}
          className="group flex flex-1 items-center gap-3 rounded-lg border border-border bg-surface/50 p-4 transition-colors hover:border-foreground/20"
        >
          <ChevronLeft className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
          <div className="flex flex-col items-start">
            <span className="text-xs text-muted-foreground">Previous</span>
            <span className="text-sm font-semibold text-foreground">{prevRoute.title}</span>
          </div>
        </NextLink>
      ) : (
        <div className="flex-1" />
      )}

      {nextRoute ? (
        <NextLink
          href={nextRoute.path || '#'}
          className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-border bg-surface/50 p-4 transition-colors hover:border-foreground/20"
        >
          <div className="flex flex-col items-end">
            <span className="text-xs text-muted-foreground">Next</span>
            <span className="text-sm font-semibold text-foreground">{nextRoute.title}</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
        </NextLink>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  )
}
