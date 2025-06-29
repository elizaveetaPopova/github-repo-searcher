import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BackButton from '../../components/ui/BackButton';
import githubStore from '../../store/repo.store';

import archive from '../../assets/images/archive 1.png';
import star from '../../assets/images/star 1.png';
import fork from '../../assets/images/git-branch 1.png';
import terminal from '../../assets/images/terminal 1.png';
import folder from '../../assets/images/folder 1.png';
import create from '../../assets/images/create 1.png';

import styles from './styles.module.css';
import RepoInfoItem from '../../components/ui/RepoInfoItem';
import FavoriteButton from '../../components/ui/FavoriteButton';
import CopyLinkButton from '../../components/ui/CopyLinkButton';
import favoritesStore from '../../store/favorites.store';
import { observer } from 'mobx-react-lite';
import { fetchRepositoryById } from '../../api/repo.api';
import LinkButton from '../../components/ui/LinkButton';
import { formatDate } from '../../utils/dateFormatter';

const RepoDetailPage = observer(() => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { repositories } = githubStore;
  const { favorites, toggleFavorite } = favoritesStore;

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
              <CopyLinkButton />
            </div>
            <LinkButton label="Открыть репотизторий" url={repo.html_url} />
          </div>
        </div>
      )}
    </div>
  );
});

export default RepoDetailPage;
