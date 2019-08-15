import React, { Component } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { ApplicationState } from "../../../store/appInterfaces"

class PrivateRoute extends React.Component<
  {
    path: string
  } & ReturnType<typeof mapStateToProps>
> {
  render() {
    return (
      <Route
        path={this.props.path}
        render={props => {
          return this.props.isLogin ? (
            this.props.children
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        }}
      />
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  isLogin: state.auth.token == "" ? false : true
})

export default connect(mapStateToProps)(PrivateRoute)
