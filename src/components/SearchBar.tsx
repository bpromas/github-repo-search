interface SearchBarProps {
  query: string;
  sort: string;
  order: string;
  onQueryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onOrderChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  query,
  sort,
  order,
  onQueryChange,
  onSortChange,
  onOrderChange,
  onSearch,
}: SearchBarProps) {
  
  const toggleOrder = () => {
    onOrderChange(order === "desc" ? "asc" : "desc");
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <input
        type="text"
        placeholder="Search..."
        className="border border-[#404040] bg-[#e8e8e8] placeholder-[#707070] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64 "
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg duration-200 cursor-pointer"
      >
        Search
      </button>
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="border-[#404040] border-b px-2 py-2"
      >
        <option value="stars">Stars</option>
        <option value="updated">Last Updated</option>
      </select>
      
      <button
        onClick={toggleOrder}
        className="border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-100 duration-200"
        title={`Current: ${order === "desc" ? "Descending" : "Ascending"}`}
      >
        {order === "desc" ? "↓ Desc" : "↑ Asc"}
      </button>
    </div>
  );
}