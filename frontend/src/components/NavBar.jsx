
import { NavLink, useNavigate } from "react-router-dom"
import {  useState } from "react"
// import {useContext} from  'react'



const NavBar = () => {
  // const [searchText, setSearchText] = useContext(SearchContext)
 const [searchText, setSearchText] = useState("")

  const handleOnchange = (value) => {
    setSearchText(value.toLowerCase())
    console.log(value.toLowerCase())
  }
  const navigate = useNavigate()
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!searchText.trim()) return
    console.log(searchText);
    navigate(`/search?query=${encodeURIComponent(searchText)}`)
  }

  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <NavLink to={`/home`} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://i.ibb.co/j5h01VG/spendsmart-logo.png" alt="SpendSmart Logo" className="h-16" border="0" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">SpendSmart</span>
          </NavLink>

          <div className="w-1/3 md:order-1">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  id="search-navbar"
                  onChange={(e) => handleOnchange(e.target.value)}
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-sky-500 focus:border-sk-500"
                  placeholder="Search item to compare..."
                />
              </form>
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-search"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-sky-500 focus:border-sky-500 "
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to={`/home`}
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(3,105,161)" : "",
                  })}
                  className="block px-3 py-2 text-gray-900 rounded bg-sky-700 md:bg-transparent md:hover:text-sky-700 md:p-0 ">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/about`}
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(3,105,161)" : "",
                  })}
                  className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0 ">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/services`}
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(3,105,161)" : "",
                  })}
                  className={`block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0 `}>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/contact`}
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(3,105,161)" : "",
                  })}
                  className={`block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 md:p-0 `}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
