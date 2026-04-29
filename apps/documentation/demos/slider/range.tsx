'use client'

import { Slider } from '@flexi-ui/slider'

export default function Demo() {
  return (
    <div className="w-full max-w-md">
      <Slider
        defaultValue={5}
        label="Star rating"
        maxValue={10}
        minValue={0}
        showOutput
        step={1}
      />
    </div>
  )
}
