'use client'

import { Disclosure } from '@flexi-ui/disclosure'

export default function Demo() {
  return (
    <Disclosure className="w-full max-w-md">
      <Disclosure.Trigger>What's a disclosure?</Disclosure.Trigger>
      <Disclosure.Panel>
        A single expandable region. For lists of expandable sections, use{' '}
        <code>Accordion</code> or <code>Disclosure.Group</code>.
      </Disclosure.Panel>
    </Disclosure>
  )
}
