import { createContext, useState } from "react"
import "./App.css"

import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"

export const Context = createContext()

function App() {
  const [searchText, setSearchText] = useState("")
  return (
    <>
      <Context.Provider value={[searchText, setSearchText]}>
        <NavBar />
        <HomePage />
      </Context.Provider>
    </>
  )
}

export default App
