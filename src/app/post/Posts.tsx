'use client'
import {ChangeEvent, memo, useMemo, useState} from "react";
import useDebounce from "@/hooks/useDebounce";
import {Pagination} from "@/components/pagination";
import {PostList} from "@/components/post/post.list";
import {Post} from "@/components/post/post.type";

type PageProps = {
  list: Post[];
}

const PostsComponent = (props: PageProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [limit, setLimit] = useState(10);

  const filterDebounced = useDebounce(filter, 500);

  const list = useMemo(() => props.list.filter((post) => post.title.includes(filterDebounced))
    , [filterDebounced]);

  const posts = useMemo(() => list.slice((currentPage - 1) * limit, currentPage * limit)
    , [currentPage, list]);

  const setPage = (page: number) => {
    if (page < 1 || page > list.length / limit || page === currentPage) return;
    setCurrentPage(page);
  }

  const setLimitHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(e.target.value)
    if (newLimit === limit) return;
    if(currentPage > list.length/newLimit) setCurrentPage(1)
    setLimit(newLimit)
  }

  return (
    <div>
      <div className="flex flex-col mb-6">
        <h2 className="font-bold mb-6">Posts</h2>
        <label className="text-sm mb-2">Фильтровать по названию</label>
        <input className="px-4 py-2 border rounded max-w-[300px]" type="text" value={filter}
               onChange={(e) => setFilter(e.target.value)} placeholder="Search..."/>
      </div>
      <div className="flex gap-4 items-center justify-between flex-wrap-reverse">
        <div>
          {list.length && <Pagination total={list.length} currentPage={currentPage} setPage={setPage} limit={limit}/>}
        </div>
        <div>
          <label>Количество записей на странице</label>
          <select className="cursor-pointer" value={limit} onChange={setLimitHandler}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      {posts && <PostList list={posts} setPage={setPage}/>}
    </div>
  )
}

export const Posts = memo(PostsComponent);