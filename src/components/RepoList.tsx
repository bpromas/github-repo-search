
import RepoItem from "./RepoItem";

interface RepoListProps {
  repos: any[];
}

export default function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return <p className="text-gray-500 text-center">No results yet</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-6xl p-4 overflow-y-auto">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}