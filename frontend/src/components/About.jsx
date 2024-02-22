const About = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-4/5 px-4 py-8 mx-auto">
      <h1 className="mb-4 text-3xl font-semibold text-gray-800">About SpendSmart</h1>
      <div className="flex flex-wrap ">
        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              To empower individuals to take control of their finances and achieve financial wellness through smart
              budgeting and spending habits.
            </p>
          </div>
        </div>
        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Our Vision</h2>
            <p className="text-gray-600">
              To create a world where everyone has the knowledge and tools to make informed financial decisions and
              secure their financial future.
            </p>
          </div>
        </div>
        <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Our Values</h2>
            <ul className="pl-6 text-gray-600 list-disc">
              <li>Financial Empowerment</li>
              <li>Educational Excellence</li>
              <li>User-Centric Design</li>
              <li>Continuous Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
