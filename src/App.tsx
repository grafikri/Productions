import React from "react"
import logo from "./logo.svg"
import "./App.css"

import RLogin from "./components/templates/RLogin"

const App: React.FC = () => {
  return (
    <div className="App">
      <RLogin
        handleSubmit={(userName, password) => {
          console.log("data: ", userName, password)
        }}
      />
    </div>
  )
}

export default App
