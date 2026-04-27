'use client'

import { Select } from '@flexi-ui/select'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <Select defaultSelectedKey="sf">
        <Select.Trigger />
        <Select.Popover>
          <Select.Listbox>
            <Select.Option id="sf">San Francisco</Select.Option>
            <Select.Option id="ny">New York</Select.Option>
            <Select.Option id="ldn">London</Select.Option>
            <Select.Option id="tokyo">Tokyo</Select.Option>
          </Select.Listbox>
        </Select.Popover>
      </Select>
    </div>
  )
}
