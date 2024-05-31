import {PostItem} from "@/components/post/post.item";
import {Post} from "@/components/post/post.type";

type Props = {
  list: Post[];
  setPage: (page: number) => void
}

export const PostList = (props: Props) => {
  const {list} = props;

  return (
      <div className="grid gap-6 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {list.map((post:Post)=>{
          return <PostItem key={post.id} {...post} />})}
      </div>
  )
}

