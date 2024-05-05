import Image from "next/image";
import {PropsWithChildren} from "react";

type Props = {
    title: string
    isHistory?: boolean
}

export function AppTitle({isHistory, title}: PropsWithChildren<Props>) {
    return <div className="px-5 py-[14px] font-pretendard flex border-t-0 border-b border-[1px]">
        {isHistory &&
            <div className="absolute">
                <div className="relative w-[11px] h-[20px]"><Image src={'/svg/chevron-left.svg'} alt="왼쪽 화살표" fill/>
                </div>
            </div>
        }
        <div className="text-[18px] leading-[120%] w-full text-center">{title}</div>
    </div>
}
