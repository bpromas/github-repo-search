import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
import Pagination from "./components/Pagination";

function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState<any[]>([]);
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
  }, [page, sort]);

  return (
    <section className="h-screen flex flex-col gap-3 items-center justify-center">
      <SearchBar
        query={query}
        sort={sort}
        onQueryChange={setQuery}
        onSortChange={setSort}
        onSearch={newSearch}
      />
      <RepoList repos={repos} />
      <Pagination page={page} onChangePage={handlePage} />
    </section>
  );
}

export default App;