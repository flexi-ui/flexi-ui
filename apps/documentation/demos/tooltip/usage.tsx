'use client'

import { Button } from '@flexi-ui/button'
import { Tooltip } from '@flexi-ui/tooltip'

export default function Demo() {
  return (
    <Tooltip>
      <Button variant="bordered">Hover me</Button>
      <Tooltip.Content>Saves the current draft.</Tooltip.Content>
    </Tooltip>
  )
}
