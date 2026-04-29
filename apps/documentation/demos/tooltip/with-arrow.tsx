'use client'

import { Button } from '@flexi-ui/button'
import { Tooltip } from '@flexi-ui/tooltip'

export default function Demo() {
  return (
    <Tooltip>
      <Button variant="bordered">With arrow</Button>
      <Tooltip.Content showArrow>Pointing at the trigger.</Tooltip.Content>
    </Tooltip>
  )
}
