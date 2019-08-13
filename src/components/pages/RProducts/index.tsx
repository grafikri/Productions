import React from "react"
import { default as RProductsTemplate } from "../../templates/RProducts"
import { connect } from "react-redux"
import { ApplicationState } from "../../../store/appInterfaces"
import { addNewProduct } from "../../../redux/actions"
import { fetchProducts } from "../../../thunk"
import { withRouter, RouteComponentProps } from "react-router-dom"

class RProducts extends React.Component<
  ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    RouteComponentProps
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
          handleProductClick={id => {
            this.props.history.push("/product/" + id)
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
)(withRouter(RProducts))
