'use client'

import { Select } from '@flexi-ui/select'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <Select defaultSelectedKey="standard">
        <Select.Trigger />
        <Select.Popover>
          <Select.Listbox>
            <Select.Option id="standard">Standard</Select.Option>
            <Select.Option id="pro">Pro</Select.Option>
            <Select.Option id="enterprise" isDisabled>
              Enterprise (contact sales)
            </Select.Option>
          </Select.Listbox>
        </Select.Popover>
      </Select>
    </div>
  )
}
