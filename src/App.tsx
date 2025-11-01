import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("stars");

  async function handleSearch() {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${query}&sort=${sort}&order=desc&per_page=10&page=${page}`
    );
    setRepos(res.data.items);
  }

  function newSearch() {
    setPage(1);
    handleSearch();
  }

  function handlePage(diff: number) {
    setPage((p) => Math.max(1, p + diff));
  }

  useEffect(() => {
    if (query) handleSearch();
  }, [page, sort]); // re-fetch when sort or page changes

  return (
    <section className="h-screen flex flex-col gap-3 items-center justify-center">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && newSearch()}
        />
        <button
          onClick={newSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg duration-200"
        >
          Search
        </button>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-lg px-2 py-2"
        >
          <option value="stars">Stars</option>
          <option value="updated">Last Updated</option>
        </select>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2 w-full max-w-xl">
        {repos.length === 0 && (
          <p className="text-gray-500 text-center">No results yet</p>
        )}
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-gray-200 pb-2 hover:bg-gray-50 px-2"
          >
            <p className="font-semibold">{repo.full_name}</p>
            <p className="text-sm text-gray-600">{repo.description}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
          </a>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <button onClick={() => handlePage(-1)}
          className="cursor-pointer">Prev</button>
        <span>{page}</span>
        <button onClick={() => handlePage(1)}
          className="cursor-pointer">Next</button>
      </div>
    </section>
  );
}

export default App;