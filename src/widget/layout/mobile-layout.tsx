import {PropsWithChildren} from "react";

import {AppBar} from "@/widget/layout/app-bar";
import {AppleStatus} from "@/widget/layout/apple-status";

export function MobileLayout({children}: PropsWithChildren) {
    return <div className="w-[393px] h-[852px]">
        <div className="w-full h-full border-[1px] border-grey-scale-grey-05 border-solid">
            <AppleStatus/>
            <AppBar line icon={2} title={"포스트 리스트"}/>
            {children}
        </div>
    </div>
}
