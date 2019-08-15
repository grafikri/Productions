import React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core"
import { ApplicationState } from "../../../store/appInterfaces"
import { updateApplication } from "../../../redux/actions"
import { connect } from "react-redux"

class RReLoginDialog extends React.Component<
  ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    RouteComponentProps
> {
  render() {
    return (
      <div className="m-r-re-login-dialog">
        <Dialog
          open={this.props.open ? this.props.open : false}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{"Geçersiz oturum anahtarı"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Oturumuz zaman aşımına uğramış olabilir. Yeniden giriş
              yapmalısınız
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.props.closeDialog()
                this.props.history.push("/login")
              }}
              color="primary"
            >
              Tamam
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  open: state.application.forceReLogin
})

const mapDispatchToProps = (dispatch: any) => ({
  closeDialog: () => {
    dispatch(updateApplication({ forceReLogin: false }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RReLoginDialog))
