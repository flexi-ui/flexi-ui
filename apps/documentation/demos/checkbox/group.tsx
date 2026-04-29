'use client'

import { Checkbox } from '@flexi-ui/checkbox'

export default function Demo() {
  return (
    <Checkbox.Group defaultValue={['email']}>
      <Checkbox value="email">Email notifications</Checkbox>
      <Checkbox value="sms">SMS alerts</Checkbox>
      <Checkbox value="push">Push notifications</Checkbox>
    </Checkbox.Group>
  )
}
