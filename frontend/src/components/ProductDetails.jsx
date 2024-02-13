

const ProductDetails = ({selectedProduct}) => {
  return (
    <div>
     <a href="#">
            <img className="p-3 m-auto rounded-t-lg " src={selectedProduct.imageUrl} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{selectedProduct.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">{`${selectedProduct.description}$`}</p>
            <p className="mb-3 text-lg font-extrabold text-gray-700">{`₹ ${selectedProduct.price}`}</p>
            <p className="mb-3 text-lg font-extrabold text-gray-700">{`Category:  ${selectedProduct.category}`}</p>
            <a
              href={`${selectedProduct.productLink}`}
              target="_blank"   
              rel="noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
              Click to Buy
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
           
          </div></div>
  )
}

export default ProductDetails