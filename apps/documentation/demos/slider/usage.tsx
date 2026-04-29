'use client'

import { Slider } from '@flexi-ui/slider'

export default function Demo() {
  return (
    <div className="w-full max-w-md">
      <Slider defaultValue={50} label="Volume" showOutput />
    </div>
  )
}
