import "./index.css"
import React from "react"
import {
  TextField,
  Button,
  FormControl,
  CircularProgress
} from "@material-ui/core"

/**
 * State değerleri
 */
export interface RLoginFormState {
  buttonDisabled: boolean
  userName: string
  password: string
}

/**
 * Props değerleri
 */
export interface RLoginFormProps {
  formDisabled?: boolean
  handleSubmit(userName: string, password: string): void
}

export default class RLoginForm extends React.Component<
  RLoginFormProps,
  RLoginFormState
> {
  state: RLoginFormState = {
    buttonDisabled: true,
    userName: "",
    password: ""
  }

  render() {
    return (
      <div className="m-r-login-form">
        <form noValidate autoComplete="off">
          <div className="section">
            <FormControl fullWidth>
              <TextField
                disabled={this.props.formDisabled}
                onChange={event => {
                  this.setState({
                    userName: event.target.value.trim(),
                    buttonDisabled:
                      event.target.value.trim() === "" ||
                      this.state.password === ""
                  })
                }}
                label="Kullanıcı adı"
                variant="outlined"
              />
            </FormControl>
          </div>
          <div className="section">
            <FormControl fullWidth>
              <TextField
                disabled={this.props.formDisabled}
                onChange={event => {
                  this.setState({
                    password: event.target.value.trim(),
                    buttonDisabled:
                      event.target.value.trim() === "" ||
                      this.state.userName === ""
                  })
                }}
                label="Şifre"
                type="password"
                variant="outlined"
              />
            </FormControl>
          </div>
          <div className="section">
            {this.props.formDisabled ? (
              <CircularProgress size={24} />
            ) : (
              <Button
                disabled={this.state.buttonDisabled}
                variant="contained"
                color="primary"
                onClick={() => {
                  this.props.handleSubmit(
                    this.state.userName,
                    this.state.password
                  )
                }}
              >
                Giriş
              </Button>
            )}
          </div>
        </form>
      </div>
    )
  }
}
