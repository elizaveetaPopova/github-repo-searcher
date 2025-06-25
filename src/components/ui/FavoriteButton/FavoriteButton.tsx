import heart from '../../../assets/images/heart_off.png'
import heartOn from '../../../assets/images/heart_on.png'

import styles from './styles.module.css'
const FavoriteButton = ({ isFavorite }: { isFavorite: boolean }) => {
  return (
    <button className={styles.button}>
      <img src={isFavorite ? heartOn : heart} />
    </button>
  )
}

export default FavoriteButton