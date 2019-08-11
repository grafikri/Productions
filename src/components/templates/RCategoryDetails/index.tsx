import React from "react"
import { Typography, Divider, Card, CardContent } from "@material-ui/core"
import CommonLayout from "../../organisms/RCommonLayout"

import { Category } from "../../../store/appInterfaces"

/**
 * Props değerleri
 */
interface RCategoryDetailsProps {
  category: Category
}

export default class RCategoryDetails extends React.Component<
  RCategoryDetailsProps,
  any
> {
  render() {
    return (
      <div className="p-r-category-details">
        <CommonLayout>
          <Typography variant="h6" gutterBottom>
            {this.props.category.name} / {this.props.category.code}
          </Typography>
          <Divider />
          Ürünler
        </CommonLayout>
      </div>
    )
  }
}
