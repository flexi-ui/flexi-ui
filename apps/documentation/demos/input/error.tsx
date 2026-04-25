'use client'

import { Input } from '@flexi-ui/input'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Input
        errorMessage="That address doesn't look quite right."
        isInvalid
        label="Email"
        placeholder="you@example.com"
      />
    </div>
  )
}
