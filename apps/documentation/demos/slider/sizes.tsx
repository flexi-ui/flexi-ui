'use client'

import { Slider } from '@flexi-ui/slider'

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Slider defaultValue={30} label="Small" showOutput size="sm" />
      <Slider defaultValue={50} label="Medium" showOutput size="md" />
      <Slider defaultValue={70} label="Large" showOutput size="lg" />
    </div>
  )
}
