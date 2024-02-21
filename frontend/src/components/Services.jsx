const Services = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-4/5 px-4 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-semibold text-gray-800">Services Offered</h1>

      <div className="flex flex-wrap ">
        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Budget Management</h2>
            <p className="text-gray-600">
              Effortlessly create and manage budgets for various expenses and savings goals.
            </p>
          </div>
        </div>

        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Expense Tracking</h2>
            <p className="text-gray-600">
              Track and categorize expenses to gain insights into spending habits and areas for improvement.
            </p>
          </div>
        </div>

        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Savings Goals</h2>
            <p className="text-gray-600">
              Set and track savings goals to achieve financial milestones and secure your future.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
