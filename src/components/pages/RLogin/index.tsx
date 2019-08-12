import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import OymakApi from "../../../services/oymakApi"

import { default as RLoginTemplate } from "../../templates/RLogin"

class RLogin extends React.Component<
  ReturnType<typeof mapDispatchToProps>,
  any
> {
  componentDidMount() {
    OymakApi.login("serhan.coskun", "Dev9156.")
      .then(response => {
        console.log("success: ", response)
      })
      .catch(function(error) {
        console.log("error: ", error)
      })
  }
  render() {
    return (
      <div>
        <RLoginTemplate
          handleSubmit={(userName, password) => {
            console.log("data: ", userName, password)
          }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllFiles: (): void => {
    setTimeout(() => {
      console.log("TimeOut complate")
    }, 1000)
  }
})

export default connect(mapDispatchToProps)(RLogin)
