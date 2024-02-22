import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <div className="w-4/5 min-h-screen px-4 py-4 mx-auto text-center">
        <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold text-gray-900">Welcome to <span className="text-sky-700">SpendSmart</span></h1>
            <p className="mt-2 text-lg text-gray-600">
              Simplify your financial management and make smarter spending decisions.
            </p>
          </div>
          <div className="py-6">
            <h2 className="text-2xl font-semibold text-gray-900">Features:</h2>
            <ul className="my-4">
              <li className="mb-2">
                <span className="font-semibold text-sky-700">Smart Comparisons:</span> Compare the cost of products to
                make informed decisions.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-900">Coming soon:</h2>
            <ul className="mt-4">
              <li className="mb-2">
                <span className="font-semibold text-sky-700">Budgeting:</span> Create and track your budgets easily.
              </li>
              <li className="mb-2">
                <span className="font-semibold text-sky-700">Expense Tracking:</span> Monitor your spending habits.
              </li>
              <li className="mb-2">
                <span className="font-semibold text-sky-700">Savings Goals:</span> Set and achieve your financial goals.
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-sky-700 hover:bg-sky-800">
              Learn More
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
