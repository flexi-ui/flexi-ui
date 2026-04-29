'use client'

import { Radio } from '@flexi-ui/radio'

export default function Demo() {
  return (
    <Radio.Group defaultValue="accent">
      <Radio color="accent" value="accent">
        Accent
      </Radio>
      <Radio color="success" value="success">
        Success
      </Radio>
      <Radio color="warning" value="warning">
        Warning
      </Radio>
      <Radio color="danger" value="danger">
        Danger
      </Radio>
    </Radio.Group>
  )
}
