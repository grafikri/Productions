import "./index.css"
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
  handleProductClick(id: string): void
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
            {this.props.products.length == 0 ? "" : "kategorisindeki ürünler"}
          </Typography>
          <Divider />
          <div className="products">
            {this.props.products.length == 0 ? (
              <Typography variant="h6" gutterBottom>
                Bu kategoride ürün bulunmuyor.
              </Typography>
            ) : (
              <RProductList
                handleClick={this.props.handleProductClick}
                list={this.props.products}
              />
            )}
          </div>
        </CommonLayout>
      </div>
    )
  }
}
