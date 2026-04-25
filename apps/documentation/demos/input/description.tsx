'use client'

import { Input } from '@flexi-ui/input'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Input
        description="Letters, numbers, and hyphens only."
        label="Username"
        placeholder="your-handle"
      />
    </div>
  )
}
