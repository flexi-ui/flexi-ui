'use client'

import { Card } from '@flexi-ui/card'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Card size="sm" variant="bordered">
        <Card.Body>Small</Card.Body>
      </Card>
      <Card size="md" variant="bordered">
        <Card.Body>Medium</Card.Body>
      </Card>
      <Card size="lg" variant="bordered">
        <Card.Body>Large</Card.Body>
      </Card>
    </div>
  )
}
