'use client'

import { Button } from '@flexi-ui/button'
import { Tooltip } from '@flexi-ui/tooltip'

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip>
        <Button variant="bordered">Top</Button>
        <Tooltip.Content placement="top">Shown above</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Button variant="bordered">Right</Button>
        <Tooltip.Content placement="right">Shown to the right</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Button variant="bordered">Bottom</Button>
        <Tooltip.Content placement="bottom">Shown below</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Button variant="bordered">Left</Button>
        <Tooltip.Content placement="left">Shown to the left</Tooltip.Content>
      </Tooltip>
    </div>
  )
}
