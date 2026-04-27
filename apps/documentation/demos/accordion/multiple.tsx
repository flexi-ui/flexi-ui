'use client'

import { Accordion } from '@flexi-ui/accordion'

export default function Demo() {
  return (
    <Accordion
      allowsMultipleExpanded
      className="w-full max-w-md"
      defaultExpandedKeys={['one', 'two']}
      variant="bordered"
    >
      <Accordion.Item id="one">
        <Accordion.Trigger>Open multiple panels</Accordion.Trigger>
        <Accordion.Panel>
          Pass <code>allowsMultipleExpanded</code> to keep more than one panel open.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="two">
        <Accordion.Trigger>At the same time</Accordion.Trigger>
        <Accordion.Panel>
          Useful for FAQs, dense settings, or any list of long-lived sections.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="three">
        <Accordion.Trigger>Tap any header to toggle</Accordion.Trigger>
        <Accordion.Panel>Each item is independent.</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
