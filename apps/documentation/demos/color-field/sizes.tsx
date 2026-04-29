'use client'

import { ColorField } from '@flexi-ui/color-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <ColorField defaultValue="#761ae8" label="Small" size="sm" />
      <ColorField defaultValue="#761ae8" label="Medium" size="md" />
      <ColorField defaultValue="#761ae8" label="Large" size="lg" />
    </div>
  )
}
