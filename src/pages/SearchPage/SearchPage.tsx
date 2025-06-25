import RepoList from "../../components/features/RepoList"
import styles from './styles.module.css'
const SearchPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Result: 100 repositories</h1>
      <RepoList/>

    </div>
  )
}

export default SearchPage