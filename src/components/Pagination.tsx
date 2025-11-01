import React from "react";

interface PaginationProps {
  page: number;
  onChangePage: (diff: number) => void;
}

export default function Pagination({ page, onChangePage }: PaginationProps) {
  return (
    <div className="flex gap-4 items-center">
      <button onClick={() => onChangePage(-1)} className="cursor-pointer">
        Prev
      </button>
      <span>{page}</span>
      <button onClick={() => onChangePage(1)} className="cursor-pointer">
        Next
      </button>
    </div>
  );
}