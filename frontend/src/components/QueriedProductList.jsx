import ProductCard from "./ProductCard"


const QueriedProductList = ({queriedProducts}) => {

const renderQueriedProducts = queriedProducts ? queriedProducts.map((product) =>{
    return (<ProductCard key={product.id} product={product} />)
}) : <div>No products found</div>

  return (
    <div>
    <div className="flex flex-wrap justify-center m-auto mt-8 gap-x-9 gap-y-9 ">{renderQueriedProducts}</div>
  </div>
  )
}

export default QueriedProductList