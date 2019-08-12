import React from "react"

import { default as RProductsTemplate } from "../../templates/RProducts"

export default class RProducts extends React.Component {
  render() {
    return (
      <div>
        <RProductsTemplate
          list={[{ name: "BMW1", code: "B_1", id: "1234", price: "10" }]}
          handleSubmit={data => {
            console.log("products: ", data)
          }}
        />
      </div>
    )
  }
}
