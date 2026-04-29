'use client'

import { DateField } from '@flexi-ui/date-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <DateField label="Small" size="sm" />
      <DateField label="Medium" size="md" />
      <DateField label="Large" size="lg" />
    </div>
  )
}
