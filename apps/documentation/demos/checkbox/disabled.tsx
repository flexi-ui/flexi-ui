'use client'

import { Checkbox } from '@flexi-ui/checkbox'

export default function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox isDisabled>Disabled (unselected)</Checkbox>
      <Checkbox isDisabled defaultSelected>
        Disabled (selected)
      </Checkbox>
    </div>
  )
}
