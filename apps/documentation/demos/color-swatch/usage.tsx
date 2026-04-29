'use client'

import { ColorSwatch } from '@flexi-ui/color-swatch'

export default function Demo() {
  return (
    <div className="flex items-center gap-3">
      <ColorSwatch color="#761ae8" />
      <ColorSwatch color="#17c964" />
      <ColorSwatch color="#f5a524" />
      <ColorSwatch color="#f31260" />
    </div>
  )
}
