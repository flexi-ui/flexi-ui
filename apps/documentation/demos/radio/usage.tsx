'use client'

import { Radio } from '@flexi-ui/radio'

export default function Demo() {
  return (
    <Radio.Group defaultValue="standard">
      <Radio value="standard">Standard delivery</Radio>
      <Radio value="express">Express delivery</Radio>
      <Radio value="overnight">Overnight delivery</Radio>
    </Radio.Group>
  )
}
