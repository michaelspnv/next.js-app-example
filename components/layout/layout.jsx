import Head from "next/head"
import { Header } from "../header"
import { Footer } from "../footer"
import styles from "./layout.module.scss"

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.JS Example</title>
      </Head>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  )
}
