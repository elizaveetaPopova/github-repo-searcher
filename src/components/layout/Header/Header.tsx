import logo from '../../../assets/images/logo.png'
import heart from '../../../assets/images/heart_simple.png'
import role from '../../../assets/images/Role.png'

import style from './styles.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img className={style.logo} src={logo} alt='logo' />
      </div>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <button className={style.navButton}>
              <img src={heart} />
            </button>
          </li>
          <li className={style.navItem}>
            <button className={style.navButton}>
              <img src={role} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;