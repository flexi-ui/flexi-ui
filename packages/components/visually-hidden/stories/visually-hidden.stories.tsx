import type { Meta, StoryObj } from '@storybook/react'

import { VisuallyHidden } from '../src/main'

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
}

export default meta
type Story = StoryObj<typeof VisuallyHidden>

export const Default: Story = {
  render: () => (
    <button type="button" className="rounded border px-3 py-1">
      <span aria-hidden>×</span>
      <VisuallyHidden>Close dialog</VisuallyHidden>
    </button>
  ),
}

export const WithHeading: Story = {
  render: () => (
    <section>
      <VisuallyHidden elementType="h2">Page summary</VisuallyHidden>
      <p>The quick brown fox jumps over the lazy dog.</p>
    </section>
  ),
}
