'use client'

import { ColorSlider } from '@flexi-ui/color-slider'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <ColorSlider channel="hue" defaultValue="hsl(60, 100%, 50%)" label="Hue" />
    </div>
  )
}
