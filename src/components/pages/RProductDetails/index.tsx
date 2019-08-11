import React from "react"

import { default as RProductDetailsTemplate } from "../../templates/RProductDetails"

export default class RProductDetails extends React.Component {
  render() {
    return (
      <div className="p-r-product-details">
        <RProductDetailsTemplate
          product={{ id: "1234", name: "Opell", code: "O_1", price: "20000" }}
        />
      </div>
    )
  }
}
