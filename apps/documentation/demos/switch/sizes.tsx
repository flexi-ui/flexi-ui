'use client'

import { Switch } from '@flexi-ui/switch'

export default function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Switch size="sm">Small</Switch>
      <Switch size="md">Medium</Switch>
      <Switch size="lg">Large</Switch>
    </div>
  )
}
