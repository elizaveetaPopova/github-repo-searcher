import RepoCard from '../../ui/RepoCard';
import type { Repository } from '../../../types/Repos/ReposTypes';

import styles from './styles.module.css';

interface RepoListProps {
  repositories: Repository[];
  addFavorite: (repo: Repository) => void;
}

const RepoList = ({ repositories, addFavorite }: RepoListProps) => {
  return (
    <div className={styles.repoList}>
      {repositories.map((repository) => (
        <RepoCard
          key={repository.id}
          repo={repository}
          addFavorite={addFavorite}
        />
      ))}
    </div>
  );
};
export default RepoList;
