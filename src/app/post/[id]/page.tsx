import axios from "axios";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  }
}

export default async function Post({params:{id}}:Props) {
  const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.data.userId}`);

  return (
    <main className="space-y-4">
      <div>
        <Link className="text-sm text-blue-500" href={'/'}>Вернуться к списку постов</Link>
      </div>
      <h1 className="font-bold">{post.data.title}</h1>
      <p>{post.data.body}</p>
      <p className="text-sm">
        <a href={'#'}>
          Author: {user.data.name}
        </a>
      </p>
    </main>
  );
}