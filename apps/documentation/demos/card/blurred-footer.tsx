'use client'

import { Button } from '@flexi-ui/button'
import { Card } from '@flexi-ui/card'

export default function Demo() {
  return (
    <Card variant="shadow" className="relative w-full max-w-sm overflow-hidden">
      <Card.Body className="relative h-48 p-0">
        <img
          alt="gradient"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80"
        />
      </Card.Body>
      <Card.Footer isBlurred className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-sm font-medium">Northern Lights</span>
          <Button size="sm" variant="flat">
            View
          </Button>
        </div>
      </Card.Footer>
    </Card>
  )
}
