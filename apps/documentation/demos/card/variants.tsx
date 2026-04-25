'use client'

import { Card } from '@flexi-ui/card'

export default function Demo() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <Card variant="default">
        <Card.Body>Default</Card.Body>
      </Card>
      <Card variant="bordered">
        <Card.Body>Bordered</Card.Body>
      </Card>
      <Card variant="flat">
        <Card.Body>Flat</Card.Body>
      </Card>
      <Card variant="shadow">
        <Card.Body>Shadow</Card.Body>
      </Card>
    </div>
  )
}
