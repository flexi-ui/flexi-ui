'use client'

import { Progress } from '@flexi-ui/progress'

export default function Demo() {
  return (
    <div className="w-full max-w-md">
      <Progress isIndeterminate label="Connecting…" />
    </div>
  )
}
