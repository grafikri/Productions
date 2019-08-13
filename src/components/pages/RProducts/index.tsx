import React from "react"

import { Dispatch } from "redux"
import { default as RProductsTemplate } from "../../templates/RProducts"
import { connect } from "react-redux"
import { ApplicationState } from "../../../store/appInterfaces"
import { addNewProduct } from "../../../redux/actions"
import { fetchProducts } from "../../../thunk"

class RProducts extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  componentDidMount() {
    this.props.getProducts()
  }
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

const mapDispatchToProps = (dispatch: any) => ({
  add: (name: string) => {
    dispatch(addNewProduct(name))
  },
  getProducts: () => {
    dispatch(fetchProducts())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RProducts)
