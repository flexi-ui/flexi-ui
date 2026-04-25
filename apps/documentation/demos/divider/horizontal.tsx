'use client'

import { Divider } from '@flexi-ui/divider'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span className="text-sm text-foreground">Account</span>
      <Divider />
      <span className="text-sm text-foreground">Preferences</span>
      <Divider />
      <span className="text-sm text-foreground">Billing</span>
    </div>
  )
}
