import React from 'react'

function ProductCard({product}) {
  console.log(product);
  return (
    <div>
        <div>
          name:  {product.name}
        </div>
        <img  src="https://picsum.photos/200/200" alt="React Logo" />
      </div>
  )
}

export default ProductCard