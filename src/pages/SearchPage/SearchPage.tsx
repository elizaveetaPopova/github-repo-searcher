import { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

import RepoList from '../../components/ui/RepoList';
import repoStore from '../../store/repo.store';
import Dropdown from '../../components/ui/Dropdown';
import SearchInput from '../../components/ui/SearchInput';
import { debounce } from '../../utils/debounce';

import styles from './styles.module.css';

const SearchPage = observer(() => {
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState<string | null>(null);
  const { repositories, loading, error, totalCount } = repoStore;

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
            <Dropdown />
          </div>
          <RepoList repositories={repositories} />
        </>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
});

export default SearchPage;
