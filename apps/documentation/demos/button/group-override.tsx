'use client'

import { Button, ButtonGroup } from '@flexi-ui/button'

export default function Demo() {
  return (
    <ButtonGroup variant="bordered">
      <Button>Day</Button>
      <Button variant="primary">Week</Button>
      <Button>Month</Button>
    </ButtonGroup>
  )
}
