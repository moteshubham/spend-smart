import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ProductCard from "./components/ProductCard"
import NavBar from "./components/NavBar"

function App() {
  console.log("data fetched")
  const baseUrl = "http://localhost:3000"
  const [products, setProducts] = useState(null)
  // Fetch data from external API when the component is first rendered
  useEffect(() => {
    fetch(baseUrl + "/products")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setProducts(data)
        console.log("data fetched")
      })
  }, [])

  const renderProducts = (products) => {
    return products.map((product) => {
      return <ProductCard key={product.id} product={product} />
    })
  }
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap max-w-5xl m-auto space-x-3 space-y-5">{products && renderProducts(products)}</div>
    </>
  )
}

export default App
