import React from "react"

import { Dispatch } from "redux"
import { default as RProductsTemplate } from "../../templates/RProducts"
import { connect } from "react-redux"
import { ApplicationState } from "../../../store/appInterfaces"
import { addNewProduct } from "../../../redux/actions"

class RProducts extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  render() {
    return (
      <div>
        <RProductsTemplate
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
          products={this.props.products}
          handleSubmit={name => {
            this.props.add(name)
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products,
  loading: state.application.layoutLoading,
  errorMessage: state.application.layoutErrorMessage
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: (name: string) => {
    dispatch(addNewProduct(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RProducts)
