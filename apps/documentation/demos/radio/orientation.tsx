'use client'

import { Radio } from '@flexi-ui/radio'

export default function Demo() {
  return (
    <Radio.Group defaultValue="card" orientation="horizontal">
      <Radio value="card">Card</Radio>
      <Radio value="bank">Bank transfer</Radio>
      <Radio value="paypal">PayPal</Radio>
    </Radio.Group>
  )
}
