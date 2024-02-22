import {  useContext, useEffect, useState } from "react"
import ProductCard from "./ProductCard"
// import { SearchContext } from "../App"


const ProductList = ({query}) => {
  
  const baseUrl = "http://localhost:3000"

  const [searchText, setSearchText] = useState("")
  
  const [products, setProducts] = useState(null)
  // const [filteredProducts, setFilteredProducts] = useState(null)
  // Fetch data from external API when the component is first rendered
  useEffect(() => {
    fetch(baseUrl + "/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        console.log("data fetched")
        setSearchText(query)
      })
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
