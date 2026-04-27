'use client'

import { Switch } from '@flexi-ui/switch'

export default function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Switch isDisabled>Disabled (off)</Switch>
      <Switch isDisabled defaultSelected>
        Disabled (on)
      </Switch>
    </div>
  )
}
