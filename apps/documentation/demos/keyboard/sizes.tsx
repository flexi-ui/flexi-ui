'use client'

import { Keyboard } from '@flexi-ui/keyboard'

export default function Demo() {
  return (
    <div className="flex items-center gap-3">
      <Keyboard size="sm">⌘ K</Keyboard>
      <Keyboard size="md">⌘ K</Keyboard>
      <Keyboard size="lg">⌘ K</Keyboard>
    </div>
  )
}
