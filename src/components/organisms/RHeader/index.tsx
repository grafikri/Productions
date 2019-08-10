import "./index.css"
import React from "react"
import { AppBar, Toolbar, Button } from "@material-ui/core"

export default class RHeader extends React.Component {
  render() {
    return (
      <div className="o-r-header">
        <AppBar position="fixed">
          <Toolbar>
            <Button color="inherit">Ürünler</Button>
            <Button color="inherit">Kategoriler</Button>
            <div className="space" />
            <Button color="inherit">Çıkış</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
