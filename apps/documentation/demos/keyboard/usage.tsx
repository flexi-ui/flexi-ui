'use client'

import { Keyboard } from '@flexi-ui/keyboard'

export default function Demo() {
  return (
    <p className="text-sm text-muted-foreground">
      Save the current page with{' '}
      <Keyboard>⌘</Keyboard>
      <Keyboard>S</Keyboard>.
    </p>
  )
}
