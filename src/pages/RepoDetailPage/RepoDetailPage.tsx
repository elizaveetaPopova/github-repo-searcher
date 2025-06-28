import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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

const RepoDetailPage = observer(() => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const { repositories } = githubStore;
  const { favorites, toggleFavorite } = favoritesStore;

  const [repo, setRepo] = useState(
    () => repositories.find((r) => r.id === Number(id)) || null
  );

  const isFavorite = favorites.some((fav) => fav.id === repo?.id);

  console.log('repo :>> ', repo);
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
          </div>
          <hr className={styles.divider} />
          <div>
            <FavoriteButton
              isFavorite={isFavorite}
              onClick={() => toggleFavorite(repo)}
            />
            <CopyLinkButton />
          </div>
        </div>
      )}
    </div>
  );
});

export default RepoDetailPage;
