import { useRouter } from "next/router"
import Link from "next/link"
import styles from "./header.module.scss"

export function Header() {
  const router = useRouter()

  const linkClasses = (route) => {
    const classes = [styles.link]

    if (router.pathname === route) {
      classes.push(styles.active)
    }
    return classes.join(" ")
  }

  return (
    <div className={styles.header}>
      <Link className={linkClasses("/")} href="/">
        Home
      </Link>
      <Link className={linkClasses("/products")} href="/products">
        Products
      </Link>
      <Link className={linkClasses("/about")} href="/about">
        About
      </Link>
    </div>
  )
}
