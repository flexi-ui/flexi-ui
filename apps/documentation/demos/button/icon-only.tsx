'use client'

import { Button } from '@flexi-ui/button'

export default function Demo() {
  return (
    <div className="flex gap-2">
      <Button isIconOnly aria-label="Search" variant="flat">
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </Button>
      <Button isIconOnly aria-label="Add" variant="primary">
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Button>
      <Button isIconOnly aria-label="Close" variant="bordered">
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </Button>
    </div>
  )
}
