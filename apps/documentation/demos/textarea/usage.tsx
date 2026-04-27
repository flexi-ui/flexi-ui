'use client'

import { Textarea } from '@flexi-ui/textarea'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Textarea
        label="Notes"
        placeholder="Anything you want to remember…"
        rows={4}
      />
    </div>
  )
}
