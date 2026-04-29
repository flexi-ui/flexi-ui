'use client'

import { ToggleButton } from '@flexi-ui/toggle-button'

export default function Demo() {
  return (
    <div className="flex items-center gap-3">
      <ToggleButton size="sm">Small</ToggleButton>
      <ToggleButton size="md">Medium</ToggleButton>
      <ToggleButton size="lg">Large</ToggleButton>
    </div>
  )
}
