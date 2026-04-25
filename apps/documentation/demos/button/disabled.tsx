'use client'

import { Button } from '@flexi-ui/button'

export default function Demo() {
  return (
    <div className="flex gap-3">
      <Button isDisabled>Disabled</Button>
      <Button isDisabled variant="bordered">
        Disabled
      </Button>
      <Button isDisabled variant="flat">
        Disabled
      </Button>
    </div>
  )
}
