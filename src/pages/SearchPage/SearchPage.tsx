import { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

import RepoList from '../../components/features/RepoList';
import githubStore from '../../store/repo.store';
import Dropdown from '../../components/shared/Dropdown';
import SearchInput from '../../components/ui/SearchInput';
import { debounce } from '../../utils/debounce';
import type { SortOption } from '../../types/Repos/ReposTypes';
import { options } from '../../constants/sortOptions';
import favoritesStore from '../../store/favorites.store';

import styles from './styles.module.css';

const SearchPage = observer(() => {
  const [inputError, setInputError] = useState<string | null>(null);

  const { loading, error, totalCount, sortBy, setSortBy, query, setQuery } =
    githubStore;

  const debouncedSearch = useRef(
    debounce((query: string) => {
      githubStore.fetchRepositories(query);
    }, 1500)
  ).current;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValueValid = validate(value);
    setQuery(value);
    if (isValueValid) {
      debouncedSearch(value);
    }
  };

  const validate = (value: string): boolean => {
    if (value.trim().length === 0) {
      setInputError('Field is required');
      return false;
    }

    setInputError(null);
    return true;
  };

  const handleDropdownChange = (option: SortOption) => {
    setSortBy(option.value);
    if (query.trim()) {
      githubStore.fetchRepositories(query);
    }
  };

  const selectedLabel =
    options.find((option) => option.value === sortBy)?.label || '';

  if (error) return <p>Ошибка: {error}</p>;
  return (
    <div className={styles.container}>
      <SearchInput
        value={query}
        onChange={handleInputChange}
        inputError={inputError}
      />
      {!loading && (
        <>
          <div className={styles.reposHeader}>
            <h2 className={styles.reposTitle}>
              Result: {totalCount} repositories
            </h2>
            <Dropdown
              onChange={handleDropdownChange}
              options={options}
              sortBy={selectedLabel}
            />
          </div>
          <RepoList
            favorites={favoritesStore.favorites}
            onToggleFavorite={favoritesStore.toggleFavorite}
            repositories={githubStore.repositories}
          />
        </>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
});

export default SearchPage;
