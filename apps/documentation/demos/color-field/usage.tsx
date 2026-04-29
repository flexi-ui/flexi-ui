'use client'

import { ColorField } from '@flexi-ui/color-field'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <ColorField defaultValue="#761ae8" label="Brand color" />
    </div>
  )
}
