'use client'

import { Button } from '@flexi-ui/button'
import { VisuallyHidden } from '@flexi-ui/visually-hidden'

export default function Demo() {
  return (
    <Button isIconOnly variant="bordered">
      <span aria-hidden>×</span>
      <VisuallyHidden>Close dialog</VisuallyHidden>
    </Button>
  )
}
