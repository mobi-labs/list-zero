export type TagType = {
    id: number
    name: string
    level: "level-0" | "level-1" | "level-2" | "level-3" | "level-4"
}
export type PostType = {
    postId: number,
    tags: TagType[]
    title: string
    subTitle: string
    like_count: number
    comment_count: number
    img_url?: string
}
