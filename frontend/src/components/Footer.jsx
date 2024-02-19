const Footer = () => {
  return (
    <footer className="m-4 mt-8 bg-white rounded-lg shadow">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="http://localhost:5173/home" className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
            <img src="https://i.ibb.co/j5h01VG/spendsmart-logo.png" alt="SpendSmart Logo" className="h-16" border="0" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">SpendSmart</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2024{" "}
          <a href="http://localhost:5173/home" className="hover:underline">
            SpendSmart
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
