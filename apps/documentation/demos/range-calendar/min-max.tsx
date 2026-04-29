'use client'

import { RangeCalendar } from '@flexi-ui/range-calendar'
import { today, getLocalTimeZone } from '@internationalized/date'

export default function Demo() {
  const now = today(getLocalTimeZone())

  return (
    <RangeCalendar
      aria-label="Pick a range within the next 30 days"
      maxValue={now.add({ days: 30 })}
      minValue={now}
    />
  )
}
