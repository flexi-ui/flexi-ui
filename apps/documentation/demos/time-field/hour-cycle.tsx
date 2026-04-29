'use client'

import { TimeField } from '@flexi-ui/time-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <TimeField hourCycle={12} label="12-hour clock" />
      <TimeField hourCycle={24} label="24-hour clock" />
    </div>
  )
}
