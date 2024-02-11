import React, { useContext, useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import { Context } from "../App"

const ProductList = () => {
  // console.log("data fetched")
  const baseUrl = "http://localhost:3000"

  const [searchText, setSearchText] = useContext(Context)
  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(null)
  // Fetch data from external API when the component is first rendered
  useEffect(() => {
    fetch(baseUrl + "/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        console.log("data fetched")
        // console.log(data)
      })
  }, [])

  
  const filteredProductsArray = searchText
  ? products.filter((p) => p.name.toLowerCase().includes(searchText.toLowerCase()))
  : products

  let renderProducts =   
    products ?  filteredProductsArray.map((product) => {
      return <ProductCard key={product.id} product={product}  />
    }): null
  

  
  

  return (
    <div>
      <div className="flex flex-wrap max-w-5xl m-auto space-x-3 space-y-5">
        { renderProducts}
      </div>
    </div>
  )
}

export default ProductList
