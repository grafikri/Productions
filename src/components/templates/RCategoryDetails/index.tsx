import React from "react"
import { Typography, Divider, Card, CardContent } from "@material-ui/core"
import CommonLayout from "../../organisms/RCommonLayout"

import { CategoryInfo } from "../RCategories"

/**
 * Props değerleri
 */
interface RCategoryDetailsProps {
  categoryInfo: CategoryInfo
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
            {this.props.categoryInfo.name} / {this.props.categoryInfo.code}
          </Typography>
          <Divider />
          Ürünler
        </CommonLayout>
      </div>
    )
  }
}
