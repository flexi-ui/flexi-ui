'use client'

import { Select } from '@flexi-ui/select'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Select key={size} defaultSelectedKey="one" size={size}>
          <Select.Trigger />
          <Select.Popover>
            <Select.Listbox>
              <Select.Option id="one">Option one</Select.Option>
              <Select.Option id="two">Option two</Select.Option>
              <Select.Option id="three">Option three</Select.Option>
            </Select.Listbox>
          </Select.Popover>
        </Select>
      ))}
    </div>
  )
}
