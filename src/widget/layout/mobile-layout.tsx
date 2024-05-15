import { PropsWithChildren } from 'react'

import { AppBar } from '@/widget/layout/app-bar'
import { AppleStatusBar } from '@/widget/layout/apple-status-bar'

export function MobileLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-[852px] w-[393px]">
      <div className="border-grey-scale-grey-05 h-full w-full border-[1px] border-solid">
        <AppleStatusBar />
        <AppBar line icon={2} title={'포스트 리스트'} />
        {children}
      </div>
    </div>
  )
}
