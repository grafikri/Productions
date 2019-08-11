import "./index.css"
import React from "react"
import {
  TextField,
  Button,
  FormControl,
  Paper,
  InputBase,
  CircularProgress
} from "@material-ui/core"

/**
 * State değerleri
 */
interface RAddSingleItemStates {
  name: string
  buttonDisabled: boolean
}

/**
 * Props değerler. Kategori adı girildikten sonra burada değer döndürülür
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
    buttonDisabled: true
  }

  render() {
    return (
      <div className="m-r-category">
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
                  <InputBase
                    placeholder={this.props.placeHolder}
                    value={this.state.name}
                    inputProps={{ "aria-label": "naked" }}
                    onChange={event => {
                      this.setState({
                        name: event.target.value,
                        buttonDisabled: event.target.value.trim() === ""
                      })
                    }}
                  />
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
