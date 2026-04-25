'use client'

import { Divider } from '@flexi-ui/divider'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <p className="text-sm text-foreground">Above the line</p>
      <Divider className="my-3" />
      <p className="text-sm text-foreground">Below the line</p>
    </div>
  )
}
