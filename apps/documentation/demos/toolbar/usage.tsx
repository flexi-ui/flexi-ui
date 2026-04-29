'use client'

import { Button } from '@flexi-ui/button'
import { Toolbar } from '@flexi-ui/toolbar'

export default function Demo() {
  return (
    <Toolbar aria-label="Text formatting">
      <Toolbar.Group aria-label="Style">
        <Button variant="bordered">Bold</Button>
        <Button variant="bordered">Italic</Button>
        <Button variant="bordered">Underline</Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group aria-label="Align">
        <Button variant="bordered">Left</Button>
        <Button variant="bordered">Center</Button>
        <Button variant="bordered">Right</Button>
      </Toolbar.Group>
    </Toolbar>
  )
}
