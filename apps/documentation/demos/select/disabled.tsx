'use client'

import { Select } from '@flexi-ui/select'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <Select isDisabled defaultSelectedKey="locked">
        <Select.Trigger />
        <Select.Popover>
          <Select.Listbox>
            <Select.Option id="locked">Locked</Select.Option>
          </Select.Listbox>
        </Select.Popover>
      </Select>
    </div>
  )
}
