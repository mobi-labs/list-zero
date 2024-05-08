import Image from "next/image";
import {ComponentProps, ReactNode} from "react";

import {IconBox} from "@/feature/layout";
import {cn} from "@/share/libs";
import {Logo} from "@/widget/layout/logo";


type Props = {
    title: string
    count: number
    textButton?: ReactNode
    line: boolean
} & ComponentProps<typeof IconBox>

export function AppBar({
                           title = "",
                           textButton,
                           line = false,
                           count = 0,
                           icon = 0,
                           type = "default"
                       }: Partial<Props>) {
    return <div
        className={cn("relative h-[56px] justify-between items-center px-5 py-[14px] flex", {"border-b-[1px]": line})}>
        {
            type === "default" && <>
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <Image width={11} height={20} src="/svg/arrow-left.svg" alt="뒤로가기 아이콘"/>
                </div>
                <div className="absolute text-body2 left-1/2 translate-x-[-50%] text-center text-gray-scale-9">
                    {title}
                </div>
                {textButton ? textButton : <IconBox type={type} icon={icon}/>}
            </>
        }
        {
            type === "home" && <>
                <Logo/>
                <IconBox type={type} icon={icon}/>
            </>}
        {
            type === "chat" && <>
                <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <Image width={11} height={20} src="/svg/arrow-left.svg" alt="뒤로가기 아이콘"/>
                    </div>
                    <span className="text-body4 text-center">{title}</span>
                    {!!count && <span className="text-caption2 text-text-secondary">{count}</span>}
                </div>
                <IconBox type={type} icon={icon}/>
            </>
        }
    </div>
}
