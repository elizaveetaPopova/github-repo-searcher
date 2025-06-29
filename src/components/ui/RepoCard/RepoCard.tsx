import { observer } from 'mobx-react-lite';

import FavoriteButton from '../FavoriteButton';
import CopyLinkButton from '../CopyLinkButton';
import LinkButton from '../LinkButton';

import branches from '../../../assets/images/git-branch 1.png';
import star from '../../../assets/images/star 1.png';

import type { Repository } from '../../../types/Repos/ReposTypes';

import styles from './styles.module.css';

interface RepoCardProps {
  repo: Repository;
  onToggleFavorite: (repo: Repository) => void;
  isFavorite: boolean;
}

const RepoCard = observer(
  ({ repo, onToggleFavorite, isFavorite }: RepoCardProps) => {
    return (
      <div className={styles.repoCard}>
        <div className={styles.header}>
          <img
            alt="avatar"
            src={repo.owner.avatar_url}
            className={styles.avatar}
            width={32}
            height={32}
          />
          <div className={styles.info}>
            <div className={styles.raiting}>
              <img className={styles.icon} src={star} alt="raiting" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className={styles.branches}>
              <img className={styles.icon} src={branches} alt="branches" />
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
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={() => onToggleFavorite(repo)}
              />
              <CopyLinkButton />
            </div>
            <LinkButton repoId={repo.id} size="small" />
          </div>
        </div>
      </div>
    );
  }
);
export default RepoCard;
