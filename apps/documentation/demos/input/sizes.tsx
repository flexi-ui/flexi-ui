'use client'

import { Input } from '@flexi-ui/input'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Input label="Small" placeholder="Small input" size="sm" />
      <Input label="Medium" placeholder="Medium input" size="md" />
      <Input label="Large" placeholder="Large input" size="lg" />
    </div>
  )
}
