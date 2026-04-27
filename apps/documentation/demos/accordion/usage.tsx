'use client'

import { Accordion } from '@flexi-ui/accordion'

export default function Demo() {
  return (
    <Accordion className="w-full max-w-md" defaultExpandedKeys={['shipping']}>
      <Accordion.Item id="shipping">
        <Accordion.Trigger>Shipping</Accordion.Trigger>
        <Accordion.Panel>
          Standard delivery in 3–5 business days. Express options at checkout.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="returns">
        <Accordion.Trigger>Returns</Accordion.Trigger>
        <Accordion.Panel>
          Free 30-day returns on unworn items. Refunds issued within 7 days.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="support">
        <Accordion.Trigger>Support</Accordion.Trigger>
        <Accordion.Panel>
          Reach our team 24/7 via chat or email at support@example.com.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}
