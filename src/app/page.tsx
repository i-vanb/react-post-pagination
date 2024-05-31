import axios from "axios";
import {Posts} from "@/app/post/Posts";

export default async function page() {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

  return (
    <main>
      <Posts list={posts.data} />
    </main>
  );
}
