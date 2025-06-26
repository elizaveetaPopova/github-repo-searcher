import RepoCard from '../../ui/RepoCard';
import type { Repository } from '../../../types/Repos/ReposTypes';

interface RepoListProps {
  repositories: Repository[];
}

const RepoList = ({ repositories }: RepoListProps) => {
  return (
    <>
      {repositories.map((repository) => (
        <RepoCard key={repository.id} repo={repository} />
      ))}
    </>
  );
};
export default RepoList;
