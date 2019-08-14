import React from "react"
import { connect } from "react-redux"
import { default as RProductFormTemplate } from "../../templates/RProductForm"
class RProductForm extends React.Component {
  render() {
    return (
      <div className="p-r-product-form">
        <RProductFormTemplate
          formSaving={false}
          formSaveResult={true}
          dialogTitle="Kayıt başarılı"
          dialogDesc="Ürün sunucuya kayıt edildi. Aşağıdaki butona dokunduğunuzda ürün sayfasına yönlendirileceksiniz."
          dialogOpen={false}
          handleSubmit={form => {
            console.log("form: ", form)
          }}
        />
      </div>
    )
  }
}

export default RProductForm
