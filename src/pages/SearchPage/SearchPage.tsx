import { observer } from 'mobx-react-lite'

import RepoList from "../../components/features/RepoList"

import styles from './styles.module.css'
import repoStore from '../../store/repo.store'
import { useState } from 'react'
import Dropdown from '../../components/ui/Dropdown'
import SearchInput from '../../components/ui/SearchInput'

const SearchPage = observer(() => {
  const [query, setQuery] = useState('')
  const { repositories, loading, error, totalCount } = repoStore

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    repoStore.fetchRepositories(e.target.value)
  }

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка: {error}</p>

  return (
    <div className={styles.container}>
      <SearchInput value={query} onChange={handleInputChange}/>
      <div className={styles.reposHeader}>
        <h2 className={styles.reposTitle}>Result: {totalCount} repositories</h2>
        <Dropdown/>
      </div>
      <RepoList repositories={repositories}/>

    </div>
  )
})

export default SearchPage