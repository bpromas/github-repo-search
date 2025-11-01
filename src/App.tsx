import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
import Pagination from "./components/Pagination";

function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("stars");
  const [order, setOrder] = useState("desc");

  async function handleSearch() {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${query}+in:name&sort=${sort}&order=${order}&per_page=10&page=${page}`
    );
    setRepos(res.data.items);
    setTotalCount(res.data.total_count)
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
  }, [page, sort, order]);

  return (
    <section className="h-screen py-[5vh] flex flex-col gap-3 items-center justify-center">
      <SearchBar
        query={query}
        sort={sort}
        order={order}
        onQueryChange={setQuery}
        onSortChange={setSort}
        onOrderChange={setOrder}
        onSearch={newSearch}
      />
      <RepoList repos={repos} />
      <Pagination page={page} totalCount={totalCount} onChangePage={handlePage} />
    </section>
  );
}

export default App;