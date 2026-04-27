'use client'

import { ToggleButton } from '@flexi-ui/toggle-button'

export default function Demo() {
  return (
    <ToggleButton.Group defaultSelectedKeys={['bold', 'italic']} selectionMode="multiple">
      <ToggleButton id="bold">B</ToggleButton>
      <ToggleButton id="italic">I</ToggleButton>
      <ToggleButton id="underline">U</ToggleButton>
      <ToggleButton id="strike">S</ToggleButton>
    </ToggleButton.Group>
  )
}
