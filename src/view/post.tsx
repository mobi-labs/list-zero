import {PostType} from "@/types";
import {PostList} from "@/widget/post";

type Props = {
    postList: PostType[]
}

export function Post({postList}: Props) {
    return <section>
        <PostList postList={postList}/>
    </section>
}
