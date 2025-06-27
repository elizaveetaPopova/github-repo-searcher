import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import heart from '../../../assets/images/heart_simple.png';
import role from '../../../assets/images/Role.png';

import style from './styles.module.css';

const Header = () => {
  const navigate = useNavigate();
  const goToFavorites = () => {
    navigate('/favorites');
  };
  const goToProfile = () => {};
  const goToHome = () => {
    navigate('/');
  };

  return (
    <header className={style.header}>
      <button className={style.logo} onClick={goToHome}>
        <img className={style.logo} src={logo} alt="logo" />
      </button>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <button className={style.navButton} onClick={goToFavorites}>
              <img src={heart} alt="heart" />
            </button>
          </li>
          <li className={style.navItem}>
            <button className={style.navButton} onClick={goToProfile}>
              <img src={role} alt="profile" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
