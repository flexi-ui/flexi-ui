'use client'

import { ColorPicker } from '@flexi-ui/color-picker'
import { ColorSwatch } from '@flexi-ui/color-swatch'
import { ColorSwatchPicker } from '@flexi-ui/color-swatch-picker'

const palette = ['#761ae8', '#17c964', '#f5a524', '#f31260', '#0070f3']

export default function Demo() {
  return (
    <ColorPicker defaultValue={palette[0]}>
      <div className="flex items-center gap-3">
        <ColorSwatch />
        <ColorSwatchPicker>
          {palette.map((color) => (
            <ColorSwatchPicker.Item key={color} color={color} />
          ))}
        </ColorSwatchPicker>
      </div>
    </ColorPicker>
  )
}
