import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ProductList from "./ProductList"

const Search = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get("query")

  useEffect(() => {}, [query])
  return (
    <div className="min-h-full">
      <h1 className="pt-3 text-center">Results for &#34;{query}&#34;</h1>
      <ProductList query={query} />
    </div>
  )
}

export default Search
