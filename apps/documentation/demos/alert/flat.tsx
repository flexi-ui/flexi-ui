'use client'

import { Alert } from '@flexi-ui/alert'

export default function Demo() {
  return (
    <Alert isFlat variant="warning">
      <Alert.Content>
        <Alert.Title>Storage is getting full</Alert.Title>
        <Alert.Description>Free up space before continuing.</Alert.Description>
      </Alert.Content>
    </Alert>
  )
}
