import {memo} from "react";

const PaginationComponent = (props: {total: number, limit:number, currentPage: number, setPage: (page: number) => void}) => {
  const {total, limit, currentPage, setPage} = props;
  const pages = Array.from({length: total/limit}, (_, i) => i + 1);

  return (
    <div className="flex gap-4">
      {total > limit && <button onClick={() => setPage(currentPage - 1)}>Prev</button>}
      <div className="flex gap-4">
        {pages.map((page) => <button key={page}
                                     onClick={()=>setPage(page)}
                                     className={page === currentPage ? 'font-bold' : ''}
        >{page}</button>)}
      </div>
      {total > limit && <button onClick={() => setPage(currentPage + 1)}>Next</button>}
    </div>
  )
}

export const Pagination = memo(PaginationComponent);