import styles from "./footer.module.scss"

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <p>
          Created by <em>michaelspnv</em>
        </p>
        <p className={styles.date}>2022</p>
      </div>
    </div>
  )
}
