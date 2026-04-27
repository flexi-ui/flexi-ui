'use client'

import { Button } from '@flexi-ui/button'
import { Popover } from '@flexi-ui/popover'

export default function Demo() {
  return (
    <Popover>
      <Button variant="bordered">With arrow</Button>
      <Popover.Content showArrow>
        <div className="flex flex-col gap-2 p-4">
          <p className="text-sm font-semibold">Anchored popover</p>
          <p className="text-xs text-muted-foreground">
            The arrow points back at the trigger.
          </p>
        </div>
      </Popover.Content>
    </Popover>
  )
}
