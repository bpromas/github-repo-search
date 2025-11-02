import { motion, easeOut  } from 'framer-motion';

interface RepoItemProps {
  index: number,
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

export default function RepoItem({ index, repo }: RepoItemProps) {
  // Determine animation direction based on index
  const isEven = index % 2 === 0;
  
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
        delay: index * 0.1, // 100ms delay per index
      }
    }
  };

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 self-stretch"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
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
            {repo.description}
          </p>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>⭐ {repo.stargazers_count.toLocaleString()}</span>
            <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}