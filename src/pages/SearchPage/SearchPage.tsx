import { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

import RepoList from '../../components/ui/RepoList';
import repoStore from '../../store/repo.store';
import Dropdown from '../../components/ui/Dropdown';
import SearchInput from '../../components/ui/SearchInput';
import { debounce } from '../../utils/debounce';
import type { SortOption } from '../../types/Repos/ReposTypes';

import styles from './styles.module.css';

const options: SortOption[] = [
  { value: 'stars', label: 'Star count' },
  { value: 'name', label: 'Alphabetical' },
  { value: 'updated', label: 'New first' },
];

const SearchPage = observer(() => {
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const {
    repositories,
    loading,
    error,
    totalCount,
    sortBy,
    setSortBy,
    addFavorite,
  } = repoStore;

  const debouncedSearch = useRef(
    debounce((query: string) => {
      repoStore.fetchRepositories(query);
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
      repoStore.fetchRepositories(query);
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
          <RepoList addFavorite={addFavorite} repositories={repositories} />
        </>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
});

export default SearchPage;
