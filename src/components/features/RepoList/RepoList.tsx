import { observer } from 'mobx-react-lite';

import RepoCard from '../../features/RepoCard';
import type { Repository } from '../../../types/Repos/ReposTypes';

import styles from './styles.module.css';

interface RepoListProps {
  repositories: Repository[];
  favorites: Repository[];
  onToggleFavorite: (repo: Repository) => void;
}

const RepoList = observer(
  ({ repositories, favorites, onToggleFavorite }: RepoListProps) => {
    const isFavorite = (repo: Repository) =>
      favorites.some((fav) => fav.id === repo.id);

    return (
      <div className={styles.repoList}>
        {repositories.map((repository) => (
          <RepoCard
            key={repository.id}
            repo={repository}
            isFavorite={isFavorite(repository)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    );
  }
);
export default RepoList;
