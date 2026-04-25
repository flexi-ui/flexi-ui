'use client'

import { Alert } from '@flexi-ui/alert'

export default function Demo() {
  return (
    <Alert variant="accent">
      <Alert.Icon>
        <svg
          fill="none"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="20"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      </Alert.Icon>
      <Alert.Content>
        <Alert.Title>New update available</Alert.Title>
        <Alert.Description>Reload the page to pick it up.</Alert.Description>
      </Alert.Content>
    </Alert>
  )
}
