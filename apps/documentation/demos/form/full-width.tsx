'use client'

import { Button } from '@flexi-ui/button'
import { Form } from '@flexi-ui/form'
import { Input, TextArea } from '@flexi-ui/input'

export default function Demo() {
  return (
    <Form
      fullWidth
      className="flex w-full max-w-md flex-col gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input label="Subject" name="subject" />
      <TextArea label="Message" name="message" rows={4} />
      <Button type="submit">Send</Button>
    </Form>
  )
}
