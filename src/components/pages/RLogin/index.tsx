import React from "react"
import { connect } from "react-redux"
import { default as RLoginTemplate } from "../../templates/RLogin"
import { ApplicationState } from "../../../store/appInterfaces"
import { doLogin } from "../../../thunk"
import { updateLoginPage } from "../../../redux/actions"
import { withRouter, RouteComponentProps } from "react-router-dom"

class RLogin extends React.Component<
  ReturnType<typeof mapDispatchToProps> &
    ReturnType<typeof mapStateToProps> &
    RouteComponentProps
> {
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
          handleClose={() => {
            this.props.closeModal()
          }}
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
  },
  closeModal: () => {
    dispatch(updateLoginPage({ dialogOpen: false }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RLogin))
