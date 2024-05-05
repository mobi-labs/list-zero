import {OnePost} from "@/entities/post";
import {generatePost} from "@/share/mock/generate-post";

export function PostList() {

    const mockPost = generatePost(5)
    return <div className="flex justify-center py-[18px]">
        <ul className="flex w-[353px] flex-col justify-center items-start gap-[18px]">
            {mockPost.map((post,index) => <OnePost key={post.postId} post={post} isDivider={ index !== mockPost.length -1}/>)}
        </ul>
    </div>
}
