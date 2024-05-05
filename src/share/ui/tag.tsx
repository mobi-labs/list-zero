"use client"

import {useMemo} from "react";

import {cn} from "@/share/libs";
import {TagType} from "@/types";

type Props = Omit<TagType, "id"> & {
    isRounded?: boolean
}

export function Tag({name, level, isRounded = false}: Props) {
    const tagClassName = useMemo(() => {
        switch (level) {
            case "level-0":
                return "text-text-paragraph02 bg-grey-scale-grey-02"
            case "level-1":
                return "bg-red-red-01 text-red-red-05"
            case "level-2":
                return "bg-green-green-02 text-green-green-07"
            case "level-3":
                return "bg-blue-blue-01 text-blue-blue-06"
            case "level-4":
                return "text-text-paragraph01 bg-grey-scale-white border-[1px] border-solid border-[#E5E5E5]"
        }
    }, [level])

    return <div className={cn(tagClassName, isRounded ? "rounded-[50px]": "rounded-[2px]", "font-pretendard leading-[120%] text-[12px] inline-flex justify-center items-center  px-[6px] py-[3px]")}>
        {name}
    </div>
}
