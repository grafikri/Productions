import "./index.css"
import React from "react"
import CommonLayout from "../../organisms/RCommonLayout"
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button
} from "@material-ui/core"
import { Product, LayoutErrorProps } from "../../../store/appInterfaces"
import RProductsList from "../../organisms/RProductList"
import { withRouter, RouteComponentProps } from "react-router"

/**
 * Props değerleri
 */
interface ProductsProps extends LayoutErrorProps {
  products: Product[]
  handleSubmit(name: string): void
  handleProductClick(id: string): void
}

class RProducts extends React.Component<ProductsProps & RouteComponentProps> {
  render() {
    return (
      <div className="t-r-products">
        <CommonLayout
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        >
          <div className="container">
            <div className="formInput">
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  this.props.history.push("/add/product")
                }}
              >
                Yeni ürün ekle
              </Button>
            </div>
            <div className="products">
              {this.props.products.length == 0 ? (
                <Typography variant="subtitle1" gutterBottom>
                  Şimdilik bir ürün bulunmuyor
                </Typography>
              ) : (
                <RProductsList
                  handleClick={this.props.handleProductClick}
                  list={this.props.products}
                />
              )}
            </div>
          </div>
        </CommonLayout>
      </div>
    )
  }
}

export default withRouter(RProducts)
