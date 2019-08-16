import "./index.css"
import React from "react"
import { Category } from "../../../store/appInterfaces"
import { TextField, MenuItem, Button, Grid } from "@material-ui/core"

export default class RCatergoryFilter extends React.Component<{
  list: Category[]
  handleSubmit(name: string, code: string): void
  handleReset(): void
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
            <Grid container spacing={1}>
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
                  spacing={1}
                >
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      size="small"
                      disabled={
                        this.state.name != "" || this.state.code != ""
                          ? false
                          : true
                      }
                      onClick={() => {
                        this.props.handleSubmit(
                          this.state.name,
                          this.state.code
                        )
                        this.setState({
                          resetButtonDisabled: false
                        })
                      }}
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
                      size="small"
                      disabled={this.state.resetButtonDisabled}
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={() => {
                        this.props.handleReset()
                        this.setState({
                          resetButtonDisabled: true,
                          name: "",
                          code: ""
                        })
                      }}
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
