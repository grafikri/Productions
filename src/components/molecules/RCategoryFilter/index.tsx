import "./index.css"
import React from "react"
import { Category } from "../../../store/appInterfaces"
import { TextField, MenuItem } from "@material-ui/core"

export default class RCatergoryFilter extends React.Component<{
  list: Category[]
}> {
  state = {
    name: "",
    code: ""
  }

  render() {
    return (
      <div className="t-r-category-filter">
        <form
          onSubmit={e => {
            e.preventDefault()
          }}
        >
          <div className="form-container">
            <TextField
              select
              label="Kategori"
              placeholder="Kategori"
              value={this.state.name}
              InputLabelProps={{
                shrink: true
              }}
              onChange={event => {
                this.setState({
                  name: event.target.value
                })
              }}
              margin="normal"
              variant="outlined"
            >
              {this.props.list.map(option => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Kod"
              placeholder="Kod"
              value={this.state.code}
              InputLabelProps={{
                shrink: true
              }}
              onChange={event => {
                this.setState({
                  code: event.target.value
                })
              }}
              margin="normal"
              variant="outlined"
            >
              {this.props.list.map(option => (
                <MenuItem key={option.id} value={option.code}>
                  {option.code}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </form>
      </div>
    )
  }
}
