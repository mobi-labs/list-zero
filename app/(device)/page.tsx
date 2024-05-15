import { generatePost } from '@/share/mock/generate-post'
import { Post } from '@/view'

export const metadata = {
  title: 'App Router',
}

const mockList = generatePost(5)

export default function Page() {
  return <Post postList={mockList} />
}
