import { Button } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import { AppBar } from '@/widget/layout/app-bar'

const meta = {
  title: 'widget/layout/app-bar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['default', 'home', 'chat'],
      control: { type: 'select' },
      description: '사용되는 페이지의 타입을 보여줍니다.',
    },
    title: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: '현재 페이지의 이름 혹은 채팅방의 이름을 가리킵니다.',
    },
    icon: {
      type: { name: 'number' },
      options: [0, 1, 2],
      control: { type: 'select' },
      description: '표시할 아이콘의 갯수를 가리킵니다.',
    },
    count: {
      type: { name: 'number' },
      control: { type: 'number' },
      description: '채팅방의 수를 나타냅니다.',
    },
    line: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      description: '하단에 구분선을 표시할지 결정합니다.',
    },
    textButton: {
      control: { type: 'boolean' },
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof AppBar>

export default meta

export const Default: StoryObj<typeof AppBar> = {
  args: {
    title: '메인 리스트',
    icon: 2,
    type: 'default',
  },
}

export const TextButton: StoryObj<typeof AppBar> = {
  args: {
    title: '메인 리스트',
    icon: 2,
    type: 'default',
    textButton: (
      <Button color="primary" variant="text">
        텍스트
      </Button>
    ),
  },
}

export const Home: StoryObj<typeof AppBar> = {
  args: {
    type: 'home',
  },
}

export const Chat: StoryObj<typeof AppBar> = {
  args: {
    title: '채팅창 이름',
    type: 'chat',
  },
}
