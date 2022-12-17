import Image from "next/image"
import styles from "../styles/home.module.scss"

export default function HomePage() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Hello,</h1>
      <Image
        src="/next.svg"
        width={150}
        height={150}
        alt="next.js logo"
        priority
      />
    </div>
  )
}
