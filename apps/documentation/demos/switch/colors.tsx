'use client'

import { Switch } from '@flexi-ui/switch'

export default function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Switch defaultSelected color="accent">
        Accent
      </Switch>
      <Switch defaultSelected color="success">
        Success
      </Switch>
      <Switch defaultSelected color="warning">
        Warning
      </Switch>
      <Switch defaultSelected color="danger">
        Danger
      </Switch>
    </div>
  )
}
