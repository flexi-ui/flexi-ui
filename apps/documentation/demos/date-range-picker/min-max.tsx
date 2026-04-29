'use client'

import { DateRangePicker } from '@flexi-ui/date-range-picker'
import { today, getLocalTimeZone } from '@internationalized/date'

export default function Demo() {
  const now = today(getLocalTimeZone())

  return (
    <div className="w-full max-w-sm">
      <DateRangePicker
        label="Reservation (next 60 days)"
        maxValue={now.add({ days: 60 })}
        minValue={now}
      />
    </div>
  )
}
