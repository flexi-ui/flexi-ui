'use client'

import { ComboBox } from '@flexi-ui/combo-box'

export default function Demo() {
  return (
    <div className="w-full max-w-xs">
      <ComboBox isDisabled defaultInputValue="Locked" label="Plan">
        <ComboBox.Popover>
          <ComboBox.Listbox>
            <ComboBox.Option id="locked">Locked</ComboBox.Option>
          </ComboBox.Listbox>
        </ComboBox.Popover>
      </ComboBox>
    </div>
  )
}
