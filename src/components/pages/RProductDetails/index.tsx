import React from "react"

import { default as RProductDetailsTemplate } from "../../templates/RProductDetails"
import { ApplicationState } from "../../../store/appInterfaces"
import { connect } from "react-redux"
import { fetchProductCard } from "../../../thunk"

class RProductDetails extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
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

const mapDispatchToProps = (dispatch: any) => ({
  getProductDetails: (id: string) => {
    dispatch(fetchProductCard(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RProductDetails)
