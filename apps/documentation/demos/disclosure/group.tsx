'use client'

import { Disclosure } from '@flexi-ui/disclosure'

export default function Demo() {
  return (
    <Disclosure.Group className="w-full max-w-md">
      <Disclosure id="overview">
        <Disclosure.Trigger>Overview</Disclosure.Trigger>
        <Disclosure.Panel>Project summary, key metrics, recent activity.</Disclosure.Panel>
      </Disclosure>
      <Disclosure id="settings">
        <Disclosure.Trigger>Settings</Disclosure.Trigger>
        <Disclosure.Panel>Preferences, integrations, security.</Disclosure.Panel>
      </Disclosure>
    </Disclosure.Group>
  )
}
