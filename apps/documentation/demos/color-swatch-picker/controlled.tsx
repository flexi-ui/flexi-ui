'use client'

import { ColorSwatchPicker } from '@flexi-ui/color-swatch-picker'
import type { Color } from 'react-aria-components'
import { parseColor } from 'react-aria-components'
import { useState } from 'react'

const palette = ['#761ae8', '#17c964', '#f5a524', '#f31260']

export default function Demo() {
  const [value, setValue] = useState<Color>(parseColor(palette[0]))

  return (
    <div className="flex flex-col gap-3">
      <ColorSwatchPicker value={value} onChange={setValue}>
        {palette.map((color) => (
          <ColorSwatchPicker.Item key={color} color={color} />
        ))}
      </ColorSwatchPicker>
      <p className="text-xs text-muted-foreground">
        Selected: <code>{value.toString('hex')}</code>
      </p>
    </div>
  )
}
