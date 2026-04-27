'use client'

import { NumberField } from '@flexi-ui/number-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <NumberField defaultValue={1} label="Small" size="sm" />
      <NumberField defaultValue={1} label="Medium" size="md" />
      <NumberField defaultValue={1} label="Large" size="lg" />
    </div>
  )
}
