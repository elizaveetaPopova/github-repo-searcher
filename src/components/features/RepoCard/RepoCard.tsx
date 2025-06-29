import { observer } from 'mobx-react-lite';

import FavoriteButton from '../../ui/FavoriteButton';
import CopyLinkButton from '../../ui/CopyLinkButton';
import LinkButton from '../../ui/LinkButton';

import branches from '../../../assets/images/git-branch 1.png';
import star from '../../../assets/images/star 1.png';

import type { Repository } from '../../../types/Repos/ReposTypes';

import styles from './styles.module.css';
import { useState } from 'react';
import copy from 'clipboard-copy';

interface RepoCardProps {
  repo: Repository;
  onToggleFavorite: (repo: Repository) => void;
  isFavorite: boolean;
}

const RepoCard = observer(
  ({ repo, onToggleFavorite, isFavorite }: RepoCardProps) => {
    const [isCopied, setCopied] = useState(false);

    const handleCopyLink = async (url: string) => {
      try {
        await copy(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Error copying link:', error);
      }
    };

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
              <CopyLinkButton onClick={() => handleCopyLink(repo.html_url)} />
              <span
                className={`${styles.message} ${
                  isCopied ? styles.messageVisible : ''
                }`}
              >
                Copied
              </span>
            </div>
            <LinkButton repoId={repo.id} size="small" />
          </div>
        </div>
      </div>
    );
  }
);
export default RepoCard;
