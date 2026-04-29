'use client'

import { Calendar } from '@flexi-ui/calendar'
import { today, getLocalTimeZone } from '@internationalized/date'

export default function Demo() {
  const now = today(getLocalTimeZone())

  return (
    <Calendar
      aria-label="Pick a date within the next 14 days"
      maxValue={now.add({ days: 14 })}
      minValue={now}
    />
  )
}
