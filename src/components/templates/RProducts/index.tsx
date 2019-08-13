import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import RAddSingleItem from "../../molecules/RAddSingleItem"
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@material-ui/core"
import { Product, LayoutErrorProps } from "../../../store/appInterfaces"
import RProductsList from "../../organisms/RProductList"

/**
 * Props değerleri
 */
interface ProductsProps extends LayoutErrorProps {
  products: Product[]
  handleSubmit(name: string): void
}

export default class RProducts extends React.Component<ProductsProps, any> {
  render() {
    return (
      <div className="t-r-products">
        <CommonLayout
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        >
          <div className="container">
            <div className="formInput">
              <RAddSingleItem
                handleSubmit={this.props.handleSubmit}
                placeHolder="Bir ürün adı girin"
              />
            </div>
            <div className="products">
              {this.props.products.length == 0 ? (
                <Typography variant="subtitle1" gutterBottom>
                  Şimdilik bir ürün bulunmuyor
                </Typography>
              ) : (
                <RProductsList list={this.props.products} />
              )}
            </div>
          </div>
        </CommonLayout>
      </div>
    )
  }
}
