import React from "react"
import { connect } from "react-redux"

import { default as RProductFormTemplate } from "../../templates/RProductForm"
import { ApplicationState } from "../../../store/appInterfaces"
import { Form } from "../../molecules/RAddNewProductForm"
import { addProduct } from "../../../thunk"
import { updatePropductFormPage } from "../../../redux/actions"

class RProductForm extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  render() {
    return (
      <div className="p-r-product-form">
        <RProductFormTemplate
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
  productCategories: state.categories
})

const mapDispatchToProps = (dispatch: any) => ({
  addNewProduct: (form: Form) => {
    dispatch(addProduct(form.name, form.date, form.price, form.caregoryCode))
  },
  closeModal: () => {
    dispatch(
      updatePropductFormPage({
        dialogOpen: false
      })
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RProductForm)
