import React from "react"
import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import RLogin from "./components/pages/RLogin"
import RCategories from "./components/pages/RCategories"
import RCategoryDetails from "./components/pages/RCategoryDetails"
import RProducts from "./components/pages/RProducts"
import RProductDetails from "./components/pages/RProductDetails"
import RProductForm from "./components/pages/RProductForm"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={RLogin} />
        <Route path="/login" component={RLogin} />
        <Route path="/categories" component={RCategories} />
        <Route path="/category/:id" component={RCategoryDetails} />
        <Route path="/products" component={RProducts} />
        <Route path="/product/:id" component={RProductDetails} />
        <Route path="/add/product" component={RProductForm} />
      </Router>
    </div>
  )
}

export default App
