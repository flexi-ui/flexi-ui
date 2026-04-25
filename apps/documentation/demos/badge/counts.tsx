'use client'

import { Badge } from '@flexi-ui/badge'
import { Button } from '@flexi-ui/button'

export default function Demo() {
  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Button variant="bordered">Messages</Button>
        <span className="absolute -right-2 -top-2">
          <Badge size="sm" color="danger">
            3
          </Badge>
        </span>
      </div>
      <div className="relative">
        <Button variant="bordered">Updates</Button>
        <span className="absolute -right-2 -top-2">
          <Badge size="sm" color="accent">
            12
          </Badge>
        </span>
      </div>
    </div>
  )
}
