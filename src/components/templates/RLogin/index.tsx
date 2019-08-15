import "./index.css"
import React from "react"
import RLoginForm from "../../organisms/RLoginForm"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core"

interface RLoginProps {
  handleSubmit(userName: string, password: string): void
  formDisabled: boolean
  dialogTitle: string
  dialogDesc: string
  dialogOpen: boolean
  handleClose(): void
}

export default class RLogin extends React.Component<RLoginProps, {}> {
  render() {
    return (
      <div className="t-r-login">
        <div className="container">
          <RLoginForm
            formDisabled={this.props.formDisabled}
            handleSubmit={this.props.handleSubmit}
          />
          <Dialog
            open={this.props.dialogOpen}
            onClose={() => {
              this.props.handleClose()
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>{this.props.dialogTitle}</DialogTitle>
            <DialogContent>
              <DialogContentText>{this.props.dialogDesc}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.props.handleClose()
                }}
                color="primary"
                autoFocus
              >
                Tamam
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    )
  }
}
