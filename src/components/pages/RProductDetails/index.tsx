import React from "react"

import { default as RProductDetailsTemplate } from "../../templates/RProductDetails"
import { ApplicationState } from "../../../store/appInterfaces"
import { connect } from "react-redux"

class RProductDetails extends React.Component<
  ReturnType<typeof mapStateToProps>
> {
  render() {
    return (
      <div className="p-r-product-details">
        <RProductDetailsTemplate product={this.props.product} />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  product: state.product
})

export default connect(mapStateToProps)(RProductDetails)
