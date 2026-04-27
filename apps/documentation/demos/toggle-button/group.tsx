'use client'

import { ToggleButton } from '@flexi-ui/toggle-button'

export default function Demo() {
  return (
    <ToggleButton.Group defaultSelectedKeys={['left']} selectionMode="single">
      <ToggleButton id="left">Left</ToggleButton>
      <ToggleButton id="center">Center</ToggleButton>
      <ToggleButton id="right">Right</ToggleButton>
    </ToggleButton.Group>
  )
}
