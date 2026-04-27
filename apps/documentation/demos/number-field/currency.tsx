'use client'

import { NumberField } from '@flexi-ui/number-field'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <NumberField
        defaultValue={49}
        formatOptions={{ style: 'currency', currency: 'USD' }}
        label="Price"
        minValue={0}
        step={0.5}
      />
    </div>
  )
}
