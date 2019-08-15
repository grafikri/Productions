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
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
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
