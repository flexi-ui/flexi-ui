'use client'

import { Input } from '@flexi-ui/input'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Input isDisabled label="Team" placeholder="You can't edit this" />
    </div>
  )
}
