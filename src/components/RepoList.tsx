import RepoItem from "./RepoItem";

interface RepoListProps {
  repos: any[];
}

export default function RepoList({ repos }: RepoListProps) {
  if (repos.length === 0) {
    return <p className="text-gray-500 text-center">No results yet</p>;
  }

  return (
    <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2 w-full max-w-xl">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}