import React from 'react'
import "../index.css"

function ProductCard({product}) {
  console.log(product);
  return (
    <div>
        <div  className="text-3xl font-bold underline">
          name:  {product.name}
        </div>
        <img  src="https://picsum.photos/200/200" alt="React Logo" />
      </div>
  )
}

export default ProductCard