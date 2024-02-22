/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

const ProductCard = ({ product }) => {
  const truncateDescription = (text) => {
    if (text.length > 190) {
      return text.substring(0, 190) + "..."
    }
    return text
  }
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md  max-h-fit">
      <Link reloadDocument to={`/products/${product.id}`}>
        <img className="h-64 mx-auto rounded-t-lg" src={product.imageUrl} alt={product.name + " Image"} />
      </Link>
      {/* React components will only re-render if the state or props are updated. If you try to navigate to the page you are currently on, and there isn't a change in state or props in that component, the component will not re-render/refresh */}
      <div className="p-5 ">
        <Link reloadDocument to={`/products/${product.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.name}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 ">{truncateDescription(product.description)}</p>

        <p className="mb-3 text-lg font-extrabold text-gray-700 ">{`₹ ${product.price}`}</p>
        <div className="">
          <Link
            reloadDocument
            to={`/products/${product.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 ">
            Compare Smart
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
          </Link>
        </div>
      </div>
    </div>
  )
}

ProductCard.protoTypes = {
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  product: PropTypes.object,
  imageUrl: PropTypes.string,
}
export default ProductCard
