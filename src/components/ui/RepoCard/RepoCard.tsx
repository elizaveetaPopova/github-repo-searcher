import branches from '../../../assets/images/git-branch 1.png'
import star from '../../../assets/images/star 1.png'
import styles from './styles.module.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import CopyLinkButton from '../CopyLinkButton/CopyLinkButton'
import DetailsButton from '../DetailsButton/DetailsButton'
import type { Repository } from '../../../types/Repos/ReposTypes'

interface RepoCardProps {
    repo: Repository
}
const RepoCard = ({repo}: RepoCardProps) => {
  console.log('repo :>> ', repo);
  return (
    <div className={styles.repoCard}> 
      <div className={styles.header}>
        <img alt='avatar' src={repo.owner.avatar_url} className={styles.avatar}/> 
        <div className={styles.info}>
          <div className={styles.raiting}>
            <img className={styles.icon} src={star} alt='raiting'/>
            <span>{repo.stargazers_count}</span>
          </div>
          <div className={styles.branches}>
            <img className={styles.icon} src={branches} alt='branches'/>
            <span>{repo.forks_count}</span>
          </div>
        </div>
      </div>
      <div className={styles.repo}>
        <span className={styles.repoName}>{`@${repo.owner.login}`}</span>
        <a className={styles.repoLink} href={repo.html_url}>
          {`@${repo.full_name}`}
        </a>
        <div className={styles.buttons}>
          <div className={styles.buttonGroup}>
            <FavoriteButton isFavorite={false}/>
            <CopyLinkButton/>
          </div>
          <DetailsButton/>
        </div>
      </div>
    </div>
  )
}
export default RepoCard