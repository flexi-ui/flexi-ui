'use client'

import { Checkbox } from '@flexi-ui/checkbox'

export default function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox size="sm">Small</Checkbox>
      <Checkbox size="md">Medium</Checkbox>
      <Checkbox size="lg">Large</Checkbox>
    </div>
  )
}
