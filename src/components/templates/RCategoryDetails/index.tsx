import React from "react"
import { Typography, Divider, Card, CardContent } from "@material-ui/core"
import CommonLayout from "../../organisms/RCommonLayout"

import {
  Category,
  Product,
  LayoutErrorProps
} from "../../../store/appInterfaces"
import RProductList from "../../organisms/RProductList"

/**
 * Props değerleri
 */
interface RCategoryDetailsProps extends LayoutErrorProps {
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
        <CommonLayout
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        >
          <Typography variant="h6" gutterBottom>
            {this.props.category.name} / {this.props.category.code}{" "}
            {this.props.products.length == 0
              ? "kategorisinde ürün bulunmuyor"
              : "kategorisindeki ürünler"}
          </Typography>
          <Divider />
          {this.props.products.length == 0 ? (
            ""
          ) : (
            <div className="products">
              <RProductList list={this.props.products} />
            </div>
          )}
        </CommonLayout>
      </div>
    )
  }
}
