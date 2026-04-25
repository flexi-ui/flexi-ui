'use client'

import { Skeleton } from '@flexi-ui/skeleton'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton className="h-4 w-48 rounded" />
      <Skeleton className="h-4 w-64 rounded" />
      <Skeleton className="h-4 w-40 rounded" />
    </div>
  )
}
