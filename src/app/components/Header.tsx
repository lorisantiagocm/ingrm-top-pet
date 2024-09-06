
import styles from './page.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.mainItems}>
        <div className={[styles.textSecondary, styles.fadeInText, styles.textMedium, styles.slideRight].join(' ')}>
          <p>Conheça a</p></div>
        <div className={styles.mainName}>PetStore</div>
        <button className={styles.primary}>Clique para ver os produtos</button>
      </div>
      <div className={styles.headerMenu}>
        Blog
      </div>
    </div>
  )
}
