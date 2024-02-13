import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Prompt from "./Prompt"
import ProductDetails from "./ProductDetails"
//import { Context } from "../App"

const ProductPage = () => {
  console.log("motemotmeotmeotmeotmeomo")
  const baseUrl = "http://localhost:3000"
  const paramId = useParams().id
  const [selectedProduct, setSelectedProduct] = useState(1)
  const [QueriedProducts, setQueriedProducts] = useState(null)

  useEffect(() => {
    console.log("inside useEffect, paramId: ", paramId, typeof paramId)
    fetch(`${baseUrl}/products/${paramId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data)
        console.log("FETCH 1 ")
        console.log(data)
      })

    fetch(baseUrl + "/products/" + paramId)
      .then((res) => res.json())
      .then((data) => {
        setQueriedProducts(data)
        console.log("FETCH 2 ")
        console.log(data)
      })
  }, [])

  return (
    <div className="flex flex-wrap">
      <div id="product-info-container" className="grid justify-center w-9/12 grid-cols-1 mx-auto mt-8 md:grid-cols-2 gap-x-9 gap-y-9" >
        <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow ">
         {<ProductDetails  selectedProduct={selectedProduct} />}
        </div>
        <div  className="col-span-1 ">
          {<Prompt/>}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
