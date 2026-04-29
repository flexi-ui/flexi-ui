'use client'

import { ColorSwatch } from '@flexi-ui/color-swatch'

export default function Demo() {
  return (
    <div className="flex items-center gap-3">
      <ColorSwatch color="#761ae8" size="sm" />
      <ColorSwatch color="#761ae8" size="md" />
      <ColorSwatch color="#761ae8" size="lg" />
    </div>
  )
}
