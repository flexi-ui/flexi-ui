'use client'

import { Meter } from '@flexi-ui/meter'

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Meter label="Small" size="sm" value={30} />
      <Meter label="Medium" size="md" value={55} />
      <Meter label="Large" size="lg" value={80} />
    </div>
  )
}
