"use client"

import {cva, VariantProps} from "class-variance-authority";

import {cn} from "@/share/libs";
import {TagType} from "@/types";

const TagVariants = cva("font-pretendard leading-[120%] text-[12px] inline-flex justify-center items-center  px-[6px] py-[3px]",
    {
        variants: {
            level: {
                "level-0": "text-text-paragraph02 bg-grey-scale-grey-02",
                "level-1": "bg-red-red-01 text-red-red-05",
                "level-2": "bg-green-green-02 text-green-green-07",
                "level-3": "bg-blue-blue-01 text-blue-blue-06",
                "level-4": "text-text-paragraph01 bg-grey-scale-white border-[1px] border-solid border-[#E5E5E5]"
            },
            rectangle: {
                circle: "rounded-[50px]",
                square: "rounded-[2px]"
            }
        },
        defaultVariants: {
            level: "level-0",
            rectangle: "circle"
        }
    })

type Props = Omit<TagType, "id"> & VariantProps<typeof TagVariants>

export function Tag({name, rectangle, level, ...props}: Props) {
    return <div className={cn(TagVariants({rectangle, level}))} {...props}>
        {name}
    </div>
}
