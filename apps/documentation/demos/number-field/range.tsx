'use client'

import { NumberField } from '@flexi-ui/number-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <NumberField
        defaultValue={1}
        label="Cart count (0–99)"
        maxValue={99}
        minValue={0}
        step={1}
      />
      <NumberField
        defaultValue={1.5}
        formatOptions={{ style: 'decimal', minimumFractionDigits: 1 }}
        label="Step 0.5"
        step={0.5}
      />
    </div>
  )
}
