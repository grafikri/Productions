import "./index.css"
import React from "react"
import { doLogOut } from "../../../thunk"
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
import { withRouter, RouteComponentProps } from "react-router-dom"
import { connect } from "react-redux"

class RHeader extends React.Component<
  ReturnType<typeof mapDispatchToProps> & RouteComponentProps
> {
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

const mapStateToProps = (state: ApplicationState) => state

const mapDispatchToProps = (dispatch: any) => ({
  logOut: (router: RouteComponentProps) => {
    dispatch(doLogOut(router))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RHeader))
