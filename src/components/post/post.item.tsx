import Link from "next/link";
import {Post} from "@/components/post/post.type";

export const PostItem = (props:Post) => {
  return (
    <Link href={`/post/${props.id}`} className="bg-white shadow-full rounded-lg p-4 hover:shadow-cyan-100 transition">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <p>{props.body}</p>
    </Link>
  )
}