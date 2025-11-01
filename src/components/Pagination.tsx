interface PaginationProps {
  page: number;
  totalCount: number;
  onChangePage: (diff: number) => void;
}

export default function Pagination({ page, totalCount, onChangePage }: PaginationProps) {
  
  const isPrevDisabled = page <= 1;
  const isNextDisabled = page * 10 >= totalCount; // 10 is page size, may want to receive as prop

  return (
    <div className="flex gap-4 items-center">
      <button className={`${isPrevDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} 
        onClick={() => onChangePage(-1)}
        disabled={isPrevDisabled}
      >
        Prev
      </button>
      <span>{page}</span>
      <button className={`${isNextDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        onClick={() => onChangePage(1)} 
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
}