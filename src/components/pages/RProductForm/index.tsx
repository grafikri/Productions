import React from "react"
import { connect } from "react-redux"
import { default as RProductFormTemplate } from "../../templates/RProductForm"
import {
  ApplicationState,
  ConnectionSituations
} from "../../../store/appInterfaces"

class RProductForm extends React.Component<ReturnType<typeof mapStateToProps>> {
  render() {
    return (
      <div className="p-r-product-form">
        <RProductFormTemplate
          formSaving={this.props.formSaving}
          dialogTitle={this.props.dialogTitle()}
          dialogDesc={this.props.dialogDesc()}
          dialogOpen={this.props.dialogOpen}
          handleSubmit={form => {
            console.log("form: ", form)
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  formSaveResult:
    state.application.connectionStatus == ConnectionSituations.DONE,
  formSaving:
    state.application.connectionStatus == ConnectionSituations.RUNNING
      ? true
      : false,
  dialogTitle: (): string => {
    switch (state.application.connectionStatus) {
      case ConnectionSituations.DONE:
        return "Kayıt başarılı"
      case ConnectionSituations.FAIL:
        return "Başarısız"
      case ConnectionSituations.RUNNING:
        return ""
      default:
        return "-"
    }
  },
  dialogDesc: (): string => {
    switch (state.application.connectionStatus) {
      case ConnectionSituations.DONE:
        return "Ürün sunucuya kayıt edildi. Aşağıdaki butona dokunduğunuzda ürün sayfasına yönlendirileceksiniz."
      case ConnectionSituations.FAIL:
        return state.application.connectionErrorMessage
      case ConnectionSituations.RUNNING:
        return ""
      default:
        return "-"
    }
  },
  dialogOpen: state.application.connectionStatus != ConnectionSituations.RUNNING
})

export default connect(mapStateToProps)(RProductForm)
