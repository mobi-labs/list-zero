import { PropsShouldWithChildren } from '@/share/types'

export function MobileLayout({ children }: PropsShouldWithChildren) {
  return (
    <div className="h-[852px] w-[393px]">
      <div className="border-grey-scale-grey-05 h-full w-full border-[1px] border-solid">{children}</div>
    </div>
  )
}
