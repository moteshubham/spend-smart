import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import ProductPage from "./components/ProductPage"
import Footer from "./components/Footer"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Search from "./components/Search"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage></ProductPage>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
