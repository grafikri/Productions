import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { default as RLoginTemplate } from "../../templates/RLogin"
import { ApplicationState } from "../../../store/appInterfaces"

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

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RLogin)
