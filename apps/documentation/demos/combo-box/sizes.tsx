'use client'

import { ComboBox } from '@flexi-ui/combo-box'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ComboBox key={size} label={size.toUpperCase()} size={size}>
          <ComboBox.Popover>
            <ComboBox.Listbox>
              <ComboBox.Option id="apple">Apple</ComboBox.Option>
              <ComboBox.Option id="banana">Banana</ComboBox.Option>
              <ComboBox.Option id="cherry">Cherry</ComboBox.Option>
            </ComboBox.Listbox>
          </ComboBox.Popover>
        </ComboBox>
      ))}
    </div>
  )
}
