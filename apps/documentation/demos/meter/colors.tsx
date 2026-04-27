'use client'

import { Meter } from '@flexi-ui/meter'

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Meter color="accent" label="Capacity" value={45} />
      <Meter color="success" label="Healthy" value={70} />
      <Meter color="warning" label="Watch out" value={85} />
      <Meter color="danger" label="Critical" value={95} />
    </div>
  )
}
