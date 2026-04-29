'use client'

import { TimeField } from '@flexi-ui/time-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <TimeField label="Small" size="sm" />
      <TimeField label="Medium" size="md" />
      <TimeField label="Large" size="lg" />
    </div>
  )
}
