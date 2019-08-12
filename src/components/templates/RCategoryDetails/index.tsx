import React from "react"
import { Typography, Divider, Card, CardContent } from "@material-ui/core"
import CommonLayout from "../../organisms/RCommonLayout"

import { Category, Product } from "../../../store/appInterfaces"
import RProductList from "../../organisms/RProductList"

/**
 * Props değerleri
 */
interface RCategoryDetailsProps {
  category: Category
  products: Product[]
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
          <RProductList list={this.props.products} />
        </CommonLayout>
      </div>
    )
  }
}
