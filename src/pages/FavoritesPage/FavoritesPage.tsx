import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import BackButton from '../../components/ui/BackButton';
import RepoList from '../../components/ui/RepoList';
import Dropdown from '../../components/ui/Dropdown';
import type { SortOption } from '../../types/Repos/ReposTypes';
import { options } from '../../constants/sortOptions';
import favoritesStore from '../../store/favorites.store';

import styles from './styles.module.css';

const FavoritesPage = observer(() => {
  const navigate = useNavigate();
  const { favorites, setSortBy, sortBy } = favoritesStore;

  const goBack = () => {
    navigate(-1);
  };

  const handleDropdownChange = (option: SortOption) => {
    setSortBy(option.value);
  };

  const selectedLabel =
    options.find((option) => option.value === sortBy)?.label || '';

  return (
    <div className={styles.container}>
      <BackButton onClick={goBack} />
      {favorites.length > 0 ? (
        <>
          <div className={styles.reposHeader}>
            <h2 className={styles.reposTitle}>Favorites: {favorites.length}</h2>
            <Dropdown
              onChange={handleDropdownChange}
              options={options}
              sortBy={selectedLabel}
            />
          </div>
          <RepoList
            onToggleFavorite={favoritesStore.toggleFavorite}
            favorites={favoritesStore.sortedFavorites}
            repositories={favoritesStore.sortedFavorites}
          />
        </>
      ) : (
        <div className={styles.reposHeader}>
          <h2 className={styles.reposTitle}>No favorites yet</h2>
        </div>
      )}
    </div>
  );
});

export default FavoritesPage;
