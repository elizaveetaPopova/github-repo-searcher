import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import copy from 'clipboard-copy';

import RepoInfoItem from '@components/features/RepoInfoItem';
import BackButton from '@components/ui/BackButton';
import CopyLinkButton from '@components/ui/CopyLinkButton';
import FavoriteButton from '@components/ui/FavoriteButton';
import LinkButton from '@components/ui/LinkButton';

import favoritesStore from '@store/favorites.store';
import githubStore from '@store/repo.store';

import { formatDate } from '@utils/dateFormatter';

import archive from '@assets/images/archive 1.png';
import create from '@assets/images/create 1.png';
import folder from '@assets/images/folder 1.png';
import fork from '@assets/images/git-branch 1.png';
import star from '@assets/images/star 1.png';
import terminal from '@assets/images/terminal 1.png';

import { fetchRepositoryById } from '@api/repo.api';

import styles from './styles.module.css';

const RepoDetailPage = observer(() => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { repositories } = githubStore;
  const { favorites, toggleFavorite } = favoritesStore;

  const [isCopied, setCopied] = useState(false);
  const [repo, setRepo] = useState(
    () => repositories.find((r) => r.id === Number(id)) || null
  );

  useEffect(() => {
    const existingRepo = repositories.find((r) => r.id === Number(id));
    if (existingRepo) {
      setRepo(existingRepo);
    } else {
      fetchRepositoryById(Number(id)).then((data) => {
        setRepo(data);
      });
    }
  }, [repositories, id]);

  const isFavorite = favorites.some((fav) => fav.id === repo?.id);

  const goBack = () => {
    navigate(-1);
  };

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
    <div className={styles.container}>
      <BackButton onClick={goBack} />
      {repo && (
        <div className={styles.repo}>
          <h2 className={styles.title}>Профиль</h2>
          <div className={styles.profile}>
            <img
              className={styles.avatar}
              src={repo.owner.avatar_url}
              alt="avatar"
              width={150}
              height={150}
            />
            <div className={styles.info}>
              <span className={styles.name}>{repo.full_name}</span>
              <p className={styles.description}>{repo.description}</p>
            </div>
          </div>
          <div className={styles.stats}>
            <RepoInfoItem
              icon={star}
              value={repo.stargazers_count}
              label="Количество звезд"
              alt="stars"
            />
            <RepoInfoItem
              icon={fork}
              value={repo.forks_count}
              label="Количестсво форков"
              alt="forks"
            />
            <RepoInfoItem
              icon={archive}
              value={repo.archived ? 'Да' : 'Нет'}
              label="В архиве"
              alt="archive"
            />
            <RepoInfoItem
              icon={terminal}
              value={repo.language || 'Нет'}
              label="Язык"
              alt="terminal"
            />
            <RepoInfoItem
              icon={folder}
              value={formatDate(repo.created_at)}
              label="Cоздано"
              alt="folder"
            />
            <RepoInfoItem
              icon={create}
              value={formatDate(repo.updated_at)}
              label="Изменено"
              alt="create"
            />
          </div>
          <hr className={styles.divider} />
          <div className={styles.buttons}>
            <div className={styles.buttonGroup}>
              <FavoriteButton
                isFavorite={isFavorite}
                onClick={() => toggleFavorite(repo)}
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
            <LinkButton label="Открыть репотизторий" url={repo.html_url} />
          </div>
        </div>
      )}
    </div>
  );
});

export default RepoDetailPage;
