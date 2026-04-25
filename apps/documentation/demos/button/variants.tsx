'use client'

import { Button } from '@flexi-ui/button'

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="bordered">Bordered</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="shadow">Shadow</Button>
      <Button variant="light">Light</Button>
    </div>
  )
}
