'use client'

import { DatePicker } from '@flexi-ui/date-picker'
import { today, getLocalTimeZone } from '@internationalized/date'

export default function Demo() {
  const now = today(getLocalTimeZone())

  return (
    <div className="w-full max-w-xs">
      <DatePicker
        label="Pick a date in the next 30 days"
        maxValue={now.add({ days: 30 })}
        minValue={now}
      />
    </div>
  )
}
