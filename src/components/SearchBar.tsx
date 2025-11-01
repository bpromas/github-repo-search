interface SearchBarProps {
  query: string;
  sort: string;
  onQueryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  query,
  sort,
  onQueryChange,
  onSortChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg duration-200"
      >
        Search
      </button>
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded-lg px-2 py-2"
      >
        <option value="stars">Stars</option>
        <option value="updated">Last Updated</option>
      </select>
    </div>
  );
}