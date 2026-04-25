'use client'

import { Card } from '@flexi-ui/card'

export default function Demo() {
  return (
    <Card
      isPressable
      variant="bordered"
      className="w-full max-w-sm"
      onClick={() => alert('Opened card')}
    >
      <Card.Header>
        <h3 className="text-base font-semibold">Open project</h3>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-muted-foreground">Navigate to the full workspace.</p>
      </Card.Body>
    </Card>
  )
}
