'use client'

import { Button } from '@flexi-ui/button'
import { Toolbar } from '@flexi-ui/toolbar'

export default function Demo() {
  return (
    <Toolbar aria-label="Vertical actions" orientation="vertical">
      <Button variant="bordered">Edit</Button>
      <Button variant="bordered">Duplicate</Button>
      <Toolbar.Separator />
      <Button variant="bordered">Delete</Button>
    </Toolbar>
  )
}
