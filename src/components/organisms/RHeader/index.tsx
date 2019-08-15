import "./index.css"
import React from "react"
import {
  AppBar,
  Toolbar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core"
import { withRouter } from "react-router-dom"

class RHeader extends React.Component<any, any> {
  state = {
    dialogOpen: false
  }

  render() {
    return (
      <div className="o-r-header">
        <AppBar position="fixed">
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => this.props.history.push("/categories")}
            >
              Kategoriler
            </Button>
            <Button
              color="inherit"
              onClick={() => this.props.history.push("/products")}
            >
              Ürünler
            </Button>
            <div className="space" />
            <Button
              color="inherit"
              onClick={() => {
                this.setState({
                  dialogOpen: true
                })
              }}
            >
              Çıkış
            </Button>
          </Toolbar>
        </AppBar>

        <Dialog
          open={this.state.dialogOpen}
          onClose={() => {
            this.setState({
              dialogOpen: false
            })
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogTitle>
              {"Çıkış yapmak istediğinize emin misiniz?"}
            </DialogTitle>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                this.setState({
                  dialogOpen: false
                })
              }}
              color="primary"
            >
              Vazgeç
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  dialogOpen: false
                })
              }}
              color="primary"
            >
              Evet
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withRouter(RHeader)
