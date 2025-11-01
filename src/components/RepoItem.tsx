interface RepoItemProps {
  repo: {
    id: number;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    updated_at: string;
  };
}

export default function RepoItem({ repo }: RepoItemProps) {
  return (
    <a
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
  );
}