import "./index.css"
import React from "react"
import { Category } from "../../../store/appInterfaces"
import {
  TextField,
  MenuItem,
  Button,
  FormGroup,
  FormControl,
  Grid
} from "@material-ui/core"

export default class RCatergoryFilter extends React.Component<{
  list: Category[]
}> {
  state = {
    name: "",
    code: "",
    resetButtonDisabled: true
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
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
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
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
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
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ height: "100%", margin: "0" }}
                  spacing={4}
                >
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      disabled={
                        this.state.name != "" || this.state.code != ""
                          ? false
                          : true
                      }
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Filtrele
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      disabled={this.state.resetButtonDisabled}
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Sıfırla
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    )
  }
}
