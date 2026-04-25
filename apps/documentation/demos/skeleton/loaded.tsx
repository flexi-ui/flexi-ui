'use client'

import { Skeleton } from '@flexi-ui/skeleton'

export default function Demo() {
  return (
    <Skeleton isLoaded className="h-5 w-40 rounded">
      <span className="text-sm font-medium">Alex Morgan</span>
    </Skeleton>
  )
}
