'use client'

import { Avatar } from '@flexi-ui/avatar'

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar name="Alex Morgan" />
      <Avatar name="Jamie Lee" size="lg" />
      <Avatar name="Sam" size="xl" isBordered />
    </div>
  )
}
