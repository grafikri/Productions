import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { default as RLoginTemplate } from "../../templates/RLogin"
import { ApplicationState } from "../../../store/appInterfaces"
import { doLogin } from "../../../thunk"

class RLogin extends React.Component<
  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>
> {
  componentDidMount() {}
  render() {
    return (
      <div>
        <RLoginTemplate
          dialogDesc={
            this.props.login.dialogDesc ? this.props.login.dialogDesc : ""
          }
          dialogTitle={
            this.props.login.dialogTitle ? this.props.login.dialogTitle : ""
          }
          dialogOpen={
            this.props.login.dialogOpen ? this.props.login.dialogOpen : false
          }
          formDisabled={
            this.props.login.formDisabled
              ? this.props.login.formDisabled
              : false
          }
          handleSubmit={(userName, password) => {
            this.props.doLogin(userName, password)
          }}
          handleClose={() => {}}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  login: state.pageLogin
})

const mapDispatchToProps = (dispatch: any) => ({
  doLogin: (userName: string, password: string) => {
    dispatch(doLogin(userName, password))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RLogin)
