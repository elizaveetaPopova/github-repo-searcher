import avatar from '../../../assets/images/avatar-test.jpg'
import star from '../../../assets/images/star 1.png'
import branches from '../../../assets/images/git-branch 1.png'

import styles from './styles.module.css'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import CopyLinkButton from '../CopyLinkButton/CopyLinkButton'
import DetailsButton from '../DetailsButton/DetailsButton'

const RepoCard = () => {
  return (
    <div className={styles.repoCard}> 
      <div className={styles.header}>
        <img alt='avatar' src={avatar} className={styles.avatar}/> 
        <div className={styles.info}>
          <div className={styles.raiting}>
            <img className={styles.icon} src={star} alt='raiting'/>
            <span>4.8</span>
          </div>
          <div className={styles.branches}>
            <img className={styles.icon} src={branches} alt='branches'/>
            <span>4.8</span>
          </div>
        </div>
      </div>
      <div className={styles.repo}>
        <span className={styles.repoName}>@RepoName</span>
        <a className={styles.repoLink} href="https://example.com">
            @RepoLink
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