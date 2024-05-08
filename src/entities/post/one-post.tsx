import {ChatOutlined, FavoriteBorderOutlined} from "@mui/icons-material";

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
                    className="overflow-hidden text-ellipsis text-text-primary text-subtitle2">
                    {title}
                </div>
                <div
                    className="overflow-hidden text-text-paragraph02 text-ellipsis text-caption2">
                    {subTitle}
                </div>
                <div className="text-text-secondary flex gap-[12px]">
                    <div className="flex items-center">
                        <FavoriteBorderOutlined className="w-5 h-5"/>
                        <div className="w-[18px] h-[18px] flex items-center justify-center">{like_count}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center gap-[2px]">
                            <ChatOutlined className="w-5 h-5"/>
                            <div className="w-[18px] h-[18px] flex items-center justify-center">{comment_count}</div>
                        </div>
                    </div>
                </div>
            </div>
            {
                img_url && <div className="flex items-center">
                    <div className="bg-grey-scale-3 rounded-[10px] w-20 h-20"/>
                </div>
            }
        </div>
        {isDivider && <Divider thickness={"default"} width={"full"}/>}
    </li>
}
