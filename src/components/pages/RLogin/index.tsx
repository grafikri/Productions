import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

import { default as RLoginTemplate } from "../../templates/RLogin"

class RLogin extends React.Component<
  ReturnType<typeof mapDispatchToProps>,
  any
> {
  componentDidMount() {}
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

const mapDispatchToProps = (dispatch: Dispatch) => ({})

export default connect(mapDispatchToProps)(RLogin)
