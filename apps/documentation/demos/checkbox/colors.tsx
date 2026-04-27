'use client'

import { Checkbox } from '@flexi-ui/checkbox'

export default function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox defaultSelected color="accent">
        Accent
      </Checkbox>
      <Checkbox defaultSelected color="success">
        Success
      </Checkbox>
      <Checkbox defaultSelected color="warning">
        Warning
      </Checkbox>
      <Checkbox defaultSelected color="danger">
        Danger
      </Checkbox>
    </div>
  )
}
