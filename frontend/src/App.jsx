import { createContext, useState } from "react"
import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import ProductPage from "./components/ProductPage"
import Footer from "./components/Footer"

export const SearchContext = createContext()

function App() {
  const [searchText, setSearchText] = useState("")
  return (
    <div className="App">
      <SearchContext.Provider value={[searchText, setSearchText]}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage></ProductPage>} />
        </Routes>
      </SearchContext.Provider>
      <Footer/>
    </div>
  )
}

export default App
