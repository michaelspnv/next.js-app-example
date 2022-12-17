import { useRouter } from "next/router"

export default function Product({ data }) {
  const router = useRouter()

  const productId = router.query.id

  return (
    <>
      <h1>{data.products[productId - 1].title}</h1>
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

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  const paths = data.products.map((product) => {
    return {
      params: { id: String(product.id) },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
