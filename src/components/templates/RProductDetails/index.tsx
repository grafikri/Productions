import React from "react"
import { Typography, Divider, Card, CardContent } from "@material-ui/core"
import CommonLayout from "../../organisms/RCommonLayout"

import { Product, LayoutErrorProps } from "../../../store/appInterfaces"

/**
 * Props değerleri
 */
interface RProductDetailsProps extends LayoutErrorProps {
  product: Product
}

export default class RProductDetails extends React.Component<
  RProductDetailsProps
> {
  render() {
    return (
      <div className="p-r-product-details">
        <CommonLayout
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        >
          <Typography variant="h6" gutterBottom>
            {this.props.product.name}
          </Typography>
        </CommonLayout>
      </div>
    )
  }
}
