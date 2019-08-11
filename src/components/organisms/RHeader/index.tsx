import "./index.css"
import React from "react"
import { AppBar, Toolbar, Button } from "@material-ui/core"
import { withRouter } from "react-router-dom"

class RHeader extends React.Component<any, any> {
  render() {
    return (
      <div className="o-r-header">
        <AppBar position="fixed">
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => this.props.history.push("/products")}
            >
              Ürünler
            </Button>
            <Button
              color="inherit"
              onClick={() => this.props.history.push("/categories")}
            >
              Kategoriler
            </Button>
            <div className="space" />
            <Button color="inherit">Çıkış</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withRouter(RHeader)
