import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="m-4 mt-8 bg-white rounded-lg shadow">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink to={"/home"} className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
            <img src="https://i.ibb.co/j5h01VG/spendsmart-logo.png" alt="SpendSmart Logo" className="h-16" border="0" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">SpendSmart</span>
          </NavLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
            <li>
              <NavLink to={`/about`} className="hover:underline me-4 md:me-6">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to={`/services`} className="hover:underline me-4 md:me-6">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={`/contact`} className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2024{" "}
          <NavLink to={`/home`} className="hover:underline">
            SpendSmart
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
