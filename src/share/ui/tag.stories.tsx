import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './tag'

const meta = {
  title: 'share/ui/tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    level: {
      description: '테마를 level로 구분합니다. level에 따라 다른 색상을 나타냅니다.',
      options: ['level-0', 'level-1', 'level-2', 'level-3', 'level-4'],
      control: { type: 'select' },
    },
    name: {
      description: '태그안에 문구를 나타냅니다.',
      control: { type: 'text' },
    },
    rectangle: {
      description: '태그의 형태 (ex: 원, 사각형)를 나타냅니다. 기본적으로 둥근 형태를 나타냅니다.',
      options: ['rectangle', 'square'],
      type: 'string',
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Tag>

export default meta

export const Default: StoryObj<typeof Tag> = {
  args: {
    level: 'level-0',
    name: '동해물과',
  },
}
