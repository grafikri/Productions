import "./index.css"
import React from "react"
import {
  TextField,
  FormControl,
  MenuItem,
  Button,
  Paper
} from "@material-ui/core"

/**
 * State değerleri
 */
interface RAddSingleItemStates {
  name: string
  date: string
  time: string
  price: string
  caregoryCode: string
  formDisabled: boolean
  buttonDisabled: boolean
}

/**
 * Props değerleri
 */
interface RAddSingleItemProps {
  handleSubmit(name: string): void
  placeHolder: string
}

export default class RAddSingleItem extends React.Component<
  RAddSingleItemProps,
  RAddSingleItemStates
> {
  state = {
    name: "",
    date: "",
    time: "",
    price: "",
    caregoryCode: "",
    formDisabled: false,
    buttonDisabled: true
  }

  render() {
    const dense = {}
    return (
      <div className="m-r-add-new-product-form">
        <Paper>
          <form
            onSubmit={e => {
              e.preventDefault()
              this.props.handleSubmit(this.state.name)
              this.setState({ name: "", buttonDisabled: true })
            }}
          >
            <div className="container">
              <div className="left">
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    label="Ürün adı"
                    placeholder="Ürün adı"
                    margin="normal"
                    value={this.state.name}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={event => {
                      this.setState({
                        name: event.target.value
                      })
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="Fiyat"
                    placeholder="Fiyat"
                    margin="normal"
                    type="number"
                    value={this.state.price}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={event => {
                      this.setState({
                        price: event.target.value
                      })
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="Son geçerlilik tarihi"
                    placeholder="Son geçerlilik tarihi"
                    margin="normal"
                    type="date"
                    value={this.state.date}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={event => {
                      this.setState({
                        date: event.target.value
                      })
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="Son geçerlilik saati"
                    placeholder="Son geçerlilik saati"
                    margin="normal"
                    type="time"
                    value={this.state.time}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={event => {
                      this.setState({
                        time: event.target.value
                      })
                    }}
                  />
                  <TextField
                    select
                    label="Ürün kategorisi seçin"
                    placeholder="Ürün kategorisi seçin"
                    value={this.state.caregoryCode}
                    InputLabelProps={{
                      shrink: true
                    }}
                    onChange={event => {
                      this.setState({
                        caregoryCode: event.target.value
                      })
                    }}
                    margin="normal"
                    variant="outlined"
                  >
                    {[{ value: "O_1234", label: "Opel" }].map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </div>
              <div className="right">
                <Button
                  disabled={this.state.buttonDisabled}
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Ekle
                </Button>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}
