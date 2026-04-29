'use client'

import { Meter } from '@flexi-ui/meter'

export default function Demo() {
  return (
    <div className="w-full max-w-md">
      <Meter label="Storage used" maxValue={50} value={32} />
    </div>
  )
}
