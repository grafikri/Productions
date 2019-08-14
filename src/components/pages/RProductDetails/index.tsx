import React from "react"

import { default as RProductDetailsTemplate } from "../../templates/RProductDetails"
import { ApplicationState } from "../../../store/appInterfaces"
import { connect } from "react-redux"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { fetchProductCard } from "../../../thunk"

class RProductDetails extends React.Component<
  ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    RouteComponentProps
> {
  componentDidMount() {
    const id = (this.props.match.params as any).id as string
  }
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
)(withRouter(RProductDetails))
