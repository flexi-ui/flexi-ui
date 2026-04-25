'use client'

import { Badge } from '@flexi-ui/badge'

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge color="default">default</Badge>
      <Badge color="accent">accent</Badge>
      <Badge color="success">success</Badge>
      <Badge color="warning">warning</Badge>
      <Badge color="danger">danger</Badge>
    </div>
  )
}
