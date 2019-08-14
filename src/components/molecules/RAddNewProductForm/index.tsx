import "./index.css"
import React from "react"
import {
  TextField,
  FormControl,
  MenuItem,
  Button,
  CircularProgress
} from "@material-ui/core"

/**
 * State değerleri
 */
interface RAddNewProductFormStates {
  name: string
  date: string
  time: string
  price: string
  caregoryCode: string
  formSaving: boolean
  buttonDisabled: boolean
}

interface Categoriy {
  value: string
  label: string
}

/**
 * Props değerleri
 */
interface RAddNewProductFormProps {
  handleSubmit(form: Form): void
  categories: Categoriy[]
  formSaving: boolean
}

/**
 * Submit edilecek formdur
 */
export interface Form {
  name: string
  date: string
  time: string
  price: string
  caregoryCode: string
}

export default class RAddSingleItem extends React.Component<
  RAddNewProductFormProps,
  RAddNewProductFormStates
> {
  state = {
    name: "",
    date: "",
    time: "",
    price: "",
    caregoryCode: "",
    formSaving: this.props.formSaving,
    buttonDisabled: true
  }

  render() {
    const form: Form = { ...this.state }

    return (
      <div className="m-r-add-new-product-form">
        <form
          onSubmit={e => {
            e.preventDefault()
            this.props.handleSubmit(form)
            this.setState({ formSaving: true })
          }}
        >
          <div className="container">
            <div className="left">
              <FormControl fullWidth>
                <TextField
                  disabled={this.state.formSaving}
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
                  disabled={this.state.formSaving}
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
                  disabled={this.state.formSaving}
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
                  disabled={this.state.formSaving}
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
                  disabled={this.state.formSaving}
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
                  {this.props.categories.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
            </div>
            <div className="right">
              {this.state.formSaving ? (
                <CircularProgress size={24} />
              ) : (
                <Button
                  disabled={
                    this.state.name == "" ||
                    this.state.date == "" ||
                    this.state.time == "" ||
                    this.state.price == "" ||
                    this.state.caregoryCode == ""
                      ? true
                      : false
                  }
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Ekle
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    )
  }
}
