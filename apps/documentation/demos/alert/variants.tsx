'use client'

import { Alert } from '@flexi-ui/alert'

export default function Demo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert variant="default">
        <Alert.Content>
          <Alert.Title>Default</Alert.Title>
          <Alert.Description>Neutral informational message.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="accent">
        <Alert.Content>
          <Alert.Title>Accent</Alert.Title>
          <Alert.Description>Brand-colored callout.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="success">
        <Alert.Content>
          <Alert.Title>Success</Alert.Title>
          <Alert.Description>The change was saved.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="warning">
        <Alert.Content>
          <Alert.Title>Warning</Alert.Title>
          <Alert.Description>This action can&apos;t be undone.</Alert.Description>
        </Alert.Content>
      </Alert>
      <Alert variant="danger">
        <Alert.Content>
          <Alert.Title>Danger</Alert.Title>
          <Alert.Description>Your card was declined.</Alert.Description>
        </Alert.Content>
      </Alert>
    </div>
  )
}
