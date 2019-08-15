import React from "react"
import { connect } from "react-redux"

import { default as RProductFormTemplate } from "../../templates/RProductForm"
import { ApplicationState } from "../../../store/appInterfaces"
import { Form } from "../../molecules/RAddNewProductForm"
import { addProduct, fetchCategories } from "../../../thunk"
import { updatePropductFormPage } from "../../../redux/actions"

class RProductForm extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  componentDidMount() {
    /**
     * Eğer uygulama üzerinde kategori yok ise sunucudan kategoleri isteyerek deva  ediyoruz
     */
    if (this.props.productCategories.length == 0) {
      this.props.getCategories()
    }
  }
  render() {
    return (
      <div className="p-r-product-form">
        <RProductFormTemplate
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
          categories={this.props.productCategories.map(item => ({
            value: item.id,
            label: item.name
          }))}
          dialogOpen={
            this.props.productFormProps.dialogOpen
              ? this.props.productFormProps.dialogOpen
              : false
          }
          formSaving={
            this.props.productFormProps.formSaving
              ? this.props.productFormProps.formSaving
              : false
          }
          dialogTitle={
            this.props.productFormProps.dialogTitle
              ? this.props.productFormProps.dialogTitle
              : ""
          }
          dialogDesc={
            this.props.productFormProps.dialogDesc
              ? this.props.productFormProps.dialogDesc
              : ""
          }
          handleSubmit={form => {
            this.props.addNewProduct(form)
          }}
          handleClose={() => {
            this.props.closeModal()
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  productFormProps: state.pageProductForm,
  productCategories: state.categories,
  loading: state.application.layoutLoading,
  errorMessage: state.application.layoutErrorMessage
})

const mapDispatchToProps = (dispatch: any) => ({
  addNewProduct: (form: Form) => {
    dispatch(
      addProduct(form.name, form.date, form.time, form.price, form.categoryId)
    )
  },
  closeModal: () => {
    dispatch(
      updatePropductFormPage({
        dialogOpen: false
      })
    )
  },
  getCategories: () => {
    dispatch(fetchCategories())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RProductForm)
