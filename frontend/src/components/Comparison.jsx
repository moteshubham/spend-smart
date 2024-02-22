const Comparison = ({ queriedProducts, selectedProduct }) => {
  const calculateTotalPrice = () => {
    let totalPrice = 0
    queriedProducts.forEach((product) => {
      totalPrice += product.price
    })
    return totalPrice
  }
  let i = 0

  return (
    <div>
      <div className="mt-8">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-0 py-2">No.</th>
              <th className="px-4 py-2">Your Selected Product</th>
              <th className="px-4 py-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr key={selectedProduct.id} className="border-b">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">{selectedProduct.name}</td>
              <td className="px-4 py-2 font-bold text-right">&#8377;{selectedProduct.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {queriedProducts.length <= 1 ? (
        ""
      ) : (
        <div className="mt-8">
          {/* Display total price of queried products */}

          {/* Display table of queried products */}
          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-0 py-2">No.</th>
                <th className="px-4 py-2">Shortlisted Products For You To Compare</th>
                <th className="px-4 py-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {queriedProducts.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="px-4 py-2">{++i}</td>
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2 text-right">&#8377;{product.price}</td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-2 bg-gray-100 ">&rarr; </td>

                <td className="px-4 py-2 bg-gray-100">Total Price of Shortlisted Products: </td>

                <td className="px-4 py-2 font-bold text-right bg-gray-100">&#8377;{calculateTotalPrice()} </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-8 text-lg font-semibold text-center">
        {i <= 1 ? (
          <span>Oops! No item to comapare with in database </span>
        ) : (
          <span>
            You can buy above <span className="underline">{i}</span> product instead of buying single item of &#8377;
            {selectedProduct.price}
          </span>
        )}
      </div>
    </div>
  )
}

export default Comparison
