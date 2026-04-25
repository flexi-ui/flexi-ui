'use client'

import { Avatar } from '@flexi-ui/avatar'

export default function Demo() {
  return (
    <Avatar
      fallback={
        <span aria-label="ghost" role="img">
          👻
        </span>
      }
      size="lg"
    />
  )
}
