'use client'

import { Button } from '@flexi-ui/button'
import { Form } from '@flexi-ui/form'
import { Input } from '@flexi-ui/input'

export default function Demo() {
  return (
    <Form
      className="flex w-full max-w-sm flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        alert('Valid — submitted')
      }}
    >
      <Input label="Email" name="email" type="email" isRequired />
      <Input
        description="4 digits"
        isRequired
        label="PIN"
        name="pin"
        pattern="[0-9]{4}"
        type="text"
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
