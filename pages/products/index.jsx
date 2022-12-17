import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/products.module.scss"

export default function ProductsPage({ data }) {
  return (
    <>
      <h1>Products</h1>
      <div className={styles.wrapper}>
        {data.products.map(({ description, id, title, thumbnail, price }) => (
          <div key={id} className={styles.product}>
            <div className={styles.imageContainer}>
              <Image
                src={thumbnail}
                className={styles.image}
                alt={title}
                priority
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            <div className={styles.info}>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
              <p className={styles.price}>${price}</p>
            </div>
            <Link href={`/products/${id}`} className={styles.button}>
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
