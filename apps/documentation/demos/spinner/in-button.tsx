'use client'

import { Button } from '@flexi-ui/button'
import { Spinner } from '@flexi-ui/spinner'

export default function Demo() {
  return (
    <div className="flex gap-3">
      <Button isDisabled variant="primary">
        <Spinner color="current" size="sm" /> Saving…
      </Button>
      <Button isDisabled variant="bordered">
        <Spinner color="current" size="sm" /> Retrying
      </Button>
    </div>
  )
}
