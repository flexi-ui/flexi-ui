'use client'

import { Badge } from '@flexi-ui/badge'

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="solid" color="accent">
        Solid
      </Badge>
      <Badge variant="flat" color="accent">
        Flat
      </Badge>
      <Badge variant="bordered" color="accent">
        Bordered
      </Badge>
      <Badge variant="dot" color="accent">
        Dot
      </Badge>
    </div>
  )
}
