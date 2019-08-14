import React from "react"
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core"
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
          <Typography variant="h5" gutterBottom>
            Ürün detayları
          </Typography>
          <Divider />
          <List>
            <ListItem>
              <ListItemText
                primary={this.props.product.name}
                secondary="Ürün adı"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={this.props.product.code}
                secondary="Code"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={this.props.product.price}
                secondary="Fiyat"
              />
            </ListItem>
          </List>
        </CommonLayout>
      </div>
    )
  }
}
