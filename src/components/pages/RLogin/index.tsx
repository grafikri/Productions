import React from "react"
import { default as RLoginTemplate } from "../../templates/RLogin"

export default class RLogin extends React.Component {
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
