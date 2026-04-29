'use client'

import { ComboBox } from '@flexi-ui/combo-box'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <ComboBox label="Country" defaultInputValue="">
        <ComboBox.Popover>
          <ComboBox.Listbox>
            <ComboBox.Option id="us">United States</ComboBox.Option>
            <ComboBox.Option id="ca">Canada</ComboBox.Option>
            <ComboBox.Option id="uk">United Kingdom</ComboBox.Option>
            <ComboBox.Option id="de">Germany</ComboBox.Option>
            <ComboBox.Option id="jp">Japan</ComboBox.Option>
          </ComboBox.Listbox>
        </ComboBox.Popover>
      </ComboBox>
    </div>
  )
}
