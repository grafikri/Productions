import React from "react"

import { default as RCategoriesTemplate } from "../../templates/RCategories"

export default class RCategories extends React.Component {
  render() {
    return (
      <div className="p-r-categories">
        <RCategoriesTemplate
          handleSubmit={name => {
            console.log("name: ", name)
          }}
          list={[
            { id: "0001", name: "Mazda", code: "M1" },
            { id: "0002", name: "Opel", code: "O1" },
            { id: "0003", name: "Opel", code: "O1" },
            { id: "0004", name: "Opel", code: "O1" },
            { id: "0005", name: "Opel", code: "O1" },
            { id: "0006", name: "Opel", code: "O1" },
            { id: "0007", name: "Opel", code: "O1" },
            { id: "0008", name: "Opel", code: "O1" },
            { id: "0009", name: "Opel", code: "O1" },
            { id: "00010", name: "Opel", code: "O1" }
          ]}
        />
      </div>
    )
  }
}
