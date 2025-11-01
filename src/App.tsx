import { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  
  async function handleSearch(){
    const res = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    setRepos(res.data.items)

  }

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 bg-white shadow-lg rounded-2xl px-6 py-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg duration-200 cursor-pointer">
          Search
        </button>
      </div>
      <div className="w-96 bg-white shadow rounded-lg p-4 space-y-2 max-h-[60vh] overflow-y-auto">
        {repos.length === 0 && <p className="text-gray-500 text-center">No results yet</p>}
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-gray-200 pb-2 hover:bg-gray-50 px-2 rounded"
          >
            <p className="font-semibold text-blue-600">{repo.full_name}</p>
            <p className="text-sm text-gray-600">{repo.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default App
