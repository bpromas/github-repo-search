interface RepoItemProps {
  repo: {
    id: number;
    full_name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    updated_at: string;
    owner: {
      avatar_url: string;
      login: string;
    };
  };
}

export default function RepoItem({ repo }: RepoItemProps) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 self-stretch"
    >
      <div className="flex h-fit w-full items-center p-4 gap-4 self-center">
        <img
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          className="w-16 h-16 rounded-full border border-gray-300 object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-lg text-blue-600 hover:underline">
            {repo.full_name}
          </p>
          <p className="text-sm text-gray-600">
            {repo.description }
          </p>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>⭐ {repo.stargazers_count.toLocaleString()}</span>
            <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </a>
  );
}