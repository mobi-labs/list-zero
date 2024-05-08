import {generatePost} from "@/share/mock/generate-post";
import {PostList} from "@/widget/post";

const mockPostList = generatePost(5)

export function Post() {
    return <section>
        <PostList postList={mockPostList}/>
    </section>
}
