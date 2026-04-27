'use client'

import { Textarea } from '@flexi-ui/textarea'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        defaultValue="A"
        errorMessage="Bio must be at least 50 characters."
        isInvalid
        label="Bio"
        rows={4}
      />
    </div>
  )
}
