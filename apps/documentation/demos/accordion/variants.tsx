'use client'

import { Accordion } from '@flexi-ui/accordion'

const items = [
  { id: 'one', title: 'First section', body: 'First section body.' },
  { id: 'two', title: 'Second section', body: 'Second section body.' },
  { id: 'three', title: 'Third section', body: 'Third section body.' },
]

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Accordion variant="default">
        {items.map((item) => (
          <Accordion.Item key={item.id} id={`d-${item.id}`}>
            <Accordion.Trigger>{`Default — ${item.title}`}</Accordion.Trigger>
            <Accordion.Panel>{item.body}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Accordion variant="bordered">
        {items.map((item) => (
          <Accordion.Item key={item.id} id={`b-${item.id}`}>
            <Accordion.Trigger>{`Bordered — ${item.title}`}</Accordion.Trigger>
            <Accordion.Panel>{item.body}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Accordion variant="splitted">
        {items.map((item) => (
          <Accordion.Item key={item.id} id={`s-${item.id}`}>
            <Accordion.Trigger>{`Splitted — ${item.title}`}</Accordion.Trigger>
            <Accordion.Panel>{item.body}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}
