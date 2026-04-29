'use client'

import { Slider } from '@flexi-ui/slider'

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Slider color="accent" defaultValue={40} label="Accent" showOutput />
      <Slider color="success" defaultValue={70} label="Success" showOutput />
      <Slider color="warning" defaultValue={50} label="Warning" showOutput />
      <Slider color="danger" defaultValue={20} label="Danger" showOutput />
    </div>
  )
}
