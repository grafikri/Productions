import "./index.css"
import React from "react"
import RLoginForm from "../../organisms/RLoginForm"

interface RLoginProps {
  handleSubmit(userName: string, password: string): void
}

export default class RLogin extends React.Component<RLoginProps, {}> {
  render() {
    return (
      <div className="t-r-login">
        <div className="container">
          <RLoginForm
            formDisabled={false}
            handleSubmit={this.props.handleSubmit}
          />
        </div>
      </div>
    )
  }
}
