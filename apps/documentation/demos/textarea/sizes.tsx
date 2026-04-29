'use client'

import { Textarea } from '@flexi-ui/textarea'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Textarea label="Small" placeholder="Small textarea" rows={2} size="sm" />
      <Textarea label="Medium" placeholder="Medium textarea" rows={3} size="md" />
      <Textarea label="Large" placeholder="Large textarea" rows={4} size="lg" />
    </div>
  )
}
