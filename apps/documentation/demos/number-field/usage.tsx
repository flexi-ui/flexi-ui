'use client'

import { NumberField } from '@flexi-ui/number-field'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <NumberField defaultValue={1} label="Quantity" minValue={0} />
    </div>
  )
}
