'use client'

import { ColorArea } from '@flexi-ui/color-area'

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <ColorArea defaultValue="#761ae8" size="sm" />
      <ColorArea defaultValue="#761ae8" size="md" />
      <ColorArea defaultValue="#761ae8" size="lg" />
    </div>
  )
}
