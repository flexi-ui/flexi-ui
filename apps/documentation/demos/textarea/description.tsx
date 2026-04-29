'use client'

import { Textarea } from '@flexi-ui/textarea'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        description="Markdown is supported."
        label="Bio"
        placeholder="Tell us about yourself…"
        rows={4}
      />
    </div>
  )
}
