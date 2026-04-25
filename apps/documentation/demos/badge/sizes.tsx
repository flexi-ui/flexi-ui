'use client'

import { Badge } from '@flexi-ui/badge'

export default function Demo() {
  return (
    <div className="flex items-center gap-3">
      <Badge size="sm" color="accent">
        Small
      </Badge>
      <Badge size="md" color="accent">
        Medium
      </Badge>
      <Badge size="lg" color="accent">
        Large
      </Badge>
    </div>
  )
}
