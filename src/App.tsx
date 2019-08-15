import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import RLogin from "./components/pages/RLogin"
import RCategories from "./components/pages/RCategories"
import RCategoryDetails from "./components/pages/RCategoryDetails"
import RProducts from "./components/pages/RProducts"
import RProductDetails from "./components/pages/RProductDetails"
import RProductForm from "./components/pages/RProductForm"
import OymakApi from "./services/oymakApi"
import RReLoginDialog from "./components/molecules/RReLoginDialog"
import PrivateRoute from "./components/atoms/RPrivateRoute"
import { ApplicationState } from "./store/appInterfaces"
import { appFirstOpen } from "./thunk"

class App extends React.Component<
  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapDispatchToProps>
> {
  componentWillMount() {
    /**
     * Uygulama API'sini başlatıyoruz
     */
    new OymakApi()
  }
  componentDidMount() {
    this.props.appFirstOpen()
  }
  render() {
    return (
      <div className="App">
        <Router>
          <RReLoginDialog />
          <Route exact path="/" component={RLogin} />
          <Route path="/login" component={RLogin} />
          <PrivateRoute path="/categories">
            <RCategories />
          </PrivateRoute>
          <PrivateRoute path="/category/:id">
            <RCategoryDetails />
          </PrivateRoute>
          <PrivateRoute path="/products">
            <RProducts />
          </PrivateRoute>
          <PrivateRoute path="/product/:id">
            <RProductDetails />
          </PrivateRoute>
          <PrivateRoute path="/add/product">
            <RProductForm />
          </PrivateRoute>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({ do: state })

const mapDispatchToProps = (dispatch: any) => ({
  appFirstOpen: () => {
    dispatch(appFirstOpen())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
