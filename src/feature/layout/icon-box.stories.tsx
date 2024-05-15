import type { Meta, StoryObj } from '@storybook/react'

import { IconBox } from '@/feature/layout/icon-box'

const meta = {
  title: 'feature/layout/icon-box',
  component: IconBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconBox>

export default meta

export const Default: StoryObj<typeof IconBox> = {
  args: {
    type: 'default',
    icon: 2,
  },
}
