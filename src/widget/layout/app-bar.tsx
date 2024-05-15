import Image from 'next/image'
import { ComponentProps, ReactNode } from 'react'

import { cn } from '@/share/libs'
import { Logo } from '@/share/ui/logo'
import { IconBox } from '@/widget/layout/icon-box'

type Props = {
  title: string
  count: number
  textButton?: ReactNode
  line: boolean
} & ComponentProps<typeof IconBox>

export function AppBar({
  title = '',
  textButton,
  line = false,
  count = 0,
  icon = 0,
  type = 'default',
}: Partial<Props>) {
  return (
    <div
      className={cn('relative flex h-[56px] items-center justify-between px-5 py-[14px]', { 'border-b-[1px]': line })}
    >
      {type === 'default' && (
        <>
          <div className="relative flex h-6 w-6 items-center justify-center">
            <Image width={11} height={20} src="/svg/arrow-left.svg" alt="뒤로가기 아이콘" />
          </div>
          <div className="absolute left-1/2 translate-x-[-50%] text-center text-body2 text-gray-scale-9">{title}</div>
          {textButton ? textButton : <IconBox type={type} icon={icon} />}
        </>
      )}
      {type === 'home' && (
        <>
          <Logo />
          <IconBox type={type} icon={icon} />
        </>
      )}
      {type === 'chat' && (
        <>
          <div className="flex items-center gap-2">
            <div className="relative flex h-6 w-6 items-center justify-center">
              <Image width={11} height={20} src="/svg/arrow-left.svg" alt="뒤로가기 아이콘" />
            </div>
            <span className="text-center text-body4">{title}</span>
            {!!count && <span className="text-caption2 text-text-secondary">{count}</span>}
          </div>
          <IconBox type={type} icon={icon} />
        </>
      )}
    </div>
  )
}
