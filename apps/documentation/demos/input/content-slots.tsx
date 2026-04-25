'use client'

import { Input } from '@flexi-ui/input'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Input
        label="Search"
        placeholder="Search repositories"
        startContent={
          <svg
            fill="none"
            height="16"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="16"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        }
      />
      <Input
        endContent={<span className="text-xs text-muted-foreground">.com</span>}
        label="Website"
        placeholder="example.com"
        startContent={<span className="text-sm text-muted-foreground">https://</span>}
      />
    </div>
  )
}
