'use client'

import { Divider } from '@flexi-ui/divider'

export default function Demo() {
  return (
    <div className="flex h-12 items-center gap-4">
      <span className="text-sm text-foreground">Drafts</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-foreground">Published</span>
      <Divider orientation="vertical" />
      <span className="text-sm text-foreground">Archived</span>
    </div>
  )
}
