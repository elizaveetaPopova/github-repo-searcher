import { observer } from 'mobx-react-lite'

import RepoList from "../../components/features/RepoList"

import styles from './styles.module.css'
import repoStore from '../../store/repo.store'
import { useEffect } from 'react'

const SearchPage = observer(() => {
  const { repos, loading, error } = repoStore

  useEffect(() => {
    repoStore.fetchRepos('react')
  },[])

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка: {error}</p>

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Result: 100 repositories</h1>
      <RepoList repos={repos}/>

    </div>
  )
})

export default SearchPage