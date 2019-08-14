//import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import { LayoutErrorProps } from "../../../store/appInterfaces"
import RAddNewProductForm from "../../molecules/RAddNewProductForm"
/**
 * Props değerleri
 */
interface RProductFormProps extends LayoutErrorProps {}

export default class RProductForm extends React.Component<
  RProductFormProps,
  any
> {
  render() {
    return (
      <div className="t-r-product-form">
        <CommonLayout loading={false} errorMessage={""}>
          <RAddNewProductForm
            formSaving={false}
            categories={[
              { value: "O_1234", label: "Opel" },
              { value: "M_1234", label: "Mazda" }
            ]}
            handleSubmit={form => {
              console.log("form: ", form)
            }}
          />
        </CommonLayout>
      </div>
    )
  }
}
