'use client'

import { Skeleton } from '@flexi-ui/skeleton'

export default function Demo() {
  return (
    <div className="flex w-72 flex-col gap-4 rounded-lg border border-border p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32 rounded" />
          <Skeleton className="h-3 w-24 rounded" />
        </div>
      </div>
      <Skeleton className="h-3 w-full rounded" />
      <Skeleton className="h-3 w-11/12 rounded" />
      <Skeleton className="h-3 w-3/4 rounded" />
    </div>
  )
}
