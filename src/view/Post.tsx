import {AppTitle} from "@/widget/layout";
import {PostList} from "@/widget/post";

export function Post() {
    return <section>
        <AppTitle title={"페이지 타이틀"} isHistory/>
        <PostList/>
    </section>
}
