import {PropsWithChildren} from "react";

import {AppTitle} from "@/widget/layout/app-title";
import {AppleStatus} from "@/widget/layout/apple-status";

export function MobileLayout({children}: PropsWithChildren) {
    return <div className="w-[393px] h-[852px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="w-full h-full border-[1px] border-grey-scale-grey-05 border-solid">
            <AppleStatus/>
            <AppTitle title={"포스트 리스트"} isHistory/>
            {children}
        </div>
    </div>
}
