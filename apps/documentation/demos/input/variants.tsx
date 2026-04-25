'use client'

import { Input } from '@flexi-ui/input'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input label="Flat" placeholder="Default style" variant="flat" />
      <Input label="Bordered" placeholder="Outlined" variant="bordered" />
      <Input label="Underlined" placeholder="Minimal" variant="underlined" />
    </div>
  )
}
