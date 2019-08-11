import React from "react"

import { default as RCategoryDetailsTemplate } from "../../templates/RCategoryDetails"

export default class RCategories extends React.Component {
  render() {
    return (
      <div className="p-r-category-details">
        <RCategoryDetailsTemplate
          category={{ name: "Mazda", code: "O_1", id: "123" }}
        />
      </div>
    )
  }
}
