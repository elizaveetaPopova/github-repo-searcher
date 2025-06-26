import RepoCard from '../../ui/RepoCard';
import type { Repository } from '../../../types/Repos/ReposTypes';

import styles from './styles.module.css';

interface RepoListProps {
  repositories: Repository[];
}

const RepoList = ({ repositories }: RepoListProps) => {
  return (
    <div className={styles.repoList}>
      {repositories.map((repository) => (
        <RepoCard key={repository.id} repo={repository} />
      ))}
    </div>
  );
};
export default RepoList;
