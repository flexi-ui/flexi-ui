'use client'

import { Ripple, useRipple } from '@flexi-ui/ripple'

export default function Demo() {
  const { ripples, onPress, onClear } = useRipple()

  return (
    <button
      type="button"
      className="relative inline-flex h-10 items-center overflow-hidden rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity active:opacity-90"
      onClick={(event) => {
        const target = event.currentTarget
        const rect = target.getBoundingClientRect()
        onPress({
          target,
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }}
    >
      Click for ripple
      <Ripple color="rgba(255, 255, 255, 0.4)" ripples={ripples} onClear={onClear} />
    </button>
  )
}
