import React from "react"
import logo from "./logo.svg"
import "./App.css"

//import RLogin from "./components/pages/RLogin"
import RCategories from "./components/pages/RCategories"

const App: React.FC = () => {
  return (
    <div className="App">
      <RCategories />
    </div>
  )
}

export default App
