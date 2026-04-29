'use client'

import { Button } from '@flexi-ui/button'
import { Keyboard } from '@flexi-ui/keyboard'

export default function Demo() {
  return (
    <Button variant="bordered">
      Search
      <span className="ml-2 inline-flex items-center gap-1">
        <Keyboard size="sm">⌘</Keyboard>
        <Keyboard size="sm">K</Keyboard>
      </span>
    </Button>
  )
}
