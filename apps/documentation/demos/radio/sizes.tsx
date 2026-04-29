'use client'

import { Radio } from '@flexi-ui/radio'

export default function Demo() {
  return (
    <Radio.Group defaultValue="md">
      <Radio size="sm" value="sm">
        Small
      </Radio>
      <Radio size="md" value="md">
        Medium
      </Radio>
      <Radio size="lg" value="lg">
        Large
      </Radio>
    </Radio.Group>
  )
}
