'use client'

import { Button } from '@flexi-ui/button'
import { Card } from '@flexi-ui/card'

export default function Demo() {
  return (
    <Card className="w-full max-w-sm">
      <Card.Header>
        <h3 className="text-base font-semibold">New message</h3>
      </Card.Header>
      <Card.Body>
        <p className="text-sm text-muted-foreground">
          Alex sent you a file. Open it to review the shared notes.
        </p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm">Open</Button>
      </Card.Footer>
    </Card>
  )
}
