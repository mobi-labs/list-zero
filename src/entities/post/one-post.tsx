import {ChatOutlined, FavoriteBorderOutlined} from "@mui/icons-material";
import Image from "next/image";

import {cn} from "@/share/libs";
import {Divider, Tag} from "@/share/ui";
import {PostType} from "@/types";

type Props = {
    post: PostType
    isDivider: boolean
    isReverse?: boolean
}

export function OnePost({post, isDivider, isReverse = false}: Props) {
    const {title, subTitle, tags, like_count, comment_count, img_url} = post

    const reverseItem = img_url && isReverse

    return <li className="flex w-full flex-col justify-center gap-[18px] items-start">
        <div className={cn("w-full flex justify-between", {"flex-row-reverse": reverseItem})}>
            <div className={cn("flex gap-[10px] flex-col", {"items-end": reverseItem})}>
                <div className="flex gap-1">
                    {tags.map(tag => <Tag key={tag.id} rectangle={"square"} level={tag.level} name={tag.name}/>)}
                </div>
                <div
                    className="overflow-hidden text-ellipsis font-pretendard font-bold leading-[120%] text-text-primary">
                    {title}
                </div>
                <div
                    className="overflow-hidden text-text-paragraph02 text-ellipsis text-[14px] font-pretendard font-bold leading-[120%]">
                    {subTitle}
                </div>
                <div className="text-text-secondary flex gap-[12px]">
                    <div className="flex items-center gap-[2px]"><FavoriteBorderOutlined
                        sx={{width: "20px", height: "20px"}}/>{like_count}</div>
                    <div className="flex items-center gap-[2px]"><ChatOutlined
                        sx={{width: "20px", height: "20px"}}/>{comment_count}</div>
                </div>
            </div>
            {
                img_url &&
                <div className="w-[80px] h-[80px] rounded-[10px] mx-0 my-auto overflow-hidden">
                    <Image src={img_url} alt={"포스트 이미지"} width={80} height={80}/>
                </div>
            }
        </div>
        {isDivider && <Divider thickness={"default"} width={"full"}/>}
    </li>
}
