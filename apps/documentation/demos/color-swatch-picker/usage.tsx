'use client'

import { ColorSwatchPicker } from '@flexi-ui/color-swatch-picker'

const palette = ['#761ae8', '#17c964', '#f5a524', '#f31260', '#0070f3', '#11181c']

export default function Demo() {
  return (
    <ColorSwatchPicker defaultValue={palette[0]}>
      {palette.map((color) => (
        <ColorSwatchPicker.Item key={color} color={color} />
      ))}
    </ColorSwatchPicker>
  )
}
