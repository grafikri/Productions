import React, { Component } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

class PrivateRoute extends React.Component<{
  path: string
}> {
  render() {
    return (
      <Route
        path={this.props.path}
        render={props => {
          return 100 == 100 ? (
            <Redirect to={{ pathname: "/login" }} />
          ) : (
            this.props.children
          )
        }}
      />
    )
  }
}

export default PrivateRoute
