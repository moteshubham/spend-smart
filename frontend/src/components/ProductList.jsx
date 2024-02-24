import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const ProductList = ({ query }) => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

  const [searchText, setSearchText] = useState("")
  const [products, setProducts] = useState(null)

  useEffect(() => {
    if (query) {
      fetch(baseUrl + "/products?query=" + encodeURIComponent(query))
        .then((res) => res.json())
        .then((data) => {
          setProducts(data)
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching products:", error)
        })
    }
  }, [query])

  const filteredProductsArray = searchText
    ? products.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()))
    : products

  let renderProducts = products
    ? filteredProductsArray.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })
    : null

  return (
    <div>
      <div className="flex flex-wrap justify-center m-auto mt-8 gap-x-9 gap-y-9 ">{renderProducts}</div>
    </div>
  )
}

export default ProductList
