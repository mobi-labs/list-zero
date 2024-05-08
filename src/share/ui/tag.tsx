"use client"

import {cva, VariantProps} from "class-variance-authority";

import {cn} from "@/share/libs";
import {TagType} from "@/types";

const TagVariants = cva("font-pretendard leading-[120%] text-[12px] inline-flex justify-center items-center px-[6px] py-[3px]",
    {
        variants: {
            level: {
                "level-0": "text-paragraph2 bg-gray-scale-2",
                "level-1": "bg-red-1 text-red-5",
                "level-2": "bg-green-2 text-green-7",
                "level-3": "bg-blue-1 text-blue-6",
                "level-4": "text-paragraph1 bg-gray-scale-white border-[1px] border-solid border-[#E5E5E5]"
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

type Props = Pick<TagType, "name"> & VariantProps<typeof TagVariants>

export function Tag({name, rectangle, level, ...props}: Props) {
    return <div className={cn(TagVariants({rectangle, level}))} {...props}>
        {name}
    </div>
}
