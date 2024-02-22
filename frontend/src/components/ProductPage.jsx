import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comparison from "./Comparison"
import ProductDetails from "./ProductDetails"

import SortedProductList from "./QueriedProductList"
//import { Context } from "../App"

const ProductPage = () => {
  console.log("motemotmeotmeotmeotmeomo")
  const baseUrl = "http://localhost:3000"
  const paramId = useParams().id
  const [selectedProduct, setSelectedProduct] = useState(1)
  const [queriedProducts, setQueriedProducts] = useState([])

  useEffect(() => {
    console.log("inside useEffect, paramId: ", paramId, typeof paramId)
    fetch(`${baseUrl}/products/${paramId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data.product)
        setQueriedProducts(data.shortlistedProducts)
        console.log("FETCH 1 ")
        console.log(data.shortlistedProducts)
        console.log(queriedProducts)
      })
  }, [])

  return (
    <div className="flex flex-wrap">
      <div
        id="product-info-container"
        className="grid justify-center w-4/5 grid-cols-1 mx-auto mt-8 md:grid-cols-2 gap-x-12 gap-y-9">
        <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow ">
          {<ProductDetails selectedProduct={selectedProduct} />}
        </div>
        <div className="col-span-1 ">
          {<Comparison selectedProduct={selectedProduct} queriedProducts={queriedProducts} />}
        </div>
      </div>
      <hr />
      <div id="shortlisted-container" className="justify-center mx-auto mt-8">
        <div className="bg-white rounded-lg shadow ">{<SortedProductList queriedProducts={queriedProducts} />}</div>
      </div>
    </div>
  )
}

export default ProductPage
