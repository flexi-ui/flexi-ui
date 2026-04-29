'use client'

import { ColorWheel } from '@flexi-ui/color-wheel'

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <ColorWheel defaultValue="hsl(180, 100%, 50%)" size="sm" />
      <ColorWheel defaultValue="hsl(180, 100%, 50%)" size="md" />
      <ColorWheel defaultValue="hsl(180, 100%, 50%)" size="lg" />
    </div>
  )
}
