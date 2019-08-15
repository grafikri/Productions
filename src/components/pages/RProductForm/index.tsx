import React from "react"
import { connect } from "react-redux"

import { default as RProductFormTemplate } from "../../templates/RProductForm"
import {
  ApplicationState,
  RProductFormProps
} from "../../../store/appInterfaces"
import { Form } from "../../molecules/RAddNewProductForm"
import { addProduct } from "../../../thunk"
import { updatePropductFormPage } from "../../../redux/actions"

class RProductForm extends React.Component<
  RProductFormProps & ReturnType<typeof mapDispatchToProps>
> {
  render() {
    return (
      <div className="p-r-product-form">
        <RProductFormTemplate
          dialogOpen={this.props.dialogOpen ? this.props.dialogOpen : false}
          formSaving={this.props.formSaving ? this.props.formSaving : false}
          dialogTitle={this.props.dialogTitle ? this.props.dialogTitle : ""}
          dialogDesc={this.props.dialogDesc ? this.props.dialogDesc : ""}
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

const mapStateToProps = (state: ApplicationState) => state.pageProductForm

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
