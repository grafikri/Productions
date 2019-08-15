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
import OymakApi from "./services/oymakApi"
import RReLoginDialog from "./components/molecules/RReLoginDialog"

export default class App extends React.Component {
  componentWillMount() {
    /**
     * Uygulama API'sini başlatıyoruz
     */
    new OymakApi()

    /**
     * Local storage üzerinde bir token var ise API'ye işliyoruz
     */
    OymakApi.setToken(
      localStorage.getItem("token") == null
        ? ""
        : localStorage.getItem("token")!
    )
  }
  render() {
    return (
      <div className="App">
        <Router>
          <RReLoginDialog />
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
}
