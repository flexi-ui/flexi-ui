'use client'

import { DateField } from '@flexi-ui/date-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <DateField granularity="day" label="Day" />
      <DateField granularity="hour" label="Day + hour" />
      <DateField granularity="minute" label="Day + minute" />
    </div>
  )
}
