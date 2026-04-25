'use client'

import { Badge } from '@flexi-ui/badge'

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="dot" color="success">
        Online
      </Badge>
      <Badge variant="dot" color="warning">
        Idle
      </Badge>
      <Badge variant="dot" color="danger">
        Offline
      </Badge>
    </div>
  )
}
