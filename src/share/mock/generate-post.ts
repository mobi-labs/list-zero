import {PostType, TagType} from "@/types";

export function generatePost(count: number): PostType[] {
    return Array(count).fill('').map((_, i) => {
        return {
            postId: i,
            title: `mock-post-${i}`,
            subTitle: `mock-post-${i}`,
            tags: Array(Math.floor(Math.random() * 5)).fill('').map((_, i) => {
                return {id: i, name: `test-${i}`, level: `level-${Math.floor(Math.random() * 5)}` as TagType["level"]}
            }),
            comment_count: Math.floor(Math.random() * 10),
            like_count: Math.floor(Math.random() * 10),
            img_url: Math.floor(Math.random() * 10) > 3 ? "https://source.unsplash.com/random/?cat" : undefined
        }
    })
}
