'use client'

import { ColorSlider } from '@flexi-ui/color-slider'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <ColorSlider channel="hue" defaultValue="hsl(280, 100%, 50%)" label="Hue" />
      <ColorSlider channel="saturation" defaultValue="hsl(280, 80%, 50%)" label="Saturation" />
      <ColorSlider channel="lightness" defaultValue="hsl(280, 100%, 50%)" label="Lightness" />
    </div>
  )
}
