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

class RReLoginDialog extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div className="m-r-re-login-dialog">
        <Dialog
          open={true}
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
            <Button onClick={() => {}} color="primary">
              Tamam
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withRouter(RReLoginDialog)
