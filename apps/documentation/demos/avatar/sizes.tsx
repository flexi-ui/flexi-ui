'use client'

import { Avatar } from '@flexi-ui/avatar'

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm" src="https://i.pravatar.cc/96?img=12" />
      <Avatar size="md" src="https://i.pravatar.cc/96?img=12" />
      <Avatar size="lg" src="https://i.pravatar.cc/96?img=12" />
      <Avatar size="xl" src="https://i.pravatar.cc/96?img=12" />
    </div>
  )
}
