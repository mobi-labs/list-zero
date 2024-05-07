import {OnePost} from "@/entities/post";
import {PostType} from "@/types";

type Props = {
    postList: PostType[]
}

export function PostList({postList}: Props) {
    return <div className="flex justify-center py-[18px]">
        <ul className="flex w-[353px] flex-col justify-center items-start gap-[18px]">
            {postList.map((post, index) => <OnePost key={post.postId} post={post} isReverse={Math.random() * 10 > 5}
                                                    isDivider={index !== postList.length - 1}/>)}
        </ul>
    </div>
}
